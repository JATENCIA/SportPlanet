import React, { useState } from 'react';
import style from './Admin.module.css'
import axios from 'axios';
import Swal from 'sweetalert2'

export default function EditModal({ lastName, _id, setEditView, roll, name}) {
  
  const [rollValue, setRollValue] = useState('');

  const selectHandler = (e) => {
    e.preventDefault();
    setRollValue(e.target.value)
  }

  const clickHandler = async (e) => {
    e.preventDefault();
    if(lastName){
      try {
        const changes = {
          roll:rollValue
        }
        
        await axios.put(`/users/${_id}`, changes);

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

    }
  };

    if(roll){
      try {
        return (
          <div className={style.editModal}>
            <h1 className='text-center text-2xl p-3 border-b-2 border-black bg-red-200'>{name} {lastName}</h1>
            
            <div className="flex items-center justify-center space-x-4 pt-10">
              <label className='text-center text-2xl' htmlFor='rolls'>ROLL</label>
              <select id='rolls' name='rolls' className='text-center text-xl' value={rollValue} onChange={selectHandler}>
                <option hidden> Actual Roll: {roll}</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          <div className="flex items-center justify-center space-x-4 pt-12"> 
            <button className={style.btnSync} onClick={clickHandler}>Sync Changes</button>
          </div>
          </div>
        ); 
      } catch (error) {
        alert(error)
      };
    } else {
      alert('aca iria el producto')
    }
  }