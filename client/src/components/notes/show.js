import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import _ from 'lodash'
function ShowNote(props){  
        console.log('in show',props)
        const {title,body, category} =props.note
        return(
            <div className="text-white" align="center">
                    <h2>Title-{title}</h2>
                    <h2>Body-{body}</h2>
                    <h2>Category-{category.name}</h2>
                    <br/><br/>
                    <Link className="btn btn-primary" to='/notes'>Back</Link>
            </div>
        )
    
} 
const mapStateToProps=(state,props)=>{
    console.log('in maps', props.match.params.id)
    return {
        note:state.notes.find(n=>n._id==props.match.params.id),
        categories:state.categories
    }
}

export default connect(mapStateToProps)(ShowNote)