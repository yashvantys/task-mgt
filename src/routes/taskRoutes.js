const { Router } = require('express');
const router = Router();

module.exports = (db) => {
    const taskController = require('../controllers/taskController')(db);

    router.post('/', taskController.createTask);
    router.get('/', taskController.getAllTasks);
    router.get('/:id', taskController.getTaskById);
    router.put('/:id', taskController.updateTask);
    router.delete('/:id', taskController.deleteTask);

    return router;
};