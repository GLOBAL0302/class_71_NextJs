import {fetchPost} from "@/api/posts";

export default async function PostPage({params}: {params: {id:string}}) {
    const post = await fetchPost(params.id)
    return(
        <main className="container-fluid mt-2">
            <h1>{post.title}</h1>
            <h5>by {post.author}</h5>
            <article>
                {post.content}
            </article>
        </main>
    )
}