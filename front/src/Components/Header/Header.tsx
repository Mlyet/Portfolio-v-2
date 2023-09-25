import { Fragment } from "react"
import logo from "../../assets/logo.png";

const Header = () => {
    return (
        <Fragment>
            <header className="bg-slate-800">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                    <img className="h-8 w-auto" src={logo} alt="My icon" />
                </a>
                </div>
                <div className="flex lg:hidden">
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                <div className="relative">
                    <button type="button" className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white" aria-expanded="false">
                    A Propos
                    </button>
                </div>

                <a href="#" className="text-sm font-semibold leading-6 text-white">Mon parcours</a>
                <a href="#" className="text-sm font-semibold leading-6 text-white">Mes projets</a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="#" className="text-sm font-semibold leading-6 text-white">Log in <span aria-hidden="true">&rarr;</span></a>
                </div>
            </nav>
            {/* Mobile menu, show/hide based on menu open state. */}
            <div className="lg:hidden " role="dialog" aria-modal="true">
                {/* Background backdrop, show/hide based on slide-over state. */}
                <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-slate-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                        <img src={logo} alt="my icon" className="h-8 w-auto sm:hiden"/>
                        <div className="-mx-3">
                        <button type="button" className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false">
                            A Propos
                        </button>
                        </div>
                        <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50">Mon Parcours</a>
                        <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50">Mes Projets</a>
                    </div>
                    <div className="py-6">
                        <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50">Log in</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </header>
        </Fragment>
    )
}
export default Header;