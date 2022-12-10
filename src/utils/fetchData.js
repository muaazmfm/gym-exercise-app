export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const endpointUrl = process.env.REACT_APP_RAPID_API_BASE_URL + url;
    const response = await fetch(endpointUrl, options);
    const data = await response.json();
    return data;
};