import React from "react";
import Itemcard from "./Itemcard";
import data from "./database";

const Home = () => {
  // console.log(data.productsdata);
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="header mt-3 shadow-lg">Shopping Cart</div>
          <div className="card mt-3 product-card">
            <div
              className="card-header mt-3"
              style={{
                background: "#C3DEF0",
                height: "3rem",
                fontSize: "1.25rem",
                fontWeight: "600",
                width: "100%",
              }}
            >
              Phones Category
            </div>
            <div className="card-body">
              <div className="container-fluid py-4">
                <div className="row">
                  {data.productsdata.map((product, index) => {
                    return (
                      <Itemcard
                        img={product.img}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                        item={product}
                        key={index}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className="mt-3"
        style={{
          background: "#C3DEF0",
          height: "3rem",
          fontSize: "1.25rem",
          fontWeight: "600",
        }}
      >
        Phones Categories
      </div>
      <div className="container py-4">
        <div className="row">
          {data.productsdata.map((product, index) => {
            return (
              <Itemcard
                img={product.img}
                title={product.title}
                price={product.price}
                description={product.description}
                item={product}
                key={index}
              />
            );
          })}
        </div>
      </div> */}
    </div>
  );
};

export default Home;
