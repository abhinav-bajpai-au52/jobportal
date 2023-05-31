const JobModel = require("../models/jobModel")


const getJobs = async (request, response) => {
    const { title, description, reuirements, company } = request.query

    const conditions = {}
  
    if (title) {
      conditions.title = title
    }
  
    if (description) {
      conditions.description = description
    }
  
    if (company) {
      conditions.conditions = company
    }
  
    try {
      const jobs = await JobModel.find(conditions)
      response.send({ status: 'success', jobs })
    } catch (error) {
      console.log("Error fetching jobs from DB")
      response.status(500).send({ status: 'error', msg: 'Error fetching jobs from DB' })
    }
  }
  
const getJobById = (request, response) => {

}
const postJob = async (request, response) => {
    const JobData = request.body

    //Validations 20 lines
    try {
      const jobs = await JobModel.create(JobData)
      response.status(201).send({ status: 'success', msg: 'Job added successfully', jobs })
    } catch (error) {
      console.log(error)
      response.status(500).send({ status: 'error', msg: 'Error adding job', error: error.errors })
    }
  }
  


const updateJobById = (request, response) => {

}
const deleteJobById = (request, response) => {

}


module.exports ={
    getJobs,
    getJobById,
    postJob,
    updateJobById,
    deleteJobById
}