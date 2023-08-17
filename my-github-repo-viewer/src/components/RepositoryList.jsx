import React from 'react'
import RepositoryCard from './RepositoryCard';

function RepositoryList({ repositories }) {
  return (
    <div className="respository-list">
        {repositories.map((repo)=>(
        <RepositoryCard key={repo.id} repo={repo}/>
        ))}
    </div>
  );
};

export default RepositoryList