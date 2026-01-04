import { Layout, Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  DashboardOutlined,
  CalendarOutlined,
  AuditOutlined,
  ContactsOutlined,
  CarOutlined,
  RobotOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

interface SidebarProps {
  collapsed: boolean;
}

function Sidebar({ collapsed }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: '/',
      icon: <DashboardOutlined />,
      label: '首页',
    },
    {
      key: '/schedule',
      icon: <CalendarOutlined />,
      label: '日程管理',
    },
    {
      key: '/approval',
      icon: <AuditOutlined />,
      label: '审批流程',
    },
    {
      key: '/contacts',
      icon: <ContactsOutlined />,
      label: '通讯录',
    },
    {
      key: '/vehicle',
      icon: <CarOutlined />,
      label: '车辆管理',
    },
    {
      key: '/chat',
      icon: <RobotOutlined />,
      label: 'AI 助手',
    },
  ];

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={240}
      style={{
        background: '#fff',
        borderRight: '1px solid #f0f0f0',
        height: '100%',
      }}
    >
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
        onClick={handleMenuClick}
        style={{
          height: '100%',
          borderRight: 0,
        }}
      />
    </Sider>
  );
}

export default Sidebar;
