import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';

import './form.scss';

const Form = ({main, formClass, inputClass, btnClass, updateWord}) => {
    let history = useHistory();

    const formik = useFormik({
        initialValues: {
            feeling: ''
        },
        onSubmit: (values, {resetForm}) => {
            if (values.feeling) {
                history.push("/poem");
            }
            updateWord(values.feeling);
            resetForm();
        }
    });

    let btnText = main ? 'Search' : null;
    return (
        <form onSubmit={formik.handleSubmit} action="#" className={`form ${formClass}`}>
			<input 
                type="text" 
                name="feeling" 
                value={formik.values.feeling}
                placeholder="How are you feeling?" 
                className={`form__input ${inputClass}`}
                onChange={formik.handleChange} />
			<button type="submit" disabled={!formik.values.feeling} className={btnClass}>{btnText}</button>
		</form>
    )
}

export default Form;