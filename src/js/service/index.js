export const getData = async (aux, id) => {
    const BASE_URL = "https://swapi.tech/api/"; 
    try { 
        const response = await fetch(`${BASE_URL}/${aux}/${ id ? id: ""}`) 
        const data = await response.json();
        return data; 
    } 
    catch (err) {
        console.log("err", err);
    }
}; 


