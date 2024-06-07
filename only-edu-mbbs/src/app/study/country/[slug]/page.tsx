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
  console.log(params);

  const getCountryQuery = `/api/countries?filters[slug][$eq]=${params.slug}&populate[countryProfile][populate][profileImage][populate]=true&populate[countryProfile][populate][backgroundImage][populate]=true&populate[cta][populate]=true&populate[whyThisCountry][populate][header]populate=true`;

  const data = await getStrapiData(getCountryQuery);

  const backgroundImage = data.data[0].countryProfile.backgroundImage.url;
  const profileImage = data.data[0].countryProfile.profileImage.url;

  const { whyThisCountry } = data.data[0];

  console.dir(whyThisCountry);

  return (
    <div className="pt-36 pb-12 text-dark dark:text-light">
      <GlobalProfileLayout
        profileImage={profileImage}
        backgroundImage={backgroundImage}
        data={data.data[0]}
      />
      <WhyAbroad data={whyThisCountry} />
      {/* <InfoTableLayout title={"Highlights"} />
      <ElegibilityCriteria name="admissions in russia" />
      <InfoTableLayout title={"Eligibility Criteria"} />
      <TopUniRail />
      <QuestionDropdown /> */}
    </div>
  );
};

export default StudyCountry;
