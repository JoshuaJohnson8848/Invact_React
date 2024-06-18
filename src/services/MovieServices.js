import axios from './AxiosInstance.js';


export const getAllMovies = async(status) => {
    try{
       const res = await axios.get(`/?status=${status}`);
       return res?.data?.movies;

    } catch(err){
        throw Error;
    }
}

export const createMovie = async(body) => {
    try{
       const res = await axios.post('/', body, {
        headers: {
            'Content-Type' : 'multipart/form-data'
        }
       });
       return res?.data;

    } catch(err){
        throw Error;
    }
}

export const updateMovie = async(body,id) => {
    try{
       const res = await axios.put(`/${id}`, body, {
        headers: {
            'Content-Type' : 'multipart/form-data'
        }
       });
       return res?.data;

    } catch(err){
        throw Error;
    }
}

export const updateMovieReview = async(body,id) => {
    try{
       const res = await axios.put(`/review/${id}`, body, {
        headers: {
            'Content-Type' : 'multipart/form-data'
        }
       });
       return res?.data;

    } catch(err){
        throw Error;
    }
}

export const updateMovieStatus = async(body,id) => {
    try{
       const res = await axios.put(`/watched/${id}`, body);
       return res?.data;

    } catch(err){
        throw Error;
    }
}

export const getMovie = async(id) => {
    try{
       if(!id){
        throw Error('No ID Found')
       }
       const res = await axios.get(`/${id}`)
       console.log(res?.data.movie);
       return res?.data?.movie;

    } catch(err){
        throw Error;
    }
}

export const deleteMovie = async(id) => {
    try{
       const res = await axios.delete(`/${id}`)
       console.log(res);
       return res;

    } catch(err){
        throw Error;
    }
}

