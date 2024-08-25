import React from 'react'
import FooterIcom from '../csv and images/FooterIcom.svg'

const Footer = () => {
  return (
    <>
        <div className='w-full sticky inset-x-0  bottom-0 flex items-center justify-center'>
            <img src={FooterIcom} alt=""  />
        </div>
    </>
  )
}

export default Footer