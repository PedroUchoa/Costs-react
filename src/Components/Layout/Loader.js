import styles from './Loader.module.css'

import loading from '../../Imgs/loading.svg'

function Loader() {
  return (
      <div className={styles.loader_container}>
        <img src={loading} alt='Loading' className={styles.loader} />
    </div>
  )
}

export default Loader