import { useState } from 'react';
import { Layout as AntLayout } from 'antd';
import Header from './Header';
import Sidebar from './Sidebar';

const { Content } = AntLayout;

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="layout-container">
      <div className="layout-header">
        <Header collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      </div>
      <div className="layout-body">
        <div className="layout-sidebar">
          <Sidebar collapsed={collapsed} />
        </div>
        <div className="layout-content">
          <Content style={{ padding: '24px', minHeight: '100%' }}>
            {children}
          </Content>
        </div>
      </div>
    </div>
  );
}

export default Layout;
