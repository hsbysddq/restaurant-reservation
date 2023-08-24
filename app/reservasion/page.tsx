const Reservation = () => {
  return (
    <div className="bg-[#EBF0E4] font-serif pb-28 px-32">
      <div className="text-black pt-24 text-center">
        <h1 className="text-5xl font-medium pb-2">Make a Reservation</h1>
        <p className="text-sm pb-20">Get in touch with restaurant</p>
      </div>

      <div className="flex pb-20 justify-center">
        <div className="basis-3/12 mr-6">
          <form action="" className="">
            <input
              type="date"
              className="w-full py-[10px] px-4 bg-[#EBF0E4] border-[1px] border-black"
            />
          </form>
        </div>

        <div className="basis-3/12 mr-6">
          <select
            id="clock"
            className="bg-[#EBF0E4] border-[1px] border-black w-full py-3 px-4"
          >
            <option value="07:00 - 09:00 AM">07:00 - 09:00 AM</option>
            <option value="10:00 - 12:00 AM">10:00 - 12:00 AM</option>
            <option value="13:00 - 15:00 PM">13:00 - 15:00 PM</option>
            <option value="16:00 - 18:00 PM">16:00 - 18:00 PM</option>
          </select>
        </div>

        <div className="basis-3/12">
          <select
            id="clock"
            className="w-full py-3 px-4 bg-[#EBF0E4] border-[1px] border-black"
          >
            <option value="1 Person">1 Person</option>
            <option value="2 Person">2 Person</option>
            <option value="3 Person">3 Person</option>
            <option value="4 Person">4 Person</option>
          </select>
        </div>
      </div>

      <div className="flex justify-center">
        <form action="">
          <input
            type="button"
            value="Book Now"
            className="justify-center bg-[#233000] text-xl text-white py-2 px-10"
          />
        </form>
      </div>
    </div>
  )
}

export default Reservation
