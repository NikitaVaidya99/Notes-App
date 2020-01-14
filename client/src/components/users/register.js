import React from 'react'
import {startSetUser} from '../../actions/user' 
import {connect} from 'react-redux'
import { Button, Form, FormGroup, Label, Input, FormText, Jumbotron } from 'reactstrap';

class Register extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            email:'',
            password:''
        }
    }
    change=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submit=(e)=>{
        e.preventDefault()
        const formData={
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        this.props.dispatch(startSetUser(formData, this.props))

    }
render(){
    return(
        <div className="row">
            <div className="col-md-6 offset-md-3 text-white">
            <br/>
            <Jumbotron style={{"background-color":"rgba(0,0,0,0.5)"}} >  
            <h2 className="text-center"><u>Register</u></h2>
            <Form align="center" onSubmit={this.submit}>
                <FormGroup>
                <Label>username
                <Input type='text' name="username" value={this.state.username}  onChange={this.change} placeholder="Enter Your Username!"/>
                </Label>
                </FormGroup>
                <FormGroup>
                <Label>email
                <Input type='text' name="email" value={this.state.email}  onChange={this.change} placeholder="Enter Your Email!"/>
                </Label>
                </FormGroup>

                <FormGroup>
                <Label>password
                <Input type='password' name="password" value={this.state.password}  onChange={this.change} placeholder="Enter Your Password!"/>
                </Label>
                </FormGroup>

                <FormGroup>
                <Label>
                    <Input className="btn btn-danger" type="submit"/>
                </Label>
                </FormGroup>
            </Form>
            </Jumbotron>
            </div>
            
        </div>
    )
}
}

export default connect()(Register)