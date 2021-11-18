import React from 'react';
import styles from './Headline.module.scss';
import { HeadlineProps } from './Headline.types';

const Headline: React.FC<HeadlineProps> = ({ title }) => (
  <div className={styles.headline}>
    <h1 data-testid="Headline" className="font-bold text-5xl">
      {title}
    </h1>
    <hr className="mt-3 opacity-20" />
  </div>
);
export default Headline;
