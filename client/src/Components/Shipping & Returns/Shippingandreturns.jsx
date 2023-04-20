import React from "react";
import style from "./Shippingandreturns.module.css";
import ButtonBack from "../ButtonBack/ButtonBack";

function Shippingandreturns() {
  return (
    <div className={style.main}>
      <div className={style.nav}>
        <h1>SPORT PLANET</h1>
      </div>
      <div className={style.bodyText}>
        <h1>Shipping and Returns</h1>
        <br />

        <p>
          Our website iroparis.com offers worldwide shipping by partnering with
          UPS. During Promotions (Private Sale, Sale ...), processing periods
          may take up to 72 hours or more. An e-mail notification with UPS
          tracking details will be sent once your order has shipped
          successfully. Signature is required for all orders. After 3
          unsuccessful delivery attempts the package will be returned to us. Our
          website iroparis.com offers worldwide shipping by partnering with UPS.
          During Promotions (Private Sale, Sale ...), processing periods may
          take up to 72 hours or more. An e-mail notification with UPS tracking
          details will be sent once your order has shipped successfully.
          Signature is required for all orders. After 3 unsuccessful delivery
          attempts the package will be returned to us. Our website iroparis.com
          offers worldwide shipping by partnering with UPS. During Promotions
          (Private Sale, Sale ...), processing periods may take up to 72 hours
          or more. An e-mail notification with UPS tracking details will be sent
          once your order has shipped successfully. Signature is required for
          all orders. After 3 unsuccessful delivery attempts the package will be
          returned to us.
        </p>
        <h2>Shipping</h2>
        <p>
          UPS Standard - Home Delivery - 2 to 3 working days - $4,95 UPS
          Standard - Pickup Delivery - 2 to 3 working - $3,95 UPS Express* -
          Home Delivery - 1 working day - $20
        </p>
        <h2>UPS Express Delivery</h2>
        <p>
          * For the UPS Express Delivery, place your order before 11AM (UTC
          Time) to get your order the day after. Please note that our carrier
          does not deliver at week-ends.
        </p>

        <h2>Duties</h2>
        <p>
          We include duties and taxes in the product price. No additional fees
          will be incurred upon delivery for the following countries only:
          Andorra, Austria, Belgium, Cyprus, Denmark, Estonia, France, Finland,
          Spain, Germany, Greece, Italy, Ireland (Republic of), Lithuania,
          Luxembourg, Latvia, Malta, Netherlands, Portugal, Sweden, Slovenia,
          Slovak Republic. For all other countries, UPS will invoice you upon
          delivery.
        </p>
        <h2>Returns</h2>
        <p>
          We offer free returns. You have 14 days from the date of receipt to
          request a refund and return your items to us. We do not offer
          exchanges for online purchases. We ask that items are returned clean,
          unworn and with all original tags attached. If you don't respect our
          return policy, we will ship your garment(s) back to you. Please note
          that for any ARCHIVES order, return costs are your responsibility. We
          offer free returns. You have 14 days from the date of receipt to
          request a refund and return your items to us. We do not offer
          exchanges for online purchases. We ask that items are returned clean,
          unworn and with all original tags attached. If you don't respect our
          return policy, we will ship your garment(s) back to you. Please note
          that for any ARCHIVES order, return costs are your responsibility.
        </p>
        <h2>Return process</h2>
        <p>
          1. Complete the return form enclosed in your package and specify the
          items to be returned and the reason for the return.
          <br />
          2. Prepare your package by inserting the return form and affixing the
          UPS prepaid label.
          <br />
          3. Drop off your package at a UPS access point or schedule a parcel
          collection from your home.
          <br />
          Find this option as well as the list of UPS access points at
          www.ups.com
        </p>

        <h2>Return process</h2>
        <p>
          1. Complete the return form enclosed in your package. Specify the
          items to be returned and the reason for the return.
          <br />
          2. Prepare your package by inserting the return form and the items you
          have selected to return.
          <br />
          3. Your return must be sent to the address below via the carrier of
          your choice. Remember to keep proof of drop off along with your return
          tracking number. Please note that all return shipping fees are your
          responsibility.
        </p>

        <h2>Return policy</h2>
        <p>
          - We offer one return per order, excluding ARCHIVES. Please note that
          for any ARCHIVES order, return costs are your responsibility. - Please
          ensure that all items are exactly as you received them, with their
          tags still attached. - Shoes must be returned in their original box in
          perfect condition, as we consider this to be an integral part of the
          product - We prefer items to be returned via the IRO returns service
          to ensure they are protected and insured in transit. However, you may
          return items via the carrier of your choice. Please ensure that you
          retain a proof of posting and a shipping number to provide you with
          the necessary evidence of the shipment of your package. - If your
          return package is lost, our customer service reserves the right to
          open an investigation with the carrier concerned. For this, a proof of
          deposit and a tracking number will be requested and will be essential
          for the opening of this investigation.
        </p>
      </div>
      <div className={style.buttonback}>
        <ButtonBack />
      </div>
    </div>
  );
}

export default Shippingandreturns;
