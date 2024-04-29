import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const questions = [
  {
    title:
      "What type of IPv6 address identifies a single interface on a device and is used for one-to-one communication?",
    options: [
      {
        id: 0,
        text: "Anycast address",
        isCorrect: false,
      },
      {
        id: 1,
        text: "Multicast address",
        isCorrect: false,
      },
      {
        id: 2,
        text: "Unicast address",
        isCorrect: true,
      },
      {
        id: 3,
        text: "Special address",
        isCorrect: false,
      },
    ],
  },
  {
    title:
      "Which type of IPv6 address is used for local communication and is not routed on the internet?",
    options: [
      {
        id: 4,
        text: "Unique Local Unicast Address",
        isCorrect: true,
      },
      {
        id: 5,
        text: "Global Unicast Address",
        isCorrect: false,
      },
      {
        id: 6,
        text: "Link-Local Unicast Address",
        isCorrect: false,
      },
      {
        id: 7,
        text: "Anycast address",
        isCorrect: false,
      },
    ],
  },
  {
    title: "What is the purpose of an Anycast address in IPv6?",
    options: [
      {
        id: 8,
        text: "To identify a single interface on a device",
        isCorrect: false,
      },
      {
        id: 9,
        text: "To identify a set of interfaces on multiple devices",
        isCorrect: true,
      },
      {
        id: 10,
        text: "To identify a group of interfaces on multiple devices",
        isCorrect: false,
      },
      {
        id: 11,
        text: "To provide a loopback function",
        isCorrect: false,
      },
    ],
  },
];

const AddressTypes = ({ handleAnswer }) => {
  return (
    <section className="w-full h-full grid grid-cols-2">
      <article className="w-full h-full overflow-y-scroll">
        <div className="w-full h-full p-8">
          <h1 className="text-4xl font-bold my-6">IPv6 Address Types</h1>
          <p className="tracking-tight leading-loose">
            In IPv6, there are several types of addresses that serve different
            purposes. Understanding these address types is essential for
            designing and implementing IPv6 networks, as well as for
            troubleshooting and configuring IPv6 devices.
          </p>
          <h5 className="font-semibold text-xl mt-4">Unicast Addresses</h5>
          <p className="tracking-tight leading-loose">
            Unicast addresses identify a single interface on a device and are
            used for one-to-one communication. There are three types of unicast
            addresses:
          </p>
          <ul className="list-disc list-inside pl-6 flex flex-col gap-6 mt-4">
            <li>
              <b>Global Unicast Addresses</b>: These addresses are globally
              unique and are used to identify devices on the internet. They are
              equivalent to IPv4 public addresses.
            </li>
            <li>
              <b>Link-Local Unicast Addresses</b>: These addresses are used for
              communication between devices on the same link (e.g., a local
              network). They are not routed and are not globally unique.
            </li>
            <li>
              <b>Unique Local Unicast Addresses</b>: These addresses are used
              for local communication and are not routed on the internet. They
              are similar to IPv4 private addresses.
            </li>
          </ul>
          <br />
          <h5 className="font-semibold text-xl mt-4">Anycast Addresses</h5>
          <p>
            Anycast addresses identify a set of interfaces on multiple devices
            and are used for one-to- many communication. A packet sent to an
            anycast address is routed to the nearest device with that address.
          </p>
          <br />
          <h5 className="font-semibold text-xl mt-4">Multicast Addresses</h5>
          <p>
            Multicast addresses identify a group of interfaces on multiple
            devices and are used for one- to-many communication. A packet sent
            to a multicast address is delivered to all devices in the group.
          </p>
          <br />
          <h5 className="font-semibold text-xl mt-4">Special Addresses</h5>
          <p>
            Special addresses have special meanings and are used for specific
            purposes:
          </p>
          <ul className="list-disc list-inside pl-6 flex flex-col gap-6 mt-4">
            <li>
              <b>Loopback Address</b>: The address <code>::1</code> is used as a
              loopback address, similar to <code>127.0.0.1</code> in IPv4.
            </li>
            <li>
              <b>Unspecified Address</b>: The address <code>::</code> is used as
              an unspecified address, similar to <code>0.0.0.0</code> in IPv4.
            </li>
            <li>
              <b>IPv4-Mapped Addresses</b>: These addresses are used to
              represent IPv4 addresses in an IPv6 format. They have the format
              <code>::ffff:a.b.c.d</code>, where <code>a.b.c.d</code> is an IPv4
              address.
            </li>
          </ul>
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
          <div className="grid grid-cols-2 w-full">
            <span className="w-full"></span>
            <Link to="/header-format">
              <button className="btn mb-8 w-full text-white hover:bg-violet-800 bg-violet-600 cursor-pointer">
                IPv6 Header Format
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
        src="https://codesandbox.io/p/devbox/ipv6-7fdwkc?file=%2Faddress_types.py%3A1%2C17"
      ></iframe>
    </section>
  );
};

AddressTypes.propTypes = {
  handleAnswer: PropTypes.func.isRequired,
};

export default AddressTypes;
