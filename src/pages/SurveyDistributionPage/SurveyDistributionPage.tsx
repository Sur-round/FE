import SurveyLinkUpload from '../../components/SurveyDistribution/SurveyLinkUpload';
import SurveySite from '../../components/SurveyDistribution/SurveySite';

interface SurveyDistributionPageProps {}

const SurveyDistributionPage = ({}: SurveyDistributionPageProps) => {
  return (
    <>
      <SurveyLinkUpload />
      <SurveySite />
    </>
  );
};

export default SurveyDistributionPage;
