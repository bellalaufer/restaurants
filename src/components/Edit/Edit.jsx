import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { globalContext } from '../../contexts/globalContext';


function Edit() {   

    const navigate = useNavigate();
    const { state, dispatch } = useContext(globalContext)
    const { id } = useParams()
    const currentCard = state.list.find(el => el.id === +id)  
    


    const [newText, setNewText] = useState(currentCard.text);
    const [newDescription, setNewDescription] = useState(currentCard.description)
    const [newImage, setNewImage] = useState(currentCard.image);


    function handleSubmit(event) {
        event.preventDefault()
        dispatch({
            type: 'EDIT_CARD',
            payload: {
                text: newText,
                id: +id,
                description: newDescription,
                image: newImage
            }
        })
        dispatch({
            type: 'SAVE_CARD'
        })

        navigate('/cards')
    }
    
    return (
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-4">
            <div className="card">
                <img src={newImage} className="card-img-top" alt={newText} />
                <div className="card-body">
                <h5 className="card-title">{newText}</h5>
                <form className="mb-3 container" onSubmit={handleSubmit}>
                    <div className="mb-3">
                    <label htmlFor="editText" className="form-label">
                        Name:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="editText"
                        value={newText}
                        onChange={(event) => setNewText(event.target.value)}
                    />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="editDescription" className="form-label">
                        Description:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="editDescription"
                        value={newDescription}
                        onChange={(event) => setNewDescription(event.target.value)}
                    />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="editImage" className="form-label">
                        Image URL:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="editImage"
                        value={newImage}
                        onChange={(event) => setNewImage(event.target.value)}
                    />
                    </div>
                    <button type="submit" className="btn btn-primary">
                    Save
                    </button>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Edit;