import React from 'react';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { LockOutlinedm ,UserOutlined, LockOutlined } from '@ant-design/icons';
import {
    BrowserRouter,
    Link,
} from 'react-router-dom';

import './Login.css';

const Login = () => {
    const { Text } = Typography;
/*     const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 9 },
    }
    const buttonlayout = {
        wrapperCol: { offset: 8, span: 16 },
    } */

    return (
        <>
                <div style={{
                    margin: 20,
                    textAlign:"center",
                }}> 

                    <div style={{
                        textAlign: "center",
                        marginBottom: 20,
                        paddingTop: 40,
                    }}>
                        <Text style={{
                            fontSize: 30,
                            fontWeight: 700,
                        }}><LockOutlined />Login</Text>
                    </div>
                    <div className="LoginScreen">
                        <Form>
                            <Form.Item name="username" rules={[{ required: true, message: '아이디를 입력하세요!' }]}>
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="아이디"></Input>
                            </Form.Item>
                            <Form.Item name="password" rules={[{ required: true, message: '비밀번호를 입력하세요!' }]}>
                                <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="비밀번호"></Input.Password>
                            </Form.Item>

                            <Form.Item>
                                <Button type="secondary" htmlType="submit" className="LoginBtn">로그인</Button>
                            </Form.Item>
                            <Text style={{
                                float: "left",
                            }}>or <Link to="./Sign-up">회원가입</Link></Text>
                        </Form>
                    </div>
                </div>




        </>
    );
}

export default Login;