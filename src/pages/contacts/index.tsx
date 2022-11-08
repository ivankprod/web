import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ScopeContext from "../../context/scope"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import { Breadcrumbs, Page } from "../../components/Breadcrumbs"
import ContactsForm from "../../forms/ContactsForm"

import "../../styles/pages/contacts.css"

const ContactsPage = () => {
	const currentPage: Page = { title: "Контакты" };

	const meta = useStaticQuery(
		graphql`query {
			allFile(filter: {relativePath: {eq: "meta.json"}}) {
				nodes {
					childContentJson {
						meta {
							phone
							email
							email_info
							email_pr
						}
					}
				}
			}
		}`
	).allFile?.nodes[0]?.childContentJson?.meta

	return (
		<ScopeContext.Provider value={{ scope: "contacts" }}>
			<Layout>
				<SEO title={currentPage.title} description="Наши контакты" />
				<section id="content-holder" className="container">
					<Breadcrumbs page={currentPage} />
					<div id="content" className="content animate-fadein-css">
						<h1>Наши контакты</h1>
						<div className="contacts-emails">
							<div className="contacts-emails-column">
								<h3>Обратная связь</h3>
								<a href={`mailto:${meta.email_info}`}>{meta.email_info}</a>
							</div>
							<div className="contacts-emails-column">
								<h3>Пресса / PR</h3>
								<a href={`mailto:${meta.email_pr}`}>{meta.email_pr}</a>
							</div>
						</div>
						<ContactsForm />
					</div>
				</section>
			</Layout>
		</ScopeContext.Provider>
	)
}

export default ContactsPage
