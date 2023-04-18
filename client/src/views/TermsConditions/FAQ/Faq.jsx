import React from "react";
import style from "./Faq.module.css";
import ButtonBack from "../../../Components/ButtonBack/ButtonBack";

export default function Faq() {
  return (
    <div className={style.main}>
      <div className={style.nav}>
        <h1>SPORT PLANET</h1>
      </div>

      <div className={style.bodyText}>
        <h1>Frequently Asked Questions</h1>
        <p>
          <h2>What is Sport Planet?</h2> Sport Planet is an online marketplace
          that brings together buyers and sellers of sports-related items. We
          offer a wide range of sports products, including sports apparel,
          equipment, accessories, and more, from various sports categories such
          as basketball, soccer, tennis, golf, and more. Our platform provides a
          convenient and secure way for sports enthusiasts to buy and sell their
          favorite sports items.
        </p>
        <p>
          <h2>How can I buy on Sport Planet? </h2> To make a purchase on Sport
          Planet, you can start by using our search tools or browsing through
          the available categories to find the products you're interested in.
          Once you find an item you like, click on it to view detailed
          information about the product, including price, condition, and
          shipping options. If you decide to proceed with the purchase, simply
          follow the on-screen instructions to complete the transaction,
          including providing your payment information and shipping address.
        </p>
        <p>
          <h2>How can I sell on Sport Planet?</h2> If you're interested in
          selling on Sport Planet, you'll need to register as a seller on our
          platform. Once registered, you can create listings for your sports
          items, including uploading photos, providing detailed descriptions,
          and setting the price. Interested buyers can contact you through our
          platform to ask questions or make offers. Once you reach an agreement
          with a buyer, you can complete the transaction and ship the product to
          the buyer.
        </p>

        <p>
          <h2>Is it safe to buy and sell on Sport Planet? </h2>Yes, we
          prioritize safety and security on Sport Planet. We use encryption and
          other security measures to protect user information and online
          transactions. However, it's important to exercise caution when buying
          and selling online. We recommend reading product descriptions
          carefully, communicating securely through our platform, and verifying
          the reputation of sellers before making a purchase. If you encounter
          any issues, our customer service is available to assist you.
        </p>

        <p>
          <h2>How are payments handled on Sport Planet?</h2>
          Payments on Sport Planet are processed securely through our online
          payment system. Buyers can make payments using popular payment methods
          such as credit cards, debit cards, and other online payment options.
          Sellers receive payment for their sold items in their Sport Planet
          account, which can be withdrawn to their designated bank account or
          used for future purchases on the platform.
        </p>

        <p>
          <h2> How are shipments handled on Sport Planet?</h2>
          Sellers are responsible for managing shipments of products sold on
          Sport Planet. They can choose from different shipping options and
          provide tracking information to the buyer through our platform. Buyers
          are responsible for providing a valid and complete shipping address to
          ensure smooth delivery of the purchased item.
        </p>

        <p>
          <h2>
            What should I do if I have an issue with a purchase or sale on Sport
            Planet?
          </h2>
          If you encounter any issues with a purchase or sale on Sport Planet,
          we recommend first contacting the seller or buyer through our platform
          to try to resolve the issue amicably. If you're unable to reach an
          agreement, you can contact our customer service for further
          assistance. We strive to provide prompt and helpful support to resolve
          any issues that may arise.
        </p>

        <p>
          <h2>How can I contact Sport Planet?</h2>
          You can contact Sport Planet through our website's contact page or
          through our customer service email or phone number, which can be found
          on our website. We are available to assist with any questions,
          concerns, or feedback you may have.
        </p>

        <p>
          We hope this FAQ provides you with the information you need to
          navigate Sport Planet and have a positive experience buying or selling
          sports items on our platform. If you have any further questions, feel
          free to reach out to us for assistance!
        </p>
      </div>
      <ButtonBack />
    </div>
  );
}
