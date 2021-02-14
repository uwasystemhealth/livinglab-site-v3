/*!

=========================================================
* NextJS Material Kit v1.1.0 based on Material Kit Free - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit React v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-kit
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-kit/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

//NEXT + REACT LIBRARIES
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Router, { useRouter } from 'next/router';
import ReactGa from 'react-ga';

// Page Changers
import PageChange from 'components/MaterialKit/PageChange/PageChange.js';

// CSS
import 'assets/scss/nextjs-material-kit.scss?v=1.1.0';

// OWN COMPONENTS
import Head from 'components/Layout/Head';
import Navbar from 'components/Layout/Navbar';
import Footer from 'components/Layout/Footer';

import { AppProvider } from 'components/Context/index';

// ROUTE TRANSITIONS AND INTERACTIONS
Router.events.on('routeChangeStart', (url) => {
	console.log(`Loading: ${url}`);
	ReactGa.pageview(url);
	document.body.classList.add('body-page-transition');
	ReactDOM.render(<PageChange path={url} />, document.getElementById('page-transition'));
});
Router.events.on('routeChangeComplete', () => {
	ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'));
	document.body.classList.remove('body-page-transition');
});
Router.events.on('routeChangeError', () => {
	ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'));
	document.body.classList.remove('body-page-transition');
});

const App = (props) => {
	const { Component, pageProps, router } = props;

	useEffect(() => {
		let comment = document.createComment(`
											=========================================================
											* NextJS Material Kit v1.1.0 based on Material Kit Free - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit React v1.8.0
											=========================================================

											* Product Page: https://www.creative-tim.com/product/nextjs-material-kit
											* Copyright 2020 Creative Tim (https://www.creative-tim.com)
											* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-kit/blob/master/LICENSE.md)

											* Coded by Creative Tim

											=========================================================

											* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

											`);
		document.insertBefore(comment, document.documentElement);
		if(process.env.NODE_ENV==="production")
		{
			ReactGa.initialize('UA-93921730-2');

			//REPORT PAGE VIEW
			ReactGa.pageview(router.pathname);
		}
	}, []);

	return (
		<AppProvider>
			<Head></Head>
			<Navbar></Navbar>
			<Component {...pageProps} />
			<Footer></Footer>
		</AppProvider>
	);
};

App.getStaticProps = async ({ Component, req, ctx, pathname }) => {
	let pageProps = {};
	console.log(req);
	if (Component.getInitialProps) {
		pageProps = await Component.getStaticProps(ctx);
	}

	return { pageProps };
};

export default App;
