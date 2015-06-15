# FCC Time Coordinator 

[Website](http://www.freecodecamp.com) | [Contributing](#contribution-guidelines) | [User Stories](#user-stories)

## Overview
This application is built to help members of the [Free Code Camp](http://www.freecodecamp.com) community coordinate schedules across multiple time zones.

The app will allow users to create meetings, and the availability of each invitee (relevant to their own time zone) to the meeting will be compared to find the best time to meet. The app does the work of converting between time zones for the user, making finding the best time easier, and allowing users to add availability without converting to a new time zone every time.

#### Current Team

- Blake Johnston ([@johnstonbl01](https://twitter.com/johnstonbl01)) - Project Lead
- Ashley Drake ([@al_draco](https://twitter.com/al_draco)) - Project Lead

## User Stories

#### User

- [ ] As a user, I'd like to securely log in and out of the application.
- [ ] As a user, I'd like to have a profile with my name, last name and organization (optional).
- [ ] As a user, I'd like to have an avatar/photo in my profile.
- [ ] As a user, I'd like to set my time zone in my profile.
- [ ] As a user, I'd like to set my availability in my profile.
- [ ] As a user, I'd like to edit my availability in my profile.
- [ ] As a user, I'd like to remove availability in my profile.
- [ ] As a user, I'd like to set my availabilty as recurring.
- [ ] As a user, I'd like to edit & remove recurring availability.
- [ ] As a user, I'd like to create meetings.
- [ ] As a user, I'd like to create, edit and delete the meeting subject.
- [ ] As a user, I'd like to create, edit and delete meeting information.
- [ ] As a user, I'd like to invite attendees to a meeting I've created.
- [ ] As a user, I'd like to invite attendees from an e-mail address or username.
- [ ] As a user, I'd like to add additional attendees to an existing meeting.
- [ ] As a user, I'd like to remove existing attendees on an existing meeting.
- [ ] As a user, I'd like to view availability of invited attendees.
- [ ] As a user, I'd like to edit existing meetings.
- [ ] As a user, I'd like to remove existing meetings.
- [ ] As a user, I'd like to be notified when I am invited to a meeting.
- [ ] As a user, I'd like to see upcoming meetings in ascending order, starting with the closest.
- [ ] As a user, I'd like to see previous meetings in descending order, starting with the most recent.
- [ ] As a user, I'd like for my availability to be modified when a meeting sets an official time.

#### Admin (of a meeting)
- [ ] As an admin, I'd like to officially set the meeting time for a meeting.
- [ ] As an admin, I'd like to notify team members by email of the meeting time for a meeting.
- [ ] As an admin, I'd like to officially set the meeting time for a meeting.

#### Developer

- [ ] As a developer, I'd like meetings older than 90 days to automatically be removed from the database.
- [ ] As a developer, I'd like to monitor usage of the application.

## Contribution Guidelines

This project is open source and provides multiple ways to make meaningful contributions. This application couldn't exist without the help of many contributors, and we want you to feel like you can help out and make a difference.

### Ways to Contribute

There are many ways to contribute:
- **Filing an Issue** - if you find a bug or want to request an enhancement, [file an issue](https://github.com/johnstonbl01/fccTimeCoordinatorApp/issues/new).
- **Working on Issues** - feel free to pick up [any open issue](https://github.com/johnstonbl01/fccTimeCoordinatorApp/issues) that you feel you're capable of addressing.
- **Documentation** - if you enjoy writing and want to contribute to the project, try improving [our documentation](https://github.com/johnstonbl01/fccTimeCoordinatorApp/tree/master/docs).
- **Building the Core Application** - until the application is completed, feel free to contribute to the core application by addressing one of the [user stories](#user-stories).

#### Filing an Issue

[Issues should be filed](https://github.com/johnstonbl01/fccTimeCoordinatorApp/issues/new) directly inside of the GitHub repository. File an issue if:
- You've identified a bug in the application. This means that you believe something is working incorreclty and should be fixed.
- You want to request a new feature for the application. This means that you believe something is missing and should be included.

For bug reports, please include:
- A description of the actions taken when the error or bug was found.
- What you expected the behavior to be when taking this action.
- What actually happened when this action was taken.
- If you have any interest in addressing the issue yourself.

For feature requests, please include:
- A description of the problem you want to solve.
- Your opinion on the best solution for this problem.
- If you have any interest in addressing the issue yourself.

Please include as much detail as possible to help the team address your issue. If you have a question, please feel free to reach out to any of the [team members](#current-team).

#### Working on Issues

Please feel free to begin working on any open issue in the [issue list](https://github.com/johnstonbl01/fccTimeCoordinatorApp/issues) of the GitHub repository. If the issue is still open, that means that the team plans on eventually addressing it, and any help is appreciated. Please consider:

- **Beginner issues** - If you've never contributed to the project, you may want to try one of the issues tagged with `beginner`. These issues are small and self-contained and provide good experience for new contributors.
- **Accepted issues** - Issues tagged with `accepted` will eventually be addressed by the team. Please only submit requests for accepted issues.

If you're going to work on an issue, please add a comment to that issue saying so and indicating when you think you'll be able to complete it. This helps to avoid any duplicate effort.

Examples:
- "I'll take a look at this issue over the weekend."
- "I'm going to work on this. Give me two weeks to complete it."
- "I'm looking into this and should have something in a couple days."

If someone has already committed to work on an issue, please do not work on it. If you're unable to finish work on an issue, please add a comment letting people know. Don't worry if this is the case, we appreciate all contributions.

#### Documentation

There are several ways to help with documentation, including:
- Fixing typos
- Improving the existing documentation (i.e. making it more clear or concise)
- Add new documentation for features that were missed or overlooked.

#### Core Application

If you'd like to contribute to the core application, please reach out to one of the [project leads](#current-team). We will coordinate with you and find a time where we can discuss where you can best help to contribute to the core development of the application.

### Pull Requests

If you would like to contribute to the repo, please use a GitHub pull request. Any contributions made in any other way (i.e. code snippets in issues) will not be considered. This is the quickest way to allow us to evaluate the code.

Please follow these guidelines when submitting your pull request:
- Make sure there is an open issue for the request
	- Not applicable for documentation about existing functionality.
- The pull request must have a description. This should include what was done and how you addressed the issue.
- The commit message should say "(fixes#1234)" at the end of the description if it takes care of an existing issue (1234 should be replaced with the issue number)
- The change should not cause any issues in other parts of the application. Be sure to run `npm test` to verify your changes before submitting a pull request.
- Be sure to make small, purposeful pull requests. Large pull requests with multiple changes may be closed without merging.
- All changes must have accompanying tests.
- Follow the code conventions.

### Code Conventions

TBD.

## License

FCC Time Coordinator App
Copyright (c) 2015. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.