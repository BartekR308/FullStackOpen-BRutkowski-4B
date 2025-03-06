const Filter = ({ filter, handleFilterChange }) => (
    <div>
      Szukaj: <input value={filter} onChange={handleFilterChange} />
    </div>
  )
  
  export default Filter
  