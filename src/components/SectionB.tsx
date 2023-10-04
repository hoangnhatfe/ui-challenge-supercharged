import { FC } from 'react'
import Image from 'next/image'
import { ArrowRightIcon, ArrowUpIcon, TerminalIcon } from './Icons'

interface SectionBProps {
  
}

const SectionB: FC<SectionBProps> = ({}) => {
  return (
    <section className="py-16 sm:py-24 lg:py-36 overflow-x-hidden">
      <div className="max-w-screen-xl px-6 lg:px-8 mx-auto">
        <div className="max-w-[770px] mb-12 lg:mb-24 md:px-8 mx-auto flex flex-col items-center">
          <h2 className="flex items-center lg:mt-4 text-2xl sm:text-4xl lg:text-[52px] lg:leading-[58px] font-semibold text-center text-white">
            Raycast for Teams
          </h2>
          <p className="mt-6 text-white/60 text-center lg:text-xl tracking-[0.3px]">
            Keep your team communicating efficiently and building faster with a shared space in Raycast.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-stretch pt-12 lg:pt-12 pb-10 px-8 lg:px-16 rounded-xl bg-gradient-panel-2">
          <div className="flex flex-col">
            <div className="w-16 h-16 gradient-bg-icon rounded-2xl flex justify-center items-center">
              <ArrowUpIcon className="stroke-white" />
            </div>
            <h3 className="mt-6 text-white text-xl">Save time on everyday tasks</h3>
            <p className="mt-4 text-sm lg:text-base">Raycast isn’t just a tool for individuals. It’s also a tool, designed for sharing. From custom extensions, to Quicklinks and Snippets.</p>
            <p className="mt-4 text-sm lg:text-base">What your team needs to get done, we offer an fabulously rich toolkit to do it swiftly, and at ease with your whole organization in harmony.</p>
            <div className="mt-4">
              <button className="py-3 px-5 bg-black/30 rounded-lg text-white transition duration-500 ease-out hover:bg-black/50">Learn more</button>
            </div>
          </div>

          <div className="mt-8 lg:mt-0 lg:ml-10">
            <Image
              src="/section-3-img.png"
              alt="Supercharge"
              width={846}
              height={571}
              quality={100}
              className="w-[520px] sm:w-[640px] md:w-[846px] max-w-none lg:-mr-[156px]"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-8">
          <div className="flex flex-col flex-1 mt-8 p-8 lg:p-16 rounded-xl bg-white/10">
            <div className="flex flex-col">
              <div className="w-16 h-16 rounded-2xl gradient-bg-icon flex justify-center items-center">
                <TerminalIcon className="stroke-white" />
              </div>
              <h3 className="mt-6 text-white text-xl">Shared Commands</h3>
              <p className="mt-6 text-sm lg:text-base text-white/80">Use React and TypeScript to build custom tooling that unlocks teams within your oganization to do their best work, at speed. Share them in your private extension store.</p>
            </div>
          </div>
          <div className="flex flex-col flex-1 mt-8 p-8 lg:p-16 rounded-xl bg-white/10">
            <div className="flex flex-col">
              <div className="w-16 h-16 rounded-2xl gradient-bg-icon flex justify-center items-center">
                <TerminalIcon className="stroke-white" />
              </div>
              <h3 className="mt-6 text-white text-xl">Shared Commands</h3>
              <p className="mt-6 text-sm lg:text-base text-white/80">Effortlessly share common links with your team, such as project documentation in Notion, GitHub repos, Linear projects, and data dashboards - all with Quicklinks.</p>
            </div>
          </div>
          <div className="flex flex-col flex-1 mt-8 p-8 lg:p-16 rounded-xl bg-white/10">
            <div className="flex flex-col">
              <div className="w-16 h-16 rounded-2xl gradient-bg-icon flex justify-center items-center">
                <TerminalIcon className="stroke-white" />
              </div>
              <h3 className="mt-6 text-white text-xl">Shared Commands</h3>
              <p className="mt-6 text-sm lg:text-base text-white/80">Create consistency with saved support responses, common text such as emails or addresses, and use dynamic placeholders for smart keyword expansion.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-white">
          <a href="#" className="inline-flex items-center text-white group">Learn about developing for teams <ArrowRightIcon className="stroke-white ml-1 transition-transform group-hover:translate-x-1"/></a>
        </div>
      </div>
    </section>
  )
}

export default SectionB