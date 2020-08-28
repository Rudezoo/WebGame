import React, { useState, memo } from 'react';
import { Form, Button, PageHeader, Input, Row, Col, Menu } from 'antd'

import { Layout, Typography } from 'antd';
import SideMenu from './SideMenu';

import { SmileTwoTone, AimOutlined } from '@ant-design/icons';


const Web = memo(() => {

    const { Header, Footer, Sider, Content } = Layout;
    const { SubMenu } = Menu;
    const { Title, Text } = Typography;

    return (
        <>


            <Layout>
                <Row>
                    <Col span={19}>
                        <Header>
                            <h2 style={{
                                color: "white"
                            }}
                                class="WebHeader"
                            >NoCheat
                                        <Text disabled style={
                                    {
                                        fontSize: 15,
                                        color: "gray"
                                    }
                                }>&nbsp;@Rude_zoo</Text>
                            </h2>
                        </Header>
                    </Col>

                    <Col span={5}>
                        <Header>
                            <Row>
                                <Col span={12}>
                                <Button>Login</Button>
                                </Col>
                                <Col span={12}>
                                <Button>Logout</Button>
                                </Col>
                
                            </Row>
                           
                        </Header>
                    </Col>


                </Row>


                <Layout>
                    <Sider>
                        <SideMenu></SideMenu>
                    </Sider>

                    <Content className="Site-Content">

                        <div className="site-layout-content">
                            Content
                        </div>
                    </Content>
                </Layout>
                <Footer style={
                    {
                        textAlign: "center"
                    }
                }>Web Design ©2020 Created by Rude zoo</Footer>
            </Layout>


        </>
    );

});

export default Web;