import React, { useState } from "react";
import styled from 'styled-components';
import axios from 'axios';

const Body = styled.div`
margin: 5%;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`

const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
width: 50%;
padding 2%;
`

const FormContent = styled.div`
border-top: 2px solid #282c34;
display: flex;
flex-direction: column;
text-align: left;
width: 100%;

`

const Button = styled.button`
margin: 5%;
width: 100px;
display: inline;
background-color: #282c34;
color: white;
padding: 5px;
border-radius: 8px;
`

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({username:'', password:''})
  const handleChange = e => {
    setCredentials(
        {
            ...credentials,
            [e.target.name]: e.target.value
        }
    );
  };

const login = e => {
    e.preventDefault();
// make a POST request to the server
// the server will "authenticate" the user based on their credentials
// If they can be authenticated the server will return a token
    axios
    .post('http://localhost:5000/api/login', credentials)
    .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        props.history.push('/bubblepage');
    })
    .catch(err => console.log(err));
};

  return (
    //build login form
    <Body>
      <h1>Welcome to the Bubble App!</h1>
      <Form onSubmit={login}>
        <h2> Login </h2>
          <FormContent>
          <p>Username</p>
            <input
                label="Username:"
                type="text"
                name="username"
                placeholder="Username"
                value={credentials.username}
                onChange={handleChange}
            />
          <p>Password</p>
            <input
                label="Password"
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
            />
          <Button>Login</Button>
          </FormContent>
          </Form>
    </Body>
  );
};

export default Login;
