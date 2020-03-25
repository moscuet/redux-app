export default function backgroundReducer(state = 'green', action) {
  
    switch (action.type) {
        case 'CHANGE_BACKGROUND':   
        const colors = [
            'blue',
            '#fa383e',
            '#606770',
            'orange',
            '#00a400',
            'purple',
            '#54c7ec',
            'salmon',
            '#ffba00'
          ]
        const index = Math.floor(Math.random()*colors.length)
        return colors[index]
        default:
            return state
  }
}


// export default function nameReducer(state = 'RAHMAN', action) {
//     switch(action.type){
//      case 'CHANGE_NAME': 
//      return state ==='RAHMAN'? 'ATIK' : 'RAHMAN'
//      default:
//        return state
//     }
    
//    }