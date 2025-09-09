import { assets } from "../../assets/assets";


export function About () {
    return(
        <main className="pb-72 items-center text-white">
            <div className="flex justify-start items-center gap-8">
                <div className="grid grid-cols-2 lg:grid-cols-10 gap-5 lg:max-w-[1300px] max-w-[600px] w-full">
                    <div className="flex-col gap-7 lg:col-span-6 lg:h-[250px] col-span-1 rounded-4xl bg-gradient-to-r from-orange-200 via-orange-100 to-orange-100 items-start flex text-black text-2xl pt-8 px-10">
                        <p className="w-full text-left text-[21px] leading-8 mt-4">
                            I'm <span className="font-bold">Facundo Chifflet</span>, a frontend developer. I focus on creating <span className="font-bold">clean</span>, <span className="font-bold">responsive</span>, and <span className="font-bold">user-friendly</span> experiences.
                        </p>
                        <button className="flex items-center gap-3 cursor-pointer bg-[#2F3A42] text-white px-8 py-3 rounded-full text-[18px] font-semibold hover:bg-[#38444e]">
                            <img src={assets.contact_icon} alt="Contact icon" />
                            Contact me
                        </button>
                    </div>
                    <div className="flex items-center justify-center lg:col-span-4 lg:h-[240px] sm:col-span-2 bg-[#B9D9D9] rounded-4xl "></div>

                    <div className="lg:col-span-4 h-[200px] lg:h-[240px] rounded-4xl justify-center items-center flex">
                        <img className="object-cover w-full h-full rounded-4xl" src="https://es.react.dev/images/og-home.png" alt="React image" />
                    </div>
                    <div className="flex flex-col gap-5 col-span-2">
                        <div className="col-span-2 h-[110px] bg-[#B9D9D9] rounded-4xl justify-center items-center flex gap-4 text-2xl font-bold text-black">
                            <span className="text-5xl">10+</span>
                            <span className="text-[22px] ml-1">projects</span>
                        </div>
                        <div className="lg:col-span-2 lg:h-[110px] bg-[#B9D9D9] rounded-4xl justify-center items-center flex gap-4 text-2xl font-black text-black">
                            <span className="text-5xl">1</span>
                            <span className="text-[22px] ml-1">year exp.</span>
                        </div>
                    </div>
                    <div className="lg:col-span-4 lg:h-[240px] bg-[#141414ec] rounded-4xl justify-between items-start flex p-10">
                        <div className="flex flex-col text-left justify-between">
                            <span className="text-4xl font-bold ">Need</span>
                            <span className="text-4xl font-bold">more?</span>
                        </div>

                        <div className="flex gap-3 flex-col justify-center">
                            <p className="font-semibold">Check my work</p>
                            <button className="text-left flex items-center gap-3 cursor-pointer bg-[#2F3A42] text-white px-3 py-2 rounded-full text-[18px] font-semibold hover:bg-[#38444e]">
                                See more
                                <img className="w-5" src={assets.search_icon} alt="See more icon" />
                            </button>
                        </div>
                    </div>
                </div>              
            </div>
        </main>
    )
}