const notesInitial=[]
export const notesReducers=(state=notesInitial, action)=>{
 switch(action.type){
     case 'LIST_NOTES':{
         return [...action.payload]
     }

     case 'ADD_NOTE':{
        return [...state, action.payload]
    }
    case 'EDIT_NOTE':{
        return state.map((note)=>{
            if(note._id==action.payload._id){
                return {...action.payload}
            }
            else{
               return {...note}
            }
        })
    }
     case 'REMOVE_NOTES':{
         return state.filter(n=>n._id!=action.payload)
     }
     
     default:{
         return [...state]
     }
 }
}
