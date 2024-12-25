import React, { useState } from 'react'

const Header: React.FC = () => {

    const [menu, setMenu] = useState<boolean>(false);
    const [search, setSearch] = useState<boolean>(false)


    return (
        <div className='w-screen h-16 flex justify-center fixed'>
            <div className="flex items-center justify-between w-[90vw]">
                <div className="flex items-center justify-center size-8 bg-white rounded-full"
                    onClick={() => setMenu(!menu)}>
                    <i className={` fa-solid ${menu ? " fa-x" : "fa-bars"} text-black`}></i>
                </div>
                {
                    menu &&
                    <div className="flex w-screen justify-center left-0 top-16 h-[150px] absolute">
                        <div className="flex  justify-center items-center text-black bg-white z-50 rounded-2xl w-[90vw] h-[150px]">
                            <ul className=''>
                                <li>Home</li>
                                <li>Cart</li>
                                <li>Login</li>
                                <li>Signup</li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                }
                <div className="flex items-center justify-around w-36 h-8 bg-white rounded-full cursor-pointer">
                    <div className="flex justify-center items-center size-7 rounded-full bg-black">
                        <i className="fa-solid fa-user"></i>
                    </div>
                    <div className="flex justify-center items-center size-7 rounded-full bg-black"
                        onClick={() => setSearch((prev) => !prev)}>
                        <i className="fa-solid fa-search"></i>
                    </div>
                    {
                        search &&
                        <div className="flex justify-center items-center w-[95vw] ml-4  h-8 bg-white absolute left-0 z-30 rounded-3xl" >
                            <input
                                type="text"
                                name='search'
                                placeholder='Search'
                                className='w-[90vw] rounded-3xl text-black border-none outline-none' />
                            <i className="fa-solid fa-search text-black"
                                onClick={() => setSearch((prev) => !prev)}></i>

                        </div>
                    }
                    <div className="flex justify-center items-center size-7 rounded-full bg-black">
                        <i className="fa-solid fa-bag-shopping"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
