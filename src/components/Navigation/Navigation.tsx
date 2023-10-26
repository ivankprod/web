import React, { useContext, useEffect } from "react"
import clsx from "clsx"
import { Link } from "gatsby"

import ScopeContext from "context/scope"

import { animate, drawOpacity, makeLinearEaseInOut } from "scripts/animate"
import utils from "scripts/utils"

import "./Navigation.css"

const closeShowedSubnav = async (): Promise<void> => {
	await utils.sleep(30); // depends on many factors (network speed, RAM etc...)

	document.querySelector(".subnav-container.showed")?.classList.remove("showed");
}

const Navigation: React.FC = () => {
	const { scope } = useContext(ScopeContext);

	useEffect(() => {
		const elemSubnavWrappers = document.querySelectorAll('.subnav-container');

		document.querySelectorAll("a.subnav").forEach(function (elem, i) {
			elem.addEventListener("mouseover", () => {
				elemSubnavWrappers[i].classList.add("showed");
				drawOpacity((elemSubnavWrappers[i] as HTMLElement), '1');
			});

			elem.addEventListener("mousemove", () => {
				if (!elemSubnavWrappers[i].classList.contains("showed")) {
					elem.dispatchEvent(new Event("mouseover"));
				}
			});

			elem.addEventListener("mouseleave", function (event: any) {
				if (event.relatedTarget != elemSubnavWrappers[i]) {
					elem.classList.remove("hovered");

					animate({
						duration: 100,
						timing: makeLinearEaseInOut,
						draw: (perc: number) => {
							drawOpacity((elemSubnavWrappers[i] as HTMLElement), String(1 - perc));
						},
						callback: () => {
							elemSubnavWrappers[i].classList.remove("showed");
						}
					});
				}

				elemSubnavWrappers[i].addEventListener("mouseover", function () {
					elemSubnavWrappers[i].classList.add("showed"); drawOpacity((elemSubnavWrappers[i] as HTMLElement), '1');
					elem.classList.add("hovered");
				});

				elemSubnavWrappers[i].addEventListener("mouseleave", function (_event: any) {
					if (_event.relatedTarget != event.target) {
						elem.classList.remove("hovered");

						animate({
							duration: 100,
							elemw: (elemSubnavWrappers[i] as HTMLElement),
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
	}, []);

	return (
		<nav className="nav-container">
			<ul className="mnav">
				<li><Link to="/" className={clsx({ "nav-item-active": scope === "home" })}>ГЛАВНАЯ</Link></li>
				<li><Link to="/services/" 
						className={clsx("subnav", { "nav-item-active": scope === "services" })}
						onClick={closeShowedSubnav}>УСЛУГИ
					</Link>
				</li>
				<li><Link to="/blog/" className={clsx({ "nav-item-active": scope === "blog" })}>БЛОГ</Link></li>
				<li><Link to="/about/" className={clsx({ "nav-item-active": scope === "about" })}>О НАС</Link></li>
				<li><Link to="/contacts/" className={clsx({ "nav-item-active": scope === "contacts" })}>КОНТАКТЫ</Link></li>
			</ul>
			<div className="subnav-container animate-slidein-fadein-css">
				<div className="subnav-column">
					<div className="subnav-title">Медиа</div>
					<ul className="snav">
						<li><Link to="/services/media/audio/">Аудио-продакшн</Link></li>
						<li><Link to="/services/media/video/">Видео-продакшн</Link></li>
						<li><Link to="/services/media/common/">Полный цикл</Link></li>
					</ul>
				</div>
				<div className="subnav-column">
					<div className="subnav-title">Дизайн</div>
					<ul className="snav">
						<li><Link to="/services/design/common/">Оформление</Link></li>
						<li><Link to="/services/design/covers/">Обложки релизов</Link></li>
						<li><Link to="/services/design/prints/">Полиграфия</Link></li>
					</ul>
				</div>
				<div className="subnav-column">
					<div className="subnav-title">IT-технологии</div>
					<ul className="snav">
						<li><Link to="/services/it/web/">Разработка веб-сайтов</Link></li>
						<li><Link to="/services/it/software/">Разработка прикладного ПО</Link></li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navigation
