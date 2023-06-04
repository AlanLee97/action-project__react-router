import React, { useContext, useEffect, useMemo, useState } from "react";
import { createBrowserHistory } from "history";

const historyGlobal = createBrowserHistory();
export const RouterContext = React.createContext({});

export function Route(props = {}) {
  const { path, element, component } = props;
  const { location, history } = useContext(RouterContext);
  const [ el, setEl ] = useState(null);
  
  const Component = component;

  useEffect(() => {
    if(element) {
      const clonedEl = React.cloneElement(element, {history, location});
      setEl(clonedEl);
    }
  }, []);

  const hasEl = !!element;
  
  const renderEl = () => {
    return path === location.pathname ? el : null;
  }

  const renderComponent = () => {
    return path === location.pathname ? <Component history={history} location={location} /> : null
  }
  
  return (
    <>
      {hasEl ? renderEl() : renderComponent()}
    </>
  )
}

function Router(props = {}) {
  const [history, setHistory] = useState({});
  const [location, setLocation] = useState({});

  useMemo(() => {
    setHistory(historyGlobal);
    setLocation(historyGlobal.location);
  }, [])

  useEffect(() => {
    const unlisten = history.listen((val) => {
      console.log('cpn listen', val);
      setLocation(val.location);
    })

    return () => {
      unlisten();
    }
  }, [])

  return (
    <RouterContext.Provider value={{
      history,
      location
    }}>
      {props.children}
    </RouterContext.Provider>
  )
}

export default Router;
