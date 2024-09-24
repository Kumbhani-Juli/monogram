import React, { useState } from "react";
import "../../assets/styles/shop/Shopworkflow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const App = () => {
	const [showSection, setShowSection] = useState(false);

	const handleArrowClick = () => {
		setShowSection(true);
	};

	return (
		<div className="app">
			{/* Background Image Section */}
			<div className="background-image">
				<div className="shop_content">
					<h1>A Console for Every Workflow</h1>
					<p>Discover the perfect console for yours.</p>
				</div>
				<div className="down-arrow" onClick={handleArrowClick}>
					<FontAwesomeIcon icon={faAngleDown} />
				</div>
			</div>

			{/* Hidden Section */}
			{showSection && (
				<div className="image-section">
					<div className="image-grid">
						{/* First Image */}
						<div className="image-container" id="image1">
							<div className="image-overlay">
								<div className="top-right">Pre-Order</div>
								<div className="image-text">
									<h3>Mini Console</h3>
									<p>Sold Out</p>
									<p>
										Ideal for everyday shortcuts. Adaptable to any workflow.
									</p>
								</div>
							</div>
						</div>
						{/* Second Image */}
						<div className="image-container" id="image2">
							<div className="image-overlay">
								<div className="top-right">Pre-Order</div>
								<div className="image-text">
									<h3>Audio Console</h3>
									<p>Sold Out</p>
									<p>Ideal for music & audio. Adaptable to any workflow.</p>
								</div>
							</div>
						</div>
						{/* Third Image */}
						<div className="image-container" id="image3">
							<div className="image-overlay">
								<div className="top-right">Pre-Order</div>
								<div className="image-text">
									<h3>Photo Console</h3>
									<p>Sold Out</p>
									<p>Ideal for photo & video. Adaptable to any workflow.</p>
								</div>
							</div>
						</div>
						{/* Fourth Image */}
						<div className="image-container" id="image4">
							<div className="image-overlay">
								<div className="top-right">Pre-Order</div>
								<div className="image-text">
									<h3>Video Console</h3>
									<p>Sold Out</p>
									<p>Ideal for Video & Film. Adaptable to any workflow.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="grid_mix">
						<div className="image-container" id="image5">
							<div className="image-overlay">
								<div className="top-right">Pre-Order</div>
								<div className="image-text">
									<h3>Monogram Keyboard + Multipad</h3>
									<p>Sold Out</p>
									<p>Adaptable to any workflow.</p>
								</div>
							</div>
						</div>{" "}
					</div>{" "}
				</div>
			)}
		</div>
	);
};

export default App;
