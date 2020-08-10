import React from 'react';
import Users from './Users';

const AllUsers = (props) => {
    return (
        <div>
            {props.userInfo.map((user, index) => {
                return <Users publisher={user.publisher} author={user.author} genre={user.genre} title={user.title} key={index} />
            })}
        </div>
    );
}

export default AllUsers;
