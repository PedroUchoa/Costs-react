import {useNavigate} from 'react-router-dom'

import ProjectForms from '../Projects/ProjectForms'

import Style from './NewProject.module.css'

function NewProject() {

  const navigate = useNavigate()

  function createPost(project){
    
    //initalize costs and services

    project.cost= 0
    project.services = []

    fetch("http://localhost:5000/projects",{
      method: 'POST',
      headers:{
        'Content-type': 'application/json',
      },
      body: JSON.stringify(project),
    }).then((resp=> resp.json()))
    .then((data) =>{
      navigate('/Projects', {state: {message:'Projeto foi criado com sucesso'}})
    })
    .catch((err => console.log(err)))
  }


  return (
    <div className= {Style.newproject_container}>
        <h1>Criar Projeto</h1>
        <p>Crie seus projetos para depois adicionar os serviços</p>
        <ProjectForms handleSubmit={createPost} btnText='Criar Projeto' />
    </div>
  )
}

export default NewProject