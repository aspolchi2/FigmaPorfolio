import React from 'react'
import Projects from '../components/projects/Projects'
import { projects } from '../porfolio'
import '../components/sass/projects.scss'

const ProjectsContainer = () => {

  return (
    <div className='projectDiv'>
    <h2 className='title'>My Projects</h2>
    <div className='projectsContainer'>
        {projects.map((project, i) => (
            <Projects {...project}/>
        ) )}
    </div>
    </div>
  )
}

export default ProjectsContainer