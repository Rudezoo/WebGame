import React from 'react';
import {Form, Input, Button, Checkbox ,Typography} from 'antd';
import { LockOutlined } from '@ant-design/icons';

const Login =()=>{
    const {Text}=Typography;
    const layout={
        labelCol: { span: 8 },
        wrapperCol: { span: 9 },
    }
    const buttonlayout={
        wrapperCol: { offset: 8, span: 16 },
    }

    return(
        <>
        <div style={{
                textAlign:"center",
                marginBottom:20,
            }}>
            <Text style={{
                fontSize:30,
                fontWeight:700,
            }}><LockOutlined />Login</Text>
        </div>
        <div className="LoginScreen"> 
            <Form style={{
               
            }}>
               <Form.Item {...layout} label="UserName" name="username" rules={[{required : true, message: 'Please Input you UserName'}]}>
                   <Input></Input>
               </Form.Item>
               <Form.Item {...layout} label="Password" name="password" rules={[{required : true, message: 'Please Input you PassWord'}]}>
                    <Input.Password></Input.Password>
               </Form.Item>

               <Form.Item {...buttonlayout}>
                    <Button type="secondary" htmlType="submit" style={{
                        marginRight : 20
                    }}>Sign In</Button>
                    <Button type="secondary">Sign Up</Button>
               </Form.Item>
           </Form>
        </div>
           
        </>
    );
}

export default Login;