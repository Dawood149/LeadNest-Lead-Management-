import React from 'react'
import logo from '../assets/LeadNest-Logo.jpg'
import linkedIn from '../assets/linkedInn-Logo.webp'
import insta from '../assets/Insta-Icon.webp'
import fb from '../assets/Facebook-Icon.webp'

const aboutus = ["Overview", "Privacy Policy", "Terms and Conditions"];
const faq = ["General Questions", "Documentation", "Glossary of Terms"];

const Footer = () => {
    return (
        <>

            <footer className=" text-white bg-black mt-4">
                <div className='w-full flex p-10 gap-50'>

                    <div className=''>
                        <a href="/"><img src={logo} className='h-20 w-70' alt="" /></a>
                    </div>

                    <div className=''>
                        <p className='text-2xl mb-4'>About Us</p>
                        {aboutus.map((text, idx) => (
                            <li key={idx} className="hover:underline cursor-pointer">
                                {text}
                            </li>
                        ))}
                    </div>
                    <div>
                        <p className='text-2xl mb-4'>Support and FAQ's</p>
                        {faq.map((text, idx) => (
                            <li key={idx} className="hover:underline cursor-pointer">
                                {text}
                            </li>
                        ))}

                    </div>
                    <div>
                        <p className='text-2xl mb-4'>Lets Connect</p>
                        <div className="flex items-center gap-2">
                            <img className="w-12 h-12" src={linkedIn} alt="LinkedIn" />
                            <img className="w-12 h-12" src={insta} alt="Instagram" />
                            <img className="w-8 h-7" src={fb} alt="Facebook" />
                        </div>

                    </div>

                </div>


                <div className="sm:flex sm:items-center sm:justify-center xs:flex xs:items-center xs:justify-center xs:px-2 xxs:items-center xxs:justify-center xxs:px-2 py-2 px-52 bg-[#333333] sm:px-0">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 sm:w-full xs:w-full xxs:w-full">
                        © 2025{' '}
                        <a href="/" className="hover:underline">
                            LeadNest Inc.
                        </a>
                        . All Rights Reserved.
                    </span>

                </div>
            </footer>

        </>
    )
}

export default Footer