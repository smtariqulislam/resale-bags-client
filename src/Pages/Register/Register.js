import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton";

import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { toast } from "react-toastify";

const auth = getAuth(app)


const Register = () => {


  const googleProvider = new GoogleAuthProvider()

  // signup using email and pass
  const handleSignUp= event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    //1. Create Accounts
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);

        //2. Update name
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            toast.success("Name update");
            console.log(auth.currentUser.displayName);

            //3. Email verification sent!
            sendEmailVerification(auth.currentUser)
              .then(() => {
                toast.success("please check your mail for verify");
              })
              .catch((error) => {
                toast.error(error.message);
              });
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        //  const errorCode = error.code;
        //  const errorMessage = error.message;
        //  console.log(errorCode);
        //  console.log(errorMessage);
        console.log(error);
      });
  }
  //google signIn

const handleGoogleSignIn =()=>{
  // console.log('google')
  signInWithPopup(auth,googleProvider)
  .then(result=>{
    console.log(result.user)
  })
}

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
                  type="text"
                  name="name"
                  id="text"
                  placeholder="name"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
                />
              </div>
              {/* <div>
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
              </div> */}

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
                </div>
                <input
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
                <PrimaryButton
                  type="submit"
                  classes="w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100"
                >
                  Sign Up
                </PrimaryButton>
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
