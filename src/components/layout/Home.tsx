import { assets } from "../../assets/assets";

export function Home () {
    return (
        <main className="min-h-screen bg-white flex w-auto lg:justify-between items-center">
            <div className="lg:text-start ">
                <h1 className="text-5xl lg:text-6xl font-bold">Create.</h1>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-600">Connect.</h1>
                <h1 className="text-5xl lg:text-6xl font-bold text-amber-500">Grow.</h1>
                <p className="mt-8 text-[19px] text-gray-700 font- max-w-md lg:text-[22px] w-[370px] lg:w-full">
                    I'm Facundo, a frontend web developer specialized in building fast and efficient web applications.
                </p>
                <div className="flex gap-6 justify-center items-center lg:justify-start">
                    <a href="https://github.com/Facundochiff1">
                        <img className="w-10 h-10 mt-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="GitHub link" />
                    </a>
                    <a href="https://www.linkedin.com/in/facundo-chifflet-69116b322/">
                        <img className="w-10 h-10 mt-4" src="https://images.icon-icons.com/2429/PNG/512/linkedin_logo_icon_147268.png" alt="GitHub link" />
                    </a>
                </div>
            </div>

            <div>
                <div className="hidden lg:w-[700px] lg:h-[500px] lg:flex items-center justify-center">
                    <img src={assets.background_image} alt="" />
                </div>
            </div>
        </main>
    )
}
