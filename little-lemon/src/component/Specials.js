import React from "react";
import './Specials.css';

const specials = [
  {
    name: "Greek salad",
    price: "$12.99",
    description: "Crispy lettuce, peppers, olives, feta cheese and garlic croutons.",
    image: "/images/9beeddcd9d22dc711cd9fddc4a3393a7278299c7.jpg"
  },
  {
    name: "Bruschetta",
    price: "$5.89",
    description: "Grilled bread with garlic, salt and olive oil.",
    image: "/images/957db75e6b654e07f65da12b96dc858c5995ed28.jpg"
  },
  {
    name: "Lemon Dessert",
    price: "$5.00",
    description: "Straight from grandma’s recipe book, every ingredient is authentic.",
    image: "/images/871655af5e4849aa43a6d293284825002e7aeb50.jpg"
  }
];

const Specials = () => {
  return (
    <section className="specials" aria-labelledby="specials-heading">
      <div className="specials-header">
        <h2 id="specials-heading">This week's specials!</h2>
        <button aria-label="View Online Menu">Online Menu</button>
      </div>
      <div className="specials-grid">
        {specials.map((item) => (
          <article key={item.name} className="special-card">
            <img src={item.image} alt={item.name} />
            <div className="card-header">
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
            </div>
            <p>{item.description}</p>
            <a href="/order" aria-label={`Order ${item.name}`}>Order a delivery</a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Specials;
