import { Fragment } from "react"
import logo from "../../assets/logo.png";

const Header = () => {
    return (
        <Fragment>
            <header className="bg-slate-800">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <img className="h-8 w-auto" src={logo} alt="My icon" />
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <button type="button" className="flex items-center rounded-lg px-3 py-2 text-md font-semibold leading-6 text-white hover:bg-gray-50 hover:text-black" aria-expanded="false">
                    A Propos
                    </button>
                <a href="#" className="text-md rounded-lg px-3 py-2 font-semibold leading-6 text-white hover:bg-gray-50 hover:text-black">Mon parcours</a>
                <a href="#" className="text-md rounded-lg px-3 py-2 font-semibold leading-6 text-white hover:bg-gray-50 hover:text-black">Mes projets</a>
                </div>
            </nav>
            {/* Mobile menu, show/hide based on menu open state. */}
            <div className="lg:hidden " role="dialog" aria-modal="true">
                {/* Background backdrop, show/hide based on slide-over state. */}
                <div className="inset-y-0 w-full bg-slate-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                            <div className="-mx-3">
                            <button type="button" className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black" aria-controls="disclosure-1" aria-expanded="false">
                                A Propos
                            </button>
                            </div>
                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 font-semibold text-white hover:bg-gray-50 hover:text-black">Mon Parcours</a>
                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-50 hover:text-black">Mes Projets</a>
                        </div>
                    </div>
                </div>
            </div>
            </header>
        </Fragment>
    )
}
export default Header;