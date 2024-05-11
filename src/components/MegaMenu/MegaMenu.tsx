import React, { ReactNode, useContext, useEffect } from "react";
import clsx from "clsx";
import { Link } from "gatsby";

import ScopeContext from "context/scope";

import { MegaMenuItem, MenuItem, MenuSubnavColumn } from "models/menu";

import { animate, drawOpacity, makeLinearEaseInOut } from "scripts/animate";
import utils from "scripts/utils";

import "./MegaMenu.scss";

const closeShowedSubnav = async (): Promise<void> => {
	await utils.sleep(30); // depends on many factors (network speed, RAM etc...)

	document.querySelector(".subnav-container.showed")?.classList.remove("showed");
};

interface MegaMenuProps {
	menuStructure: MegaMenuItem[];
}

const MegaMenu: React.FC<MegaMenuProps> = ({ menuStructure }) => {
	const subnavs: ReactNode[] = [];
	const { scope: scopeVal } = useContext(ScopeContext);

	useEffect(() => {
		const elemSubnavWrappers = document.querySelectorAll(".nav-container .subnav-container");

		document.querySelectorAll(".nav-container a.subnav").forEach((elem, i) => {
			elem.addEventListener("mouseover", () => {
				elemSubnavWrappers[i].classList.add("showed");
				drawOpacity(elemSubnavWrappers[i] as HTMLElement, "1");
			});

			elem.addEventListener("mousemove", () => {
				if (!elemSubnavWrappers[i].classList.contains("showed")) {
					elem.dispatchEvent(new Event("mouseover"));
				}
			});

			elem.addEventListener("mouseleave", (event: Event) => {
				if ((event as MouseEvent).relatedTarget != elemSubnavWrappers[i]) {
					elem.classList.remove("hovered");

					animate({
						duration: 100,
						elemw: elemSubnavWrappers[i] as HTMLElement,
						timing: makeLinearEaseInOut,
						draw: function (perc: number) {
							drawOpacity(this.elemw, String(1 - perc));
						},
						callback: function () {
							this.elemw?.classList.remove("showed");
						}
					});
				}

				elemSubnavWrappers[i].addEventListener("mouseover", () => {
					elemSubnavWrappers[i].classList.add("showed");
					drawOpacity(elemSubnavWrappers[i] as HTMLElement, "1");

					elem.classList.add("hovered");
				});

				elemSubnavWrappers[i].addEventListener("mouseleave", (_event: Event) => {
					if ((_event as MouseEvent).relatedTarget != event.target) {
						elem.classList.remove("hovered");

						animate({
							duration: 100,
							elemw: elemSubnavWrappers[i] as HTMLElement,
							timing: makeLinearEaseInOut,
							draw: function (perc: number) {
								drawOpacity(this.elemw, String(1 - perc));
							},
							callback: function () {
								this.elemw?.classList.remove("showed");
							}
						});
					}
				});
			});
		});

		return () => {
			document.querySelectorAll("a.subnav").forEach((elem) => {
				elem.replaceWith(elem.cloneNode(true));
			});
		};
	}, []);

	return (
		<nav className="nav-container">
			<ul className="mnav">
				{menuStructure.map(({ id, title, href, scope, subnav }: MegaMenuItem) => {
					if (subnav) {
						subnavs.push(
							<div className="subnav-container animate-slidein-fadein-css" key={id}>
								{subnav.columns.map(({ id, title, items }: MenuSubnavColumn) => (
									<div className="subnav-column" key={id}>
										<div className="subnav-column__title">{title}</div>
										<ul className="snav">
											{items.map(({ id, title, href }: MenuItem) => (
												<li key={id}>
													<Link to={href}>{title}</Link>
												</li>
											))}
										</ul>
									</div>
								))}
							</div>
						);
					}

					return (
						<li key={id}>
							<Link
								to={href}
								className={clsx({
									"nav-item_active": scopeVal === scope,
									"subnav": subnav
								})}
								onClick={subnav && closeShowedSubnav}
							>
								{title}
							</Link>
						</li>
					);
				})}
			</ul>
			{subnavs}
		</nav>
	);
};

export default MegaMenu;
