import React, { useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../context";

const FunLovingPlan = () => {
  const [state] = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let result = [];
    // if user is authenticated and has subscriptions
    // load subscriptions into result array
    if (state && state.user && state.user.subscriptions) {
      state.user.subscriptions.map((sub) => result.push(sub.plan.nickname.replaceAll(" ", "-").toLowerCase()));
    }
    // extract plan name from path name
    const plan = location.pathname.split("/")[1].toLowerCase();
    // if plan name is not in subscriptions array or if user
    // is not authenticated, redirect user
    if (!result.includes(plan) || !state) {
      navigate("/");
    }
  }, [state && state.user]);

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row py-5 bg-light text-center">
          <h2 className="display-4 fw-bold">Fun Loving</h2>
          <p className="lead">Flip flops for the fun loving dude</p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="p-5">
            <h3 className="fw-bold">The Stats</h3>
            <ul className="lead">
              <li>Complement your best beach shirt</li>
              <li>Fun friend award waiting on you</li>
              <li>Your feet have never had so much fun</li>
              <li>Try walking on these patterns</li>
              <li>Anything could happen!</li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FunLovingPlan;
