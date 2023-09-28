import {
  CheckCircleIcon,
  InformationCircleIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  ExclamationCircleIcon,
  LightBulbIcon,
  MagnifyingGlassIcon,
  BookmarkIcon,
  MegaphoneIcon,
} from "@heroicons/react/20/solid";
import LottiePlayer from "react-lottie-player";
import animationData from "./animation_lmf6j0mp.json";
import TextWithImage from "./textwithimage";
import ProgressComponent from "./progresspage";

// Add this to your CSS or inline styles
const flexContainerStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
};

const flexItemStyle = {
  flex: "1 1 auto",
};

const lottieStyle = {
  flex: "none", // This will prevent the Lottie animation from growing or shrinking
  width: 400,
  height: 400,
};

export default function Doc1({
  setTocold,
  setToCSV,
  setToDoc1,
  setToDoc2,
  setToDoc3,
}) {
  const imageSrc =
    "https://res.cloudinary.com/dl2adjye7/image/upload/v1694524253/flat-mountains_cptgfh.png";
  const text =
    "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.";
  const title = "Cold Outreach";

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="w-full min-w-full">
      <TextWithImage imageSrc={imageSrc} text={text} title={title} />
      <div className="bg-white px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <p className="text-left text-base font-semibold leading-7 text-green-700">
            Cold Outreach
          </p>
          <h1 className="text-left mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">
            Introduction
          </h1>
          <p className="text-left mt-6 text-xl leading-8">
            Cold outreach is a strategic way to initiate contact with
            individuals who are not currently engaged with you, your product, or
            your services. While the term "cold" may imply a lack of connection,
            a well-executed cold outreach campaign can open doors to valuable
            business opportunities, partnerships, and networking. This guide is
            designed to offer you a comprehensive framework to make your cold
            outreach efforts successful.
          </p>

          <h2 className="text-left mt-16 text-2xl font-bold tracking-tight text-green-900">
            1. Understanding Cold Outreach
          </h2>
          <p className="text-left mt-6">
            In the world of outreach, there are generally two types: cold and
            warm. Warm outreach involves connecting with people who are already
            familiar with you or your services. Cold outreach, on the other
            hand, is a bit more challenging because you're reaching out to
            people who have no prior relationship with you. However, the rewards
            can be greater if you manage to turn a cold lead into a warm one.
          </p>
          <h2 className="text-left mt-16 text-2xl font-bold tracking-tight text-green-900">
            2. Identifying the Target Audience
          </h2>
          <p className="text-left mt-6">
            Before you even think about sending out emails or making calls, it's
            crucial to know who you're targeting. You should understand the
            industry your target audience belongs to, their role within their
            organization, and the problems they might be facing that your
            product or service can solve. This information will not only help
            you tailor your message but also ensure that you're reaching out to
            people who are most likely to benefit from what you're offering.
          </p>
          <div className="text-left">
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <BuildingOfficeIcon
                  className="mt-1 h-5 w-5 flex-none fill-green-800"
                  aria-hidden="true"
                />
                <span>
                  <strong className="text-left font-semibold text-gray-900">
                    What industry they belong to.
                  </strong>{" "}
                  Provide details about the industry your target audience is
                  part of.
                </span>
              </li>
              <li className="flex gap-x-3">
                <UserGroupIcon
                  className="mt-1 h-5 w-5 flex-none fill-green-800"
                  aria-hidden="true"
                />
                <span>
                  <strong className="text-left font-semibold text-gray-900">
                    Their role in the organization.
                  </strong>{" "}
                  Describe the roles and responsibilities of your target
                  audience within their organization.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ExclamationCircleIcon
                  className="mt-1 h-5 w-5 flex-none fill-green-800"
                  aria-hidden="true"
                />
                <span>
                  <strong className="text-left font-semibold text-gray-900">
                    Their potential pain points.
                  </strong>{" "}
                  Identify the challenges or problems your target audience might
                  be facing.
                </span>
              </li>
              <li className="flex gap-x-3">
                <LightBulbIcon
                  className="mt-1 h-5 w-5 flex-none fill-green-800"
                  aria-hidden="true"
                />
                <span>
                  <strong className="text-left font-semibold text-gray-900">
                    How your product or service can provide a solution.
                  </strong>{" "}
                  Explain how your product or service can solve the problems or
                  challenges your target audience is facing.
                </span>
              </li>
            </ul>
          </div>

          <h2 className="text-left mt-16 text-2xl font-bold tracking-tight text-green-900">
            3. Creating a Contact List
          </h2>
          <p className="text-left mt-6">
            Once you have a clear picture of your target audience, the next step
            is to compile a contact list. This isn't just a list of names and
            email addresses; it should also include details like the person's
            position, the company they work for, and their LinkedIn profile.
            Additional information can also be beneficial depending on the
            nature of your outreach. For phone-based outreach, tools like{" "}
            <a
              onClick={() => setTocold()}
              className="text-green-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              cold outreach generator
            </a>{" "}
            can be useful, while email and LinkedIn outreach can be facilitated
            by using an{" "}
            <a
              onClick={() => setToCSV()}
              className="text-green-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              email generator
            </a>{" "}
            tool.
          </p>

          <figure className="mt-16">
            <img
              className="aspect-video rounded-xl bg-gray-50 object-cover"
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1693216017/leads_wlywol.png"
              alt=""
            />
            <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
              <InformationCircleIcon
                className="text-left mt-0.5 h-5 w-8 flex-none text-gray-300"
                aria-hidden="true"
              />
              Faucibus commodo massa rhoncus, volutpat.
            </figcaption>
          </figure>
          <h2 className="text-left mt-16 text-2xl font-bold tracking-tight text-green-900">
            4. Phone Cold Outreach
          </h2>
          <p className="text-left mt-6">
            Phone outreach is a powerful tool, but it comes with its own set of
            challenges and opportunities. Preparation is key. Before you pick up
            the phone, make sure you've done your homework on the person you're
            calling. Understand their role, the challenges they face, and how
            your product or service can help them. It's also helpful to have a
            script or at least some talking points prepared, as phone
            conversations don't allow for the same level of real-time editing as
            emails do. When you're on the call, start by introducing yourself
            and stating the reason for your call. Quickly outline how you can
            provide value before engaging the listener with open-ended
            questions. Always end the call with a specific next step, whether
            that's a follow-up call, an email, or a scheduled meeting. After the
            call, jot down important points and any follow-up actions that need
            to be taken. For best results, aim to make your calls on
            Tuesday-Thursday mornings, speak clearly, and listen attentively.
            Rejection is a part of the process; learn from it and move on. If
            you encounter gatekeepers like secretaries or assistants, be polite
            but persistent.
          </p>
          <h2 className="text-left mt-16 text-2xl font-bold tracking-tight text-green-900">
            5. Crafting the Outreach Message
          </h2>
          <p className="text-left mt-6">
            When it comes to crafting your outreach message, clarity and
            relevance are key. Your message should be concise, directly related
            to the recipient, and offer a solution to a problem they may be
            facing. A strong call-to-action (CTA) is also essential to prompt
            the recipient into taking the next step.
          </p>

          <div className="text-left">
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <MagnifyingGlassIcon
                  className="mt-1 h-5 w-5 flex-none fill-green-800"
                  aria-hidden="true"
                />
                <span>
                  <strong className="text-left font-semibold text-gray-900">
                    Clear and concise.
                  </strong>{" "}
                  Messages should be straightforward and to the point to capture
                  the recipient's attention.
                </span>
              </li>
              <li className="flex gap-x-3">
                <BookmarkIcon
                  className="mt-1 h-5 w-5 flex-none fill-green-800"
                  aria-hidden="true"
                />
                <span>
                  <strong className="text-left font-semibold text-gray-900">
                    Relevant to the recipient.
                  </strong>{" "}
                  Tailor the content to the recipient's needs or interests.
                </span>
              </li>
              <li className="flex gap-x-3">
                <LightBulbIcon
                  className="mt-1 h-5 w-5 flex-none fill-green-800"
                  aria-hidden="true"
                />
                <span>
                  <strong className="text-left font-semibold text-gray-900">
                    Providing value or offering a solution to a problem.
                  </strong>{" "}
                  Address a pain point or offer something of value to the
                  recipient.
                </span>
              </li>
              <li className="flex gap-x-3">
                <MegaphoneIcon
                  className="mt-1 h-5 w-5 flex-none fill-green-800"
                  aria-hidden="true"
                />
                <span>
                  <strong className="text-left font-semibold text-gray-900">
                    Containing a strong call-to-action (CTA).
                  </strong>{" "}
                  Include a compelling CTA to guide the recipient on the next
                  steps.
                </span>
              </li>
            </ul>
          </div>

          <div className="block">
            <div className="w-full">
              <h2 className="text-left mt-16 text-2xl font-bold tracking-tight text-green-900">
                6. Email Best Practices
              </h2>
              <p className="text-left mt-6">
                When it comes to email best practices, there are several key
                points to keep in mind. First, always use a personalized subject
                line to capture the recipient's attention. Next, address the
                recipient by their name to make the email more engaging and
                personal. Maintain a respectful and professional tone throughout
                the email to establish credibility. Before sending, make sure to
                proofread the email for any errors or inconsistencies. Finally,
                include a signature at the end of the email that provides your
                contact details, making it easy for the recipient to get in
                touch with you. Additionally, it's crucial to always follow up
                if you haven't received a response within a reasonable time
                frame. Following up not only shows your continued interest but
                also increases the chances of your email being noticed.
              </p>
            </div>
            <div className="w-full">
              <LottiePlayer
                loop
                animationData={animationData}
                play
                style={{ width: 600, height: 600 }}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <ProgressComponent
            setTocold={setTocold}
            setToDoc1={setToDoc1}
            setToDoc2={setToDoc2}
            setToDoc3={setToDoc3}
            currentPage={0}
          />
        </div>
      </div>
    </div>
  );
}
