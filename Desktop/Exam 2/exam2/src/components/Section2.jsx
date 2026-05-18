import React from 'react'
import alco from "../assets/img/Group 4.png"
import narco from "../assets/img/Group 3.png"
import brain from "../assets/img/brain 1.png"



export default function Section2() {
  return (
    <div>
      <div>
        <h1>Основные направления клиники</h1>
      </div>
      <div className='flex items-center'>
      <div>
        <img src={alco} alt="" />
        <h4>Алкоголизм</h4>
        <p>методы, направленные на <br /> избавление наркозависимого <br /> от физической и <br /> психологической тяги <br /> к наркотикам,<br /> а также на уменьшение </p>
      </div>
      <div>
        <img src={narco} alt="" />
        <h4>Наркотическая зависимость</h4>
        <p>методы, направленные на <br /> избавление наркозависимого <br /> от физической и <br /> психологической тяги <br /> к наркотикам,<br /> а также на уменьшение </p>
      </div>
      <div>
        <img className='border p-4 ' src={brain} alt="" />
        <h4 className='text-xl'>Созависимость</h4>
        <p>методы, направленные на <br /> избавление наркозависимого <br /> от физической и <br /> психологической тяги <br /> к наркотикам,<br /> а также на уменьшение </p>
      </div>
      </div>
    </div>
  )
}
