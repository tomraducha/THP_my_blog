export default async function useFetch(url, parameters) {
    const response = await fetch(url, parameters);
    const token = await response.headers.get("Authorization")
    const data = await response.json();
    return { data, token };
}