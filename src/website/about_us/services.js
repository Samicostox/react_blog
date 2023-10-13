import {
  InboxIcon,
  TrashIcon,
  UsersIcon,
  CheckIcon,
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ReceiptRefundIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Unlimited inboxes",
    description:
      "Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.",
    href: "#",
    icon: InboxIcon,
  },
  {
    name: "Manage team members",
    description:
      "Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.",
    href: "#",
    icon: UsersIcon,
  },
  {
    name: "Spam report",
    description:
      "Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.",
    href: "#",
    icon: TrashIcon,
  },
  {
    name: "Unlimited inboxes",
    description:
      "Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.",
    href: "#",
    icon: InboxIcon,
  },
  {
    name: "Manage team members",
    description:
      "Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.",
    href: "#",
    icon: UsersIcon,
  },
  {
    name: "Spam report",
    description:
      "Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.",
    href: "#",
    icon: TrashIcon,
  },
];

const actions = [
  {
    title: "Experience",
    href: "/#contact2",
    icon: ClockIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
    text: "",
  },
  {
    title: "Training",
    href: "/#contact2",
    icon: CheckBadgeIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
    text: "",
  },
  {
    title: "Support",
    href: "/#contact2",
    icon: UsersIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
    text: "",
  },
  {
    title: "Compensation",
    href: "/#contact2",
    icon: BanknotesIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
    text: "",
  },
  {
    title: "Career",
    href: "/#contact2",
    icon: ReceiptRefundIcon,
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
    text: "",
  },
  {
    title: "Community",
    href: "/#contact2",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
    text: "",
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Services() {
  return (
    <div className="pb-20">
      <div className="divide-y divide-gray-400 overflow-hidden rounded-lg bg-gray-200 shadow-lg sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 mt-20 max-w-7xl mx-auto border border-gray-300">
        {actions.map((action, actionIdx) => (
          <div
            key={action.title}
            className={classNames(
              actionIdx === 0
                ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                : "",
              actionIdx === 1 ? "sm:rounded-tr-lg" : "",
              actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
              actionIdx === actions.length - 1
                ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                : "",
              "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-700 text-left shadow-sm"
            )}
          >
            <div>
              <span
                className={classNames(
                  action.iconBackground,
                  action.iconForeground,
                  "inline-flex rounded-lg p-3 ring-4 ring-white text-left"
                )}
              >
                <action.icon className="h-6 w-6 text-left" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-base font-semibold leading-6 text-gray-900 text-left">
                <a
                  href={action.href}
                  className="focus:outline-none text-left font-alliance"
                >
                  {/* Extend touch target to entire panel */}
                  <span
                    className="absolute inset-0 text-left font-alliance"
                    aria-hidden="true"
                  />
                  {action.title}
                </a>
              </h3>
              <p className="mt-2 text-sm text-gray-500 text-left font-alliance font-light">
                {action.text}
              </p>
            </div>
            <span
              className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
              aria-hidden="true"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
