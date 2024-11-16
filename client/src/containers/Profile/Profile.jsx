import React from "react";
import Images from "./Images.jsx"; // Assuming Images component showcases images of services
import "./Profile.css"; // Create a CSS file for styles

const services = [
  { name: "Appliances", description: "We handle all types of appliance removal, including refrigerators, ovens, washers, and more." },
  { name: "BBQ & Grills", description: "Get rid of old BBQ grills and other outdoor cooking appliances in a fast and efficient way." },
  { name: "Bicycles", description: "We’ll pick up your old bicycles, whether they are broken or simply no longer needed." },
  { name: "Carpeting & Rugs", description: "Our team can help you dispose of old carpets and rugs from your home or office." },
  { name: "Construction Waste", description: "We remove all kinds of construction debris, from wood to drywall and more." },
  { name: "Dumpster Alternative", description: "We provide an alternative to traditional dumpsters with efficient junk removal." },
  { name: "Electronics (E-waste)", description: "We offer eco-friendly removal of your old electronic devices, including computers, phones, and TVs." },
  { name: "Yard Waste", description: "We’ll help clear out your yard, from tree branches to leaves and grass clippings." },
  { name: "Exercise Equipment", description: "Old treadmills, weight machines, and other exercise equipment can be removed quickly and safely." },
  { name: "Furniture", description: "From old couches to dining sets, we handle furniture removal of all kinds." },
  { name: "General Rubbish", description: "Whether it's trash, debris, or anything else, we remove it quickly and efficiently." },
  { name: "Glass", description: "We safely handle glass removal, from broken windows to large glass tables." },
  { name: "Hot Tubs", description: "We can take care of your old hot tub removal and disposal." },
  { name: "Household Trash", description: "Fast removal of household waste and trash, no matter the size." },
  { name: "Junk", description: "General junk removal services for homes, offices, and more." },
  { name: "Tires & Rubber", description: "We dispose of old tires and rubber materials safely and responsibly." },
  { name: "Mattresses & Box Springs", description: "Need to get rid of an old mattress or box spring? We’ll take care of it." },
  { name: "Pianos", description: "We’ll remove your old pianos without any hassle." },
  { name: "Playsets & Trampolines", description: "We’ll help you clear out old playsets and trampolines safely and efficiently." },
  { name: "Pool Tables", description: "Our team will remove your old pool table and make sure it’s properly disposed of." },
  { name: "Refrigerators & Freezers", description: "We safely remove old refrigerators and freezers, including large, bulky units." },
  { name: "Scrap Metals", description: "We accept all kinds of scrap metal and will dispose of it responsibly." },
  { name: "Televisions", description: "Old TVs? We’ll take them off your hands and dispose of them safely." },
];

const Profile = () => {
  return (
    <>
      <div className="container my-5">
        {/* Page Title */}
        <h1 className="display-4 text-center mb-4 section-title">Our Services</h1>

        {/* Introductory Paragraph */}
        <div className="text-center mb-4">
          <p className="lead">
            We provide a range of junk removal services tailored to your needs. From residential decluttering to eco-friendly commercial solutions, we've got you covered!
          </p>
        </div>

        {/* Images Section */}
        <Images className="service-images mb-5" />

        {/* Service List */}
        <h2 className="section-subtitle my-4">Our Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="service-card">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center my-5">
          <p className="lead">Ready to get started? Contact us today for a free estimate!</p>
          <button className="btn btn-primary">Get a Quote</button>
        </div>
      </div>
    </>
  );
};

export default Profile;
