import { FC } from 'react'
import Image from 'next/image'
import { ArrowUpIcon, CheckIcon, ChipIcon, LightningIcon } from './Icons'
import Link from 'next/link'

interface SectionAProps {
  
}

const SectionA: FC<SectionAProps> = ({}) => {
  return  (
    <section className="py-16 sm:py-20 lg:py-24 overflow-x-hidden">
      <div className="max-w-screen-xl px-6 lg:px-8 mx-auto">
        <div className="max-w-[770px] mb-12 lg:mb-32 md:px-8 mx-auto flex flex-col items-center">
          <h2 className="flex flex-col sm:flex-row items-center text-2xl sm:text-4xl lg:text-[52px] lg:leading-[58px] font-semibold text-center text-white">
            It’s as easy as
            <span className="inline-flex items-center mx-2 text-[#59d499]"> installed <CheckIcon className="ml-2 w-7 h-7 sm:w-12 sm:h-12 stroke-[#59d499]"/></span>
          </h2>
          <p className="mt-6 lg:text-xl text-white/60 text-center tracking-[0.3px]">
            Say hello to the Store. A home for Extensions published by our community of Developers using our API. Find extensions to the tools you use in your day-to-day.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-stretch py-12 lg:py-[70px] px-8 lg:px-16 rounded-xl bg-gradient-panel-1">
          <div className="flex flex-col">
            <div className="w-16 h-16 rounded-2xl bg-white/[.15] flex justify-center items-center">
              <ArrowUpIcon className="stroke-white" />
            </div>
            <h3 className="mt-6 text-white lg:text-xl">One up your productivity</h3>
            <p className="mt-6 text-sm lg:text-base">On top of the core Raycast Extensions already built in, you can install Extensions built by Developers from the community. Everything you’ve asked for, in one place. Search and browse Extensions for your tools, actions and more.</p>
            <div className="mt-6">
              <button className="py-3 px-5 bg-white/20 rounded-lg text-white transition duration-500 ease-out hover:bg-white/40">Browse Extensions</button>
            </div>
          </div>

          <div className="mt-8 lg:mt-0 lg:ml-14">
            <Image
              src="/section-2-img.png"
              alt="Supercharge"
              width={780}
              height={517}
              quality={100}
              className="w-[520px] sm:w-[640px] md:w-[780px] max-w-none lg:-mr-[176px]"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col lg:w-[460px] mt-8 p-8 lg:p-16 rounded-xl bg-white/10">
            <div className="flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-white/[.15] flex justify-center items-center">
                <LightningIcon className="stroke-white" />
              </div>
              <h3 className="mt-6 text-white text-xl">Lightweight and snappy</h3>
              <p className="mt-6 text-sm lg:text-base">Designed to be seamless and instant. View an Extension and hit <span className="inline-flex items-end h-[27px] py-[2px] px-[6px] leading-[20px] rounded bg-white/10">↵</span> to simply install it in milliseconds.</p>
            </div>
            <div className="flex flex-col items-center mt-8 lg:mt-16">
              <Image
                src="/lightweight-img.png"
                alt="Supercharge"
                width={384}
                height={322}
                quality={100}
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 lg:ml-8 mt-8 p-8 lg:p-16 rounded-xl bg-white/10">
            <div className="flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-white/[.15] flex justify-center items-center">
                <ChipIcon className="stroke-white" />
              </div>
              <h3 className="mt-6 text-white text-xl">An evergrowing collection</h3>
              <p className="mt-6 text-sm lg:text-base">Control Spotify or Apple Music with a hit of a button. Search through Figma, Notion, and Xcode. Check your internet speed and the weather without needing the browser, or even play a game of Snake.</p>
            </div>
            <div className="flex flex-col items-center mt-8 -mx-8 -mb-8 lg:mt-16 lg:-mx-16 lg:-mb-16">
              <Image
                src="/evergeowing-img.png"
                alt="Supercharge"
                width={750}
                height={379}
                quality={100}
              />
            </div>
          </div>
        </div>

        <div className="px-6 lg:px-8 mt-6 lg:mt-8 text-center">
          <Link href="#">
            Explore the store
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SectionA