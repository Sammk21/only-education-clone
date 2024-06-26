import React from "react";
import { GoDeviceMobile, GoLocation, GoMail } from "react-icons/go";

const ContactUsPageContent = () => {
  return (
    <section className="lg:my-12 prose lg:max-w-[85%] lg:m-auto px-6 lg:px-0">
      <main className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="flex-col h-full  flex gap-y-5 ">
          <li className="flex gap-x-3 items-center">
            <GoLocation className="h-8 w-8" />
            <p className="text-accent">
              Satra Plaza, 909, Sector 19D <br /> Navi Mumbai 400709
            </p>
          </li>
          <li className="flex gap-x-3 items-center">
            <GoMail className="h-7 w-8" />
            <p className="text-accent">info@onlyEducation.com</p>
          </li>
          <li className="flex gap-x-3 items-center">
            <GoDeviceMobile className="h-7 w-8" />
            <p className="text-accent">+91 6262929248</p>
          </li>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5678266446726!2d73.00382217497756!3d19.082729882123253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c15daef62a9f%3A0x3c655df172e2f1d!2sOnly%20Education%20International%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1716986995877!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </main>
    </section>
  );
};

export default ContactUsPageContent;
