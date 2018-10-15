import React from "react";

const DonneesAffichees = ({citation,index}) => {
  return (
        <div className="DonneesAffichees" key={index}>
          <h3> {citation.character} </h3>
          <img src={citation.image} alt="quote Simpsons" />
          <h4> {citation.quote} </h4>
        </div>
      )
};

export default DonneesAffichees;
