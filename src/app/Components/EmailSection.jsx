"use client";
import React, {useState} from 'react';
import GithubIcon from '../../../public/github-icon.svg';
import LinkedinIcon from '../../../public/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  const [EmailSubmitted, setEmailSubmitted] = useState(false);
  const HandelSubmitButton = async (e) => {
    e.preventDefault();
    const Data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    }
    const JSONData = JSON.stringify(Data);
    const EndPoint = "/api/send";

    const Options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONData,
    }

    const Response = await fetch(EndPoint,Options);
    const ResData = await Response.json();
    //console.log(ResData);

    if(ResData.status === 200){
      console.log('Message Sent!');
      setEmailSubmitted(true);
    }
  }
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
      {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-full -left-4 transform -translate-x-1/2 -translate-1/2"></div> */}
      <div className='z-9'>
        <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
            {" "}
            I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you! Let's connect and explore exciting possibilities together.
        </p>
        <div className='socials flex flex-row gap-2'>
          <Link href="https://github.com/AlokPrasanna"><Image src={GithubIcon} alt='Github Icon' /></Link>
          <Link href="https://www.linkedin.com/in/alokprasanna/"><Image src={LinkedinIcon} alt='Linkedin Icon' /></Link>
        </div>
      </div>
      <div>
        <form className='flex flex-col' onSubmit={HandelSubmitButton}>
          <div className='mb-6'>
          <lable htmlFor="email" className='text-white block text-sm mb-2 font-medium'>Your email</lable>
            <input name='email' type="email" id='email' required className='bg-[#18191E] border-[#3335F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='example@gmail.com' />
          </div>
          <div className='mb-6'>
          <lable htmlFor="subject" className='text-white block text-sm mb-2 font-medium'>Subject</lable>
            <input name='subject' type="text" id='subject' required className='bg-[#18191E] border-[#3335F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='Just saying hi' />
          </div> 
          <div className='mb-6'>
            <label htmlFor='message' className='text-white block text-sm mb-2 font-medium'>Message</label>
            <textarea name='message' id='message' className='bg-[#18191E] border-[#3335F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder={"Let's talk about..."} />
          </div> 
          <button type='submit' className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>Send Message</button>
          {
            EmailSubmitted && (
              <p className='text-green-500 text-sm mt-2'>
                Email sent successfully!
              </p>
            )
          }
        </form>
      </div>
    </section>
  )
}

export default EmailSection
