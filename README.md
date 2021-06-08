# Cloud Based Learning Management System

_A cloud-based learning management system is a management system intended for educational institution for managing their educational content.  
Serverless Application using AWS Amplify, React.js, GraphQL and Datastore._

## Table of Contents

- [About this project ](#about-this-project)
- [One-Click Deployment with amplify console](#one-click-deploy-with-the-amplify-console)
- [Local Deployment](#local-deployment)
  - [Prerequisites](#prerequisites)
  - [Install and configure the Amplify CLI](#install-and-configure-the-amplify-cli)
  - [Installation](#installation)
- [Resources](#resources)

## About this project

### Architecture Diagram

<img width="auto" alt="ArchitectureDiagram" src="https://user-images.githubusercontent.com/61227144/121209864-d63f7800-c898-11eb-9a6f-773a13e34f37.png">

## One-Click Deploy with the Amplify Console

Click the button to deploy this application to the Amplify console.

<p align="center">
    <a href="https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/palakgupta2712/lms-app-amplify" target="_blank">
        <img src="https://oneclick.amplifyapp.com/button.svg" alt="Deploy to Amplify Console">
    </a>
</p>

## Local Deployment

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
   npm install
   ```

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

## Resources

- Amplify documentation: https://docs.amplify.aws
- Amplify CLI documentation: https://docs.amplify.aws/cli
- Amplify DataStore: https://docs.amplify.aws/lib/datastore/getting-started/q/platform/js
- Amplify Authentication: https://docs.amplify.aws/lib/auth/emailpassword/q/platform/js
- Custom Authentication Flow: https://docs.amplify.aws/guides/authentication/custom-auth-flow/q/platform/js
