import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './form.scss';

const Form = ({main, formClass, inputClass, btnClass, updateWord}) => {
    const [input, setInput] = useState('');
    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input) {
            history.push("/poem");
        }
        updateWord(input);
        setInput('');
    }

    let btnText = main ? 'Search' : null;
    return (
        <form onSubmit={handleSubmit} action="#" className={`form ${formClass}`}>
			<input 
                type="text" 
                name="feeling" 
                value={input}
                placeholder="How are you feeling?" 
                className={`form__input ${inputClass}`}
                onChange={(e) => setInput(e.currentTarget.value)} />
			<button type="submit" disabled={!input} className={btnClass}>{btnText}</button>
		</form>
    )
}

export default Form;