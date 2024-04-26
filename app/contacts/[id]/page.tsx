import { getContactInfo } from "@/app/fetch/fetch-api";
import ContactInfo from "@/app/components/ContactInfo";
import { notFound } from "next/navigation";

const Contact = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const contact = await getContactInfo(id);

  if (!contact) notFound();

  return (
    <div className="container mx-auto px-4">
      <ContactInfo contact={contact} />
    </div>
  );
};

export default Contact;
