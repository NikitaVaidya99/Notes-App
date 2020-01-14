import axios from 'axios'
import swal from 'sweetalert'
import { startSetCategories } from '../actions/categories'
import {startSetNotes} from '../actions/notes'

export const setUser=(user={})=>{
    return {
        type:'SET_USER',
        payload:user
    }
}

export const startSetUser=(formData, props)=>{
    return (dispatch)=>{
        axios.post("http://localhost:3025/users/register", formData)
        .then((response)=>{
            if(response.data.hasOwnProperty('errors')){
                // alert(response.data.message)
                swal(`${response.data.message}`)
            }
            else{
                //alert('successfully registered')
                 swal("Thank You!","You have successfully registered","success")
                dispatch(setUser())
                props.history.push('/login')
            }
            

        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const startLoginUser=(formData, props)=>{
    return (dispatch)=>{
        axios.post('http://localhost:3025/users/login', formData)
        .then((response)=>{
            if(!response.data.hasOwnProperty('errors')){
                const token=response.data
                localStorage.setItem('authToken', token)
                Promise.all([axios.get('http://localhost:3025/users/account', {
                        headers:{
                            'x-auth':token
                        }
                    }),
                    axios.get('http://localhost:3025/notes', {
                        headers:{
                            'x-auth':token
                        }
                    }),
                    axios.get('http://localhost:3025/categories', {
                        headers:{
                            'x-auth':token
                        }
                    })
                ])
                .then((values)=>{
                    const [userResponse, notesResponse, categoriesResponse]=values
                    dispatch(setUser(userResponse.data))
                    dispatch(startSetNotes(notesResponse.data))
                    dispatch(startSetCategories(categoriesResponse.data))
                    swal("Thank You!","You have successfully Logged in!","success")
                    props.history.push('/noteshome')
                })
                .catch((err)=>{
                    console.log(err)
                })
            }
            else{                
               alert(response.data.message)
            }  

        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const startGetUser=()=>{
    return (dispatch)=>{
        axios.get('http://localhost:3025/users/account', {
                    headers:{
                        'x-auth':localStorage.getItem('authToken')
                    }
                })
                .then((response)=>{
                    dispatch(setUser(response.data))
                })
                .catch((err)=>{
                    console.log(err)
                })
    }
}
export const startLogoutUser=(props)=>{
    return (dispatch)=>{
        axios.delete('http://localhost:3025/users/logout',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            if(response.data){
                // alert(response.data.notice)
                swal("Thank You!","You have successfully logged out!","success")
                dispatch(setUser({}))
               props.history.push('/login')
            }
            else{
                // alert('found error, try again')
                swal("found error, try again!","error")
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

 }