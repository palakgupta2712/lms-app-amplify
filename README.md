# EduCouch - A Cloud Based Learning Management System

_EduCouch is a management system intended for educational institution for managing their educational content.  
Serverless Application using AWS Amplify, React.js, GraphQL and Datastore._

## Table of Contents

- [About this project ](#about-this-project)
- [One-Click Deployment with amplify console](#one-click-deploy-with-the-amplify-console)
- [Local Deployment](#local-deployment)
  - [Prerequisites](#prerequisites)
  - [Install and configure the Amplify CLI](#install-and-configure-the-amplify-cli)
  - [Installation](#installation)
- [Resources](#resources)

# About this project
EduCouch is a monolith application which is built on [AWS Amplify](https://docs.amplify.aws/lib/) Framework and [ReactJS](https://reactjs.org/).  
In the LMS, there will be three actors -   
1. Admin
2. Instructor
3. Learner


- From the perspective of an instructor, this LMS tool will be used to manage and support a group of learners.  
Instructors can design the materials for the course.

- From the perspective of a learner, this LMS tool provides access to the course materials provided by the instructor. 
This could be in the form of a study plan or a lecture schedule with links to materials in the syllabus.  

- From the perspective of the admin, this LMS tool allows the educational institution to manage users and content.

## Architecture Diagram

<img width="auto" alt="ArchitectureDiagram" src="https://user-images.githubusercontent.com/61227144/121209864-d63f7800-c898-11eb-9a6f-773a13e34f37.png">

## AWS Amplify Services used  
<p align="center">
<img width="auto" height="350px" alt="ArchitectureDiagram" src="https://user-images.githubusercontent.com/61227144/122998939-438bf680-d3cb-11eb-949b-f0c289e974ad.png">
</p>

Frontend
---
<a href="https://reactjs.org/">
<img
src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
alt="react"
style={{ padding: "10px" }}
/>
</a>
<a href="https://reactrouter.com/web/guides/quick-start">
<img
src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"
alt="react-router-dom"
style={{ padding: "10px" }}
/>
</a>
<a href="https://material-ui.com/">
<img
src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white"
alt="material-ui"
style={{ padding: "10px" }}
/>
</a>

Backend
---
<a href="https://aws.amazon.com/">
<img
src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white"
alt="aws"
style={{ padding: "10px" }}
/>
</a>
<a href="https://graphql.org/">
<img
src="https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white"
alt="graphql"
style={{ padding: "10px" }}
/>
</a>
<a href="https://docs.amplify.aws/lib/">
<img
src="https://img.shields.io/badge/AWS-Amplify-FFBB05?style=for-the-badge&logo=AWS&logoColor=white"
alt="aws-amplify"
style={{ padding: "10px" }}
/>
</a>  

Other Tools
---
<a href="https://www.npmjs.com/">
<img
src="https://img.shields.io/badge/npm-20232A?style=for-the-badge&logo=npm&logoColor=white"
alt="npmjs"
style={{ padding: "10px" }}
/>
</a>
<a href="https://git-scm.com/">
<img
src="https://img.shields.io/badge/git-20232A?style=for-the-badge&logo=git&logoColor=red"
alt="npmjs"
style={{ padding: "10px" }}
/>
</a>


# One-Click Deploy with the Amplify Console

Click the button to deploy this application to the Amplify console.

<p align="center">
    <a href="https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/palakgupta2712/lms-app-amplify" target="_blank">
        <img src="https://oneclick.amplifyapp.com/button.svg" alt="Deploy to Amplify Console">
    </a>
</p>

# Local Deployment

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) v12.x or later

- [npm](https://www.npmjs.com/) v5.x or later

- [git](https://git-scm.com/) v2.14.1 or later

### Install and configure the Amplify CLI

To install and configure

```
npm install -g @aws-amplify/cli

amplify configure
```

For complete instructions on how to install and configure Amplify CLI, refer [official documentation](https://docs.amplify.aws/start/getting-started/installation/q/integration/react)

### Installation

1. Clone the repo, install dependencies

   ```
   https://github.com/palakgupta2712/lms-app-amplify.git
   cd lms-app-amplify
   ```
   
   Install the dependencies using npm:
   ``` npm install ```
   
   or using yarn: 
   ``` yarn install ``` 

2. Initialize the amplify project

   ```
   amplify init
   ```

3. Deploy the services on the cloud

   ```
   amplify push
   ```

   Once all the resources are deployed to the cloud, the _`src/aws-exports.js`_ file gets created.  
   To view deployed services, go to amplify console by running the following command:- `amplify console`

4. Run the app
   ```
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Resources

- Amplify documentation: https://docs.amplify.aws
- Amplify CLI documentation: https://docs.amplify.aws/cli
- Amplify DataStore: https://docs.amplify.aws/lib/datastore/getting-started/q/platform/js
- Amplify Authentication: https://docs.amplify.aws/lib/auth/emailpassword/q/platform/js
- Custom Authentication Flow: https://docs.amplify.aws/guides/authentication/custom-auth-flow/q/platform/js

## Additional Libraries

- [material-ui](https://material-ui.com/)
- [aws-amplify](https://github.com/aws-amplify/amplify-js)
- [react-router-dom](https://reactrouter.com/web/example/basic)
- [boring-avatars](https://boringavatars.com/)
- [draft-js](https://draftjs.org/)
- [react-draft-wysiwyg](https://www.npmjs.com/package/react-draft-wysiwyg)
- [react-pdf](https://github.com/wojtekmaj/react-pdf)
- [react-player](https://www.npmjs.com/package/react-player)
- [dx-react-scheduler](https://devexpress.github.io/devextreme-reactive/react/scheduler/docs/guides/getting-started/)

## Illustrations

- [unDraw](https://undraw.co/)
- [storyset](https://storyset.com/)
