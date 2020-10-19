import React from 'react';
import './image.css';

function image({ img, name, handlePreviewImage }) {

    return (
        <div id={name} className='image'>
            <img onclick={() => handlePreviewImage(name)} src={img} alt='' />
            <h3 className='name'>{name}</h3>
        </div>
    )
}

export default image
