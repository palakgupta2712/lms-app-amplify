import React, { useState } from "react";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "../aws-exports";
import { Redirect } from "react-router";

Auth.configure(awsconfig); // For NoUserPoolFound error
Amplify.configure(awsconfig); // For DataStore sync error

const initialFormState = {
  name: "",
  username: "",
  password: "",
  email: "",
  authCode: "",
  formType: "signUp",
};

function SignUp() {
  const [formState, updateFormState] = useState(initialFormState);

  const onChange = (e) => {
    e.persist();
    updateFormState(() => ({ ...formState, [e.target.name]: e.target.value }));
  };

  const { formType } = formState;
  async function signUp() {
    const { name, username, password, email } = formState;
    try {
      await Auth.signUp({ username, password, attributes: { email, name } });
      updateFormState(() => ({ ...formState, formType: "confirmSignUp" }));
    } catch (err) {
      console.log("error signing up user...", err);
    }
  }
  async function confirmSignUp() {
    const { username, authCode } = formState;
    try {
      await Auth.confirmSignUp(username, authCode);
      console.log(username, authCode);

      updateFormState(() => ({ ...formState, formType: "signIn" }));
    } catch (err) {
      console.log("error confirming up user...", err);
    }
  }
  return (
    <div>
      <h1>App</h1>
      {formType === "signUp" && (
        <div>
          <input name="name" onChange={onChange} placeholder="name" />
          <input name="username" onChange={onChange} placeholder="username" />
          <input
            name="password"
            type="password"
            onChange={onChange}
            placeholder="password"
          />
          <input name="email" onChange={onChange} placeholder="email" />
          <button onClick={signUp}>Sign Up</button>
          <p>Already signed up?</p>
          <button
            onClick={() =>
              updateFormState(() => ({
                ...formState,
                formType: "signIn",
              }))
            }
          >
            Sign In instead
          </button>
        </div>
      )}
      {formType === "signIn" && (
        <div>
          <Redirect to="/signIn" />
        </div>
      )}
      {formType === "confirmSignUp" && (
        <div>
          <input
            name="authCode"
            onChange={onChange}
            placeholder="Confirm auth code"
          />
          <button onClick={confirmSignUp}>Confirm Sign up</button>
        </div>
      )}
    </div>
  );
}
export default SignUp;
