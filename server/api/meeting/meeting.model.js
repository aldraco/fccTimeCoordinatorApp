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

// can we put cron jobs here?
// clean out old meetings
/*var Meeting = require('api/meeting/meeting.model.js');

// look for meetings whose start dates are more than a month old
// meeting.dateRangeStart (Date) < (a month ago) today - (30 * 24 * 60 * 60 * 1000)
var oneMonthAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
Meeting.find({
  dateRangeStart: {$lt: oneMonthAgo}
}).remove(function(err, docs) {
  console.log(docs);
});*/