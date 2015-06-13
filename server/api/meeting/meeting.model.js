'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MeetingSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Meeting', MeetingSchema);