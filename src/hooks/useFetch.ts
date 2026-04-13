import {useState,useEffect} from 'react';

interface FetchState<T>{
    data: T | null;
    error: Error | null;
    loading: boolean;
}

export function useFetch<T>(url: string): FetchState<T> {
    const [state,setState] = useState<FetchState<T>>({
        data: null,
        error: null,
        loading: true
    });

    //seEffect to make fetch request

    return state;
}