import React from 'react';
import { Link } from 'react-router-dom';


function Card({text, description, image, id}) {
    return (
        <div className="card">
            <img src={image} className="card-img-top" alt={text} />
            <div className="card-body">
                <h5 className="card-title">{text}</h5>
                <p>{description}</p>
            </div>
            <div className='d-flex justify-content-end'>
                <Link to={`/edit/${id}`}>
                <button type="button" className="btn btn-secondary mr-2">Edit</button>
                </Link>
                
                <button type="button" className="btn btn-danger">Delete</button>
            </div>
        </div>
    );
}

export default Card;