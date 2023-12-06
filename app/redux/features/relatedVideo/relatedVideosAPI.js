import axios from '@/app/utils/axios'

export const getRelatedVideos = async ({tags, id}) => {
    let queryString = tags.length > 0? tags?.map(tag =>{
        return `tags_like=${tag}`}).join('&') + `&id_ne=${id}` : null;
    const response = await axios.get(`/videos/?${queryString}`)
    return response.data;
}