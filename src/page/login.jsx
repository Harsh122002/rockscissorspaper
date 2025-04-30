import React from 'react';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useFormik } from 'formik';

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      password: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Username is required'),
      password: Yup.string().min(4, 'Minimum 4 characters').required('Password is required')
    }),
    onSubmit: (values, { setSubmitting, setErrors }) => {
      const success = login(values.name, values.password);
      if (success) {
        navigate('/');
      } else {
        setErrors({ password: 'Invalid username or password' });
      }
      setSubmitting(false);
    }
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium mb-1">Username</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="w-full border px-3 py-2 rounded"
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-600 text-sm">{formik.errors.name}</div>
          )}
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="w-full border px-3 py-2 rounded"
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-600 text-sm">{formik.errors.password}</div>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded cursor-pointer hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>

      {/* Register link below the form */}
      <div className="mt-4 text-center">
        <p className="text-sm">
          Don’t have an account?{' '}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
