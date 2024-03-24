import React, { Component } from 'react'
import Axios from "axios"
import ContactList from "./ContactList"
import ContactDetails from "./ContactDetails"
 class ContactApp extends Component {
    constructor(props){
      super(props)
      this.state={
        contacts:[],
        selContact:{}
      }
    }
    componentDidMount(){
    Axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
    .then((resp)=>{
        this.setState({contacts:resp.data})
    })
    .catch(()=>{})
    }
    selectedContact=(contact)=>{
      this.setState({selContact:contact})
    }
  render() {
    return (
      <div>
        <h1>Contact app</h1>
        {/* <pre>{JSON.stringify(this.state.contacts)}</pre> */}
        <hr/>
        <div className='container'>
          <div className='row'>
            <div className='col-8'>
              {
                this.state.contacts.length>0?<>
                <ContactList contacts={this.state.contacts} selectedContact={this.selectedContact} />
                </>:null
              }
            </div>
              <div className='col-4'>
                {
                  Object.keys(this.state.selContact).length>0?<>
                  <ContactDetails contact={this.state.selContact}/>
                  </>:null
                }
              </div>
          </div>

        </div>
      </div>
    )
  }
}

export default ContactApp
