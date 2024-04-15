import axios  from "axios";



const commonFileApi = async(image) => {
    const response = await axios.post(`https://api.imgbb.com/1/upload?expiration=63072000&key=${import.meta.env.VITE_IMGBB_API_KEY}`, image)
    try {
        return response.data.data.url
    } catch (error) {
        console.log(error.message)
        return error
    }
}


export {commonFileApi}