import React from "react";
import { Box, Container, Divider, Link, Typography } from "@material-ui/core";

function Details() {
  return (
    <Container align="center" maxWidth="sm">
      <Box m={4}>
        <Typography variant="h4" style={{ letterSpacing: "4px" }}>
          This project is built using
        </Typography>
      </Box>
      Frontend
      <Divider />
      <Box>
        <Link href="https://reactjs.org/" target="_blank">
          <img
            src={`https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB`}
            alt="react"
            style={{ padding: "10px" }}
          />
        </Link>
        <Link
          href="https://reactrouter.com/web/guides/quick-start"
          target="_blank"
        >
          <img
            src={`https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white`}
            alt="react-router-dom"
            style={{ padding: "10px" }}
          />
        </Link>
        <Link href="https://material-ui.com/" target="_blank">
          <img
            src={`https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white`}
            alt="material-ui"
            style={{ padding: "10px" }}
          />
        </Link>
        <Box>
          Backend <Divider />
        </Box>

        <Link href="https://aws.amazon.com/" target="_blank">
          <img
            src={`https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white`}
            alt="aws"
            style={{ padding: "10px" }}
          />
        </Link>
        <Link href="https://graphql.org/" target="_blank">
          <img
            src={`https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white`}
            alt="graphql"
            style={{ padding: "10px" }}
          />
        </Link>

        <Link href="https://docs.amplify.aws/lib/" target="_blank">
          <img
            src="https://img.shields.io/badge/AWS-Amplify-FFBB05?style=for-the-badge&logo=AWS&logoColor=white"
            alt="aws-amplify"
            style={{ padding: "10px" }}
          />
        </Link>
      </Box>
      Other Tools
      <Divider />
      <Box>
        <Link href="https://www.npmjs.com/" target="_blank">
          <img
            src={`https://img.shields.io/badge/npm-20232A?style=for-the-badge&logo=npm&logoColor=white`}
            alt="npm"
            style={{ padding: "10px" }}
          />
        </Link>
        <img
          src={`https://img.shields.io/badge/Figma-ececec?style=for-the-badge&logo=figma&logoColor=black`}
          alt="figma"
          style={{ padding: "10px" }}
        />
        <img
          src={`https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white`}
          alt="vs-code"
          style={{ padding: "10px" }}
        />
      </Box>
      <Box style={{ padding: "35px" }}>
        <Typography variant="h5" style={{ letterSpacing: "2px" }}>
          {" "}
          Connect or see my other work{" "}
        </Typography>

        <Link href="mailto: palakgupta2712@gmail.com">
          <img
            src={`https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white`}
            alt="gmail"
            style={{ padding: "10px" }}
          />
        </Link>
        <Link href="https://github.com/palakgupta2712" target="_blank">
          <img
            src={`https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white`}
            alt="github"
            style={{ padding: "10px" }}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/palakgupta2712/"
          target="_blank"
        >
          <img
            src={`https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white`}
            alt="linkedin"
            style={{ padding: "10px" }}
          />
        </Link>
        <Link href="https://codepen.io/palakgupta27/" target="_blank">
          <img
            src={`https://img.shields.io/badge/Codepen-000000?style=for-the-badge&logo=codepen&logoColor=white`}
            alt="codepen"
            style={{ padding: "10px" }}
          />
        </Link>
      </Box>
    </Container>
  );
}

export default Details;
