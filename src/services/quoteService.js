const API_URL = import.meta.env.VITE_API_URL 

export const getQuotesByBook = async (bookId) => {
    const token = localStorage.getItem("token")

    const response = await fetch(
        `${API_URL}/quotes/book/${bookId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }
    )
    const data = await response.json()
    if(!response.ok) {
        throw new Error(data.message)
    }

    return data
}