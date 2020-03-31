import * as React from 'react';
import Router from 'next/router';
import 'antd/dist/antd.css';

import { Layout, Menu } from 'antd';
// import getConfig from 'next-server/config';
const { Sider, Content } = Layout;

// const { publicRuntimeConfig } = getConfig();
// const linkPrefix = publicRuntimeConfig.linkPrefix;

const backendUrl = process.env.BACKEND_URL || '';

const Page: React.FC = ({ children }) => {
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Menu
          theme="dark"
          mode="inline"
          style={{ height: '100vh', overflow: 'auto' }}
          defaultSelectedKeys={[]}
          onClick={({ key }) => {
            Router.push(key, `${backendUrl}${key}`, { shallow: true });
          }}
        >
          <Menu.Item key="/basic">
            <span className="nav-text">Basic</span>
          </Menu.Item>
          <Menu.Item key="/kitchensink">
            <span className="">Kitchen Sink</span>
          </Menu.Item>
          <Menu.Item key="/grid">
            <span className="nav-text">Grid</span>
          </Menu.Item>
          <Menu.Item key="/single-async-validate">
            <span className="">Single Field Async</span>
          </Menu.Item>
          <Menu.Item key="/dynamic-array">
            <span className="">Dynamic Array</span>
          </Menu.Item>
          <Menu.Item key="/steps">
            <span className="">Steps Component</span>
          </Menu.Item>
          <Menu.Item key="/calculated-field">
            <span className="">Calculated Field</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content
          style={
            {} || {
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }
          }
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Page;
