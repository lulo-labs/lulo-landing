import type { NextPage } from 'next'
import Head from 'next/head'
import * as mc from 'use-mailchimp-form'
import React, { ChangeEvent, useEffect, useState } from 'react'

const Home: NextPage = () => {
	const fieldRef = React.useRef<HTMLInputElement>(null)

	const scrollToBottom = () => {
		fieldRef.current?.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<>
		<Head>
			<title>Lulo Finance</title>
			<Analytics />
		</Head>

			<div className="pages-wrapper">	
				<div className="pages-container">
					<div className="header-wrapper">
						<h1 className="header-title">LULO</h1>
					</div>

					<div className="main-wrapper main-page">
						<div className="button-wrapper">
							<div className="btn-grad-wrapper">
								<button id="ctcbtn" onClick={scrollToBottom} className="contact-button">
									Join Alpha
								</button>
							</div>
							<div className="btn-separator" />
							<div className="">
								<button disabled={true} className="app-button">
									Launching soon...
								</button>
							</div>
						</div>
						<h1 className="page-title">LULO</h1>
						<h2 className="page-subtitle">A Permissionless Lending Order Book</h2>

						<h3 className="page-subtitle">
							Lulo is DeFi lending infrastructure that utilizes order book technology and creates a global liquidity layer
						</h3>
						<div className="main-image img-wrapper">
							<img src="space-top.svg"></img>
						</div>
					</div>

					<div className="blocks-wrapper page1">
						<div className="left-block">

							<h2 className="page-subtitle">Liquidity-as-a-Service</h2>
							<h3 className="page-subtitle">
								Lulo seamlessly integrates with all of your favorite DeFi protocols to offer a global
								lending platform
							</h3>
						</div>
						<div className="right-block">
							<div className="img-wrapper">
								<img src="space-2.svg"></img>
							</div>
						</div>
					</div>

					<div className="blocks-wrapper page2">
						<div className="left-block">
							<div className="img-wrapper">
								<img src="space-3.svg"></img>
							</div>
						</div>
						<div className="right-block">
							<h2> No More Borrow-Deposit Spread</h2>
							<h3 className="page-subtitle">
								By removing pooled risk, lenders and borrowers recieve competitive rates for their loans
							</h3>
						</div>
					</div>

					<div className="blocks-wrapper page3">
						<div className="left-block">
						<h2 className="page-subtitle">Blazingly fast, cheap, and transparent</h2>
							<h3 className="page-subtitle">
								Lenders and borrowers bid/offer at their desired rates and are matched transparently on-chain using our
								lending order book
							</h3>
						</div>
						<div className="right-block">
							<div className="img-wrapper">
								<img src="space-4.svg"></img>
							</div>
						</div>
					</div>

					<div className="blocks-wrapper page4">
						<div className="left-block">
							<div className="img-wrapper">
								<img src="space-5-new.svg"></img>
							</div>
						</div>

						<div className="right-block">
							<h2 className="page-subtitle">Powerful Risk Management Tools</h2>
							<h3 className="page-subtitle">
								Secondary Markets, Rate Arbitrage, and Refinancing allow for better DeFi risk management
							</h3>
						</div>
					</div>

					<div className="blocks-wrapper page5">
						<div className="left-block">
							<h2 className="page-subtitle">Join Our Alpha</h2>
							<h3 className="page-subtitle">
								We are interested in working with DeFi protocols, market makers, and lenders who want to help us build scalable
								DeFi lending. Submit your email so we can get in touch.
							</h3>
						</div>
						<div className="right-block">
							<div className="img-wrapper">
								<img src="space-6.svg"></img>
							</div>
						</div>
					</div>

					<div className="blocks-wrapper page6">
						<div className="left-block">
							<h2 className="page-subtitle">Let us know if you&apos;re interested in joining the Alpha</h2>
						</div>

						<div className="right-block">
							<div className="mailchimp-wrapper">
								<MailChimp fieldRef={fieldRef} />
							</div>
						</div>
					</div>

					<div className="footer-wrapper">
						<h3 className="footer-title">LULO</h3>
						<div className="links-bar">
							<a className="discord" href="https://discord.com/invite/ahrDazzyqG" target="_blank" rel="noreferrer">
								<img className="discord-img" src="discord.jpg" />
							</a>
							<a className="twitter" href="https://twitter.com/lulo_finance" target="_blank" rel="noreferrer">
								<img className="twitter-img" src="twitter.jpg" />
							</a>
							<a className="telegram" href="https://t.me/lulo_finance" target="_blank" rel="noreferrer">
								<img className="telegram-img" src="telegram.jpg" />
							</a>
						</div>
						<div className="solana-wrapper">
							<span className="buffer" />
							<span className="solana-img-wrapper">
								<img className="solana-img" src="solanaLogoMark.png" />
							</span>
							<h3 className="solana-label">Powered by Solana</h3>
						</div>
					</div>
					<div className="copyright">© Lulo 2022. All Rights Reserved</div>
				</div>
			</div>
		</>
	)
}

export default Home

export const Analytics = () => {
	return <div dangerouslySetInnerHTML={innerHtml()} />
}

function innerHtml() {
	return {
		__html: `
		
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-XS1PVRSNFS"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());

			gtag('config', 'G-XS1PVRSNFS');
			gtag('set', {'allow_google_signals': false});
		</script>
		
		`,
	}
}

function MailChimp({ fieldRef }: { fieldRef: React.RefObject<HTMLInputElement> }) {
	const mcUrl = 'https://gmail.us12.list-manage.com/subscribe/post?u=1e1f2971d71a0cde63a8b8b51&amp;id=6f6efae571'
	const { loading, error, success, message, handleSubmit } = mc.useMailChimpForm(mcUrl)

	const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
		setEmailAddress(event.target.value)
	}

	const [errorMsg, setErrorMsg] = useState<string>('')
	const [emailAddress, setEmailAddress] = useState<string>('')

	useEffect(() => {
		const id = setTimeout(() => {
			setErrorMsg('')
		}, 3000)
		return () => {
			clearInterval(id)
		}
	}, [errorMsg])

	useEffect(() => {

		if(message && message.includes("address")){
			setErrorMsg('Please enter a valid email address')
		}

		if(!success){
			setErrorMsg('Something went wrong')
		}

	}, [message, success])

	const submitClick = () => {
		if (emailAddress == '' || emailAddress.indexOf('@') == -1) {
			setErrorMsg('Please enter a valid email address')
			return
		}

		handleSubmit({ EMAIL: emailAddress })
	}

	return (
		<div ref={fieldRef} className="mc-outer">
			<div className="mc-inner">
			<div className="input-response">
				<div className="input-wrapper">
					<input
						className="mc-input"
						id="EMAIL"
						aria-autocomplete="none"
						autoFocus={false}
						autoComplete={'false'}
						autoCorrect={'false'}
						type="email"
						value={emailAddress}
						placeholder="Email..."
						onChange={handleFieldChange}
					/>
				</div>

				<div className="mc-response">
					{loading && <div className="mc-loading"> {loading} </div>}
					{error && <div className="mc-error"> {error} </div>}
					{errorMsg && <div className="mc-error"> {errorMsg} </div>}
					{success && <div className="mc-success"> {message} </div>}
				</div>
			</div>
			<div className="submit-col">
				<div className="btn-grad-wrapper">
					<button onClick={submitClick} className="button-base">
						Join Alpha
					</button>
				</div>
			</div>
			</div>
		</div>
	)
}
