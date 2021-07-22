import React, { useEffect, useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import Container from './Container';
import Home from './Home';
import Performance from './Performance';
import Admin from './Admin';

export default function Router() {
  const [current, setCurrent] = useState('home');

  useEffect(() => {
    setRoute();
    window.addEventListener('hashchange', setRoute);
    return () => window.removeEventListener('hashchange', setRoute);
  }, []);

  function setRoute() {
    const location = window.location.href.split('/');
    const pathname = location[location.length - 1];
    setCurrent(pathname || 'home');
  }

  return (
    <HashRouter>
      <Nav current={current} />
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/performance/:id' component={Performance} />
          <Route exact path='/admin' component={Admin} />
        </Switch>
      </Container>
    </HashRouter>
  );
}
