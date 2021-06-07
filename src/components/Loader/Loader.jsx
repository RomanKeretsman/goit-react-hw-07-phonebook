import Template from 'react-loader-spinner';

import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Template
        type="BallTriangle"
        color="#4ddb78d5"
        height={100}
        width={100}
      />
    </div>
  );
};

export default Loader;
