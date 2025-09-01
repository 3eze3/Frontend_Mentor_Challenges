export async function getData(url) {
    try {
        const response = await fetch(url);
        if (!response)
            return;
        const data = response.json();
        return data;
    }
    catch (error) {
        console.log(`${error} al momento de procesar la informacion...`);
    }
}
