import React, { useEffect } from "react"
import { Link } from "gatsby"

import animate from "../scripts/animate"
import utils from "../scripts/utils"

const checkActiveItem = (page: string, scope: string): string => {
	return page == scope ? "nav-item-active" : "";
}

const closeShowedSubnav = async () => {
	await utils.sleep(30); // depends on many factors (network speed, RAM etc...)

	document.querySelector(".subnav-container.showed")?.classList.remove("showed");
}

interface NavigationProps {
	scope?: string
}

const Navigation: React.FC<NavigationProps> = ({ scope = "" }) => {
	useEffect(() => {
		//  Submenus
		const elemSubnavWrappers = document.querySelectorAll('.subnav-container');

		document.querySelectorAll("a.subnav").forEach(function (elem, i) {
			elem.addEventListener("mouseover", () => {
				elemSubnavWrappers[i].classList.add("showed");
				animate.drawOpacity((elemSubnavWrappers[i] as HTMLElement), '1');
			});

			elem.addEventListener("mousemove", () => {
				if (!elemSubnavWrappers[i].classList.contains("showed")) {
					elem.dispatchEvent(new Event("mouseover"));
				}
			});

			elem.addEventListener("mouseleave", function (event: any) {
				if (event.relatedTarget != elemSubnavWrappers[i]) {
					elem.classList.remove("hovered");

					animate.animate({
						duration: 100,
						timing: animate.makeLinearEaseInOut,
						draw: (perc: number) => {
							animate.drawOpacity((elemSubnavWrappers[i] as HTMLElement), String(1 - perc));
						},
						callback: () => {
							elemSubnavWrappers[i].classList.remove("showed");
						}
					});
				}

				elemSubnavWrappers[i].addEventListener("mouseover", function () {
					elemSubnavWrappers[i].classList.add("showed"); animate.drawOpacity((elemSubnavWrappers[i] as HTMLElement), '1');
					elem.classList.add("hovered");
				});

				elemSubnavWrappers[i].addEventListener("mouseleave", function (_event: any) {
					if (_event.relatedTarget != event.target) {
						elem.classList.remove("hovered");

						animate.animate({
							duration: 100,
							elemw: (elemSubnavWrappers[i] as HTMLElement),
							timing: animate.makeLinearEaseInOut,
							draw: function (perc: number) {
								animate.drawOpacity(this.elemw, String(1 - perc));
							},
							callback: function () {
								this.elemw?.classList.remove("showed");
							}
						});
					}
				});
			});
		});
	}, []);

	return (
		<>
			<nav className="nav-container">
				<ul className="mnav">
					<li><Link to="/" data-scope="home" className={checkActiveItem("home", scope)}>ГЛАВНАЯ</Link></li>
					<li><Link to="/projects/" data-scope="projects" 
					          className={"subnav " + checkActiveItem("projects", scope)}
					          onClick={closeShowedSubnav}>ПРОЕКТЫ
					</Link></li>
					<li><Link to="/services/" data-scope="services" 
					          className={"subnav " + checkActiveItem("services", scope)}
					          onClick={closeShowedSubnav}>УСЛУГИ
					</Link></li>
					<li><Link to="/blog/" data-scope="blog" className={checkActiveItem("blog", scope)}>БЛОГ</Link></li>
					<li><Link to="/about/" data-scope="about" className={checkActiveItem("about", scope)}>О НАС</Link></li>
					<li><Link to="/contacts/" data-scope="contacts" className={checkActiveItem("contacts", scope)}>КОНТАКТЫ</Link></li>
				</ul>
				<div className="subnav-container animate-slidein-fadein-css">
					<div className="subnav-column">
						<div className="subnav-title">Subnav for projects</div>
						<ul className="snav">
							<li><Link to="/projects/it/">IT-технологии</Link></li>
							<li><Link to="#">Меню 2ь ьь</Link></li>
							<li><Link to="#">Меню 3</Link></li>
							<li><Link to="#">Мебню 4ь</Link></li>
							<li><Link to="#">Меню 5</Link></li>
							<li><Link to="#">Менююю 1</Link></li>
						</ul>
					</div>
					<div className="subnav-column">
						<div className="subnav-title">Subnav for projects 2</div>
						<ul className="snav">
							<li><Link to="#">Меню 1</Link></li>
							<li><Link to="#">Менasdю 2ь ьь</Link></li>
							<li><Link to="#">Менasdю 3</Link></li>
							<li><Link to="#">Менююю 1</Link></li>
						</ul>
					</div>
					<div className="subnav-column">
						<div className="subnav-title">Subnav for projects 3</div>
						<ul className="snav">
							<li><Link to="#">Меню 1</Link></li>
							<li><Link to="#">Меню 2ь ьь</Link></li>
							<li><Link to="#">Меню 3</Link></li>
							<li><Link to="#">Мебню 4ь</Link></li>
							<li><Link to="#">Меню 5</Link></li>
						</ul>
					</div>
				</div>
				<div className="subnav-container animate-slidein-fadein-css">
					Subnav for services
				</div>
			</nav>
		</>
	)
}

export default Navigation
