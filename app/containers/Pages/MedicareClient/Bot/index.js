import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { injectIntl } from 'react-intl';
import Navbar from './Navbar';
import ActiveBots from './ActiveBots';
import DeactivatedBots from './DeactivatedBots';
import TrainingData from './TrainingData';
import BotAnalytics from './BotAnalytics';
import ActivityLogs from './ActivityLogs';
import Settings from './Settings';
import UserFeedback from './UserFeedback';
function ClientBot(props) {
  const title = `${brand.name} - Bot page`;
  const description = brand.desc;
  const { intl } = props;
  const [activeTab, setActiveTab] = useState('Active Bots');
  const renderContent = () => {
    switch (activeTab) {
      case 'Active Bots':
        return <ActiveBots />;
      case 'Deactive Bots':
        return <DeactivatedBots />;
      case 'Training Data':
        return <TrainingData/>;
      case 'Bot Analytics':
        return <BotAnalytics/>;
      case 'Activity Logs':
        return <ActivityLogs/>;
      case 'Settings':
        return <Settings/>;
      case 'User Feedback':
        return <UserFeedback/>;
      default:
        return null;
    }
  };
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <div>
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        {renderContent()}
      </div>
    </div>
  );
}

ClientBot.propTypes = { intl: PropTypes.object.isRequired };
export default injectIntl(ClientBot);
