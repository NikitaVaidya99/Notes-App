import React from 'react'
import FormCategory from './form.js'

import {connect} from 'react-redux'
import {startEditCategory} from '../../actions/categories'
 class EditCategory extends React.Component{
    submit=(formData)=>{
       this.props.dispatch(startEditCategory(formData, this.props))
    }
    render(){
        return(
            <div>
                {(Object.keys(this.props.category).length!==0) &&<FormCategory {...this.props.category} submit={this.submit}/>}
            </div>
        )
    }
}

const mapStateToProps=(state, props)=>{
    return {
            category:state.categories.find(c=>c._id==props.match.params.id)
    }
}
export default connect(mapStateToProps)(EditCategory)