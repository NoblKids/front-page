import Link from "next/link";
import Image from "next/image";

import mask from '../../../../public/FrontPage/footer/mask.svg';
import email from 'public/FrontPage/footer/email.svg';

// MIDDLE LINKS DATA
interface ProductType {
    id: number;
    link: string[];
}

const products: ProductType[] = [
    {
        id: 1,
        link: ['Home', 'Popular', 'About', 'Contact'],
    },
    {
        id: 2,
        link: ['Help', 'Resources', 'Application', 'Team']
    }
]

const footer = () => {
    return (
        <div className="bg-[#000321] -mt-40">
            <div className="mx-auto max-w-2xl pt-48 px-4 sm:px-6 lg:max-w-7xl lg:px-8">


                    <div className='flex items-center align-center justify-center space-x-10 mb-5'>
                        <div className="flex gap-2">
                            <Image src={mask} alt="mask-icon" width={24} height={24} />
                            <h5 className="text-base font-normal text-white">Toronto, ON</h5>
                        </div>
                        {/* <div className="flex gap-2 pr-5">
                            <Image src={email} alt="email-icon" width={24} height={24} />
                            <h5 className="text-base font-normal text-white">support@noblkids.com</h5>
                        </div> */}
                    </div>

                {/* </div> */}

                {/* All Rights Reserved */}

                <div className='py-10 mt-10 lg:flex items-center justify-between border-t border-t-bordertop'>
                    <h4 className='flex w-auto m-auto align-center justify-center text-white text-md font-medium'>© 2023 NoblKids | All Rights Reserved</h4>
                    <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
                        {/* <h4 className='text-offwhite text-sm font-normal'><Link href="/" target="_blank">Privacy policy</Link></h4>
                        <div className="h-5 bg-bordertop w-0.5"></div>
                        <h4 className='text-offwhite text-sm font-normal'><Link href="/" target="_blank">Terms & conditions</Link></h4> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default footer;
