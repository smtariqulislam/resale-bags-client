import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider";
import SmallSpinner from "../../components/SmallSpinner";
import { setAuthToken } from "../../api/auth";

const Register = () => {
  const {
    createUser,
    updateUserProfile,
    signInWithGoogle,
    loading,
    setLoading,
    verifyEmail,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // signup using email and pass
  const handleSignUp = (event) => {
    event.preventDefault();
    const name = event.target.name.value;

    const email = event.target.email.value;
    const password = event.target.password.value;

    // Image Upload
    const image = event.target.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        // Create User
        createUser(email, password)
          .then((result) => {
            setAuthToken(result.user);
            updateUserProfile(name, imageData.data.display_url)
              .then(
                verifyEmail().then(() => {
                  toast.success(
                    "Please check your email for verification link."
                  );
                  setLoading(false);
                  navigate(from, { replace: true });
                })
              )
              .catch((err) => console.log(err));
          })

          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      })
      .catch((err) => console.log(err));
  };

  //google signIn

  const handleGoogleSignIn = () => {
    // console.log('google')
    signInWithGoogle().then((result) => {
      console.log(result.user);

      setAuthToken(result.user);
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <div className="h-[800px] flex justify-center items-center">
        <div className="grid justify-center max-w-md p-6 rounded-md sm:p-10  bg-violet-900 text-gray-100">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Register</h1>
            <p className="text-sm text-gray-400">Register for new account</p>
          </div>
          <form
            onSubmit={handleSignUp}
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="text" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  id="text"
                  placeholder="name"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
                />
              </div>

              <div>
                <label htmlFor="image" className="block mb-2 text-sm">
                  Select Image:
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="gmail.com"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                </div>
                <input
                  required
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button className="w-full px-8 py-3 font-semibold rounded-md   bg-violet-400   text-gray-900">
                  {loading ? <SmallSpinner></SmallSpinner> : "Sign Up"}
                </button>
              </div>
              <p className="px-6 text-sm text-center mx-2 text-gray-400">
                Have an account?
                <Link to="/login" className="hover:underline text-violet-400">
                  login
                </Link>
                .
              </p>
            </div>
          </form>
          <button
            onClick={handleGoogleSignIn}
            className="px-8 py-3 font-semibold border rounded dark:border-gray-100 hover:bg-gray-500 dark:text-gray-100"
          >
            Sign In With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
