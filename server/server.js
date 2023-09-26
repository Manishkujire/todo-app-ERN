const express = require("express");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const pool = require("./Database").pool;
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
app.use(express.json());
app.use(
  cors({
    origin: ["https://manishpoojary.great-site.net/todo","http://localhost:3000","https://manishpoojary.great-site.net/todo"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);
app.use(cookieParser());
// app.use(
//   session({
//     secret: "secret",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       secure: false,
//       maxAge: 1000 * 60 * 60 * 24,
//     },
//   })
// );
// app.get("/", async (req, res) => {

//   console.log(req.session);
//   if (req.session.username) {
//     console.log("in")
//     res.send({ authorized: true, username: req.session.username });
//   } else {
//     console.log("out")
//     res.send({ authorized: false });
//   }
// });
app.get("/tasks", async (req, res) => {
  try {

    pool.query(
      `SELECT * from tasks`,
      (error, data) => {
        if (error) {
          res.send({ error: "Something went wrong" })
        }
        if (data.length > 0) {
          res.send({ tasks: data })
        } else res.send({ tasks: [] });
      }
    );
  } catch {
    res.send({ error: "Something went wrong" })
  }
});
app.delete("/tasks", async (req, res) => {

  console.log(req.body);
  try {

    pool.query(
      `delete from tasks where id=?`, req.body.id,
      (error, data) => {
        if (error) {
          res.send({ error: "Something went wrong" })
        }
        else {
          pool.query(
            `SELECT * from tasks`,
            (error, data) => {
              res.send({ tasks: data, message: "TO-DO Deleted" });
            })
        }
      }
    );
  } catch {
    res.send({ error: "Something went wrong" })
  }
})
app.put("/tasks", async (req, res) => {

  console.log(req.body);
  let id = req.body.id

  try {
    pool.query(
      `UPDATE tasks SET completed=NOT completed where id=?`, [id],
      (error, data) => {
        if (error) {
          res.send({ error: "Something went wrong" })
          res.send({ error: "Something went wrong" })
        }
        else {
          pool.query(
            `SELECT * from tasks`,
            (error, data) => {
              res.send({ tasks: data, message: "To-Do Updated" });
            })
        }
      }
    );
  } catch {
    res.send({ error: "Something went wrong" })
  }
})

app.post("/tasks", async (req, res) => {

  console.log(req.body);
  let name = req.body.inputs.title
  let disc = req.body.inputs.disc
  console.log(disc);

  let date = req.body.inputs.date
  try {

    pool.query(
      `insert into tasks(name,discription,date) values(?,?,?)`, [name, disc, date],
      (error, data) => {
        if (error) {
          res.send({ error: "Something went wrong" })
        }
        else {
          pool.query(
            `SELECT * from tasks`,
            (error, data) => {
              res.send({ tasks: data, message: "To-Do Inserted" });
            })
        }
      }
    );
  } catch {
    res.send({ error: "Something went wrong" })
  }
})











app.listen(5000, () => {
  console.log("server started");
});


