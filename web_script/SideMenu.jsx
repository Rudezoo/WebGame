import React, { useState, memo } from 'react';
import { Layout, Menu } from 'antd';

const SideMenu = memo(() => {

    const MenuName=["One","Two","Three"];

    return (
        <>
            {/* <div className="logo"/> */}
            <Menu theme="dark" mode="inline" >
                {
                    MenuName.map((v)=>{
                    return <Menu.Item>{v}</Menu.Item>;
                    })
                }
                

            </Menu>
        </>
    );
});

export default SideMenu;