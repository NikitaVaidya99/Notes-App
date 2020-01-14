import React from 'react'
import Forms from './form.js'

import { connect } from 'react-redux'
import {startEditNote} from '../../actions/notes'
import _ from 'lodash'

class Edit extends React.Component{
    submit=(formData)=>{
        this.props.dispatch(startEditNote(formData, this.props))
}
    render(){
        return(
            <div> 
                { (!_.isEmpty(this.props.note)) &&
                   Object.keys(this.props.note).length!==0 && <Forms {...this.props.note} submit={this.submit}/>
                }
                
            </div>
        )
    }
} 

const mapStateToProps=(state, props)=>{
    return {
        note:state.notes.find(n=>n._id==props.match.params.id)
    }
}
export default connect(mapStateToProps)(Edit)