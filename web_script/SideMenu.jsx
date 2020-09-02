import React, { useState, memo } from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined,VideoCameraAddOutlined,FileAddOutlined} from '@ant-design/icons';
import {
    BrowserRouter,
    Link,
} from 'react-router-dom';


const SideMenu = memo((props) => {

    const MenuName=["Home","Add Test","See Exam video"];
    const icons=[<HomeOutlined/>,<FileAddOutlined/>,<VideoCameraAddOutlined/>];
    const Links=["/Home","/Add-Test","See-Video"];


    return (
        <>
            {/* <div className="logo"/> */}

                    <Menu mode="inline" theme="dark" >

                    {/* {
                        MenuName.map((v,i)=>{
                        return <Menu.Item key={i}> <BrowserRouter><Link to={Links[i]}>Link</Link></BrowserRouter></Menu.Item>;
                        })
                    }  */}
                    <Link to="/Home">Hello</Link>
                   
                                
                    
                </Menu>

            
        </>
    );
});

export default SideMenu;