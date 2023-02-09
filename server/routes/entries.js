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


  // Create new entry
  router.post('/entries', (req, res) => {
    const { title, entry, hours, language, framework, notes } = req.body;
    
    console.log("+_+++++++++++++++++++++++", req.body);
    db.query(
      `INSERT INTO entries (title, entry, hours, language_id, framework_id, notes) VALUES ($1,$2,$3,$4,$5,$6) returning *;` ,[title, entry, hours, language, framework, notes]
    ).then(({ rows: entries }) => {
      console.log(entries, "$$$$");
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
