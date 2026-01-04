import { Layout, Button, Input, Badge, Avatar, Dropdown, Space } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
  BellOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

const { Header: AntHeader } = Layout;
const { Search } = Input;

interface HeaderProps {
  collapsed: boolean;
  onToggle: () => void;
}

function Header({ collapsed, onToggle }: HeaderProps) {
  const userMenuItems: MenuProps['items'] = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: '个人资料',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: '系统设置',
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
    },
  ];

  const handleUserMenuClick: MenuProps['onClick'] = ({ key }) => {
    switch (key) {
      case 'logout':
        console.log('退出登录');
        break;
      default:
        console.log('点击了菜单项:', key);
    }
  };

  return (
    <AntHeader
      style={{
        padding: '0 24px',
        background: '#fff',
        borderBottom: '1px solid #f0f0f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={onToggle}
          style={{ fontSize: '16px', width: 64, height: 64 }}
        />
        <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#1890ff' }}>
          办公智能助手
        </div>
      </div>

      <div style={{ flex: 1, maxWidth: '400px', margin: '0 24px' }}>
        <Search
          placeholder="搜索功能、文档、联系人..."
          allowClear
          enterButton={<SearchOutlined />}
          size="middle"
          onSearch={(value) => console.log('搜索:', value)}
        />
      </div>

      <Space size="middle">
        <Badge count={3} size="small">
          <Button
            type="text"
            icon={<BellOutlined />}
            style={{ fontSize: '16px' }}
            onClick={() => console.log('查看通知')}
          />
        </Badge>

        <Dropdown
          menu={{ items: userMenuItems, onClick: handleUserMenuClick }}
          placement="bottomRight"
          arrow
        >
          <Space style={{ cursor: 'pointer' }}>
            <Avatar size="small" icon={<UserOutlined />} />
            <span>管理员</span>
          </Space>
        </Dropdown>
      </Space>
    </AntHeader>
  );
}

export default Header;
