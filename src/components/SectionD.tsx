import { FC } from 'react'

interface SectionDProps {
  
}

const SectionD: FC<SectionDProps> = ({}) => {
  return (
    <section className="py-24 lg:py-44">
      <div className="max-w-screen-xl px-6 lg:px-8 mx-auto">
        <div className="max-w-[510px] mx-auto flex flex-col items-center lg:mt-12 text-center">
          <h2 className="text-white text-2xl sm:text-4xl font-medium">Ready for take-off?</h2>
          <p className="mt-7 lg:text-lg text-white/60">
            Download the Raycast app and start taking your productivity to new heights.
          </p>
          <div className="mt-7">
            <button className="group relative flex before:absolute before:inset-0 button-gradient-bg before:blur-2xl before:opacity-60 before:rounded-lg before:transition before:duration-300 before:ease-out hover:before:opacity-100 hover:before:blur-3xl">
              <span className="relative rounded-lg ring-[3px] ring-white/30 bg-white/90 py-4 px-[70px] text-[#0D0D0D] z-10 transition duration-500 ease-out group-hover:bg-white group-hover:ring-white/100">Download for Mac</span>
            </button>
          </div>
          <div className="mt-6 text-white/40 text-[15px]">
            or
          </div>
          <div className="mt-6">
            <button className="copy-code-btn font-mono text-[13px] leading-5 text-white/40">
              <span>
                $ brew install --cask raycast
              </span>
            </button>
          </div>
          <div className="mt-6 text-white/40 text-xs">
            macOS 10.15+
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionD