"use client";
import React, {useState,useRef} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const ProjectData = [
    {
        id:1,
        title: "Project 1",
        description: "Project 1 discription",
        image: "/Projects/1.png",
        tag: ["All","Web"],
        gitUrl:"/",
        previewUrl:"/"

    },
    {
        id:2,
        title: "Project 2",
        description: "Project 2 discription",
        image: "/Projects/2.png",
        tag: ["All","Web"],
        gitUrl:"/",
        previewUrl:"/"

    },
    {
        id:3,
        title: "Project 3",
        description: "Project 3 discription",
        image: "/Projects/3.png",
        tag: ["All","Web"],
        gitUrl:"/",
        previewUrl:"/"

    },
    {
        id:4,
        title: "Project 4",
        description: "Project 4 discription",
        image: "/Projects/4.png",
        tag: ["All","Web"],
        gitUrl:"/",
        previewUrl:"/"

    },
    {
        id:5,
        title: "Project 5",
        description: "Project 5 discription",
        image: "/Projects/5.png",
        tag: ["All","Web"],
        gitUrl:"/",
        previewUrl:"/"

    },{
        id:6,
        title: "Project 6",
        description: "Project 6 discription",
        image: "/Projects/6.png",
        tag: ["All","Mobile"] ,
        gitUrl:"/",
        previewUrl:"/"
    }
]

const ProjectSection = () => {
    const [Tag , setTag] = useState("All");
    const Ref = useRef(null);
    const isInView = useInView(Ref, {once: true});

    const HandelTagChange = (newTag) => {
        setTag(newTag);
    }

    const FilteredProjects = ProjectData.filter((p) => 
        p.tag.includes(Tag)
    );

    const CardVarient = {
        initial: {y:50 , opacity:0},
        animate: {y:0 , opacity:1}
    }
  return (
    <section>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={HandelTagChange} name="All" isSelected={Tag === "All"} />
        <ProjectTag onClick={HandelTagChange} name="Web" isSelected={Tag === "Web"} />
        <ProjectTag onClick={HandelTagChange} name="Mobile" isSelected={Tag === "Mobile"} />
      </div>
      <ul ref={Ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {FilteredProjects.map((p , index) => (  
            <motion.li key={index} variants={CardVarient} initial="initial" animate={isInView ? "animate" : "initial"} transition={{duration:0.3, delay: index*0.4}}>
                <ProjectCard 
                key={p.id} 
                title={p.title} 
                description={p.description} 
                imgUrl={p.image}
                gitUrl={p.gitUrl}
                previewUrl={p.previewUrl} 
            />
            </motion.li>
        ))}
    </ul>
    </section>
  )
}

export default ProjectSection
