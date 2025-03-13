import {api} from "../../../../_quote-generator/helpers/axios/axiosHelper";


const reqQuoteGenerator = async () => {
    const response = await api.get('/random');
    return response.data;
}


export {
    reqQuoteGenerator,
}