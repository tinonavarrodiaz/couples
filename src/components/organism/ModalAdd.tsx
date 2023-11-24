import { Icon } from '@iconify/react';

import 'react-spinner-animated/dist/index.css'
import LoadingCircle from '../icons/LoadingCircle';
import { useRef } from 'react';
import axios from 'axios';
import { getCouples, uri } from '../../api/api';

const ModalAdd = ({fun}:any) => {

  const spanBtn = useRef() as React.MutableRefObject<HTMLSpanElement>;
  const loading = useRef() as React.MutableRefObject<HTMLSpanElement>;
  const closeModal = () => {
    const dialog = document.querySelector('#favDialog') as HTMLDialogElement
    dialog.close()
  }

  const hendleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    spanBtn.current.classList.add('hidden')
    loading.current.classList.remove('hidden')
    const data = new FormData(e.currentTarget)
    axios.post(`${uri}/parejas`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(async ()=>{
      const response = await getCouples()
      fun(response)
      document.querySelector('form')?.reset()
      const dialog = document.querySelector('#favDialog') as HTMLDialogElement
      dialog.close()
    }).catch(err=>{
      console.log(err)
    }).finally(()=>{
      loading.current.classList.add('hidden')
      spanBtn.current.classList.remove('hidden')
    })
  }

  return (
    <dialog id="favDialog">
      <form className='addCouple' onSubmit={hendleSubmit}>
      <button type="reset" className='close-modal' onClick={closeModal}><Icon icon="humbleicons:times" /></button>
        <div className="input-group">
          <label htmlFor="name">Nombre:</label>
          <input type="text" name="name" placeholder=' ' id="name" />
        </div>
        <div className="input-group">
          <label htmlFor="category">Categoría:</label>
          <input type="text" name="category" placeholder=' ' id="category" list="categoryList"/>
          <datalist id="categoryList">
            <option value="Novia"></option>
            <option value="Esposa"></option>
            <option value="Amiga"></option>
            <option value="Amante"></option>
          </datalist>
        </div>
        <div className="input-group">
        <div className="input-group">
          <label htmlFor="description">Descripción:</label>
          <textarea name="description" id="description"></textarea>
        </div>
          <label htmlFor="photo">Foto:</label>
          <input type="file" name="photo" placeholder=' ' id="photo" />
        </div>
        <footer className='form_footer flex justify-end'>

          <button className='bg-slate-600 text-slate-200 rounded-md leading-8 px-4' type="submit">
            <span ref={spanBtn}>Guardar</span>
            <span ref={loading} className='hidden'><LoadingCircle nameClass={null}/></span>
          </button>
        </footer>
      </form>
    </dialog>
  )
}

export default ModalAdd
 {/* <select id="favAnimal">
              <option></option>
              <option>Brine shrimp</option>
              <option>Red panda</option>
              <option>Spider monkey</option>
            </select> */}
          {/* </p> */}
