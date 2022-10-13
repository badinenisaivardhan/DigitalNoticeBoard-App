import axios from 'axios'
import {baseURL} from "@env"

export const getNotices = async (nextpage) =>{
    try {
        if(!nextpage){
            const {data} = await axios.get(`${baseURL}/api/notices/1`)
            //console.log(data)
            return {data} // return (data)
        }else{
            //console.log(nextpage)
            const {data} = await axios.get(`${baseURL}/api/notices/${nextpage}`)
            //console.log({data})
            return {data}
        }

    } catch (error) {
        const { respose} = error;
        if(respose?.data || respose?.nextpage){
            return {data:respose.data,nextpage:respose.nextpage};
        }
        return {error:error.message || error}
    }
}
export const getNews = async (nextpage) =>{
    try {
        if(!nextpage){
            const {data} = await axios.get(`${baseURL}/api/news/1`)
            //console.log(data)
            return {data} // return (data)
        }else{
            //console.log(nextpage)
            const {data} = await axios.get(`${baseURL}/api/news/${nextpage}`)
            //console.log({data})
            return {data}
        }

    } catch (error) {
        const { respose} = error;
        if(respose?.data || respose?.nextpage){
            return {data:respose.data,nextpage:respose.nextpage};
        }
        return {error:error.message || error}
    }
}

