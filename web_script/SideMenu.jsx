import React, { useState, memo } from 'react';
import { Layout, Menu } from 'antd';

const SideMenu = memo(() => {

    const MenuName=["One","Two","Three"];

    return (
        <>
            {/* <div className="logo"/> */}
            <Menu mode="inline" theme="dark" >
                {
                    MenuName.map((v)=>{
                    return <Menu.Item className="MenuItem">{v}</Menu.Item>;
                    })
                }
                

            </Menu>
        </>
    );
});

export default SideMenu;