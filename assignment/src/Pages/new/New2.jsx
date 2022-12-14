import { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './new.scss'
import {nanoid} from 'nanoid';

const New2 = ({inputs,title}) => {

  

  return (
    <div className='new'>
      <Sidebar>
      </Sidebar>
      <div className='newContainer'>

        
         
        <div className='topseg'>
          <h1>{title}</h1>
        </div>
        <div className='bottomseg'>
          <form>
            {inputs.map((input)=>(
            <div className='formInput' key={input.id}>
              <label>{input.label}</label>
              <input type={input.type} name={input.name} placeholder={input.placeholder}></input>
            </div>
            
            ))
            }
           
            <button type='submit'>Submit</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default New2