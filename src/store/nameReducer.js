
export default function nameReducer(state = 'RAHMAN', action) {
    switch(action.type){
     case 'CHANGE_NAME': 
     return state ==='RAHMAN'? 'ATIK' : 'RAHMAN'
     default:
       return state
    }
    
   }
