import Link from "next/link";

export interface PostProps {
    id: number;
    title: string;
    body: string;
    userID: number;
}

interface ResponseProps {
    posts: PostProps[];
}

export const revalidate = 60;

export default async function PostsPage() {
    const response = await fetch('https://dummyjson.com/posts', {
        cache: 'force-cache',
        next:{
            revalidate: 60
        }
    });

    
    const data: ResponseProps = await response.json();

    async function handleFetchPosts() {
        'use server';
        const response = await fetch('https://dummyjson.com/posts');
        const data: ResponseProps = await response.json();

        console.log(data.posts);
    }

    async function handleSearchUsers(formData: FormData) {
        'use server';

        const userId = formData.get('userId');

        if (!userId) {
            console.error("User ID is required");
            return;
        }

        const response = await fetch(`https://dummyjson.com/posts/user/${userId}`);
        const userPosts: ResponseProps = await response.json();

        console.log(userPosts);
    }

    return (
        <div>
            <h1 className="text-3xl text-center mt-5 mb-2 font-bold">Todos os posts</h1>

            <button onClick={handleFetchPosts} className="bg-blue-500 text-white p-2 rounded">
                Buscar Posts
            </button>

            <form className="flex gap-2 my-4" action={handleSearchUsers}>
                <input
                    type="text"
                    placeholder="ID do usuário"
                    className="border border-gray-200 p-2"
                    name="userId"
                />

                <button className="bg-blue-500 text-white p-2 rounded" type="submit">
                    Buscar usuário
                </button>
            </form>

            <div className="text-wrap text-justify flex flex-col gap-4 mx-2 text-red-950">
                {data.posts.map((post: PostProps) => (
                    <div key={post.id} className="bg-gray-200 p-4 rounded">
                        <h2 className="font-bold">{post.title}</h2>
                        <p>{post.body}</p>
                        <Link className="text-blue-600" href={`/posts/${post.id}`}>
                            Acessar detalhes
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}