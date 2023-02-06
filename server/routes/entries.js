const express = require('express');
const router = express.Router();


const entriesDatabase = {
  1: {
    id: 1,
    title: "Journal entry 1",
    date: '2023-02-05',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived",
    languageId: 2,
    frameworkId: 2,
    notes: "here are some notes",
  },
  2: {
    id: 2,
    title: "Journal entry 2",
    date: '2023-02-05',
    body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    languageId: 1,
    frameworkId: 1,
    notes: "notes for days!!!!",
  },
  3: {
    id: 3,
    title: "Journal entry 3",
    date: '2023-02-05',
    body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    languageId: 4,
    frameworkId: 4,
    notes: "",
  },
};

/* GET all journal entries. */
// router.get('/', (req, res) => {
//   res.json({entriesDatabase});
// });

// module.exports = router;

module.exports = db => {
  router.get("/entries", (req, response) => {
    db.query(
      `SELECT * FROM entries;`
    ).then(({ rows: entries }) => {
      response.json(entries);
      console.log("retrieving entries");
    })
      .catch(error => {
        console.log(`There was an ${error}`);
        res.status(500).send
      });
  });


  router.post('/entries', (req, res) => {
    const { title, entry, hours, language, framework, notes } = req.body
    
    console.log("+_+++++++++++++++++++++++", req.body)
    db.query(
      `INSERT INTO entries (title,  entry, hours, language_id, framework_id, notes) VALUES ($1,$2,$3,$4,$5,$6) returning *;` ,[title, entry, hours, language, framework, notes]
    ).then(({ rows: entries }) => {
      console.log(entries, "$$$$")
      return res.status(200).json(entries);
  
    })
      .catch(error => {
        console.log(`There was an ${error}`);
        res.status(500).send
      });
  
  })
  return router;
};
