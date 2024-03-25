import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import callImg from "../../assets/images/call.png";
import mailImg from "../../assets/images/mail.png";
import locImg from "../../assets/images/location.png";
import { addCustomerQuery } from "../services/customerService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const notifySuccess = () => toast.success("Data submitted successfully");
  const notifyFail = () => toast.error("Some error occured");

  const onSubmit = async (data) => {
    try {
      await addCustomerQuery(data);
      notifySuccess();
    } catch (error) {
      console.log(error);
      notifyFail();
    }
  };

  const onError = (err) => {
    console.log(err);
  };

  return (
    <section className="contact_section layout_padding">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <div className="container ">
        <div className="heading_container">
          <h2>Contact Us</h2>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-6 mx-auto">
            <form
              className="contact-form"
              onSubmit={handleSubmit(onSubmit, onError)}
            >
              <div>
                <input {...register("name")} placeholder="Name" />
              </div>
              <div>
                <input
                  {...register("email", {
                    required: true,
                    pattern:
                      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
                  })}
                  placeholder="Email"
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email &&
                  (errors.email?.type === "required" ? (
                    <p className="form-error">Email is required</p>
                  ) : (
                    <p className="form-error">Incorrect email...</p>
                  ))}
              </div>
              <div>
                <input
                  {...register("phone", {
                    required: true,
                    pattern: /^\d{10}$/,
                  })}
                  placeholder="Phone Number"
                  aria-invalid={errors.phone ? "true" : "false"}
                />
                {errors.phone &&
                  (errors.phone?.type === "required" ? (
                    <p className="form-error">Phone is required</p>
                  ) : (
                    <p className="form-error">Incorrect phone...</p>
                  ))}
              </div>
              <div>
                <input
                  {...register("message")}
                  className="message-box"
                  placeholder="Message"
                />
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit">SEND</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="contact_items">
          <Link to="">
            <div className="item ">
              <div className="img-box ">
                <img src={callImg} alt="" />
              </div>
              <div className="detail-box">
                <p>+02 1234567890</p>
              </div>
            </div>
          </Link>
          <Link to="">
            <div className="item ">
              <div className="img-box ">
                <img src={mailImg} alt="" />
              </div>
              <div className="detail-box">
                <p>demo@gmail.com</p>
              </div>
            </div>
          </Link>
          <Link to="">
            <div className="item ">
              <div className="img-box ">
                <img src={locImg} alt="" />
              </div>
              <div className="detail-box">
                <p>Location</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
