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
      FROM entries;`
    ).then(({ rows: entries }) => {
      console.log("retrieving entries");
      return response.json(entries);
    })
      .catch(error => {
        console.log(`There was an ${error}`);
        response.status(500).send;
      });
  });


  // Create new entry
  router.post('/entries', (req, res) => {
    const { title, entry, hours, language, framework, notes, date } = req.body;
    
    console.log("Request Body: ", req.body);
    db.query(
      `INSERT INTO entries (title, entry, hours, language_id, framework_id, notes, date) VALUES ($1,$2,$3,$4,$5,$6,$7) returning *;` ,[title, entry, hours, language, framework, notes, date]
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
