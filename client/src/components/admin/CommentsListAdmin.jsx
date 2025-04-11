import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCommentsForAdmin } from "../../features/admin/adminSlice";
import { toast } from "react-toastify";
import Loader from "../Loader";

const CommentsListAdmin = () => {
  const { comments, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.admin
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCommentsForAdmin());

    if (isError && message) {
      toast.error(message, { position: "top-center" });
    }
  }, [isError, message]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Recent Comments
      </h2>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment._id} className="border-b border-gray-200 pb-4">
            <div className="flex items-start space-x-3">
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-medium text-gray-900">
                    User Id : {comment.user}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {new Date(comment.createdAt).toLocaleDateString("en-IN")}
                  </span>
                </div>
                <p className="mt-1 text-gray-700">{comment.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsListAdmin;
