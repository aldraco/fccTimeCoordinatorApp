# How to use the User object

Users are people who use our app. 

## Login and other app data

Each User has data associated with their ability to log into the app. The provided options are local login (email and password), Twitter authentication, Facebook authentication, and Google authentication.

These are pretty much handled automatically by Passport, and there is nothing we need to change or do with them.

**Never** send the user's password or login data to the client. Always return a scrubbed user object (i.e. only the relevant fields for meetings, etc) from the server.

Also note that an 'admin' role on the User object is *not* related to an admin role related to a meeting. The 'admin' role for a User object gives the ability to edit things inside the app. No users will have this role except the creators of the app. Admins of meetings are simply listed in a separate array for the meeting, their User objects are not modified.

## Personal data

Each user has a name, some contact information, and a rolodex of other Users they know:

name: Alice Jones
contact: [
    {type: 'email', info: 'alice.jones@gmail.com'},
    {type: 'skype', info: 'alicejonesonskype'},
    {type: 'telephone', info: '123-456-7890'}
  ],
rolodex: [Bob's User Id, Mary's User Id, Tim's User Id]

The rolodex is a helpful feature when finding other people to invite to meetings, as it helps the autopopulate feature on the client side find previous collaborators.

The contacts object is any information Alice wants to share with her colleagues on how to contact her. This information is separate from her login information - i.e. she might want to use her personal account, 'iloveunicorns93@sparklepony.com', for her login email, but prefers to give colleagues (and a job interviewer) her professional email address.

## Meetings

Each user can be a member of many Meeting objects. There are two kinds of meeting Arrays for each user, the invitations array and the confirmed array.

The invitations array are meetings to which the user has been invited, but they have not actually added their availability or responded positively to that invitation. 

This is a convenience for the meeting organizer to know that Alice has not yet responded to his invitation, and the availability he has on his screen may not be correct (see the section for ongoing availabilty below to find out why).

The confirmed array is the list of meetings the user has taken an action to 'confirm' that they are in fact participating in that meeting. The Meeting reference will be moved from one array to another, not duplicated, to keep the objects light.

## Availability

Each user also has their availability nested inside their User object, in a one-to-one relationship.

availability: {
  ongoing: [
  {
    dayOfWeek: 4,
    startTime: Date //3pm
    endTime: Date //4pm
  }],
  unique: [{
    date: Date, // e.g. July 25, not a time
    startTime: Date with time, // e.g. 2pm
    endTime: Date with time // e.g. 3pm
  }]
}

All times are stored as UTC, but entered in the context of the user's time zone.

Ongoing availability are times where the user is available during the same time each week - 3-4 on Thursdays, for example. Ongoing is an array of availability objects that have a day of the week (represented as an integer), a start Time and an end Time.

Unique availability are the one-off times that the user adds, usually for a particular meeting. They are similar to ongoing availability except that they use a specific Date object, not a day of the week Integer.

For example, Alice knows that she's generally available on Thursdays from 3-4 if anyone needs her. For her interview, however, she knows she'll have time this week on Thursday from 2-3 as well. She wants to add this block of time to give her interviewer another option for their meeting.

Alice would simply go to the meeting page, where she would see a general graph of everyone's availability. She can also see her own (Thursday from 3-4) provided it's within the possible date range for this particular meeting, and she can add another time from 2-3, just this week.

This is why we want Users to confirm that they've added all of their information - otherwise, the interviewer might only see one hour of free time, and think that Alice isn't taking her interview seriously.

## Cleaning up

Ongoing availability persists, but the User can edit or delete these time blocks as they wish.

Unique availability ceases to be relevant after its date has passed - for example, after Alice's interview, it doesn't matter for next week that she was available from 2-3 pm on Thursday LAST week. The database will automatically clean out that old data, to save space and make fetching Alice's information a lot faster.

## If you're wondering ...

Alice got the job! The interviewer was so impressed with her professional manner and communication skills, because she made it easy for them to find a common time to meet. Way to go, Alice!