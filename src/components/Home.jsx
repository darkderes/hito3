import CardPizza from "./CardPizza";
import Header from "./Header";
import { pizzas } from "../pizzas";

const Home = () => {
  return (
    <>
      <Header />
      <div className=" my-4 container">
        <div className="row">
          <div className="col-md-4">
            {pizzas.map((pizza) => (
              <CardPizza
                key={pizza.id}
                name={pizza.name}
                img={pizza.img}
                price={pizza.price}
                description={pizza.desc}
                ingredients={pizza.ingredients}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
