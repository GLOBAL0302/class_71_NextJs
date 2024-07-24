import {fetchPosts} from "@/api/posts";
import Link from "next/link";


export default async function Home() {
    const posts = await fetchPosts();
  return (
    <main className="mt-2 container-fluid">
        {posts.map((post) => (
            <div key={post.id} className="card mb-5">
                <div className="card-body">
                    <Link href={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                    by {post.author}
                </div>
            </div>
        ))}
    </main>
  );
}
