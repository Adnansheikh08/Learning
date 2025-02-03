import React from "react";

const Step5 = () => {
  return (
    <div className="form-step col-md-10 col-11 active" id="step-2">
      <div className="row">
        <div className="col-md-2 step-count">
          <span>05</span>
        </div>
        <div className="col-md-10 py-2 px-4">
          <h4>5. Please select the type of loan</h4>
          <div className="df-img-btns mt-3">
            <div className="main">
              <div className="col loannames rdo_select">
                <div className="col-auto mb-3 mb-md-0">
                  <input
                    type="radio"
                    id="termloan"
                    name="ltype"
                    value="termloan"
                    required
                    className="btn-check mustsel"
                    autoComplete="off"
                  />
                  <label
                    htmlFor="termloan"
                    className="btn btn-outline-primary mr-3 text-center inp4"
                  >
                    <div className="d-flex flex-column">
                      <div className="mb-2">
                        <img
                          src="https://www.finline.in/assets/v3/img/land.svg"
                          height="32"
                          alt="Land-Icon"
                        />
                        <img
                          src="https://www.finline.in/assets/v3/img/machinary.svg"
                          height="32"
                          alt="Machinery-Icon"
                        />
                        <img
                          src="https://www.finline.in/assets/v3/img/computer.svg"
                          height="32"
                          alt="Computer-Icon"
                        />
                        <img
                          src="https://www.finline.in/assets/v3/img/vehicle.svg"
                          height="32"
                          alt="Vehicle-Icon"
                        />
                      </div>
                      Term Loan
                    </div>
                    <div>
                      <small className="df-lh d-none d-md-block">
                        Eg. Buy Land, Machinery, Computer, Vehicle etc. for
                        the business.
                      </small>
                    </div>
                  </label>
                </div>
                <div className="col-auto mb-3 mb-md-0">
                  <input
                    type="radio"
                    id="workingcapitalloan"
                    name="ltype"
                    value="workingcapitalloan"
                    required
                    className="btn-check mustsel"
                    autoComplete="off"
                  />
                  <label
                    htmlFor="workingcapitalloan"
                    className="btn btn-outline-primary mr-3 text-center inp4"
                  >
                    <div className="d-flex flex-column">
                      <div className="mb-2">
                        <img
                          src="https://www.finline.in/assets/v3/img/stock.svg"
                          height="32"
                          alt="Stock-Icon"
                        />
                        <img
                          src="https://www.finline.in/assets/v3/img/calculator.svg"
                          height="32"
                          alt="Calculator-Icon"
                        />
                      </div>
                      Working Capital Loan
                    </div>
                    <div>
                      <small className="df-lh d-none d-md-block">
                        Eg. Purchase stock, Manage daily/monthly expenses
                      </small>
                    </div>
                  </label>
                </div>
                <div className="col-auto mb-3 mb-md-0">
                  <input
                    type="radio"
                    id="combined"
                    name="ltype"
                    value="combined"
                    required
                    className="btn-check mustsel"
                    autoComplete="off"
                  />
                  <label
                    htmlFor="combined"
                    className="btn btn-outline-primary mr-3 text-center inp4"
                  >
                    <div className="d-flex flex-column">
                      <div className="mb-2">
                        <img
                          src="https://www.finline.in/assets/v3/img/land.svg"
                          height="32"
                          alt="Land-Icon"
                        />
                        <img
                          src="https://www.finline.in/assets/v3/img/machinary.svg"
                          height="32"
                          alt="Machinery-Icon"
                        />
                        <img
                          src="https://www.finline.in/assets/v3/img/computer.svg"
                          height="32"
                          alt="Computer-Icon"
                        />
                        <img
                          src="https://www.finline.in/assets/v3/img/vehicle.svg"
                          height="32"
                          alt="Vehicle-Icon"
                        />
                        <img
                          src="https://www.finline.in/assets/v3/img/stock.svg"
                          height="32"
                          alt="Stock-Icon"
                        />
                        <img
                          src="https://www.finline.in/assets/v3/img/calculator.svg"
                          height="32"
                          alt="Calculator-Icon"
                        />
                      </div>
                      Term Loan + Working Capital Loan
                    </div>
                    <div>
                      <small className="df-lh d-none d-md-block">
                        For All of the above
                      </small>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Ensure the container (the label) stretches equally */
        .df-img-btns {
          display: flex;
          justify-content: space-between;
          align-items: stretch;
        }

        .main {
          display: flex;
          justify-content: space-between;
          align-items: stretch;
          width: 100%;
        }

        /* Make each .col stretch to equal width */
        .col.loannames {
          flex: 1; /* This will make all options take up equal space */
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%; /* Ensure the height stretches to the same size */
        }

        /* Adjust the .btn label to take full height and width */
        label.btn {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          height: 100%;
          width: 100%;
          padding: 10px;
          box-sizing: border-box;
          text-align: center;
        }

        label.btn img {
          margin-bottom: 10px;
        }

        label.btn small {
          margin-top: 10px;
          font-size: 12px;
        }

        /* Optional: Make sure radio buttons themselves don't add extra padding */
        input[type="radio"] {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Step5;
