const Joi = require('joi');
const uuidRegEx = require('./base');

const Lecture = Joi.object({
    _id: Joi.string().pattern(uuidRegEx('lecture')).required(),
    lectureDescription:  Joi.string().optional(),
    lectureType:  Joi.string().optional(),
    startTime: Joi.date().iso().required(),
    attendanceBy: Joi.string().valid().required(),
    classID: Joi.string().required(),
    lectureDoubt: Joi.array().items(Joi.object({
        userID: Joi.string().required(),
        timeStamp: Joi.date().iso().required(),
        content: Joi.string().required(),
        reply: Joi.array().items({
            userID: Joi.string().required(),
            timeStamp: Joi.date().iso().required(),
            content: Joi.string().required(),
            isDeleted: Joi.boolean().required().default(false)
        }),
        isDeleted: Joi.boolean().required().default(false)
    }))
});

module.export = Lecture;
