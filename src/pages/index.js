import Head from 'next/head';
import Link from 'next/dist/client/link';
import '../styles.scss'

function Home() {
	return (
		<>
			<Head>
				<title>Next.js 테스트 프로젝트</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>


			<div className="example">Welcome to Next.js!</div>
			<img src="/static/d48242bb0f1cdcb2.gif" alt="aaw_yeah" />

			<p>
				<ul>
					<li>
						<Link href="/post/[pid]" as="/post/abc">
							<a>Fist Post</a>
						</Link>
					</li>
					<li>
						<Link href="/post/[pid]" as="/post/efg">
							<a>Fist Post</a>
						</Link>
					</li>
				</ul>
			</p>
			<p>
				<Link href="/auth">
					Auth Page
				</Link>
			</p>
		</>
	);
}

export default Home;
