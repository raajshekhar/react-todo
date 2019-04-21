import React, { Component, Fragment } from 'react'
import './Email.css'
//import axios from 'axios'
import axios from './../service/axios-instance'
const TextInput = (props) => {
    return (
            <Fragment>
                <div  className='form-child'>
                <label htmlFor={ props.name }> { props.name } </label>
            <input
                type={ props.type }
                name={ props.name }
                value={ props.value }
                id={ props.name }
                onChange={props.handleChange} />
                </div>
            </Fragment>
    )
}

class EmailNotification extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const saveChanges = { [event.target.name]: event.target.value }
        this.setState({ ...saveChanges })
        console.log('event: ',this)
    }

    async handleSubmit(e){
       e.preventDefault()
        console.log('e: ',e)
        const {  name, email, message} = this.state;
        // const form = await axios.post('/orders.json', {
        //     name,
        //      email,
        //       message
        // })

        axios.get('/orders.json').then(e => console.log('Fetch: ', e))

    }


    render() {
        return (
            <div className="container">
                 <form onSubmit={this.handleSubmit} autoComplete='off'>
                    { Object.keys( this.state ).map( element => {
                        return (
                            <TextInput key={element}  type="text" className='form-child' name={element} value={ this.state[ element ] } handleChange={this.handleChange} />
                         )
                    }) }
                    
                    {/*  SUBMIT BUTTON  */}
                    <div className="form-child">
                        <input
                            type="button"
                            name="message"
                            id="submitButton"
                            value="submit"
                            onClick={this.handleSubmit} />
                    </div>
                    {/*  SUBMIT BUTTON  */}

                </form>
            </div>
        )
    }
}

export default EmailNotification