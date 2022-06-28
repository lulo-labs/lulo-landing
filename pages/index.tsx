import type { NextPage } from 'next'
import Head from 'next/head'
import *  as mc from 'use-mailchimp-form'
import React, { ChangeEvent, useEffect, useState } from 'react';


const Home: NextPage = () => {


	const fieldRef = React.useRef<HTMLInputElement>(null);

	const scrollToBottom = () => {
		fieldRef.current?.scrollIntoView({ behavior: "smooth" })
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

					<div className="main-wrapper page1">
						<div className='button-wrapper'>
							<div className="btn-grad-wrapper">
								<button id='ctcbtn' onClick={scrollToBottom} className='contact-button'>Contact</button>
							</div>
							<div className="btn-separator" />
							<div className="">
								<button disabled={true} className='app-button'>Launching soon...</button>
							</div>
						</div>
						<h1 className="page-title">LULO</h1>
						<h2 className="page-subtitle">A Permissionless Funding Book Built for Defi 2.0</h2>

						<div className="main-image img-wrapper">
							<img src="space-top.svg"></img>
						</div>
					</div>

					<div className="blocks-wrapper page2">
						<div className="left-block">
							<h2 className="page-subtitle">Experience Lending Built with the Transparency of an Order Book</h2>
						</div>
						<div className="right-block">
							<div className="img-wrapper">
								<img src="space-2.svg"></img>
							</div>
						</div>
					</div>

					<div className="blocks-wrapper page3">
						<div className="left-block">
							<div className="img-wrapper">
								<img src="space-3.svg"></img>
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
								<img src="space-4.svg"></img>
							</div>
						</div>
					</div>

					<div className="blocks-wrapper page5">
						<div className="left-block">
							<div className="img-wrapper">
								<img src="space-5.svg"></img>
							</div>
						</div>

						<div className="right-block">
							<h2 className="page-subtitle">Unparalleled Risk Management</h2>
							<h3 className="page-subtitle">
								 Manage your credit risk with our in-house secondary markets platform
							</h3>
						</div>
					</div>

					<div className="blocks-wrapper page6">
						<div className="left-block">
							<h2 className="page-subtitle">Lender tools</h2>
							<h3 className="page-subtitle">
								Parameterized loans and custom lending tools allows you to isolate your lending to specific groups or institutions
							</h3>
						</div>
						<div className="right-block">
							<div className="img-wrapper">
								<img src="space-6.svg"></img>
							</div>
						</div>
					</div>

					<div className="blocks-wrapper page7">
						<div className="left-block">
						<div className="img-wrapper">
								<img src="solanaShape1.png"></img>
							</div>
						</div>
			

						<div className="right-block">
						<h2 className="page-subtitle">Powered by Solana</h2>

					</div>
					</div>
					<div className="page8">
						<div className="mailchimp-wrapper">
							<MailChimp fieldRef={fieldRef} />
						</div>
					</div>
					<div className="footer-wrapper">
					<h1 className="footer-title">LULO</h1>
					<div className="copyright">Copyright © 2022. All Rights Reserved</div>
				</div>
				</div>

			</div>
		</>
	)
}

export default Home


export const Analytics = () => {
	return (
		<div dangerouslySetInnerHTML={innerHtml()} />
	)
}

function innerHtml() {
	return {
		__html: `
		
		<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-XS1PVRSNFS"></script>
		<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'G-XS1PVRSNFS');
		gtag('set', {'allow_google_signals', false});
		</script>
		
		`
	   }
}


function MailChimp({fieldRef}:{fieldRef: React.RefObject<HTMLInputElement>}) {
	const mcUrl = 'https://gmail.us12.list-manage.com/subscribe/post?u=1e1f2971d71a0cde63a8b8b51&amp;id=6f6efae571'
	const {
		loading,
		error,
		success,
		message,
		handleSubmit
	  } = mc.useMailChimpForm(mcUrl);

	//   const { fields, handleFieldChange } = mc.useFormFields({
	// 	EMAIL: "",
	//   });

	  const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
		setEmailAddress(event.target.value)
	  } 

	  useEffect(() => {
		console.log(loading, error, success, message)

	  }, [loading, error, success, message]
	  )

	  const [errorMsg, setErrorMsg] = useState<string>("")
	  const [emailAddress, setEmailAddress] = useState<string>("")

	useEffect(() => {
		const id = setTimeout(() => {
				setErrorMsg('')
		}, 3000)
		return () => {
			clearInterval(id)
		}
	}, [errorMsg])

	  const submitClick = () => {
		if (emailAddress == "" || emailAddress.indexOf("@") == -1) {
			setErrorMsg("Please enter a valid email address")
			return
		}

		handleSubmit({EMAIL: emailAddress})
	  }

	return (
		<div className='mc-outer'>
			<div className='mc-subscribe' >
				Subscribe to stay up to date on our latest announcements
			</div>
			<div className='mc-inner'>

					<div className='input-and-response'>

						<div class="input-wrapper">
							<input className='mc-input'
								id="EMAIL"
								aria-autocomplete='none'
								autoFocus={false}
								autoComplete={'false'}
								autoCorrect={'false'}
								type="email"
								value={emailAddress}
								placeholder="Email..."
								onChange={handleFieldChange}
							/>

						</div>

						<div className='mc-response'>
								{loading && <div className='mc-loading'> {loading} </div>}
								{error && <div className='mc-error'> {message} </div>}
								{errorMsg && <div className='mc-error'> {errorMsg} </div>}
								{success && <div className='mc-success'> {message} </div>}
						</div>
					</div>
					<div className='submit-col'>					
						<div className="submit-grad-wrapper">
							<button onClick={submitClick}  className='app-button mc-button '>Submit</button>
						</div>
					</div>


		</div>

	  </div>
	) 
}
