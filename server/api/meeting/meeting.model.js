'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MeetingSchema = new Schema({
  name: String,
  description: String,
  location: String,
  // these are the initial, wider-range date/time possibilities.
  dateRangeStart: Date,
  dateRangeEnd: {type: Date, default: null},
  confirmedMeeting: {
    timeSet: {type: Boolean, default: false},
    startTime: {type: Date, default: null},
    endTime: {type: Date, default: null}
  },
  admins: [{type: Schema.Types.ObjectId, ref: 'User'}],
  invited: [{type: Schema.Types.ObjectId, ref: 'User'}],
  attendees: [{type: Schema.Types.ObjectId, ref: 'User'}],
  confirmed: [{type: Schema.Types.ObjectId, ref: 'User'}]
  // future features?
  // teams
  // messages/chat
});

module.exports = mongoose.model('Meeting', MeetingSchema);
