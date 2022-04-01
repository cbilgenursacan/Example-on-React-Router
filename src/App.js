import { Route, Switch, Redirect } from 'react-router-dom';
import Quotes from './Pages/Quotes';
import NewQuote from './Pages/NewQuote';
import QuoteDetail from './Pages/QuoteDetail';
import Layout from './Components/layout/Layout';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes'/>
        </Route>
          <Route path='/quotes' exact>
            <Quotes/>
          </Route>
          <Route path='/quotes/:quoteID'>
            <QuoteDetail/>
          </Route>
          <Route path='/new-quote'>
            <NewQuote/>
          </Route>
          <Route path='*'><NotFound/></Route>
          
      </Switch>

    </Layout>
  );
}

export default App;
