import React from 'react';

function Card({text, description, image}) {
    return (
        <div className="card">
            <img src={image} className="card-img-top" alt={text} />
            <div className="card-body">
                <h5 className="card-title">{text}</h5>
                <p>{description}</p>
            </div>
            <div className='d-flex justify-content-end'>
                <button type="button" className="btn btn-secondary">Edit</button>
                <button type="button" className="btn btn-danger">Delete</button>
            </div>
        </div>
    );
}

export default Card;