import React, { useContext } from "react";
import clsx from "clsx";

import ScopeContext from "context/scope";
import useMetaJSON from "hooks/useMetaJSON";

import Button from "elements/Button";
import Navigation from "components/Navigation";

import "./Header.css";

const Header: React.FC = () => {
	const { scope } = useContext(ScopeContext);
	const meta = useMetaJSON();

	return (
		<header className={clsx({ "homepage-header": scope === "home" })}>
			<div className="container header-picture">
				<div className="header-picture-wrapper"></div>
			</div>
			<div className="stretch-container headline">
				<div className="container headline">
					<a href="/">
						<div className="logotype"></div>
					</a>
					<div className="header-right">
						<div></div>
						<div className="global-info">
							<div className="global-info-row">
								<div>
									<a href={`tel:${meta?.phone}`}>{meta?.phone}</a>
								</div>
								<div className="global-info-stroke">
									<a href={`mailto:${meta?.email_info}`}>
										{meta?.email_info?.toUpperCase()}
									</a>
								</div>
							</div>
							<Button to="/join/">Заполнить бриф</Button>
						</div>
						<Navigation />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
