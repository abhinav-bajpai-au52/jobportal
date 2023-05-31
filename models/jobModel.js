const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requirements: {
        type: String,
        required: true
    },
    // company: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Company',
    //     required: true
    // },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const JobModel = mongoose.model('jobs', JobSchema);

module.exports = JobModel;
