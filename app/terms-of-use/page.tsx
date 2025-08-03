"use client"
import DashboardNav from "components/Navbar/DashboardNav"
import { useState } from "react"
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
                  <p className="text-sm text-white">Terms of use</p>
                </div>
                <p className="text-start text-[45px] font-bold text-[#FFFFFF]">Chats Terms of Use </p>
                <p className="text-[#FFFFFF]">Explore our terms of use</p>
              </div>
            </div>
          </div>
        </div>
        <section className="mb-16 flex flex-col justify-center max-sm:px-4 max-sm:pt-4 xl:px-64 xl:pt-20">
          <h4 className="paragraph px-10 text-2xl">IMPORTANT </h4>
          <div className="mt-4 flex  items-start gap-4">
            <Image alt="" src="/policy/messages-3.png" width={24} height={24} />
            <div className=" flex flex-col gap-4 ">
              <p className="paragraph underline" style={{ textDecorationColor: "#05F29A", textUnderlineOffset: "4px" }}>
                THIS IS A LEGAL AGREEMENT BETWEEN YOU AND CONVEXITY TECHNOLOGIES (“CHATS” OR “WE” OR “US” OR “OUR”). THE
                SERVICE (THE “SUITE OF PRODUCTS”) IS OWNED AND OPERATED BY CONVEXITY TECHNOLOGIES.
              </p>
              <p className="paragraph underline" style={{ textDecorationColor: "#05F29A", textUnderlineOffset: "4px" }}>
                BEFORE ACCESSING OR USING ANY PART OF THE SERVICE, YOU SHOULD CAREFULLY READ THE FOLLOWING TERMS AND
                CONDITIONS CONTAINED IN THIS TERMS OF USE AGREEMENT. YOUR ACCESS TO AND USE OF THE SERVICES ARE SUBJECT
                TO THESE TERMS OF USE, AS WELL AS TO ALL APPLICABLE LAWS AND REGULATIONS, AND ANY OTHER TERMS AND
                CONDITIONS AS MAY BE SET FORTH.
              </p>
              <p className="paragraph underline" style={{ textDecorationColor: "#05F29A", textUnderlineOffset: "4px" }}>
                CONVEXITY TECHNOLOGIES IS WILLING TO ALLOW THE USE OF ITS SERVICES ON THE CONDITION THAT YOU ACCEPT AND
                AGREE TO ALL THE TERMS AND CONDITIONS CONTAINED IN THIS AGREEMENT. IF YOU DO NOT AGREE WITH THESE TERMS
                OF USE, YOU ARE NOT GRANTED PERMISSION TO ACCESS OR OTHERWISE USE THE SERVICES. YOUR ACCESS TO AND USE
                OF THE SERVICES CONSTITUTE YOUR ACCEPTANCE OF AND AGREEMENT TO ABIDE BY THESE TERMS OF USE.
              </p>
              <p className="paragraph underline" style={{ textDecorationColor: "#05F29A", textUnderlineOffset: "4px" }}>
                THESE TERMS OF USE MAY BE MODIFIED FROM TIME TO TIME WITHOUT ADVANCE NOTICE BY POSTING THE UPDATED
                VERSION ON OUR WEBSITE. CONTINUED USE OF THE SERVICES AFTER SUCH CHANGES ARE POSTED CONSTITUTES YOUR
                AGREEMENT TO BE BOUND BY THE MODIFIED TERMS. THE DATE THESE TERMS OF USE WERE LAST UPDATED IS STATED AT
                THE END OF THIS DOCUMENT. YOU ARE ENCOURAGED TO REVIEW THESE TERMS PERIODICALLY FOR UPDATES AND CHANGES.
              </p>
            </div>
          </div>
          <div className="paragraph mt-10 flex flex-col gap-4 pl-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">TERMS AND CONDITIONS</h4>
              <h4 className="text-xl">Description of CHATS and The Services</h4>
              <p>
                CHATS is the first—and largest—nonprofit that lets individual donors send money to those living in
                extreme poverty. The Services provide users with access to a variety of information and resources,
                including research papers, works of authorship, e-newsletters, news feeds, blogs, and other relevant
                content (collectively, the &quot;Content&quot;).
              </p>

              <h4 className="text-xl">Personal Information</h4>
              <p>
                You can visit the Services and access most of the Content, features, and functionality without being
                required to provide us with any personal information. However, gaining access to certain Content and
                some activities will require that you provide us with some personally identifying information about
                yourself, as more specifically detailed in our Privacy Policy, located [here].
              </p>
              <h4 className="text-xl">Age Requirements</h4>
              <p>
                CHATS Website is intended solely for users who are 13 years of age or older, and any registration by,
                use of, or access to the Services by anyone under 13 is unauthorized. If you are 13 or older but under
                the age of 18, you should review these Terms of Use with your parent or guardian to ensure that they
                understand them, agree to be bound by them, and that you use the Services with their permission and
                under their supervision. Additionally, you must be 18 years of age or older to make a donation. If you
                are a parent or guardian of a child who is at least 13 years of age but under the age of 18, and you
                give your child permission to use the Services, you hereby agree to the terms set forth in these Terms
                of Use on behalf of both yourself and your child.
              </p>
              <p>
                If you reside in a jurisdiction that restricts the use of the Services—or any of the functionalities or
                features offered via the Services—due to age, or restricts the ability to enter into contracts such as
                this one due to age, you must abide by such age limits and must not use the Services if you are not
                permitted to do so by such local jurisdiction. Please note that if you reside in the European Economic
                Area, Switzerland, or the United Kingdom, you must be 16 years of age or older, and any use of or access
                to the Services by anyone under 16 is unauthorized.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">Intellectual Property Rights</h4>
              <h4 className="text-xl">Trademarks and Service Marks</h4>
              <p>
                Certain trademarks are the service marks and trademarks of CHATS. All page headers, custom graphics, and
                button icons are service marks, trademarks, logos, and/or trade dress of CHATS. All other trademarks,
                service marks, trade dress, product names, company names, or logos, whether registered or not, on the
                Services are the property of their respective owners. In addition to complying with all applicable laws,
                you agree that you will not use any such trademarks, service marks, trade dress, or other logos from
                these Services without the prior written authorization of CHATS or their respective owners.
              </p>
              <h4 className="text-xl">Copyright</h4>
              <p>
                Except as otherwise expressly stated, all Content appearing on the Services—including all scripts,
                videos, and similar materials—is the copyrighted work of either CHATS or third-party partners and
                suppliers and is protected by Nigerian and international copyright laws.
              </p>
              <p>
                The compilation (meaning the collection, arrangement, and assembly) of all Content is also the exclusive
                property of CHATS and is protected by Nigerian and international copyright laws. Except as otherwise
                expressly stated herein or as expressly permitted, you may not alter, modify, copy, distribute (for
                compensation or otherwise), transmit, display, perform, reproduce, reuse, post, publish, license, frame,
                download, store for subsequent use, create derivative works from, transfer, or sell any information or
                Content obtained from the Services, in whole or in part, including any text, images, audio, and video in
                any manner, without the prior written authorization of CHATS or any applicable third-party suppliers or
                authorized users.{" "}
              </p>
              <p>
                The use of Content, including images, by you or anyone else authorized by you, is prohibited unless
                specifically permitted by CHATS. Any unauthorized use of text or images may violate copyright laws,
                trademark laws, the laws of privacy and publicity, and applicable regulations and statutes. CHATS does
                not warrant nor represent that your use of any Content or materials displayed on the Services will not
                infringe on the rights of third parties.
              </p>
              <h4 className="text-xl">CHATS License Grant</h4>
              <p>
                These Terms of Use provide you with a personal, revocable, limited, non-exclusive, royalty-free,
                non-transferable license to access the Services solely for your own personal use. Your use of the
                Services and access to the Content, including any images, videos, materials, or information made
                available through the Services, are conditioned on your continued compliance with the terms and
                conditions of these Terms of Use. Accordingly, you expressly acknowledge and agree that CHATS transfers
                no ownership or intellectual property interest or title in the Content.
              </p>
              <h4 className="text-xl">Reservation of Rights</h4>
              <p>
                CHATS reserves the right, in its sole discretion and at any time, to modify, interrupt, limit, suspend,
                or discontinue, temporarily or permanently, the Services, in whole or in part, including as we deem
                necessary for purposes of maintenance, upgrades, or to comply with applicable law. CHATS shall not be
                liable to you or to any third party for any such modifications, suspensions, or discontinuances of the
                Services.
              </p>
              <h4 className="text-xl">Payments and Payment Processing</h4>
              <p>
                You can make an online donation to CHATS. CHATS has engaged the services of third-party payment service
                providers to process all donation transactions. CHATS is not affiliated with these third-party providers
                and is not responsible for their actions, performance, or any issues arising from payment processing. By
                making a donation, you acknowledge that CHATS is not liable for any loss or damage incurred due to these
                third-party services.
              </p>
              <p>
                You further agree that you will not use an invalid or unauthorized payment method; and all donations are
                final and non-refundable. If you have any questions regarding a donation, please contact us via email{" "}
                <a className="text-[#05f29a]" href="mailto:info@withconvexity.com">
                  info@withconvexity.com
                </a>
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xl">User-Generated Content and Blogs</h4>
              <p>
                The Website may contain user-generated content, including blogs and videos (&quot;Content&quot;). The
                views and opinions expressed in such Content belong solely to their respective authors and do not
                necessarily reflect the views of CHATS, its management, or employees. CHATS does not endorse, verify, or
                assume responsibility for any Content posted by users, employees, volunteers, or third-party
                contributors.
              </p>
              <p>
                By submitting Content, you grant CHATS a non-exclusive, worldwide, royalty-free license to use, display,
                reproduce, modify, or distribute your Content as necessary for Website operation. CHATS reserves the
                right to remove or modify any Content that violates these Terms or applicable laws.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xl">Disclaimer of Liability</h4>
              <p>
                You acknowledge that your use of the Website is at your sole risk. While CHATS strives to provide a
                secure and reliable Website, it cannot guarantee the confidentiality, security, or uninterrupted
                operation of any transmissions or communications through the Website. CHATS disclaims all liability for
                any loss or damage arising from your use of the Website or reliance on its Content.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xl">User Obligations and Prohibited Activities</h4>

              <p>
                By using the Website, you agree to abide by all applicable local, national, and international laws.
                Additionally, you agree that you will not:
              </p>
              <p>
                License, sublicense, sell, resell, transfer, assign, distribute, or commercially exploit the Services or
                Content. Modify, copy, or create derivative works based on the Services or Content. Create unauthorized
                links to the Services or &quot;frame&quot; or &quot;mirror&quot; the Website on any other platform.
                Reverse engineer, decompile, or attempt to access the Website&apos;s underlying technology for
                competitive purposes. Launch automated programs, including web crawlers, bots, viruses, or scripts that
                could burden the Website&apos;s operation. Interfere with, disrupt, or attempt to gain unauthorized
                access to the Website, its systems, or networks.
              </p>
              <p>
                CHATS reserves the right to investigate and take legal action against violations, including suspending
                or terminating access to the Website without prior notice.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xl">Links to Third-Party Websites</h4>
              <p>
                The Website may contain hyperlinks to third-party websites, including social media platforms such as
                Facebook, Twitter, Instagram, YouTube, and LinkedIn. These websites are operated by independent parties
                and are not under CHATS’s control. CHATS does not endorse, verify, or assume responsibility for their
                content, products, services, or privacy policies.
              </p>
              <p>
                Your interactions with such websites are at your own risk, and we encourage you to review their
                respective terms of use and privacy policies before engaging with them.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xl">International Use and Compliance</h4>
              <p>
                CHATS Website is hosted in Nigeria, by accessing the Services, you agree to comply with applicable
                federal and state laws, as well as any applicable international laws regarding data transmission. CHATS
                makes no representation that the Services are appropriate or legal in any particular location. Users
                accessing the Website from outside Nigeria do so at their own risk and are responsible for compliance
                with all applicable local laws.
              </p>
              <p>
                The Services are not intended for access in jurisdictions where their use would be illegal or require
                CHATS to register under local regulations. By using the Website, you acknowledge that you do so
                voluntarily and assume responsibility for compliance with all applicable laws.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xl">General Disclaimer</h4>
              <p>
                The Content provided on this Website is for informational purposes only and has been prepared as a
                convenience to its users. CHATS makes reasonable efforts to ensure accuracy but does not guarantee the
                completeness, reliability, or adequacy of the Content.
              </p>

              <p>
                YOUR USE OF THIS WEBSITE IS AT YOUR SOLE RISK. ALL CONTENT IS PROVIDED ON AN “AS IS” OR “AS AVAILABLE”
                BASIS, AND CHATS EXPRESSLY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ACCURACY. CHATS
                MAKES NO WARRANTY THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE FROM MALICIOUS
                COMPONENTS.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xl">Limitation of Liability</h4>
              <p>
                IN NO EVENT SHALL CHATS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF USE, INCOME, DATA, REPUTATION, OR PERSONAL
                INJURY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICES.
              </p>
              <p>
                YOU UNDERSTAND AND AGREE THAT YOUR USE OF THE SERVICES WAIVES ANY RIGHT TO SUE CHATS OR PARTICIPATE IN A
                CLASS ACTION FOR DAMAGES RESULTING FROM YOUR USE OF THE WEBSITE.
              </p>
              <p>
                CERTAIN JURISDICTIONS MAY NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR EXCLUSIONS OF CERTAIN DAMAGES.
                IN SUCH CASES, SOME OF THE ABOVE DISCLAIMERS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS
                UNDER LOCAL LAW.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xl">Indemnity</h4>
              <p>
                You agree to defend, indemnify, and hold harmless CHATS and affiliates and all of their respective
                employees, funders, parents, subsidiaries, joint ventures, affiliates, agents, developers, directors,
                officers, and attorneys from and against any and all claims, proceedings, damages, injuries,
                liabilities, losses, costs, and expenses (including reasonable attorneys’ fees and litigation expenses)
                relating to or arising from: Any breach or alleged breach by you of these Terms, or Any act or omission
                related to your use of this Website or Content.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">Governing Law and Jurisdiction</h4>
              <p>
                These Terms shall be governed by and interpreted in accordance with the laws of the Federal Republic of
                Nigeria. You and CHATS agree to submit to the exclusive jurisdiction of the federal and state courts
                located in Nigeria, Abuja.
              </p>
              <p>
                YOU AND CHATS AGREE THAT ANY PROCEEDINGS TO RESOLVE OR LITIGATE ANY DISPUTE WILL BE CONDUCTED SOLELY ON
                AN INDIVIDUAL BASIS, AND THAT NEITHER YOU NOR CHATS WILL SEEK TO HAVE ANY DISPUTE HEARD AS A CLASS
                ACTION, REPRESENTATIVE ACTION, OR PRIVATE ATTORNEY-GENERAL ACTION.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xl">Arbitration</h4>
              <p>
                At CHATS’s sole discretion, any disputes or claims under these Terms or its breach may be submitted to
                and resolved exclusively by arbitration conducted in accordance with the American Arbitration
                Association rules. One arbitrator appointed under such rules shall conduct arbitration in Nigeria,
                applying the laws of Nigeria. Any decision in arbitration shall be final and binding. Judgment may be
                entered in any court of competent jurisdiction. Notwithstanding the above, CHATS may sue in any court
                for infringement of its proprietary or intellectual property rights.
              </p>

              <p>
                All claims you bring against CHATS must be resolved in accordance with this section. Any claim or cause
                of action arising out of or related to the Services must be filed within one (1) year after such claim
                arises; otherwise, it shall be barred.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xl">Miscellaneous</h4>
              <p>
                These Terms constitute the entire agreement between you and CHATS. You may not assign your rights or
                obligations without prior written consent. CHATS may assign these Terms without consent. If any
                provision is found unenforceable, the remaining provisions shall continue in effect. No joint venture,
                partnership, employment, or agency relationship exists between you and CHATS due to these Terms.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xl">Changes to These Terms</h4>
              <p>
                CHATS reserves the right to modify these Terms at any time. Updates will be posted on the Website, and
                continued use of the Website after changes are published constitutes acceptance of the revised Terms.
              </p>
              <h4 className="text-xl">Privacy and Data Security</h4>

              <p>
                CHATS values user privacy and data security. While we take reasonable measures to protect user
                information, we cannot guarantee complete security of communications or transmissions over the Internet.
                Users are responsible for safeguarding their login credentials and should exercise caution when sharing
                personal information.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </section>
  )
}
