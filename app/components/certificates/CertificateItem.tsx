import Image from "next/image";
import { FaAws } from "react-icons/fa";

type CertificateLink = {
  link: string;
  type: "link" | "image";
};

export interface CertificateProps {
  title: string;
  company: string;
  image: string,
  credential?: string | CertificateLink;
}

export const Certificate = ({
  title,
  company,
  credential,
  image
}: CertificateProps) => {
  const renderCredential = () => {
    if (!credential) return null;

    if (typeof credential === "string") {
      return (
        <p>
          Credencial: <span>{credential}</span>
        </p>
      );
    }

    const { link, type } = credential;

    return (
      <p>
        {type === "link" ? (
          <>
            <span>Credencial: </span>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 underline"
            >
              Visualizar certificado
            </a>
          </>
        ) : type === "image" ? (
          <>
            <span>Certificado: </span>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 underline"
            >
              Visualizar certificado
            </a>
          </>
        ) : null}
      </p>
    );
  };

  return (
    <article className="flex gap-4 hover:bg-neutral-900 p-4">
      <div className="relative h-14 w-14 self-start">
        <Image
        src={image}
        alt={`${company} logo`}
        fill
        />
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold text-sm">{title}</h3>
        <div className="text-xs space-y-1 text-neutral-400">
          <p>{company}</p>
          {renderCredential()}
        </div>
      </div>
    </article>
  );
};
