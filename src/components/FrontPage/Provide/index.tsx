import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';

import marketing from '/public/FrontPage/provide/marketing.svg';
import graphic from '/public/FrontPage/provide/graphic.svg';
import heaking from '/public/FrontPage/provide/heaking.svg';
import uidesign from '/public/FrontPage/provide/uidesign.svg';

import arrow from '/public/FrontPage/provide/arrow.svg'

interface datatype {
    imgSrc: string;
    country: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        imgSrc: uidesign,
        country: "Booking",
        paragraph: 'Simplified enrolment for activities',

    },
    {
        imgSrc: graphic,
        country: "Payments",
        paragraph: 'Convenient payment processing',

    },
    {
        imgSrc: heaking,
        country: "Class Management",
        paragraph: 'Track student information and attendance',

    },
    {
        imgSrc: marketing,
        country: "Customer Experience",
        paragraph: 'Easy customer experience and onboarding',
    },
]


const Provide = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);


    return (
        <div id="services">

            <div className='mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>

                    {/* COLUMN-1 */}
                    <div className='col-span-6 flex justify-center'>
                        <div className="flex flex-col align-middle justify-center p-10">
                            <p className="text-4xl text-slate-800 lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start">Free Class Management</p>
                            <h4 className="mt-3 text-xl pt-4 font-normal lh-33 text-center lg:text-start text-gray-800">Easily integrate with Nobl Inc. for free class management, payments, and customer outreach</h4>

                            {/* <Link href={'/'} className="mt-4 text-xl font-medium text-blue flex gap-2 mx-auto lg:mx-0 space-links">Learn more <Image src={arrow} alt={'arrow'} width={20} height={20} /></Link> */}
                        </div>
                    </div>

                    <div className='lg:col-span-1'></div>

                    {/* COLUMN-2 */}
                    <div className={`col-span-6 lg:col-span-5 ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
                        style={{ transition: 'opacity 0.5s' }} ref={ref}>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-bluebg rounded-3xl'>
                            {Aboutdata.map((item, i) => (
                                <div key={i} className='bg-white rounded-3xl lg:-ml-32 p-6 shadow-xl'>
                                    <Image src={item.imgSrc} alt={item.imgSrc} width={64} height={64} className="mb-5" />
                                    <h4 className="text-2xl font-semibold text-slate-800">{item.country}</h4>
                                    <h4 className='text-lg font-normal text-gray-700 my-2'>{item.paragraph}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Provide;
