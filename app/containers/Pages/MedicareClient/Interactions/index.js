import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { injectIntl } from 'react-intl';
import InteractionsDashboard from './InteractionsDashboard';

function ClientInteractions(props) {
  const title = `${brand.name} - Interactions page`;
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
        <InteractionsDashboard />
      </div>
    </div>
  );
}

ClientInteractions.propTypes = { intl: PropTypes.object.isRequired };
export default injectIntl(ClientInteractions);
