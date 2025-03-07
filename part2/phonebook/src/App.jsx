import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number: '040-123456' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  // Obsługa dodawania nowej osoby
  const addPerson = (event) => {
    event.preventDefault()
    const duplicate = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    
    if (duplicate) {
      alert(`${newName} jest już w książce telefonicznej`)
      return
    }

    const newPerson = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Książka telefoniczna</h2>
      <Filter filter={filter} handleFilterChange={(e) => setFilter(e.target.value)} />

      <h3>Dodaj nowy kontakt</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={(e) => setNewName(e.target.value)}
        newNumber={newNumber}
        handleNumberChange={(e) => setNewNumber(e.target.value)}
      />

      <h3>Numery</h3>
      <Persons persons={persons} filter={filter} />
    </div>
  )
}

export default App
