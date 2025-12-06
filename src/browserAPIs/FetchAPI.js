export async function FetchAPI(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    return JSON.stringify(data,null,2);
}