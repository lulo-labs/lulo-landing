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
							<div className="">
								<button disabled={true} className='app-button'>Launching soon...</button>
							</div>
						</div>
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
								placeholder="Email address..."
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


			{/* </form> */}

		</div>

	  </div>
	) 
}

function innerMailChimp() {
	return {
		__html: `
			<!-- Begin Mailchimp Signup Form -->
			<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7_dtp.css" rel="stylesheet" type="text/css">
			<style type="text/css">
				#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;  width:600px;}
				/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
				We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
			</style>
			<div id="mc_embed_signup">
			<form action="https://gmail.us12.list-manage.com/subscribe/post?u=1e1f2971d71a0cde63a8b8b51&amp;id=6f6efae571" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
				<div id="mc_embed_signup_scroll">
				<h2>Subscribe</h2>
			<div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
			<div class="mc-field-group">
				<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
			</label>
				<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
			</div>
			
				<div id="mce-responses" class="clear foot">
					<div class="response" id="mce-error-response" style="display:none"></div>
					<div class="response" id="mce-success-response" style="display:none"></div>
				</div>    
				
				<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
				<div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_1e1f2971d71a0cde63a8b8b51_6f6efae571" tabindex="-1" value=""></div>
					<div class="optionalParent">
						<div class="clear foot">
							<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
							<p class="brandingLogo"><a href="http://eepurl.com/h5sK2n" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a></p>
						</div>
					</div>
				</div>
			</form>
			</div>
			<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
			<!--End mc_embed_signup-->
		`
	}


}
