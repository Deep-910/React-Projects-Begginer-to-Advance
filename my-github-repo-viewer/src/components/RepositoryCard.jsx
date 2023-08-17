import React from "react";

 const RepositoryCard = ({ repo }) => {
    return(
        <div className="repository-card">
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>

        </div>
    );
 };

 export default RepositoryCard;
