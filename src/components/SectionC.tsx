import { FC } from 'react'
import Image from 'next/image'

interface SectionCProps {
  
}

const SectionC: FC<SectionCProps> = ({}) => {
  return (
    <section className="">
      <div className="max-w-screen-xl px-6 lg:px-8 mx-auto">
        <div className="max-w-[770px] mb-12 lg:mb-24 mx-auto flex flex-col items-center">
          <h2 className="text-2xl sm:text-4xl lg:text-[52px] lg:leading-[58px] font-semibold text-center text-white">
            More focus,<span className="text-white/40"> less clutter.</span>
          </h2>
          <p className="mt-6 text-white/60 text-center lg:text-xl tracking-[0.3px]">
            Keep your team communicating efficiently and building faster with a shared space in Raycast.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="flex flex-col flex-1 p-8 rounded-xl bg-white/[0.05]">
            <div className="flex flex-col">
              <Image
                src={'/icon/secure-icon.png'}
                alt="Security"
                width={48}
                height={48}
                quality={100}
              />
              <h3 className="mt-4 text-white">Security by default, always</h3>
              <p className="mt-4 text-sm lg:text-[15px] text-white/60">Enable the built-in extensions for an initial productivity boost. Use script commands and our API to build custom extensions to optimize your workflow.</p>
            </div>
          </div>
          <div className="flex flex-col flex-1 p-8 rounded-xl bg-white/[0.05]">
            <div className="flex flex-col">
              <Image
                src={'/icon/chip-icon.png'}
                alt="Security"
                width={48}
                height={48}
                quality={100}
              />
              <h3 className="mt-4 text-white">Make it your own, tailor it to you</h3>
              <p className="mt-4 text-sm lg:text-[15px] text-white/60">Everything is stored encrypted on your local disk, and nothing sensetive is tracked. You and your personal data stay anonymous.</p>
            </div>
          </div>
          <div className="flex flex-col flex-1 p-8 rounded-xl bg-white/[0.05]">
            <div className="flex flex-col">
              <Image
                src={'/icon/terminal-icon.png'}
                alt="Security"
                width={48}
                height={48}
                quality={100}
              />
              <h3 className="mt-4 text-white">Learn once, remember forever</h3>
              <p className="mt-4 text-sm lg:text-[15px] text-white/60">Inspired by the command line interface, your tools are unified as commands, and follow the same structure to make you more productive.</p>
            </div>
          </div>
          <div className="flex flex-col flex-1 p-8 rounded-xl bg-white/[0.05]">
            <div className="flex flex-col">
              <Image
                src={'/icon/clock-icon.png'}
                alt="Security"
                width={48}
                height={48}
                quality={100}
              />
              <h3 className="mt-4 text-white">Perform tasks in a matter of seconds</h3>
              <p className="mt-4 text-sm lg:text-[15px] text-white/60">Raycast is built natively to be faster, lightweight, and efficient. Every action is optimized for speed and accessibility.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionC