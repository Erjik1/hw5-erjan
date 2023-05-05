import React from 'react';

const Components = ({com}) => {
    return (
        <div>
            {
                com?.map(i => <p key={i?.id}>{i?.body}</p>)
            }
        </div>
    );
};

export default Components;