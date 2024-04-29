import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const questions = [
  {
    title:
      "What is the purpose of the Router Solicitation message in IPv6 Neighbor Discovery?",
    options: [
      {
        id: 0,
        text: "To request the link-layer address of a neighbor",
        isCorrect: false,
      },
      {
        id: 1,
        text: "To advertise a router's presence and provide configuration information",
        isCorrect: false,
      },
      {
        id: 2,
        text: "To request router advertisements from nearby routers",
        isCorrect: true,
      },
      {
        id: 3,
        text: "To detect when a neighbor is no longer reachable",
        isCorrect: false,
      },
    ],
  },
  {
    title:
      "What is the purpose of the Neighbor Advertisement message in IPv6 Neighbor Discovery?",
    options: [
      {
        id: 4,
        text: "To request the link-layer address of a neighbor",
        isCorrect: false,
      },
      {
        id: 5,
        text: "To provide the link-layer address of a host",
        isCorrect: true,
      },
      {
        id: 6,
        text: "To advertise a router's presence and provide configuration information",
        isCorrect: false,
      },
      {
        id: 7,
        text: "To detect when a neighbor is no longer reachable",
        isCorrect: false,
      },
    ],
  },
  {
    title:
      "What is the purpose of the Redirect message in IPv6 Neighbor Discovery?",
    options: [
      {
        id: 8,
        text: "To request the link-layer address of a neighbor",
        isCorrect: false,
      },
      {
        id: 9,
        text: "To provide the link-layer address of a host",
        isCorrect: false,
      },
      {
        id: 10,
        text: "To inform a host of a better first hop for a destination",
        isCorrect: true,
      },
      {
        id: 11,
        text: "To detect when a neighbor is no longer reachable",
        isCorrect: false,
      },
    ],
  },
];

const NeighbourDiscovery = ({ handleAnswer }) => {
  return (
    <section className="w-full h-full grid grid-cols-2">
      <article className="w-full h-full overflow-y-scroll">
        <div className="w-full h-full p-8">
          <h1 className="text-4xl font-bold my-6">IPv6 Neighbor Discovery</h1>
          <p className="tracking-tight leading-loose">
            IPv6 Neighbor Discovery is a protocol that allows devices on the
            same link to discover each other&apos;s presence, determine each
            other&apos;s link-layer addresses, and maintain reachability
            information. It is similar to the Address Resolution Protocol (ARP)
            in IPv4, but with additional features and improvements.
          </p>
          <h5 className="font-semibold text-xl mt-4">
            Neighbor Discovery Protocol (NDP) Messages:
          </h5>
          <p className="tracking-tight leading-loose">
            The Neighbor Discovery Protocol uses five types of messages to
            perform its functions:
          </p>
          <ul className="list-disc list-inside pl-6 flex flex-col gap-6 mt-4">
            <li>
              <b>Router Solicitation (RS)</b>: Sent by a host to request router
              advertisements from nearby routers.
            </li>
            <li>
              <b>Router Advertisement (RA)</b>: Sent by routers to advertise
              their presence and provide configuration information to hosts.
            </li>
            <li>
              <b>Neighbor Solicitation (NS)</b>: Sent by a host to request the
              link-layer address of a neighbor.
            </li>
            <li>
              <b>Neighbor Advertisement (NA)</b>: Sent by a host in response to
              a Neighbor Solicitation message, providing its link-layer address.
            </li>
            <li>
              <b>Redirect</b>: Sent by a router to inform a host of a better
              first hop for a destination.
            </li>
          </ul>
          <br />
          <h5 className="font-semibold text-xl mt-4">
            Neighbor Discovery Process:
          </h5>
          <p>The Neighbor Discovery process involves the following steps:</p>
          <ul className="list-disc list-inside pl-6 flex flex-col gap-6 mt-4">
            <li>
              <b>Router Discovery</b>: A host sends a Router Solicitation
              message to discover nearby routers.
            </li>
            <li>
              <b>Address Resolution</b>: A host sends a Neighbor Solicitation
              message to resolve the link-layer address of a neighbor.
            </li>
            <li>
              <b>Neighbor Unreachability Detection</b>: A host detects when a
              neighbor is no longer reachable.
            </li>
            <li>
              <b>Duplicate Address Detection</b>: A host detects when an address
              is already in use by another device on the link.
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
          <div className="grid grid-cols-2">
            <Link to="/header-format">
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
                IPv6 Header Format
              </button>
            </Link>
            <Link to="/security">
              <button className="btn mb-8 w-full text-white hover:bg-violet-800 bg-violet-600 cursor-pointer">
                IPv6 Security
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
        src="https://codesandbox.io/p/devbox/ipv6-7fdwkc?file=%2Fneighbour_discovery.py%3A15%2C1"
      ></iframe>
    </section>
  );
};

NeighbourDiscovery.propTypes = {
  handleAnswer: PropTypes.func.isRequired,
};

export default NeighbourDiscovery;
