import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Card({ title, description, link, image, company }) {
    return (
        <div className="flex flex-col justify-center items-center mt-4">
            <div className="relative flex flex-col rounded-[20px] w-[300px] bg-[#323232] bg-clip-border shadow-3xl shadow-shadow-500 p-4">
                <div className="h-full w-full">
                    <Link to={link} className="relative" target="_blank">
                        <img src={image} alt="" className="rounded-xl mb-4 h-[163px] object-cover" />
                        {/* <button className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-[#323232] p-2 text-brand-500 hover:cursor-pointer">
                            <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path></svg>
                            </div>
                        </button> */}
                    </Link>
                    <div className="mb-3 flex items-center justify-between px-1 overflow-hidden">
                        <div className="mb-2">
                            <p className="text-lg font-bold text-left">{title}</p>
                            <div className="h-16 overflow-y-auto">
                                <p className="mt-1 text-sm font-medium text-left">{description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between ">
                        <div className="flex">
                            <p className="!mb-0 text-sm font-bold text-brand-500">{company}</p>
                        </div>
                        <button href="" className="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700">
                            1
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Card;