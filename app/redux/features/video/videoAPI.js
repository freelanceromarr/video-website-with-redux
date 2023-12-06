
import axios from '@/app/utils/axios'

export const getVideo= async (id)=>{
    console.log(id);
    const response = await axios.get(`/videos/${id}`)
    return response.data
}