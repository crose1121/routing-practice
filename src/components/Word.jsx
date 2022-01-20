import {useParams} from 'react-router';

const Word = (props) => {

    const {word} = useParams();

    return (    
        <h3>The word is: {word}</h3>
    )
}

export default Word;