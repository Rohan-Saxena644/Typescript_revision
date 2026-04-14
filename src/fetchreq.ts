

interface Todo{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

// const fetchData = async ()=>{
//     try{
//         const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
//         console.log("Todo",response.data);
//     }catch(error){
//         if(axios.isAxiosError(error)){
//             console.log("Axios error",error.message);
//             if(error.response){
//                 console.log("Axios error response",error.response.data);
//             }


//         }
//     }
// }



// npm i -D @types/library


const fetchData = async ()=>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: Todo = await response.json();

    }catch(error){
    
    }
}