import { useFormikContext } from "formik";
import { calculateTotal, displayMoney } from "helpers/utils";
import PropType from "prop-types";
import React from "react";

const ShippingTotal = ({ basket, subtotal }) => {
  const { values } = useFormikContext();

  return (
    <div className="checkout-total d-flex-end padding-right-m">
      <table>
        <tbody>
          <tr></tr>
          <tr>
            <td>
              <span className="d-block margin-0 padding-right-s text-right">
                Total: &nbsp;
              </span>
            </td>
            <td>
              <h2 className="basket-total-amount text-right">
                {displayMoney(
                  calculateTotal(
                    basket.map((product) => parseFloat(product.price))
                  )
                )}
                {/* {displayMoney(Number(subtotal))} */}
              </h2>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

ShippingTotal.propTypes = {
  // subtotal: PropType.number.isRequired,
  basket: PropType.arrayOf(PropType.object).isRequired,
  subtotal: PropType.number.isRequired,
};

export default ShippingTotal;
