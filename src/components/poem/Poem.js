import './poem.scss';

const Poem = () => {
    return (
        <section className="poem">
            <div className="container">
                <div className="poem__body">
                    <p className="poem__results">Results for 'Hope'</p>
                    <h2 className="poem__title">Say not the struggle nought availeth</h2>
                    <p className="poem__author">by Arthur Hugh Clough</p>
                    <p className="poem__lines">
                        The ocean heaves around us still,<br />
                        With long and measured swell,<br />
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Poem;