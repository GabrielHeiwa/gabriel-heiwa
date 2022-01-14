import React from 'react';

const Skills: React.FC = () => {
    const skills = [
        {
            name: 'HTML5',
            source: '/images/skills/html-5-icon.png',
            image: ({ class_name, source }) => <img className={class_name} src={source} alt="HTML5" />,
        },
        {
            name: 'CSS3',
            source: '/images/skills/css-3-icon.png',
            image: ({ class_name, source }) => <img className={class_name} src={source} alt="CSS3" />,
        },
        {
            name: 'JavaScript',
            source: '/images/skills/javascript-icon.png',
            image: ({ class_name, source }) => <img className={class_name} src={source} alt="JavaScript" />,
        },
        {
            name: 'TypeScript',
            source: '/images/skills/typescript-icon.png',
            image: ({ class_name, source }) => <img className={class_name} src={source} alt="TypeScript" />,
        },
        {
            name: 'React e React-Native',
            source: '/images/skills/react-icon.png',
            image: ({ class_name, source }) => <img className={class_name} src={source} alt="React" />,
        },
        {
            name: 'Node.js',
            source: '/images/skills/nodejs-icon.png',
            image: ({ class_name, source }) => <img className={class_name} src={source} alt="Node.js" />,

        },
        {
            name: 'Tailwindcss',
            source: '/images/skills/tailwindcss-icon.png',
            image: ({ class_name, source }) => <img className={class_name} src={source} alt="Tailwindcss" />,
        }
    ];

    return <div className='my-12'>
        {/* PC */}
        <div className='bg-blue-900 sr-not md:not-sr-only'>
            <div className="w-auto flex flex-row items-center justify-center flex-wrap">
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center justify-center p-4">
                        {skill.image({ class_name: 'w-16 h-16 object-contain mx-4', source: skill.source })}
                        <p className="text-center text-sm text-white font-semibold">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
        
        {/* Mobile */}
        <div className='not-sr-not md:sr-only'>Mobile</div>
    </div>
};

export default Skills;