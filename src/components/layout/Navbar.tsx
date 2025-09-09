export function Navbar() {
    return (
        <header className="fixed top-0 left-1/2 -translate-x-1/2 lg:w-full h-[65px] bg-white shadow-2xl z-50 ">
            <div className="lg:max-w-[1300px] mx-auto h-full flex items-center justify-between md:flex-row">
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full blur-[2px] bg-amber-500"></div>
                    <div className="text-lg font-bold">Facundo Chifflet</div>
                </div>
                <ul className="flex items-center gap-6">
                    <li>
                        <a href="#" className="bg-amber-500 font-bold text-white px-6 py-2 rounded-full hover:bg-amber-400 transition">Download CV</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}
