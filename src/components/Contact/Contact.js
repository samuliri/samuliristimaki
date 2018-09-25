import React from 'react';

export function Contact() {
	return (
		<div>
			<div className="grid">
				<h3 className="col md-push-1 lg-push-2 h1">Contact</h3>
			</div>

			<div className="grid">
				<p className="col sm-12 md-5 lg-3 md-push-1 lg-push-3 contact">
					call me at
					<span className="contact-phone">+358 .40 7781 972</span>
					<span className="contact-or">
						<span>or</span>
					</span>
					drop a mail at
					<a href="mailto:samuli.ristimaki@gmail.com" className="contact-link">
						samuli.ristimaki(ät)gmail.com
					</a>
				</p>

				<div className="col fluid md-3 lg-2 md-push-1 lg-push-2 button-group">
					{/* <a href="https://github.com/samuliri" className="button -block">
						Github
					</a> */}
					<a
						href="https://www.linkedin.com/in/samuli-ristimäki"
						className="button -block">
						linkedin
					</a>
					<a
						href="https://www.facebook.com/samuli.ristimaki"
						className="button -block">
						facebook
					</a>
					<a
						href="https://www.instagram.com/sampo69/"
						className="button -block">
						instagram
					</a>
				</div>
			</div>
		</div>
	);
}
