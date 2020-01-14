import axios from 'axios'
import swal from "sweetalert";

//------------list------------
export const setNotes=(notes)=>{
 return {
        type:'LIST_NOTES',
        payload:notes
 }
}
export const startSetNotes=()=>{
return (dispatch)=>{
    axios.get('http://localhost:3025/notes',{
        headers:{
            'x-auth':localStorage.getItem('authToken')
        }
    })
    .then((response)=>{
        const notes=response.data
       dispatch(setNotes(notes))
    })
    .catch((err)=>{
        //alert(err)
        console.log(err)
    })
}
}

//--------------remove--------------

export const removeNotes=(id)=>{
    return {
        type:'REMOVE_NOTES',
        payload:id
    }
}

export const startRemoveNotes=(id)=>{
    return (dispatch)=>{
        axios.delete(`http://localhost:3025/notes/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log(response.data)
            swal("Note successfully deleted")
            dispatch(removeNotes(id))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

//---------------add------------------
export const addNote=(note)=>{
    return {
        type:'ADD_NOTE',
        payload:note
    }
}

export const startAddNote=(formData, props)=>{
    return (dispatch)=>{
        axios.post('http://localhost:3025/notes', formData, {
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
           if(response.data.hasOwnProperty('errors')){
            swal(`${response.data.message}`)
                // alert(response.data.message)
           }
           else{
                dispatch(addNote(response.data))
                swal("Note successfully created")
                // alert('note successfully created')
                const id=response.data._id
                props.history.push(`/shownote/${id}`)
           }
        })
        .catch((err)=>{
            console.log(err)
        })

    }
}


//-------------edit----------------
export const editNote=(note)=>{
    return {
        type:'EDIT_NOTE',
        payload:note
    }
}
export const startEditNote=(formData,props)=>{
    return (dispatch)=>{
        axios.put(`http://localhost:3025/notes/${props.match.params.id}`, formData, {
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
           if(response.data.hasOwnProperty('errors')){
                // alert(response.data.message)
                swal(`${response.data.message}`)
           }
           else{
                // alert('note successfully edited')
                swal("note successfully edited")
               dispatch(editNote(response.data))
                const id=response.data._id
                props.history.push(`/shownote/${id}`)
           }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}