import React, { useState } from 'react';

import requestService from '../../services/requestService';

import './form.scss';

const Form = ({main, formClass, inputClass, btnClass}) => {
    const [input, setInput] = useState('');
    const [data, setData] = useState(null);

    const {getPoem} = requestService();

    const submitForm = (e) => {
        e.preventDefault();
        updateFeeling(input);
    };
    const updateFeeling = (feeling) => {
        getPoem(feeling)
            .then(res => console.log(res))
    };

    let btnText = main ? 'Search' : null;
    return (
        <form onSubmit={submitForm} action="#" className={`form ${formClass}`}>
			<input 
                type="text" 
                name="feeling" 
                placeholder="How are you feeling?" 
                className={`form__input ${inputClass}`}
                onChange={(e) => setInput(e.currentTarget.value)} />
			<button type="submit" className={btnClass}>{btnText}</button>
		</form>
    )
}

export default Form;