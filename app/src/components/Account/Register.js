import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="bg-light">
        <div class="container pb-4 ">
          <h2 class="text-center">Register</h2>

          <div class="row pb-4">
            <div class="col col-sm-6 col-md-6 col-lg-6 offset-3 pt-5 pb-5">
              <form className="loginForm">
                <div class="jumbotron jumbotron-fluid">
                  <div class="header"></div>
                  <div class="text-center">
                    <div class="form-group">
                      <label for="username">Username:</label>
                      <input type="username" class="form-control" id="username" name="username" placeholder="Enter username" required />
                    </div>
                  </div>
                  <div class="text-center">
                    <div class="form-group">
                      <label for="pwd">Password:</label>
                      <input type="password" class="form-control" id="pwd" name="password" placeholder="Enter password" required />
                    </div>
                  </div>
                  <div class="text-center">
                    <div class="form-group">
                      <label for="pwd"> Repeat Password:</label>
                      <input type="password" class="form-control" id="pwd" name="password" placeholder="Enter password" required />
                    </div>
                  </div>
                  <div class="text-center">
                    <Link to="/login">
                      <button type="submit" id="verify-btn" class="btn btn-success btn-lg" name="submit" value="send">
                        Already Have An Account? (Login)
                      </button>
                    </Link>
                  </div>
                  <div class="text-center pt-3">
                    <button type="submit" id="verify-btn" class="btn btn-success btn-lg" name="submit" value="send">
                      Register
                    </button>
                  </div>
                  <span class="error text-danger">
                    {" "}
                    <h6 class="text-center">Username/Password Incorrect</h6>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
