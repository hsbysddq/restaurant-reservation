import React from "react"

React
function Navbar() {
  return (
    <nav className="flex justify-between mx-24 items-center">
      <div className="font-bold text-2xl">
        <p className="mx-4 my-5">Navbar</p>
      </div>

      <div className="flex">
        <ul className="flex">
          <li className="mx-4 my-5">Menu Makanan</li>
          <li className="mx-4 my-5">Reservasi</li>
          <li className="mx-4 my-5">About</li>
          <li className="mx-4 my-5">Contact</li>
        </ul>

        <div className="font-bold">
          <button className="bg-blue-500 text-black px-6 py-2 rounded-lg ml-4 my-3">
            Login
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
