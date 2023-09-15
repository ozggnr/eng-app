import { Word } from "../Types";

type Fetcher = {
    url: string;
    method: string;
    body?: Word;
    json?: boolean
}
const APIURL = 'http://127.0.0.1:8000/words'
const fetcher = async ({url, method, body, json= true}: Fetcher) => { 
    const apiurl = new URL(url);
    const response = await fetch(apiurl, {
        method,
        body: body && JSON.stringify(body),
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        }
    })
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data
}

export async function getWords() {
    const resp = await fetcher({url: APIURL, method: 'GET'});
    return resp
}