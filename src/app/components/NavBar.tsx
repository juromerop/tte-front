import React from 'react';

const NavBar: React.FC = () => {
    return (
        <div className="shadow-md">
            <nav className="bg-black text-white p-2 grid grid-cols-3 items-center">
                <div className="text-left pl-10">USD</div>
                <div className="text-center">FREE SHIPING ON ALL HERMAN MILLER! FEB. 25-28.</div>
                <div className="text-right pr-10">Support</div>
            </nav>
            <nav className="bg-white text-black p-4 grid grid-cols-5 items-center">
                <div className='font-bold ml-6'>Tech Trend Emporium</div>
                <div className='font-light'>Shop List</div>
                <div className='font-light'>Wishlist</div>
                <div className='font-light'><input type="text" className="bg-gray-200" /></div>
                <div className='font-light'>Login</div>
            </nav>
        </div>
    );
};

export default NavBar;