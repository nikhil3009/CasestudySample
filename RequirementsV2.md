<!-- @format -->

# Custom Reads Platform Specification

## Overview

Custom Reads is designed to offer a personalized reading experience to users by providing content recommendations based on their preferences. This document outlines the essential requirements for building the Custom Reads platform, emphasizing user engagement through personalized interactions.

## Objectives

- To create an intuitive and user-friendly platform that allows users to discover content tailored to their interests.
- To gather user-specific data during the signup process to enable personalized content recommendations.

## Functional Requirements

### 1. User Account Creation

- **Signup Page**: Users should be able to create a new account by providing the following information:
  - **Username**: A unique identifier for the user account.
  - **Password**: A secure password for account access.
  - **Check age of user is above or below 21**:Change the collection date of birth of user to check whether the user is above or below the age of 21 now add a checkbox to ask user whether user is above or below age of 21.
  - **Gender Identification**: Optional field for users who wish to provide this information.
  - **Favorite Genre**: A field with the placeholder "Favorite Genre (to personalize your experience)" for users to specify their content preferences.
  - The signup process must validate the uniqueness of the username and enforce password complexity requirements to ensure account security.
  - Upon successful account creation, users should be automatically logged in and redirected to their personalized content dashboard.

### 2. Signin Process

- Users must be able to sign in to their account using their username and password.
- The signin page should include options for password recovery and a link to the signup page for new users.
- Following a successful signin, the user is redirected to the personalized content dashboard.

### 3. Personalized Content Dashboard

- After signin, users should be presented with a dashboard featuring content recommendations based on their specified favorite genre and other provided preferences.
- The dashboard should offer a seamless user experience, allowing users to easily navigate through recommended content, access their account settings, and log out.

## Non-Functional Requirements

### 1. Data Protection and Security

- Implement standard security measures to protect user data, including encrypted storage of passwords and secure transmission of sensitive information over the network.
- Ensure that all personal information collected during the signup process is stored securely and used solely for the purpose of personalizing the user experience on the platform.
- User can only view the usernames of the other users.

### 2. Usability

- The platform should feature a clean, intuitive interface that is accessible to users of all ages.
- Ensure that the signup and signin processes are straightforward, with clear instructions and feedback provided to users.

### 3. Performance and Scalability

- The platform should be designed to handle a high volume of users and content recommendations efficiently, without significant delays or downtime.
- Employ scalable architecture practices to accommodate growth in user base and data volume.

## Development Timeline

- **Phase 1: Development** - Focus on implementing the core functionalities, including the signup process, signin mechanism, and personalized content dashboard. Estimated time: 6 weeks.
- **Phase 2: Testing and Launch** - Conduct thorough testing of the platform, addressing any issues identified. Prepare for and execute the platform launch. Estimated time: 2 weeks.

## Additional Notes

- The development team should prioritize the creation of a detailed project plan, breaking down the tasks required to meet the outlined requirements and setting realistic milestones.
- Regular progress reviews should be scheduled to ensure the project remains on track and to address any challenges promptly.
