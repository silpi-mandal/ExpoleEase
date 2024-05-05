import "../Style/Book.css";
import { Navigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import payvalid from "./PayValid";
import { useState } from "react";
import api from "./api.json";

const Book = () => {
  const { bid } = useParams();
  console.log(bid);
  const [payDetails, setPayDetails] = useState({});
  const formik = useFormik({
    initialValues: {
      holdername: "",
      cardno: "",
      cvcpwd: "",
      exp: "",
    },
    validationSchema: payvalid,
    onSubmit: (data, action) => {
      console.log(data);
      action.resetForm();
      setPayDetails(data);
    },
  });
  console.log("api", api);
  const payment = api.filter((val) => {
    return val.id == bid;
  });
  console.log("payment", payment);
  if (payDetails.holdername) {
    return <Navigate to="/success" replace />;
  }
  return (
    <div className="container-fluid maindiv">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-11">
          <div className="card card0 rounded-0">
            <div className="row">
              <div className="col-md-5 d-md-block d-none p-0 box">
                <div className="card rounded-0 border-0 card1" id="bill">
                  <h3 id="heading1">Payment Summary</h3>
                  <div className="row">
                    <div className="col-lg-7 col-8 mt-4 pl-4">
                      <h2 className="bill-head">{payment[0].name}</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 red-bg">
                      <p className="bill-date" id="total-label">
                        Total Price
                      </p>
                      <h2 className="bill-head" id="total">
                        {payment[0].price}
                      </h2>
                      <small className="bill-date" id="total-label">
                        Price includes all taxes
                      </small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-7 col-sm-12 p-0 box">
                <div className="card rounded-0 border-0 card2" id="paypage">
                  <div className="form-card">
                    <h2 id="heading2" className="text-danger">
                      Payment Method
                    </h2>
                    <div className="radio-group">
                      <div className="radio" data-value="credit">
                        <img
                          src="https://i.imgur.com/28akQFX.jpg"
                          width="200px"
                          height="60px"
                        />
                      </div>
                      <div className="radio" data-value="paypal">
                        <img
                          src="https://i.imgur.com/5QFsx7K.jpg"
                          width="200px"
                          height="60px"
                        />
                      </div>
                      <br />
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                      <label className="pay">Name on Card</label>
                      <input
                        type="text"
                        name="holdername"
                        placeholder="Holder Name"
                        onChange={formik.handleChange}
                      />
                      <span style={{ color: "red", fontStyle: "italic" }}>
                        {formik.errors.holdername && formik.touched.holdername
                          ? formik.errors.holdername
                          : null}
                      </span>
                      <div className="row">
                        <div className="col-8 col-md-6">
                          <label className="pay">Card Number</label>
                          <input
                            type="text"
                            name="cardno"
                            placeholder="0000-0000-0000-0000"
                            onChange={formik.handleChange}
                          />
                          <span style={{ color: "red", fontStyle: "italic" }}>
                            {formik.errors.cardno && formik.touched.cardno
                              ? formik.errors.cardno
                              : null}
                          </span>
                        </div>
                        <div className="col-4 col-md-6">
                          <label className="pay">CVV</label>
                          <input
                            type="password"
                            name="cvcpwd"
                            placeholder="&#9679;&#9679;&#9679;"
                            className="placeicon"
                            onChange={formik.handleChange}
                          />
                          <span style={{ color: "red", fontStyle: "italic" }}>
                            {formik.errors.cvcpwd && formik.touched.cvcpwd
                              ? formik.errors.cvcpwd
                              : null}
                          </span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <label className="pay">Expiration Date</label>
                        </div>
                        <div className="col-md-12">
                          <input
                            type="text"
                            name="exp"
                            placeholder="MM/YY"
                            onChange={formik.handleChange}
                          />
                          <span style={{ color: "red", fontStyle: "italic" }}>
                            {formik.errors.exp && formik.touched.exp
                              ? formik.errors.exp
                              : null}
                          </span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <input
                            type="submit"
                            value="MAKE A PAYMENT &nbsp; &#xf178;"
                            className="btn btn-info placeicon"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Book;
