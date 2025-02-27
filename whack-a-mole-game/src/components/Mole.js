import React from 'react';

const Mole = ({ isVisible, onWhack }) => {
    return (
        <div className={`mole ${isVisible ? 'visible' : 'hidden'}`} onClick={onWhack}>
            <img src="/path/to/mole-image.png" alt="Mole" />
        </div>
    );
};

export default Mole;