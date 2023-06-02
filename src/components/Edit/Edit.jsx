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


    function handleSubmit(event) {
        event.preventDefault()
        dispatch({
            type: 'EDIT_CARD',
            payload: {
                text: newText,
                id: +id,
                description: newDescription
            }
        })

        navigate('/cards')
    }
    
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card">
                    <img src={currentCard.image} className="card-img-top" alt={currentCard.text} />
                        <div className="card-body">
                            <h5 className="card-title">{currentCard.text}</h5>
                            <form className="mb-3 container" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Name: 
                                </label>
                                    <input
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    onChange={(event) => setNewText(event.target.value)}
                                    value={newText}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Save
                                </button>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                    Description:
                                    </label>
                                        <input
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        onChange={(event) => setNewDescription(event.target.value)}
                                        value={newDescription}
                                        />
                                </div>
                                <button type="submit" className="btn btn-primary mt-3">
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