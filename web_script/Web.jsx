import React, { useState, memo } from 'react';
import { Form, Button, PageHeader, Input, Row, Col, Menu } from 'antd'

import { Layout } from 'antd';
import SideMenu from './SideMenu';

import { SmileTwoTone, AimOutlined } from '@ant-design/icons';


const Web = memo(() => {

    const { Header, Footer, Sider, Content } = Layout;
    const { SubMenu } = Menu;
    return (
        <>

            {/* <PageHeader
        className="site-page-header"
        title="Title"
        subTitle="This is a subtitle"></PageHeader>
        <Form>
            <Row>
                <Col span={12}>
                    <Input value="check"></Input>
                </Col>
                <Col span={12}>
                    <Button type="primary" htmlType="submit">check</Button>
                </Col>
            </Row>
            
            
            
        </Form> */}
            <Layout>
                <Header>
                        <AimOutlined style={{
                            fontSize: 30,
                            color: "white"
                        }} />
                        
                </Header>
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