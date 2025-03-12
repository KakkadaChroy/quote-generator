import {api} from "../../../../_quote-generator/helpers/axiosHelper";


const reqQuoteGenerator = async () => {
    const response = await api.get('/quotes');
    return response.data;
}


export {
    reqQuoteGenerator,
}