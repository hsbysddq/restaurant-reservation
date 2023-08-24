import React from "react"

const Footer = () => {
  return (
    <div className="bg-[#233000] pt-20">
      <div className="flex items-center">
        <div className="basis-3/12 font-serif">
          <h1 className="text-white text-5xl pl-32">
            Food <br />
            Zero.
          </h1>
        </div>

        <div className="basis-3/12 font-serif text-white pl-20">
          <h2 className="text-xl">Contact</h2>

          <div className="text-xs pt-8">
            <p>+1+86 852 346 000</p>
            <p>info@foodzero.com</p>
          </div>

          <div className="text-xs pt-4">
            <p>1959 Sepulveda Blvd.</p>
            <p>Culver City, CA, 90230</p>
          </div>
        </div>

        <div className="basis-6/12 font-serif text-white pl-20">
          <h2 className="text-xl">Never Miss a Recipe</h2>

          <form action="" className="pt-8">
            <input
              type="text"
              placeholder="Email Address"
              className="border-[1px] border-white bg-[#233000] py-3 pl-4 pr-12"
            />
            <input
              type="button"
              value="Subscribe"
              className="ml-6 bg-[#5E6600] text-xl text-white py-2 px-6"
            />
          </form>

          <p className="text-xs pt-4">
            Join our subscribers and get best recipe delivered each week!
          </p>
        </div>
      </div>

      <div className=" border-dashed border-[1px] border-white w-full mt-16"></div>

      <div className="pt-8 pb-10 text-white font-serif mx-32">
        <h1 className="">© 2020 Zero Inc. All rights Reserved</h1>
      </div>
    </div>
  )
}

export default Footer
