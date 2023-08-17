// src/components/RepositoryDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RepositoryDetails = ({ repo }) => {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await axios.get(repo.commits_url.replace('{/sha}', ''));
        setCommits(response.data);
      } catch (error) {
        console.error('Error fetching commits:', error);
      }
    };

    fetchCommits();
  }, [repo.commits_url]);

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-semibold">{repo.name}</h2>
      <p className="text-gray-600">{repo.description}</p>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Recent Commits</h3>
        {commits.length > 0 ? (
          <ul className="mt-2 space-y-2">
            {commits.map((commit) => (
              <li
                key={commit.sha}
                className="flex items-start cursor-pointer hover:bg-gray-100 transition duration-300"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    {/* SVG path for commit icon */}
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-700">
                    {commit.commit.author.name} committed {commit.committer.login}
                  </p>
                  <p className="text-sm text-gray-600">{commit.commit.message}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No recent commits.</p>
        )}
      </div>
    </div>
  );
};

export default RepositoryDetails;
