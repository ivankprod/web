import React from "react"
import { Link } from "gatsby"

import useSiteMetadata from "hooks/useSiteMetadata"

import "./Footer.css"
import "styles/utils/social.css"

const Footer: React.FC = () => {
	const siteMetadata = useSiteMetadata();

	return (
		<footer>
			<div className="footer-back"></div>
			<div className="container">
				<div className="footer-block first">
					<div className="footer-block-title">ИНФО</div>
					© 2008-{new Date().getFullYear()} {siteMetadata.title}. Все права защищены.
					<br />
					Копирование материлов сайта без указания источника запрещено!
					<br />
					<br />
					<Link to="/legal/offer/">Публичная оферта</Link>
					<br />
					<Link to="/legal/privacy/">Политика конфиденциальности</Link>
				</div>
				<div className="footer-block second">
					<div className="footer-block-title">МЕНЮ</div>
					<ul>
						<li><Link to="/services/">УСЛУГИ</Link></li>
						<li><Link to="/blog/">БЛОГ</Link></li>
						<li><Link to="/about/">О НАС</Link></li>
						<li><Link to="/contacts/">КОНТАКТЫ</Link></li>
						<li><Link to="/join/">ЗАПОЛНИТЬ БРИФ</Link></li>
						<li><Link to="/sitemap/">КАРТА САЙТА</Link></li>
					</ul>
				</div>
				<div className="footer-block third">
					<div className="footer-block-title">СОЦИАЛЬНЫЕ СЕТИ</div>
					<ul className="social">
						<li><a className="vk" href="https://vk.com/ivankprod" title="Группа во ВКонтакте" target='blank'></a></li>
						<li><a className="tw" href="https://twitter.com/ivankprod" title="Профиль в Twitter" target='blank'></a></li>
						<li><a className="ig" href="https://instagram.com/ivankprod" title="Профиль в Instagram" target='blank'></a></li>
						<li><a className="sc" href="https://soundcloud.com/ivankprod" title="Страница на SoundCloud" target='blank'></a></li>
						<li><a className="yt" href="https://youtube.com/c/IvanKProduction" title="Официальный YouTube-канал" target='blank'></a></li>
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default Footer
