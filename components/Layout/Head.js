// REACT+NEXT
import { NextSeo } from 'next-seo';

// import your default seo configuration
import SEO from '../../next-seo.config';

const HeadMeta = () => {
	return <NextSeo {...SEO}></NextSeo>;
};

export default HeadMeta;
