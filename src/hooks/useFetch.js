import { useEffect, useState } from 'react';

export const useFetch = (url, headers = { 'content-type': 'application/json' }, body = null, props) => {
  const [ state, setState ] = useState({ data: null, loading: true, error: null });

  useEffect( () => {
    setState(state => ({ data: state.data, loading: true }));
    fetch(url, headers, JSON.stringify(body))
      .then( x => x.json())
      .then( y => {
        setState({ data: y, loading: false });
      })
  }, [props, state]);

  return state;
}