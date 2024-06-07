import ElegibilityCriteria from "@/modules/MBBS-abroad-content/elegibility-criteria-mbbs";
import WhyAbroad from "@/modules/aborad-page-content/why-aborad";
import GlobalProfileLayout from "@/modules/global-profile-layout";
import CountryProfile from "@/modules/global-profile-layout";
import QuestionDropdown from "@/modules/questions-dropdown";
import InfoTableLayout from "@/modules/table-layout";
import TopUniRail from "@/modules/top-uni-rail";
import { getStrapiData } from "@/utils/utils";
import Image from "next/image";
import React from "react";

const StudyCountry = async ({ params }: { params: { slug: string } }) => {
  const getCountryQuery = `/api/countries?filters[slug][$eq]=${params.slug}&populate[countryProfile][populate][profileImage][populate]=true&populate[countryProfile][populate][backgroundImage][populate]=true&populate[whyThisCountry][populate][header]populate=true&populate[eligibilityCriteria][populate][header]populate=true&populate[eligibilityCriteria][populate][criteriaList]populate=true&populate[feesStructure][populate]=true&populate[faq][populate][faq][populate]=true`;

  const data = await getStrapiData(getCountryQuery);

  const backgroundImage = data.data[0].countryProfile.backgroundImage.url;
  const profileImage = data.data[0].countryProfile.profileImage.url;

  const { whyThisCountry, eligibilityCriteria, feesStructure, faq } =
    data.data[0];

  return (
    <div className="pt-36 pb-12 text-dark dark:text-light">
      <GlobalProfileLayout
        profileImage={profileImage}
        backgroundImage={backgroundImage}
        data={data.data[0]}
      />
      <WhyAbroad data={whyThisCountry} />
      <ElegibilityCriteria data={eligibilityCriteria} />
      <InfoTableLayout data={feesStructure} />
      <TopUniRail />
      <QuestionDropdown data={faq} />
    </div>
  );
};

export default StudyCountry;
