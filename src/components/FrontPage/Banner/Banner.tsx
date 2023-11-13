import Image from "next/image";
import logo from '/public/nobllogo.png';

import dashboardImage from '/public/FrontPage/dashboard.png';
import shapes from '/public/FrontPage/shapes.svg';
import arrowDown from '/public/FrontPage/arrowDown.svg';

import Link from 'next/link';
import Button from "../../Button";


import { useInView } from 'react-intersection-observer';
import { useCallback, useEffect, useState } from "react";


const Banner = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    const scrollToBottom = useCallback(() => {
        const totalScrollHeight = document.body.scrollHeight - window.innerHeight;
        let scrollY = window.scrollY || window.pageYOffset;
        const speed = 20; // Adjust speed, higher is slower

        const smoothScroll = () => {
            scrollY += (totalScrollHeight - scrollY) / speed;

            if (Math.abs(totalScrollHeight - scrollY) <= 1) {
                window.scrollTo(0, totalScrollHeight);
            } else {
                window.scrollTo(0, scrollY);
                requestAnimationFrame(smoothScroll);
            }
        };

        requestAnimationFrame(smoothScroll);
    }, []);

    return (
        <main>
            <div className="px-6 lg:px-8">
                <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image">
                    <Image className="m-auto mt-[110px]" src={logo} alt="logo-image" width={700} />
                    <div className="text-center">
                        <p className="mt-6 text-lg leading-8 text-bluegray">
                        </p>
                    </div>

                    <div className="mt-[75px] flex justify-center">
                        <p
                            className="text-center w-1/3 rounded-2xl font-bold hover:bg-[#FDAF39] hover:text-white text-white text-2xl bg-[#FBBB5B] py-5 px-10 mt-2'"
                        
                        >
                       App Under Construction
                        </p>
                        
                        
                    </div>

                    <Image className="animate-bounce opacity-50 mt-[70px] m-auto justify-center" alt="arrow-down" src={arrowDown} width={50} />

                    <div className="mt-[250px]" ref={ref} >
                        <Image className={`mt-[30px] shadow-2xl ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
                        style={{ transition: 'opacity 1.0s' }}
                        src={dashboardImage} alt="banner-image" width={1200} height={598} />
                    </div>

                    <div className="text-center mt-[50px]">
                        <a type="button" className={`w-1/5 font-bold text-30px rounded-2xl text-white bg-[#37a4db] py-5 px-[60px] mt-2 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                        style={{ transition: 'opacity 1.0s' }}
                        href="public/FrontPage/Nobl.pdf"
                        target="_blank"
                        rel="noopener noreferrer">
                            Learn More
                        </a>
                        
                        <button type="button" className={`w-1/5 font-medium text-30px ml-4 rounded-2xl mt-2 text-blue transition duration-150 ease-in-out py-5 px-10 border border-lightgrey ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                        style={{ transition: 'opacity 1.0s' }}
                        onClick={scrollToBottom}>
                            Contact Us
                        </button>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Banner;
