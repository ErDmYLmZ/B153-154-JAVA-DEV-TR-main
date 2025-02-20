const apiBaseURL = "https://651da7e644e393af2d5a2461.mockapi.io/api/v1/notes";

const createNote = async (note) => { 
    const resp = await fetch(apiBaseURL, {
        method: "post",
        body: JSON.stringify(note),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    const data = await resp.json();
    return data;
}


const deleteNote = async(id) => { 
    const resp = await fetch(`${apiBaseURL}/${id}`, {
        method: "delete"
    });
    const data = await resp.json();
    return data;
}

const getNotes = async () => { 
    const resp = await fetch(apiBaseURL);
    const data = await resp.json();
    return data;
 }


export { createNote, deleteNote, getNotes }