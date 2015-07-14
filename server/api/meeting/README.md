# How to use Meetings

Meetings are the primary object that is passed around our app.


## Basic information

Meetings have a name, description, and location like so:

Name: Group Job Interview for Front End Engineer at Etsy
Description: Alice, Tim, Mary are interviewing for the position of Front End Engineer. This is the technical interview. We'll do some basic whiteboarding and ask a few technical questions.
Location: On the phone

Meetings also have time-related data associated with them, but this data is what the app is trying to coordinate. When a user creates a new meeting, they are required to at least select a date or date range for the meeting.

**Selecting just one date (i.e. one day range)**
dateRangeStart: Date object (July 25, 2015
dateRangeEnd: null

**Selecting a date range (more than one day)**
dateRangeStart: Date object (July 25, 2015)
dateRangeEnd: Date object (July 27, 2015)

Note that neither Date object is meant to reference a time, just dates. 

Selecting a date range allows participants, i.e. Alice, the other candidates, and the interviewer, to select a date that works best for them. See the readme for Users to read about availability - availability is a nested object in each User.

## How are Users associated with Meetings?

Users are associated with meetings in a one-to-many relationship. They are listed by reference, i.e. they are not a nested Object inside of a meeting but their own entity. 

Users can be admins and/or attendees of any particular meeting.

admins: [Bob, Joe]
attendees: [Alice, Tim, Bob]

A user who creates a meeting is automatically an admin. They can invite other admins.

Admins have administrative control over a meeting, can invite other participants and/or admins, set a final time, and see everyone's availability by name.

Participants of a meeting can also see availability, but only in general terms with no names attached. This is a privacy feature.

## Invitations

Users are first invited to a meeting, and are added to the 'invited' Array.

invited: [Mary, Bob, Tim, Alice, Joe]
attendees: []

After they confirm their acceptance of the invitation, they're moved to the attending category:

invited: [Tim, Joe]
attendees: [Mary, Bob, Alice]

## Setting a time

When everyone has shared their availability, the admin(s) can then set a final meeting time, which is broadcast out to all attendees. 

Attendees can then confirm that they are coming or not coming to this final set time, which would move them from 'attendees' into 'confirmed'.

timeSet: true
invited: [Tim]
attendees: [Mary]
confirmed: [Alice, Bob, Joe]

Obviously, Tim had more important things to do. His availability will not show up in the graph, since it would be silly to plan around his schedule if he's not attending.

Bob, the interviewer, also knows to check back with Mary to either figure out why she can't come, or make other arrangements.

To keep the objects light, user references will simply be moved from 'attendees' into 'confirmed' upon confirming, not duplicated. This way the Meeting object does not have double User references. 

To check who has not yet confirmed their attendance, simply use the 'attendees' property after setting a final meeting time.

Once a final meeting time is set, the meetingStart and meetingEnd fields will be populated.

meetingStart: Date object (July 25, 2015 3pm) 
meetingEnd: Date object (July 25, 2015 5pm)

Good luck, Alice!

## Cleaning Up

Once Meetings are over, the information stored is no longer relevant. An automatic database script will do the following at a regular interval:

 - delete Meetings which happened before the current Date
 - clean out Meeting object references from Users each time they log in if those Meetings are stale

