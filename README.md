# GroupUs

**Smart, random groupings.**

Group Us generates groups from lists of people (well, really anything). Each time you generate groups, Group Us generates 10,000 random groupings and selects the one where people were previously in the same groups the least.

## Development To Do (mostly in order)

- Color BG for app
- Fix background so it is always full page height and centered info is slightly towards top instead of vertically centered
- Add log out + disconnect account options to user icon in app
- Add option to delete a section
- Add option to restore deactivated students
- Fix issue where deleting a generation changes the generation being displayed.
- Add spinner element
- Group sizing should update based on number of kids so you don't get anything funky
- Add feedback link
- Add patreon / Kofi
- Add 2D array of previous pairings
- Add animations
- Add button to show groups in "full screen mode"
- Allow import of students from other platforms

## State and Data Flow

### Atoms

NO STATE IS NEEDED ON THE LANDING PAGE

- userInfo - null if user is not logged in; check when landing on app

- saveState
- areChangesUnsaved

- listOfSections - Need the id (from DB) and their names
- listOfStudents
- listOfGenerations

- appState
  - activeSectionIndex
  - activeGenerationIndex
  - activeGroupSize
  - activeExtrasSetting

### Selectors

- combinedDataToSendToDb - Assemble the atoms into the correct form to be sent to the server
- relations - Build relational array/graph from atoms

### FLOW OF DATA

#### AUTH

##### Sign In / Sign Up

- User visits `/app` and clicks login
- Modal opens, they select a strategy
- Sign in using OAuth2
- Redirected to /app on success
- `/app` hits endpoint and gets their information

##### Sign Out

- Reset atoms to initial state
- Tell backend to sign out user and end session

##### Disconnect OAuth2

- Warn user that data will be lost
- Reset atoms to initial state
- Tell backend to sign out user, end session, and delete their data

### SECTION LIST

- When an authorized user visits `/app`, an `/data/section-list` sends a list of sections
- Should also include their first section

### GENERATIONS AND STUDENTS

- User's first section is loaded with section list

- When a different section is selected, hit `data/section/:id` and get that section's info
- Update atoms

- When a section is created, hit `data/section/:id`, add section to db, and send section info to user (all blank)

- When a section is deleted, hit `data/section/:id`, update atoms

### SAVE DATA

- Anytime a change is made, send an update to the server
- Set areChangesSaved atom to false until positive response is received
- Most recent response is the most important, since it will include all changes