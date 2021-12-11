import React from "react";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"


function Footer()
{
    return (
        <div className = "py-5 border-t-3/2">
            <div className = "flex justify-center mt-4">
            <a className = "text-xl m-1 p-1 sm:m-2 sm:p-2 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300 rounded-full" href = "https://www.github.com/bpyle02">
                <FaGithub />
                <span className = "sr-only">Github</span>
            </a>
            <a className = "text-xl m-1 p-1 sm:m-2 sm:p-2 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300 rounded-full" href = "https://www.instagram.com/b.pyle02">
                <FaInstagram />
                <span className = "sr-only">Instagram</span>
            </a>
            <a className = "text-xl m-1 p-1 sm:m-2 sm:p-2 text-twitter hover:bg-twitter hover:text-white transition-colors duration-300 rounded-full" href = "https://www.instagram.com/b.pyle02">
                <FaTwitter />
                <span className = "sr-only">Twitter</span>
            </a>
            <a className = "text-xl m-1 p-1 sm:m-2 sm:p-2 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300 rounded-full" href = "mailto:mail4brando@gmail.com">
                <FaEnvelope />
                <span className = "sr-only">Email</span>
            </a>
            <a className = "text-xl m-1 p-1 sm:m-2 sm:p-2 text-linkedin hover:bg-linkedin hover:text-white transition-colors duration-300 rounded-full" href = "https://www.linkedin.com/in/brandon-pyle">
                <FaLinkedin />
                <span className = "sr-only">LinkedIn</span>
            </a>
            </div>
            <div className = "flex justify-center mt-4">
                <p className = "mb-4 text-black dark:text-gray-400">Created by Brandon Pyle using React + Tailwind</p>
            </div>
        </div>
    )
}

export default Footer;