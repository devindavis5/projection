# Projection
So you see it coming.

### Video Demo:
 [Projection Demo](https://www.youtube.com/watch?v=AMdfaopW4YY)

### App Description:
Projection is a project organizer and task planner for project managers, also providing a team management tool to delegate tasks.

<!-- ## Models & Relationships

### User | Project | ProjectTask | TeamMemberProjectTask | TeamMember | DailyTask  

<br/>

### User <br />
* Has Many Projects
* Has Many ProjectTasks, Through Projects
* Has Many TeamMembers

### Project
* Belongs To User
* Has Many ProjectTasks
* Has Many Contacts

### Contact
* Belongs To Project

### ProjectTask
* Belongs To Project
* Has Many TeamMemberProjectTasks
* Has Many TeamMembers, through TeamMemberProjectTasks

### TeamMemberProjectTask
* Belongs To ProjectTask
* Belongs To TeamMember

### TeamMember
* Belongs To User
* Has Many TeamMemberProjectTasks
* Has Many ProjectTasks, through TeamMemberProjectTasks

### DailyTask
* Belongs To User

#

## SQL Database Table Properties

### User Table Properties
* Name
* Email
* Password
* Image

### Project Table Properties 
* Name
* Deadline
* Notes

### Contact Table Properties
* Name
* Email
* Phone
* Notes
* ProjectID (Foreign ID)

### ProjectTask Table Properties
* Name
* Importance
* Deadline
* Description
* Status
* ProjectID (Foreign Key)

### TeamMemberProjectTask Table Properties
* ProjectTaskID (ForeignID)
* TeamMemberID (ForeignID)

### TeamMember Table Properties
* Name
* Image
* UserID (Foreign Key)

### DailyTask Table Properties
* Description
* Deadline
* Status
* UserID (Foreign Key)

#

## Component Hierarchy
* App - Routes

* HomePAGE
    * Login
    * SignUp

* LandingPAGE
    * NavBar
        * Logo
        * Profile
            * Show Panel
        * Logout
    * Project Cards
    * Daily Tasks
        Overdue Tasks, Stretch Tasks
    * Team Members

* ProjectPAGE / Stretch Goal Modal Added to Home
    * NavBar
        * Logo
        * Back
        * Profile
            * Show Panel
        * Logout
    * Expanded Project Card
    * Graph?

#

## Functionality
* Full CRUD basically everywhere
* Common sense layout - Easy to learn 
* Projects in cards on left, expandable
    * Tasks (sorted by deadline)
        * Will have exclamation mark if marked as priority or deadline approaching. If assigned to partner it will show partner icon in small, clickable circle.
        * Can marked as complete and moves to completed tasks section of project
    * Key project contacts (outside of team)
    * Team members associated with project
        * Recent  tasks completed for that team member
        * Tasks that have been assigned to team member
    * Completed tasks
* Daily tasks on right
    * Card under tasks showing overdue tasks
    * Another card showing stretch tasks
* Everything can be easily and cleanly changed
* Cards and page segmentation will be clean and make sense
* Graph for deadline visuals
* Team shown at bottom of screen
    * Team Member portrait can be clicked showing small window with all tasks assigned to that Team Member and recent tasks completed
* Navbar on side or top with user profile and logout
* User Login & Authentication with Token
* User Validations and Authorization

#

## Stretch Goals
* Alternate page with graphs
* Team member option, when clicked changes from project manager mode to team member mode with simpler layout of tasks assigned to that team member. This could be an option at sign up to choose one.

#

## Schedule
* Wed, Nov 18 - Back & Front-end Set Up, Begin Auth|Redux 
* Thur, Nov 19 - Auth & Redux Set Up
* Fri, Nov 20 - Components Up & Dynamically Rendering Data
* Sat-Sun - Template Setup, Data Rendered in Cards
* Mon, Nov 23 - Crud Operational for MVP Components
* Tue, Nov 24 - Style
* Wed, Nov 25 - MVP
* Thur-Tues - Style, Add Features, Style
* Wed, Dec 2 - DONE!
 -->

<!-- ## Related Information
<br/>

### Video Demo:
 [Video Demo Link](https://video.com/blahblahblah)

### Difficulties/Things Learned:
* Implementing JWT Authorization upon User login
* Passing state through props
* Accessing/changing deeply nested components

### Changes/Modifications/Additions:
* Add more lessons to database (everything is rendered dynamically to support growth)
* Add quiz feature at end of each lesson, record User scores
* Add visuals to topic show pages such as diagrams and interactive learning tools

### Highlights
* Popout Avatar selection feature
* Homepage & Login Aesthetic
* Accordion Feature for SubCategories -->
