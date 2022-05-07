import {Link} from "react-router-dom";

import '../../style/variables.scss';

const Page404 = () => {
    return (
        <div className="content">
            <div className="container">
                <p style={{fontSize: '26px', lineHeight: '36px', textAlign: 'center', color: '#3c3232'}}>This page doesn't exist.</p>
                <Link to="/" className="link__back">&larr; Back to main page</Link>
            </div>
        </div>
    )
}

export default Page404;