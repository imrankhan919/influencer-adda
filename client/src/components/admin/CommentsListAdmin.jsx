import React from "react";

const CommentsListAdmin = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Recent Comments
      </h2>
      <div className="space-y-4">
        {[1, 2, 3].map((comment) => (
          <div key={comment} className="border-b border-gray-200 pb-4">
            <div className="flex items-start space-x-3">
              <img
                src={`https://images.unsplash.com/photo-${
                  1500000000000 + comment
                }?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-medium text-gray-900">User {comment}</h3>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
                <p className="mt-1 text-gray-700">
                  This is a sample comment. It could be about anything related
                  to the platform.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsListAdmin;
