'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose')),
    Schema = mongoose.Schema;

var SyllabusSchema = new Schema({
    academy: String,
    title: String,
    education: String,
    lecturer: String,
    objectives: String,
    iconurl: String,
    year: Number,
    owner: {
        type: Schema.ObjectId, // in the tutorial only Schema.ObjectId was mentioned.
        ref: 'User'
    },
    weekplans: [{
        week: Number,
        summary: String,
        topics: String,
        literature: String,
        videos: String,
        assignments: String,
        teaser: String
    }]
});

export default mongoose.model('Syllabus', SyllabusSchema);
