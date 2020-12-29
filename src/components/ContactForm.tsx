import { Formik, Form } from "formik";
import * as React from "react";
import { Button } from "./Button";
import { Header } from "./Header";
import * as emailjs from "emailjs-com";

const { useState } = React;

interface Props {
  color: string;
}

interface InitialState {
  name: string;
  email: string;
  topic: string;
  message: string;
  nameError: string;
  emailError: string;
  topicError: string;
  messageError: string;
  emailSendError: string;
}

export const ContactForm: React.FC<Props> = ({ color }) => {
  const [submitMessage, setSubmitMessage] = useState<boolean>(false);
  const initialState = {
    name: "",
    email: "",
    topic: "",
    message: "",
    nameError: "",
    emailError: "",
    topicError: "",
    messageError: "",
    emailSendError: "",
  };
  const [contactMe, setContactMe] = useState<InitialState>(initialState);

  const messageHasBeenSend = () => {
    return (
      <div>
        <Header
          size="h1"
          color={color}
          title="Thank you for visiting the website!"
        />
        <Header
          size="h3"
          color={color}
          title={"I will get back to you as soon as possible"}
        />
      </div>
    );
  };

  const validate = (data: {
    name: string;
    email: string;
    topic: string;
    message: string;
  }) => {
    const errors = {
      name: "",
      email: "",
      topic: "",
      message: "",
    };

    if (data.name === "Name" || !data.name) {
      errors.name = "Name cannot be empty";
    }

    if (data.email === "E-mail" || !data.email.includes("@")) {
      errors.email = "Incorrect email";
    }

    if (data.topic === "Topic" || !data.topic) {
      errors.topic = "Topic cannot be empty";
    }

    if (data.message === "Insert message" || !data.message) {
      errors.message = "Message cannot be empty";
    }

    return errors;
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <div>{submitMessage ? messageHasBeenSend() : null}</div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div style={{ color: "red" }}>
              {contactMe.emailSendError ? contactMe.emailSendError : null}
            </div>
            <Formik
              initialValues={contactMe}
              onSubmit={(randomData, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                let isValid = validate(randomData);
                if (
                  isValid.name ||
                  isValid.email ||
                  isValid.message ||
                  isValid.topic
                ) {
                  setContactMe({
                    ...contactMe,
                    nameError: isValid.name,
                    emailError: isValid.email,
                    messageError: isValid.message,
                    topicError: isValid.topic,
                  });
                } else {
                  const emailParams = {
                    name: randomData.name,
                    email: randomData.email,
                    topic: randomData.topic,
                    message: randomData.message,
                  };
                  emailjs
                    .send(
                      "gmail",
                      "template_t7cskfh",
                      emailParams,
                      "user_hpEEzNwjn5YChJX5xjSyh"
                    )
                    .then(() => {
                      setSubmitMessage(true);
                      setContactMe(initialState);
                      resetForm();
                    })
                    .catch(() => {
                      setContactMe({
                        ...contactMe,
                        emailSendError: "Email was not send",
                      });
                    });
                }
                setSubmitting(false);
              }}
            >
              {({ values, handleChange, handleBlur }) => (
                <Form className="contact-form-class">
                  <input
                    className={`input-text-${color}${
                      contactMe.nameError ? " input-error" : ""
                    }`}
                    value={values.name || ""}
                    name="name"
                    placeholder={"Name"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div style={{ color: "red" }}>
                    {contactMe.nameError ? contactMe.nameError : null}
                  </div>
                  <input
                    className={`input-text-${color}${
                      contactMe.emailError ? " input-error" : ""
                    }`}
                    value={values.email || ""}
                    name="email"
                    placeholder={"E-mail"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div style={{ color: "red" }}>
                    {contactMe.emailError ? contactMe.emailError : null}
                  </div>
                  <input
                    className={`input-text-${color}${
                      contactMe.topicError ? " input-error" : ""
                    }`}
                    value={values.topic || ""}
                    name="topic"
                    placeholder={"Topic"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div style={{ color: "red" }}>
                    {contactMe.topicError ? contactMe.topicError : null}
                  </div>
                  <textarea
                    className={`textarea-${color}${
                      contactMe.messageError ? " textarea-error" : ""
                    }`}
                    name="message"
                    value={values.message || ""}
                    rows={6}
                    onChange={handleChange}
                    placeholder={"Insert message"}
                    onBlur={handleBlur}
                  />
                  <div style={{ color: "red" }}>
                    {contactMe.messageError ? contactMe.messageError : null}
                  </div>
                  <div>
                    <Button
                      text="Submit"
                      buttonStyle="btn-block"
                      color={color}
                      type="submit"
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
