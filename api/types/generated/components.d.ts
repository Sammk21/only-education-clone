import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksCtaCommandLine extends Schema.Component {
  collectionName: 'components_blocks_cta_command_lines';
  info: {
    displayName: 'CtaCommandLine';
    icon: 'code';
    description: '';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'primary'>;
    title: Attribute.String;
    text: Attribute.String;
    commandLine: Attribute.Text;
  };
}

export interface BlocksCta extends Schema.Component {
  collectionName: 'components_slices_ctas';
  info: {
    displayName: 'cta';
    icon: 'bullhorn';
    description: '';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'muted'>;
    title: Attribute.String;
  };
}

export interface BlocksDropdown extends Schema.Component {
  collectionName: 'components_blocks_dropdowns';
  info: {
    displayName: 'Dropdown';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    href: Attribute.String;
    subMenuLinks: Attribute.Component<'shared.link', true>;
  };
}

export interface BlocksEligibilityCard extends Schema.Component {
  collectionName: 'components_blocks_eligibility_cards';
  info: {
    displayName: 'Eligibility Card';
    icon: 'check';
    description: '';
  };
  attributes: {
    header: Attribute.Component<'shared.header'> & Attribute.Required;
    criteriaTable: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    criteriaList: Attribute.Component<'shared.criteria-list', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 4;
      }>;
  };
}

export interface BlocksEligibilityTable extends Schema.Component {
  collectionName: 'components_blocks_eligibility_tables';
  info: {
    displayName: 'Table';
    icon: 'grid';
    description: '';
  };
  attributes: {
    header: Attribute.Component<'shared.header'>;
    eligibityTable: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
  };
}

export interface BlocksExpBlock extends Schema.Component {
  collectionName: 'components_exp_rail_exp_blocks';
  info: {
    displayName: 'ExpRail';
    description: '';
  };
  attributes: {
    expBlock: Attribute.Component<'shared.exp-block', true> &
      Attribute.SetMinMax<{
        max: 6;
      }>;
  };
}

export interface BlocksFaq extends Schema.Component {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'faq';
    icon: 'question';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'muted'>;
    faq: Attribute.Component<'shared.question-answer', true>;
  };
}

export interface BlocksFeaturesWithImages extends Schema.Component {
  collectionName: 'components_slices_features_with_images';
  info: {
    displayName: 'TopUniversityData';
    icon: 'images';
    description: '';
  };
  attributes: {
    header: Attribute.Component<'shared.header'>;
    universities: Attribute.Relation<
      'blocks.features-with-images',
      'oneToMany',
      'api::university.university'
    >;
  };
}

export interface BlocksFeatures extends Schema.Component {
  collectionName: 'components_slices_features';
  info: {
    displayName: 'features';
    icon: 'search-plus';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'secondary'>;
    header: Attribute.Component<'shared.header'>;
    cards: Attribute.Component<'shared.card', true>;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_slices_heroes';
  info: {
    displayName: 'hero';
    icon: 'pizza-slice';
  };
  attributes: {
    images: Attribute.Media;
    header: Attribute.Component<'shared.header'>;
    text: Attribute.String;
    buttons: Attribute.Component<'shared.button', true>;
  };
}

export interface BlocksMetrics extends Schema.Component {
  collectionName: 'components_blocks_metrics';
  info: {
    displayName: 'Metrics';
    icon: 'chartCircle';
  };
  attributes: {
    Header: Attribute.Component<'shared.header', true>;
  };
}

export interface BlocksPopularCourses extends Schema.Component {
  collectionName: 'components_blocks_popular_courses';
  info: {
    displayName: 'PopularCourses';
    icon: 'filter';
    description: '';
  };
  attributes: {
    header: Attribute.Component<'shared.header'>;
    documents: Attribute.Component<'shared.header', true>;
  };
}

export interface BlocksPricing extends Schema.Component {
  collectionName: 'components_slices_pricings';
  info: {
    displayName: 'pricing';
    icon: 'money-check-alt';
  };
  attributes: {
    header: Attribute.Component<'shared.header'>;
    pricingCards: Attribute.Component<'pricing.pricing-cards', true>;
  };
}

export interface BlocksProfiles extends Schema.Component {
  collectionName: 'components_blocks_profiles';
  info: {
    displayName: 'Profiles';
    icon: 'eye';
    description: '';
  };
  attributes: {
    backgroundImage: Attribute.Media & Attribute.Required;
    profileImage: Attribute.Media & Attribute.Required;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 100;
      }>;
    avgPackage: Attribute.String;
    fees: Attribute.Decimal;
    location: Attribute.String;
    Approvedby: Attribute.String;
    establishment: Attribute.String;
  };
}

export interface BlocksRankComparison extends Schema.Component {
  collectionName: 'components_blocks_rank_comparisons';
  info: {
    displayName: 'RankComparison';
    description: '';
  };
  attributes: {
    header: Attribute.Component<'shared.header'> & Attribute.Required;
    ranks: Attribute.Component<'shared.ranking'> & Attribute.Required;
  };
}

export interface BlocksRelatedArticles extends Schema.Component {
  collectionName: 'components_article_related_articles';
  info: {
    displayName: 'relatedArticles';
    icon: 'caret-square-right';
    description: '';
  };
  attributes: {
    header: Attribute.Component<'shared.header'>;
    articles: Attribute.Relation<
      'blocks.related-articles',
      'oneToMany',
      'api::article.article'
    >;
  };
}

export interface BlocksRelatedRestaurants extends Schema.Component {
  collectionName: 'components_restaurant_related_restaurants';
  info: {
    displayName: 'relatedRestaurants';
    icon: 'copy';
    description: '';
  };
  attributes: {
    header: Attribute.Component<'shared.header'>;
  };
}

export interface BlocksServices extends Schema.Component {
  collectionName: 'components_blocks_services';
  info: {
    displayName: 'Services';
    description: '';
  };
  attributes: {
    header: Attribute.Component<'shared.header'>;
    ourServiceInfo: Attribute.Component<'shared.our-service-summary', true> &
      Attribute.SetMinMax<{
        max: 5;
      }>;
  };
}

export interface BlocksTeam extends Schema.Component {
  collectionName: 'components_slices_teams';
  info: {
    displayName: 'team';
    icon: 'people-carry';
    description: '';
  };
  attributes: {
    header: Attribute.Component<'shared.header'>;
    members: Attribute.Relation<
      'blocks.team',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface BlocksTestimonial extends Schema.Component {
  collectionName: 'components_shared_testimonials';
  info: {
    displayName: 'testimonial';
    icon: 'quote-right';
    description: '';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'primary'>;
    text: Attribute.Text & Attribute.Required;
    author: Attribute.Relation<
      'blocks.testimonial',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
  };
}

export interface BlocksTopCountriesData extends Schema.Component {
  collectionName: 'components_blocks_top_countries_data';
  info: {
    displayName: 'TopCountriesData';
    description: '';
  };
  attributes: {
    CountryCard: Attribute.Component<'shared.university-card'>;
    Header: Attribute.Component<'shared.header'>;
  };
}

export interface BlocksWhyAbroad extends Schema.Component {
  collectionName: 'components_blocks_why_abroads';
  info: {
    displayName: 'Why Abroad';
    description: '';
  };
  attributes: {
    header: Attribute.Component<'shared.header'> & Attribute.Required;
    qna: Attribute.Component<'shared.why-this-uni-country', true>;
  };
}

export interface BlocksWhyMbbsAbroad extends Schema.Component {
  collectionName: 'components_blocks_why_mbbs_abroads';
  info: {
    displayName: 'Why mbbs Abroad';
    icon: 'question';
  };
  attributes: {
    Header: Attribute.Component<'shared.header', true>;
    SubDescription: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface BlocksWhyUs extends Schema.Component {
  collectionName: 'components_blocks_why_uses';
  info: {
    displayName: 'Why this';
    description: '';
  };
  attributes: {
    header: Attribute.Component<'shared.header'> & Attribute.Required;
    qna: Attribute.Component<'shared.why-this-uni-country', true> &
      Attribute.Required;
  };
}

export interface CoursesJobs extends Schema.Component {
  collectionName: 'components_courses_jobs';
  info: {
    displayName: 'Jobs';
  };
  attributes: {
    jobOpportunities: Attribute.Component<'shared.overview'>;
  };
}

export interface CoursesLatestupdates extends Schema.Component {
  collectionName: 'components_courses_latestupdates';
  info: {
    displayName: 'latestupdates';
  };
  attributes: {};
}

export interface CoursesOverviewTabs extends Schema.Component {
  collectionName: 'components_courses_overview_tabs';
  info: {
    displayName: 'overviewTabs';
    description: '';
  };
  attributes: {
    highlights: Attribute.Component<'shared.overview'> & Attribute.Required;
    aboutCourse: Attribute.Component<'shared.overview'> & Attribute.Required;
    eligibilityCriteria: Attribute.Component<'shared.overview'> &
      Attribute.Required;
    whyChoose: Attribute.Component<'shared.overview'> & Attribute.Required;
    admissionProcess: Attribute.Component<'shared.overview'> &
      Attribute.Required;
    Cutoff: Attribute.Component<'shared.overview'> & Attribute.Required;
    latestupdates: Attribute.Component<'shared.overview'> & Attribute.Required;
    overview: Attribute.Component<'shared.overview'> & Attribute.Required;
  };
}

export interface CoursesSyllabusSubject extends Schema.Component {
  collectionName: 'components_courses_syllabus_subjects';
  info: {
    displayName: 'syllabus-subject';
    description: '';
  };
  attributes: {
    subjects: Attribute.Component<'shared.overview'> & Attribute.Required;
  };
}

export interface EntranceExamsCutoff extends Schema.Component {
  collectionName: 'components_entrance_exams_cutoffs';
  info: {
    displayName: 'cutoff';
    description: '';
  };
  attributes: {
    categoryWise: Attribute.Component<'shared.overview'> & Attribute.Required;
    subjectWise: Attribute.Component<'shared.overview'>;
  };
}

export interface EntranceExamsEntranceExams extends Schema.Component {
  collectionName: 'components_entrance_exams_entrance_exams';
  info: {
    displayName: 'overviewTabs';
    description: '';
  };
  attributes: {
    latestupdates: Attribute.Component<'shared.overview'> & Attribute.Required;
    overview: Attribute.Component<'shared.overview'> & Attribute.Required;
    highlights: Attribute.Component<'shared.overview'> & Attribute.Required;
    eligibilitycriteria: Attribute.Component<'shared.overview'> &
      Attribute.Required;
    exampattern: Attribute.Component<'shared.overview'> & Attribute.Required;
    ImpExamDates: Attribute.Component<'shared.overview'> & Attribute.Required;
    prepTips: Attribute.Component<'shared.overview'> & Attribute.Required;
    prepBooks: Attribute.Component<'shared.overview'> & Attribute.Required;
  };
}

export interface EntranceExamsPreviousPapers extends Schema.Component {
  collectionName: 'components_entrance_exams_previous_papers';
  info: {
    displayName: 'previousPapers';
    description: '';
  };
  attributes: {
    previousPapers: Attribute.Component<
      'university.previous-exams-papers',
      true
    > &
      Attribute.Required;
    header: Attribute.String;
    subHeading: Attribute.String;
  };
}

export interface EntranceExamsResultsTab extends Schema.Component {
  collectionName: 'components_entrance_exams_results_tabs';
  info: {
    displayName: 'resultsTab';
    description: '';
  };
  attributes: {
    resultDates: Attribute.Component<'shared.overview'> & Attribute.Required;
    checkResult: Attribute.Component<'shared.overview'> & Attribute.Required;
    percentCalculate: Attribute.Component<'shared.overview'> &
      Attribute.Required;
    normalizationProcess: Attribute.Component<'shared.overview'> &
      Attribute.Required;
  };
}

export interface GlobalExplore extends Schema.Component {
  collectionName: 'components_global_explores';
  info: {
    displayName: 'explore';
    description: '';
  };
  attributes: {
    header: Attribute.Component<'shared.header'>;
    list: Attribute.Component<'shared.criteria-list', true>;
  };
}

export interface GlobalFooter extends Schema.Component {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'footer';
    icon: 'align-right';
  };
  attributes: {
    footerColumns: Attribute.Component<'shared.footer-columns', true>;
    socialNetworks: Attribute.Component<'shared.social-networks', true>;
    button: Attribute.Component<'shared.button'>;
    label: Attribute.String;
  };
}

export interface GlobalNavigation extends Schema.Component {
  collectionName: 'components_global_navigations';
  info: {
    displayName: 'navigation';
    icon: 'location-arrow';
    description: '';
  };
  attributes: {
    links: Attribute.Component<'shared.link', true>;
    logo: Attribute.Component<'shared.link'>;
    authButton: Attribute.Component<'shared.link'>;
  };
}

export interface GlobalPageHeader extends Schema.Component {
  collectionName: 'components_global_page_headers';
  info: {
    displayName: 'Page Header';
  };
  attributes: {
    PageHeader: Attribute.Component<'shared.header', true>;
  };
}

export interface GlobalWhyIndia extends Schema.Component {
  collectionName: 'components_global_why_indias';
  info: {
    displayName: 'Why India';
    icon: 'chartBubble';
  };
  attributes: {
    header: Attribute.Component<'shared.header'>;
    list: Attribute.Component<'shared.header', true>;
  };
}

export interface MenuMenuLink extends Schema.Component {
  collectionName: 'components_menu_menu_links';
  info: {
    displayName: 'MenuLink';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface PricingPerks extends Schema.Component {
  collectionName: 'components_shared_perks';
  info: {
    displayName: 'perks';
    icon: 'adjust';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    included: Attribute.Boolean & Attribute.Required;
  };
}

export interface PricingPricingCards extends Schema.Component {
  collectionName: 'components_shared_pricing_cards';
  info: {
    displayName: 'pricingCards';
    icon: 'file-invoice-dollar';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String;
    price: Attribute.Integer & Attribute.Required;
    perks: Attribute.Component<'pricing.perks', true>;
  };
}

export interface RestaurantInformation extends Schema.Component {
  collectionName: 'components_restaurant_information';
  info: {
    displayName: 'information';
    icon: 'align-center';
  };
  attributes: {
    description: Attribute.Text;
    opening_hours: Attribute.Component<'restaurant.opening-hours', true>;
    location: Attribute.Component<'restaurant.location'>;
  };
}

export interface RestaurantLocation extends Schema.Component {
  collectionName: 'components_restaurant_more_information';
  info: {
    displayName: 'moreInformation';
    icon: 'allergies';
  };
  attributes: {
    address: Attribute.String;
    website: Attribute.String;
    phone: Attribute.String;
  };
}

export interface RestaurantOpeningHours extends Schema.Component {
  collectionName: 'components_opening_hours';
  info: {
    displayName: 'openingHours';
    icon: 'calendar-alt';
  };
  attributes: {
    day_interval: Attribute.String & Attribute.Required;
    opening_hour: Attribute.String;
    closing_hour: Attribute.String;
  };
}

export interface RestaurantRichContent extends Schema.Component {
  collectionName: 'components_restaurant_rich_contents';
  info: {
    displayName: 'richContent';
    icon: 'asterisk';
  };
  attributes: {
    content: Attribute.RichText;
  };
}

export interface SharedApplicationDate extends Schema.Component {
  collectionName: 'components_shared_application_dates';
  info: {
    displayName: 'Application Date';
  };
  attributes: {
    startDate: Attribute.Date;
    endDate: Attribute.Date;
  };
}

export interface SharedButton extends Schema.Component {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
    icon: 'compress';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>;
    link: Attribute.Component<'shared.link'>;
  };
}

export interface SharedCard extends Schema.Component {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'card';
    icon: 'sim-card';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.String;
    image: Attribute.Media;
  };
}

export interface SharedCasteEligibility extends Schema.Component {
  collectionName: 'components_shared_caste_eligibilities';
  info: {
    displayName: 'Caste Eligibility';
  };
  attributes: {
    casteTitle: Attribute.String;
    casteTable: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface SharedComment extends Schema.Component {
  collectionName: 'components_shared_comments';
  info: {
    displayName: 'comment';
    icon: 'comment-dots';
  };
  attributes: {
    content: Attribute.Text;
  };
}

export interface SharedCourserAndFees extends Schema.Component {
  collectionName: 'components_shared_courser_and_fees';
  info: {
    displayName: 'courserAndFees';
    description: '';
  };
  attributes: {
    fees: Attribute.Decimal;
    courseSpecializationFirstYearFees: Attribute.Decimal;
  };
}

export interface SharedCriteriaList extends Schema.Component {
  collectionName: 'components_shared_criteria_lists';
  info: {
    displayName: 'criteriaList';
    icon: 'filter';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    list: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
  };
}

export interface SharedDropdown extends Schema.Component {
  collectionName: 'components_shared_dropdowns';
  info: {
    displayName: 'Dropdown';
  };
  attributes: {
    label: Attribute.String;
    href: Attribute.String;
    subMenu: Attribute.Component<'shared.link', true>;
  };
}

export interface SharedEnquiry extends Schema.Component {
  collectionName: 'components_shared_enquiries';
  info: {
    displayName: 'Enquiry';
    icon: 'layout';
    description: '';
  };
  attributes: {
    specialization: Attribute.String;
    university: Attribute.Relation<
      'shared.enquiry',
      'oneToOne',
      'api::university.university'
    >;
    level: Attribute.String;
  };
}

export interface SharedExpBlock extends Schema.Component {
  collectionName: 'components_shared_exp_blocks';
  info: {
    displayName: 'ExpBlock';
    description: '';
  };
  attributes: {
    counter: Attribute.String;
    label: Attribute.String;
  };
}

export interface SharedFeaturesCheck extends Schema.Component {
  collectionName: 'components_shared_features_checks';
  info: {
    displayName: 'featuresCheck';
    icon: 'check';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface SharedFees extends Schema.Component {
  collectionName: 'components_shared_fees';
  info: {
    displayName: 'Fees';
  };
  attributes: {
    firstYear: Attribute.Decimal;
    secondYear: Attribute.Decimal;
    thirdYear: Attribute.Decimal;
    fourthYear: Attribute.Decimal;
    fifthYear: Attribute.Decimal;
  };
}

export interface SharedFooterColumns extends Schema.Component {
  collectionName: 'components_shared_footer_columns';
  info: {
    displayName: 'footerColumns';
    icon: 'align-left';
  };
  attributes: {
    links: Attribute.Component<'shared.link', true>;
  };
}

export interface SharedHeader extends Schema.Component {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'header';
    icon: 'heading';
    description: '';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SharedHighlights extends Schema.Component {
  collectionName: 'components_shared_highlights';
  info: {
    displayName: 'Highlights';
    description: '';
  };
  attributes: {
    highlights: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
  };
}

export interface SharedLatestUpdateWithDates extends Schema.Component {
  collectionName: 'components_shared_latest_update_with_dates';
  info: {
    displayName: 'latestUpdateWithDates';
    description: '';
  };
  attributes: {
    latestUpdateWithDates: Attribute.Component<'shared.latestupdates-with-dates'>;
  };
}

export interface SharedLatestupdatesWithDates extends Schema.Component {
  collectionName: 'components_shared_latestupdates_with_dates';
  info: {
    displayName: 'latestupdatesWithDates';
  };
  attributes: {
    updateDates: Attribute.Date;
    updatesTitle: Attribute.RichText;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
    icon: 'backward';
    description: '';
  };
  attributes: {
    href: Attribute.String & Attribute.Required;
    target: Attribute.Enumeration<['_blank']>;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    university: Attribute.Relation<
      'shared.link',
      'oneToOne',
      'api::university.university'
    >;
    label: Attribute.String;
    country: Attribute.Relation<
      'shared.link',
      'oneToOne',
      'api::country.country'
    >;
  };
}

export interface SharedListWithHeading extends Schema.Component {
  collectionName: 'components_shared_list_with_headings';
  info: {
    displayName: 'List with heading';
    icon: 'layer';
    description: '';
  };
  attributes: {
    list: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    header: Attribute.Component<'shared.header'>;
  };
}

export interface SharedList extends Schema.Component {
  collectionName: 'components_shared_lists';
  info: {
    displayName: 'List';
    description: '';
  };
  attributes: {
    list: Attribute.String;
  };
}

export interface SharedMenuLinks extends Schema.Component {
  collectionName: 'components_shared_menu_links';
  info: {
    displayName: 'Menu Links';
  };
  attributes: {
    name: Attribute.String;
    subMenuLInks: Attribute.Component<'shared.sub-menu-links'>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
    description: '';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']>;
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedOurServiceSummary extends Schema.Component {
  collectionName: 'components_shared_our_service_summaries';
  info: {
    displayName: 'OurServiceSummary';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.Text;
  };
}

export interface SharedOverview extends Schema.Component {
  collectionName: 'components_shared_overviews';
  info: {
    displayName: 'overview';
    description: '';
  };
  attributes: {
    header: Attribute.String;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface SharedPlacement extends Schema.Component {
  collectionName: 'components_shared_placements';
  info: {
    displayName: 'Placement';
    description: '';
  };
  attributes: {
    list: Attribute.Component<'shared.list', true>;
    placementTable: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
  };
}

export interface SharedPublication extends Schema.Component {
  collectionName: 'components_shared_publications';
  info: {
    displayName: 'publication';
    icon: 'arrow-up';
  };
  attributes: {
    publish_at: Attribute.DateTime;
    ready: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface SharedQuestionAnswer extends Schema.Component {
  collectionName: 'components_shared_question_answers';
  info: {
    displayName: 'questionAnswer';
    icon: 'question-circle';
    description: '';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
  };
}

export interface SharedRankingComponent extends Schema.Component {
  collectionName: 'components_shared_ranking_component_s';
  info: {
    displayName: 'Ranking Course';
    description: '';
  };
  attributes: {
    rankingYear: Attribute.Date;
    rankingPublisher: Attribute.Relation<
      'shared.ranking-component',
      'oneToOne',
      'api::ranking.ranking'
    >;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        minLength: 120;
        maxLength: 400;
      }>;
    course: Attribute.Relation<
      'shared.ranking-component',
      'oneToOne',
      'api::course.course'
    >;
    pdfData: Attribute.Media;
    rankingNumber: Attribute.Integer;
    stream: Attribute.Relation<
      'shared.ranking-component',
      'oneToOne',
      'api::stream.stream'
    >;
  };
}

export interface SharedRankingStreams extends Schema.Component {
  collectionName: 'components_shared_ranking_streams';
  info: {
    displayName: 'Ranking Streams';
    description: '';
  };
  attributes: {
    stream: Attribute.Relation<
      'shared.ranking-streams',
      'oneToOne',
      'api::stream.stream'
    >;
    rankingYear: Attribute.Date;
    rankingPublisher: Attribute.Relation<
      'shared.ranking-streams',
      'oneToOne',
      'api::ranking.ranking'
    >;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        minLength: 120;
        maxLength: 300;
      }>;
    pdfData: Attribute.Media;
    rankingNumber: Attribute.Integer;
  };
}

export interface SharedRanking extends Schema.Component {
  collectionName: 'components_shared_rankings';
  info: {
    displayName: 'ranking';
    icon: 'filter';
    description: '';
  };
  attributes: {
    objectRank: Attribute.String;
    worldRank: Attribute.String;
  };
}

export interface SharedRelatedNews extends Schema.Component {
  collectionName: 'components_shared_related_news';
  info: {
    displayName: 'RelatedNews';
    description: '';
  };
  attributes: {
    news: Attribute.Relation<
      'shared.related-news',
      'oneToMany',
      'api::new.new'
    >;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedSocialNetworks extends Schema.Component {
  collectionName: 'components_shared_social_network';
  info: {
    displayName: 'socialNetwork';
    icon: 'network-wired';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
  };
}

export interface SharedSubCourses extends Schema.Component {
  collectionName: 'components_shared_sub_courses';
  info: {
    displayName: 'Sub Courses';
    description: '';
  };
  attributes: {
    durationYear: Attribute.Integer;
    seatsOffered: Attribute.Integer;
    medianSalary: Attribute.Decimal;
    tutionFees: Attribute.Decimal;
  };
}

export interface SharedSubMenuLinks extends Schema.Component {
  collectionName: 'components_shared_sub_menu_links';
  info: {
    displayName: 'Sub Menu Links';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface SharedTeamCard extends Schema.Component {
  collectionName: 'components_shared_team_cards';
  info: {
    displayName: 'teamCard';
    icon: 'smile';
  };
  attributes: {
    fullname: Attribute.String & Attribute.Required;
    job: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    socialNetworks: Attribute.Component<'shared.social-networks', true>;
  };
}

export interface SharedTest extends Schema.Component {
  collectionName: 'components_shared_tests';
  info: {
    displayName: 'CriteriaCard';
    description: '';
  };
  attributes: {
    test: Attribute.String;
    List: Attribute.Component<'shared.list', true>;
  };
}

export interface SharedUniversityCard extends Schema.Component {
  collectionName: 'components_shared_university_cards';
  info: {
    displayName: 'UniversityCard';
    description: '';
  };
  attributes: {
    universities: Attribute.Relation<
      'shared.university-card',
      'oneToMany',
      'api::university.university'
    >;
  };
}

export interface SharedUniversityList extends Schema.Component {
  collectionName: 'components_shared_university_lists';
  info: {
    displayName: 'universityList';
    description: '';
  };
  attributes: {
    avgPackage: Attribute.String;
    fees: Attribute.String;
    examsAccepted: Attribute.Enumeration<
      ['jee', 'neet', 'cat', 'jee advance', 'neet ug ', 'neet pg']
    >;
    location: Attribute.String;
    ownership: Attribute.String;
  };
}

export interface SharedVideoPlayer extends Schema.Component {
  collectionName: 'components_global_video_players';
  info: {
    displayName: 'Video Player';
    description: '';
  };
  attributes: {
    Video: Attribute.Media;
  };
}

export interface SharedWhyThisUniCountry extends Schema.Component {
  collectionName: 'components_shared_why_this_uni_country_s';
  info: {
    displayName: 'Why this (uni/country)';
    description: '';
  };
  attributes: {
    Question: Attribute.Text;
    Answer: Attribute.Text;
  };
}

export interface TopCourseAdmissionProcess extends Schema.Component {
  collectionName: 'components_top_course_admission_processes';
  info: {
    displayName: 'admissionProcess';
  };
  attributes: {
    admissionProcess: Attribute.Component<'shared.overview'>;
  };
}

export interface TopCourseOverviewTab extends Schema.Component {
  collectionName: 'components_top_course_overview_tabs';
  info: {
    displayName: 'Overview Tab';
    description: '';
  };
  attributes: {
    overview: Attribute.Component<'shared.overview'>;
    latestupdates: Attribute.Component<'shared.overview'>;
    highlights: Attribute.Component<'shared.overview'>;
    entranceExams: Attribute.Component<'shared.overview'>;
  };
}

export interface TopCourseSalary extends Schema.Component {
  collectionName: 'components_top_course_salaries';
  info: {
    displayName: 'salary';
  };
  attributes: {
    averageSalary: Attribute.Component<'shared.overview'>;
  };
}

export interface UniversityAdmission extends Schema.Component {
  collectionName: 'components_university_admissions';
  info: {
    displayName: 'admission';
    description: '';
  };
  attributes: {
    courseAdmission: Attribute.Component<'shared.overview'>;
    eventsInfo: Attribute.Component<'shared.overview'>;
    cutoff: Attribute.Component<'shared.overview'>;
  };
}

export interface UniversityAffiM extends Schema.Component {
  collectionName: 'components_university_affi_ms';
  info: {
    displayName: 'AffiM';
    description: '';
  };
  attributes: {
    isCollege: Attribute.Boolean;
    university: Attribute.Relation<
      'university.affi-m',
      'oneToOne',
      'api::university.university'
    >;
  };
}

export interface UniversityCollegeCourseManager extends Schema.Component {
  collectionName: 'components_university_college_course_managers';
  info: {
    displayName: 'College Course Manager';
    description: '';
  };
  attributes: {
    applicationDate: Attribute.Component<'shared.application-date'>;
    eligibility: Attribute.String;
    course: Attribute.Relation<
      'university.college-course-manager',
      'oneToOne',
      'api::course.course'
    >;
    spzm: Attribute.Component<'university.spzm', true>;
    fees: Attribute.Decimal;
  };
}

export interface UniversityCourserAndFees extends Schema.Component {
  collectionName: 'components_university_courser_and_fees';
  info: {
    displayName: 'courserAndFees';
  };
  attributes: {
    courseFee: Attribute.Decimal;
  };
}

export interface UniversityCoursesAndFees extends Schema.Component {
  collectionName: 'components_university_courses_and_fees';
  info: {
    displayName: 'courses and fees';
    description: '';
  };
  attributes: {
    fees: Attribute.Decimal;
  };
}

export interface UniversityCoursesFees extends Schema.Component {
  collectionName: 'components_university_courses_fees';
  info: {
    displayName: 'coursesFees';
    description: '';
  };
  attributes: {
    feeDetails: Attribute.Component<'shared.overview'>;
    entranceExams: Attribute.Component<'shared.overview'>;
    paymentGuidelines: Attribute.Component<'shared.overview'>;
  };
}

export interface UniversityFacultyInfo extends Schema.Component {
  collectionName: 'components_university_faculty_infos';
  info: {
    displayName: 'facultyInfo';
    description: '';
  };
  attributes: {
    designation: Attribute.String;
    professorName: Attribute.String;
    email: Attribute.Email;
    number: Attribute.String;
  };
}

export interface UniversityFaculty extends Schema.Component {
  collectionName: 'components_university_faculties';
  info: {
    displayName: 'faculty';
    description: '';
  };
  attributes: {
    facInfo: Attribute.Component<'university.faculty-info', true>;
  };
}

export interface UniversityFemaleHostel extends Schema.Component {
  collectionName: 'components_university_female_hostels';
  info: {
    displayName: 'femaleHostel';
    description: '';
  };
  attributes: {
    header: Attribute.String;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface UniversityGallery extends Schema.Component {
  collectionName: 'components_university_galleries';
  info: {
    displayName: 'gallery';
  };
  attributes: {
    events: Attribute.Media;
    infrastructure: Attribute.Media;
  };
}

export interface UniversityHostel extends Schema.Component {
  collectionName: 'components_university_hostels';
  info: {
    displayName: 'hostel';
    description: '';
  };
  attributes: {
    maleHostel: Attribute.Component<'university.male-hostel'>;
    femaleHostel: Attribute.Component<'university.female-hostel'>;
  };
}

export interface UniversityMaleHostel extends Schema.Component {
  collectionName: 'components_university_male_hostels';
  info: {
    displayName: 'maleHostel';
    description: '';
  };
  attributes: {
    header: Attribute.String;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface UniversityNotification extends Schema.Component {
  collectionName: 'components_university_notifications';
  info: {
    displayName: 'notification';
  };
  attributes: {
    header: Attribute.String;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface UniversityOverviewTabs extends Schema.Component {
  collectionName: 'components_university_overview_tabs';
  info: {
    displayName: 'Overview Tabs';
    description: '';
  };
  attributes: {
    latestUpdates: Attribute.Component<'shared.overview'>;
    overview: Attribute.Component<'shared.overview'>;
    highlights: Attribute.Component<'shared.overview'>;
    ranking: Attribute.Component<'shared.overview'>;
    whyChoose: Attribute.Component<'shared.overview'>;
    academicAdvantages: Attribute.Component<'shared.overview'>;
  };
}

export interface UniversityPlacements extends Schema.Component {
  collectionName: 'components_university_placements';
  info: {
    displayName: 'placements';
  };
  attributes: {
    placementInfo: Attribute.Component<'shared.overview'>;
    packagesInfo: Attribute.Component<'shared.overview'>;
  };
}

export interface UniversityPreviousExamsPapers extends Schema.Component {
  collectionName: 'components_university_previous_exams_papers';
  info: {
    displayName: 'Previous Exams Papers';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    paper: Attribute.Media;
  };
}

export interface UniversityPreviousExamsPdf extends Schema.Component {
  collectionName: 'components_university_previous_exams_pdfs';
  info: {
    displayName: 'Previous Exams Pdf';
  };
  attributes: {
    title: Attribute.String;
    paper: Attribute.Media;
  };
}

export interface UniversityRanking extends Schema.Component {
  collectionName: 'components_university_rankings';
  info: {
    displayName: 'Ranking';
    description: '';
  };
  attributes: {
    rankinngCourse: Attribute.Component<'shared.ranking-component', true>;
    rankingStreams: Attribute.Component<'shared.ranking-streams', true>;
  };
}

export interface UniversityScholarshipsInfo extends Schema.Component {
  collectionName: 'components_university_scholarships_infos';
  info: {
    displayName: 'scholarshipsInfo';
  };
  attributes: {
    header: Attribute.String;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface UniversityScholarships extends Schema.Component {
  collectionName: 'components_university_scholarships';
  info: {
    displayName: 'scholarships';
  };
  attributes: {
    scholarshipsInfo: Attribute.Component<'university.scholarships-info'>;
  };
}

export interface UniversitySpzm extends Schema.Component {
  collectionName: 'components_university_spzms';
  info: {
    displayName: 'spzm';
    description: '';
  };
  attributes: {
    specialization: Attribute.Relation<
      'university.spzm',
      'oneToOne',
      'api::specialization.specialization'
    >;
    fees: Attribute.String;
    cutoff: Attribute.Integer;
    entrance_exam: Attribute.Relation<
      'university.spzm',
      'oneToOne',
      'api::entrance-exam.entrance-exam'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.cta-command-line': BlocksCtaCommandLine;
      'blocks.cta': BlocksCta;
      'blocks.dropdown': BlocksDropdown;
      'blocks.eligibility-card': BlocksEligibilityCard;
      'blocks.eligibility-table': BlocksEligibilityTable;
      'blocks.exp-block': BlocksExpBlock;
      'blocks.faq': BlocksFaq;
      'blocks.features-with-images': BlocksFeaturesWithImages;
      'blocks.features': BlocksFeatures;
      'blocks.hero': BlocksHero;
      'blocks.metrics': BlocksMetrics;
      'blocks.popular-courses': BlocksPopularCourses;
      'blocks.pricing': BlocksPricing;
      'blocks.profiles': BlocksProfiles;
      'blocks.rank-comparison': BlocksRankComparison;
      'blocks.related-articles': BlocksRelatedArticles;
      'blocks.related-restaurants': BlocksRelatedRestaurants;
      'blocks.services': BlocksServices;
      'blocks.team': BlocksTeam;
      'blocks.testimonial': BlocksTestimonial;
      'blocks.top-countries-data': BlocksTopCountriesData;
      'blocks.why-abroad': BlocksWhyAbroad;
      'blocks.why-mbbs-abroad': BlocksWhyMbbsAbroad;
      'blocks.why-us': BlocksWhyUs;
      'courses.jobs': CoursesJobs;
      'courses.latestupdates': CoursesLatestupdates;
      'courses.overview-tabs': CoursesOverviewTabs;
      'courses.syllabus-subject': CoursesSyllabusSubject;
      'entrance-exams.cutoff': EntranceExamsCutoff;
      'entrance-exams.entrance-exams': EntranceExamsEntranceExams;
      'entrance-exams.previous-papers': EntranceExamsPreviousPapers;
      'entrance-exams.results-tab': EntranceExamsResultsTab;
      'global.explore': GlobalExplore;
      'global.footer': GlobalFooter;
      'global.navigation': GlobalNavigation;
      'global.page-header': GlobalPageHeader;
      'global.why-india': GlobalWhyIndia;
      'menu.menu-link': MenuMenuLink;
      'pricing.perks': PricingPerks;
      'pricing.pricing-cards': PricingPricingCards;
      'restaurant.information': RestaurantInformation;
      'restaurant.location': RestaurantLocation;
      'restaurant.opening-hours': RestaurantOpeningHours;
      'restaurant.rich-content': RestaurantRichContent;
      'shared.application-date': SharedApplicationDate;
      'shared.button': SharedButton;
      'shared.card': SharedCard;
      'shared.caste-eligibility': SharedCasteEligibility;
      'shared.comment': SharedComment;
      'shared.courser-and-fees': SharedCourserAndFees;
      'shared.criteria-list': SharedCriteriaList;
      'shared.dropdown': SharedDropdown;
      'shared.enquiry': SharedEnquiry;
      'shared.exp-block': SharedExpBlock;
      'shared.features-check': SharedFeaturesCheck;
      'shared.fees': SharedFees;
      'shared.footer-columns': SharedFooterColumns;
      'shared.header': SharedHeader;
      'shared.highlights': SharedHighlights;
      'shared.latest-update-with-dates': SharedLatestUpdateWithDates;
      'shared.latestupdates-with-dates': SharedLatestupdatesWithDates;
      'shared.link': SharedLink;
      'shared.list-with-heading': SharedListWithHeading;
      'shared.list': SharedList;
      'shared.menu-links': SharedMenuLinks;
      'shared.meta-social': SharedMetaSocial;
      'shared.our-service-summary': SharedOurServiceSummary;
      'shared.overview': SharedOverview;
      'shared.placement': SharedPlacement;
      'shared.publication': SharedPublication;
      'shared.question-answer': SharedQuestionAnswer;
      'shared.ranking-component': SharedRankingComponent;
      'shared.ranking-streams': SharedRankingStreams;
      'shared.ranking': SharedRanking;
      'shared.related-news': SharedRelatedNews;
      'shared.seo': SharedSeo;
      'shared.social-networks': SharedSocialNetworks;
      'shared.sub-courses': SharedSubCourses;
      'shared.sub-menu-links': SharedSubMenuLinks;
      'shared.team-card': SharedTeamCard;
      'shared.test': SharedTest;
      'shared.university-card': SharedUniversityCard;
      'shared.university-list': SharedUniversityList;
      'shared.video-player': SharedVideoPlayer;
      'shared.why-this-uni-country': SharedWhyThisUniCountry;
      'top-course.admission-process': TopCourseAdmissionProcess;
      'top-course.overview-tab': TopCourseOverviewTab;
      'top-course.salary': TopCourseSalary;
      'university.admission': UniversityAdmission;
      'university.affi-m': UniversityAffiM;
      'university.college-course-manager': UniversityCollegeCourseManager;
      'university.courser-and-fees': UniversityCourserAndFees;
      'university.courses-and-fees': UniversityCoursesAndFees;
      'university.courses-fees': UniversityCoursesFees;
      'university.faculty-info': UniversityFacultyInfo;
      'university.faculty': UniversityFaculty;
      'university.female-hostel': UniversityFemaleHostel;
      'university.gallery': UniversityGallery;
      'university.hostel': UniversityHostel;
      'university.male-hostel': UniversityMaleHostel;
      'university.notification': UniversityNotification;
      'university.overview-tabs': UniversityOverviewTabs;
      'university.placements': UniversityPlacements;
      'university.previous-exams-papers': UniversityPreviousExamsPapers;
      'university.previous-exams-pdf': UniversityPreviousExamsPdf;
      'university.ranking': UniversityRanking;
      'university.scholarships-info': UniversityScholarshipsInfo;
      'university.scholarships': UniversityScholarships;
      'university.spzm': UniversitySpzm;
    }
  }
}
