import React from 'react'
import Forms from './form.js'
import {connect} from 'react-redux'
import {Alert} from 'reactstrap'
import '../../App.css'
import {startAddNote} from '../../actions/notes'
function NewNote(props){
        const submit=(formData)=>{
            
           props.dispatch(startAddNote(formData, props))
    }
        return(
            <div> 
                <br/>
                <Alert color="danger">Note: Create Categories first!</Alert>
                <Forms submit={submit}/>
            </div>
        )
    }

export default connect()(NewNote)