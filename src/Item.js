import React from 'react';

const Item = ({ user }) => {
    return (
        <div>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            {/* Outras informações do usuário */}
        </div>
    );
};

export default Item;
