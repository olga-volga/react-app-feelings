import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

import requestService from "../../services/requestService";
import generateContent from "../../utils/generateContent";

import './poem.scss';

const Poem = ({word}) => {
    const [process, setProcess] = useState('waiting');
    const [data, setData] = useState(null);
    
    const {getPoem} = requestService();

    useEffect(() => {
        updatePoem();
    }, [word]);

    const onDataLoaded = (data) => {
        setData(data);
    };
    const onError = () => {
        setProcess('error');
    };
    const updatePoem = () => {
        setProcess('loading');

        getPoem(word)
            .then(onDataLoaded)
            .then(() => setProcess('confirmed'))
            .catch(onError)
    };
    return (
        <section className="poem">
            <div className="container">
                {generateContent(process, View, data, word)}
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