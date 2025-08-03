import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const Glossary = () => {
  const [selectedLetter, setSelectedLetter] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  const glossaryItems = [
    {
      title: "Accountability",
      description:
        "In humanitarian aid, it refers to the obligation of aid providers to be responsible for their actions and decisions. Chats.cash promotes accountability through its transparent blockchain-based reporting, ensuring donors and beneficiaries can track aid distribution.",
    },
    {
      title: "Aid Distribution Platform",
      description:
        "Chats.cash functions as an online platform designed to facilitate the efficient and transparent distribution of humanitarian aid, including cash, vouchers, and items, connecting donors directly with beneficiaries through vetted NGOs.",
    },
    {
      title: "Agent (Field Agent)",
      description:
        "Individuals authorized by NGOs using Chats.cash to operate in the field, responsible for onboarding and verifying beneficiaries and vendors, providing feedback on campaign progress directly through the Field Agent app.",
    },
    {
      title: "Affected Population",
      description:
        "Groups of people who have been impacted by a disaster or humanitarian crisis and are in need of assistance. Chats.cash aims to efficiently reach affected populations with aid, ensuring dignity and full receipt of assistance.",
    },
    {
      title: "Anonymous Donation",
      description:
        "The option for donors on Chats.cash to contribute to campaigns without revealing their identity publicly, offering privacy while still receiving detailed campaign reports",
    },
    {
      title: "App (Mobile Application)",
      description:
        "Chats.cash ecosystem includes various mobile applications: Beneficiary App (for aid receipt), Vendor App (for service provision and payment), and Field Agent App (for field operations and data collection), streamlining aid processes.",
    },
    {
      title: "Assessment (Needs)",
      description:
        "A crucial first step in humanitarian response involving evaluating the scope and severity of a crisis and the needs of the affected population. Chats.cash helps NGOs demonstrate needs are met effectively through transparent tracking of aid distribution",
    },
    {
      title: "Beneficiary",
      description:
        "An individual or group intended to receive aid from a humanitarian campaign. On Chats.cash, beneficiaries are onboarded by NGOs and Field Agents and can receive aid via QR codes paper voucher, SMS vouchers, or the Beneficiary App.",
    },
    {
      title: "Blockchain Technology",
      description:
        "The core technology underpinning Chats.cash, ensuring data integrity, transparency, and tamper-proof records of all transactions and campaign activities, fostering trust and accountability in aid distribution",
    },
    {
      title: "Budget Transparency",
      description:
        "Open and clear communication about how donated funds are allocated and spent within a humanitarian campaign. Chats.cash enhances budget transparency by providing donors with detailed reports automatically generated from blockchain records.",
    },
    {
      title: "Business Continuity",
      description:
        "In disaster contexts, ensuring essential functions continue during and after a crisis. For Chats.cash, this means maintaining platform accessibility and functionality for aid distribution even during challenging circumstances.",
    },
    {
      title: "Bulk SMS Voucher",
      description:
        "A method for aid disbursement on Chats.cash where beneficiaries with feature phones receive aid notifications and redemption codes via SMS, ensuring inclusivity even for those without smartphones.",
    },
    {
      title: "Bypass (Corruption)",
      description:
        "Chats.cash aims to minimize corruption risks in aid distribution by leveraging blockchain for transparent transaction tracking, reducing intermediaries and ensuring funds reach beneficiaries directly and verifiably.",
    },
    {
      title: "Best Practices (Humanitarian)",
      description:
        "Established methodologies and guidelines recognized for their effectiveness in humanitarian action. Chats.cash platform design incorporates best practices in aid delivery by focusing on transparency, accountability, and beneficiary dignity.",
    },
    {
      title: "Campaign (Aid Campaign)",
      description:
        "A specific initiative on Chats.cash, created by NGOs to distribute aid (cash, vouchers, items) to beneficiaries. Campaigns are defined by objectives, target beneficiaries, budget, and reporting mechanisms.",
    },
    {
      title: "Cash-Based Assistance (CBA)",
      description:
        "Providing cash directly to beneficiaries, empowering them to meet their own needs and stimulating local markets. Chats.cash supports CBA campaigns through secure and traceable digital cash transfers.",
    },
    {
      title: "CHATS (Acronym)",
      description:
        "Convexity Humanitarian Aid Transfer Solution - the full name of the Chats.cash platform, emphasizing its purpose of providing a convex (improved and efficient) solution for humanitarian aid transfer.",
    },
    {
      title: "Confidentiality",
      description:
        "Protecting sensitive information, such as beneficiary data. Chats.cash prioritizes data security and confidentiality while ensuring transparency in transaction records for accountability purposes.",
    },
    {
      title: "Convexity",
      description:
        "In the context of Chats.cash, 'convexity' refers to the platform's aim to provide a significantly improved and more efficient solution to humanitarian aid transfer compared to traditional methods.",
    },
    {
      title: "Coordination (Humanitarian)",
      description:
        "Working collaboratively amongst different humanitarian actors (NGOs, UN agencies, governments, etc.) to maximize effectiveness and avoid duplication. Chats.cash facilitates coordination by providing a centralized platform for campaign management and transparent reporting.",
    },
    {
      title: "Cryptocurrency (Donation)",
      description:
        "Donations in digital assets such as Bitcoin can be give and campaigns are tokenized and stablecoins such as cNGN, USDC, etc are used on the Chats.cash ecosystem, for faster and borderless donations and transactions for humanitarian campaigns.",
    },
    {
      title: "Dashboard (Donor)",
      description:
        "A dedicated interface on Chats.cash for donors to browse campaigns, make donations (publicly or anonymously), and access detailed, tamper-proof reports on the campaigns they have supported.",
    },
    {
      title: "Dashboard (NGO)",
      description:
        "A central control panel for NGOs on Chats.cash, enabling them to create and manage campaigns, onboard beneficiaries and vendors, invite donors, track field agent activities, and generate comprehensive campaign reports.",
    },
    {
      title: "Data Integrity",
      description:
        "Ensuring the accuracy and reliability of data, a core feature of Chats.cash through its use of blockchain. Data integrity means campaign information and transaction records are tamper-proof and trustworthy.",
    },
    {
      title: "Disaster Relief",
      description:
        "Assistance provided in humanitarian crises caused by natural or man-made disasters. Chats.cash is designed to facilitate efficient disaster relief efforts by enabling rapid aid distribution to affected populations.",
    },
    {
      title: "Dignity (Beneficiary)",
      description:
        "Respecting the worth and value of aid recipients. Chats.cash aims to deliver aid with dignity, providing beneficiaries with choices and control where possible, and ensuring respectful aid distribution processes.",
    },
    {
      title: "Direct Aid",
      description:
        "Aid delivered straight to beneficiaries, minimizing intermediaries. Chats.cash promotes direct aid delivery, reducing potential for leakage and ensuring aid reaches its intended recipients more effectively.",
    },
    {
      title: "Donation Transparency",
      description:
        "Openly providing information about how donations are used. Chats.cash excels in donation transparency by offering automated, tamper-proof reports to donors, detailing campaign progress and fund allocation.",
    },
    {
      title: "Efficiency (Aid Delivery)",
      description:
        "Maximizing the output of aid efforts with minimal waste of resources. Chats.cash strives for efficiency in aid delivery through streamlined processes, digital platforms, and reduced administrative overhead.",
    },
    {
      title: "Ecosystem (CHATS)",
      description:
        "The interconnected components of Chats.cash, including the Donor Dashboard, NGO Dashboard, Field Agent App, Vendor App, and Beneficiary App, all working together to facilitate aid distribution.",
    },
    {
      title: "Emergency Response",
      description:
        "Immediate actions taken to address urgent needs following a disaster or crisis. Chats.cash is designed to be rapidly deployable for emergency response situations, facilitating quick mobilization of aid.",
    },
    {
      title: "Evaluation (Campaign)",
      description:
        "Assessing the effectiveness and impact of a humanitarian campaign. Chats.cash provides tools and data for NGOs to evaluate their campaigns and demonstrate results to donors through detailed reporting.",
    },
    {
      title: "Equity (Aid Distribution)",
      description:
        "Fair and impartial distribution of aid based on need. Chats.cash, through its verifiable beneficiary onboarding and transparent tracking, aims to promote equity in aid distribution, ensuring assistance reaches the most vulnerable.",
    },
    {
      title: "Excel Import(Data)",
      description:
        "The tabular format allows humanitarian bodies to upload the list of beneficiaries for a campaign using Excel (.xls or .csv format for convenience).",
    },
    {
      title: "Exclusion Error (Minimization)",
      description:
        "Chats.cash onboarding and verification processes, particularly through Field Agents, are designed to minimize errors of excluding genuinely vulnerable beneficiaries from receiving aid.",
    },
    {
      title: "Feedback Mechanism",
      description:
        "Systems for beneficiaries and other stakeholders to provide input and voice concerns about aid programs. The Field Agent App on Chats.cash can facilitate feedback collection from beneficiaries in the field.",
    },
    {
      title: "Field Agent App",
      description:
        "A mobile application within the Chats.cash ecosystem used by Field Agents to onboard and verify beneficiaries and vendors, collect campaign feedback, and report on field activities, streamlining data collection and field operations.",
    },
    {
      title: "Fundraising (Campaign)",
      description:
        "The process of soliciting and collecting donations for a humanitarian campaign. Chats.cash NGO Dashboard allows organizations to invite donors to campaigns and potentially manage fundraising activities.",
    },
    {
      title: "Fraud Reduction",
      description:
        "Minimizing dishonest or illegal activities aimed at diverting aid resources. Chats.cash's blockchain transparency and audit trails are key features in reducing fraud and ensuring accountability in aid distribution.",
    },
    {
      title: "Feature Phone Accessibility",
      description:
        "Chats.cash supports aid delivery via SMS vouchers, ensuring accessibility for beneficiaries who possess basic mobile phones (feature phones) without smartphone capabilities, promoting inclusivity.",
    },
    {
      title: "Financial Transparency",
      description:
        "Openly disclosing financial information related to aid campaigns. Chats.cash automatically generates detailed financial reports for donors based on blockchain records, enhancing financial transparency and trust.",
    },
    {
      title: "Flexibility (Aid Modality)",
      description:
        "Adapting aid delivery methods to suit specific contexts and beneficiary needs (cash, vouchers, items). Chats.cash is designed to support flexible aid modalities, catering to diverse campaign requirements.",
    },
    {
      title: "Governance (Aid)",
      description:
        "The systems and processes for managing and directing aid organizations and programs. Chats.cash contributes to good governance by providing tools for transparent campaign management, accountability, and reporting for NGOs.",
    },
    {
      title: "Geographic Targeting",
      description:
        "Directing aid to specific geographic areas based on need. Chats.cash campaign setup allows NGOs to target aid distribution geographically and track distribution within defined regions.",
    },
    {
      title: "Grant Management",
      description:
        "The process of overseeing and administering grants and donations. Chats.cash NGO Dashboard provides tools for NGOs to manage donations received for campaigns and track fund utilization transparently.",
    },
    {
      title: "Grievance Redressa",
      description:
        "Mechanisms for beneficiaries to report complaints or concerns about aid programs and have them addressed.Feedback mechanisms through Field Agents on Chats.cash could contribute to grievance redressal.",
    },
    {
      title: "Global Humanitarian System",
      description:
        "The network of organizations and actors involved in international humanitarian action. Chats.cash aims to contribute to the efficiency and transparency of the global humanitarian system through its innovative platform.",
    },
    {
      title: "GPS Tracking (Field Agents)",
      description:
        "Integrated within the Field Agent App to verify agent location during beneficiary onboarding and vendor verification, enhancing accountability and monitoring field operations.",
    },
    {
      title: "Guidance (Humanitarian)",
      description:
        "Operational guidelines and standards that inform humanitarian action. Chats.cash platform design is informed by established humanitarian guidelines focusing on accountability, transparency, and beneficiary-centered approaches.",
    },
    {
      title: "Humanitarian Aid",
      description:
        "Assistance provided to people in need, aiming to save lives, alleviate suffering, and maintain human dignity during and after crises. Chats.cash is a platform specifically designed to improve the delivery and transparency of humanitarian aid.",
    },
    {
      title: "Humanitarian Principles",
      description:
        "Core ethical standards guiding humanitarian action: humanity, neutrality, impartiality, and independence. Chats.cash, with its focus on needs-based assistance and transparent operations, aligns with these principles.",
    },
    {
      title: "Humanitarian Organization (NGO)",
      description:
        "A non-governmental organization dedicated to humanitarian work. NGOs are key users of Chats.cash, utilizing the platform to manage campaigns, distribute aid, and provide transparent reports to donors.",
    },
    {
      title: "Humanity (Principle)",
      description:
        "The humanitarian principle emphasizing that human suffering must be addressed wherever it is found, with the primary aim to alleviate suffering and protect life and health. Chats.cash seeks to enhance the reach and impact of actions based on humanity.",
    },
    {
      title: "Household Targeting",
      description:
        "Identifying and selecting households as beneficiaries based on vulnerability criteria. Chats.cash beneficiary onboarding process through NGOs and Field Agents facilitates effective household targeting based on assessed needs.",
    },
    {
      title: "Hotline (Beneficiary Support)",
      description:
        "A beneficiary support hotline is integrated with Chats.cash campaigns to provide assistance and answer queries from beneficiaries regarding aid receipt and platform usage.",
    },
    {
      title: "Holistic Approach (Aid)",
      description:
        "Addressing multiple needs of beneficiaries in an integrated manner. Chats.cash, while primarily focused on aid distribution, supports holistic approaches by efficiently delivering various types of aid (cash, vouchers, items) within integrated campaigns.",
    },
    {
      title: "Impartiality (Principle)",
      description:
        "The humanitarian principle stating that aid must be provided without discrimination based on nationality, race, religion, political opinions, or other similar criteria. Chats.cash aims to distribute aid impartially, based on assessed need and vulnerability.",
    },
    {
      title: "Independence (Principle)",
      description:
        "The humanitarian principle emphasizing autonomy from political, economic, religious, or other objectives. Chats.cash, as a technology platform, provides a neutral and independent tool for aid distribution, serving various humanitarian organizations.",
    },
    {
      title: "Inclusion (Beneficiary)",
      description:
        "Ensuring that marginalized and vulnerable groups are not excluded from receiving aid. Chats.cash, through various aid delivery methods (QR, SMS, App), solves for broad inclusion, reaching diverse beneficiary populations.",
    },
    {
      title: "Information Management",
      description:
        "Collecting, processing, analyzing, and disseminating information for effective humanitarian response. Chats.cash platform automatically generates detailed reports, enhancing information management for NGOs and donors.",
    },
    {
      title: "Item-Based Assistance",
      description:
        "Providing aid in the form of essential goods (e.g., food, medicine, hygiene kits, shelter materials). Chats.cash platform is designed to manage item-based assistance campaigns, tracking distribution and reporting on item delivery.",
    },
    {
      title: "Impact Measurement",
      description:
        "Assessing the long-term effects and changes resulting from a humanitarian intervention. Chats.cash data and reporting tools can assist NGOs in measuring the impact of their aid campaigns and demonstrating outcomes to donors.",
    },
    {
      title: "Innovation (Aid Delivery)",
      description:
        "Exploring and implementing new and improved methods for delivering aid. Chats.cash platform itself represents an innovation in aid delivery, leveraging blockchain and digital technology to enhance transparency and efficiency.",
    },
    {
      title: "Just-in-Time Aid",
      description:
        "Delivering aid precisely when and where it is needed most urgently. Chats.cash facilitates faster and more responsive aid delivery, potentially enabling more just-in-time assistance to affected populations.",
    },
    {
      title: "Joint Operations (Humanitarian)",
      description:
        "Collaborative efforts between multiple humanitarian organizations to deliver aid. Chats.cash platform can be used to support joint operations by providing a shared platform for campaign management and reporting among collaborating NGOs.",
    },
    {
      title: "Jurisdiction (Operational)",
      description:
        "The geographic or administrative area within which a humanitarian operation is conducted. Chats.cash platform is designed to be operational across various jurisdictions, enabling aid distribution in diverse geographic locations or hard to reach regions.",
    },
    {
      title: "Judicious Use of Resources",
      description:
        "Managing aid resources responsibly and effectively to maximize impact and minimize waste. Chats.cash, through its transparent tracking and efficient processes, promotes judicious use of donated funds and aid resources.",
    },
    {
      title: "Key Performance Indicators (KPIs)",
      description:
        "Measurable values used to track and assess the success of a humanitarian campaign. Chats.cash reporting tools provide data that can be used to monitor KPIs such as aid distribution speed, reach, and beneficiary satisfaction.",
    },
    {
      title: "Knowledge Sharing (Humanitarian)",
      description:
        "Disseminating lessons learned and best practices in humanitarian action. Chats.cash, through its innovative approach, could contribute to knowledge sharing within the humanitarian sector by demonstrating the benefits of blockchain and digital technology in aid delivery.",
    },
    {
      title: "Last Mile Delivery",
      description:
        "Ensuring aid reaches beneficiaries in remote or difficult-to-access locations. Chats.cash aims to improve last-mile delivery by providing digital solutions that can operate in challenging or hard to reach environments and track aid to the final recipient.",
    },
    {
      title: "Leakage (Aid Diversion)",
      description:
        "The unintended or corrupt diversion of aid resources from their intended beneficiaries. Chats.cash's blockchain transparency and audit trails are crucial in minimizing leakage and ensuring aid reaches its intended recipients.",
    },
    {
      title: "Localization (Aid)",
      description:
        "Empowering local communities and organizations to lead and implement humanitarian response efforts. While Chats.cash is a global platform, its use by local NGOs contributes to localization by enabling them to manage campaigns and directly receive and distribute aid.",
    },
    {
      title: "Logistics (Aid)",
      description:
        "The planning, implementation, and control of the efficient, effective forward, and reverse flow and storage of goods, services, and related information between the point of origin and the point of consumption to meet beneficiaries' requirements. Chats.cash streamlines logistics through digital tracking.",
    },
    {
      title: "Learning and Development",
      description:
        "Continuous improvement and capacity building within humanitarian organizations and the sector as a whole. Feedback and data from Chats.cash campaigns can contribute to learning and development by identifying best practices and areas for improvement in aid delivery.",
    },
    {
      title: "Monitoring (Campaign)",
      description:
        "Regularly tracking and observing campaign activities to ensure they are implemented as planned and achieving objectives. Chats.cash provides real-time monitoring capabilities for NGOs through its dashboards and reporting features, allowing for proactive campaign management.",
    },
    {
      title: "Modality (Aid)",
      description:
        "The form or method of aid delivery, such as cash, vouchers, or in-kind goods. Chats.cash supports multiple aid modalities, offering flexibility to NGOs in designing campaigns that best meet beneficiary needs.",
    },
    {
      title: "Mobile Money (Integration)",
      description:
        "Chats.cash has mobile money platforms integrated, further streamlining cash transfers to beneficiaries, particularly in regions where mobile money is widely used.",
    },
    {
      title: "Multi-Sectoral Approach",
      description:
        "Addressing needs across multiple sectors (e.g., food, shelter, health) in a coordinated way. Chats.cash platform can support multi-sectoral approaches by enabling NGOs to manage integrated campaigns delivering diverse forms of aid.",
    },
    {
      title: "Mitigation (Disaster Risk)",
      description:
        "Measures taken to reduce the impact of potential disasters. While Chats.cash is primarily for disaster response, its efficient aid delivery can contribute to longer-term mitigation by helping communities recover and build resilience after crises.",
    },
    {
      title: "Memorandum of Understanding (MOU)",
      description:
        "Formal agreements between organizations outlining collaboration. NGOs using Chats.cash may establish MOUs with vendors, Field Agents, or other partners, which can be managed and tracked in conjunction with the platform.",
    },
    {
      title: "NGO Dashboard",
      description:
        "The administrative interface on Chats.cash for Non-Governmental Organizations, enabling them to create, manage, and report on aid campaigns, onboard users, and interact with donors.",
    },
    {
      title: "Neutrality (Principle)",
      description:
        "The humanitarian principle requiring aid actors to not take sides in conflicts or political disputes. Chats.cash, as a technology platform, is a neutral tool used by diverse humanitarian actors across different contexts.",
    },
    {
      title: "Needs-Based Assistance",
      description:
        "Providing aid based on assessed needs rather than other criteria. Chats.cash beneficiary onboarding processes and campaign design aim to ensure aid is distributed based on verified needs of affected populations.",
    },
    {
      title: "Non-Discriminatory Aid",
      description:
        "Providing aid to all people in need, regardless of their background or circumstances. Chats.cash aligns with non-discrimination through its focus on delivering aid based on assessed vulnerability and humanitarian principles.",
    },
    {
      title: "Notification (Beneficiary)",
      description:
        "Alerting beneficiaries about upcoming aid distributions. Chats.cash utilizes SMS and the Beneficiary App to notify beneficiaries about aid availability and provide instructions for accessing their assistance.",
    },
    {
      title: "Network (Humanitarian)",
      description:
        "The interconnected system of individuals and organizations working in the humanitarian sector. Chats.cash is designed to become a valuable network component, connecting donors, NGOs, and beneficiaries in a more transparent and efficient manner.",
    },
    {
      title: "Onboarding (Beneficiary)",
      description:
        "The process of registering and verifying beneficiaries on the Chats.cash platform, typically conducted by NGOs and Field Agents, ensuring accurate and accountable aid distribution to eligible recipients.",
    },
    {
      title: "Open Campaign (Donation)",
      description:
        "Aid campaigns on Chats.cash that are publicly accessible for any donor to contribute to, promoting broader donor participation and fundraising potential for humanitarian causes.",
    },
    {
      title: "Operational Area",
      description:
        "The geographic region where a humanitarian campaign is active and aid is being distributed. Chats.cash allows NGOs to define and manage operational 1 areas for their campaigns and track aid distribution 2 within those zones.",
    },
    {
      title: "Oversight (Campaign)",
      description:
        "Supervision and monitoring of campaign activities to ensure compliance, efficiency, and accountability. Chats.cash platform provides NGOs with oversight tools through dashboards and reporting features, enhancing campaign management.",
    },
    {
      title: "Outcome Reporting",
      description:
        "Reporting on the results and changes achieved by a humanitarian intervention. Chats.cash data and reporting capabilities can assist NGOs in generating outcome-based reports, demonstrating the impact of their aid campaigns to donors.",
    },
    {
      title: "Offline Functionality",
      description:
        "Consideration for platform usability in areas with limited internet connectivity. While blockchain requires online access for transactions, aspects of Chats.cash (like pre-loaded beneficiary data on Field Agent App) incorporate offline functionality for field operations.",
    },
    {
      title: "Paper Voucher (QR Code)",
      description:
        "A physical voucher with a QR code that beneficiaries can use to redeem aid, providing a tangible and accessible aid delivery method, especially in contexts with limited digital literacy. Chats.cash supports paper vouchers as a delivery option.",
    },
    {
      title: "Payment Gateway (Vendor)",
      description:
        "The system for processing payments to vendors on Chats.cash. The Vendor App integrates with secure payment gateways to facilitate efficient and transparent payment for vendor services within aid campaigns.",
    },
    {
      title: "Privacy (Beneficiary Data)",
      description:
        "Protecting the personal information of beneficiaries. Chats.cash prioritizes beneficiary data privacy while maintaining transparency in transaction records for accountability purposes, ensuring responsible data handling and GDPR compliant.",
    },
    {
      title: "Public Donation",
      description:
        "Donations made openly with the donor's identity revealed, contributing to community engagement and potentially inspiring others to donate. Chats.cash allows donors to choose between public and anonymous donation options.",
    },
    {
      title: "Preparedness (Disaster)",
      description:
        "Proactive measures taken to anticipate and prepare for potential disasters, reducing their impact. While Chats.cash is primarily for response, its efficient systems could be utilized for preparedness activities like pre-positioning aid resources and establishing rapid response mechanisms.",
    },
    {
      title: "Participatory Approach",
      description:
        "Involving beneficiaries and communities in the design and implementation of aid programs. Feedback mechanisms and data from Chats.cash campaigns can inform participatory approaches by providing insights into beneficiary experiences and preferences.",
    },
    {
      title: "QR Code Voucher",
      description:
        "A machine-readable barcode on paper or digital vouchers used for efficient and secure aid redemption. Chats.cash utilizes QR code vouchers as a primary method for beneficiaries to access their aid, promoting speed and security in distribution.",
    },
    {
      title: "Quality Assurance (Aid)",
      description:
        "Ensuring that aid programs meet established standards and are effective in achieving their objectives. Chats.cash, through its transparent monitoring and reporting, contributes to quality assurance by providing data for program evaluation and improvement.",
    },
    {
      title: "Quantifiable Reporting",
      description:
        "Providing reports with measurable data and statistics to demonstrate campaign performance and impact. Chats.cash automatically generates quantifiable reports for donors, offering concrete evidence of aid distribution and campaign progress.",
    },
    {
      title: "Query (Data)",
      description:
        "The ability to access and analyze campaign data within Chats.cash. The platform likely offers query functionalities within dashboards to allow NGOs and authorized users to extract specific data for reporting and analysis.",
    },
    {
      title: "Quick Response (Emergency)",
      description:
        "Rapid and efficient aid delivery in emergency situations. Chats.cash is designed for quick response scenarios, enabling fast mobilization of resources and aid distribution to affected populations in crises",
    },
    {
      title: "Reporting (Campaign)",
      description:
        "Providing regular updates and detailed information about campaign activities, progress, and impact. Chats.cash automatically generates tamper-proof campaign reports for donors and NGOs based on blockchain records, enhancing transparency and accountability. ",
    },
    {
      title: "Recipient (Aid Recipient)",
      description:
        "Synonym for Beneficiary - an individual or group receiving aid. Chats.cash ensures aid reaches the intended recipients effectively and with dignity.",
    },
    {
      title: "Redemption (Voucher)",
      description:
        "The process of exchanging a voucher (paper, SMS, or digital) for aid, goods, or services. Chats.cash facilitates secure voucher redemption through QR codes and SMS codes, ensuring authorized beneficiaries access aid.",
    },
    {
      title: "Risk Management (Campaign)",
      description:
        "Identifying, assessing, and mitigating potential risks that could affect campaign success. Chats.cash platform's transparent tracking and audit trails can assist NGOs in risk management by providing real-time visibility into campaign activities.",
    },
    {
      title: "Real-Time Data (Campaign)",
      description:
        "Up-to-the-minute information about campaign progress and aid distribution, available through Chats.cash dashboards and reporting features, enabling informed decision-making and responsive campaign management.",
    },
    {
      title: "Resilience Building",
      description:
        "Strengthening the capacity of individuals and communities to withstand and recover from shocks and stresses. While primarily for immediate aid, Chats.cash's efficient and transparent delivery could support longer-term resilience-building efforts by ensuring resources are used effectively.",
    },
    {
      title: "SMS Voucher",
      description:
        "Aid vouchers delivered via Short Message Service (SMS) to beneficiaries' mobile phones (including feature phones). Chats.cash supports SMS vouchers to ensure aid access for beneficiaries without smartphones or internet connectivity.",
    },
    {
      title: "Stakeholder Engagement",
      description:
        "Involving relevant parties (beneficiaries, communities, local authorities) in the design and implementation of aid programs. Feedback mechanisms and transparent communication enabled by Chats.cash can facilitate stakeholder engagement.",
    },
    {
      title: "Supply Chain (Aid)",
      description:
        "The network of processes involved in procuring, transporting, storing, and distributing aid goods. Chats.cash focuses on the final distribution and tracking stages of the aid supply chain, ensuring transparency and accountability in reaching beneficiaries.",
    },
    {
      title: "Security (Data & Transactions)",
      description:
        "Protecting sensitive data and ensuring secure financial transactions within the Chats.cash platform. Blockchain technology and robust security measures are integral to Chats.cash to safeguard data and prevent unauthorized access or manipulation.",
    },
    {
      title: "Sustainability (Aid Programs)",
      description:
        "Designing aid programs for long-term impact and local ownership. While Chats.cash primarily focuses on efficient distribution, transparent reporting can contribute to sustainability by ensuring donor confidence and continued support for effective programs.",
    },
    {
      title: "Tamper-Proof Report",
      description:
        "A key feature of Chats.cash reporting, ensured by blockchain technology. Tamper-proof reports guarantee data integrity, meaning campaign reports cannot be altered or falsified, building donor trust and accountability.",
    },
    {
      title: "Targeting (Beneficiary)",
      description:
        "Identifying and selecting specific beneficiaries or groups to receive aid based on vulnerability criteria. Chats.cash beneficiary onboarding process and NGO dashboard tools facilitate targeted aid distribution to those most in need.",
    },
    {
      title: "Tracking (Aid Distribution)",
      description:
        "Monitoring the movement and delivery of aid resources to beneficiaries. Chats.cash provides detailed tracking of aid distribution at every stage, from donation to beneficiary receipt, enhancing transparency and accountability.",
    },
    {
      title: "Transparency (Aid)",
      description:
        "Openly sharing information about aid programs, including funding sources, resource allocation, and campaign progress. Transparency is a core principle of Chats.cash, ensured through blockchain-based reporting and accessible dashboards for donors and NGOs.",
    },
    {
      title: "Trust (Donor)",
      description:
        "Confidence donors have in humanitarian organizations and aid platforms that their donations will be used effectively and reach intended beneficiaries. Chats.cash aims to build donor trust through its transparent, blockchain-backed system and tamper-proof reporting.",
    },
    {
      title: "Training (Field Agents)",
      description:
        "Providing necessary skills and knowledge to Field Agents to effectively onboard beneficiaries, verify vendors, and utilize the Field Agent App. Chats.cash implementation includes training programs and guides for Field Agents to ensure platform effectiveness.",
    },
    {
      title: "User-Friendly Interface",
      description:
        "Designing platforms and applications that are easy to use and navigate for all user types (donors, NGOs, beneficiaries, vendors, agents). Chats.cash provides user-friendly dashboards and apps for seamless adoption and operation across different user groups.",
    },
    {
      title: "Unconditional Cash Transfer",
      description:
        "Providing cash assistance to beneficiaries without specific conditions attached, empowering them to make their own choices and address their priority needs. Chats.cash supports unconditional cash transfer campaigns.",
    },
    {
      title: "Unique Identifier (Beneficiary)",
      description:
        "A distinct code or ID assigned to each beneficiary on Chats.cash to ensure accurate identification, avoid duplication, and maintain data integrity in beneficiary management and aid distribution tracking.",
    },
    {
      title: "Update (Campaign Progress)",
      description:
        "Regular communication about the status and achievements of a humanitarian campaign. Chats.cash automatically generates campaign progress updates within reports accessible to donors and NGOs, keeping stakeholders informed.",
    },
    {
      title: "Vendor App",
      description:
        "A mobile application within the Chats.cash ecosystem for vendors involved in aid campaigns (cash, voucher, or item-based). Vendors can onboard, verify their participation, and receive payments through the Vendor App, streamlining vendor management and payments.",
    },
    {
      title: "Verification (Beneficiary)",
      description:
        "Confirming the identity and eligibility of beneficiaries to receive aid. Chats.cash incorporates robust beneficiary verification processes, often conducted by Field Agents, to ensure aid reaches genuine recipients and prevent fraud.",
    },
    {
      title: "Voucher (Aid Voucher)",
      description:
        "A token representing a specific value or entitlement to goods or services, used in aid distribution. Chats.cash supports various voucher types (paper, SMS, QR code) as a flexible and accountable aid delivery mechanism.",
    },
    {
      title: "Vulnerability Assessment",
      description:
        "Evaluating the level of risk and susceptibility of individuals or communities to harm or crisis. Needs assessments conducted by NGOs before campaigns on Chats.cash often include vulnerability assessments to identify and target the most vulnerable populations.",
    },
    {
      title: "Value for Money (Aid)",
      description:
        "Maximizing the effectiveness and impact of aid spending. Chats.cash promotes value for money by reducing administrative overhead, minimizing leakage, and ensuring transparent and accountable aid distribution, increasing donor confidence and potential for greater impact.",
    },
    {
      title: "Warehouse Management",
      description:
        "Efficiently managing the storage and inventory of aid items in warehouses. For item-based campaigns on Chats.cash, effective warehouse management is crucial, and the platform could integrate with or complement existing warehouse management systems for NGOs.",
    },
    {
      title: "Web-Based Platform",
      description:
        "Chats.cash operates as a web-based platform, accessible via internet browsers on computers and mobile devices, allowing donors and NGOs to access dashboards and manage campaigns online.",
    },
    {
      title: "Workflow (Campaign",
      description:
        "The sequence of steps and processes involved in managing an aid campaign on Chats.cash, from campaign creation and beneficiary onboarding to aid distribution, reporting, and campaign closure. The platform streamlines and digitizes the campaign workflow.",
    },
    {
      title: "Waste Reduction (Aid)",
      description:
        "Minimizing the loss or misuse of aid resources. Chats.cash, through its transparent tracking and accountable processes, aims to reduce waste in aid distribution and ensure resources are used effectively to benefit beneficiaries.",
    },
    {
      title: "Xportable Data",
      description:
        "The data generated by Chats.cash, including campaign reports and beneficiary information, is designed to be easily exportable in formats like CSV or Excel for further analysis, reporting, and offline use by NGOs and donors.",
    },
    {
      title: "Xpenditure Tracking",
      description:
        "Monitoring and recording how campaign funds are spent. Chats.cash automatically tracks all transactions on the blockchain, providing detailed expenditure tracking for NGOs and donors, enhancing financial accountability.",
    },
    {
      title: "Xceptional Circumstances",
      description:
        "The context in which humanitarian aid is typically delivered, often involving emergencies, disasters, and conflicts. Chats.cash is designed to be effective and rapidly deployable in exceptional circumstances where efficient aid distribution is critical.",
    },
    {
      title: "Xchange Rate (Voucher)",
      description:
        "In voucher-based aid, the value assigned to each voucher in relation to local currency. Chats.cash campaign setup would require defining and managing exchange rates for vouchers to ensure appropriate aid value for beneficiaries..",
    },
    {
      title: "Xperience (User Experience)",
      description:
        "The overall impression and satisfaction of users interacting with the Chats.cash platform. User-friendly interfaces and efficient processes are crucial for positive user experience and platform adoption by donors, NGOs, and beneficiaries.",
    },
    {
      title: "Yield (Campaign Impact)",
      description:
        "The results or outcomes achieved by an aid campaign. Chats.cash reporting tools are designed to help NGOs demonstrate the yield or impact of their campaigns, showing donors the tangible results of their contributions and the effectiveness of aid distribution.",
    },
    {
      title: "Youth Engagement (Donation)",
      description:
        "Encouraging younger generations to participate in humanitarian giving. Chats.cash's digital platform and transparent approach may appeal to younger, tech-savvy donors and facilitate youth engagement in humanitarian causes.",
    },
    {
      title: "Yearly Reporting (NGO)",
      description:
        "Comprehensive annual reports generated by NGOs on their overall activities and campaign outcomes. Data and reports from Chats.cash campaigns can be integrated into NGOs' yearly reporting, providing robust evidence of aid distribution and impact.",
    },
    {
      title: "Your Donation, Your Choice",
      description:
        "Empowering donors to choose which campaigns they support, either publicly or anonymously. Chats.cash provides donors with options to select campaigns aligned with their interests and values and control their level of donation visibility.",
    },
    {
      title: "Zero Tolerance (Corruption)",
      description:
        "A firm stance against any form of corruption in humanitarian aid. Chats.cash's blockchain-based transparency and accountability mechanisms contribute to a zero-tolerance approach to corruption by making aid diversion and misuse more difficult and detectable.",
    },
    {
      title: "Zero-Sum Game (Aid is Not)",
      description:
        "Reinforcing the principle that humanitarian aid should not be viewed as a competition where one party's gain is another's loss. Chats.cash aims to improve the overall efficiency and effectiveness of aid, benefiting all stakeholders (donors, NGOs, beneficiaries) without creating a zero-sum dynamic.",
    },
    {
      title: "Zoom (Geographic Focus)",
      description:
        "The ability to focus aid delivery and campaign activities on specific geographic areas. Chats.cash campaign setup allows NGOs to define operational areas and geographically target aid distribution to populations in specific zones of need.",
    },
    {
      title: "Zone of Operation (Campaign)",
      description:
        "The designated geographic area where a specific aid campaign is being implemented. Chats.cash allows NGOs to define and manage zones of operation for their campaigns, tracking aid distribution and impact within those defined areas.",
    },
  ]

  const filteredItems =
    selectedLetter === "All" ? glossaryItems : glossaryItems.filter((item) => item.title.startsWith(selectedLetter))

  // Pagination logic
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage)

  const handlePageChange = (page: any) => {
    setCurrentPage(page)
  }

  return (
    <div className="paddings mb-16 w-full px-16">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-center text-3xl">CHATS Glossary</h2>
        <p className="paragraph max-w-[391px] text-center">
          Our glossary provides clear definitions of key terms and concepts used across CHATS.
        </p>
      </div>

      <div className="paragraph border-color-100 mt-20 flex w-full justify-between border-b pb-2 max-sm:mt-10">
        <motion.div
          className={`flex w-[40px] cursor-pointer items-center justify-center rounded-md ${
            selectedLetter === "All" ? "bg-[#151E22] text-[#05F29A]" : "primary-400"
          }`}
          onClick={() => {
            setSelectedLetter("All")
            setCurrentPage(1) // Reset to the first page when "All" is selected
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          All
        </motion.div>
        {" | "}
        {[
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
        ].map((letter) => (
          <motion.div
            key={letter}
            className={`cursor-pointer ${selectedLetter === letter ? "text-[#05F29A]" : ""}`}
            onClick={() => {
              setSelectedLetter(letter)
              setCurrentPage(1) // Reset to the first page when a letter is selected
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {letter}
          </motion.div>
        ))}
      </div>

      <div className="terms mt-10 grid w-full gap-6 max-sm:gap-4 xl:mt-20 xl:grid-cols-3 2xl:gap-10">
        <AnimatePresence>
          {paginatedItems.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="border-color-100 flex flex-col gap-6 rounded-[10px] border p-6 2xl:h-[216px]"
            >
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="paragraph text-sm">{item.description}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination Controls */}
      <div className="mt-10 flex justify-end gap-2">
        {totalPages > 3 ? (
          <>
            {/* Display first three pages */}
            {Array.from({ length: 3 }, (_, index) => (
              <motion.button
                key={index + 1}
                className={`flex h-[32px] w-[32px] items-center justify-center rounded-xl ${
                  currentPage === index + 1 ? "bg-[#151E22] text-[#05F29A]" : ""
                }`}
                onClick={() => handlePageChange(index + 1)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {index + 1}
              </motion.button>
            ))}

            {/* Display ellipsis */}
            <span className="flex h-[32px] w-[32px] items-center justify-center">...</span>

            {/* Display last three pages */}
            {Array.from({ length: 3 }, (_, index) => (
              <motion.button
                key={totalPages - 2 + index}
                className={`flex h-[32px] w-[32px] items-center justify-center rounded-xl ${
                  currentPage === totalPages - 2 + index ? "bg-[#151E22] text-[#05F29A]" : ""
                }`}
                onClick={() => handlePageChange(totalPages - 2 + index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {totalPages - 2 + index}
              </motion.button>
            ))}
          </>
        ) : (
          // Display all pages if total pages are 3 or less
          Array.from({ length: totalPages }, (_, index) => (
            <motion.button
              key={index + 1}
              className={`flex h-[32px] w-[32px] items-center justify-center rounded-xl ${
                currentPage === index + 1 ? "bg-[#151E22] text-[#05F29A]" : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {index + 1}
            </motion.button>
          ))
        )}
      </div>
    </div>
  )
}

export default Glossary
