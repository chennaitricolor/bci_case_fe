import React, { useState } from 'react'

const AnimalReportForm = () => {
  const [animalType, setAnimalType] = useState('dog')
  const [additionalNotes, setAdditionalNotes] = useState('')
  const [animalCondition, setAnimalCondition] = useState('')
  const fileInput = React.createRef()
  
  const submitReport = (e) => {
    e.preventDefault()
    console.log("submitted", animalType, additionalNotes, animalCondition, fileInput.current.files)

  }


  return (
    <>
      <form onSubmit={submitReport}>
        <label htmlFor="file">
          Animal Photos
          <input
            type="file"
            name="file"
            id="file"
            accept="image/jpg, image/jpeg"
            ref={fileInput}
          />
        </label>
        <label> Enter location: </label>
        {/* todo location auto complete using external service */}

        <label>
          Animal Type:
          <select
            value={animalType}
            onChange={(e) => setAnimalType(e.target.value)}
          >
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="cow">Cow</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label>
          Animal Condition:
          <input type="text" value={animalCondition} onChange={(e) => setAnimalCondition(e.target.value)}/>
        </label>

        <label>
          Additional Notes:
          <textarea
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export { AnimalReportForm as default }
