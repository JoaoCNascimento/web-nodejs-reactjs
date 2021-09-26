import React from 'react';

import { Route, Switch } from 'react-router';
import Home from './views/Home';
import Projetos from './views/Projetos';

// Componentes vem aqui...

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/projetos" exact component={Projetos} />
        </Switch>
    )
}

export default Routes;