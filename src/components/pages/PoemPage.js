import Poem from '../poem/Poem';

const PoemPage = ({word}) => {
    return (
        <div className="content">
            <Poem word={word} />
        </div>
    )
}

export default PoemPage;