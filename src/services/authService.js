const API_URL = import.meta.env.VITE_API_URL 

export const registerUser = async (userData) => {

    const response = await fetch(
    `${API_URL}/auth/register`,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json' 
            },
            body: JSON.stringify(userData)
        }
    )

    const data = await response.json()

    if(!response.ok){
        throw new Error(data.message)
    }
    return data
}

export const loginUser = async (userData) => {
    const response = await fetch(
        `${API_URL}/auth/login`,
        {
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        }
    )
    const data = await response.json()

    if(!response.ok){
        throw new Error(data.message)
    }
    return data
}

export const getCurrentUser = async () => {
    const token = localStorage.getItem('token')

    const response = await fetch(
        `${API_URL}/auth/user`,
        {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
    )
    const data = await response.json()

    if(!response.ok){
        throw new Error(data.message)
    }
}

