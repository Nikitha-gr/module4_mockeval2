const initialNotes = {
    notes: [],
    loading: false,
    error: null,
}

const noteReducer = (state = initialNotes, action) => {
    switch (action.type) {
        case "FETCH_NOTES_REQUEST`":
            return { ...state, loading: true };

        case "FETCH_NOTES_SUCCESS":
            return { ...state, loading: false, notes: action.payload };

        case "FECTH_NOTES_FAILURE":
            return { ...state, loading: false, error: action.payload };

        case "ADD_NOTES":
            return { ...state, notes: [...state.notes, action.payload] };

        case "EDIT_NOTES":
            return {
                ...state,
                notes: state.notes.map(note => note.id == action.payload.id ? action.payload : note)
            };

        case "DELETE_NOTES":
            return { ...state, notes: state.notes.filter(note => note.id !== action.payload) }

        default:
            return state;
    }
}

export default noteReducer;