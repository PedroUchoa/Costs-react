import { useState } from 'react'

import Input from '../Form/Input'
import SubmitButton from '../Form/SubmitButton'

import styles from '../Projects/ProjectForms.module.css'



function ServiceForm({handleSubmit, textBtn, projectData}) {

    const [service, setService] = useState({})
    
    function submit(e) {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e) {
        setService({...service,[e.target.name]: e.target.value})
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type='text'
                text='Nome do serviço'
                name='name'
                placeholder='Insira o nome do serviço'
                handleOnChange={handleChange}
            />
            <Input
                type='number'
                text='Custo do serviço'
                name='cost'
                placeholder='Insira o valor total'
                handleOnChange={handleChange}
            />
            <Input
                type='text'
                text='Descrição do serviço'
                name='description'
                placeholder='Insira a descrição do serviço'
                handleOnChange={handleChange}
            />

            <SubmitButton text={textBtn}/>
        </form>
    )
}

export default ServiceForm