import React from 'react';
import Item from './Item';

const List = ({ users }) => {
    return (
        <div>
            {users.map(user => <Item key={user.id} user={user} />)}
        </div>
    );
};

export default List;
