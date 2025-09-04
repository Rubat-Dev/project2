import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FAQ from "../components/FAQ";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    { icon: Phone, title: "Phone", details: "+1 (555) 123-4567" },
    { icon: Mail, title: "Email", details: "hello@premiumstore.com" },
    { icon: MapPin, title: "Address", details: "123 Premium St, Luxury City" },
  ];

  // Yup validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Full name is required"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  return (
    <div className="bg-gray-200/50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold">
            Get In{" "}
            <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you! Fill out the form or use
            the contact info below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition"
              >
                <div className="bg-gradient-to-tr from-purple-400 to-pink-400 p-4 rounded-full text-white">
                  <info.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{info.title}</h3>
                  <p className="text-gray-700">{info.details}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mb-4">
                  <Send className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Message Sent!</h3>
                <p className="text-gray-600 mt-2">
                  Thank you for reaching out. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <Formik
                initialValues={{ name: "", email: "", message: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                  console.log("Form data:", values);
                  setIsSubmitted(true);
                  resetForm();
                  setTimeout(() => setIsSubmitted(false), 3000);
                }}
              >
                {({ touched, errors }) => (
                  <Form className="space-y-6">
                    <div>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className={`w-full p-4 border ${
                          touched.name && errors.name
                            ? "border-red-500"
                            : "border-gray-300"
                        } rounded-lg focus:ring-2 focus:ring-pink-400 outline-none transition`}
                      />
                      <ErrorMessage
                      name="name"
                      component="p"
                      className="text-red-500 text-sm mt-1"/>
                    </div>

                    <div>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className={`w-full p-4 border ${
                          touched.email && errors.email
                            ? "border-red-500"
                            : "border-gray-300"
                        } rounded-lg focus:ring-2 focus:ring-purple-400 outline-none transition`}
                      />
                      <ErrorMessage
                        name="email"
                        component="p"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <Field
                        as="textarea"
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        className={`w-full p-4 border resize-none ${
                          touched.message && errors.message
                            ? "border-red-500"
                            : "border-gray-300"
                        } rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none transition`}
                      />
                      <ErrorMessage
                        name="message"
                        component="p"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:scale-105 transition"
                    >
                      Send Message
                    </button>
                  </Form>
                )}
              </Formik>
            )}
          </div>
        </div>
        <FAQ />
      </div>
    </div>
  );
};

export default Contact;
