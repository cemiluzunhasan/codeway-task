import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Layout, Form, Input, Button } from 'antd';
import AuthProxy from '../../proxies/AuthProxy';

export default () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [buttonStatus, setButtonStatus] = useState({
    type: 'primary',
    loading: false,
    text: 'Sign In'
  });

  const submit = (values) => {
    const { email, password } = values;
    setButtonStatus({ ...buttonStatus, loading: true });
    new AuthProxy(email, password).login().then(data => {
      setButtonStatus({
        type: "success",
        loading: false,
        text: 'Signed In'
      })
      setTimeout(() => {
        dispatch({
          type: 'UPDATE_STATE',
          payload: {
            key: 'profile',
            data: {
              displayName: data.user.displayName,
              email: data.user.email,
              emailVerified: data.user.emailVerified,
              photoURL: data.user.photoURL,
              isAnonymous: data.user.isAnonymous,
              uid: data.user.uid,
              providerData: data.user.providerData
            }
          }
        });
        history.push('/dashboard');
      }, 1000);
    }).catch(err => {
      setButtonStatus({
        type: "primary",
        loading: false,
        text: 'Sign In'
      })
    })
  };

  return (
    <Layout.Content className="AuthLayout half-content">
      <div className="d-flex fd-column a-center pt-100">
        <img src="/assets/hedwig-icon.png" className="w-300" />
        <h1 className="text-header mt-30">Please sign in</h1>
        <Form layout="vertical" className="w-300" onFinish={submit}>
          <Form.Item name="email" label="E-mail address">
            <Input placeholder="E-mail address" />
          </Form.Item>
          <Form.Item name="password" label="Password">
            <Input.Password placeholder="Password" type="password" />
          </Form.Item>
          <Button className="full-width mt-10" loading={buttonStatus.loading} htmlType="submit" type={buttonStatus.type}>{buttonStatus.text}</Button>
          <p className="text-center text-grey mt-50">Hedwig © 2020</p>
        </Form>
      </div>
    </Layout.Content>
  );
}