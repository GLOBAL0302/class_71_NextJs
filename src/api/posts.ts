import {ApiPost, ApiPosts, Post} from "@/types";

export async function request<T>(url:string, init?:RequestInit):Promise<T> {
    const response = await fetch(url, init);

    if(!response.ok) {
        throw new Error("failed to fetch");
    }
    return response.json();
}



export async function fetchPosts():Promise<Post[]> {
    const apiPosts = await request<ApiPosts | null>("https://kubanychjs25-default-rtdb.europe-west1.firebasedatabase.app/posts.json", {cache:'no-cache'});

    if(apiPosts === null){
        return []
    }

    return Object.keys(apiPosts).map(id=>({
        ...apiPosts[id],
        id,
    }));
}

export async function fetchPost(id:string):Promise<Post> {
    const apiPost = await request<ApiPost | null>(`https://kubanychjs25-default-rtdb.europe-west1.firebasedatabase.app/posts/${id}.json`);

    if(apiPost === null){
       throw new Error("404");
    }

    return{
        ...apiPost,
        id
    }
}