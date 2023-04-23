const express = require('express');
const router = express.Router()
const { allTasks, creatTask, getTaskDetail, getTaskUpdate, deleteTask } = require('../controllers/tasks.js')

router.route('/').get(allTasks).post(creatTask)
router.route('/:id').get(getTaskDetail).patch(getTaskUpdate).delete(deleteTask)


module.exports = router