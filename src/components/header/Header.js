import './header.scss';

const Header = () => {
    return (
        <header className="header">
			<div className="container">
				<div className="header__body">
					<a href="#" className="header__logo">I have been here before</a>
					<div className="header__block">
						<div className="header__form">
							<form action="#" className="form">
								<input type="text" name="feeling" placeholder="How are you feeling?" className="form__input"/>
								<button type="submit" className="form__button_header"></button>
							</form>
						</div>
						<div className="header__burger">
							<span></span>
						</div>
					</div>
				</div>
			</div>
		</header>
    )
}

export default Header;