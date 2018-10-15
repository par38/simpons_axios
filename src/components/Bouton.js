import React from 'react';

const Bouton = ({ changerCitation }) => {
    return (
        <div className="Bouton">
            <button onClick={changerCitation}>Voir une nouvelle citation ...</button>
        </div>
    );
};

export default Bouton;