import React from "react";

export const ProductItem = ({
  name,
  description,
  price,
  gender,
  state,
  size,
  image,
}) => {
  console.log("🚀 ~ file: ProductItem.jsx:12 ~ size:", size);

  return (
    <div className="mt-20">
      <div>
        <h1 className="text-3xl">{name}</h1>
      </div>
      <div className="text-blue-500">{description}</div>
      <div>$ {price}</div>
      <div>{gender}</div>
      <div>{state}</div>
      <div>
        {image.map((elem) => {
          return <img src={elem} alt="" />;
        })}
      </div>
      <div>
        {size.map((elem) => {
          for (const key in elem) {
            if (Object.hasOwnProperty.call(elem, key)) {
              const element = elem[key];
              return (
                <ul key={crypto.randomUUID()}>
                  <li key={crypto.randomUUID()}>{`${key} ${element}`}</li>
                </ul>
              );
            }
          }
        })}
      </div>
    </div>
  );
};
