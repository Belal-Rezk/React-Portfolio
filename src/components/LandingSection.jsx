import React from "react"; 
import { Avatar, Heading, VStack } from "@chakra-ui/react"; 
import FullScreenSection from "./FullScreenSection"; 
 
const greeting = "Hello, I am Belal Rezk!"; 
const bio1 = "A Front-end developer"; 
const bio2 = "specialized in React"; 
 
const LandingSection = () => ( 
 <FullScreenSection 
   justifyContent="center" 
   alignItems="center" 
   isDarkBackground 
   backgroundColor="#2A4365" 
 > 
   <VStack spacing={10}> 
     <VStack spacing={1} alignItems="center"> 
       <Heading as="h4" size="md" noOfLines={1}> 
         {greeting} 
       </Heading> 
     </VStack> 
     <VStack spacing={6}> 
       <Heading as="h1" size="3xl" noOfLines={1}> 
         {bio1} 
       </Heading> 
       <Heading as="h1" size="3xl" noOfLines={1}> 
         {bio2} 
       </Heading> 
     </VStack> 
   </VStack> 
 </FullScreenSection> 
); 
 
export default LandingSection;