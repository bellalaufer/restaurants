export function reducer(state, action) {
    switch(action.type){
        case 'ADD_IMAGE': {
            const newImage = action.payload
            return { ...state, list: [...state.list, newImage]}
        }        
        default: {
        return state
        }
    }
}