import React, { useState, memo } from 'react';
import { Form, Button, PageHeader, Input, Row, Col, Menu } from 'antd'

import { HomeOutlined, VideoCameraAddOutlined, FileAddOutlined, SafetyOutlined } from '@ant-design/icons';
import { Layout, Typography } from 'antd';

import {
    BrowserRouter,
    Route,
    Link,
    Switch,
} from 'react-router-dom';
import Home from './Components/Home';
import AddTest from './Components/AddTest';
import SeeVideo from './Components/SeeVideo';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

const SideMenu = memo((props) => {

    const MenuName = ["홈", "시험 추가", "비디오 확인"];
    const icons = [<HomeOutlined />, <FileAddOutlined />, <VideoCameraAddOutlined />];
    const Links = ["/web_script/Web.html", "/Add-Test", "/See-Video"];


    return (
        <>
            {/* <div className="logo"/> */}

            <Menu mode="inline" theme="dark" defaultSelectedKeys={['0']} >

                {
                    MenuName.map((v, i) => {
                        return <Menu.Item key={i} icon={icons[i]}> <Link to={Links[i]}>{v}</Link></Menu.Item>;
                    })
                }


            </Menu>


        </>
    );
});


const Web = memo(() => {

    const { Header, Footer, Sider, Content } = Layout;
    const { SubMenu } = Menu;
    const { Title, Text } = Typography;


    const [collapsed, setcollapsed] = useState(false);

    const onCollapse = () => {
        console.log(collapsed);
        if (collapsed === true) {
            setcollapsed(false);
        } else {
            setcollapsed(true);
        }
    }


    return (
        <>
            <BrowserRouter>

                <Layout style={{ minHeight: '100vh'}}>

                    <Header>
                        <Text className="Logo">
                            <Link to="/web_script/Web.html" style={{
                                color:"white"
                            }}><SafetyOutlined />NoCheat</Link>
                    </Text>
                        <Text className="subLogo">
                            &nbsp; @Rude_zoo @hyowii
                    </Text>
                        <Link to="/Login" className="LoginClick">Login</Link>

                    </Header>



                    <Layout>

                        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                            <SideMenu></SideMenu>
                        </Sider>
                        <Layout>


                            <Content className="Site-Content">

                                <div className="site-layout-content">
                                    <Switch>
                                        <Route exact path="/web_script/Web.html" component={Home} />
                                        <Route path="/Add-Test" component={AddTest} />
                                        <Route path="/See-Video" component={SeeVideo} />
                                        <Route path="/Login" component={Login} />
                                        <Route path="/Sign-Up" component={SignUp} />
                                    </Switch>


                                </div>

                            </Content>
                            <Footer style={
                                {
                                    textAlign: "center"
                                }
                            }>Web Design ©2020 Created by Rude zoo</Footer>
                        </Layout>

                    </Layout>

                </Layout>

            </BrowserRouter>
        </>
    );

});

export default Web;