const API_URL = import.meta.env.VITE_API_URL;

export const getThoughtsByBooks = async(bookId) => {
    const token = localStorage.getItem("token")

    const response = await fetch(
        `${API_URL}/thoughts/book/${bookId}`,
        {
            headers:{
                Authorization: `Bearer ${token}`
            },
        }
    );
    const data = await response.json();

    if(!response.ok) {
        throw new Error(data.message);
    }
    return data;
}
//create
export const createThought = async (thoughtData) => {
    const token = localStorage.getItem("token")

    const response = await fetch(
        `${API_URL}/thoughts`,
        {
            method: "POST",
            headers:{
                "Content-Type" : "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(thoughtData)
        }
    );
    const data = await response.json();

    if(!response.ok) {
        throw new Error(data.message);
    }
    return data;
}



export const getThoughtById = async (id) => {
    const token = localStorage.getItem("token");
    
    const response = await fetch(
        `${API_URL}/thoughts/${id}`,
        {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
    );
    
    const data = await response.json();
    if(!response.ok) {
        throw new Error(data.message)
    }
    
    return data;
}

export const updateThought = async (id, thoughtData) => {
    const token = localStorage.getItem("token");

    const response = await fetch(
        `${API_URL}/thoughts/${id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(thoughtData),
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
};

export const deleteThought = async(id) => {
    const token = localStorage.getItem("token")

    const response = await fetch (
        `${API_URL}/thoughts/${id}`,
        {
            method: "DELETE",

            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    )
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
}