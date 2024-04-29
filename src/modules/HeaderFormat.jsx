import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const questions = [
  {
    title: "What is the purpose of the Flow Label field in the IPv6 header?",
    options: [
      {
        id: 0,
        text: "To specify the priority of the packet",
        isCorrect: false,
      },
      {
        id: 1,
        text: "To identify packets that belong to a specific flow",
        isCorrect: true,
      },
      {
        id: 2,
        text: "To specify the length of the payload",
        isCorrect: false,
      },
      {
        id: 3,
        text: "To specify the next header in the packet",
        isCorrect: false,
      },
    ],
  },
  {
    title:
      "What is the maximum number of hops that an IPv6 packet can travel before it is discarded?",
    options: [
      {
        id: 4,
        text: "255",
        isCorrect: false,
      },
      {
        id: 5,
        text: "128",
        isCorrect: false,
      },
      {
        id: 6,
        text: "64",
        isCorrect: false,
      },
      {
        id: 7,
        text: "The value specified in the Hop Limit field",
        isCorrect: true,
      },
    ],
  },
  {
    title: "What is the purpose of the Next Header field in the IPv6 header?",
    options: [
      {
        id: 8,
        text: "To specify the source address of the packet",
        isCorrect: false,
      },
      {
        id: 9,
        text: "To specify the destination address of the packet",
        isCorrect: false,
      },
      {
        id: 10,
        text: "To specify the type of the next header in the packet",
        isCorrect: true,
      },
      {
        id: 11,
        text: "To specify the length of the payload",
        isCorrect: false,
      },
    ],
  },
];

const HeaderFormat = ({ handleAnswer }) => {
  return (
    <section className="w-full h-full grid grid-cols-2">
      <article className="w-full h-full overflow-y-scroll">
        <div className="w-full h-full p-8">
          <h1 className="text-4xl font-bold my-6">IPv6 Header Format</h1>
          <p className="tracking-tight leading-loose">
            The IPv6 header format is simpler and more efficient than the IPv4
            header format. The IPv6 header consists of 8 fields, each with a
            specific function.
          </p>
          <h5 className="font-semibold text-xl mt-4">
            Fields in the IPv6 Header:
          </h5>
          <ul className="list-disc list-inside pl-6 flex flex-col gap-6 mt-4">
            <li>
              <b>Version (4 bits)</b>: This field indicates the version of the
              Internet Protocol, which is 6 for IPv6.
            </li>
            <li>
              <b>Traffic Class (8 bits)</b>: This field is used to specify the
              priority of the packet and is equivalent to the Type of Service
              (ToS) field in IPv4.
            </li>
            <li>
              <b>Flow Label (20 bits)</b>: This field is used to identify
              packets that belong to a specific flow and is used for quality of
              service (QoS) purposes.
            </li>
            <li>
              <b>Payload Length (16 bits)</b>: This field specifies the length
              of the payload in octets.
            </li>
            <li>
              <b>Next Header (8 bits)</b>: This field specifies the type of the
              next header in the packet.
            </li>
            <li>
              <b>Hop Limit (8 bits)</b>: This field specifies the maximum number
              of hops that the packet can travel before it is discarded.
            </li>
            <li>
              <b>Source Address (128 bits)</b>: This field specifies the IPv6
              address of the source device.
            </li>
            <li>
              <b>Destination Address (128 bits)</b>: This field specifies the
              IPv6 address of the destination device.
            </li>
          </ul>
          <br />
          <h5 className="font-semibold text-xl mt-4">Extension Headers</h5>
          <p>
            In addition to the main header, IPv6 packets can also include
            extension headers. These headers provide additional information and
            are used for specific purposes such as fragmentation,
            authentication, and encryption.
          </p>
          <section className="my-8">
            <h1 className="text-indigo-600 text-center text-4xl font-bold py-3">
              Quiz
            </h1>
            {questions.map((question, index) => (
              <div key={index} className="my-4">
                <p className="font-medium text-xl mt-16 mb-4" key={index}>
                  {question.title}
                </p>
                <ul className="flex flex-col gap-y-6">
                  {question.options.map((option) => (
                    <li
                      onClick={() => handleAnswer(option.isCorrect, option.id)}
                      id={`${option.id}`}
                      className="border border-indigo-600 hover:bg-indigo-100 duration-150 active:scale-95 cursor-pointer py-2 text-indigo-600 bg-transparent text-center rounded-lg"
                      key={option.id}
                    >
                      {option.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
          <div className="grid grid-cols-2">
            <Link to="/">
              <button className="btn mb-8 w-full text-white hover:bg-violet-800 bg-violet-600 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="scale-x-[-1]"
                  color={"currentColor"}
                  fill={"none"}
                >
                  <path
                    d="M20 12L4 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                IPv6 Address Types
              </button>
            </Link>
            <Link to="/neighbour-discovery">
              <button className="btn mb-8 w-full text-white hover:bg-violet-800 bg-violet-600 cursor-pointer">
                IPv6 Neighbour Discovery
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  color={"currentColor"}
                  fill={"none"}
                >
                  <path
                    d="M20 12L4 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </article>
      <iframe
        style={{
          width: "100%",
          height: "100vh",
          outline: "1px solid #252525",
          borderLeft: 1,
          zIndex: 100,
        }}
        src="https://codesandbox.io/p/devbox/ipv6-7fdwkc?file=%2Fheader_format.py%3A5%2C1"
      ></iframe>
    </section>
  );
};

HeaderFormat.propTypes = {
  handleAnswer: PropTypes.func.isRequired,
};

export default HeaderFormat;
