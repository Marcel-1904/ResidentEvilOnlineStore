import React from "react";
import { Figure } from "react-bootstrap";
import "./About.css";

const About = () => {
  // Destructuring totalPrice from the useTotalPrice hook
  return (
    <div>
      <div className="figure-container">
        <Figure>
          {/* Store logo */}
          <Figure.Image
            width={100}
            height={100}
            alt="Store Logo"
            src={process.env.PUBLIC_URL + "./logo.jpg"}
          />
        </Figure>

        {/* Store Name */}
        <h1>Raccoon City Mercantile</h1>
        <Figure>
          <Figure.Image
            width={400}
            height={400}
            className="shop-img-1"
            alt="Store shelves with merchandise"
            src={process.env.PUBLIC_URL + "/store1.png"}
          />
          <Figure.Image
            width={400}
            height={400}
            className="shop-img-2"
            alt="Store checkout isle"
            src={process.env.PUBLIC_URL + "/store2.jfif"}
          />

          {/* Detailed store description */}
          <Figure.Caption className="shop-description">
            Welcome to Raccoon City Mercantile, your ultimate destination for
            all things Resident Evil! Immerse yourself in the spine-chilling
            world of survival horror as you explore our extensive collection of
            officially licensed Resident Evil merchandise. At Raccoon City
            Mercantile, we're passionate about bringing the iconic characters,
            heart-stopping moments, and pulse-pounding action of the Resident
            Evil franchise to life through high-quality products. Whether you're
            a die-hard fan or a newcomer to the series, our store is your
            one-stop shop for all your Resident Evil needs. Discover a diverse
            array of merchandise featuring your favorite characters like Leon S.
            Kennedy, Jill Valentine, Chris Redfield, and the menacing Tyrant.
            From stylish apparel and collectible figurines to posters, mugs, and
            more, we've curated a selection that caters to every fan's taste.
            Our commitment to quality ensures that each item captures the
            essence of the Resident Evil universe, making them perfect for
            display, wear, or as a gift for fellow survival horror enthusiasts.
            Unleash your inner biohazard aficionado with our exclusive and
            officially licensed products that celebrate the rich history and
            legacy of Resident Evil. At Raccoon City Mercantile, we strive to
            provide a seamless and secure shopping experience. Feel free to
            explore our online store, and don't hesitate to reach out to our
            customer service team if you have any questions or need assistance.
            Join us in celebrating the legacy of Resident Evil. Whether you're
            stocking up for your own survival horror journey or looking for the
            perfect gift, Raccoon City Mercantile is your gateway to the
            thrilling world of Resident Evil merchandise. Welcome to the
            nightmare!
          </Figure.Caption>
        </Figure>
        <div className="contact-us">
          {/* Contact Information */}
          <h3>Contact Us</h3>
          <p>
            Phone: +1 (555) 123-4567
            <br></br>
            Email: info@raccooncitymercantile.gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
