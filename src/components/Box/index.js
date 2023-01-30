/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import Button from '../Button'
import DropDown from '../DropDown'
import Form from '../Form'
import './Box.css'


const Box = (props) => {
    const teams = [
        'Programação',
        'Front-End',
        'DataScience',
        'Devops',
        'UX Design',
        'Mobile',
        'Inovação e Gestão'
    ]
    const [name, setName] = useState('')
    const [office, setOffice] = useState('')
    const [picture, setPicture] = useState('')
    const [team, setTeam] = useState('')

    const toSave =(event) => {
        event.preventDefault()
        props.toEmployeeRegistered({
            name: name,
            office: office,
            picture: picture,
            team: team
        })
    }
    return (
        <section className="box">
            <form onSubmit={toSave}>
                <h2>Fill in the details to create a card</h2>
                <Form mandatory = {true} 
                    label="Name" 
                    placeholder="Type your name:" 
                    valor={name}    
                    toModify={valor => setName(valor)}
                />
                <Form mandatory = {true} 
                    label="Office" 
                    placeholder="Type your position :" 
                    valor={office}
                    toModify={valor => setOffice(valor)}
                />
                <Form mandatory = {true} 
                    label="Picture" 
                    placeholder="Enter the path of your image:"
                    valor={picture}
                    toModify={valor => setPicture(valor)}
                />
                <DropDown 
                    mandatory={true}
                    label = "Teams" 
                    items={teams}
                    valor={team}
                    toModify={valor => setTeam(valor)}
                />
                <Button>
                    Join Card
                </Button>
            </form>
        </section>
    )

}

export default Box