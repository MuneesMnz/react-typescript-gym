import { useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";


import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
    isTopOfPage: boolean,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {

    const flexBetween = "flex justify-between items-center"
    const isAbouveMediumScreens = useMediaQuery("(min-width:1060px)")
    const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false)
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"




    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6 ${navbarBackground}`}>
                <div className={`${flexBetween} mx-auto w-5/6 `}>
                    <div className={`${flexBetween} w-full gap-16 `}>
                        {/* LEFT  */}
                        <img src={Logo} alt="logo" className="cursor-pointer" />
                        {/* RIGHT  */}
                        {isAbouveMediumScreens ? (<div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} gap-8 text-sm `}>
                                <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page="Home" />
                                <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page="Benifits" />
                                <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page="Our Classes" />
                                <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page="Contact Us" />

                            </div>
                            <div className={`${flexBetween} gap-8 `}>
                                <p>Sign In </p>
                                <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                            </div>
                        </div>) : (
                            <button className="rounded-full bg-secondary-500 p-2 " onClick={() => setIsMenuToggle(!isMenuToggle)}>
                                <Bars3Icon className="h-6 w-6 text-white" />
                            </button>
                        )}
                    </div>
                </div>

            </div>

            {/* MOBILE MODEL  */}
            {
                !isAbouveMediumScreens && isMenuToggle && (
                    <div className="fixed right-0 bottom-0 w-[300px] z-40 h-full bg-primary-100 drop-shadow-sm">
                        {/* CLOSE ICON  */}
                        <div className="flex justify-end p-12">
                            <button onClick={() => setIsMenuToggle(!isMenuToggle)}>
                                <XMarkIcon className="h-6 w-6 text-gray-400 cursor-pointer" />
                            </button>
                        </div>
                        {/* MENU ITEMS  */}

                        <div className={`${flexBetween} flex-col gap-6 text-xl `}>
                            <Link selectedPage={selectedPage} setIsMenuToggle={setIsMenuToggle} setSelectedPage={setSelectedPage} page="Home" />
                            <Link selectedPage={selectedPage} setIsMenuToggle={setIsMenuToggle} setSelectedPage={setSelectedPage} page="Benifits" />
                            <Link selectedPage={selectedPage} setIsMenuToggle={setIsMenuToggle} setSelectedPage={setSelectedPage} page="Our Classes" />
                            <Link selectedPage={selectedPage} setIsMenuToggle={setIsMenuToggle} setSelectedPage={setSelectedPage} page="Contact Us" />

                        </div>
                    </div>
                )
            }
        </nav>
    )
}
export default Navbar