const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const model = require("./userModel");
const modelBlog = require("./blogModel");
const jwt = require("jsonwebtoken");
const connectDB = require("./db");
const path = require("path");
app.use(cors());
app.use(express.json());
connectDB();

let currAccount;

app.post("/", async (req, res) => {
  let myData = await model.find({});
  if (myData) {
    myData.forEach((list) => {
      list.active = false;
    });
    await myData.save();
  }
  res.status(200).json({ status: "Data is getting fetched from backend" });
});

app.post("/registerUser", async (req, res) => {
  const filteredData = await model.findOne({ email: req.body.email });
  if (!filteredData) {
    const myData = new model(req.body);
    myData.active = true;
    await myData.save();
    currAccount = myData;
    return res.status(200).json({ status: "OK" });
  } else {
    return res.status(200).json({ status: "error" });
  }
});

app.post("/login", async (req, res) => {
  const findData = await model.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (findData) {
    findData.active = true;
    await findData.save();
    currAccount = findData;
    const token = jwt.sign({ email: findData.email }, "secret123");
    return res.json({ status: "success", user: token });
  } else {
    return res.json({ status: "error" });
  }
});

app.get("/complaintInfoDisplay", async (req, res) => {
  if (currAccount && currAccount.active) {
    const userData = await model.findOne({ email: currAccount.email });
    res.status(200).json(userData);
  } else {
    res.status(200).json({ status: "error" });
  }
});

app.post("/complaintInfo", async (req, res) => {
  const myDataBlog = new modelBlog({ complaint: req.body.complaint });
  await myDataBlog.save();
  const userData = await model.findOne({ email: req.body.email });
  userData.complaintArray.push({
    dateComplaint: "4/9/2022",
    complaint: req.body.complaint,
    status: "Pending",
  });
  await userData.save();

  res.status(200).json({ status: "success" });
});

app.post("/signOut", async (req, res) => {
  const myData = await model.findOne({ email: currAccount.email });
  myData.active = false;
  await myData.save();
  return res.status(200).json({ status: "success" });
});
app.post("/travel", async (req, res) => {
  if (currAccount) {
    const myData = await model.findOne({ email: currAccount.email });
    if (!myData.travelArray.booked) {
      myData.travelArray.transport = req.body.transport;
      myData.travelArray.destination = req.body.destination;
      myData.travelArray.booked = true;
      await myData.save();
      return res.status(200).json({
        status: "Not Booked",
        fName: myData.fname,
        transport: myData.travelArray.transport,
        destination: myData.travelArray.destination,
      });
    } else {
      return res.status(200).json({
        status: "Already Booked",
        fName: myData.fname,
        transport: myData.travelArray.transport,
        destination: myData.travelArray.destination,
      });
    }
  } else {
    return res.status(200).json({ status: "error" });
  }
});
app.post("/travelEdit", async (req, res) => {
  if (currAccount) {
    const myData = await model.findOne({
      email: currAccount.email,
    });

    const { transport, destination } = req.body;
    myData.travelArray = { transport, destination };
    myData.travelArray.booked = true;
    await myData.save();
    return res.status(200).json(myData);
  } else {
    return res.status(200).json({ status: "error" });
  }
});
// ---------------- deployment ------------------

__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

// ---------------- deployment ------------------
app.listen(5000, () => {
  console.log("listening on port 5000");
});
