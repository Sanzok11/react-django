import React from 'react';
import { Layout, Input, Button, Typography } from 'antd';
import { HomeOutlined, LogoutOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

const { Header } = Layout;
const { Search } = Input;
const { Title } = Typography;

const AppHeader = () => {
    let { user, logoutUser } = useContext(AuthContext);

    const handleLogout = () => {
        logoutUser();
    }

    return (
        <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button type="text" icon={<HomeOutlined style={{ fontSize: '24px', color: '#1DA1F2' }} />} />
                <Title level={4} style={{ margin: '0 16px', color: '#1DA1F2' }}>Welcome {user && user.user_id} </Title>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Search placeholder="Search" size="small" style={{ width: '50%', marginRight: '16px' }} />
                <Title level={5} style={{ margin: '0 16px', color: '#1DA1F2' }}>Logout</Title>
                <Button type="text" style={{ color: '#1DA1F2' }} icon={<LogoutOutlined />} onClick={handleLogout} />
            </div>
        </Header>
    );
};

export default AppHeader;
