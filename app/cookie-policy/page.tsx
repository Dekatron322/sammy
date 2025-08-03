"use client"
import DashboardNav from "components/Navbar/DashboardNav"
import Footer from "components/Footer/Footer"
import Image from "next/image"
import MobileNav from "components/Navbar/MobileNav"

export default function Dashboard() {
  return (
    <section className="   h-full w-full">
      <div className="   max-sm:w-full">
        <DashboardNav />
        <MobileNav />
        <div className="paddings flex h-auto w-full max-sm:pt-24 xl:mt-32">
          <div className="primary-200  relative  flex  w-full overflow-hidden rounded-[15px] p-6 max-sm:h-[454px] xl:h-[408px]">
            <div className="img-element-thirty-four absolute  right-0 top-0 xl:hidden"></div>
            <div className="img-element-thirty absolute  right-0 top-0 max-sm:hidden"></div>

            <div className="flex w-full items-center justify-between">
              <div className="flex max-w-[831px] flex-col gap-2 xl:pl-20">
                <div className="flex w-[180px] items-center gap-2 rounded-full bg-[#304342] px-[20px] py-2">
                  <img src="/chats transparent 1.png" alt="" className="w-7" />
                  <p className="text-sm text-white">Cookie Policy</p>
                </div>
                <p className="text-start text-[45px] font-bold text-[#FFFFFF]">Chats Cookie Policy </p>
                <p className="text-[#FFFFFF]">Explore our Cookie Policy</p>
              </div>
            </div>
          </div>
        </div>
        <section className="mb-16 flex flex-col justify-center max-sm:px-4 max-sm:pt-4 xl:px-64 xl:pt-20">
          <h4 className="text-2xl">1. Introduction</h4>

          <div className="paragraph mt-4 flex flex-col gap-4 ">
            <p>
              This Cookie Policy explains how CHATS uses cookies and similar tracking technologies when you interact
              with our services. It should be read alongside our [Privacy Policy], which provides details on how we
              collect, process, and store personal information.
            </p>
            <p>
              By continuing to use our website or services, you consent to our use of cookies as outlined in this
              policy. If you do not agree, you may disable cookies using the options provided below. Please note that
              disabling certain cookies may impact the functionality of our services.
            </p>

            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">2. What Are Cookies and Similar Technologies?</h4>
              <p>
                Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a
                website. They help websites function properly, remember user preferences, and enhance user experiences.
                CHATS also uses similar tracking technologies, including:
              </p>
              <ul className="list-disc pl-4">
                <li>
                  Web Beacons, Pixel Tags, and Clear GIFs – Small graphic images or embedded snippets of code that help
                  us track website activity and email engagement. These tools allow us to determine whether emails have
                  been opened and which links have been clicked to improve our communications.
                </li>
                <li className="my-3">
                  Local Shared Objects (Flash Cookies) and HTML5 Local Storage – Technologies that store information
                  about your preferences and activities on your device. Unlike browser cookies, these are stored in
                  different locations and may persist even after clearing standard cookies. You can manage these
                  settings through your browser’s developer tools or security settings.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">3. How CHATS Uses Cookies</h4>
              <p>
                CHATS uses cookies for various purposes, including enhancing user experiences, analyzing website
                traffic, and enabling personalized content. Below are the categories of cookies we use:
              </p>
              <ul className="list-disc pl-4">
                <li>
                  Strictly Necessary Cookies – Essential for website functionality, including secure login, navigation,
                  and fraud prevention.
                </li>
                <li className="my-3">
                  Performance & Analytics Cookies – Help us analyze user behavior, track page visits, and identify
                  performance issues. We use third-party providers like Google Analytics for these purposes.
                </li>
                <li className="">
                  Functionality Cookies – Remember user preferences (e.g., language, font size, and display settings) to
                  improve website experience.
                </li>
                <li className="my-3">
                  Targeting & Advertising Cookies – Used by CHATS and third-party partners (e.g., Google Ads, Facebook
                  Pixel) to deliver relevant ads and measure ad effectiveness.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">4. User Control & Opt-Out Options</h4>
              <p>
                You can control and disable cookies through your web browser settings. However, disabling certain
                cookies may impact website functionality. Below are steps to manage cookies in common browsers:
              </p>
              <ul className="list-disc  pl-4">
                <li>
                  Google Chrome: Settings {">"} Privacy and Security {">"} Cookies and other site data.
                </li>
                <li className="my-3">
                  Mozilla Firefox: Preferences {">"} Privacy & Security {">"} Cookies and Site Data.
                </li>
                <li>
                  Safari: Preferences {">"} Privacy {">"} Manage Website Data.
                </li>
                <li className="my-3">
                  Microsoft Edge: Settings {">"} Site Permissions {">"} Cookies and site data.
                </li>
              </ul>
              <p>You can also opt out of tracking by visiting:</p>
              <ul className="list-disc  pl-4">
                <li>[Google Ads Settings]</li>
                <li className="my-3">[Network Advertising Initiative Opt-Out]</li>
              </ul>
              <p>
                Do-Not-Track Signals: Some web browsers transmit “do-not-track” signals to websites. CHATS currently
                does not respond to these signals but may update this policy in accordance with industry standards.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">5. Data Protection & Third-Party Sharing</h4>
              <p>
                CHATS does not sell personal data. However, we may share anonymized or aggregated analytics with trusted
                third-party partners, including:
              </p>
              <ul className="list-disc  pl-4">
                <li>Google Analytics (website traffic analysis)</li>
                <li className="my-3">Facebook Ads & Google Ads (targeted advertising)</li>
                <li>Advertising networks (ad placement and effectiveness tracking)</li>
              </ul>
              <p>For more details on data protection, refer to our [Privacy Policy].</p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">6. Changes to This Cookie Policy</h4>

              <p>
                We may update this policy periodically to reflect technological, legal, or service-related changes. Any
                significant changes will be communicated through:
              </p>
              <ul className="list-disc  pl-4">
                <li>A website banner notification</li>
                <li className="my-3">An email notification (if applicable)</li>
              </ul>
              <p>We encourage users to review this policy periodically for updates.</p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">7. Contact Information</h4>
              <p>
                For questions about this Cookie Policy or your privacy rights, please contact us at:{" "}
                <a href="mailto:info@withconvexity.com" className="text-[#05f29a]">
                  info@withconvexity.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </section>
  )
}
