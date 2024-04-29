import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const questions = [
  {
    title:
      "What is the primary security feature of IPv6 that provides end-to-end encryption and authentication of packets?",
    options: [
      {
        id: 0,
        text: "IPsec",
        isCorrect: true,
      },
      {
        id: 1,
        text: "Extension Headers",
        isCorrect: false,
      },
      {
        id: 2,
        text: "NDP Security",
        isCorrect: false,
      },
      {
        id: 3,
        text: "ASLR",
        isCorrect: false,
      },
    ],
  },
  {
    title:
      "What is the primary security risk of IPv6 that increases the attack surface of networks?",
    options: [
      {
        id: 4,
        text: "Increased Attack Surface",
        isCorrect: true,
      },
      {
        id: 5,
        text: "New Vulnerabilities",
        isCorrect: false,
      },
      {
        id: 6,
        text: "Lack of Visibility",
        isCorrect: false,
      },
      {
        id: 7,
        text: "Dual-Stack Networks",
        isCorrect: false,
      },
    ],
  },
  {
    title: "What is the best practice for securing neighbor discovery in IPv6?",
    options: [
      {
        id: 8,
        text: "Implement IPsec",
        isCorrect: false,
      },
      {
        id: 9,
        text: "Use Secure NDP",
        isCorrect: true,
      },
      {
        id: 10,
        text: "Implement ASLR",
        isCorrect: false,
      },
      {
        id: 11,
        text: "Monitor and Analyze IPv6 Traffic",
        isCorrect: false,
      },
    ],
  },
];

const Security = ({ handleAnswer }) => {
  return (
    <section className="w-full h-full grid grid-cols-2">
      <article className="w-full h-full overflow-y-scroll">
        <div className="w-full h-full p-8">
          <h1 className="text-4xl font-bold my-6">IPv6 Security</h1>
          <p className="tracking-tight leading-loose">
            IPv6 introduces several security features that improve upon the
            security of IPv4. However, it also introduces new security risks and
            challenges. Understanding these security features and risks is
            essential for designing and implementing secure IPv6 networks.
          </p>
          <h5 className="font-semibold text-xl mt-4">Security Features:</h5>
          <ul className="list-disc list-inside pl-6 flex flex-col gap-6 mt-4">
            <li>
              <b>IPsec</b>: IPv6 mandates the implementation of IPsec, which
              provides end-to-end encryption and authentication of packets.
            </li>
            <li>
              <b>Extension Headers</b>: IPv6 introduces new extension headers
              that provide additional security features, such as authentication
              and encryption.
            </li>
            <li>
              <b>Neighbor Discovery Protocol (NDP) Security</b>: IPv6 introduces
              new security features for NDP, such as Secure Neighbor Discovery
              (SEND) and Cryptographically Generated Addresses (CGAs).
            </li>
            <li>
              <b>Address Space Layout Randomization (ASLR)</b>: IPv6 introduces
              ASLR, which makes it more difficult for attackers to predict and
              exploit vulnerabilities.
            </li>
          </ul>
          <br />
          <h5 className="font-semibold text-xl mt-4">Security Risks:</h5>
          <ul className="list-disc list-inside pl-6 flex flex-col gap-6 mt-4">
            <li>
              <b>Increased Attack Surface</b>: IPv6 introduces new protocols and
              features that increase the attack surface of networks.
            </li>
            <li>
              <b>New Vulnerabilities</b>: IPv6 introduces new vulnerabilities,
              such as IPv6-specific denial-of-service (DoS) attacks and
              IPv6-specific exploits.
            </li>
            <li>
              <b>Lack of Visibility</b>: IPv6 introduces new challenges for
              network visibility and monitoring, making it more difficult to
              detect and respond to security threats.
            </li>
            <li>
              <b>Dual-Stack Networks</b>: Dual-stack networks, which run both
              IPv4 and IPv6, introduce new security risks and challenges.
            </li>
          </ul>
          <br />
          <h5 className="font-semibold text-xl mt-4">Best Practices:</h5>
          <ul className="list-disc list-inside pl-6 flex flex-col gap-6 mt-4">
            <li>
              <b>Implement IPsec</b>: Implement IPsec to provide end-to-end
              encryption and authentication of packets.
            </li>
            <li>
              <b>Use Secure NDP</b>: Use secure NDP protocols, such as SEND and
              CGAs, to secure neighbor discovery.
            </li>
            <li>
              <b>Implement ASLR</b>: Implement ASLR to make it more difficult
              for attackers to predict and exploit vulnerabilities.
            </li>
            <li>
              <b>Monitor and Analyze IPv6 Traffic</b>: Monitor and analyze IPv6
              traffic to detect and respond to security threats.
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
            <Link to="/neighbour-discovery">
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
                IPv6 Neighbour Discovery
              </button>
            </Link>
            <span className="w-full"></span>
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
        src="https://codesandbox.io/p/devbox/ipv6-7fdwkc?file=%2Fsecurity.py%3A12%2C22"
      ></iframe>
    </section>
  );
};

Security.propTypes = {
  handleAnswer: PropTypes.func.isRequired,
};

export default Security;
