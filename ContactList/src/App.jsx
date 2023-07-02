import ConstactList from './componets/ContactList'
import './App.css'
import { useState } from 'react'


function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)


  return (
    <>
      {selectedContactId === null && <ConstactList setSelectedContactId={setSelectedContactId} />}
    </>
  )
}

export default App
