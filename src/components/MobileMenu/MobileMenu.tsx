import React, { useContext, useState } from "react";
import { Link } from "gatsby";
import clsx from "clsx";

import ScopeContext from "context/scope";

import Button from "elements/Button";

import { MegaMenuItem } from "models/menu";

import "./MobileMenu.scss";

interface MobileMenuProps {
	menuStructure: MegaMenuItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ menuStructure }) => {
	const [menuOpened, setMenuOpened] = useState(false);

	const ctx = useContext(ScopeContext);

	return (
		<div className="mobile-menu">
			<Button
				as={"button"}
				className="mobile-menu__button"
				onClick={() => {
					setMenuOpened((opened) => !opened);
				}}
			>
				{menuOpened ? (
					<div className="mobile-menu__button-text_close"></div>
				) : (
					<div className="mobile-menu__button-text_open"></div>
				)}
			</Button>
			{menuOpened && (
				<div className="nav-container-wrapper">
					<nav className="nav-container nav-container_mobile">
						<ul className="mnav">
							{menuStructure.map(
								({ id, title, href, scope }: MegaMenuItem) => (
									<li key={id}>
										<Link
											to={href}
											className={clsx({
												"nav-item_active": ctx.scope === scope
											})}
										>
											{title}
										</Link>
									</li>
								)
							)}
						</ul>
					</nav>
				</div>
			)}
		</div>
	);
};

export default MobileMenu;
