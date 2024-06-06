const STATIC = {
  HOME: '/',
  SURVEY_DISTRIBUTION: '/survey-distribution',
  SURVEY_LIST: '/survey-list',
  BRAND_STORY: '/brand-story',
  CONTACT_US: '/contact-us',
};

const DYNAMIC = {
  // 동적으로 처리할 경로가 있다면 여기에 추가
};

export const PATH = {
  ...STATIC,
  ...DYNAMIC,
} as const;
