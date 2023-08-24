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
          className="flex items-center ml-2"
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

      <div className="flex mt-8 pb-36">
        <div className="basis-1/2 mr-48">
          <Image src="/food1.svg" width={555} height={392} alt="Food" />
          <h1 className="text-5xl font-serif py-8">
            Start to plan <br /> your diet today
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
            Neque congue arcu
          </p>
        </div>
        <div className="basis-2/6">
          <p className="pb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
            congue arcu
          </p>
          <Image src="/food2.svg" width={356} height={497} alt="Food" />
        </div>
      </div>
    </div>
  )
}

export default Hero
