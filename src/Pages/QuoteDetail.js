import { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom';
import Comments from '../Components/comments/Comments';
import { EXP_QUOTES } from './Quotes';
import HighlightedQuote from '../Components/quotes/HighlightedQuote';
import { Link, useRouteMatch } from 'react-router-dom';

const QuoteDetail  = () =>{
    const match = useRouteMatch();
    const params = useParams();
    console.log(match);
    const quote = EXP_QUOTES.find(quote => quote.id === params.quoteID);
    if(!quote){
        return(
            <p>Error, no Quote Found!</p>
        );
    }
    return (
        
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author}/>

        <Route path={`/quotes/${params.quoteID}`} exact>
            <Link className='btn--flat' to={`/quotes/${params.quoteID}/comments`}>Show Comments
            </Link>
        </Route>

        <Route path={`${match.path}/comments`}>    
            <Comments/>
        </Route>
        </Fragment>
    )
}

export default QuoteDetail;