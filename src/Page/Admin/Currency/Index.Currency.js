import React from 'react'
import { Modal, Typography, Button, Box } from '@mui/material';
import { useState } from 'react';
import { NumberFormatBase } from 'react-number-format';
import axios from 'axios';
import data from './data';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useReducer } from 'react';

export default function Index_Currency() {

  const [API, setAPI] = useState([])
  const [Reducer, setReducer] = useReducer(x => x + 1, 0)
  useEffect(() => {
    axios.get(data.Mainurl + data.GET).then((res) => {
      setAPI(res.data)
    })
  }, [Reducer])

  const [OpenS, setOpenS] = useState(false);
  const show = () => setOpenS(true);
  const Close = () => setOpenS(false);

  const [currency, setCurrency] = useState(0)
  const format = (numStr) => {
    if (numStr === '') return '';
    setCurrency(numStr)
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(numStr);
  };

  function Submit(e) {

    if (API.length > 0) {
      axios.patch(data.Mainurl + data.PATCH + API[0]?._id, {
        "Currency": currency
      }).then((res) => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'success',
          title: 'ບັນທືກຂໍ້ມູນສຳເລັດ!'
        })
        setReducer()
      })
    } else {
      axios.post(data.Mainurl + data.POST, {
        "Currency": currency
      }).then((res) => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'success',
          title: 'ບັນທືກຂໍ້ມູນສຳເລັດ!'
        })
        setReducer()
      })
    }

  }

  return (
    <>
      <span onClick={show} class="ml-3">ຈັດການເລດເງີນ</span>
      <Modal
        open={OpenS}
        onClose={Close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box id='StyleModal'>
          <div className='py-2 text-[22px]'>ຈັດການເລດເງີນ $</div><hr />
          <div className='pt-5'>
            <div>
              <label>ເລດເງີນ $ ປະຈູບັນ</label>
              <NumberFormatBase format={format} defaultValue={API[0]?.Currency} className='w-full py-1 px-2 border rounded' placeholder='0' />
            </div>
            <div className='mt-2'>
              <button type='button' onClick={Submit} className='py-2 px-3 border rounded bg-blue-400 text-white'>Submit</button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  )
}
