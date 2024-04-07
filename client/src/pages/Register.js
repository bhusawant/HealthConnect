import React from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/register", values);
      dispatch(hideLoading());
      if (res.data.success) {
        message.success("Register Successfully!");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something Went Wrong");
    }
  };
  return (
    <>
      <div className="form-container ">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          className="register-form"
        >
          <h3 className="text-center">Register From</h3>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          {/* <Form.Item label="Aadhar no./ Pan no." name="aadhar">
            <Input type="text" required />
          </Form.Item> */}
          <Form.Item label="Gender" name="Gender">
            <div class="form-check form-check-inline">
              <Input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
              <label id="radio1" class="form-check-label" for="inlineRadio1">Male</label>
            </div>
            <div class="form-check form-check-inline">
              <Input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
              <label id="radio2" class="form-check-label" for="inlineRadio2">Female</label>
            </div>
            <div class="form-check form-check-inline">
              <Input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
              <label id="radio3" class="form-check-label" for="inlineRadio3">Other</label>
            </div>
          </Form.Item>
          <Form.Item label="Age" name="Age">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Address" name="Address">
            {/* <Input type="textarea" required /> */}
            <textarea class="form-control" id="floatingTextarea2"></textarea>
          </Form.Item>


          <Form.Item label="city" name="city">
            <select class="form-select" aria-label="Default select example">
              <option selected>select</option>
              {/* <option value="1">Rural</option>
              <option value="2">Metro</option> */}
              <option value="1">Ahmadnagar</option>
              <option value="2">Akola</option>
              <option value="3">Amravati</option>
              <option value="4">Aurangabad</option>
              <option value="5">Bhandara</option>
              <option value="6">Bhusawal</option>
              <option value="7">Beed</option>
              <option value="8">Buldhana</option>
              <option value="9">Chandrapur</option>
              <option value="10">Daulatabad</option>
              <option value="11">Dhule</option>
              <option value="12">Jalgaon</option>
              <option value="13">Kalyan</option>
              <option value="14">Karli</option>
              <option value="15">Kolhapur</option>
              <option value="16">Mahabaleshwar</option>
              <option value="17">Malegaon</option>
              <option value="18">Matheran</option>
              <option value="19">Mumbai</option>
              <option value="20">Nagpur</option>
              <option value="21">Nanded</option>
              <option value="22">Nashik</option>
              <option value="23">Osmanabad</option>
              <option value="24">Pandharpur</option>
              <option value="25">Parbhani</option>
              <option value="26">Pune</option>
              <option value="27">Ratnagiri</option>
              <option value="28">Sangli</option>
              <option value="29">Satara</option>
              <option value="30">Sevagram</option>
              <option value="31">Solapur</option>
              <option value="32">Thane</option>
              <option value="33">Ulhasnagar</option>
              <option value="34">Vasai-Virar</option>
              <option value="35">Wardha</option>
              <option value="36">Yavatmal</option>
            </select>
          </Form.Item>

          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to="/login" className="m-2">
            Already user login here
          </Link>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </Form>
      </div>
    </>
  );
};

export default Register;