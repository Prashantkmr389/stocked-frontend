
import { axiosInstance } from "../config/apiconfig";

// Recent activity  @ get

const recentActivity = async ()=>{
    try {
        const res = await axiosInstance.get('/endpoint')
        console.log(res)
        return res.data
    } catch (err) {
        console.log(err)

        if(err?.response?.status){
            return {status : err.response.status, message : '', err}
        }
        return {message : 'Something went wrong!', err}
    }
}

// top proifile @get
// -- weekly
// -- daily
// -- monthyl

const getTopPerformers = async ({freq}) => {


    try{

        const res = await axiosInstance.get(`/endpoint?freq=${freq}`)
        console.log(res.data)
        return res.data

    }catch(err){
        console.error(err)

        if(err?.response?.status){
            return {status: err.response.status, message: '', err}
        }
        return {message: 'Something went wrong!', err}
    }
    

}



const getSearchResult = async(query)=>{
    try {
        const res = await axiosInstance.get(`/endpoint?query=${query}`);
        console.log(res.data);
        return res.data;
    } catch (err) {
        console.error(err)

        if(err?.response?.status){
            return {status: err.response.status, message: '', err}
        }
        return {message: 'Something went wrong!', err}
    }
}

// Search api @get

// userDetails api @get

const getUserDetails = async()=>{
    try{
        const res = await axiosInstance.get('/endpoint')
        console.log(res.data)
        return res.data
    }catch(err){
        console.error(err);
        if (err?.response?.status) {
          return { status: err.response.status, message: "", err };
        }
        return { message: "Something went wrong!", err };
    }
}

export { getTopPerformers, recentActivity, getSearchResult, getUserDetails };