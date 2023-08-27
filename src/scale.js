import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'One click Generation',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Email Verified',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon,
  },
  {
    name: 'Linkedin Accounts',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Strategy',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
]

export default function Scale() {
    return (
      <div className="bg-white py-24 sm:py-32 mx-auto" style={{ maxWidth: "1200px" }}>
        <div className="mx-auto px-6 lg:px-8 w-full">
          <div className="mx-auto lg:text-center w-full">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Scale Faster</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to upgrade your business
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 mx-auto" style={{ maxWidth: "700px" }}>
              From lead generation to B2B tutorials, this software will easily allow you to scale your business to the next level.
            </p>
          </div>
          <div className="mx-auto mt-16 w-full sm:mt-20 lg:mt-24">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16 w-full">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16 w-full">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }