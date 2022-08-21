import { useState, useEffect } from 'react'


import Style from './ProjectForms.module.css'
import Input from '../Form/Input'
import Select from '../Form/Select'
import SubmitButton from '../Form/SubmitButton'


function ProjectForms({btnText, handleSubmit, projectData}) {

    const [categories, setCategories] = useState([])
    const [project, setProject] =useState(projectData || {})

    useEffect(()=>{

        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        }).then((resp) =>  resp.json() )
            .then((data => 
                setCategories(data)
            ))
            .catch((err) =>  console.log(err) )
    }, [])

    const submit = (e) =>{
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e){
        setProject({...project, [e.target.name]: e.target.value})

    }

    function handleCategory(e) {
        setProject({ ...project, category:{
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        }, })
    }

    return (
        <form onSubmit={submit} className={Style.form}>

            <Input type='text'
                text='Nome do projeto:'
                placeholder='insira o nome do projeto'
                name='name' 
                handleOnChange={handleChange}
                value={project.name}
                />

            <Input type='number'
                text='Orçamento do projeto:'
                placeholder='insira o orçamento do projeto'
                name='budget' 
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}
                />

            <Select 
            name='category_id' 
            text='Selecione uma categoria:' 
            options={categories}
            handleOnChange={handleCategory}
            value={project.category ? project.category.id : ''}
            />
            
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForms