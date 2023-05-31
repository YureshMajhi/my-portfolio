import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0b0c10] flex justify-center items-center"
    >
      <form
        action="https://getform.io/f/7fec332f-d9c3-413a-bc7f-4d0c02d88c10"
        method="POST"
        className="max-w-[600px] flex flex-col mx-auto w-full p-2"
      >
        <div className="pb-8 text-gray-300">
          <p className="text-4xl font-bold border-b-4 border-[#66fcf1] inline">
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
          required
          className="p-2 bg-[#ccd6f6]"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="my-4  bg-[#ccd6f6] p-2"
        />
        <textarea
          name="message"
          rows="10"
          placeholder="Message"
          className="p-2  bg-[#ccd6f6]"
        ></textarea>

        <button className="border-2 border-[#45a29e] m-4 py-3 px-4 mx-auto text-gray-300 hover:bg-[#45a29e]">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
