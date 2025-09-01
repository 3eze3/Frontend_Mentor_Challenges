import { API_ADDRESS } from '../constants/API.mjs';
import { getData } from '../services/get-data.mjs';
export function generateQuote() {
    const $btnGenerate = document.getElementById('next-quote');
    const $textId = document.querySelector('.main__advice-id');
    const $quote = document.querySelector('.main__quote');
    $btnGenerate.addEventListener('click', async () => {
        const new_id = Math.floor(Math.random() * 225);
        const url = `${API_ADDRESS}/${new_id}`;
        try {
            const data = await getData(url);
            const new_advice = data.slip.advice;
            $quote.textContent = `${new_advice}`;
            $textId.textContent = `#${new_id}`;
        }
        catch (error) {
            console.log(`${error} no se proceso la informacion`);
            return;
        }
    });
}
