import Image from "next/image"

const Hero = () => {
  return (
    <div className="px-32 bg-[#233000] text-white">
      <div className="relative flex flex-row">
        <div className="pt-8 basis-3/5 z-[1]">
          <h1 className=" text-8xl font-serif font-medium">
            Healthy Eating is important part of lifestyle
          </h1>
        </div>

        <div className="absolute right-0 top-28">
          <Image src="/hero.svg" width={555} height={652} alt="Hero img" />
        </div>
      </div>

      <div className="flex font-sans text-sm">
        <p className="py-8 basis-4/12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quas
          eligendi!
        </p>
      </div>

      <div className="flex pb-20">
        <div
          style={{ writingMode: "vertical-rl" }}
          className="flex items-center"
        >
          <div className="font-serif text-4xl pb-4">
            <p>Scroll</p>
          </div>
          <div className=" border-dashed border-l-2 border-white h-80"></div>
        </div>

        <div className="flex z-[1] m-auto pt-40">
          <Image
            src="/spices1.svg"
            width={175}
            height={183}
            alt="Hero img"
            className="mx-4"
          />

          <Image
            src="/spices2.svg"
            width={175}
            height={183}
            alt="Hero img"
            className="mx-4"
          />

          <Image
            src="/spices3.svg"
            width={175}
            height={183}
            alt="Hero img"
            className="mx-4"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
