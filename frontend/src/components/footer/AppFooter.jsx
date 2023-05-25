import { Layout } from 'antd';
import { FacebookOutlined, GithubOutlined } from '@ant-design/icons';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ backgroundColor: '#001520', color: '#fff', textAlign: 'center', height: '80px',position: 'absolute', bottom: 0, width: '100%'  }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <FacebookOutlined style={{ fontSize: '24px', marginRight: '16px' }} />
        <GithubOutlined style={{ fontSize: '24px', marginRight: '16px' }} />
        <span>&copy; 2023 My Company. All rights reserved.</span>
      </div>
    </Footer>
  );
};

export default AppFooter;
