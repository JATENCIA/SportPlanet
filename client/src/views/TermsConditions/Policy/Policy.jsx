import React from "react";
import style from "./Policy.module.css";
import ButtonBack from "../../../Components/ButtonBack/ButtonBack";
import HeartButton from "../../../Components/ProductCard/HeartButton/HeartButton";

export default function Policy() {
  return (
    <div className={style.main}>
      <div className={style.nav}>
        <h1>SPORT PLANET</h1>
      </div>

      <HeartButton />
      <div className={style.bodyText}>
        <h1>Our Policy</h1>
        <h2>Publication Policies</h2>
        <p>
          This document is an integral part of the Sport Planet General Terms
          and Conditions . By accepting the General Terms and Conditions at the
          time of registration, the User accepts the policies contained herein.
          To help Users successfully post articles, we have highlighted some
          posting policies and described how violations of those policies will
          be handled. These rules apply to the different types of publication
          (auction, fixed price, etc.).
        </p>

        <h2>Classified, business or trade ads</h2>
        <p>
          Posts that express a desire or offer to purchase items are not
          allowed. It includes those publications that are of the type of
          classified, advertising or business notices, also those that offer
          some type of specific or indeterminate service or any type of
          association to obtain profits at a symbolic price.
        </p>

        <h2>Comparisons</h2>
        <p>
          Posts that include comparisons with other Users will be terminated.
          Comparisons will be understood as information on prices, nicknames,
          quality and type of items, etc.
        </p>

        <h2>Descriptions</h2>
        <p>
          The descriptions may include graphics, texts, descriptions, videos and
          photos of the goods offered, as long as they do not violate property
          rights or any provision of the General Terms and Conditions or
          applicable law, including the following, but not limited to them.
        </p>
        <div className={style.pageList}>
          <ul>
            <li>
              • The good offered by the Seller User must be exactly described in
              terms of state, condition, size, brand, model, color, material and
              other relevant characteristics.
            </li>
            <li>
              • Any words used in descriptions and titles must be specifically
              related to the item being offered. The use of words that are not
              related to the article to manipulate the Sport Planet search
              engines and/or to generate traffic to said publication is
              prohibited.
            </li>
            <li>
              • In the event that a photograph is included, it must specifically
              correspond to the item being offered.
            </li>
          </ul>
        </div>

        <h2>Tax Evasion</h2>
        <p>
          Sport Planet only makes available to Users a virtual space that allows
          them to communicate via the Internet to find a way to sell or buy
          items, also it does not have any participation in the process of
          negotiating and perfecting the final contract between the parties.
          Therefore, the parties are obliged to comply with the fiscal and tax
          obligations imposed by law.
        </p>
        <p>
          It is established that the prices of the published products must be
          expressed with VAT included when applicable, and in legal tender.
          MercadoLibre may remove any publication whose price is not expressed
          in this way to avoid confusion or misunderstandings regarding the
          final price of the product
        </p>
        <p>
          Posts that demonstrate an intent to evade or avoid taxes in any way
          will be terminated.
        </p>

        <h2>Inclusion of personal data</h2>
        <p>
          It is established that the insertion of personal information or any
          form of information in the description, images, photographs, videos,
          questions and answers about the article, as well as in the nickname is
          prohibited. This type of activity will be investigated by Sport Planet
          and the offender may be penalized with the suspension or cancellation
          of the operation and even their registration as a User of Sport
          Planet.
        </p>
        <p>
          Contact information is considered to include, among others: e-mail
          address, geographical address, postal code, telephone and/or fax
          number(s), bank details, as well as URLs or websites.
        </p>

        <h2>Violations</h2>
        <p>
          Price other than the header : The publication of articles with a price
          other than that expressed in the price section of the header is
          prohibited. If there are minimum sales quantities for the item, the
          headline price must indicate that cost (for example: "$10 ball,
          minimum purchase 6 balls", in this case, the publication must have a
          price of $60).
        </p>
        <p>
          Minimum Price : It is not allowed and the publication where a minimum
          sale price is established in the description will be finalized. Means
          of payment offered: It is forbidden to modify the price of the
          published article based on the means of payment, except for costs
          related to financing systems. Sport Planet may end those
          advertisements where discounts or premiums are offered according to
          the use of different means of payment.
        </p>

        <h2>Vulgar language</h2>
        <p>
          The use of profanity or vulgar language is not allowed. This also
          includes language of a racist, hateful, sexual or obscene nature in a
          public area. The application of this policy extends to posts,
          questions and/or answers.
        </p>

        <h2>Links or links in the publication</h2>
        <p>
          The description of the published article can only be used to explain,
          promote, offer and facilitate the publication of the article. It is
          prohibited to include links to websites intended for the trade,
          publication or acquisition of goods or services, or links whose
          purpose is not one of those described below.
        </p>
        <p>
          Links allowed in the item description include:
          <ul>
            <li>
              • Link to a page that provides additional information or in more
              detail the Sport Planet article , provided that such description
              does not provide any kind of contact information.
            </li>
            <li>
              • Links with additional information on Sport Planet policies and
              delivery of the item offered.
            </li>
            <li>• Links to photographs of the article in Sport Planet .</li>
          </ul>
        </p>
        <p>
          Prohibited links include (but are not limited to) the following.
          <ul>
            <li>
              • Links to web pages intended for trade, or the acquisition of
              goods or services outside of Sport Planet .
            </li>
            <li>
              • Links to virtual communities, such as forums or blogs, that can
              provide ways of contact between users outside of Sport Planet .
            </li>
            <li>
              • Links to Web sites or pages that offer merchandise that is not
              allowed on Sport Planet or by current law.
            </li>
            <li>
              • Links to sites that request the nickname or password of buyers.
            </li>
            <li>• Links that may infringe copyright laws.</li>
            <li>
              • Links to sites that compete in any way with the activity or
              services of Sport Planet .
            </li>
          </ul>
        </p>

        <h2>Offers with selective option</h2>
        <p>
          Selective option offers are those in which the seller lists a series
          of items at different prices (whether they are published or not) so
          that buyers choose from that selection of items. These types of posts
          can be problematic due to their potential for payment circumvention,
          operations outside of Sport Planet , and other issues. In general,
          offers with selective option are not allowed, and will be canceled
          with the exception (at the sole discretion of Sport Planet ) of cases
          where:
          <ul>
            <li>
              • The articles listed are all published in Sport Planet and linked
              to each other.
            </li>
            <li>
              • The items listed are the same price, and the quantity available
              is equal to or greater than the quantity offered in the
              publication.
            </li>
          </ul>
        </p>

        <h2>Post in the appropriate category</h2>
        <p>
          The User must publish only the articles that he wishes to sell in the
          appropriate category and subcategory according to the class and type
          of article.
        </p>

        <h2>Photos on Home Page</h2>
        <p>
          Those publications that contain images (which in Sport Planet 's
          opinion are) provocative or sensual or that may be considered contrary
          to morality or good customs will not be allowed on the Main Page.
        </p>
        <p>
          The photos or images that appear on the main page of Sport Planet
          must:
          <ul>
            <li>
              • Correspond exactly to the item offered in the publication and do
              not place merely referential photographs or that may mislead or
              confuse the recipient of the offer.
            </li>
            <li>• Do not have logos of the seller, text or similar.</li>
            <li>• Show only one item.</li>
            <li>• Be high resolution.</li>
            <li>• Have a white background.</li>
            <li>• Do not have personal or contact information.</li>
            <li>
              • Comply with any other provision provided in the Terms and
              Conditions of the site, as well as any other policy.
            </li>
          </ul>
        </p>

        <p>
          Notwithstanding this, Sport Planet reserves the right to remove any
          publication or image in which it considers that there is an
          infringement of the established rules, the law or that it considers
          inappropriate for any reason at its sole discretion. Violations of
          these rules may result in the suspension or disabling of the user's
          account or in the adoption of any of the measures provided in the
          Terms and Conditions of the site, as well as the other policies.
        </p>

        <h2>Techniques to circumvent the Fee structure</h2>
        <p>
          The use of any mechanism intended to avoid the payment of commissions
          or to reduce their amount, such as, for example, is prohibited. (not
          limited to these cases):
          <ul>
            <li>
              • Offer in the description or Q&A conclude a transaction without
              making the offer through Sport Planet.
            </li>
            <li>
              • Offer a product at a price other than that expressed in the
              description or in questions and answers.
            </li>
            <li>
              • Products published at low prices but with a high shipping cost.
            </li>
            <li>
              • Include personal data in the descriptions, titles or answers,
              except in the exceptions provided.
            </li>
            <li>
              • Sales of catalogues, lists or manuals, through which the seller
              offers the item at a low or free price to obtain the buyer's data,
              except in those cases expressly authorized by Sport Planet.
            </li>
            <li>
              • Offer and/or inform in the same publication, other articles at a
              lower or different price, with the exception of those articles
              that are actually published in Sport Planet and linked to each
              other.
            </li>
            <li>
              • Offering an item for free or at a symbolic value or price
              significantly lower than the market value, when it can be inferred
              that there is an intention to sell another quantity, or at another
              price than the one established, or to avoid paying commissions.
            </li>
            <li>
              • Publish articles that are of the type of classified ads or
              advertisements, or offer any type of specific or indeterminate
              service or any type of association to obtain profit at a symbolic
              price.
            </li>
            <li>
              • Publication of goods or services intended to receive intentional
              offers for another higher-priced item that is also offered by the
              same seller.
            </li>
            <li>
              • Post products for redemption or offer to make redemptions by any
              other method.
            </li>
          </ul>
        </p>
        <p>
          The aforementioned activities will be investigated by Sport Planet and
          the offender may be penalized with the suspension or cancellation of
          the operation and even their registration as a User of Sport Planet .
        </p>
        <p>
          Sport Planet , in the cases that the conduct of the users so requires,
          will adopt the measures or sanctions established in the General Terms
          and Conditions.
        </p>
      </div>

      <div className={style.buttonback}>
        <ButtonBack />
      </div>
    </div>
  );
}
