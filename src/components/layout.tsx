import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"

interface LayoutProps {
	children?: any
}

const Layout: React.FC<LayoutProps> = ({ children = {} }) => {
	const { site } = useStaticQuery(
		graphql`query {
			site {
				siteMetadata {
					title
				}
			}
		}`
	)

	return (
		<>
			<main>{children}</main>
			<footer>
				<div className="footer-back"></div>
				<div className="container">
					<div className="footer-block first">
						<div className="footer-block-title">ИНФО</div>
						© 2008-{new Date().getFullYear()} {site.siteMetadata.title}. Все права защищены.
						<br></br>
						Копирование материлов сайта без указания источника запрещено!
						<br></br>
						<br></br>
						<a className="spa" href="/legal/user-agreement/">Пользовательское соглашение</a>
						<br></br>
						<a className="spa" href="/legal/privacy-policy/">Политика конфиденциальности</a>
					</div>
					<div className="footer-block second">
						<div className="footer-block-title">БЫСТРЫЕ ССЫЛКИ</div>
						<ul>
							<li><a href="/projects/">ПРОЕКТЫ</a></li>
							<li><a href="/services/">УСЛУГИ</a></li>
							<li><a href="/blog/">БЛОГ</a></li>
							<li><a href="/about/">О НАС</a></li>
							<li><a href="/contacts/">КОНТАКТЫ</a></li>
							<li><a href="/join/">ЗАПОЛНИТЬ БРИФ</a></li>
							<li><a href="/sitemap/">КАРТА САЙТА</a></li>
						</ul>
					</div>
					<div className="footer-block third">
						<div className="footer-block-title">СОЦИАЛЬНЫЕ СЕТИ</div>
						<ul className="social">
							<li><a className="vk" href="https://vk.com/ivankprod" title="Группа во ВКонтакте" target='blank'></a></li>
							<li><a className="fb" href="https://facebook.com/ivankprod" title="Группа в Facebook" target='blank'></a></li>
							<li><a className="tw" href="https://twitter.com/ivankprod" title="Профиль в Twitter" target='blank'></a></li>
							<li><a className="ig" href="https://instagram.com/ivankprod" title="Профиль в Instagram" target='blank'></a></li>
							<li><a className="sc" href="https://soundcloud.com/ivankprod" title="Страница на SoundCloud" target='blank'></a></li>
							<li><a className="yt" href="https://youtube.com/c/IvanKProduction" title="Официальный YouTube-канал" target='blank'></a></li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Layout
