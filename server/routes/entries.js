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

  //Get specific entry for ViewEntry page
  router.get("/viewentry/:id", (req, response) => {
    console.log("LOOK HERE")
    db.query(
      `SELECT
      entries.id, 
      entries.title, 
      to_char(date,'YYYY-MM-DD') AS date,
      entries.entry,
      entries.hours, 
      entries.notes,
      frameworks.name as framework_name,
      languages.name as language_name
      FROM entries
      INNER JOIN frameworks on framework_id = frameworks.id
      INNER JOIN languages on language_id = languages.id
      WHERE entries.id = $1;
      ;`, [req.params.id]
    ).then(({ rows: entries }) => {
      console.log("retrieving specific entry", entries);
      return response.json(entries[0]);
    })
      .catch(error => {
        console.log(`There was an ${error}`);
        response.status(500).send();
      });
  });

// Get sum of  entries, Get total languages, Get amount of distinct languages, 
router.get("/stats", (req, response) => {
  Promise.all([
    db.query(`SELECT 
    SUM(hours) 
    FROM entries`),
    db.query(`SELECT
        DISTINCT language_id,
        languages.name as language_name
        FROM entries 
        INNER JOIN languages on language_id = languages.id;`),
    db.query(`SELECT
        language_id, count(*) as language_amount,
        languages.name as language_name
        FROM entries   
        INNER JOIN languages on language_id = languages.id
        Group by language_name, language_id; `
    )
  ])
    .then((results) => {
      console.log(results[0].rows[0].sum, results[1].rows, results[2].rows)
      response.send({
        hours: results[0].rows[0].sum,
        languages: results[1].rows,
        distinctLanguage: results[2].rows
      });
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

  // Update existing entry
  router.put('/entries/:id', (req, res) => {
    const { title, entry, hours, language, framework, notes, date } = req.body;
    
    db.query(
      `UPDATE entries
       SET
       title = $1, 
       entry = $2, 
       hours = $3, 
       language_id = $4, 
       framework_id = $5, 
       notes = $6, 
       date = $7
       WHERE id = $8;` ,[title, entry, hours, language, framework, notes, date, req.params.id]
    ).then(({ rows: entries }) => {
      console.log(entries);
      return res.status(200).json(entries);
  
    })
      .catch(error => {
        console.log(`There was an ${error}`);
        res.status(500).send;
      });
  });

  // Create new entry
  router.post('/entries', (req, res) => {
    const { title, entry, hours, language, framework, notes, date } = req.body;
    
    console.log("Request Body: ", req.body);
    db.query(
      `INSERT INTO entries (title, entry, hours, language_id, framework_id, notes, date) VALUES ($1,$2,$3,$4,$5,$6,$7) returning *;` ,[title, entry, hours, language, framework, notes, date]
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
