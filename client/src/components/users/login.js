import React from 'react'
import {startLoginUser} from '../../actions/user'
import { Button, Form, FormGroup, Label, Input, FormText, Jumbotron } from 'reactstrap';
import {connect} from 'react-redux'
class Login extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }
    submit=(e)=>{
        e.preventDefault()
        const formData={
            email:this.state.email,
            password:this.state.password
        }
        this.props.dispatch(startLoginUser(formData, this.props))

    }
    change=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-6 offset-md-3 text-white">
                <br/>
                <Jumbotron style={{"backgroundColor":"rgba(0,0,0,0.5)"}} >
                   
                <h2 className="text-center"><u>Login</u></h2>
               <Form align="center" onSubmit={this.submit}>
                   <FormGroup>
               <Label for="email">Email
                    <Input id="email" type="text" name="email" value={this.state.email} onChange={this.change} placeholder="Enter Your Email!"/>
                </Label><br/><br/>
                </FormGroup>
                <FormGroup>
                <Label for="password">Password
                    <Input id="password" type="password" name="password" value={this.state.password} onChange={this.change} placeholder="Enter Your Password!"/>
                </Label><br/><br/>
                <Button color="danger">Submit</Button>
                </FormGroup>
                </Form>
                </Jumbotron>
            </div>
            </div>
        )
    }
}

export default connect()(Login)

