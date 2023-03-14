const initial_state = {
    counter: 1
}

export const reducer = (state=initial_state, action) => {
    switch(action.type) {
        case "ADD" : 
            return {...state, counter: state.counter + 1}
        case "SUB" : 
            return {...state, counter: state.counter - 1}
        case "SET" : 
            return {...state, counter: action.payload}
        default: 
            return state
        
    }
}