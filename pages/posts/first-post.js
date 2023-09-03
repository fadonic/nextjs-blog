import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import Layout from '../../components/Layout';

export default function FirstPost() {
	return (
		<>
			<Layout>
				<Head>
					<title>Next Blog - First Post</title>
				</Head>

				<h1>First Post</h1>
				<h2>
					<Link href="/">Back home</Link>
				</h2>
			</Layout>
		</>
	);
}
