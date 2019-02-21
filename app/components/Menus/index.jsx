import React, { Component } from 'react';
import { Tile,Menu }  from 'tinper-bee';

import './index.less';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Menus extends Component {
	constructor(props, context) {
	    super(props, context);
	    this.state = {
			current1: 'mail',
	    	current2 : 1
	    }
	}
	handleClick1 = (e) => {
        this.setState({
            current1: e.key,
        });
    }
	handleClick2(e) {
	    console.log('click ', e);
	    this.setState({
	      current2: e.key,
	    });
	}
	render(){
		return(
			<div className="menu-demo">
				<Tile className="menu-demo-tile demo-tile demo-tile-lg">
					<h3>横向Menu纯菜单导航</h3>
					<Menu onClick={this.handleClick1}
						selectedKeys={[this.state.current1]}
						mode="horizontal"
						>
						<Menu.Item key="mail" attribute={{'type': 'mail'}}>
							组织 1
						</Menu.Item>
						<Menu.Item key="app" disabled>
							组织 2
						</Menu.Item>
						<SubMenu title={<span>组织 1 - 子</span>}>
							<MenuItemGroup title="组 1">
								<Menu.Item key="setting:1">选项 1</Menu.Item>
							</MenuItemGroup>
							<MenuItemGroup title="组 2">
								<Menu.Item key="setting:3">选项 2</Menu.Item>
								<Menu.Item key="setting:4">选项 3</Menu.Item>
							</MenuItemGroup>
						</SubMenu>
					</Menu>
				</Tile>
				<Tile className="menu-demo-tile demo-tile demo-tile-lg">
						<h3>竖向Menu基础样式</h3>
						<div className="menu-demo-row">
						<Menu onClick={this.handleClick2.bind(this)}
							style={{ width: 240 }}
							defaultOpenKeys={['demo3sub2']}
							selectedKeys={[this.state.current2]}
							mode="inline"
						>
							<SubMenu key="demo3sub1" title={<span><span>Navigation One</span></span>}>
								<MenuItemGroup title="Item 1">
									<Menu.Item key="1">Option 1</Menu.Item>
									<Menu.Item key="2">Option 2</Menu.Item>
								</MenuItemGroup>
								<MenuItemGroup title="Item 2">
									<Menu.Item key="3">Option 3</Menu.Item>
									<Menu.Item key="4">Option 4</Menu.Item>
								</MenuItemGroup>
							</SubMenu>
							<SubMenu key="demo3sub2" title={<span><span>Navigation Two</span></span>}>
								<Menu.Item key="5">Option 5</Menu.Item>
								<Menu.Item key="6">Option 6</Menu.Item>
								<SubMenu key="demo3sub3" title="Submenu">
									<Menu.Item key="7">Option 7</Menu.Item>
									<Menu.Item key="8">Option 8</Menu.Item>
								</SubMenu>
							</SubMenu>
							{/* <SubMenu key="demo3sub4" title={<span><span>Navigation Three</span></span>}>
								<Menu.Item key="9">Option 9</Menu.Item>
								<Menu.Item key="10">Option 10</Menu.Item>
								<Menu.Item key="11">Option 11</Menu.Item>
								<Menu.Item key="12">Option 12</Menu.Item>
							</SubMenu> */}
						</Menu>
						</div>
				</Tile>
			</div>
		)
	}
}


export default Menus;
