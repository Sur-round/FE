import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PATH } from './route';
import BrandStoryPage from '../pages/BrandStoryPage/BrandStoryPage';
import ContactUsPage from '../pages/ContactUsPage/ContactUsPage';
import HomePage from '../pages/HomePage/HomePage';
import SurveyDistributionPage from '../pages/SurveyDistributionPage/SurveyDistributionPage';
import SurveyListPage from '../pages/SurveyListPage/SurveyListPage';

export const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <HomePage />,
  },
  {
    path: PATH.BRAND_STORY,
    element: <BrandStoryPage />,
  },
  {
    path: PATH.CONTACT_US,
    element: <ContactUsPage />,
  },
  {
    path: PATH.SURVEY_DISTRIBUTION,
    element: <SurveyDistributionPage />,
  },
  {
    path: PATH.SURVEY_LIST,
    element: <SurveyListPage />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
