
import ButtonWrapper2 from '../../Services/buttons/filling'
import ButtonWrapper3 from '../../Services/buttons/fillinginvert'
import HeroImage from '../images/hero-image.png'


export default function Hero() {
  return (
    <section className="relative before:absolute before:inset-0 before:h-80 before:pointer-events-none before:bg-gradient-to-b before:from-zinc-100 before:-z-10">
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        {/* Section content */}
        <div className="px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
              <div className="text-center pb-12 md:pb-16">
                <h1 className="font-inter-tight text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-500 via-slate-900 to-teal-900 pb-4 font-alliance">
                 Software Development
                </h1>
                <p className="text-lg text-slate-900 mb-8 font-alliance">
                  Turbocharge your creative process with a powerful AI design platform that gives creatives the power of creating without limits.
                </p>
                <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center justify-center gap-x-6">
          <ButtonWrapper2></ButtonWrapper2>
          <ButtonWrapper3></ButtonWrapper3>
        </div>
                </div>
              </div>
          </div>
        </div>
        {/* Image */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-center pb-12 md:pb-20 relative before:absolute before:-top-12 before:w-96 before:h-96 before:bg-zinc-900 before:opacity-[.15] before:rounded-full before:blur-3xl before:-z-10">
          <img className="rounded-lg shadow-2xl" src={HeroImage} width={1104} height={620} alt="Hero" priority />
        </div>

        {/* Stats */}
   

      </div>
    </section>
  )
}