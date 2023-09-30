const express = require("express");
const PORT = 3001;
const taskData = require("/tasks.json");

const app = express();

app.listen(PORT, (error) => {
  if (error) console.log("Something went wrong while server is starting!");
  else console.log("Server is running on port 3001");
});

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/tasks", (req, res) => {
  res.status(200).json(taskData);
});

app.get("/tasks/;taskId", (req, res) => {
  let airtribeTask = taskData.airtribe;
  let taskIdPassed = req.params.taskId;
  let filteredTask = airtribeTask.filter((val) => val.taskId == taskIdPassed);
  if (filteredTask.length == 0)
    return res.status(404).send("No appropriate task found with this id");
  res.status(200).json(filteredTask);
});

pp.get("/tasks", (req, res) => {
  const taskProvidedDetails = req.body;
  let writePath = path.join(__dirname, "..", "tasks.json");
  if (validator.validateTaskInfo(taskProvidedDetails).status == true)
    taskDetailsModified.airtribe.push(taskProvidedDetails);
  res.status(200).json(taskData);
});
