"use client"
import DashboardNav from "components/Navbar/DashboardNav"
import { useState } from "react"
import { motion } from "framer-motion"
import Footer from "components/Footer/Footer"
import FAQsComponent from "components/CardComponent/faqs-component"
import Features from "components/CardComponent/features"
import Seamless from "components/CardComponent/seamless"
import HowItWorks from "components/CardComponent/how-it-works"
import TestimonialSection from "components/CardComponent/testimonials-section"
import Image from "next/image"
import MobileNav from "components/Navbar/MobileNav"

export default function Dashboard() {
  const [hover, setHover] = useState(false)
  const [hoverCall, setHoverCall] = useState(false)

  const [cvHover, setCvHover] = useState(false)
  const [hoverCard, setHoverCard] = useState(false)
  const [copied, setCopied] = useState(false)
  const [callCopied, setCallCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("cygnux696@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000) // Reset copied state after 2 seconds
  }

  const handleCallCopy = () => {
    navigator.clipboard.writeText("08129859405")
    setCallCopied(true)
    setTimeout(() => setCallCopied(false), 2000) // Reset copied state after 2 seconds
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between children
      },
    },
  }

  // Child item animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="   h-full w-full">
      <div className="   max-sm:w-full">
        <DashboardNav />
        <MobileNav />
        <div className="paddings flex h-auto w-full max-sm:mt-20  md:mt-32">
          <div className="primary-200  relative   w-full overflow-hidden rounded-[15px] p-6 max-sm:pb-32 md:flex md:h-[408px]">
            <div className="img-element-twenty-four absolute right-40 top-32 max-sm:hidden"></div>
            <div className="img-element-twenty-four absolute bottom-[-80px] left-[-20px] md:hidden"></div>

            <div className="flex w-full items-center justify-between">
              <div className="flex max-w-[831px] flex-col gap-2 md:pl-20">
                <p className="text-start text-[45px] font-bold text-[#FFFFFF] max-sm:text-4xl">Privacy Policy</p>
                <p className="text-[#FFFFFF]">
                  We respect your privacy as a funder, donor, supporter, and/or user of our website. We are strongly
                  committed to keeping any personal information we obtain from you or about you secure and to being
                  transparent about the ways in which we use it.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="mb-16 flex flex-col justify-center max-sm:px-4 max-sm:pt-4 xl:px-64 xl:pt-20">
          <p className="paragraph pl-8">
            Updated March 26, 2025
            <b className="paragraph-2"> 15 min read</b>
          </p>
          <div className="mt-4 flex items-start gap-4 xl:items-center">
            <Image alt="" src="/policy/messages-3.png" width={24} height={24} />
            <p className="paragraph underline" style={{ textDecorationColor: "#05F29A", textUnderlineOffset: "4px" }}>
              This Privacy Policy is intended to help you understand the types of information we gather and cookies we
              use when you use our services. It describes our practices for protecting, using, and sharing such
              information, and the choices you have regarding use.
            </p>
          </div>
          <div className="paragraph mt-10 flex flex-col gap-4 pl-8">
            <p>
              CHATS, including its affiliates and subsidiaries (collectively referred to as “CHATS,” “we,” “our,” or
              “us”), provides this Privacy Notice (“Notice”) to explain how we collect, use, and share your information.
              This Notice applies to data collected both offline and through our products or services, including when
              you access the CHATS platform, mobile applications, or use any other related services (collectively, the
              “Services”).
            </p>
            <p>
              Before accessing or using the Services, please review this Notice carefully. By using any part of the
              Services, you acknowledge that you have read, understood, and agree to the collection, use, and disclosure
              of your information as described. To the extent permitted by law, this Notice is legally binding.
            </p>
            <p>
              If you have any questions about how we use your personal information and how we comply with our
              responsibilities, please contact us as follows:
            </p>
            <ul className="list-disc  pl-4">
              <li>Email:</li>
              <li className="my-3">Call:</li>
              <li>Write: No. 3 Rabat Street, Wuse zone 6, Abuja Nigeria.</li>
            </ul>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">SCOPE OF THIS NOTICE</h4>
              <p>This Notice does not cover the privacy practices of:</p>
              <ul className="">
                <li>1. Fundraiser organizers (“Organizers”).</li>
                <li className="my-3">2. Nonprofit organizations that use our platform (“Clients”).</li>
                <li>3. Donors, Grantors and persons with legal access.</li>
              </ul>
              <p>
                These entities may handle your data independently, and their practices are subject to their own privacy
                policies. CHATS is also not responsible for data processed when acting as a “processor” or “service
                provider” on behalf of third parties. In such cases, you should consult the relevant third-party privacy
                policy to understand how your information is handled.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">INFORMATION WE COLLECT</h4>
              <p>
                Convexity Humanitarian Aid Transfer Solution CHATS is a solution developed by Convexity Technologies Ltd
                a company based in Nigeria to provide humanitarian solutions. Our services are operated in Nigeria and
                as such the personal information we collect will be transferred to us, and there are aspects of this
                Policy that only apply when we are required to comply with specific laws e.g. the European data
                protection law, the General Data Protection Regulation (“GDPR”). If you are interacting with us from the
                EU, EU data protection law is likely to apply.
              </p>
              <p>
                We collect information through various channels, including data you provide directly to us, data
                collected from other sources, and data automatically collected when you interact with the Services.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xl">A. Information You Provide Directly</h4>
              <p>You may provide us with information in several ways, including when you:</p>
              <ul className="list-disc  pl-4">
                <li>Create an account or register for the Services.</li>
                <li className="my-3">Launch a fundraiser or participate in events.</li>
                <li>Donate to a fundraiser or interact with other users through comments or feedback.</li>
                <li className="my-3">
                  Contact us for support or troubleshooting, or participate in surveys and promotions.
                </li>
                <li>The information you provide may include:</li>
              </ul>
              <p>
                Account Information: Your name, email address, phone number, country, postal code, and any additional
                data you choose to provide (e.g., profile picture). If you are registering as an organization,
                additional details such as your organization&apos;s name, role, tax ID, and nonprofit status may be
                collected.
              </p>
              <p>
                Fundraiser Information: Information related to your fundraiser, including titles, categories, goals,
                images, videos, and descriptions.
              </p>
              <p>
                Financial Information: Payment information (e.g., for donations or withdrawals) is processed by
                third-party payment processors, who may collect personal data for fraud prevention and service
                improvements. CHATS does not store or access your financial data.
              </p>
              <p>
                When you make a donation to us via a third party, they may provide us with details of your donation and,
                where you have given that third party permission, they may share with us other personal information such
                as your name, location, mailing address, and contact details.
              </p>
              <p>
                Public and Private Communications: Comments, feedback, or notes you post through the Services may be
                public by default. Public posts will be visible to other users, so please be cautious when sharing
                sensitive information.
              </p>
              <p>
                Sensitive Information: You may choose to provide sensitive information (e.g., political opinions, race,
                ethnicity, health data) related to your fundraiser. By doing so, you consent to the public availability
                of this information and acknowledge your responsibility to obtain the appropriate consent when sharing
                data about third parties.
              </p>
              <p>
                Customer Support Interactions: Information provided during customer service interactions (e.g., chat
                transcripts) may be stored. We request that you avoid sharing sensitive personal or financial
                information unless required.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xl">B. Information We Collect from Other Sources</h4>
              <p>We may collect data from third-party sources, including:</p>
              <p>
                Social Media Accounts: If you link your social media accounts (e.g., Facebook, X) or use features like
                YouTube video uploads, we may access information (e.g., name, photo) based on your privacy settings.
                CHATS is not responsible for the privacy practices of these third-party platforms, and their data
                handling is governed by their own privacy policies.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xl">C. Biometric Information</h4>

              <p>
                For identity verification and fraud prevention, we may partner with vendors to collect biometric data
                (e.g., scans of government-issued IDs). With your consent, these vendors may use facial recognition
                technology to verify your identity. CHATS does not store or maintain biometric data, which is governed
                by the retention policies of our vendors.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">HOW WE USE YOUR INFORMATION</h4>
              <p>We use the information we collect for the following purposes:</p>
              <ul className="list-disc  pl-4">
                <li>
                  To provide, operate, and maintain our services, including facilitating transactions and managing user
                  accounts.
                </li>
                <li className="my-3">To verify user identities and prevent fraudulent activities.</li>
                <li>To troubleshoot issues and assist with customer inquiries.</li>
                <li className="my-3">
                  To send important updates about our services, including notifications, newsletters, and promotional
                  offers (where applicable).
                </li>
                <li>To provide you with information or services you have requested and communicate with you.</li>
                <li className="my-3">To invite you to talks, events, and other engagements hosted by us.</li>
                <li>To acknowledge and thank donors for their support.</li>
                <li className="my-3">To comply with applicable legal obligations and regulatory requirements.</li>
                <li>To ensure the security, integrity, and lawful use of our platform.</li>
                <li className="my-3">To prevent fraud, misuse of services, and other harmful activities.</li>
                <li>To establish, defend, or enforce legal claims.</li>
                <li className="my-3">To analyze, evaluate, and improve our services, programs, and user experience.</li>
                <li>To tailor recommendations, features, and content to enhance your experience.</li>
                <li className="my-3">For research and analytical purposes.</li>
                <li>To administer financial transactions between us.</li>
                <li className="my-3">To recruit employees and volunteers.</li>
                <li>To ensure we do not contact individuals who have opted out of communications</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">SHARING YOUR INFORMATION</h4>
              <p>
                As a matter of policy we will not sell or share personal information about you to third parties in ways
                different from what is disclosed in this Privacy Policy. However, we may disclose your personal
                information:
              </p>
              <p>We may share your personal information in the following circumstances:</p>
              <ul className="pl-4">
                <li>1. When required to comply with applicable laws, regulations, or legal processes.</li>
                <li className="my-3">
                  2. With our legal, financial, and other professional advisors when necessary to protect our interests
                </li>
                <li>
                  3. To safeguard your safety, prevent fraud, or protect the security of our website, personnel, and
                  other users.
                </li>
                <li className="my-3">
                  4. In the event of a merger, acquisition, restructuring, or sale of assets, your personal information
                  may be disclosed to potential or actual buyers or transferees.
                </li>
                <li>
                  5. With trusted third-party vendors who assist us in providing and improving our services, such as
                  payment processors and customer support platforms.
                </li>
                <li className="my-3">
                  6. When required by law, to respond to legal requests, or to protect CHATS&apos;s legal rights.
                </li>
              </ul>
              <p>
                Except in the cases listed above, we will generally inform you and, where necessary, seek your consent
                before sharing your personal information with third parties.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">YOUR RIGHTS AND CHOICES</h4>

              <ul className="list-disc pl-4">
                <li>You may have certain rights under applicable data protection laws, including:</li>
                <li className="my-3">Requesting access to the personal information we hold about you.</li>
                <li>Requesting corrections to your personal information if it is inaccurate.</li>
                <li className="my-3">Requesting the deletion of your personal information in certain circumstances.</li>
                <li>
                  Choosing not to receive marketing communications from us by following the instructions in those
                  messages.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">DATA SECURITY</h4>
              <p>
                We implement security measures designed to protect your information from unauthorized access,
                disclosure, or destruction.
              </p>
              <p>
                All personal information is stored securely. We endeavor to protect your personal information and employ
                both appropriate technical and procedural methods, such as commercially reasonable administrative,
                technical, and physical safeguards against accidental or unlawful destruction or loss, or unauthorized
                disclosure, access or use.
              </p>
              <p>
                To prevent unauthorized access to data we have a number of security protocols, internal policies, and
                technologies. These include website SSL encryption, password management, multi-factor authentication,
                and other techniques.
              </p>
              <p>
                Please be aware that, despite our best efforts, no security measures are perfect or impenetrable and any
                transmission of personal information is at your own risk and we do not guarantee the absolute security
                of your information.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">CHANGES TO THIS PRIVACY NOTICE</h4>
              <p>
                We may update this Notice from time to time to reflect changes in our practices or for other
                operational, legal, or regulatory reasons. If we make material changes, we will notify you by posting
                the updated Notice on our platform and indicating the date of the update.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">CONTACT US</h4>
              <p>
                If you have any questions about this Privacy Notice or how your information is handled, please contact
                us
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xl">C. Information That is Passively or Automatically Collected:</h4>
              <h6>I. Device & Usage Information:</h6>
              <p>
                When you interact with CHATS through our Services, we automatically receive and store certain
                information from devices that you use to access the Services such as your IP address, location and
                essential cookies. This information is collected passively by using various technologies and includes
                the type of Internet browser or mobile device you use, any website from which you have come to the
                Services, your operating system, and inferred location data through an IP address that identifies the
                city and state where you logged into the Services. CHATS either stores such information itself or such
                information is included in databases owned and maintained by CHATS, and/or its agents or vendors.
              </p>
              <h6>II. Location Information:</h6>
              <p>
                When you use the Services to organize a fundraiser, the Services may require that you provide your
                postcode/zip code, city or town, and state or province of residence. Please keep in mind that other
                users of the Services can view your postcode/zip code, city or town, and state or province of residence
                in connection with the fundraiser. If you install our mobile application, we may ask you to grant us
                access to your mobile device&apos;s precise geolocation data. If you grant such permission, we may
                collect information about your precise geolocation, and we may use that information to improve the
                Services, such as providing you with location-based features (e.g. to prepopulate your post code/zip
                code or to identify fundraisers near you). We also use your location information as described in this
                Notice, such as described above under “Device & Usage Information”, and in an aggregate way, as
                described below in the “Aggregated Data” section. You may opt out of providing your geolocation
                information in your device&apos;s settings.
              </p>
              <h6>III. Cookies and Other Electronic Technologies:</h6>
              <p>
                We and our vendors collect cookies for use on the Services, if we are unable to collect your
                information, we may not be able to provide you with the Services or assist you with your questions.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">OUR USE OF INFORMATION COLLECTED</h4>
              <p>
                CHATS uses the information collected from the Services in a manner that is consistent with this Notice.
                We may use the information that you provide (or otherwise permit the Services to access) for the
                following purposes:
              </p>
              <ul className="list-disc  pl-4">
                <li>
                  Provide, operate, and maintain the Services, including to register and maintain your account,
                  facilitate the Know Your Customer (KYC) verification process and to complete transactions;
                </li>
                <li className="my-3">
                  Communicate with you for various purposes, including to help you fundraise more, or for administrative
                  purposes (e.g., to provide services and information that you request or to respond to comments and
                  questions) regarding the Services;
                </li>
                <li>Request your feedback;</li>
                <li className="my-3">Personalization, marketing, and advertising;</li>
                <li>
                  Analyze, improve, modify, customize, and measure the Services, including to train our artificial
                  intelligence/machine learning models;
                </li>
                <li className="my-3">Develop new products and services and other research and development;</li>
                <li>Verify your identity and to detect and prevent fraud or other misuses of the Services;</li>
                <li className="my-3">Maintain the security of your account and any associated fundraisers;</li>
                <li>
                  Comply with legal obligations, law enforcement requests and legal process and to protect our rights,
                  privacy, safety, or property, and/or that of our affiliates, you, or other parties, including to
                  enforce our Terms of Service and any other agreements; and
                </li>
                <li className="my-3">Carry out any other purpose for which the information was collected.</li>
              </ul>
              <p>
                We may combine information that we collect from you through any or all of the Services with information
                that we obtain from other sources. For example, we may compile information from a variety of sources to
                generate inferences about you, such as inferences about your likely interests in making charitable or
                other donations and the potential size of such donations, starting peer-to-peer fundraisers, signing up
                for recurring donations or other similar indicators.
              </p>
              <p>
                We may also aggregate and/or de-identify information collected through the Services. We may use and
                disclose de-identified or aggregated data for any purpose, including, without limitation, research and
                marketing purposes.
              </p>
              <p>
                We may communicate with you regarding your CHATS account by SMS, MMS, or text message. For example, when
                setting up your CHATS account, if you click “Send code” by “Text Message,” you agree to receive
                automated and nonautomated text messages related to your account from or on behalf of CHATS at the phone
                number provided. You can reply STOP to such text messages to cancel, except for automated text messages
                related to the security of your account. Message frequency will vary. In the event you change or
                deactivate your mobile telephone number, you agree to promptly update your CHATS account information to
                ensure that your messages are not misdirected. Please note that your wireless service carrier&apos;s
                standard charges, message and data rates, and other fees may apply where you access the Services through
                a mobile device. In addition, downloading, installing, or using certain Services on a mobile device may
                be prohibited or restricted by your carrier, and not all Services may work with all carriers or devices.
              </p>
              <p>
                We may also employ machine learning and other analytics that make inferences about some characteristics
                of our users. We use these tools to tailor emails to you, to show and prioritize causes, fundraisers,
                and pages we think you&apos;ll be interested in, to protect you and your account from misuse, and make
                suggestions about how much you may want to fundraise or donate.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">OUR DISCLOSURE OF INFORMATION COLLECTED ABOUT YOU</h4>
              <p>
                There are certain circumstances in which we disclose information collected about you with certain other
                parties without further notice to you, as set forth below.
              </p>
              <h4 className="text-xl">A. Business Transfers:</h4>

              <p>
                As we develop our business, we might sell or buy businesses or assets. In the event of a corporate sale,
                merger, reorganization, dissolution, similar event, or steps taken in anticipation of such events (e.g.,
                due diligence in a transaction), user information may be part of the reviewed and transferred assets.
              </p>
              <h4 className="text-xl">B. Affiliates and Subsidiaries:</h4>
              <p>
                We disclose your personal information among the CHATS entities, including our affiliates and
                subsidiaries, for purposes consistent with this Notice, such as to provide our Services, including
                hosting; marketing, and publicizing fundraisers; providing you with customer support; administering
                funds in connection with fundraisers; preventing fraud and misuse; authenticating donors; sending you
                communications; improving Services offered by the various CHATS entities and conducting the other
                activities described in this Notice.
              </p>
              <h4 className="text-xl">C. Agents, Consultants, and Vendors:</h4>
              <p>
                CHATS contracts with other companies to help us perform certain business-related functions, and we
                provide access to or disclose your information with these companies so they can perform services for us.
                Examples of such functions include marketing, mailing information, data storage, security, identity
                verification, fraud prevention, payment processing, preventing fraud and misuse, legal services, and
                database maintenance.
              </p>
              <h4 className="text-xl">D. Legal Requirements:</h4>
              <p>
                We may transfer, disclose to, and preserve your information for courts, law enforcement, governmental or
                public authorities, tax authorities, or authorized third parties, if and to the extent we are required
                or permitted to do so by law or where disclosure is reasonably necessary to:
              </p>
              <ul className="list-disc  pl-4">
                <li>comply with our legal obligations,</li>
                <li className="my-3">comply with a valid legal request (such as a subpoena or court order),</li>
                <li>respond to claims asserted against us,</li>
                <li className="my-3">
                  respond to a valid legal request relating to a criminal investigation to address alleged or suspected
                  illegal activity or to respond to or address any other activity that may expose us, you or any other
                  of our users or members of the public to imminent harm, legal or regulatory liability,
                </li>
                <li>enforce and administer our Terms of Service or other policies, or</li>
                <li className="my-3">
                  protect the rights, property or personal safety of CHATS, its affiliates, its employees, its users, or
                  members of the public.
                </li>
              </ul>
              <h4 className="text-xl">E. Organizers, Nonprofit Beneficiaries, and Clients:</h4>
              <p>
                We may disclose your information to Organizers, which may or may not be the same as the Beneficiaries of
                the fundraiser. For example, if you donate to a fundraiser for an individual, we may disclose your name
                and donation amount to the Organizer who may in some instances also be the Beneficiary. Likewise, if you
                donate to a nonprofit through, you direct us to disclose your donation, contact information and any
                other information you provide to the applicable nonprofit.
              </p>
              <p>
                Organizers may create fundraisers designating a nonprofit organization as a Beneficiary. Where a
                nonprofit organization is designated as the Beneficiary, that nonprofit organization may access certain
                information about the Campaign Organizer and donor information, including the donor&apos;s name, email
                address, donation amount, date of transaction, transaction identification number, and name of the
                campaign. CHATS contractually requires the nonprofit organization to use such information solely to
                communicate with you about your donation and for legal and auditing requirements. CHATS may authorize
                nonprofit organizations to process your information for other purposes (such as marketing) if you opt-in
                to that processing.
              </p>
              <p>
                Third Party and their Vendors/Partners may power the donation pages and other activities, such as event
                hosting for Clients. If you donate to a nonprofit through a -powered webpage, you direct us to disclose
                your donation and contact information to the applicable nonprofit, and such information shall also be
                subject to the privacy policies and practices of that Third party. The Third party may also direct us to
                further disclose your personal information to others such as CRM tools or other integration partners
                used by the relevant Third Party. We may also disclose certain information about you, such as
                information about your interests and donation preferences, to the Third Party who may use such data for
                their fundraising and marketing operations.
              </p>
              <p>
                Anonymous” Donations Limited to Public Activity Feeds: If you selected not to be named publicly on the
                public fundraiser pages on the Services, while your donation will be designated as “anonymous” on the
                public activity feed, your name and other information may still be visible to the Third Party,
                Organizer, any of their team members and the Beneficiary, and will be otherwise processed in accordance
                with this Notice.
              </p>

              <h4 className="text-xl">F. Your Consent</h4>
              <p>
                In certain situations, we may disclose your information when you consented to the disclosure of your
                information. For example, we may partner with third party organizations to arrange for specific
                fundraisers. If you consent to our providing your contact information to a specific partner, we will
                disclose the following information with the partner organization: your name, email address and other
                information you have provided in connection with your donation to the specific fundraiser. Additionally,
                with the applicable Organizer&apos;s or Beneficiary&apos;s consent, we may provide their personal
                information to journalists and media to help amplify a campaign.
              </p>
              <h4 className="text-xl">G. Aggregated Data</h4>
              <p>
                We aggregate, anonymize and/or de-identify information collected actively or passively about you so that
                the information no longer relates to you individually. We then use that data for various legally
                permissible purposes, including but not limited to our research on our customer demographics, interests
                and behavior. We also disclose this information with our affiliates, agents, business partners, research
                facilities or other third parties.
              </p>
              <h4 className="text-xl">H. Other Users of Our Services</h4>
              <p>
                We provide your information to other users of our Services if you choose to make your information
                publicly available in a publicly accessible area of the Services, such as in your fundraiser through
                your donations or in the comments.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">VOLUNTEERED INFORMATION</h4>
              <p>
                Please be advised that some information you provide may be publicly accessible, such as information
                posted in forums or comment sections. When you launch a fundraiser, you make certain information
                publicly available and thus not protected by certain data protection laws. We also collect information
                through forums and communities, surveys and customer support communications, your communication to us of
                ideas for new products or modifications to existing products, feedback, and other solicited or
                unsolicited submissions (collectively, with publicly-accessible information, “Volunteered Information”).
                Subject to applicable law, by sending us Volunteered Information, you further agree that we are under no
                obligation of confidentiality, express or implied, with respect to the Volunteered Information. This
                Volunteered Information section shall survive any termination of your account or the Services.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">ONLINE ANALYTICS AND TAILORED ADVERTISING</h4>
              <p>
                We may use third-party web analytics services on the Services, such as those of Google Analytics. These
                vendors use the sort of technology described in the “Information That is Passively or Automatically
                Collected” section above and in our to help us analyze how users use the Services, including by noting
                the third-party website from which you arrive. The information collected by such technology will be
                disclosed to or collected directly by these vendors, who use the information to evaluate your use of the
                Services. We also may use Google Analytics for certain purposes related to advertising, as described in
                the following section. To prevent Google Analytics from using your information for web analytics, you
                may install the Google Analytics Opt-Out Browser Add-on.
              </p>
              <p>
                We may allow third-party advertising networks to place cookies or other tracking technologies on your
                computer, mobile phone, or other device to collect information about your use of the Services in order
                to (a) inform, optimize, and serve marketing content based on past visits to our website and other
                online services and (b) report how our marketing content impressions and interactions with these
                marketing impressions are related to visits to our online services. We may also allow other unaffiliated
                parties (e.g., ad networks and ad servers such as Google Analytics) to serve tailored marketing to you
                and to access their own cookies or other tracking technologies on your computer, mobile phone, or other
                device you use to access the Services. Those parties that use these technologies may offer you a way to
                opt out of targeted advertising as described below. You may receive tailored advertising on your
                computer through a web browser. Cookies may be associated with de-identified data linked to or derived
                from data you voluntarily have submitted to us (e.g., your email address) that may be disclosed to a
                vendor in hashed, non-human-readable form.
              </p>
              <p>
                If you are interested in more information about tailored advertising and how you can generally control
                cookies from being put on your computer to deliver tailored marketing, you may visit the Network
                Advertising Initiative&apos;s (“NAI”) Consumer Opt-Out Link, the Digital Advertising Alliance&apos;s
                (“DAA”) Consumer Opt-Out Link, and/or the European Interactive Digital Advertising Alliance to opt-out
                of receiving tailored advertising from companies that participate in those programs. To exercise choices
                about how Google personalizes Display Advertising or to customize Google Display Network ads, you can
                visit the Google Ads Settings page. Please note that to the extent advertising technology is integrated
                into the Services, you may still receive advertising content even if you opt out of tailored
                advertising. In that case, the advertising content may not be tailored to your interests. Also, we do
                not control any of the above opt-out links and are not responsible for any choices you make using these
                mechanisms or the continued availability or accuracy of these mechanisms. If your browsers are
                configured to reject cookies when you visit these opt-out pages, or you subsequently erase your cookies,
                or use a different computer or change web browsers, your opt-out may no longer be effective.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">CHILDREN</h4>
              <p>
                Our Services are not designed for use by individuals under the age of 18, please do not use the Services
                and/or submit any information through the Services. If you have reason to believe that a child under the
                age of 18 has provided personal information to CHATS through the Services, please contact us at ______
                and we will delete that information from our databases to the extent required by law.
              </p>
              <p>
                Moreover, if you provide us with information about children under the age of 18, you acknowledge and
                agree that either you are the child&apos;s parent/legal guardian or you have the authority and consent
                of the child&apos;s parent/legal guardian to create a campaign/fundraiser and for us to access,
                disclose, and use the relevant data.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">LINKS TO OTHER WEBSITES</h4>
              <p>
                The Services can contain links to other web sites not operated or controlled by CHATS (the “Third-Party
                Sites”). The policies and procedures we described here do not apply to the Third-Party Sites. The links
                from the Services do not imply that CHATS endorses or has reviewed the Third-Party Sites. We suggest
                contacting those sites directly for information on their respective privacy policies.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">SECURITY</h4>
              <p>
                We may hold your information we have collected in paper and/or electronic form. While no organization
                can guarantee perfect security, CHATS has implemented and seeks to continuously improve technical and
                organizational security measures to protect the information provided via the Services from loss, misuse,
                unauthorized access, disclosure, alteration, or destruction.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">RETENTION OF YOUR INFORMATION</h4>
              <p>
                We retain your information for as long as we deem necessary for the purpose for which that information
                was collected and for our legitimate business operations; provided, however, that your information is
                only retained to the extent permitted or required by applicable laws. When determining the retention
                period for your information, we take into account various criteria, such as the type of products and
                services requested by or provided to you, the nature and length of our relationship with you, possible
                re-enrollment with our products or services, the impact on the Services we provide to you if we delete
                some information about you, mandatory retention periods provided by law, and any applicable statute of
                limitations.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">CROSS BORDER DATA TRANSFERS</h4>
              <p>
                CHATS is a global organization headquartered in Nigeria, and we may process your information in various
                countries, CHATS has implemented appropriate cross-border transfer solutions, to provide adequate
                protection for transfers of certain personal data and is compliant with the GDPR and other globally
                accepted data protection protocols.
              </p>
              <p>
                The Services are hosted in Nigeria. Please be aware that your information may be transferred to, stored,
                and processed in Nigeria and other locations where our servers and personnel are located, and our
                central database is operated. The data protection and other laws of other countries might not be as
                comprehensive as those in your country, and data may be accessible to law enforcement and national
                security authorities under certain circumstances.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">YOUR CHOICES</h4>
              <p>
                We offer you certain choices regarding the collection, use, and disclosure of information about you.
              </p>
              <p>
                Account Information. You may have the ability to create an account in the Services. You may verify,
                correct, update, or delete certain of your information through your account profile page.
              </p>
              <p>
                Marketing Communications. Each email marketing communication we send you will contain instructions
                permitting you to “opt out” of receiving future marketing communications. In addition, if at any time
                you wish not to receive any future marketing communications or you wish to have your name deleted from
                our mailing lists, please contact us at the email address or mailing address set forth under. If you opt
                out of receiving marketing communications or other information we think may interest you, we can still
                send you certain emails about your account or any Services you have requested or received from us.
              </p>
              <p>
                Cookies and Analytics. You can opt out of certain cookie-related and analytics processing by following
                the instructions in this Notice.
              </p>
              <p>
                Rights to Information About You. Your local law may provide you with certain rights with respect to your
                information. Depending on your jurisdiction, you may request that we:
              </p>
              <ul className="list-disc  pl-4">
                <li>
                  Provide you with information about the categories of personal information we collect or disclose about
                  you; the categories of sources of such information; the business or commercial purpose for collecting
                  such information; and the categories of unaffiliated parties to whom we disclose such personal
                  information. Such information is also set forth in this Notice;
                </li>
                <li className="my-3">Provide access to and/or a copy of certain information we hold about you;</li>
                <li>Prevent the processing of your information for direct-marketing purposes;</li>
                <li className="my-3">Update information which is out of date or incorrect;</li>
                <li>Delete certain information that we are holding about you;</li>
                <li className="my-3">Restrict the way that we process and disclose certain information about you;</li>
                <li>Transfer your information to a third-party provider of services;</li>
                <li className="my-3">
                  Opt you out of the processing of your personal information for purposes of profiling in furtherance of
                  decisions that produce legal or similarly significant effects, if applicable; and
                </li>
                <li>
                  Revoke your consent for the processing of your information provided that the withdrawal of consent
                  shall not affect the lawfulness of the processing based on consent before its withdrawal.
                </li>
              </ul>
              <p>
                Please note that certain information may be exempt from such requests under applicable law. For example,
                we may retain certain information for legal compliance and to secure our Services. We also may need
                certain information in order to provide the Services to you; if you ask us to delete it, you may no
                longer be able to use the Services.
              </p>
              <p>
                You also have the right not to be discriminated against (as provided for in applicable law) for
                exercising your rights.
              </p>
              <p>
                You may also have the right to opt out of sales of your personal information, or the processing of your
                personal information for targeted advertising. To opt out of any future targeted advertising we may
                offer, please use the tools described in the section above on Online Analytics and Tailored Advertising,
                or in our policy. We may “sell” information about you to certain partners such as nonprofit
                organizations to help them understand your likely interests in making charitable or other donations, the
                potential size of such donations, or your interests in starting peer-to-peer fundraisers, signing up for
                recurring donations or other similar indicators. To opt out of “sales” of your personal information that
                do not involve cookies or other online tracking technologies, please email us.
              </p>
              <p>
                If you would like information regarding your rights under applicable law or would like to exercise any
                of them, contact us at the email address or mailing address set forth under. For your own privacy and
                security, at our discretion, we may require you to provide your identity before providing the requested
                information. To protect your privacy and security, we take reasonable steps to verify your identity and
                requests before granting such requests. If we are unable to verify your identity, we may be unable to
                respond to your requests.
              </p>
              <p>
                Depending on applicable law, if we deny your request, you may have the right to appeal our decision to
                deny your request. We will provide information about how to exercise that right in our response denying
                the request.
              </p>
              <p>If you are located in Europe, our legal grounds for processing your information may be as follows:</p>
              <ul className="list-disc  pl-4">
                <li>Consent: Where you have given consent to such processing for one or more specific purposes.</li>
                <li className="my-3">
                  Contractual Obligation: Where the processing is necessary for the performance of a contract with you
                </li>
                <li>Legal Obligation: Where processing is necessary for compliance with our legal obligation.</li>
                <li className="my-3">
                  Legitimate Interest: Where processing is necessary for our legitimate interests or the legitimate
                  interests of our users and your interests and fundamental rights and freedoms do not override those
                  interests.
                </li>
              </ul>
              <p>
                We transfer your personal data to third countries subject to appropriate safeguards, such as standard
                contractual clauses.
              </p>
              <p>
                However, we encourage you to contact us first, and we will do our very best to resolve your concern.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">OTHER TERMS</h4>
              <p>
                Your access to and use of the Services is subject to CHATS&apos;s Terms of Service and such other terms,
                which may be made available to you in connection with your use of the Services.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">CHANGES TO CHATS&apos;S PRIVACY NOTICE</h4>
              <p>
                CHATS reserves the right to update or modify this Notice at any time and from time to time. We will
                notify you of any material updates or changes we make to this Notice. If you disagree with our revisions
                to the Notice, you can deactivate your account or discontinue the use of our Services. Please review
                this Notice periodically for any updates or changes to this Notice.
              </p>
              <p>
                By using the Services after any such update or modification, you acknowledge that you have read and
                understood the terms of the Notice as updated or modified.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </section>
  )
}
