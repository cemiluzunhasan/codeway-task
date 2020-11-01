import React from 'react';
import { useDispatch } from 'react-redux';
import { Layout, Form, Input, Button } from 'antd';
import AuthProxy from '../../proxies/AuthProxy';

export default () => {
  const dispatch = useDispatch();
  const submit = (values) => {
    const { email, password } = values;
    new AuthProxy(email, password).login(data => {
      dispatch({ type: 'UPDATE_STATE', payload: {
        displayName: data.user.displayName,
        email: data.user.email,
        emailVerified: data.user.emailVerified,
        photoURL: data.user.photoURL,
        isAnonymous: data.user.isAnonymous,
        uid: data.user.uid,
        providerData: data.user.providerData
      }});
      window.location.replace('/dashboard');
    });
  };

  return (
    <Layout.Content className="AuthLayout half-content">
      <div className="d-flex fd-column a-center pt-100">
        <img src="/assets/hedwig-icon.png" className="w-300" />
        <h1 className="text-darkblue mt-30">Please sign in</h1>
        <Form layout="vertical" className="w-300" onFinish={submit}>
          <Form.Item name="email" label="E-mail address">
            <Input placeholder="E-mail address" />
          </Form.Item>
          <Form.Item name="password" label="Password">
            <Input.Password placeholder="Password" type="password" />
          </Form.Item>
          <Button htmlType="submit" className="full-width mt-10" type="primary">Sign In</Button>
          <p className="text-center text-grey mt-50">Hedwig © 2020</p>
        </Form>
      </div>
    </Layout.Content>
  );
}