import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectData = [
    {
        id:1,
        title: "Project 1",
        description: "Project 1 discription",
        image: "/Projects/1.png",
        tag: ["Web"],
        gitUrl:"/",
        previewUrl:"/"

    },
    {
        id:2,
        title: "Project 2",
        description: "Project 2 discription",
        image: "/Projects/2.png",
        tag: ["Web"],
        gitUrl:"/",
        previewUrl:"/"

    },
    {
        id:3,
        title: "Project 3",
        description: "Project 3 discription",
        image: "/Projects/3.png",
        tag: ["Web"],
        gitUrl:"/",
        previewUrl:"/"

    },
    {
        id:4,
        title: "Project 4",
        description: "Project 4 discription",
        image: "/Projects/4.png",
        tag: ["Web"],
        gitUrl:"/",
        previewUrl:"/"

    },
    {
        id:5,
        title: "Project 5",
        description: "Project 5 discription",
        image: "/Projects/5.png",
        tag: ["Web"],
        gitUrl:"/",
        previewUrl:"/"

    },{
        id:6,
        title: "Project 6",
        description: "Project 6 discription",
        image: "/Projects/6.png",
        tag: ["Web"] ,
        gitUrl:"/",
        previewUrl:"/"
    }
]

const ProjectSection = () => {
  return (
    <div>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <button className='rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer'>All</button>
        <button className='rounded-full border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer'>Web</button>
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {ProjectData.map((p) => (  
            <ProjectCard 
                key={p.id} 
                title={p.title} 
                description={p.description} 
                imgUrl={p.image}
                gitUrl={p.gitUrl}
                previewUrl={p.previewUrl} 
            />
        ))}
    </div>
    </div>
  )
}

export default ProjectSection
