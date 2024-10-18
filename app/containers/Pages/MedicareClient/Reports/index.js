import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { injectIntl } from 'react-intl';
import BotPerformance from './BotPerformance';
import UserEngagement from './UserEngagement';
import BillingReport from './BillingReport';
import Reports from './Reports';

function ClientReports(props) {
  const title = `${brand.name} - Reports page`;
  const description = brand.desc;
  const { intl } = props;

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
        <h1 style={{
          marginBottom: '1.5em',
          fontSize: '1.25em',
          fontFamily: 'Inter, sans-serif',
          fontWeight: '800',
          backgroundColor: 'rgb(2, 3, 220, .5)',
          padding: '.75em 1em',
          borderRadius: '.5em',
        }}>Report and Performance Analytics Dashboard</h1>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '.25em',
          justifyContent: 'space-between'
        }}>
          <BotPerformance />
          <UserEngagement />
          <BillingReport />
          <Reports />
        </div>
      </div>
    </div>
  );
}

ClientReports.propTypes = { intl: PropTypes.object.isRequired };
export default injectIntl(ClientReports);
