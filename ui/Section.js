import {Text, Box, HStack} from '@chakra-ui/react'

export default function Section({title, children, errMsg}){
   return <Box w='100%'>
        <HStack  mb='15px' justifyContent='space-between'>
            <Text fontSize={18} >{title}</Text>
            <Text fontSize={18} color='red' >{errMsg}</Text>
        </HStack>
        {children}
    </Box>
    
}