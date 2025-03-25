import { PostProps } from "../../page";

export async function PostInfo( { id }: { id: string } ) {


    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    const data: PostProps = await response.json();

    return(
        <div>
            <h2 className="text-3xl font-bold underline decoration-wavy">{data.title}:</h2>
            <br />
            <p className="text-white text-justify">{data.body}</p>
        </div>
    )
}

