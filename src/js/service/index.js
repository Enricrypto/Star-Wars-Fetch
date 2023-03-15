
export const getData = async () => {
    const BASE_URL = "https://swapi.tech/api/"; 
    try {
        const response = await fetch(BASE_URL, { method: "GET" });
        const data = await response.json();
        return data; 
    } catch (err) {
        console.log("err");
    }
}; 

