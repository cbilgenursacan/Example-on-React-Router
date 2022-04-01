import QuoteList from '../Components/quotes/QuoteList'

const EXP_QUOTES = [
    {id: 'q1', author: 'a1', text: 'text1'},
    {id: 'q2', author: 'a2', text: 'text2'}
];

const Quotes  = () =>{
    return(
        <QuoteList quotes ={EXP_QUOTES}/>
    )

}

export default Quotes;
export {EXP_QUOTES}; 