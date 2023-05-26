import React from 'react';
import { useContext } from 'react';
import Card from '../Card/Card';
import { globalContext } from '../../contexts/globalContext';

function Cards(props) {
    const { state } = useContext(globalContext);
    
    return (
        <div className="row my-5 container">
        {state.list.map((post) => (
            <div key={post.id} className="col-3">
                <Card image={post.image} text={post.text} description={post.description} />
            </div>
            ))}
        </div>
    );
}

export default Cards;