import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/solid";

const sidebarItems = [
  "Home",
  "COVID-19",
  "Selling",
  "Buying",
  "Shipping",
  "Payment & Payouts",
  "Safety & Reporting",
  "My account & Settings",
  "Community",
  "Not Logged in",
];

const sellingItems = [
  "Selling your items faster",
  "Canceling an order",
  "Paying out your earnings",
  "What is item Bump",
  "Pending balance",
];

const helpcenter = () => {
  return (
    <div className={"px-80"}>
      <>
        <div class="grid grid-cols-5 justify gap-[20rem]">
          <div class="... border-2">
            {/* Side bar */}

            <div className="bg-slate-100 p-2 w-[20rem]">
              <ul>
                {/* {
    sidebarItems.map((item, index) => {
        return (
            <li key={index}
                className= 'text-gray-500 p-4 hover:bg-slate-200 cursor-pointer transition ease-in-out'
            >{item}</li>
        )
        
    })
} */}
                <li className="text-gray-500 p-4 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                  Home
                </li>
                <li className="text-gray-500 p-4 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                  COVID-19
                </li>

                <li>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="w-full text-left text-gray-500 p-4 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                          <div className="">
                            <div>
                              <p>Selling</p>
                              {/* <p className={"font-semibold"}>Selling</p> */}
                            </div>
                          </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="pl-4 text-sm">
                          <div>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              Selling process
                            </p>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              Listing an item
                            </p>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              Selling faster
                            </p>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              Shipping
                            </p>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              Getting paid
                            </p>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              Feedback & Communication
                            </p>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              Returns & Cancellations
                            </p>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              My items
                            </p>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </li>

                <li>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="w-full text-left text-gray-500 p-4 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                          <div className="">
                            <div>
                              <p>Buying</p>
                            </div>
                          </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="pl-4 text-sm">
                          <div>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              Buying process
                            </p>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              Finding an item
                            </p>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              Before you buy
                            </p>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              Making a payment
                            </p>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              Shipping and Delivery
                            </p>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              Feedback & Communication
                            </p>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              Refunds & cancellation
                            </p>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </li>

                <li>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="w-full text-left text-gray-500 p-4 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                          <div className="">
                            <div>
                              <p>Shipping</p>
                            </div>
                          </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="pl-4 text-sm">
                          <div>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              I'm a Seller
                            </p>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              I'm a buyer
                            </p>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </li>

                <li>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="w-full text-left text-gray-500 p-4 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                          <div className="">
                            <div>
                              <p>Payment & Payouts</p>
                            </div>
                          </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="pl-4 text-sm">
                          <div>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              Payment methods
                            </p>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              Vinted Wallet
                            </p>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              Payouts
                            </p>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </li>

                <li>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="w-full text-left text-gray-500 p-4 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                          <div className="">
                            <div>
                              <p>Safety & Reporting</p>
                            </div>
                          </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="pl-4 text-sm">
                          <div>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              Buyer protection
                            </p>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              Seller protection
                            </p>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              Personal safety & security
                            </p>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              Private data usage & protection
                            </p>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              Identity verifications
                            </p>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              Catalog rules
                            </p>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              Community and forum rules
                            </p>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </li>

                <li>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="w-full text-left text-gray-500 p-4 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                          <div className="">
                            <div>
                              <p>My account & Settings</p>
                            </div>
                          </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="pl-4 text-sm">
                          <div>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              New Vinted
                            </p>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              My closet settings
                            </p>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              Profile details
                            </p>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              Shipping & Payment settings
                            </p>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              Vinted Wallet
                            </p>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              Personalization
                            </p>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              Referrals
                            </p>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              Notifications & emails
                            </p>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </li>

                <li>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="w-full text-left text-gray-500 p-4 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                          <div className="">
                            <div>
                              <p>Community</p>
                            </div>
                          </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="pl-4 text-sm">
                          <div>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              Forum
                            </p>
                            <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                              Members
                            </p>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </li>

                <li className="text-gray-500 p-4 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                  Not Logged in
                </li>
              </ul>
            </div>

            {/* end Side bar */}
          </div>
          <div class="col-span-4 border-2 w-[50rem]">
            {/* Home */}

            <div className="bg-white text-left">
              <div className="text-sm text-gray-500 px-[1rem] py-[1rem]">Pick a topic</div>
              <div classname=" ">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-50 px-4 py-2 text-left text-base font-susty focus:outline-none focus-visible:ring">
                        <div className="pr-6">
                          <div>
                            <p className={"font-semibold"}>
                              Selling your items faster
                            </p>
                          </div>
                        </div>
                        <ChevronRightIcon
                          className={`${
                            open ? "rotate-90 transform" : ""
                          } h-5 w-5 text-black`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="max-w-3xl p-4">
                        <h1 className="text-3xl font-bold mt-0 mb-2">
                          Selling your items faster
                        </h1>
                        <p className="pt-4">
                          There are steps you can take to get more attention to
                          your items and sell them quicker and easier:
                        </p>

                        <h1 className="text-3xl mt-6 mb-2">
                          Revamp your listing{" "}
                        </h1>
                        <ul className="pl-4 p-2 list-disc">
                          <li className="pt-1">
                            Update the photos in your listing to make sure the
                            item is clearly visible in all its beauty.
                          </li>
                          <li className="pt-1">
                            Improve the title and description. This helps
                            members find your item via search.{" "}
                          </li>
                          <li className="pt-1">
                            Set a discount for item bundles and encourage
                            members to buy more items from you.
                          </li>
                        </ul>

                        <h1 className="text-3xl mt-6 mb-2">
                          Build a trustworthy profile
                        </h1>
                        <ul className="pl-4 p-2 list-disc">
                          <li className="pt-1">
                            Verify your account to build more trust with other
                            members.
                          </li>
                          <li className="pt-1">
                            Present yourself and your style briefly by filling
                            in the "About you" section in your profile. The
                            description will be visible to the whole community.{" "}
                          </li>
                        </ul>

                        <h1 className="text-3xl mt-6 mb-2">Get noticed</h1>
                        <ul className="pl-4 p-2 list-disc">
                          <li className="pt-1">
                            Bump your items and use Closet Spotlight to boost
                            your closet’s visibility.
                          </li>
                          <li className="pt-1">
                            Upload new items regularly — potential buyers will
                            start following you and they'll be notified when you
                            add something new.
                          </li>
                          <li className="pt-1">
                            Reduce the price of your items. Members who follow
                            you or who have favorited your items will be
                            notified of the discount.
                          </li>
                          <li className="pt-1">
                            Already started a conversation with your buyer? Make
                            an offer to them!
                          </li>
                        </ul>

                        <h1 className="text-xl mt-6 mb-2">Good to know:</h1>
                        <ul className="pl-4 p-2 list-disc">
                          <li className="pt-1">
                            Offering more shipping options may also attract more
                            buyers, as they will have more delivery choices.
                          </li>
                          <li className="pt-1">
                            Your followers see your items on their personalized
                            feeds.
                          </li>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-50 px-4 py-2 text-left text-base font-susty hover:bg-gray-100 focus:outline-none focus-visible:ring">
                      <div className="pr-6">
                        <div>
                          <p className={"font-semibold"}>Canceling an order</p>
                        </div>
                      </div>
                      <ChevronRightIcon
                        className={`${
                          open ? "rotate-90 transform" : ""
                        } h-5 w-5 text-black`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="max-w-3xl p-4">
                      <h1 className="text-3xl font-bold mt-0 mb-2">
                        Canceling an order
                      </h1>
                      <p className="pt-4">
                        A buyer and a seller can cancel their order only if the
                        item hasn’t been shipped yet.{" "}
                      </p>

                      <h1 className="text-3xl mt-6 mb-2">
                        To cancel an order:
                      </h1>
                      <ul className="pl-4 p-2 list-decimal">
                        <li className="pt-1">
                          Open your conversation screen with the other member
                        </li>
                        <li className="pt-1">
                          Press ⓘ at the top-right corner
                        </li>
                        <li className="pt-1">
                          Choose Cancel order and select a reason from the list,
                          or choose Other and type in the reason
                        </li>
                      </ul>

                      <h1 className="text-xl mt-6 mb-2">Good to know:</h1>
                      <ul className="pl-4 p-2 list-disc">
                        <li className="pt-1">
                          A mutual agreement between the buyer and seller about
                          canceling their order will help them avoid automatic
                          negative feedback.
                        </li>
                        <li className="pt-1">
                          After an order is canceled, sellers can press
                          Re-upload on their conversation screen to put the item
                          on sale again.
                        </li>
                        <li className="pt-1">
                          In certain cases, we may cancel an order too.
                        </li>
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-50 px-4 py-2 text-left text-base font-susty hover:bg-gray-100 focus:outline-none focus-visible:ring">
                      <div className="pr-6">
                        <div>
                          <p className={"font-semibold"}>
                            Paying out your earnings
                          </p>
                        </div>
                      </div>
                      <ChevronRightIcon
                        className={`${
                          open ? "rotate-90 transform" : ""
                        } h-5 w-5 text-black`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="max-w-3xl p-4">
                      <h1 className="text-3xl font-bold mt-0 mb-2">
                        Paying out your earnings
                      </h1>
                      <p className="pt-4">
                        Before all else, you should make sure your Vinted Wallet
                        is activated. If you’re about to make your first payout,
                        please complete these simple steps (you’ll only have to
                        do it once).
                      </p>

                      <h1 className="text-xl mt-6 mb-2 font-semibold">
                        To make a payout:
                      </h1>
                      <ul className="pl-4 p-2 list-decimal">
                        <li className="pt-1">Go to your Vinted Wallet</li>
                        <li className="pt-1">Press Pay out to bank account</li>
                      </ul>

                      <p className="pt-4">
                        Your earnings will automatically appear in your bank
                        account in 5 working days after the payout (excluding
                        weekends and public holidays).
                      </p>
                      <p className="pt-4">
                        Here’s what to do if your payout doesn’t appear in your
                        bank account in 5 working days.
                      </p>

                      <h1 className="text-xl mt-6 mb-2 font-semibold">
                        Good to know:
                      </h1>
                      <ul className="pl-4 p-2 list-disc">
                        <li className="pt-1">
                          The minimum withdrawal amount is $0.1
                        </li>
                        <li className="pt-1">
                          Only earnings from completed orders can be paid out —
                          pending balance cannot
                        </li>
                        <li className="pt-1">
                          Only payouts to a bank account are allowed
                        </li>
                        <li className="pt-1">
                          If you were requested to pass an identity check (as
                          part of mandatory regulatory requirements for our
                          payment service provider) your payouts will be stopped
                          until you pass the identity check (KYC).
                        </li>
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-50 px-4 py-2 text-left text-base font-susty hover:bg-gray-100 focus:outline-none focus-visible:ring">
                      <div className="pr-6">
                        <div>
                          <p className={"font-semibold"}>What is item Bump</p>
                        </div>
                      </div>
                      <ChevronRightIcon
                        className={`${
                          open ? "rotate-90 transform" : ""
                        } h-5 w-5 text-black`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="max-w-3xl p-4">
                      <h1 className="text-3xl font-bold mt-0 mb-2">
                        What is Item Bump?
                      </h1>
                      <p className="pt-4">
                        An Item Bump is an automated paid feature that allows
                        more visibility for your items.
                      </p>
                      <p className="pt-4">
                        WhenThe benefits you get from Bumps you bump an item, it
                        is displayed to more members in their item feed/newsfeed
                        and catalog search results – once a day for 3 or 7
                        consecutive days, or until the item is sold (whichever
                        comes first).
                      </p>

                      <h1 className="text-2xl mt-6 mb-2 font-semibold">
                        The benefits you get from Bumps
                      </h1>
                      <p className="pt-4">Item Bumps allow you to:</p>
                      <ul className="pl-4 p-2 list-disc">
                        <li className="pt-1">Reach the right members</li>
                      </ul>

                      <p className="pt-4">
                        A bumped item’s visibility is tailored to a number of
                        specific criteria, e.g. clothing type, sizes or/and the
                        brands another member follows.
                      </p>
                      <ul className="pl-4 p-2 list-disc">
                        <li className="pt-1">See weekly statistics</li>
                      </ul>
                      <p className="pt-4">
                        You will see how many people looked at and interacted
                        with your item.
                      </p>

                      <h1 className="text-xl mt-6 mb-2 font-semibold">
                        How much are Item Bumps?
                      </h1>
                      <p className="pt-4">
                        For the fee, please check out our Price List.{" "}
                      </p>

                      <h1 className="text-xl mt-6 mb-2 font-semibold">
                        Before you order Item Bumps
                      </h1>
                      <p className="pt-4">
                        To make sure you get the most out of bumps, use them
                        only on quality listings that align with our Catalog
                        Rules.{" "}
                      </p>
                      <p className="pt-4">
                        So if needed, update the photos and description of your
                        item first, and when you’re ready, press Bump to begin.{" "}
                      </p>
                      <p className="pt-4">
                        Learn more about how to buy a bump.
                      </p>

                      <h1 className="text-xl mt-6 mb-2 font-semibold">
                        Good to know:
                      </h1>
                      <ul className="pl-4 p-2 list-disc">
                        <li className="pt-1">
                          A Bump is a single-use automated service and is not
                          transferable from one item to another or between
                          members.
                        </li>
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-50 px-4 py-2 text-left text-base font-susty hover:bg-gray-100 focus:outline-none focus-visible:ring">
                      <div className="pr-6">
                        <div>
                          <p className={"font-semibold"}>Pending balance</p>
                        </div>
                      </div>
                      <ChevronRightIcon
                        className={`${
                          open ? "rotate-90 transform" : ""
                        } h-5 w-5 text-black`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="max-w-3xl p-4">
                      <h1 className="text-3xl font-bold mt-0 mb-2">
                        Pending balance
                      </h1>
                      <p className="pt-4">
                        When a buyer pays for an item, this payment appears as
                        ‘pending’ in the seller’s Vinted Wallet. Our payment
                        service provider temporarily stores it until the order
                        is completed.
                      </p>
                      <p className="pt-4">
                        You can use your earnings only after the order is
                        completed. It will get completed after the item’s
                        delivery, specifically:
                      </p>

                      <ul className="pl-4 p-2 list-disc">
                        <li className="pt-1">
                          When the buyer hits Everything’s OK
                        </li>
                        <li className="pt-1">
                          2 days later, if the buyer doesn’t report any issues
                        </li>
                        <li className="pt-1">
                          If an issue is raised during the 2 days period, after
                          the resolution of the issue
                        </li>
                      </ul>
                      <p className="pt-4">
                        We'll transfer your earnings to your Vinted Wallet in 2
                        working days after your order is successfully closed.
                      </p>

                      <h1 className="text-xl mt-6 mb-2 font-semibold">
                        Available balance
                      </h1>
                      <p className="pt-4">
                        You can use all funds in ‘available balance’ in 2 ways.
                        You can make a payout to your bank account or use them
                        to buy from other members on Vinted.
                      </p>
                      <p className="pt-4">
                        The available balance can cover an item’s price, as well
                        as Buyer Protection fee and shipping costs. If you don’t
                        pay out the money, it will apply to your next Vinted
                        purchase automatically.
                      </p>
                      <p className="pt-4">
                        Please note that you might have to pass an identity
                        check. It’s part of mandatory regulatory requirements
                        applicable to our payment service provider.
                      </p>

                      <h1 className="text-xl mt-6 mb-2 font-semibold">
                        Why we use pending balance
                      </h1>
                      <p className="pt-4">
                        Our payment service provider stores money under ‘pending
                        balance’ to temporarily delay it from reaching the
                        seller. This is a common practice in online
                        marketplaces. It helps us make Vinted safe and secure
                        for both buyers and sellers.
                      </p>
                      <p className="pt-4">
                        If something goes wrong, we may refund the buyer as per
                        our Refund Policy. Though, you can mutually agree on a
                        different resolution.
                      </p>
                      <p className="pt-4">
                        Your funds and private details are safe and will never
                        be disclosed.
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>

            {/* End Home */}
          </div>
        </div>
      </>
    </div>
  );
};

export default helpcenter;
