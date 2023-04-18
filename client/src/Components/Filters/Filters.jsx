import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByGender,
  filterByPrice,
  filterBySeason,
  filterBySize,
  filterByUsed,
  resetFilters,
} from "../../redux/Actions";
import style from "./Filters.module.css";

export default function Filters(props) {
  const { SizeFilter } = props; 
  const { GenderFilter } = props;
  const {WearedFilter } = props;
  const { SeasonFilter } = props;
  const { ResetFilters } = props;

  const dispatch = useDispatch();

  const priceRef = useRef(null);
  const wearedRef = useRef(null);
  const genderRef = useRef(null);
  const seasonRef = useRef(null);
  const sizeRef = useRef(null)

  const selectHandlerPrice = (event) => {
    let value = event.target.value;
    dispatch(filterByPrice(value));
  };

  const selectHandlerWeared = (event) => {
    let value = event.target.value;
    dispatch(filterByUsed(value));
  };

  const selectHandlerGender = (event) => {
    let value = event.target.value;
    dispatch(filterByGender(value));
  };

  const selectHandlerSeason = (event) => {
    let value = event.target.value;
    dispatch(filterBySeason(value));
  };

  const selectHandlerSize = (event) => {
    let value = event.target.value;
    dispatch(filterBySize(value));
  };


  const handleClick = () => {
    dispatch(resetFilters());
    if (priceRef.current) {
      priceRef.current.value = "";
    }
    if (wearedRef.current) {
      wearedRef.current.value = "";
    }
    if (genderRef.current) {
      genderRef.current.value = "";
    }
    if (seasonRef.current) {
      seasonRef.current.value = "";
    }
    if (sizeRef.current) {
      sizeRef.current.value = "";
    }
  }
  

  return (
    <div className={style.filtersContainer}>
      
      <select ref={priceRef} onChange={selectHandlerPrice} className={style.select}>
        <option value="" selected disabled hidden>
          Price Filter
        </option>
        <option value="lowerToHigher">Lower to Higher</option>
        <option value="higherToLower">Higher to Lower</option>
      </select>

      {SizeFilter && (
      <select ref={sizeRef} onChange={selectHandlerSize} className={style.select} >
        <option value="" selected disabled hidden>
          Size Filter
        </option> 
<option value="xSmall">XS</option>

        <option value="small">S</option>
        <option value="medium">M</option>
        <option value="large">L</option>
        <option value="xlarge">XL</option>
        <option value="xxlarge">XXL</option>
      </select>
       )}
       {WearedFilter && (
      <select ref={wearedRef} onChange={selectHandlerWeared} className={style.select}>
        <option value="" selected disabled hidden>
          Weared Filter
        </option>
        <option value="new">New</option>
        <option value="used">Used</option>
      </select>
 )}
      {GenderFilter && (
      <select  ref={genderRef} onChange={selectHandlerGender} className={style.select} >
        <option value="" selected disabled hidden>
          Gender Filter
        </option>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="unisex">Unisex</option>
      </select>
      )}
      {SeasonFilter && (
      <select ref={seasonRef} onChange={selectHandlerSeason} className={style.select}>
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
      )}
      {ResetFilters && (
      <button onClick={handleClick} className={style.resetButton}>
      Reset Filters
    </button>
    )}
    </div>
  );
}
