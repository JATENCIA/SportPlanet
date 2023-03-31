import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByPrice } from "../../redux/Actions";
import style from "./Filters.module.css";

export default function Filters() {
  const dispatch = useDispatch();

  const selectHandler = (event) => {
    let value = event.target.value;
    dispatch(filterByPrice(value))
  };

  return (
    <div className={style.filtersContainer}>
      <select onChange={selectHandler} className={style.select}>
      <option value="" selected disabled hidden>
            Price Filter
      </option>
        <option value="lowerToHigher">Lower to Higher</option>
        <option value="higherToLower">Higher to Lower</option>
      </select>
      <select onChange={selectHandler} className={style.select}>
      <option value="" selected disabled hidden>
            Size Filter
      </option>
        <option value="small">S</option>
        <option value="medium">M</option>
        <option value="large">L</option>
        <option value="xlarge">XL</option>
      </select>
      <select onChange={selectHandler} className={style.select}>
      <option value="" selected disabled hidden>
            Weared Filter
      </option>
        <option value="new">New</option>
        <option value="used">Used</option>
      </select>
      <select onChange={selectHandler} className={style.select}>
      <option value="" selected disabled hidden>
            Gender Filter
      </option>
        <option value="men">Men</option>
        <option value="women">Women</option>
      </select>
      <select onChange={selectHandler} className={style.select}>
      <option value="" selected disabled hidden>
            Season Filter
      </option>
      <option value="70s">1979-1970</option>
      <option value="80s">1989-1980</option>
      <option value="90s">1999-1990</option>
        <option value="00s ">2009-2000</option>
        <option value="10s">2019-2010</option>
        <option value="20s">2023-2020</option>
      </select>
    </div>
  );
}
