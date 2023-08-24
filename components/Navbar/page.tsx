function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-[#233000] px-24 pt-4">
      <div className="text-white text-4xl font-serif">
        <p className="mx-4 my-5">Navbar</p>
      </div>

      <div className="flex">
        <ul className="flex text-white text-xl font-serif">
          <li className="mx-4 my-5">Menu</li>
          <li className="mx-4 my-5">Reservasi</li>
          <li className="mx-4 my-5">About</li>
          <li className="mx-4 my-5">Contact</li>
        </ul>

        <div className="font-bold font-serif">
          <button className=" text-white border-[1px] border-white px-6 py-2 rounded-lg ml-4 my-3">
            Login
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
