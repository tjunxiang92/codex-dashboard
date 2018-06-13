import React, { Component } from 'react';
import { findDOMNode } from 'react-dom'
import RegistrationForm from './RegistrationForm';
import { FilterTable } from './FilterTable';
import { TreeView } from './TreeView';
import { Locations, Location, Link } from 'react-router-component';
import 'antd/dist/antd.css';
import logo from './logo.svg';
import './App.css';
import { Layout, Menu, Breadcrumb, Icon, Divider, Checkbox, Input, List } from 'antd';
import { AppView } from './AppView';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const data = [
  'Row - Layout',
  'Column - Layout',
  'Text - Fields',
  'TextInput - Fields',
  'Button - Fields',
];

class App extends Component {

  dragStart(ev) {
    ev.dataTransfer.setData("Text", "I'm magical");
  }

  render() {
    var menu = (
      <div className='container' ref="menu">
        {data.map(d => <div>{d}</div>)}
      </div>
    );

    return (
      <div className="App">
      
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <h2>Screens</h2>
          <TreeView></TreeView>
          <Divider />
          <h2>Components</h2>
          <Input placeholder="Search..." />
          {menu}
        </Sider>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1"><Link href="/">Home</Link></Menu.Item>
              <Menu.Item key="2"><Link href="/register">Register</Link></Menu.Item>
              <Menu.Item key="3"><Link href="/table">Table</Link></Menu.Item>
            </Menu>
          </Header>
        
          
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item><Link href="/">Home</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link href="/register">List</Link></Breadcrumb.Item>
              <Breadcrumb.Item>Register</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              <AppView 
                menu={() => findDOMNode(this.refs.menu)}
              />
              {/* <Locations>
                <Location path="/" handler={AppView} />
                <Location path="/table" handler={FilterTable} />
                <Location path="/register" handler={RegistrationForm} />
              </Locations> */}
            </Content>
          </Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <div>Button Options</div>
            <div><Checkbox>Centered</Checkbox></div>
            <div><Checkbox>Expanded</Checkbox></div>
            <div><Checkbox>Padding</Checkbox></div>
            <div><Input defaultValue="8" /></div>
            <div><Checkbox>Clickable</Checkbox></div>
          </Sider>
        </Layout> 
      </div>
    );
  }
}

export default App;
