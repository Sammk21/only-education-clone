import { halfGetCountryQuery } from "@/app/data/quries/country-query";
import WhyAbroad from "@/modules/aborad-page-content/why-aborad";
import CountryProfileLayout from "@/modules/country-profile-layout";
import CallToAction from "@/modules/footer/call-to-action";
import GlobalProfileLayout from "@/modules/global-profile-layout";
import QuestionDropdown from "@/modules/questions-dropdown";

import { MetaProps } from "@/types/types";
import { getMetaData, getStrapiData } from "@/utils/utils";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data: MetaProps = await getMetaData("countries", params.slug);
  const baseUrl = process.env.API_URL || "http://admin.onlyeducation.co.in";
  const { seo } = data.data[0];
  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    openGraph: {
      images: [
        {
          url: baseUrl + seo?.metaImage?.url || "",
        },
      ],
    },
  };
}

const StudyCountry = async ({ params }: { params: { slug: string } }) => {
  const getCountryQuery = `/api/countries?filters[slug][$eq]=${params.slug}${halfGetCountryQuery}`;

  const data = await getStrapiData(getCountryQuery);

  const backgroundImage = data.data[0].countryProfile.backgroundImage.url;
  const profileImage = data.data[0].countryProfile.profileImage.url;

  const {
    whyThisCountry,
    eligibilityCriteria,
    feesStructure,
    faq,
    countryProfile,
    overview,
    cta,
  } = data.data[0];
  const title = data.data[0].title;
  const id = data.data[0].id;
  const ctaProps = {
    title,
    id,
  };

  // const title = data.data[0].title;

  return (
    <div className=" pb-12 text-dark dark:text-light">
      <CountryProfileLayout
        profileImage={profileImage}
        backgroundImage={backgroundImage}
        data={countryProfile}
      />
    </div>
  );
};

export default StudyCountry;
