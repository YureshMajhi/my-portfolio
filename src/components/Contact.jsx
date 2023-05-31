import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f] flex justify-center items-center">
      <form
        action=""
        className="max-w-[600px] flex flex-col mx-auto w-full p-2"
      >
        <div className="pb-8 text-gray-300">
          <p className="text-4xl font-bold border-b-4 border-pink-600 inline">
            Contact
          </p>
          <p className="py-4">
            // You can submit the form below or send me an email at -
            yureshmee@gmail.com
          </p>
        </div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="p-2 bg-[#ccd6f6]"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="my-4  bg-[#ccd6f6] p-2"
        />
        <textarea
          name="message"
          rows="10"
          placeholder="Message"
          className="p-2  bg-[#ccd6f6]"
        ></textarea>

        <button className="border-2 m-4 py-3 px-4 mx-auto text-gray-300 hover:bg-pink-600 hover:border-pink-600">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
