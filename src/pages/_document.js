import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
			<Head>
				<title>Next.js 테스트 프로젝트</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
			</Html>
		);
	}
}

export default MyDocument;