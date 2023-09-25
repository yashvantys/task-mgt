const { json } = require('body-parser');
const db = require('./src/database/dbConfig')
const express = require('express')

const app = express()

// Middleware
app.use(json());
const PORT = process.env.PORT || 3000

// Routes
const taskRoutes = require('./src/routes/taskRoutes')(db);
const metricsRoutes = require('./src/routes/metricsRoutes')(db);

app.use('/api/tasks', taskRoutes);
app.use('/api/metrics', metricsRoutes);

// Start server
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app;