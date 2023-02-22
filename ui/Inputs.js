
import {InputGroup, Input, InputLeftElement} from '@chakra-ui/react'

export default function Inputs({ikon, handleChange, value, isZero}){
return (
    <InputGroup variant='filled' color='brand.greyCyan'
            >
    <InputLeftElement 
        pointerEvents='none'
        color='brand.greyCyan'
        children={ikon}
        fontSize={24}
        />
    <Input placeholder='0' fontSize={24} textAlign='right' type='number'  h='50px' color='brand.darkCyan'
    _hover={{border:"1px solid", borderColor:"brand.cyan"}} 
    _focus={{border:"1px solid", borderColor:"brand.cyan"}} 
    onChange={handleChange}
    value={value}
    isInvalid={isZero}
    errorBorderColor="red.500"
    />
    </InputGroup>
)
}