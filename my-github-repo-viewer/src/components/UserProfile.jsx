
import React from 'react';

const UserProfile = ({ user, activity }) => {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      {user ? (
        <>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.bio}</p>
        </>
      ) : (
        <p className="text-gray-600">Loading user profile...</p>
      )}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Recent Activity</h3>
        {activity.length > 0 ? (
          <ul className="mt-2 space-y-2">
            {activity.map((item) => (
              <li key={item.id} className="flex items-center">
                <div className="mr-2">
                  {/* Display activity icon based on item.type */}
                  {item.type === 'PushEvent' && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      {/* SVG path for push event icon */}
                    </svg>
                  )}
                  {/* Add more icons for other activity types */}
                </div>
                <div>
                  <p className="text-sm text-gray-700">{item.created_at}</p>
                  <p className="text-sm text-gray-600">{item.repo.name}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No recent activity.</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
