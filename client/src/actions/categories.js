import axios from 'axios'
import swal from "sweetalert";
//----------set--------------------
export const setCategories=(categories)=>{
    return {
        type:'SET_CATEGORIES',
        payload:categories
    }
}
export const startSetCategories=()=>{
    return (dispatch)=>{
        axios.get('http://localhost:3025/categories',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const categories=response.data
           dispatch(setCategories(categories))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

//-------------add--------------------
export const addCategory=(category)=>{
    return {
        type:'ADD_CATEGORY',
        payload:category
    }
}
export const startAddCategory=(formData, props)=>{
    return (dispatch)=>{
        axios.post('http://localhost:3025/categories', formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            dispatch(addCategory(response.data))
            props.history.push(`/list`)

        })
        .catch((err)=>{
            console.log(err)
        })
    }
} 

//----------remove-------------
export const removeCategory=(id)=>{
    return {
        type:'REMOVE_CATEGORY',
        payload:id
    }
}
export const startRemoveCategory=(id)=>{
    return (dispatch)=>{
        axios.delete(`http://localhost:3025/categories/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
            .then((response)=>{
             dispatch(removeCategory(id))
             swal("Category successfully deleted!")
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

//---------------edit-----------------
export const editCategory=(category)=>{
    return {
        type:'EDIT_CATEGORY',
        payload:category
    }
}

export const startEditCategory=(formData, props)=>{
    return (dispatch)=>{
        const id=props.match.params.id
        axios.put(`http://localhost:3025/categories/${id}`,formData, {
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const category=response.data
            dispatch(editCategory(category))
            swal("Category successfully edited!")
            props.history.push(`/categories/${id}`)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}