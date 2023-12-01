import Image from "next/image";

const Newsletter = () => {
    return (
        <div className='mt-32 relative '>
            <div className="mx-auto w-auto md:w-3/5 bg-blue-500 rounded-3xl">
                <div className="">

                    {/* COLUMN-1 */}
                    {/* <div className='hidden lg:block'>
                        <div className='float-right pt-20 relative'>
                            <Image src={'/assets/newsletter/bgImage.png'} alt="bgimg" width={588} height={334} />
                            <div className="absolute top-10 right-0">
                                <Image src={'/assets/newsletter/leaf.svg'} alt="leafimg" width={81} height={81}/>
                            </div>
                            <div className="absolute bottom-8 left-2">
                                <Image src={'/assets/newsletter/circel.svg'} alt="circleimg" width={30} height={30}/>
                            </div>
                        </div>
                    </div> */}

                    {/* COLUMN-2 */}
                    <div className="p-10 flex flex-col justify-center">
                        <h3 className="flex justify-center text-4xl md:text-5xl font-semibold mb-3 text-white">Get in touch</h3>
                        <a className="flex justify-center underline mt-2 font-text-base text-lg font-bold mb-7 text-slate-800" href="mailto:support@noblkids.com">support@noblkids.com</a>
                        {/* <div className="flex gap-0">
                            <input type="Email address" name="q" className="py-4 text-sm w-full text-black bg-white rounded-l-lg pl-4" placeholder="@enter email-address" autoComplete="off" />
                            <button className="bg-midblue text-white font-medium py-2 px-4 rounded-r-lg">
                                <Image src={'/assets/newsletter/plane.svg'} alt="plane-img" width={20} height={20} />
                            </button>
                        </div> */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Newsletter;