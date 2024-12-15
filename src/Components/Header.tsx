import React, { useState } from 'react'

const Header: React.FC = () => {

    const [menu, setMenu] = useState<boolean>(true)


    return (
        <div className='w-screen h-16 flex justify-center fixed'>
            <div className="flex items-center justify-between w-[90vw]">
                {/* <p>Surreal</p> */}
                <div className="flex items-center justify-center size-8 bg-white rounded-full"
                    onClick={() => setMenu(!menu)}>
                    <i className={` fa-solid ${menu ? " fa-x" : "fa-bars"} text-black`}></i>
                </div>
                {
                    menu &&
                    <div className="flex w-screen justify-center left-0 top-16 h-[150px] absolute">
                        <div className="flex  justify-center items-center text-black bg-white z-50 rounded-2xl w-[90vw] h-[150px]">
                            <ul className='flex  items-center flex-col  w-[45vw]'>
                                <li>Home</li>
                                <li>Cart</li>
                                <li>Login</li>
                                <li>Signup</li>
                                <li></li>
                            </ul>

                        </div>
                    </div>
                }
                <div className="flex items-center justify-around w-28 h-8 bg-white rounded-full">
                    <p className='text-black text-sm'>Buy Now</p>
                    <div className="flex justify-center items-center size-7 rounded-full bg-black">
                        <i className="fa-solid fa-bag-shopping"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
