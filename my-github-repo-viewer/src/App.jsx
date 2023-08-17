// src/App.js
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import RepositoryDetails from './components/RepositoryDetails'; // Import the RepositoryDetails component
import { fetchRepositories } from './api/github'; // Import the fetchRepositories function

const App = () => {
  const [repositories, setRepositories] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState(null);

  const handleSearch = async (query) => {
    const repos = await fetchRepositories(query);
    setRepositories(repos);
    setSelectedRepo(null); // Clear selected repository
  };

  const handleRepoClick = (repo) => {
    setSelectedRepo(repo);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <h1 className="text-3xl font-semibold text-center mb-4">
        GitHub Repositories Viewer
      </h1>
      <div className="mx-auto max-w-md">
        <SearchBar onSearch={handleSearch} />
        <div className="mt-4">
          {selectedRepo ? (
            <RepositoryDetails repo={selectedRepo} />
          ) : (
            <p className="text-center">Select a repository to view details.</p>
          )}
        </div>
        <div className="mt-4">
          <ul className="space-y-2">
            {repositories.map((repo) => (
              <li
                key={repo.id}
                className="cursor-pointer text-blue-500 hover:underline"
                onClick={() => handleRepoClick(repo)}
              >
                {repo.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
