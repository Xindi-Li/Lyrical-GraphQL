import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch} from 'react-router-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import SongList from './components/SongList';
import App from './components/App';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';
import './style/style.css';

const client = new ApolloClient({
    dataIdFromObject: object => object.id
});

const Root = () => {
    return (
        <ApolloProvider client={client}>
            <HashRouter>
                <Switch>
                    <Route path="/" exact render={() => <App><SongList /></App>} />
                    <Route path="/songs/new" component={SongCreate}/>
                    <Route path="/songs/:id" component={SongDetail}/>
                </Switch>
            </HashRouter>
        </ApolloProvider>
    );
};

ReactDOM.render(
    <Root />,
    document.querySelector('#root')
);
