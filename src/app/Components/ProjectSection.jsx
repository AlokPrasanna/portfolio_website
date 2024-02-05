"use client";
import React, {useState,useRef} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const ProjectData = [
    {
        id:1,
        title: "Movie Reviews Site",
        description: "Project 1 discription",
        image: "/Projects/1.png",
        tag: ["All","Web"],
        gitUrl:"https://github.com/AlokPrasanna/movies_rating_site",
        previewUrl:"https://65b78d7f213eee25fb80d01a--serene-madeleine-3ae9c3.netlify.app"

    },
    {
        id:2,
        title: "Student Management System",
        description: "Project 2 discription",
        image: "/Projects/2.jpg",
        tag: ["All","Web"],
        gitUrl:"https://github.com/AlokPrasanna/Student-Managemet-System",
        previewUrl:"non"

    },
    {
        id:3,
        title: "Sciencetific Calculator",
        description: "Project 3 discription",
        image: "/Projects/3.png",
        tag: ["All","Web"],
        gitUrl:"https://github.com/AlokPrasanna/Online-Sciencetific-Calculator",
        previewUrl:"non"

    },
    {
        id:4,
        title: "Android MP3 player",
        description: "Project 4 discription",
        image: "/Projects/4.png",
        tag: ["All","Mobile"],
        gitUrl:"https://github.com/AlokPrasanna/MP3-Player",
        previewUrl:"non"

    },
    {
        id:5,
        title: "Company Distributive System",
        description: "Project 5 discription",
        image: "/Projects/5.png",
        tag: ["All"],
        gitUrl:"https://github.com/AlokPrasanna/Company-Distributive-System",
        previewUrl:"non"

    },{
        id:6,
        title: "Humidity & Temperature Saying Device",
        description: "Project 6 discription",
        image: "/Projects/6.png",
        tag: ["All"] ,
        gitUrl:"non",
        previewUrl:"non"
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
