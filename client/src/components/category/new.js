import React from 'react'
import FormCategory from './form.js'
import {startAddCategory} from '../../actions/categories'
import { connect } from 'react-redux'

class NewCategory extends React.Component{
    constructor(props){
        super(props)
        this.state={
          name:props.name?props.name:''
        }
    }
    submit=(formData)=>{
       this.props.dispatch(startAddCategory(formData, this.props))
    }
    render(){
        return(
            <div>
               
                <FormCategory submit={this.submit}/>

            </div>
        )
    }
}
export default connect()(NewCategory)