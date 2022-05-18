import axios from "axios";

export const fetchThan = async () => {
    try {
       return  await axios({
            url: 'http://localhost:8080/api/products/',
            method: 'GET'
        });

    } catch (e) {
        console.log(e)
    }
}
export const fetchThanComments = async () => {
    try {
        return  await axios({
            url: 'http://localhost:8080/api/comments/',
            method: 'GET'
        });

    } catch (e) {
        console.log(e)
    }
}
