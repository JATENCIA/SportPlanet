import React, { useState } from 'react';
import style from './Admin.module.css'
import axios from 'axios';
import Swal from 'sweetalert2'

export default function EditModal({ lastName, _id, setEditView, roll, name, price, discount, description, season, gender, state, brands}) {
  
  const [rollValue, setRollValue] = useState('');

  const [changeName, setChangeName] = useState(false)
  const [changePrice, setChangePrice] = useState(false)
  const [changeDiscount, setChangeDiscount] = useState(false)
  const [changeDescription, setChangeDescription] = useState(false)
  const [changeSeason, setChangeSeason] = useState(false)
  const [changeGender, setChangeGender] = useState(false)
  const [changeState, setChangeState] = useState(false)
  const [changeBrand, setChangeBrand] = useState(false)
  
  const [update, setUpdate] = useState({
    name: name,
    price: price,
    discount: discount,
    description: description,
    season: season,
    gender: gender,
    state: state,
    brands: brands
  })

const editHandler = (e) => {
  setUpdate({
    ...update,
    [e.target.name]: e.target.value,
  })
};

  const selectHandler = (e) => {
    e.preventDefault();
    setRollValue(e.target.value)
  }

  const cancelClickHandler = (e) => {
    e.preventDefault();
    setEditView(false)
  }

  const clickHandler = async (e) => {
    e.preventDefault();
    if(lastName){
      try {
        const changes = {
          roll:rollValue
        }
        
        await axios.put(`/users/isadmin/${_id}`, changes);

        await Swal.fire({
          icon: "success",
          timer: 1000,
          showConfirmButton: false,
        });

        setEditView(false)

      } catch (error) {
        alert(error)
      }
    }else{
      try {
        await axios.put(`/products/${_id}`, update);

        await Swal.fire({
          icon: "success",
          timer: 1000,
          showConfirmButton: false,
        });

        setEditView(false)

      } catch (error) {
        alert(error)
      }
    }
  };

  const actualYear = new Date().getFullYear();
  const yearOptions = [];
  for (let i = actualYear; i >= 1900; i--) {
    yearOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }


  // ESTO SE RENDERIZA
  if(roll){
      try {
        return (
          <div className={style.editModal}>
            <h1 className='text-center text-3xl text-white p-3 border-b-2 border-black bg-black'>{name} {lastName}</h1>
            
            <div className="flex items-center justify-center space-x-4 pt-10">
              <label className='text-center text-2xl' htmlFor='rolls'>ROLL</label>
              <select id='rolls' name='rolls' className='text-center text-xl' value={rollValue} onChange={selectHandler}>
                <option hidden> Actual Roll: {roll}</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          <div className="flex items-center justify-center space-x-4 pt-12">
            <button className={style.btnCancel} onClick={cancelClickHandler}>Cancel</button>
            <button className={style.btnSync} onClick={clickHandler}>Sync Changes</button>
          </div>
          </div>
        ); 
      } catch (error) {
        alert(error)
      };
    }else {
      return (
        <div className={style.editModal}>
          {console.log(update)}
          <h1 className='text-center text-3xl text-white p-3 border-b-2 border-black bg-black'>Select the item you want to change</h1>
          
          <div className='flex flex-wrap justify-center'>

          <div className={style.divsEditProductsDesc}>
            {changeName ? (
              <>
              <label>Name</label>
              <input type='text' name="name" value={update.name} onChange={editHandler}/>
              </>
            ) : (
            <button onClick={e=>{e.preventDefault();setChangeName(true)}} className={style.botonEditProducts}>Name</button>
            )
          }
          </div>

          <div className={style.divsEditProducts}>
          {changePrice ? (
              <>
              <label>Price</label>
              <input type='number' name="price" value={update.price} min='0' onChange={editHandler}/>
              </>
            ) : (
            <button onClick={e=>{e.preventDefault();setChangePrice(true)}} className={style.botonEditProducts}>Price</button>
            )
          }
          </div>

          <div className={style.divsEditProducts}>
          {changeDiscount ? (
              <>
              <label>Discount</label>
              <input type='number' name="discount" value={update.discount} min='0' max='99' onChange={editHandler}/>
              </>
            ) : (
            <button onClick={e=>{e.preventDefault();setChangeDiscount(true)}} className={style.botonEditProducts}>Discount</button>
            )
          }
          </div>

          <div className={style.divsEditProducts}>
          {changeSeason ? (
              <>
              <label>Season</label>
              <select name='season' onChange={editHandler}>
                <option value={update.season}>{update.season}</option>
                {yearOptions}
              </select>
              </>
            ) : (
            <button onClick={e=>{e.preventDefault();setChangeSeason(true)}} className={style.botonEditProducts}>Season</button>
            )
          }
          </div>

          <div className={style.divsEditProducts}>
          {changeGender ? (
              <>
              <label>Gender</label>
              <select onChange={editHandler} name='gender'>
                <option value={update.gender}>{update.gender}</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="unisex">Unisex</option>
              </select>
              </>
            ) : (
            <button onClick={e=>{e.preventDefault();setChangeGender(true)}} className={style.botonEditProducts}>Gender</button>
            )
          }
          </div>

          <div className={style.divsEditProducts}>
          {changeState ? (
              <>
              <label>Condition</label>
              <select name='state' onChange={editHandler}>
                <option value={update.state}>{update.state}</option>
                <option value="new">New</option>
                <option value="used">Used</option>
              </select>
              </>
            ) : (
            <button onClick={e=>{e.preventDefault();setChangeState(true)}} className={style.botonEditProducts}>Condition</button>
            )
          }
          </div>

          <div className={style.divsEditProducts}>
          {changeBrand ? (
              <>
              <label>Brand</label>
              <select name='brand' onChange={editHandler}>
                <option value={update.brands}>{update.brands}</option>
                <option value="PUMA">PUMA</option>
                <option value="ADIDAS">ADIDAS</option>
                <option value="REEBOK">REEBOK</option>
                <option value="FILA">FILA</option>
                <option value="NIKE">NIKE</option>
                <option value="UNDER ARMOUR">UNDER ARMOUR</option>
                <option value="OTHER">OTHER</option>
              </select>
              </>
            ) : (
            <button onClick={e=>{e.preventDefault();setChangeBrand(true)}} className={style.botonEditProducts}>Brand</button>
            )
          }
          </div>

          <div className={style.divsEditProductsDesc}>
          {changeDescription ? (
              <>
              <label>Description</label>
              <textarea type='text' value={update.description} name='description' onChange={editHandler}/>
              </>
            ) : (
            <button onClick={e=>{e.preventDefault();setChangeDescription(true)}} className={style.botonEditProducts}>Description</button>
            )
          }
          </div>

          </div>


          <div className="flex items-center justify-center space-x-4 pt-12 pb-10">
            <button className={style.btnCancel} onClick={cancelClickHandler}>Cancel</button>
            <button className={style.btnSync} onClick={clickHandler}>Sync Changes</button>
          </div>
        </div>
      )
    }
  }