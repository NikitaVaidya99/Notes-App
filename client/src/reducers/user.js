const usersInitial={}
export const usersReducers=(state=usersInitial, action)=>{
    switch(action.type){
        case 'SET_USER':{
            return {...action.payload}
        }
        default:{
            return {...state}
        }
    }
}
