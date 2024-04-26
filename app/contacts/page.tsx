import { FC, Suspense } from "react";
import { Metadata } from "next";
import ContactList from "../components/ContactList";
import { ContactListSkeleton } from "../ui/skeleton";

export const metadata: Metadata = {
  title: "Contacts bord",
  description: "Good contact, good day",
  keywords: ["Contacts", "Make Contacts", "Application Contacts"],
};

const Contacts: FC = (): JSX.Element => {
  return (
    <div className="container-lg px-4">
      <h3 className="pt-16 mb-3.5 text-xl">Contacts</h3>
      <Suspense fallback={<ContactListSkeleton />}>
        <ContactList />
      </Suspense>
    </div>
  );
};

export default Contacts;
