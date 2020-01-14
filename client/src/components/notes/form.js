import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {Form, Input, FormGroup, Label, Jumbotron, Button, FormText} from 'reactstrap'
import '../../App.css';
class Forms extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:props.title?props.title:'',
            body:props.body?props.body:'',
            category:props.category?props.category:'',
            categories:[]
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
            title:this.state.title,
            body:this.state.body,
            category:this.state.category

        }
        this.props.submit(formData)
    }

    render(){
        return(
            <div className="row">
               <div className="col-md-5 offset-md-3 text-white">
                   <div>
                    <Form onSubmit={this.submit}>
                        <FormGroup>
                        <Label for="title">Title</Label>
                            <Input id="title" type="text" name="title" value={this.state.title} onChange={this.change}/>
                        
                        </FormGroup>
                        <FormGroup>
                        <Label for="body">Body</Label>
                            <textarea id="body" type="text" name="body" value={this.state.body} onChange={this.change}/>
                        
                        </FormGroup>
                        <FormGroup>
                        <Label>Category</Label>
                        <select name="category" onChange={this.change}>
                            
                            <option>Select</option> 
                            {
                                this.props.categories.map((category)=>{
                                    return <option key={category._id} value={category._id}>{category.name}</option>
                                })
                            }   
                        </select>
                        </FormGroup>    
                        <br/>
                        <Button color="danger" type="submit">Submit</Button>
                        <br/><br/>
                        <Link className="btn btn-primary" to='/notes'>Back</Link>

                </Form>
                </div>
                </div>
            </div>
        )
    }
} 

const mapStateToProps=(state)=>{
return {
    categories:state.categories
}
}

export default connect(mapStateToProps)(Forms)