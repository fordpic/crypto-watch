import Head from 'next/head';
import Layout from '@/components/Layout';
import Homepage from '@/components/Homepage';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';

export default function Home() {
	return (
		<>
			<Head>
				<title>Crypto Dashboard</title>
				<meta
					name='description'
					content='Dashboard for viewing cryptocurrencies'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<SearchBar />
			<main>
				<Layout>
					<Homepage />
				</Layout>
			</main>
			<Footer />
		</>
	);
}
