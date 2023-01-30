import './DropDown.css'

const DropDown = (props) => {
    console.log(props.items)

    return(
        <div className='drop-down'>
            <label>{props.label}</label>
            <select 
                onChange={event => props.toModify (event.target.value)} 
                required={props.required} 
                value={props.value}>

                {props.items.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default DropDown