import Style from './Home.module.css'
import savings from '../../Imgs/savings.svg'
import LinkButton from '../Layout/LinkButton'

function Home() {
  return (
    <section className={Style.home_container}>
      <h1>Bem-vindo ao <span>Costs</span></h1>
      <p>Comece a gerenciar seus projetos agora mesmo!</p>
      <LinkButton to='/newproject' text='Criar Projeto' />
      <img src={savings} alt='Imagem de um cofrinho' />
    </section>

  )
}
 
export default Home