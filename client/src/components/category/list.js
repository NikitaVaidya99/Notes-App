import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'

import {connect} from 'react-redux'
import {startRemoveCategory} from '../../actions/categories'

class ListCategory extends React.Component{

    delete=(id)=>{
        this.props.dispatch(startRemoveCategory(id))
        
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-5 offset-md-3 text-white">
                    <br/>
                    <div className="box">
                <h2>List of {this.props.categories.length} Categories</h2>
                <table className="table text-white">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th colSpan='3'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.categories.map((category)=>{
                                return(
                                    <tr>
                                        <td>{category.name}</td>
                                        <td><Link className="btn btn-info" to={`/categories/${category._id}`}>Show</Link></td>
                                        <td><Link className="btn btn-warning"to={`/categories/edit/${category._id}`}>Edit</Link></td>
                                        <td><button className="btn btn-danger" onClick={()=>{this.delete(category._id)}}>delete</button></td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
                <br/><br/>

                    <Link className="btn btn-primary" to='/categories'>Add new category</Link>
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

export default connect(mapStateToProps)(ListCategory)