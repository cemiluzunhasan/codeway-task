import { notification } from 'antd';
import Proxy from '../../proxies/Proxy';

export default {
  getData: ({ url, key, params }) => {
    return async dispatch => {
      dispatch({ type: 'GLOBAL_REQUEST', payload: { key } });
      const { data, error } = await new Proxy().getData({ url, params });
      if (error) {
        notification.error({ message: 'Bir hata meydana geldi' });
      } else {
        data && dispatch({ type: 'GLOBAL_SUCCESS', payload: { key, data } });
      }
    }
  },
  postData: ({ url, data, params }) => {
    return dispatch => {
      const { data, error } = new Proxy().postData({ url, data, params });
      if (error) {
        notification.error({ message: 'Bir hata meydana geldi' });
      } else {
        dispatch({ type: 'POST_DATA' });
      }
    }
  },
  putData: ({ url, data, params }) => {
    return dispatch => {
      const { data, error } = new Proxy().putData({ url, data, params });
      if (error) {
        notification.error({ message: 'Bir hata meydana geldi' });
      } else {
        dispatch({ type: 'PUT_DATA' });
      }
    }
  },
  patchData: ({ url, data, params }) => {
    return dispatch => {
      const { data, error } = new Proxy().patchData({ url, data, params });
      if (error) {
        notification.error({ message: 'Bir hata meydana geldi' });
      } else {
        dispatch({ type: 'PATCH_DATA' });
      }
    }
  },
  deleteData: ({ url, data, params }) => {
    return dispatch => {
      const { data, error } = new Proxy().deleteData({ url, data, params });
      if (error) {
        notification.error({ message: 'Bir hata meydana geldi' });
      } else {
        dispatch({ type: 'DELETE_DATA' });
      }
    }
  },
  updateState: ({ key, data }) => {
    return dispatch => {
      dispatch({ type: 'UPDATE_STATE', payload: { key, data }});
    }
  }
}