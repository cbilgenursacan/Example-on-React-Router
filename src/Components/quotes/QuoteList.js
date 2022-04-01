import { Fragment } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sort =(quotes, check) =>{
  if(!check)
    return quotes
  else
    return quotes.reverse();
}

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();
  const queryParams = new URLSearchParams(location.search);
  const sortingAsc = queryParams.get('sort') === 'asc';

  const quotes = sort(props.quotes, sortingAsc);
  const changeSorting = () =>{
    
    history.push(`${location.pathname}?sort=${(sortingAsc ? 'asc' : 'desc')}`);
    
  };

  
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSorting}>Sort {sortingAsc ? 'Descending' : 'Ascending'} </button>
      </div>
      <ul className={classes.list}>
        {quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
