import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // Import useSelector
import { fetchForm } from "../redux/FormSlice";

const FormDisplay = () => {
  const { id } = useParams(); // Get the form ID from the URL
  const dispatch = useDispatch();

  // Access Redux state
  const { formData, loading, error } = useSelector((state) => state.form);

  useEffect(() => {
    if (id) {
      dispatch(fetchForm(id));
    }
  }, [dispatch, id]);
  if (!id) return <p>No form ID provided.</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
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
            <strong>Age:</strong> {formData.age}
          </p>
          <p>
            <strong>Gender:</strong> {formData.gender}
          </p>
          <p>
            <strong>Subscribe:</strong> {formData.subscribe ? "Yes" : "No"}
          </p>
          <p>
            <strong>Country:</strong> {formData.country}
          </p>
          <p>
            <strong>Comments:</strong> {formData.comments}
          </p>

          <Link to="/">
            <button className="text-2xl font-bold text-blue-600 bg-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-50 transition-colors">
              Go to form page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormDisplay;
