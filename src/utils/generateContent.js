import Spinner from '../components/spinner/Spinner';
import Error from '../components/error/Error';

const generateContent = (process, Component, data, word) => {
    switch(process) {
        case 'waiting':
            return <Spinner />;
        case 'loading':
            return <Spinner />;
        case 'confirmed':
            return <Component data={data} word={word} />;
        case 'error':
            return <Error />;
        default:
            throw new Error('Unexpected process');
    }
}

export default generateContent;