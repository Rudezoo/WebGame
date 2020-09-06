import React, { useState, memo, useEffect } from 'react';
import { Form, Input, Button, Checkbox, Typography, Divider, Space,TimePicker,Upload,message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const AddTest = () => {

    const { Text } = Typography;
    const { TextArea } = Input;
    const { RangePicker } = TimePicker;


    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span:10 },
    }


    const Buttonlayout = {
        wrapperCol: { offset: 8, span: 6 },
    }

    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };

    return (
        <>
            <div>
                <div style={{
                    padding: 20
                }}>
                    <Text strong style={{
                        fontSize: 20,
                    }}>
                        시험 등록
                        </Text>
                    <Divider></Divider>
                </div>
                <div>
                    <Form>

                        <Form.Item {...layout} label="시험 제목">
                            <Input placeholder="등록할 시험의 제목을 입력하세요"></Input>
                        </Form.Item>
                        <Form.Item {...layout} label="시험 주의사항">
                            <TextArea rows={4} placeholder="시험시 주의 사항을 입력해 주세요"></TextArea>
                        </Form.Item>
                        <Form.Item {...layout} label="시험 시간">
                            <RangePicker></RangePicker>
                        </Form.Item>
                        <Form.Item {...layout} label="문제 파일">
                            <Upload {...props}>
                            <Button icon={<UploadOutlined />}>업로드</Button>
                            </Upload>
                        </Form.Item>
                        <Form.Item {...Buttonlayout}>
                             <Button htmlType="submit" style={{
                                 width:"100%",
                                 marginBottom:30,
                             }}>게시</Button>
                        </Form.Item>
                    </Form>
                </div>

            </div>
        </>
    );
}

export default AddTest;