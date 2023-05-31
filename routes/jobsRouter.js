const { Router } = require("express");
const { getJobs, getJobById, postJob, updateJobById, deleteJobById } = require('../controllers/jobController');
const { authMiddleware, isAdminUserMiddleware } = require("../middlewares/authMiddleware");
const jobsRouter = Router()

// jobsRouter.use(authMiddleware)

jobsRouter.get('/jobs', getJobs);
jobsRouter.get('/jobs/:jobId', getJobById);
jobsRouter.post('/jobs', isAdminUserMiddleware, postJob)
jobsRouter.put( '/jobs/:jobId', isAdminUserMiddleware, updateJobById)
jobsRouter.delete('/jobs/:jobId', isAdminUserMiddleware, deleteJobById)

module.exports = jobsRouter
