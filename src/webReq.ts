import axios from "axios"
import type {AxiosResponse} from "axios"

interface Todo{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}


const fetchData = async ()=>{
    try{
        const response: AxiosResponse<Todo> = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log("Todo",response.data);
    }catch(error){
        if(axios.isAxiosError(error)){
            console.log("Axios error",error.message);
            if(error.response){
                console.log("Axios error response",error.response.data);
            }
        }
    }
}


// axios.get('https://example.com/data')
// .then(response=>{
//     console.log(response.data);
// })

// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }