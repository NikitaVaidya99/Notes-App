const categoriesInitial=[]
export const categoriesReducers=(state=categoriesInitial, action)=>{
    switch(action.type){
        case 'SET_CATEGORIES':{
            return [...action.payload]
        }
        case 'ADD_CATEGORY':{
            return [...state, action.payload]
        }
        case'REMOVE_CATEGORY':{
            return state.filter(c=>c._id!=action.payload)
        }
        case 'EDIT_CATEGORY':{
            return state.map((c)=>{
                if(c._id==action.payload._id){
                    return {...action.payload}
                }
                else{
                    return {...c}
                }
            })
        }
        default:{
            return [...state]
        }
    }
}
