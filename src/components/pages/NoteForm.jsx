import { Flex, Input, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const NoteFrom = ({ selectedNote, clearSelection }) => {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedNote) {
            setTitle(selectedNote.title);
        }
        else {
            setTitle("");
        }
    }, [selectedNote])

    return (
        <Flex gap={"4"}>
            <Input 
            placeholder="Add a note..."
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />
            <Button border={"none"} backgroundColor={"green.400"} color={"white"} padding={"10px 20px"}>
                Add
            </Button>
        </Flex>
    )
}

export default NoteFrom;