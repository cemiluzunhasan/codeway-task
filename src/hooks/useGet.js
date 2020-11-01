import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../store/actions/global';

export default ({ url = '', key, params = {} }) => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(state => state.global[key]);

  const getData = () => {
    dispatch(actions.getData({ url, key, params }));
  }

  const refresh = () => {
    getData();
  }

  useEffect(() => {
    if (url && key && !data) {
      getData();
    }
  }, [url, key]);

  return { loading, data, error, refresh }; 
};