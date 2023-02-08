const express = require('express');
const router = express.Router();

module.exports = db => {

  // Get all entries
  router.get("/entries", (req, response) => {
    db.query(
      `SELECT 
        id, 
        title, 
        to_char(date,'YYYY-MM-DD') AS date
      FROM entries
      order by date desc;`
    ).then(({ rows: entries }) => {
      console.log("retrieving entries");
      return response.json(entries);
    })
      .catch(error => {
        console.log(`There was an ${error}`);
        response.status(500).send;
      });
  });

// Get specific entry
router.get("/entries/:id", (request, response) => {
  db.query(`SELECT 
        id, 
        title, 
        to_char(date,'YYYY-MM-DD') AS date,
        entry,
        hours, 
        language_id, 
        framework_id, 
        notes
        FROM entries WHERE id = $1::integer`, [
    request.params.id
  ]).then(({ rows: entries }) => {
    console.log("retrieving entry");
    return response.json(entries);
  })
    .catch(error => {
      console.log(`There was an ${error}`);
      response.status(500).send;
    });
});

// Update specific entry
router.put("/entries/:id", (request, response) => {
  const { title, date, entry, hours, language, framework, notes } = request.body;
  db.query(`UPDATE entries SET title=$2, date=$3, entry=$4, hours=$5, language_id=$6, framework_id=$7, notes=$8  WHERE id = $1::integer`, [
    request.params.id, title, date, entry, hours, language, framework, notes
  ]).then(({ rows: entries }) => {
    console.log("updated entry");
    return response.json(entries);
  })
    .catch(error => {
      console.log(`There was an ${error}`);
      response.status(500).send;
    });
});

  // Create new entry
  router.post('/entries', (req, res) => {
    const { title, date, entry, hours, language, framework, notes } = req.body;
    
    console.log( req.body);
    db.query(
      `INSERT INTO entries (title, date, entry, hours, language_id, framework_id, notes) VALUES ($1,$2,$3,$4,$5,$6,$7) returning *;` ,[title, date, entry, hours, language, framework, notes]
    ).then(({ rows: entries }) => {
      console.log(entries);
      return res.status(200).json(entries);
  
    })
      .catch(error => {
        console.log(`There was an ${error}`);
        res.status(500).send;
      });
  
  });

  // Delete entry
  router.delete("/entries/:id", (request, response) => {
    db.query(`DELETE FROM entries WHERE id = $1::integer RETURNING *;`, [
      request.params.id
    ]).then(({ rows: entries }) => {
      console.log("retrieving entries");
      return response.json(entries);
    })
      .catch(error => {
        console.log(`There was an ${error}`);
        response.status(500).send;
      });
  });

  
  return router;
};
