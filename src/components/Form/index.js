import './Form.css'

const Form = (props) => {
    
    const placeholderMove = `${props.placeholder}...`
    const whenTyping = (evento) => {
        props.toModify(evento.target.value)
    }

    return (
        <div className="text-bar">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={whenTyping} 
            required={props.mandatory} placeholder = {placeholderMove}/>
        </div>
    )
}

export default Form