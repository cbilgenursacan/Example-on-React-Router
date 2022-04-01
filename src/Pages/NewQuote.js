import QuoteForm from '../Components/quotes/QuoteForm'
import { useHistory } from 'react-router-dom';

const NewQuote  = () =>{
    const history = useHistory();
    const addQuote = quoteData =>{
        console.log(quoteData);
        history.replace('/quotes');
    };
    return (
        <QuoteForm onAddQuote={addQuote} />
    )

}

export default NewQuote;