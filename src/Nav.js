import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';

export default function Nav({ current }) {
  return (
    <div>
      <Menu selectedKeys={[current]} mode='horizontal'>
        <Menu.Item key='home'>
          <Link to='/'>
            <HomeOutlined /> Home
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}
