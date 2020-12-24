import React, { Component } from "react";
import {
	ProSidebar,
	Menu,
	MenuItem,
	SubMenu,
	SidebarHeader,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FaGem, FaHeart, FaEllipsisH, FaEllipsisV } from "react-icons/fa";

import "./LeftBar.css";
import { Route, withRouter } from "react-router-dom";

class LeftBar extends Component {
	state = {
		collapsed: false,
	};

	toggleExpandHandler = () => {
		const collapsed = !this.state.collapsed;
		this.setState({ collapsed });
	};

	render() {
		const MenuItemExt = ({ icon, text, to, activeOnlyWhenExact }) => {
			return (
				<Route
					path={to}
					exact={activeOnlyWhenExact}
					children={({ match, history }) => (
						<MenuItem
							active={match}
							icon={icon}
							onClick={() => {
								history.push(to);
							}}
						>
							{text}
						</MenuItem>
					)}
				/>
			);
		};

		return (
			<ProSidebar collapsed={this.state.collapsed}>
				<SidebarHeader className="cursor__pointer pro-sidebar-header__modif d-flex align-items-center align-content-center">
					{!this.state.collapsed ? (
						<div className="flex-grow-1">Admin Panel</div>
					) : null}
					<span
						onClick={this.toggleExpandHandler}
						className="toggle__icon__wrapper rounded-circle"
					>
						{!this.state.collapsed ? (
							<FaEllipsisH />
						) : (
							<FaEllipsisV />
						)}
					</span>
				</SidebarHeader>
				<Menu iconShape="square">
					{MenuItemExt({
						icon: <FaGem />,
						text: "Dashboard",
						to: "/dashboard",
						activeOnlyWhenExact: true,
					})}
					{MenuItemExt({
						icon: <FaGem />,
						text: "User",
						to: "/master/user",
						activeOnlyWhenExact: true,
					})}
					<SubMenu title="Components" icon={<FaHeart />}>
						<MenuItem>Component 1</MenuItem>
						<MenuItem>Component 2</MenuItem>
					</SubMenu>
				</Menu>
			</ProSidebar>
		);
	}
}

export default withRouter(LeftBar);
