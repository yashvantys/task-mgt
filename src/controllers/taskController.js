const Task = require('../models/Task');

module.exports = (db) => {
    const taskModel = new Task(db);

    const createTask = async (req, res) => {
        try {
            const { title, description, status } = req.body;
            const newTaskId = await taskModel.createTask(title, description, status);
            res.status(201).json({ id: newTaskId, message: 'Task created successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    };

    const updateTask = async (req, res) => {
        try {
            const { id } = req.params;
            const { title, description, status } = req.body;
            await taskModel.updateTask(id, title, description, status);
            res.status(200).json({ message: 'Task updated successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    };

    const getAllTasks = async (req, res) => {
        try {
            const { page = 1, limit = 10 } = req.query;
            const tasks = await taskModel.getAllTasks(page, limit);
            res.status(200).json({ tasks });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    };

    const getTaskById = async (req, res) => {
        try {
            const { id } = req.params;
            const task = await taskModel.getTaskById(id);
            if (!task) {
                res.status(404).json({ error: 'Task not found' });
                return;
            }
            res.status(200).json({ task });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    const deleteTask = async (req, res) => {
        try {
            const { id } = req.params;
            await taskModel.deleteTask(id);
            res.status(200).json({ message: 'Task deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    return {
        createTask,
        updateTask,
        getAllTasks,
        getTaskById,
        deleteTask
    };
};