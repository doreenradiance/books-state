import React from 'react';

const Users = (props) => {
    return (
        <div>
            <p>Publisher: {props.publisher} </p>
            <p>Author: {props.author} </p>
            <p>Genre: {props.genre} </p>
            <p>Title: {props.title}</p>
            <hr/>
        </div>
    );
}

export default Users;
