import React from "react";

const AboutMe = () => {
    const language = ['Javascript', 'Typescript'];
    const backendTechs = ['Node.js'];
    const frontendTechs = ['React', 'Next.js', 'TailwindCSS', 'styled-components'];
    const mobileTechs = ['React Native', 'Expo'];

    return <div>
        {/* Mobile */}
        <div id="page-about-me" className="relative h-auto mt-24 not-sr-only md:sr-only">
            <img className="z-10" src="/images/background-aboutme.jpg" alt="background-about-me" />
            <div className="mx-8">
                <div className="flex items-center justify-center">
                    <img className="w-1/2 object-cover rounded-full flex items-center justify-center p-8" src="/images/perfil.jpg" alt="perfil" />
                </div>

                <div className="col-span-1 row-span-1 flex items-center justify-center p-4">
                    <p className="text-justify">
                        <p className="text-blue-600 text-4xl">Olá</p>

                        <span className="text-justify">
                            me chamo Gabriel Paz Dos Santos, desenvolvedor FullStack apaixonado por tecnologia e pela sua capacidade de resolver problemas.
                            Já programo a mais de 5 anos começando com 14 anos e hoje com 19 anos, busco sempre me aprimorar
                            <span className="text-blue-600"> #never-stop-learn</span>

                        </span>
                    </p>
                </div>

                <div className="col-span-1 row-span-1 flex items-center justify-center p-4">
                    <p className="text-justify">
                        Minha ocupação atual é de desenvolvedor FullStack como freelancer, estudante de graduação e bolsista como desenvolverdor de software.
                        Desenvolvendo sistemas para tratamento de dados, amotragem, sites e aplicativos.
                    </p>
                </div>
            </div>
        </div>

        <div id="page-about-me" className="relative md:mx-16 mx-8 mt-24 sr-only md:not-sr-only">
            <img className="w-full h-96 max-h-72 object-cover rounded-sm relative z-10" src="/images/background-aboutme.jpg" alt="background-about-me" />
            <div className="w-full h-auto relative z-20 grid grid-cols-3 grid-rows-1">
                <div className="col-span-1 row-span-1 flex items-center justify-center p-4">
                    <p className="text-justify">
                        <p className="text-blue-600 text-4xl">Olá</p>

                        <span className="text-justify">
                            me chamo Gabriel Paz Dos Santos, desenvolvedor FullStack apaixonado por tecnologia e pela sua capacidade de resolver problemas.
                            Já programo a mais de 5 anos começando com 14 anos e hoje com 19 anos, busco sempre me aprimorar
                            <span className="text-blue-600"> #never-stop-learn</span>

                        </span>
                    </p>
                </div>
                <div className="col-span-1 row-span-1 flex items-center justify-center">
                    <img className="col-span-1 row-span-1 object-cover rounded-full flex items-center justify-center p-8" src="/images/perfil.jpg" alt="perfil" />
                </div>
                <div className="col-span-1 row-span-1 flex items-center justify-center p-4">
                    <p className="text-justify">
                        Minha ocupação atual é de desenvolvedor FullStack como freelancer, estudante de graduação e bolsista como desenvolverdor de software.
                        Desenvolvendo sistemas para tratamento de dados, amotragem, sites e aplicativos.
                    </p>
                </div>

                <div className="col-span-1 row-span-1"></div>
                <div className="col-span-1 row-span-1"></div>
                <div className="col-span-1 row-span-1"></div>

            </div>
        </div>
    </div>
};

export default AboutMe;