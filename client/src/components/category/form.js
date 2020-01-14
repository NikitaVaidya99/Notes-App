import React from 'react'
import {Form, Label, Input, Button} from 'reactstrap'
import '../../App.css'
import {Link} from 'react-router-dom'
export default class FormCategory extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:props.name?props.name:'',
           
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
            name:this.state.name
        }

        this.props.submit(formData)
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-5 offset-md-3" align="center">
                <br/>
                <div className="box text-white">
            <h2>Create a Category</h2>
            <Form onSubmit={this.submit}>
                <Label>Category Name</Label>
                    <Input type="text" name="name" value={this.state.name} onChange={this.change} placeholder="Enter new category here"/>
                
                <br/><br/>
                <Button color="danger" type="submit">Add</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link className="btn btn-primary" to='/list'>Back</Link>
            </Form>
           
            </div>
            </div>
            </div>
        )
    }
}