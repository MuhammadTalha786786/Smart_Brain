import React from "react";

const SignIn = ({ onRouteChange }) => {
  return (
    <div>
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <form className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 b2 fw6 ph0 mh0 white">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6 white" for="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black  hover-white white  w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6 white" for="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent white hover-bg-black hover-white white  w-100"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
              <label className="pa0 ma0 lh-copy f6 pointer white">
                <input type="checkbox" /> Remember me
              </label>
            </fieldset>
            <div className="">
              <input
                onClick={() => onRouteChange("home")}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Signin"
              />
            </div>
            <div className="lh-copy mt3">
              <p
                onClick={() => onRouteChange("register")}
                className="f6 link dim black db white pointer"
              >
                Register
              </p>
            </div>
          </form>
        </main>
      </article>
    </div>
  );
};

export default SignIn;
