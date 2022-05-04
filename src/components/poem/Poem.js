import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

import requestService from "../../services/requestService";

import './poem.scss';

const Poem = ({word}) => {
    const [data, setData] = useState(null);
    const {getPoem} = requestService();

    useEffect(() => {
        updatePoem();
    }, [word]);

    const updatePoem = () => {
        getPoem(word)
            .then(res => setData(res))
    };
    const content = data ? <View word={word} data={data} /> : null;
    return (
        <section className="poem">
            <div className="container">
                {content}
                <Link to="/" className="poem__back">&larr; Back</Link>
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