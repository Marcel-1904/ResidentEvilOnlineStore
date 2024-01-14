import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import "./Product.css";

// Products component displays a list of products with their details
const Products = () => {
  // Redux dispatcher to dispatch actions
  const dispatch = useDispatch();

  // Sample products data
  const products = [
    {
      id: 1,
      title: "Resident Evil Collection PS4",
      description:
        "Resident Evil Collection containing both Resident Evil 0 and Resident Evil 1",
      price: 50,
      colors: ["Red", "Blue", "Green"],
      image: "REC.jpg",
    },
    {
      id: 2,
      title: "Resident Evil 2 PS4",
      description:
        "Follow the stories of Leon S Kennedy and Claire Redfield in the next installment of the series.",
      price: 60,
      colors: ["Red", "Blue", "Green"],
      image: "RE2.jpg",
    },
    {
      id: 3,
      title: "Resident Evil 3 PS4",
      description:
        "Continue the storie of Jill Valentine from the first Resident Evil in this blockbuster horror experience.",
      price: 60,
      colors: ["Red", "Blue", "Green"],
      image: "RE3.jpg",
    },
    {
      id: 4,
      title: "Resident Evil 4 PS4",
      description:
        "Embark on Leon S. Kennedy's mission to rescue the president's daughter, Ashley Graham.",
      price: 75,
      colors: ["Red", "Blue", "Green"],
      image: "RE4.jpg",
    },
    {
      id: 5,
      title: "Resident Evil 4 Steelbook Edition PS4",
      description:
        "Steelbook edition of Resident Evil 4, for those collectors of the series.",
      price: 100,
      colors: ["Red", "Blue", "Green"],
      image: "RESteelbook.jpg",
    },
    {
      id: 6,
      title: "Resident Evil 5",
      description:
        "Join Chris Redfield and Sheva Alomar as they investigate bioterrorism attacks in west Africa.",
      price: 50,
      colors: ["Red", "Blue", "Green"],
      image: "RE5.jpg",
    },
    {
      id: 7,
      title: "Resident Evil 6",
      description:
        "Join Leon S. Kennedy, Chris Redfield and Ada Wong in their next chapter facing the new highly virulent C-virus.",
      price: 50,
      colors: ["Red", "Blue", "Green"],
      image: "RE6.jpg",
    },
    {
      id: 8,
      title: "Resident Evil 7",
      description:
        "Follow Ethan Winters as he searches for his missing wife in a derelict plantation occupied by an infected family in the backwoods of Dulvey, Louisiana.",
      price: 65,
      colors: ["Red", "Blue", "Green"],
      image: "RE7.jfif",
    },
    {
      id: 9,
      title: "Resident Evil Village (8)",
      description:
        "Continue Ethans story as he searches for his kidnapped wife and daughter in the snowy mountains of Europe. Facing dangers of vampires, wiches and lycans to save his family.",
      price: 90,
      colors: ["Red", "Blue", "Green"],
      image: "RE8.jpg",
    },
    {
      id: 10,
      title: "Resident Evil Revelations 2",
      description:
        "See the return of Claire Redfield, whom along with the daughter of Barry Burton, Moira Burton, must try to escape off a monster-infested island.",
      price: 25,
      colors: ["Red", "Blue", "Green"],
      image: "RER2.jpg",
    },
  ];

  // Handler to add a product to the cart
  const handleAddToCart = (product) => {
    console.log(product);
    dispatch(addToCart(product));
  };

  return (
    <div>
      {/* Container for product cards */}
      <div className="product-container">
        {/* Mapping through products to create product cards */}
        {products.map((product) => (
          <Card key={product.id} className="product-card">
            {/* Product image */}
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "/" + product.image}
              alt={product.title}
              onError={() =>
                console.error(`Error loading image for ${product.title}`)
              }
            />
            <Card.Body>
              {/* Product title */}
              <Card.Title className="product-title">{product.title}</Card.Title>
              {/* Product description */}
              <Card.Text>{product.description}</Card.Text>
              {/* Product price */}
              <Card.Text className="product-price">
                Price: ${product.price}
              </Card.Text>
              {/* Add to Cart button */}
              <Card.Text>
                <button
                  className="buy-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  Add To Cart
                </button>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
