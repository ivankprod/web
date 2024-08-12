import React from "react";
import { HeadFC } from "gatsby";

import ScopeContext from "context/scope";

import useMetaJSON from "hooks/useMetaJSON";

import Layout from "components/Layout";
import { Breadcrumbs, SEO } from "components";
import { ContactsForm } from "forms/ContactsForm";

import { Page } from "models/page";

import "./contacts.scss";

const ContactsPage = () => {
	const currentPage: Page = {
		title: "Контакты",
		path: "contacts"
	};

	const meta = useMetaJSON();

	return (
		<ScopeContext.Provider value={{ scope: currentPage.path }}>
			<Layout>
				<section id="content-holder" className="container">
					<Breadcrumbs page={currentPage} />
					<div id="content" className="content animate-fadein-css">
						<h1>Наши контакты</h1>
						<div className="contacts-emails">
							<div className="contacts-emails__column">
								<h3>Обратная связь</h3>
								<a href={`mailto:${meta?.email_info}`}>
									{meta?.email_info}
								</a>
							</div>
							<div className="contacts-emails__column">
								<h3>Пресса / PR</h3>
								<a href={`mailto:${meta?.email_pr}`}>
									{meta?.email_pr}
								</a>
							</div>
						</div>
						<ContactsForm />
					</div>
				</section>
			</Layout>
		</ScopeContext.Provider>
	);
};

export default ContactsPage;

export const Head: HeadFC = () => {
	return <SEO title="Контакты" description="Наши контакты" path="contacts" />;
};
