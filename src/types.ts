export interface ApiPost {
    author: string
    title:string
    content:string
}

export interface ApiPosts {
    [id:string]: ApiPost
}

export interface Post{
    id:string
    author: string
    title:string
    content:string
}