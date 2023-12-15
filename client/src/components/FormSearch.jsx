import { useRef } from 'react'

const FormSearch = ({ setIdLocation, handleEmptyInput }) => {
  const idLocationValue = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmedValue = idLocationValue.current.value.trim()
    if (trimmedValue) {
        setIdLocation(trimmedValue)
    } else {
        handleEmptyInput()
    }    
  }
  return (
    <form onSubmit={handleSubmit} className="formsearch">
      <input
        placeholder="Enter id location (between 1 to 126)"
        type="text"
        ref={idLocationValue}
      />
      <button>Search</button>
    </form>
  )
}

export default FormSearch
