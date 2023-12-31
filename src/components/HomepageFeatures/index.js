import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Accurate Results',
    Svg: require('@site/static/img/accurate_result.svg').default,
    description: (
      <>
        Ensure the Success of Your Email Campaigns with Our Exceptionally Accurate Verification Results
      </>
    ),
  },

  {
    title: 'Fast and Reliable',
    Svg: require('@site/static/img/fast_and_relaiables.svg').default,
    description: (
      <>
        Say Goodbye to Slow Email Verification with Our Swift and Trustworthy System with maximum productivity.
      </>
    ),
  },

  {
    title: 'Free Email Checking',
    Svg: require('@site/static/img/free_emails_check.svg').default,
    description: (
      <>
        Get Accurate Results Without Breaking the Bank with Our Free Single Email Verification Service.
      </>
    ),
  },
  
  {
    title: 'Secure',
    Svg: require('@site/static/img/secure.svg').default,
    description: (
      <>
        Verify email addresses confidently with our secure SAAS solution.
      </>
    ),
  },
  {
    title: 'Secure Payment System',
    Svg: require('@site/static/img/payment.svg').default,
    description: (
      <>
        Secure your financial information with our safe email verification payment system.
      </>
    ),
  },
  
  {
    title: 'Keep No Track of Emails',
    Svg: require('@site/static/img/track_of_email.svg').default,
    description: (
      <>
        Ensure privacy and no tracking with our confidential email validation solution.
      </>
    ),
  },
  // {
  //   title: 'Powered by React',
  //   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Powered by React',
  //   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Powered by React',
  //   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
