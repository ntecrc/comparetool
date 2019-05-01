import React from 'react';
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';



const Navbar = () => {
    
    return(
<div className="demo-big-content">
    <Layout>
        <Header title="Content Compare Tool" scroll>
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
        </Content>
    </Layout>
</div>
    );
}

export default Navbar;