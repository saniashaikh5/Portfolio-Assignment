import React from "react";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
    return(
        <div id="contact" className="pt-32 container">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-8 ">
                <h2 className="text-5xl" data-aos="zoom-in" >Get In Touch</h2>
                <p className="text-gray-600 text-[18px] pt-2"  data-aos="zoom-in">
                    Drop me a line , give me a call or sebd me a message by submitting the form
                </p>
                <div className="flex gap-3 items-center"  data-aos="zoom-in">
                <CiMail size={38}  /> smasooma934@gmail.com
                </div>
                <div className="flex gap-3 items-center"  data-aos="zoom-in">
                <BsTelephone size={38} /> 03060270633
                </div>
            </div>
            <div className="space-y-8">
                <div className="flex flex-col gap-1" data-aos="zoom-in" >
                    <label htmlFor="name">Name</label>
                    <input type="text"  className=" h-[40px] bg-transparent border border-x-gray-300" id="name"/>
                </div>
                <div className="flex flex-col gap-1" data-aos="zoom-in" >
                    <label htmlFor="email">Email</label>
                    <input type="text"  className=" h-[40px] bg-transparent border border-x-gray-300" id="email"/>
                </div>
                <div className="flex flex-col gap-1" data-aos="zoom-in" >
                    <label htmlFor="msg">Message</label>
                    <textarea  className="  bg-transparent border border-x-gray-300" id="msg" rows={8}>
                    </textarea>
                </div>
                <button className="bg-pink-500 p-2 px-4" data-aos="zoom-in" >Send</button>
            </div>
          </div>
        </div>
    )
}

export default Contact