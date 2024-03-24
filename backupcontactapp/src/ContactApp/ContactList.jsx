import React,{Component} from "react";
 class ContactList extends Component {
    showContact=(contact)=>{
        this.props.selectedContact(contact)
    }
  render() {
    return (
     <>
     <h2>ContactList</h2>
     {/* <pre>{JSON.stringify(this.props)}</pre> */}
     <hr/>
     <table className="table table-striped">
        <thead className="bg-primary text-white">
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
            </tr>

        </thead>
        <tbody>
            {
                this.props.contacts.map((contact,i)=>{
                    return<tr key={i} onClick={this.showContact.bind(this,contact)}>
                       <td>{contact.login.uuid.substr(32)}</td>
                       <td>{contact.name.first}</td>
                       <td>{contact.email}</td>
                    </tr>
                })
            }
        </tbody>

     </table>
     </>
    )
  }
}

export default ContactList
