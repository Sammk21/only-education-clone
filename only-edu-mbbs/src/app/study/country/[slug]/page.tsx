import ElegibilityCriteria from "@/modules/MBBS-abroad-content/elegibility-criteria-mbbs";
import WhyAbroad from "@/modules/aborad-page-content/why-aborad";
import GlobalProfileLayout from "@/modules/global-profile-layout";
import CountryProfile from "@/modules/global-profile-layout";
import QuestionDropdown from "@/modules/questions-dropdown";
import InfoTableLayout from "@/modules/table-layout";
import TopUniRail from "@/modules/top-uni-rail";
import { ImageAttributes, MetaProps } from "@/types/types";
import { getCachedData, getMetaData, getStrapiData } from "@/utils/utils";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
``;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data: MetaProps = await getMetaData("countries", params.slug);
  const baseUrl = process.env.STRAPI_URL || "http://localhost:1337";
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
  const getCountryQuery = `/api/countries?filters[slug][$eq]=${params.slug}&populate[countryProfile][populate][profileImage][populate]=true&populate[countryProfile][populate][backgroundImage][populate]=true&populate[whyThisCountry][populate][header]populate=true&populate[eligibilityCriteria][populate][header]populate=true&populate[eligibilityCriteria][populate][criteriaList]populate=true&populate[feesStructure][populate][header][populate]=true&populate[faq][populate][faq][populate]=true`;

  const data = await getStrapiData(getCountryQuery);

  const backgroundImage = data.data[0].countryProfile.backgroundImage.url;
  const profileImage = data.data[0].countryProfile.profileImage.url;

  const { whyThisCountry, eligibilityCriteria, feesStructure, faq } =
    data.data[0];

  return (
    <div className=" pb-12 text-dark dark:text-light">
      <GlobalProfileLayout
        profileImage={profileImage}
        backgroundImage={backgroundImage}
        data={data.data[0]}
      />
      <WhyAbroad data={whyThisCountry} />
      <ElegibilityCriteria data={eligibilityCriteria} />
      <InfoTableLayout data={feesStructure} />
      {/* <TopUniRail /> */}
      <QuestionDropdown data={faq} />
    </div>
  );
};

export default StudyCountry;
