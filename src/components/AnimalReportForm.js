import React, { useState } from 'react'
import { Flex, Box, Button, Card, Image, Heading, Text } from 'rebass'
import { Label, Input, Select, Textarea, Radio, Checkbox } from '@rebass/forms'

const InputFlex = (props) => (
  <Flex
    mb={3}
    flexWrap="wrap"
    {...props}
  />
)

const InputBox = (props) => (
  <Box 
    width = {[ 1, 2/3, 1/3 ]}
    px = {2}
    {...props}
  />
)

const InputLabel = (props) => (
  <Label width={1 / 3} p={2} {...props}/>
)


const AnimalReportForm = () => {
  const [species, setSpecies] = useState('dog')
  const [location, setLocation] = useState('')
  const [gender, setGender] = useState('unknown')
  const [color, setColor] = useState('')
  const [condition, setCondition] = useState('')
  const [identificationMark, setIdentificationMark] = useState('')
  const fileInput = React.createRef()
  
  const submitReport = (e) => {
    e.preventDefault()
    console.log("submitted", species, location, gender, fileInput.current.files, condition, identificationMark)

  }


  return (
    <>
      <Box as="form" onSubmit={submitReport} py={3}>
        <InputFlex>
          <InputBox>
            <Label htmlFor="file">Animal Photos</Label>
            <Input
              type="file"
              name="file"
              id="file"
              accept="image/jpg, image/jpeg"
              ref={fileInput}
            />
          </InputBox>
        </InputFlex>

        <InputFlex>
          <InputBox>
            <Label>Animal Species </Label>
            <Select
              name="species"
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
            >
              <option value="Dog">Dog</option>
              <option value="Pup">Pup</option>
              <option value="Cat">Cat</option>
              <option value="Kitten">Kitten</option>
              <option value="Cow">Cow</option>
              <option value="Other Bird">Other Bird</option>
              <option value="Other Animal">Other Animal</option>
              <option value="Other Reptile">Other Reptile</option>
              <option value="Buffalo">Buffalo</option>
              <option value="Bull">Bull</option>
              <option value="Calf">Calf</option>
              <option value="Crow">Crow</option>
              <option value="Donkey">Donkey</option>
              <option value="Goat">Goat</option>
              <option value="Guinea Pig">Guinea Pig</option>
              <option value="Horse">Horse</option>
              <option value="Monkey">Monkey</option>
              <option value="Peacock">Peacock</option>
              <option value="Pig">Pig</option>
              <option value="Pigeon">Pigeon</option>
              <option value="Rabbit">Rabbit</option>
              <option value="Rat">Rat</option>
              <option value="Snake">Snake</option>
              <option value="Squirrel">Squirrel</option>
              <option value="Turtle">Turtle</option>
            </Select>
          </InputBox>
        </InputFlex>

        <InputFlex>
          <InputBox>
            <Label>Animal Color</Label>
            <Select
              name="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            >
              <option value="Beige">Beige</option>
              <option value="Black">Black</option>
              <option value="Black and White">Black and White</option>
              <option value="White and Black">White and Black</option>
              <option value="Brown">Brown</option>
              <option value="Brown-dark">Brown-dark</option>
              <option value="Brown-light">Brown-light</option>
              <option value="Brown and Black">Brown and Black</option>
              <option value="Brown and White">Brown and White</option>
              <option value="Grey">Grey</option>
              <option value="Grey-dark">Grey-dark</option>
              <option value="Grey-light">Grey-light</option>
              <option value="Grey and Black">Grey and Black</option>
              <option value="Grey and White">Grey and White</option>
              <option value="Mixed Color">Mixed Color</option>
              <option value="White">White</option>
              <option value="Other">Other</option>
            </Select>
          </InputBox>
        </InputFlex>

        <InputFlex>
          <InputBox>
            <Label htmlFor="location">Animal Location</Label>
            {/* todo location auto complete using external service */}
            <Input
              id="location"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </InputBox>
        </InputFlex>

        <InputFlex flexDirection="column">
          <InputLabel>Gender</InputLabel>
          <InputFlex width={[1, 2 / 3, 1 / 3]}>
            <InputLabel>
              <Radio
                name="gender"
                id="red"
                value="male"
                checked={gender == 'male'}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </InputLabel>
            <InputLabel>
              <Radio
                name="gender"
                id="red"
                value="female"
                checked={gender == 'female'}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </InputLabel>
            <InputLabel>
              <Radio
                name="gender"
                id="red"
                value="unknown"
                checked={gender == 'unknown'}
                onChange={(e) => setGender(e.target.value)}
              />
              Unknown
            </InputLabel>
          </InputFlex>
        </InputFlex>

        <InputFlex>
          <InputBox>
            <Label htmlFor="animalcondition">Animal Condition </Label>
            <Select
              id="animalcondition"
              name="animalcondition"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            >
              <option value="Unwell">Unwell</option>
              <option value="Wounded-Open wound">Wounded-Open wound</option>
              <option value="Wounded-No visible wound">
                Wounded-No visible wound
              </option>
              <option value="Abandon">Abandon</option>
              <option value="Agressive">Agressive</option>
              <option value="Possible Rabies">Possible Rabies</option>
              <option value="Visible Tumor">Visible Tumor</option>
              <option value="Very Weak">Very Weak</option>
              <option value="Mange">Mange</option>
              <option value="Rectal Prolapse">Rectal Prolapse</option>
              <option value="Blind-full">Blind-full</option>
              <option value="Blind-partial">Blind-partial</option>
              <option value="Maggot infested">Maggot infested</option>
              <option value="Limping">Limping</option>
              <option value="Handicapped">Handicapped</option>
              <option value="Accident">Accident</option>
              <option value="Fractured">Fractured</option>
              <option value="Poisoned">Poisoned</option>
              <option value="In well (dry)">In well (dry)</option>
              <option value="In well (with water)">In well (with water)</option>
              <option value="Other (serious)">Other (serious)</option>
              <option value="Other (non serious)">Other (non serious)</option>
              <option value="Non corporation ABC">Non corporation ABC</option>
              <option value="Corporation ABC">Corporation ABC</option>
              <option value="Trapped">Trapped</option>
              <option value="Injured-major">Injured-major</option>
              <option value="Injured-minor">Injured-minor</option>
              <option value="Abused">Abused</option>
              <option value="Restless">Restless</option>
              <option value="Horns entangled">Horns entangled</option>
              <option value="Pregnant Mother">Pregnant Mother</option>
              <option value="Aged">Aged</option>
              <option value="Severe Ticks">Severe Ticks</option>
            </Select>
          </InputBox>
        </InputFlex>

        <InputFlex>
          <InputBox>
            <Label>Other Identification Mark</Label>
            <Textarea
              value={identificationMark}
              onChange={(e) => setIdentificationMark(e.target.value)}
            />
          </InputBox>
        </InputFlex>
      </Box>
    </>
  )
}

export { AnimalReportForm as default }
