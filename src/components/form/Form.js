import './form.scss';

const Form = ({main, formClass, inputClass, btnClass}) => {
    let btnText = main ? 'Search' : null;
    return (
        <form action="#" className={`form ${formClass}`}>
			<input type="text" name="feeling" placeholder="How are you feeling?" className={`form__input ${inputClass}`} />
			<button type="submit" className={btnClass}>{btnText}</button>
		</form>
    )
}

export default Form;