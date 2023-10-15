import React, { Children } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Navbar from '../Shared/navbar';
const { Header, Content, Footer } = Layout;



const RootLayout = ({children}) => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    return (
        <Layout className="layout ">
        <Navbar/>
        <Content
          style={{
            padding: '0 ',
          }}
        >
          {/* <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <div
            className="site-layout-content"
            style={{
              background: colorBgContainer,
            }}
          >

            {children}
          </div>
    
        </Content>
       
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          All right reserve ©2023 Created by Achieve IT Ltd.
        </Footer>
      </Layout>
    );
};

export default RootLayout;