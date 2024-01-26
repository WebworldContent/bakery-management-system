import React from "react";
import './MenuContents.css';

const MenuContents = () => {
    return (
        <section class="price_list_area p_100">
        	<div class="container">
        		<div class="price_list_inner">
        			<div class="single_pest_title">
        				<h2>Our Price List</h2>
        				<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        			</div>
       				<div class="row">
       					<div class="col-lg-12">
       						<div class="discover_item_inner">
       							<div class="discover_item">
                                   <img
                                        src="https://via.placeholder.com/120" // Replace with actual image URL
                                        alt="Zabaglione Cake"
                                        className="menu-item-image"
                                    />
									<h4>Double Chocolate Pie</h4>
									<p>Chocolate puding, vanilla, fruite rasberry jam milk</p>
                                    <span>$8.99</span>
									<p><button className="add-cart">Add</button></p>
								</div>
       							<div class="discover_item">
                                   <img
                                        src="https://via.placeholder.com/120" // Replace with actual image URL
                                        alt="Zabaglione Cake"
                                        className="menu-item-image"
                                    />
									<h4>Zabaglione Cake</h4>
									<p>Chocolate puding, vanilla, fruite rasberry jam evporate milk</p>
                                    <span>$12.99</span>
									<p><button className="add-cart">Add</button></p>
								</div>
								<div class="discover_item">
                                   <img
                                        src="https://via.placeholder.com/120" // Replace with actual image URL
                                        alt="Zabaglione Cake"
                                        className="menu-item-image"
                                    />
									<h4>Double Chocolate Pie</h4>
									<p>Chocolate puding, vanilla, fruite rasberry jam milk</p>
                                    <span>$8.99</span>
									<p><button className="add-cart">Add</button></p>
								</div>
								<div class="discover_item">
                                   <img
                                        src="https://via.placeholder.com/120" // Replace with actual image URL
                                        alt="Zabaglione Cake"
                                        className="menu-item-image"
                                    />
									<h4>Double Chocolate Pie</h4>
									<p>Chocolate puding, vanilla, fruite rasberry jam milk</p>
                                    <span>$8.99</span>
									<p><button className="add-cart">Add</button></p>
								</div>
       						</div>
       					</div>
       				</div>
        		</div>
        	</div>
        </section>
    );
};

export default MenuContents;
