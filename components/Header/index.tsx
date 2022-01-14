import React from "react";
import { MenuIcon, UserIcon, XIcon, PhoneIcon, SparklesIcon } from "@heroicons/react/solid"

const Header = () => {
    const navigation = [
        { title: "Sobre mim", go: "#page-about-me", icon: () => <UserIcon className="w-8 h-8" /> },
        { title: "Portifólio", go: "#page-portifolio", icon: () => <SparklesIcon className="w-8 h-8" /> },
        { title: "Contato", go: '#page-contact', icon: () => <PhoneIcon className="w-8 h-8" /> },
    ];

    const [showMenuNavigation, setShowMenuNavigation] = React.useState(false);
    const handleClickOpenMenuNavigation = () => setShowMenuNavigation(current => !current);

    const [selected, setSelected] = React.useState(navigation[0]);

    return <div>
        <div id="page-header" className="w-auto h-auto max-h-20 bg-white mx-2 py-2 rounded-md flex flex-col justify-between items-center shadow-md fixed inset-0 z-30 not-sr-only md:sr-only">
            <div className="w-full h-full flex flex-row justify-between items-center absolute">

                <div className="w-12 h-12 px-2 ml-2 rounded-md bg-blue-600 flex items-center justify-center">
                    <p className="text-white text-lg font-mono">G</p>
                </div>

                <span className="font-mono font-semibold">Gabriel Heiwa</span>

                {!showMenuNavigation
                    ? <MenuIcon
                        onClick={handleClickOpenMenuNavigation}
                        className="w-12 h-12 mr-2 text-blue-600 hover:text-blue-700 cursor-pointer" />
                    : <XIcon onClick={handleClickOpenMenuNavigation}
                        className="w-12 h-12 mr-2 text-blue-600 hover:text-blue-700 cursor-pointer" />}

            </div>

            {showMenuNavigation && <>
                <div className="w-full h-auto bg-gray-100 mt-20 flex flex-col justify-between">
                    <div className="w-full h-full flex flex-col justify-between">
                        {navigation.map((item, index) => (
                            <div
                                key={index}
                                className="w-full h-full flex flex-col px-2 py-2 text-center hover:text-blue-700"
                                onClick={() => {
                                    setSelected(item);
                                    setShowMenuNavigation(false);
                                }}
                            >
                                <a href={item.go}>
                                    <div className="w-full h-full flex flex-row items-center text-blue-700 hover:bg-blue-200  p-1 rounded-sm transition delay-50">
                                        <div className="mx-1">
                                            {item.icon()}
                                        </div>
                                        <span className="text-black text-sm ml-1">{item.title}</span>
                                    </div>
                                </a>
                            </div>))}
                    </div>
                </div>
            </>}
        </div>

        <header id="page-header" className="w-auto h-auto max-h-20 bg-white mx-4 md:mx-16 shadow-lg grid grid-cols-5 fixed inset-0 z-30 sr-only md:not-sr-only">

            <div className="w-auto h-full flex items-center justify-start col-span-2 place-self-auto">
                <div className="w-8 h-8 ml-4 bg-blue-600 rounded-md flex items-center justify-center">
                    <span className="text-white">G</span>
                </div>
            </div>

            <div className="w-full h-full flex items-center justify-center col-span-1">
                <span className="font-mono">Gabriel Heiwa</span>
            </div>

            <div className="w-full h-full col-span-2 flex items-center justify-end">
                {navigation.map((item, index) => (
                    <a key={index} href={item.go} className="p-4 w-auto h-auto">
                        <span className="text-sm delay-75 hover:text-blue-800 hover:font-semibold">{item.title}</span>
                    </a>
                ))}
            </div>

        </header>
    </div>

};

export default Header;