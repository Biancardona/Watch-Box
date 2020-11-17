import { useState, useEffect } from 'react';

const API_KEY = 'b7ee2123';

export default function useFetch(inputMovie) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then((response) => response.json())
            .then((res) => setData(res.Search));
    }, [inputMovie]);

    return data;
}

export function PlotDetail(idMovie) {
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${idMovie}`)
            .then((response) => response.json())
            .then((res) => setItem(res));
    }, [idMovie]);

    return item;
}
