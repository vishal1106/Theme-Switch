import React, { useContext } from 'react'
import { Input,Stack,InputGroup,InputLeftElement,
  Button,InputRightElement } from '@chakra-ui/react'
import {PhoneIcon,CheckIcon} from "@chakra-ui/icons"
import themes from './Themes'
import { ThemeContext } from './ThemeContext'



const Todolist = () => {

  const {auth}=useContext(ThemeContext)


  return (
    <div 
   
    style={auth ? themes.black : themes.white }>
     <div style={{width:"40%",margin:"auto",paddingTop:"30px"}}>
     <Stack spacing={4}>
  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<PhoneIcon color='gray.300' />}
    />
    <Input type='tel' placeholder='Phone number' />
  </InputGroup>

  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      color='gray.300'
      fontSize='1.2em'
      children='$'
    />
    <Input placeholder='Enter amount' />
    <InputRightElement children={<CheckIcon color='green.500' />} />
  </InputGroup>
</Stack>
<Button colorScheme='blue' style={{marginTop:"20px"}}>Save</Button>
     </div>
    </div>
  )
}

export default Todolist