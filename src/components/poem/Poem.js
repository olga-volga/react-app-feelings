import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

import requestService from "../../services/requestService";
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';

import './poem.scss';

const Poem = ({word}) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);
    
    const {getPoem} = requestService();

    useEffect(() => {
        updatePoem();
    }, [word]);

    const onDataLoaded = (data) => {
        setLoading(false);
        setData(data);
    };
    const onError = () => {
        setError(true);
        setLoading(false);
    };
    const updatePoem = () => {
        setError(false);
        setLoading(true);
        
        getPoem(word)
            .then(onDataLoaded)
            .catch(onError)
    };
    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <Error /> : null;
    const content = !(loading || error || !data) ? <View word={word} data={data} /> : null;
    return (
        <section className="poem">
            <div className="container">
                {spinner}
                {errorMessage}
                {content}
                <Link to="/" className="link__back">&larr; Back</Link>
            </div>
        </section>
    )
}

const View = ({word, data}) => {
    const {author, title, lines} = data;
    const poemLines = lines.map((item, i) => {
        return i % 2 === 1 ? `       ${item}\n` : `${item}\n`;
    });
    return (
        <div className="poem__body">
            <p className="poem__results">Results for &lsquo;{word}&rsquo;</p>
            <h2 className="poem__title">{title}</h2>
            <p className="poem__author">by {author}</p>
            <pre className="poem__lines">
                {poemLines}
            </pre>
        </div>
    )
}

export default Poem;