import { QueryClient } from "react-query"; 

type AnyOBJ = {[key : string] : any};

export const getClient = (()=>{
    let client : QueryClient | null  = null;
    return ()=>{
        if(!client) client = new QueryClient({
            defaultOptions: {
                queries: {
                    staleTime: 0,
                    cacheTime: Infinity,
                    refetchOnMount: false,
                    refetchOnReconnect: false,
                    refetchOnWindowFocus: false,
                    enabled: false,
                }
            }
        });
        return client;
    }
})();

const BASE_URL = ""

export const restfetcher = async ({
    method,
    path,
    params
}: {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    path: string;
    params?: AnyOBJ
}) => {
    try {
        let url = `${BASE_URL}${path}`;
        const fetchOptions: RequestInit = {
            method,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        if (params) fetchOptions.body = JSON.stringify(params);
        const res = await fetch(url, fetchOptions)
        if (!res.ok) {
            throw new Error(`Error! status: ${res.status}`);
        }
        const json = await res.json();
        console.log(url, params, json);
        return json
    } catch (err) {
        console.error(err);
    }
}


export const QueryKeys = {
}
