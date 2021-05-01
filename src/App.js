import { Fragment, Suspense } from "react";
import routes from './routes'
import {Loader, NotFound} from './components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Fragment >
      <Router>
        {/* <ErrorBoundary FallbackComponent={ErrorFallBack}> */}
          <Suspense fallback={<Loader fullscreen />}>
            <Switch>
              {routes.map((route, i) => {
                return <Route key={i} {...route} />
              })}
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        {/* </ErrorBoundary> */}
      </Router>
    </Fragment>
  );
}

export default App;
