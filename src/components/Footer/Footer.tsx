import React from "react";
import { Link } from "gatsby";

import useSiteMetadata from "hooks/useSiteMetadata";
import useMetaJSON from "hooks/useMetaJSON";

import "./Footer.scss";

const Footer: React.FC = () => {
	const siteMetadata = useSiteMetadata();
	const meta = useMetaJSON();

	return (
		<footer className="footer">
			<div className="footer__back"></div>
			<div className="container">
				<div className="footer-block">
					<div className="footer-block__title">О нас</div>
					IvanK Production - продакшн-студия топ класса, основанная в 2008-ом году.<br />Мы
					оказываем услуги по аудио/видео производству, дизайну и разработке программного
					обеспечения.
					<br />
					<br />
					<Link to="/legal/offer/">Публичная оферта</Link>
					<br />
					<Link to="/legal/privacy/">Политика конфиденциальности</Link>
				</div>
				<div className="footer-block">
					<div className="footer-block__title">Меню</div>
					<ul>
						<li className="footer-nav__item">
							<Link to="/services/">Услуги</Link>
						</li>
						<li className="footer-nav__item">
							<Link to="/blog/">Блог</Link>
						</li>
						<li className="footer-nav__item">
							<Link to="/about/">О нас</Link>
						</li>
						<li className="footer-nav__item">
							<Link to="/contacts/">Контакты</Link>
						</li>
						<li className="footer-nav__item">
							<Link to="/join/">Заполнить бриф</Link>
						</li>
						<li className="footer-nav__item">
							<Link to="/sitemap/">Карта сайта</Link>
						</li>
					</ul>
				</div>
				<div className="footer-block">
					<div className="footer-block__title">Контакты</div>
					<dl className="footer-entry">
						<i className="fa-time fix-top" />
						<dt>{meta?.worktime?.slice(0, meta?.worktime?.indexOf(" "))}:</dt>
						<dd>{meta?.worktime?.slice(meta?.worktime?.indexOf(" "))}</dd>
						<br />
						<i className="fa-phone fix-top" />
						<dt>тел.:</dt>
						<dd>
							<a href={`tel:${meta?.phone}`}>{meta?.phone}</a>
						</dd>
						<br />
						<i className="fa-email fix-top" />
						<dt>email:</dt>
						<dd>
							<a href={`mailto:${meta?.email_info}`}>{meta?.email_info}</a>
						</dd>
						<br />
						<i className="fa-email" />
						<dt>PR:</dt>
						<dd>
							<a href={`mailto:${meta?.email_pr}`}>{meta?.email_pr}</a>
						</dd>
					</dl>
				</div>
			</div>
			<div className="footer-block footer-block_copyright">
				<ul className="social">
					<li className="social__item">
						<a
							className="vk"
							href="https://vk.com/ivankprod"
							title="Группа во ВКонтакте"
							target="blank"
						></a>
					</li>
					<li className="social__item">
						<a
							className="tw"
							href="https://twitter.com/ivankprod"
							title="Профиль в Twitter"
							target="blank"
						></a>
					</li>
					<li className="social__item">
						<a
							className="ig"
							href="https://instagram.com/ivankprod"
							title="Профиль в Instagram"
							target="blank"
						></a>
					</li>
					<li className="social__item">
						<a
							className="sc"
							href="https://soundcloud.com/ivankprod"
							title="Страница на SoundCloud"
							target="blank"
						></a>
					</li>
					<li className="social__item">
						<a
							className="yt"
							href="https://youtube.com/c/IvanKProduction"
							title="Официальный YouTube-канал"
							target="blank"
						></a>
					</li>
				</ul>
				© 2008-{new Date().getFullYear()} {siteMetadata.title}. Все права защищены.
			</div>
		</footer>
	);
};

export default Footer;
