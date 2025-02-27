import { Box, Button, Heading } from "@chakra-ui/react";
import NoteFrom from "./NoteForm";
import NoteList from "./NotesList";

const Home = () => {
    return (
        <Box textAlign={"center"} p={4}>
        <Heading padding={"10px"}>Collaborative Notes</Heading>
        <Button border={"none"} backgroundColor={"red.500"} color={"white"} margin={"10px"}>Logout</Button>
        <NoteFrom/>
        <NoteList/>
        </Box>
    )
}

export default Home;