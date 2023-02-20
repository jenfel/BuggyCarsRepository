# Bug Report

## Critical bugs
### Profile page is still displayed after logout
*Steps to replicate:*
1. Log in with valid credentials
2. Go to Profile page
3. Click Logout

*Expected result:* User is redirected to Home page

*Actual result:* Profile page is still displayed

### Current password is already typed in the Profile page
*Steps to replicate:*
1. Log in with valid credentials
2. Go to Profile page
3. Check if current password field

*Expected result:* Current password is not typed in

*Actual result:* current password is typed in

### Able to register while logged in
*Steps to replicate:*
1. Go to home page https://buggy.justtestit.org/
2. Click Register
3. Log in with valid credentials on top
4. Try to register with valid data

*Expected result:* Register page should not be displayed. User should not be able to register

*Actual result:* Able to register successfully while logged in
