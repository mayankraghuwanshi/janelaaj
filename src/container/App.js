import React, { Component } from 'react';
import '../assets/App.css';
import DocVerificationForm from "../components/DocVerificationForm";
import axios from 'axios'
//redux setup

import store from '../store'
import {Provider} from "react-redux";




class App extends Component {
     constructor(){
         super()
         this.state = {
             data : null,
             error : null
         }
     }
     componentWillMount() {
         this.getData()
     }

    getData(){
         const data = {
             docemailormobile : "sambit95@gmail.com",
             role : "DOC"
         }
         //axios.post('http://35.200.243.43:3000/verifyalldoctorinformation' ,data ).then(res=>this.setState({data:res})).catch((err)=>this.setState(({error:err.message})))
     }

  render() {
    return (
        <Provider store={store}>
            <DocVerificationForm/>
        </Provider>
    );
  }
}

export default App;
