import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import '../../App.css';

class ShowCategory extends React.Component{
    render(){
        return(
            <div  className="box text-white">
              
                {(this.props.category) &&<h2 align="center">Category- {this.props.category.name}</h2>}
    {
        (Object.keys(this.props.category).length!==0) &&  <div align="center">
            <h2>Notes with {this.props.category.name} category</h2>
            
             {
                 this.props.notes.map((note)=>{
                     return(
                         <h4>{note.title}</h4>
                      
                     )
                 })
                 
            }
              <Link className="btn btn-primary" to='/list'>Back</Link>

        </div>
    }
    
            </div>
        )
    }
}
const mapStateToProps=(state, props)=>{
    return {
        notes:state.notes.filter((note)=>{
            return note.category._id==props.match.params.id
        }),
        category:state.categories.find(c=>c._id==props.match.params.id)
    }
}

export default connect(mapStateToProps)(ShowCategory)