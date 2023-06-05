const INTIAL_STATE = {
    fav:[],  
};

export default function favReducer(state=INTIAL_STATE , action){
    switch(action.type){
        case "SET_Fav":
        return {...state, fav:action.payload }
       default:
        return state 
    }
}
