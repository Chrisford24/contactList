import { useState, useEffect } from 'react'
const contactAPI = 'http://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/';



export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(null);
    useEffect(()=>{
        async function singleContact() {
            try{
                const response = await fetch(`${contactAPI}${selectedContactId}`);
                const jsonData = await response.json();
                setContact(jsonData)
                console.log("This is from single: ", contact)
            } catch(error) {
                console.log(error);
            } 
        }
        singleContact();
        
    }, []);

    return(
        <table>
            <thead>
                <tr>
                    <th colSpan="3">Contact List</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
                {
                    contact.map((contact) => {
                        return <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId}/>
                    })
                }
            </tbody>
        </table>
    )
};