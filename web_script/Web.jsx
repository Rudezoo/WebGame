import React,{useState,memo} from 'react';
import {Form,Button,PageHeader,Input,  Row, Col} from 'antd'




const Web =memo(()=>{


    return(
        <>
        
        <PageHeader
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
            
            
            
        </Form>
        

        </>
    );

});

export default Web;