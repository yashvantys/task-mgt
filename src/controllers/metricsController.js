const Task = require('../models/Task');

module.exports = (db) => {
    const taskModel = new Task(db);

    const getTaskMetrics = async (req, res) => {
        try {
            // Calculate task metrics
            const taskMetrics = await taskModel.calculateTaskMetrics();

            // Calculate timeline metrics (monthly)
            const timelineMetrics = await taskModel.calculateTimelineMetrics();

            res.status(200).json({ taskMetrics, timelineMetrics });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    };

    return {
        getTaskMetrics,
    };
};