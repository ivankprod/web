import React from "react";

import useMetaJSON from "hooks/useMetaJSON";

import Button from "elements/Button";
import Navigation from "components/Navigation";

import "./Header.scss";

export const Header: React.FC = () => {
	const meta = useMetaJSON();

	return (
		<header className="header">
			<div className="container header-picture">
				<div className="header-picture__wrapper"></div>
			</div>
			<div className="stretch-container stretch-container_headline">
				<div className="container container_headline">
					<a href="/">
						<div className="logotype"></div>
					</a>
					<div className="header-right">
						<div></div>
						<div className="global-info">
							<div className="global-info__row">
								<div>
									<a href={`tel:${meta?.phone}`}>
										{meta?.phone}
									</a>
								</div>
								<div className="global-info__stroke">
									<a href={`mailto:${meta?.email_info}`}>
										{meta?.email_info?.toUpperCase()}
									</a>
								</div>
							</div>
							<Button to="/join/">Заполнить бриф</Button>
						</div>
						<Navigation />
					</div>
					<Navigation mobile />
				</div>
			</div>
		</header>
	);
};

export default Header;
