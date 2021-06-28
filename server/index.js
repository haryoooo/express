const express = require("express");
const User = require("./user/user");
const url = "mongodb://vincent:1234@localhost/toko";
const { urlencoded } = require("express");
const mongoose = require("mongoose");
const app = express(express);
const PORT = 3000;

app.use(urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});

mongoose.connect(url, () => {
  console.log("terhubung ke mongoose");
});

app.get("/users", (req, res) => {
  User.find((err, users) => {
    if (err) {
      res.status(500).send(err)
    }

    res.status(200).send(users);
  });
});

app.post("/users", (req, res) => {
  new User({
    nama: req.body.nama,
    usia: req.body.usia,
  })
    .save()
    .then(() => {
      res.json({
        status: "ok",
        message: "Data Successfully inserted"
      })
    });
});

app.put("/users/:id", (req, res) => {
  User.update({
    _id: req.params.id
  }, {
    $set: {
      nama: req.body.nama,
      usia: req.body.usia
    }
  }, () => {
    res.json({
      status: "ok"
    })
  })
})

app.delete("/users/:id", (req, res) => {
  User.remove({_id: req.params.id}, ()=>{
    res.json({
      data: "ok",
      message: "Data deleted"
    })
  })
});


// function insertData() {
//   new User({
//     nama: "kevin",
//     usia: 25,
//   })
//     .save()
//     .then((newUser) => {
//       console.log("Data masuk: " + newUser);
//     });
// }

// function selectAll() {
//   User.find((err, users) => {
//     console.log(users);
//   });
// }

// function selectDetailData() {
//   User.find({ usia: 21 }, (err, users) => {
//     console.log(users);
//   });
// }

// function deleteData() {
//   User.find({ nama: "kevin" }, (err, users) => {
//     console.log(users);
//   });
// }
