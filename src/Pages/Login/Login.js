import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setAuthToken } from "../../api/auth";
import SmallSpinner from "../../components/SmallSpinner";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const { signIn, signInWithGoogle, loading, setLoading } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // signIn using email and pass
  const handlelogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        toast.success("login sucess");
        //get token
        setAuthToken(result.user);
        // console.log(result.user)
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
        setLoading(false); //for spinner.
      });
  };

  //google signIn

  const handleGoogleSignIn = () => {
    // console.log('google')
    signInWithGoogle().then((result) => {
      console.log(result.user);
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="grid justify-center max-w-md p-6 rounded-md sm:p-10 bg-violet-900 text-gray-100">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handlelogin}
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
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
                <Link
                  to="/register"
                  className="text-xs hover:underline text-gray-400"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button className="w-full px-8 py-3 font-semibold rounded-md   bg-violet-400   text-gray-900">
                {loading ? <SmallSpinner></SmallSpinner> : "Sign In"}
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-400">
              Don't have an account yet?
              <Link to="/register" className="hover:underline text-violet-400">
                Register
              </Link>
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
  );
};

export default Login;
