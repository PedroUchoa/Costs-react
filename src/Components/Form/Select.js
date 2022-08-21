import Styles from './Select.module.css'

function Select({ text, name, options, handleOnChange, value }) {
    return (
        <div className={Styles.form_controler}>
            <label htmlFor={name}>{text}</label>

            <select
                name='name'
                id='name'
                onChange={handleOnChange}
                value={value || ''}
            >
                <option>Selecione uma posição</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select