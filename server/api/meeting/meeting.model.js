'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MeetingSchema = new Schema({
  name:         String,
  description:  String,
  location:     String,
  dateRangeStart: Date,
  dateRangeEnd: {type: Date, default: null},
  timeSet:      Boolean,
  meetingStart: Date, 
  meetingEnd: Date,
  admins:       [{type: Schema.Types.ObjectID, ref: 'User'}],
  invited:      [{type: Schema.Types.ObjectID, ref: 'User'}],
  attendees:    [{type: Schema.Types.ObjectID, ref: 'User'}],
  confirmed:    [{type: Schema.Types.ObjectID, ref: 'User'}]
  // future features?
  // teams
  // messages/chat
});

module.exports = mongoose.model('Meeting', MeetingSchema);