import Image from "next/image";
import logo from '../../../public/assets/logo/logo.png';



const Banner = () => {
    return (
        <main>
            <div className="px-6 lg:px-8">
                <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image">
                    <Image className="m-auto mt-40" src={logo} alt="logo-image" width={700} />
                    <div className="text-center">
                        <p className="mt-6 text-lg leading-8 text-bluegray">
                        </p>
                    </div>


                    <div className="text-center mt-8">
                        <button type="button" className='text-15px rounded-2xl text-white font-medium bg-[#37a4db] py-5 px-10 mt-2'>
                            Learn More
                        </button>
                        <button type="button" className='text-15px ml-4 rounded-2xl mt-2 text-blue transition duration-150 ease-in-out hover:text-white hover:bg-blue font-medium py-5 px-10 border border-lightgrey'>
                            Contact Us
                        </button>
                        
                    </div>
                    <div className="mt-[20px]" >
                        <Image className="mt-60 outline-tiny" src={'/assets/banner/dashboard.png'} alt="banner-image" width={1200} height={598} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Banner;
