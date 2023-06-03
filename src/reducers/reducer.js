export function reducer(state, action) {
    switch(action.type){
        case 'ADD_IMAGE': {
            const newImage = action.payload
            return { ...state, list: [...state.list, newImage]}
        }
        case 'EDIT_CARD': {
            const {text, id, description, image} = action.payload
            const newList = state.list.map(el => {
                if(el.id === +id) {
                    return {...el, text: text, description: description, image: image}
                }
                return el
            })
            return {...state, list: newList}
        }
        case 'DELETE_CARD': {
            const { id } = action.payload
            const newList = state.list.filter(el => el.id !== id)
            return {...state, list: newList}            
        }
        case 'SAVE_CARD': {
            localStorage.setItem('cards', JSON.stringify(state.list));
            return state
        }
        case 'LOAD_CARDS': {
            const storedCards = localStorage.getItem('cards')
            const cards = storedCards ? JSON.parse(storedCards) : [];
            return { ...state, list: cards };
        }        
        default: {
        return state
        }
    }
}