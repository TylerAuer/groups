# groups

An app for randomly generating groups.

## Plan

- Implement deactivate groups
- Add color for highlighted group (fix that bug)
- Make it so you can rename sections and students
- Add section toggle + select
- Implement Google Sign On
- Implement syncing
- Push and test

## Developement Milestones

1. **Basic algorithm and UI**
   - ~~Can take list of names and a group size and generate groups~~
   - ~~Generates groups~~
   - ~~Groups generated later weight based on if people have been together before~~
   - ~~Uneven groups automatically resolve as smaller groups~~
   - ~~Displays a group in a clear way for projecting~~
   - ~~Students can be added or removed~~
2. **User Accounts**
   - Users can login (through Google)
3. **Can prevent pairings**
   - When the number of students is not divisible by the number of groups, users can set whether to make same groups 1 bigger or to make some groups 1 smaller
   - Discrete option for preventing pairings (be sure that it is still possible to make groups)
4. **Display history**
   - Show how many times students have been together in 2D array
5. **Easy importing**
   - Make it easy to import student lists from other sources
6. **Other Features**
   - Exclude a student from next grouping
   - See probabilities of students being grouped together