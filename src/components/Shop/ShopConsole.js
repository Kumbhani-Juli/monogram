import React from "react";
import "../../assets/styles/shop/shopconsole.css"; // Import the CSS file for styling

const ConsoleSection = () => {
	// Array of content for each grid item
	const consoles = Array.from({ length: 12 }, (_, index) => ({
		id: index + 1,
		title: `Monogram console`,
		description: `This is a description for Console ${index + 1}.`,
	}));

	return (
		<div>
			{/* Full-width image section */}
			<div className="full-width-image-console">
				<div className="image-content-console">
					<h1>Create Your Own Console</h1>
					<p>Add-on to make it perfect.</p>
				</div>
			</div>

			{/* Grid Section */}
			<div className="grid-section-console">
				<div className="grid-container-console">
					{/* Render each grid item with content */}
					{consoles.map((console) => (
						<div
							className="grid-item-console"
							key={console.id}
							id={`image${console.id}`}
						>
							<div className="overlay-console">
								<span className="pre-order-console">Pre-order</span>
								<h1>{console.title}</h1> {/* Display title */}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ConsoleSection;
