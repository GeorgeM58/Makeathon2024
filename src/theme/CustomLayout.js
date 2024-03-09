import React from 'react';
import Layout from '@theme/Layout';
import Sidebar from './Sidebar';

const CustomLayout = ({ children }) => {
  return (
    <Layout>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1 }}>{children}</div>
      </div>
    </Layout>
  );
};

export default CustomLayout;