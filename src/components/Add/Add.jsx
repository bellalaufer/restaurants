import React from 'react';
import { globalContext } from '../../contexts/globalContext';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Add(props) {
    const navigate = useNavigate();
    
    const { dispatch } = useContext(globalContext)

    const [text, setText] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");


    function handleSubmit(event) {
        event.preventDefault();

        if (!text || !description || !image) {            
            return;
        }

        dispatch({
        type: 'ADD_IMAGE',
        payload: {
            image,
            text,
            description,
            id: Date.now(),
        }
        })

        setText('')
        setImage('')
        setDescription('')
        navigate('/cards')
    }


return (
    <form className="mb-3 container" onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
            Name: 
            </label>
                <input
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(event) => setText(event.target.value)}
                value={text}
                />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
            Description:
            </label>
                <input
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(event) => setDescription(event.target.value)}
                value={description}
                />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
            Image:
            </label>
            <input
            className="form-control"
            id="exampleInputPassword1"
            onChange={(event) => setImage(event.target.value)}
            value={image}
            />
        </div>
        <button type="submit" className="btn btn-primary">
            Submit
        </button>
        </form>
);
        
}

export default Add;