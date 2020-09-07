import React, { useState } from 'react';
import { Modal, Button, Input, Form, Card } from 'antd';
import "../design/EnterExam-Student.css"
import { WarningOutlined } from '@ant-design/icons';


const EnterExam_Student = () => {

    const [Visible, setVisible] = useState(true);
    const [StudentId, setStudentId] = useState('');
    const [Name, setName] = useState('');




    const onCancle = () => {
        setVisible(false);
    }
    const onFinish = (values) => {
        if (values.sid != '' && values.sname != '') {
            setStudentId(values.sid);
            setName(values.sname);
            setVisible(false);
        }

    };

    /*     const OnChangeStudentId=(e)=>{
            setStudentId(e.target.value);
        }
    
        const OnChangeName=(e)=>{
            setName(e.target.value);
        } */

    return (
        <>
            <div>
                <Modal visible={Visible}

                    title="정보 입력"
                    footer={[

                    ]}

                >
                    <Form onFinish={onFinish} >
                        <Form.Item name="sid" label="학번" rules={[{ required: true, message: '학번을 입력하세요!' }]}>
                            <Input></Input>
                        </Form.Item>
                        <Form.Item name="sname" label="이름" rules={[{ required: true, message: '이름을 입력하세요!' }]}>
                            <Input></Input>
                        </Form.Item>
                        <Form.Item>
                            <Button key="back" onClick={onCancle}>취소</Button>
                            <Button key="submit" htmlType="submit">제출</Button>
                        </Form.Item>
                    </Form>
                </Modal>


                <div className="enterexam-background">
                    <Card title="※주의사항※" bordered="false" style={{
                        top: "30%",
                        left: "35%",
                        width: 500,
                        height: 400,

                    }}>
                        <p>
                            인적사항
                        </p>
                        <p>
                            시험 시간은 60분이며, 유형은 객관식 10문항입니다. 각 배점은 문제 옆에 표기되있습니다
                    </p>
                    </Card>

                </div>

            </div>



        </>
    );
}

export default EnterExam_Student;