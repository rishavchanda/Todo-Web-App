import React from "react"
import TodoList from "./components/TodoList"
import $ from 'jquery';
import Popper from 'popper.js';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports'
import {AmplifyAuthenticator} from '@aws-amplify/ui-react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

Amplify.configure(awsconfig)

function App() {
  return (
    <>
     <AmplifyAuthenticator usernameAlias="email">
     <TodoList/>
     </AmplifyAuthenticator>
     
    </>
  );
}

export default App;
