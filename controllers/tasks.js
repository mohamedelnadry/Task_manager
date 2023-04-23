const Task = require("../models/task");

const allTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({tasks});
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const creatTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getTaskDetail = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      res.status(404).json({ msg: `No Task with id ${taskID}` });
    }
    res.status(200).json({task});
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      res.status(404).json({ msg: `No Task with id ${taskID}` });
    }
    res.status(200).json({task});
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTaskUpdate = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      res.status(404).json({ msg: `No Task with id ${taskID}` });
    }
    res.status(200).json({task});
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
module.exports = {
  allTasks,
  creatTask,
  getTaskDetail,
  getTaskUpdate,
  deleteTask,
};
