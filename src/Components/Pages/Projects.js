import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Message from "../Layout/Message"
import Container from "../Layout/Container"
import LinkButton from '../Layout/LinkButton'
import ProjectCard from '../Projects/ProjectCard'
import Loader from '../Layout/Loader'

import Styles from './Projects.module.css'


function Projects() {

    const [projects, setProjects] = useState([])
    const [removeLoader, setRemoveLoader] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation()

    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/projects', {
                method: 'GET',
                headers: {
                    'Contente-Type': 'application/json'
                },
            }).then((resp) => resp.json())
                .then((data) => {
                    setProjects(data)
                    setRemoveLoader(true)
                })
                .catch(err => console.log(err))
        }, 2000)
    }, [])


    function removeProject(id) {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((resp)=>resp.json())
        .then(() =>{
            setProjects(projects.filter((project)=> project.id !== id))
            setProjectMessage('Projeto removido com sucesso!!')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className={Styles.project_container}>
            <div className={Styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to='/newproject' text='Criar Projeto' />
            </div>
            {message && <Message msg={message} type='success' />}
            {projectMessage && <Message msg={projectMessage} type='success' />}
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            name={project.name}
                            id={project.id}
                            budget={project.budget}
                            category={project.category.name}
                            handleRemove={removeProject}
                        />
                    ))}
                {!removeLoader && <Loader />}
                {removeLoader && projects.length === 0 && (
                    <p>Não há projetos cadastrados!!</p>
                )}
            </Container>
        </div>
    )
}

export default Projects