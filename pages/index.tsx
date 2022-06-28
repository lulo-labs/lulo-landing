import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Lulo Finance</title>
			</Head>

			<div className="pages-wrapper">
				<div className="pages-container">

					<div className="header-wrapper">
						<h1 className="header-title">LULO</h1>
					</div>

					<div className="vert-wrapper page1">
						<h1 className="page-title">LULO</h1>
						<h2 className="page-subtitle">A Permissionless Funding Book Built for Defi 2.0</h2>

						<div className="main-image img-wrapper">
							<img src="9db52f2b-75be-4e80-b5b9-db0b112be49f.png"></img>
						</div>
					</div>

					<div className="blocks-wrapper page2">
						<div className="left-block">
							<h2 className="page-subtitle">Experience Lending Built with the Transparency of an Order Book</h2>
						</div>
						<div className="right-block">
							<div className="img-wrapper">
								<img src="6aff1e80-10c5-4036-9f4c-73df308e2155.png"></img>
							</div>
						</div>
					</div>

					<div className="blocks-wrapper page3">
						<div className="left-block">
							<div className="img-wrapper">
								<img src="65d3c49b-504a-49b6-8839-f0ac8a6384de.png"></img>
							</div>
						</div>
						<div className="right-block">
							<h2 className="page-subtitle">Composable, Permissionless</h2>
							<h3 className="page-subtitle">Seamlessly integrated with all of your favorite platforms</h3>
						</div>
					</div>

					<div className="blocks-wrapper page4">
						<div className="left-block">
							<h2 className="page-subtitle">Fast, cheap, transparent</h2>
							<h3 className="page-subtitle">
								Place bids to Borrow, Offers to Lend, all with blazingly fast speeds and low costs
							</h3>
						</div>
						<div className="right-block">
							<div className="img-wrapper">
								<img src="3420b4c4-2665-4f44-914f-e4fd8d41cf63.png"></img>
							</div>
						</div>
					</div>

					<div className="blocks-wrapper page5">
						<div className="left-block">
							<div className="img-wrapper">
								<img className="pl-10 rotate-45" src="aedb5e80-6975-41d4-b6eb-ebd579b774cd.png"></img>
							</div>
						</div>

						<div className="right-block">
							<h2 className="page-subtitle">Fast, cheap, transparent 2</h2>
							<h3 className="page-subtitle">
								Place bids to Borrow, Offers to Lend, all with blazingly fast speeds and low costs
							</h3>
						</div>
					</div>

					<div className="blocks-wrapper page6">
						<div className="left-block">
							<h2 className="page-subtitle">Fast, cheap, transparent 3</h2>
							<h3 className="page-subtitle">
								Place bids to Borrow, Offers to Lend, all with blazingly fast speeds and low costs
							</h3>
						</div>
						<div className="right-block">
							<div className="img-wrapper">
								<img src="d683e4f9-312f-44b8-9b7b-44718719d479.png"></img>
							</div>
						</div>
					</div>

					<div className="blocks-wrapper page7">
						<div className="left-block">
							<h2 className="page-subtitle">Powered by Solana</h2>
						</div>

						<div className="right-block">
							<div className="img-wrapper">
								<img src="solanaShape1.png"></img>
							</div>
						</div>
					</div>
					<div className="footer-wrapper">
					<h1 className="footer-title">LULO</h1>
					<div className="copyright">Copyright © 2021. All Rights Reserved</div>
				</div>
				</div>

			</div>
		</>
	)
}

export default Home
