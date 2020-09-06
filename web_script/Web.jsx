import React, { useState, memo,useEffect } from 'react';
import { Form, Button, PageHeader, Input, Row, Col, Menu } from 'antd'

import { HomeOutlined, VideoCameraAddOutlined, FileAddOutlined, SafetyOutlined,VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Typography } from 'antd';

import {
    BrowserRouter,
    Route,
    Link,
    Switch,
    useLocation,
} from 'react-router-dom';
import Home from './Components/Home';
import AddTest from './Components/AddTest';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import EnterExam_Student from './Components/EnterExam_Student';

const SideMenu = memo((props) => {

    const location=useLocation();
    const MenuName = ["홈", "시험 등록-관리", "시험장 입장-학생","시험장 입장-관리","제출 화면","시험 완료-답안지 확인","시험 링크" ];
    const icons = [<HomeOutlined />, <FileAddOutlined />, <VideoCameraOutlined />,<VideoCameraAddOutlined />];
    const Links = ["/web_script/Web.html", "/Add-Test", "/EnterExam-Student","/1","/2","/3","/4"];
    const [selectedKey, setselectedKey] = useState("0");

    useEffect(()=>{
        console.log(location);
        let index=Links.findIndex((v)=>{
            return (v===location.pathname);
        });
        console.log(index);
        setselectedKey(String(index));
    },[location]);

    return (
        <>
            {/* <div className="logo"/> */}

            <Menu mode="inline" theme="dark" selectedKeys={[selectedKey]} >

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
                            }}><SafetyOutlined />ThrowOrNot</Link>
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
                                        <Route path="/EnterExam-Student" component={EnterExam_Student} />
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