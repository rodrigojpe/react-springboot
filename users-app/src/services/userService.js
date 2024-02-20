
import axios from 'axios'

const BASE_URL = 'http://localhost:8091/users';


export const findAll = async() => {
    try {
        const response = await axios.get(BASE_URL);
        return response; 
    } catch (error) {
        
        console.log(error);
    }
    return null;
}


export const save = async({ username, email, password }) => {

    try {
        const response = await axios.post(BASE_URL, { username, email, password });
        return response;
    } catch (error) {
        console.log(error);
    }
    return null;

}

export const update = async({ id, username, email}) => {

    try {
        return axios.put(`${BASE_URL}/${id}`, { username, email });
    } catch (error) {
        console.log(error);
    }
    return null;
}

export const remove = async(id) => {
    try {
        return axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        console.log(error);
    }
    return null;
}
