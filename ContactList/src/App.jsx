import ConstactList from './componets/ContactList'
import SelectedContact from './componets/SelectedContact'
import './App.css'
import { useState } from 'react'


function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)


  return (
    <>
      {selectedContactId ? <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} /> : <ConstactList setSelectedContactId={setSelectedContactId} />}
    </>
  )
}

export default App
