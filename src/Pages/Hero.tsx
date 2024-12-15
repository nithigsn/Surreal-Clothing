import React from 'react'


const Hero: React.FC = () => {

  let date: Date = new Date();

  return (

    <div className='flex justify-center w-full h-screen '>
      <div className="flex flex-col w-[90vw] pt-16">
        <p className='text-end pt-5'>{date.toDateString()}</p>
        <div className="flex items-center w-full pt-16 h-[400px]">
          <div
            className="flex justify-center items-center w-[425px]l h-[420px] bg-[#b04141] rounded-2xl "
            style={{ transform: "rotate(3deg)" }}>
          </div>
          <img
            src="https://res.cloudinary.com/dcfwaszea/image/upload/v1734196741/51_1_23bf5d9e-3ef1-4cc2-a197-6beccdd3d6aa_eriyuz.webp"
            alt=""
            className='rounded-2xl h-[350px] w-[325px] absolute object-cover -z-10'
          />
        </div>
        <div className="flex flex-col w-full pt-8">
          <p className='text-center'><span className='text-lg'>Buy the Most comfort</span> <br /> <span className='text-3xl'>HOODIES</span> </p>

          <div className="flex w-full h-[100px] justify-center  items-center">
            <button className='w-36 h-10 rounded-full border '>Explore </button>
          </div>
        </div>
      </div>




    </div>
  )
}

export default Hero
