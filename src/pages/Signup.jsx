import React from 'react';
import { Redirect } from 'react-router-dom';
import '../styling/App.css';
import axios from 'axios';


export default class Signup extends React.Component {

    state = {
        alert: "",
        name: "",
        username: "",
        password: "",
        cPassword: "",
        redirect: false
    }

    handleSubmit = async event => {
        event.preventDefault();
        const form = {
            inputName: this.state.name,
            inputUsername: this.state.username,
            inputPassword: this.state.password,
            confirmPassword: this.state.cPassword
        }

        await axios.post(`/signup`, form)
            .then(res => {
                let alert = [<div style={{marginLeft:7}} class="alert alert-warning" role="alert">
                    {res.data.reason}
                </div>]
                if(res.data.reason === "User account created."){
                    this.setState({redirect: true})
                }else{
                this.setState({ alert: alert[0] })
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleChange = event => {
        if (event.target.name === 'inputName') {
            this.setState({ name: event.target.value });
        } else if (event.target.name === 'inputUsername') {
            this.setState({ username: event.target.value });
        } else if (event.target.name === 'inputPassword') {
            this.setState({ password: event.target.value });
        } else {
            this.setState({ cPassword: event.target.value });
        }
    }

    render() {
        if(this.state.redirect){
            return <Redirect to="/login" />
        }
        return (
            <div className="bg form-place">
                <form className="form-signin" onSubmit={this.handleSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal" style={{marginLeft:7}}>Create Account</h1>
                    <label for="inputName" className="sr-only">Name</label>
                    <input name="inputName" onChange={this.handleChange} type="text" id="inputName" className="form-control" placeholder="Enter Name" required autofocus="" />

                    <label for="inputUsername" className="sr-only">Username</label>
                    <input name="inputUsername" onChange={this.handleChange} type="text" id="inputUsername" className="form-control" placeholder="Username" required autofocus="" />
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input name="inputPassword" onChange={this.handleChange} type="password" id="inputPassword" className="form-control" placeholder="Password" required />

                    <label for="confirmPassword" className="sr-only">Confirm Password</label>
                    <input name="confirmPassword" onChange={this.handleChange} type="password" id="inputPassword" className="form-control" placeholder="Confirm Password" required />
                    <span>{this.state.alert}</span>
                    <button className="btn btn-lg btn-warning btn-block" type="submit" style={{marginLeft:7}}>Sign up</button>
                </form>
            </div>
        )
    }
}


