import React from 'react';
import { useContext, useEffect } from 'react';
import Card from '../Card/Card';
import { globalContext } from '../../contexts/globalContext';

function Cards() {
    const { state, dispatch } = useContext(globalContext);
    useEffect(() => {
        dispatch({ 
            type: 'LOAD_CARDS' });
    }, []);


    return (
        <div className="row my-5 container">
        {state.list.map((post) => (
            <div key={post.id} className="col-3">
                <Card image={post.image} text={post.text} description={post.description} id={post.id}/>
            </div>
            ))}
        </div>
    );
}

export default Cards;