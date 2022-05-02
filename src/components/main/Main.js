import Form from '../form/Form';

import './main.scss';

const Main = () => {
    return (
        <section className="main">
			<div className="container">
				<div className="main__body">
					<h1 className="main__title">&ldquo;I have been here before&rdquo;</h1>
					<div className="main__block">
						<h2 className="main__subtitle">You are not the first to feel the <br />way you do.......</h2>
					</div>
					<p className="main__text">Type in a few words to describe what you are feeling</p>
					<div className="main__form">
                        < Form main={true} formClass="form_main" inputClass="form__input_main" btnClass="form__button_main" />
					</div>
				</div>
			</div>
		</section>
    )
}

export default Main;