import { FC } from 'react'
import Image from 'next/image'

interface HeroProps {
  
}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 lg:pt-44">
      <Image
        src="/hero-bg.png"
        alt="Supercharge"
        fill={true}
        quality={100}
        className="object-cover object-bottom"
      />
      <Image
        src="/hero-glow-bg.svg"
        alt="Supercharge"
        fill={true}
        className="object-contain object-center mix-blend-overlay"/>
      <div className="relative max-w-[860px] px-8 lg:px-0 mx-auto z-10">
        <div className="flex flex-col items-center">
          <Image
            src="/hero-img.png"
            alt="Supercharge"
            width={860}
            height={447}
            className="relative max-w-full z-10"
          />
          <h1 className="lg:-mt-4 text-[36px] leading-[36px] sm:text-[56px] sm:leading-[56px] lg:text-[80px] lg:leading-[72px] lg:tracking-[1.2px] font-bold text-white flex flex-col items-center">
            <span className="p-4 inline-block italic bg-clip-text text-transparent bg-gradient-to-l from-[#7000FF] via-55% via-[#F13DD4] to-[#F83A3A]">Supercharged</span>
            productivity
          </h1>
          <p className="max-w-[640px] mt-8 lg:text-xl text-white/40 text-center tracking-[0.3px]">
            Raycast is a blazingly fast, totally extendable launcher. It lets you complete tasks, calculate, share common links, and much more.
          </p>
          <div className="mt-7">
            <button className="group relative flex before:absolute before:inset-0 button-gradient-bg before:blur-[6.5px] before:opacity-60 before:rounded-lg before:transition before:duration-500 before:ease-out hover:before:opacity-100 hover:before:blur-xl">
              <span className="relative rounded-lg ring-[3px] ring-white/30 bg-white/90 py-4 px-8 sm:px-[70px] text-[#0D0D0D] z-10 transition duration-500 ease-out group-hover:bg-white group-hover:ring-white/100">Download for Mac</span>
            </button>
          </div>
          <div className="mt-5 flex items-center text-[13px] leading-[13px] text-white/40 divide-x divide-white/40">
            <span className="px-5">v1.39.1</span>
            <span className="px-5">macOS 10.15+</span>
            <span className="px-5">Install via Homebrew</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero