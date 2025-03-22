import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchForm, deleteForm } from "../redux/FormSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const FormDisplay = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { formData, loading, error } = useSelector((state) => state.form);

  useEffect(() => {
    if (id) {
      dispatch(fetchForm(id));
    }
  }, [dispatch, id]);

  if (!id) return <p>No form ID provided.</p>;
  if (loading) return <p className="text-center text-blue-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this form?")) {
      try {
        await dispatch(deleteForm(id)).unwrap();
        toast.success("Form deleted successfully!");
        navigate("/");
      } catch (error) {
        toast.error("Failed to delete form.");
        console.log(error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <ToastContainer />
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-600 text-center mb-6">
          Submitted Form Data
        </h1>
        <div className="space-y-4">
          <p>
            <strong>First Name:</strong> {formData?.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {formData?.lastName}
          </p>
          <p>
            <strong>Email:</strong> {formData?.email}
          </p>
          <p>
            <strong>Birth Date:</strong> {formData?.birthDate}
          </p>
          <p>
            <strong>Age:</strong> {formData?.age}
          </p>
          <p>
            <strong>Gender:</strong> {formData?.gender}
          </p>
          <p>
            <strong>Subscribe:</strong> {formData?.subscribe ? "Yes" : "No"}
          </p>
          <p>
            <strong>Country:</strong> {formData?.country}
          </p>
          <p>
            <strong>Comments:</strong> {formData?.comments}
          </p>

          <div className="flex justify-between mt-6">
            <Link to={`/form/edit/${id}`}>
              <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Edit
              </button>
            </Link>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>

          <Link to="/">
            <button className="mt-4 text-2xl font-bold text-blue-600 bg-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-50 transition-colors">
              Go to form page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormDisplay;
