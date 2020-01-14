import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startRemoveNotes} from '../../actions/notes'
import swal from 'sweetalert'

class NotesList extends React.Component{
    delete=(id)=>{
        this.props.dispatch(startRemoveNotes(id))
     }
    render(){
        return(
            <div className="row">
                <div className="col-md-6 text-white">
                   
                <h3>Notes list {this.props.notes.length}</h3>
            {
                (this.props.notes.length!==0) && <div>

                    <table className="table text-white">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th colSpan='3'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    this.props.notes.map((note)=>{
                                        return(
                                        <tr key={note._id}>
                                        <td>{note.title}</td>
                                        <td><Link className="btn btn-info"  to={`/shownote/${note._id}`}>Show</Link></td>
                                        <td> <Link className="btn btn-warning"  to={`/edit/${note._id}`}>Update</Link></td>
                                        <td> <button className="btn btn-danger" onClick={()=>
                                            {
                                                swal({
                                                    title:"Are You Sure?",
                                                    icon:"warning",
                                                    buttons:true,
                                                    dangerMode:true
                                                })
                                                .then((willDelete)=>{
                                                    if(willDelete){
                                                        this.delete(note._id)
                                                    }
                                                })
                                        
                                        }
                                        }>delete</button></td>
                                        </tr>
                                        )
                                    })
                                }                            
                        </tbody>                       
                    </table>
                    <br/><br/>
                </div>
            }
            
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {notes:state.notes}
}
export default connect(mapStateToProps)(NotesList)