"use client";
import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { Certificate, CertificateProps } from "./CertificateItem";
import { LiaCertificateSolid } from "react-icons/lia";

const certificatesItem: CertificateProps[] = [
  {
    title: "AWS Cloud Practitioner",
    company: "Amazon Web Services (AWS)",
    credential: "6b43fe507098439da5719bc171ea74df",
    image: '/company/aws.svg',
  },
  
  {
    title: "Cloud Computing Fundamentals",
    company: "IBM",
    image: '/company/ibm.svg',
    credential: {
        link: "https://www.credly.com/badges/4a4b8229-750b-4486-a442-0cd817fc2ba8/linked_in_profile",
        type: "link"
    }
  },
  
  
  {
    title: "Operating Systems Basics",
    company: "Cisco",
    image: '/company/cisco-2.svg',
    credential: {
        link: "https://www.credly.com/badges/4a4b8229-750b-4486-a442-0cd817fc2ba8/linked_in_profile",
        type: "link"
    }
  },
  {
    title: "Full stack for Commerce on AWS",
    company: "Compass UOL",
    image: '/company/uol-logo.svg',
    credential: {
        link: '/certificates/fullstackpdf.pdf',
        type: "image"
    }
  },
  {
    title: "AI-Assisted Certified Professional - 2024",
    company: "Compass UOL",
    image: '/company/uol-logo.svg',
  },
  {
    title: "Desenvolvimento de games",
    company: "Microcamp",
    image: '/company/microcamp.svg',
  },
];

export const Certificates = () => {
  return (
    <motion.section
      id="certificates"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-white w-full scroll-mt-30 py-10 space-y-8"
    >
      <SectionTitle title="Certificados" Icon={LiaCertificateSolid} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificatesItem.map((item) => (
          <Certificate
            key={item.title}
            title={item.title}
            company={item.company}
            credential={item.credential}
            image={item.image}
          />
        ))}
      </div>
    </motion.section>
  );
};
