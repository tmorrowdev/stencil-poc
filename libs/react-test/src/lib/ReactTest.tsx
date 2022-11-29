import styles from './ReactTest.module.scss';

/* eslint-disable-next-line */
export interface ReactTestProps {}

export function ReactTest(props: ReactTestProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactTest!</h1>
    </div>
  );
}

export default ReactTest;
