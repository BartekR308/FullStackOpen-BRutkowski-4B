const PersonForm = ({ addPerson, newName, handleNameChange, newNumber, handleNumberChange }) => (
    <form onSubmit={addPerson}>
      <div>
        Imię: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        Numer: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">Dodaj</button>
      </div>
    </form>
  )
  
  export default PersonForm
  