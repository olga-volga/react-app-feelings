import {Link} from "react-router-dom";

import Form from '../form/Form';

import './header.scss';

const Header = ({updateWord}) => {
    return (
        <header className="header">
			<div className="container">
				<div className="header__body">
					<Link to="/" className="header__logo">I have been here before</Link>
					<div className="header__block">
						<div className="header__form">
                            <Form updateWord={updateWord} btnClass="form__button_header" />
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