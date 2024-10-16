import express from "express";
import cors from "cors";
import sqlite from "sqlite3";

const app = express();
app.use(cors());
app.use(express.json());
const port = 8080;

// il sufit de passer la base de donnée en file pour serialiser sur le disque
const db = new sqlite.Database(":memory:");

db.serialize(() => {
  db.run(
    "CREATE TABLE post (type TEXT, name TEXT, up_count INT, down_count INT, link TEXT, description TEXT, related_user TEXT, verified_source TEXT)"
  );

  const stmt = db.prepare("INSERT INTO post VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
  for (let i = 0; i < 10; i++) {
    stmt.run(
      "harassment",
      "Je me fais harcellé ha l'aid svp",
      15,
      1,
      "http://twitter.com",
      "On me traite de nom d'oiseux",
      "MacronDémission",
      null
    );
  }
  for (let i = 0; i < 10; i++) {
    stmt.run(
      "fakenews",
      "Macron démissionne",
      14,
      3,
      "http://twitter.com",
      "Non, Monsieur le président ne démissionne pas.",
      "ChaudPatate",
      "http://gouv.fr"
    );
  }
  stmt.finalize();

  db.each(
    "SELECT rowid AS id, type, name, up_count, down_count, link, description, related_user, verified_source FROM post",
    (err, row) => {
      console.log(
        row.id + ": " + row.type,
        row.name,
        row.up_count,
        row.down_count,
        row.link,
        row.description,
        row.related_user,
        row.verified_source
      );
    }
  );
});

app.get("/posts", (req, res) => {
  db.all("SELECT * FROM post", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.post("/posts", (req, res) => {
  const {
    type,
    name,
    up_count,
    down_count,
    link,
    description,
    related_user,
    verified_source,
  } = req.body;
  console.log("Request body:", req.body);
  const stmt = db.prepare(
    "INSERT INTO post (type, name, up_count, down_count, link, description, related_user, verified_source) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
  );
  stmt.run(
    type,
    name,
    up_count,
    down_count,
    link,
    description,
    related_user,
    verified_source,
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      console.log("Post added successfully", this.lastID);
      res.json({ message: "Post added successfully", id: this.lastID });
    }
  );
  stmt.finalize();
});

app.get("/posts/harassments", (req, res) => {
  db.all("SELECT * FROM post WHERE type = 'harassment'", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.get("/posts/fakenews", (req, res) => {
  db.all("SELECT * FROM post WHERE type = 'fakenews'", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.post("/posts/:id/upvote", (req, res) => {
  const id = req.params.id;
  db.run(
    "UPDATE post SET up_count = up_count + 1 WHERE rowid = ?",
    id,
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: "Upvote successful", changes: this.changes });
    }
  );
});

app.post("/posts/:id/downvote", (req, res) => {
  const id = req.params.id;
  db.run(
    "UPDATE post SET down_count = down_count + 1 WHERE rowid = ?",
    id,
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: "Downvote successful", changes: this.changes });
    }
  );
});

app.listen(port, () => {
  console.log(`CleanFeed server listening on port ${port}`);
});
