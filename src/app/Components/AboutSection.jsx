"use client";
import React ,{useTransition,useState}from 'react';
import Image from 'next/image';
import HandelTabButton from './HandelTabButton';

const TabData =[
    {
        id: "skills",
        title: "Skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>JavaScript</li>
                <li>React</li>
                <li>NextJs</li>
                <li>HTML5</li>
                <li>CSS</li>
                <li>JAVA</li>
                <li>Python</li>
                <li>SQL</li>
                <li>Arduino</li>
            </ul>
        )

    },
    {
        id: "education",
        title: "Education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Henegama Central College </li>
                <li>University of Sri Jayewardenapura</li>
            </ul>
        )

    },
    {
        id: "experience",
        title: "Experience",
        content: (
            <ul className='list-disc pl-2'>
                <li>Web Developer Intern in Neo Space lab of Open University</li>
            </ul>
        )

    },
    {
        id: "tools",
        title: "Tools",
        content: (
            <ul className='list-disc pl-2'>
                <li>Mathematica</li>
                <li>Proteus 8</li>
                <li>MS Office</li>
                <li>Maple</li>
                <li>MathLab</li>
            </ul>
        )

    }
]

const AboutSection = () => {
    const [Tab,setTab] = useState("skills");
    const [IsPending,  StartTransition] = useTransition();

    const HandelTabChange = (id) => {
        StartTransition(() => {
            setTab(id);
        });
    }
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16'>
            <Image src='/Images/about-image.png' alt='left-image' width={500} height={500} />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full ' >
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'> As a full-stack web developer, I craft engaging web experiences, eager to learn and collaborate, specializing in dynamic applications with a commitment to excellence and innovation.
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <HandelTabButton 
                        selectTab={() => HandelTabChange("skills")}
                        active={Tab === "skills"}>
                        {" "}
                        Skills{" "}
                    </HandelTabButton>
                    <HandelTabButton 
                        selectTab={() => HandelTabChange("education")}
                        active={Tab === "education"}>
                        {" "}
                        Education{" "}
                    </HandelTabButton>
                    <HandelTabButton 
                        selectTab={() => HandelTabChange("experience")}
                        active={Tab === "experience"}>
                        {" "}     
                        Experience{" "}
                    </HandelTabButton>
                    <HandelTabButton 
                        selectTab={() => HandelTabChange("tools")}
                        active={Tab === "tools"}>
                        {" "}     
                        Tools{" "}
                    </HandelTabButton>
                </div>
                <div className='mt-8'>{TabData.find((t) => t.id === Tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
