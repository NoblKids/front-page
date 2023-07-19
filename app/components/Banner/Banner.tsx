import Image from "next/image";



const Banner = () => {
    return (
        <main>
            <div className="px-6 lg:px-8">
                <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image">
                    <div className="text-center">
                        <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl  lg:text-7xl md:4px lh-96">
                            Nobl Kids
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-bluegray">
                            SaaS Class Management Software
                        </p>
                    </div>


                    <div className="text-center mt-5">
                        <button type="button" className='text-15px rounded-2xl text-white font-medium bg-blue py-5 px-10 mt-2'>
                            Our Services
                        </button>
                        <button type="button" className='text-15px ml-4 rounded-2xl mt-2 text-blue transition duration-150 ease-in-out hover:text-white hover:bg-blue font-medium py-5 px-10 border border-lightgrey'>
                            Get in touch
                        </button>
                        
                    </div>

                    <Image src={'/assets/banner/dashboard.svg'} alt="banner-image" width={1200} height={598} />
                </div>
            </div>
        </main>
    )
}

export default Banner;
