import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty)
    return (
      <h1 className="cart-empty-text">
        Your cart is empty. Click 'Add To Cart' button.{" "}
      </h1>
    );
  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>
            Cart({totalUniqueItems}) totalItems ({totalItems})
          </h5>
          <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={item.img} style={{ height: "6rem" }} />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td> Quantity ({item.quantity})</td>
                    <td>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="btn btn-danger ms-2"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove Item
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-auto ms-auto">
          <h2>Total Price: #{cartTotal}</h2>
        </div>
        <div className="col-auto">
          <button className="btn btn-danger" onClick={() => emptyCart()}>
            Clear Cart
          </button>
          <button className="btn btn-primary m-2">Buy Now</button>
        </div>
      </div>

      {/* {console.log(items)} */}
    </div>
  );
};

export default Cart;
