import React from 'react';
import { Layout, Menu, Button } from 'antd';
import Link from 'next/link'

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <AntHeader>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><Link href="/">Головна</Link></Menu.Item>
        <Menu.Item key="2"><Link href="/register">Зареєструватися</Link></Menu.Item>
      </Menu>
    </AntHeader>
  );
};

export default Header;