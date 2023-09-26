class Task {
    constructor(db) {
        this.db = db;
    }

    async createTask(title, description, status) {
        try {
            const [result] = await this.db.query(
                'INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)',
                [title, description, status]
            );
            return result.insertId;
        } catch (error) {
            throw error;
        }
    }

    async updateTask(id, title, description, status) {
        try {
            await this.db.query(
                'UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?',
                [title, description, status, id]
            );
        } catch (error) {
            throw error;
        }
    }

    async getAllTasks(page = 1, limit = 10) {
        try {
            const offset = (page - 1) * limit;

            const [results] = await this.db.query(
                'SELECT * FROM tasks LIMIT ?, ?',
                [offset, parseInt(limit)]
            );

            return results;
        } catch (error) {
            throw error;
        }
    }

    async getTaskById(id) {
        try {
            const [rows] = await this.db.query(
                'SELECT * FROM tasks WHERE id = ?',
                [id]
            );
            return rows;
        } catch (error) {
            throw error;
        }
    }

    async deleteTask(id) {
        try {
            const results = await this.db.query(
                'DELETE FROM tasks WHERE id = ?',
                [id]
            );
            return results;
        } catch (error) {
            throw error;
        }
    }

    async calculateTaskMetrics() {
        try {
            const [result] = await this.db.query(
                'SELECT status, COUNT(*) as count FROM tasks GROUP BY status'
            );
            const metrics = {
                open_tasks: 0,
                inprogress_tasks: 0,
                completed_tasks: 0,
            };

            result.forEach((row) => {
                if (row.status === 'open') {
                    metrics.open_tasks = row.count;
                } else if (row.status === 'inprogress') {
                    metrics.inprogress_tasks = row.count;
                } else if (row.status === 'completed') {
                    metrics.completed_tasks = row.count;
                }
            });

            return metrics;
        } catch (error) {
            throw error;
        }
    }

    async calculateTimelineMetrics() {
        try {
            const [result] = await this.db.query(
                'SELECT DATE_FORMAT(created_at, "%M %Y") AS date, status, COUNT(*) as count FROM tasks GROUP BY date, status'
            );

            const timelineMetrics = [];
            const uniqueDates = Array.from(
                new Set(result.map((row) => row.date))
            );

            uniqueDates.forEach((date) => {
                const dateMetrics = {
                    date,
                    metrics: {
                        open_tasks: 0,
                        inprogress_tasks: 0,
                        completed_tasks: 0,
                    },
                };

                result.forEach((row) => {
                    if (row.date === date) {
                        if (row.status === 'open') {
                            dateMetrics.metrics.open_tasks = row.count;
                        } else if (row.status === 'inprogress') {
                            dateMetrics.metrics.inprogress_tasks = row.count;
                        } else if (row.status === 'completed') {
                            dateMetrics.metrics.completed_tasks = row.count;
                        }
                    }
                });

                timelineMetrics.push(dateMetrics);
            });

            return timelineMetrics;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Task;