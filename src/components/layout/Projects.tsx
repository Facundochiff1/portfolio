import { assets } from "../../assets/assets";

export function Projects () {
    return (
        <section className="flex flex-col items-center justify-center pb-72 ">
            <h1 className="pb-8 text-4xl text-black font-bold w-[1300px] text-left">Projects</h1>
            <div className="grid grid-cols-2 gap-5 w-[1300px]">
                <div className="group relative h-[350px] rounded-xl overflow-hidden">
                    <img className="w-full h-full object-cover flex items-center rounded-xl group-hover:scale-101 transition-all duration-150" src={assets.project_1_photo} alt="Spotify-Clone project" />

                    <div className="absolute inset-0 bg-[#00000067] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-start justify-end p-4 pb-6 rounded-xl cursor-pointer text-left">
                        
                        <div className="absolute top-0 right-0 bg-[#333333c2] rounded-full m-3">
                            <a href="https://spotify-clone-addi.vercel.app/">
                                <img className="w-7 h-7 m-2" src={assets.link_project_icon} alt="" />
                            </a>
                        </div>
                        <h2 className="text-white text-[21px] font-bold">Spotify Clone</h2>
                        <p className="text-white text-[19px] ">A music app for listen your favourites hits</p>
                        
                        <div className="flex text-white gap-3 mt-2">
                            <span className="bg-[#333333c2] px-2 py-1 rounded-full">React</span>
                            <span className="bg-[#333333c2] px-2 py-1 rounded-full">TypeScript</span>
                            <span className="bg-[#333333c2] px-2 py-1 rounded-full">TailwindCSS</span>
                            <span className="bg-[#333333c2] px-2 py-1 rounded-full">React Router</span>
                        </div>
                    </div>
                </div>
                <div className="group relative h-[350px] rounded-xl overflow-hidden">
                    <img className="w-full h-full object-cover flex items-center rounded-xl group-hover:scale-101 transition-all duration-150" src={assets.project_2_photo} alt="Spotify-Clone project" />

                    <div className="absolute inset-0 bg-[#00000067] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-start justify-end p-4 pb-6 rounded-xl cursor-pointer text-left">
                        
                        <div className="absolute top-0 right-0 bg-[#333333c2] rounded-full m-3">
                            <a href="#">
                                <img className="w-7 h-7 m-2" src={assets.link_project_icon} alt="" />
                            </a>
                        </div>
                        <h2 className="text-white text-[21px] font-bold">Preguntados</h2>
                        <p className="text-white text-[19px] ">A music app for listen your favourites hits</p>
                        
                        <div className="flex text-white gap-3 mt-2">
                            <span className="bg-[#333333c2] px-2 py-1 rounded-full">Python</span>
                            <span className="bg-[#333333c2] px-2 py-1 rounded-full">Tkinter</span>
                            <span className="bg-[#333333c2] px-2 py-1 rounded-full">Pandas</span>
                        </div>
                    </div>
                </div>
                <div className="group relative h-[350px] rounded-xl overflow-hidden">
                    <img className="w-full h-full object-cover" src="https://static0.xdaimages.com/wordpress/wp-content/uploads/2018/03/youtube-dark.png" alt="" />
                    <div className="absolute inset-0 bg-[#00000067] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-start justify-end p-4 pb-6 rounded-xl cursor-pointer text-left">
                        
                        <div className="absolute top-0 right-0 bg-[#333333c2] rounded-full m-3">
                            <a href="#">
                                
                            </a>
                        </div>
                        <h2 className="text-white text-[21px] font-bold">Clone Youtube</h2>
                        <p className="text-white text-[19px] ">Currently in development...</p>
                        
                        <div className="flex text-white gap-3 mt-2">
                            <span className="bg-[#333333c2] px-2 py-1 rounded-full">React</span>
                            <span className="bg-[#333333c2] px-2 py-1 rounded-full">TypeScript</span>
                            <span className="bg-[#333333c2] px-2 py-1 rounded-full">TailwindCSS</span>
                        </div>
                    </div>
                </div>
                <div className="group relative h-[350px] bg-black rounded-xl overflow-hidden">
                    <img className="w-full h-full object-contain" src="https://i.pinimg.com/1200x/3a/a2/f9/3aa2f99ceb2c222358b47187de5159aa.jpg" alt="" />
                    <div className="absolute inset-0 bg-[#00000067] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-start justify-end p-4 pb-6 rounded-xl cursor-pointer text-left">
                        
                        <div className="absolute top-0 right-0 bg-[#333333c2] rounded-full m-3">
                            <a href="#">
                                
                            </a>
                        </div>
                        <h2 className="text-white text-[21px] font-bold">Message app</h2>
                        <p className="text-white text-[19px] ">Currently in development...</p>
                        
                        <div className="flex text-white gap-3 mt-2">
                            <span className="bg-[#333333c2] px-2 py-1 rounded-full">React</span>
                            <span className="bg-[#333333c2] px-2 py-1 rounded-full">TypeScript</span>
                            <span className="bg-[#333333c2] px-2 py-1 rounded-full">TailwindCSS</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}