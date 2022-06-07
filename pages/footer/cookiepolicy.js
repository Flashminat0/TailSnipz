import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

const CookiePolicy = () => {
  return (
    <>
      <div className="py-12 bg-white ml-20 mr-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-left">
            <p className="mt-2 text-3xl leading-8 font-semi-bold text-gray-900 sm:text-4xl">
              Cookie Policy
            </p>
            <p className="leading-normal mt-2 ">
              Date last updated: 01-21-2022
            </p>
            <p className="leading-normal mt-5">
              When you use Vinted Website or App (jointly “Platform”), we and
              our partners may automatically store and/or access information on
              your device via cookies or similar technologies to process
              personal data for the operation of the Platform, manage behavioral
              advertising sent to you on the Platform and third-party sites, and
              analyze your use of the Platform. This Cookie Policy explains what
              cookies are, how they are used on our Platform, and how you can
              manage them.
            </p>
            <p className="leading-normal mt-5">
              For general information on Vinted’s data practices, please read
              our Privacy Policy. The capitalized terms used in this Cookie
              Policy have the same meaning as in the Privacy Policy.
            </p>
            <p className="leading-relaxed mt-5 ml-4">
              <ol className="list-decimal">
                <li className="no-underline hover:underline text-susty font-medium">
                  What are cookies?
                </li>
                <li className="no-underline hover:underline text-susty font-medium">
                  Now this is a story all about how, my life got flipped turned
                  upside down
                </li>
                <li className="no-underline hover:underline text-susty font-medium">
                  Now this is a story all about how, my life got flipped turned
                  upside down
                </li>
                <li className="no-underline hover:underline text-susty font-medium">
                  Now this is a story all about how, my life got flipped turned
                  upside down
                </li>
                <li className="no-underline hover:underline text-susty font-medium">
                  Now this is a story all about how, my life got flipped turned
                  upside down
                </li>
              </ol>
            </p>
            <div>
              <p className="leading-loose mt-5 text-4xl">
                1. What are cookies?
              </p>
            </div>
            <p className="leading-normal mt-2 text-md">
              Cookies are small text files that are stored by your browser on
              your device (e.g., computer, mobile phone, tablet) when you browse
              websites. Other technologies, including any means for storing data
              on your web browser or device, identifiers associated with your
              device, and other software, are used for similar purposes. They
              are widely used to make websites work or function in a better,
              more efficient way. In this Cookie Policy, we refer to all of
              these technologies as “cookies”. 
              
              Unless stated otherwise, the
              cookies we use are necessary for the functionality and performance
              of the Platform. This includes cookies that enable you to register
              for the protected areas of our Platform, to buy an item or to use
              the electronic payment system. Some cookies are deleted from your
              device after the end of your browser session (session cookies).
              The information saved in the necessary cookies will be used by us
              solely to provide the services and functions requested.
            </p>
            <div>
              <p className="leading-loose mt-5 text-4xl">
                2. Why do you use cookies?
              </p>
            </div>
            <p className="leading-normal mt-2 ">
              {" "}
              This Privacy Policy applies to the online platform Vinted
              (“Website”) and to the associated app (“App”) (the Website and the
              App are jointly referred to as the “Platform”) intended for United
              States users. The Platform is operated by Vinted Inc., a company
              registered in Delaware, with business location at C/o AG
              Accounting 735 Geary St. #303 San Francisco, CA 94109. The
              operator is further referred to as “We”, “Us” or “Vinted”. More
              details about how to get in contact with us can be found at the
              end of this Privacy Policy under No. 7. We take your privacy
              extremely seriously. All personal data will be collected, stored
              and used by us in accordance with the European Union General Data
              Protection Regulation No. 2016/679 (“GDPR”) and/or other
              applicable statutory regulations. If you are a California
              resident, please see our California Privacy Policy. The services
              offered by us via the Website and/or App can function only if we
              collect, store, transfer, delete and/or otherwise use (“collect
              and use”) specific data relating to you (“personal data” or
              “data”). Personal data means all information relating to an
              identified or identifiable natural person such as your name, date
              of birth, address, or email address. This Privacy Policy describes
              what type of data we collect from you and for what purposes we
              collect and use it when you use the services offered by Us on the
              Platform. This Privacy Policy also contains important information
              on the protection of your data, especially the statutory rights
              you have in connection with it. Certain services on our Platform
              are offered by third-party suppliers. When you use these services,
              the data protection regulations that govern third-party suppliers
              will then apply in addition to this data protection statement.
              Prior to your use of such services, the third-party suppliers may
              require you to provide permission under the data protection law.
              Under applicable data protection laws, Vinted is obligated to
              inform you about data processing and Vinted fulfills this
              obligation within this Privacy Policy. This Privacy Policy and any
              parts of it are not meant as contractual clauses and do not form
              part of the general terms and conditions (“GTC”) as a contract
              that is concluded with registered users. Under applicable data
              protection laws, Vinted can process data that is necessary for the
              fulfillment of a contract with you or necessary for taking steps
              at your request prior to entering into a contract (Art. 6 (1) (b)
              GDPR). References to the GTC should always be understood as
              information on data processing (Art. 13 and 14 GDPR) and never as
              clauses that form part of the GTC. By using the Platform and our
              services, you enter into a legally binding contract between you
              and Vinted, the conditions of which are described in the GTC.
            </p>
            <div className="w-full px-4 pt-8">
              <div className="mx-auto w-full w-auto rounded-2xl bg-white p-2">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between  px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75">
                        <span>
                          2.1.1. To enable registration on the Platform
                        </span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-purple-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        Legal basis for the collection and use of data is the
                        fulfillment of a contract (GTC) to which you are party
                        (Art. 6 (1) (b) of the GDPR). We collect and use your
                        personal data for this purpose until your Vinted account
                        is deactivated or inactive for five (5) years. If you
                        decide to remove a message from a conversation, it will
                        be instantly hidden for you and the recipient, and
                        permanently deleted after three (3) months from the
                        moment you remove it. Legal basis for storing the
                        removed message data is our legitimate interest to
                        ensure the safety of our Platform and our members (Art.
                        6 (1) (f) of the GDPR).
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between  px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75">
                        <span>
                          2.1.2. To enable registration on the Platform
                        </span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-purple-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        Legal basis for the collection and use of data is the
                        fulfillment of a contract (GTC) to which you are party
                        (Art. 6 (1) (b) of the GDPR). We collect and use your
                        personal data for this purpose until your Vinted account
                        is deactivated or inactive for five (5) years. If you
                        decide to remove a message from a conversation, it will
                        be instantly hidden for you and the recipient, and
                        permanently deleted after three (3) months from the
                        moment you remove it. Legal basis for storing the
                        removed message data is our legitimate interest to
                        ensure the safety of our Platform and our members (Art.
                        6 (1) (f) of the GDPR).
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy;
