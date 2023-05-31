export function reducer(state, action) {
    switch(action.type){
        case 'ADD_IMAGE': {
            const newImage = action.payload
            return { ...state, list: [...state.list, newImage]}
        }
        case 'EDIT_CARD': {
            const {text, id, description} = action.payload
            const newList = state.list.map(el => {
                if(el.id === +id) {
                    return {...el, text: text, description: description}
                }
                return el
            })
            return {...state, list: newList}
        }        
        default: {
        return state
        }
    }
}