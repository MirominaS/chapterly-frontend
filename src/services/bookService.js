const API_URL = import.meta.env.VITE_API_URL 

export const getBooks = async () => {
    const token = localStorage.getItem('token')

    const response = await fetch(
        `${API_URL}/books`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    const data = await response.json()

    if(!response.ok) {
        throw new Error(data.message)
    }
    return data
}

export const createBook =  async (bookData) => {
    const token = localStorage.getItem('token')

    const response = await fetch(
        `${API_URL}/books`,
        {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(bookData)
        }
    )
    const data = await response.json()

    if(!response.ok) {
        throw new Error(data.message)
    }

    return data
}

export const getBookById = async (id) => {
    const token = localStorage.getItem('token')

    const response = await fetch(
        `${API_URL}/books/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    const data = await response.json()

    if(!response.ok) {
        throw new Error(data.message)
    }
    return data
}