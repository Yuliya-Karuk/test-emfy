import { Suspense } from "react";
import { Card } from "../Card/Card";
import { Loader } from "../Loader/Loader";
import styles from './CardWithLoader.module.scss';

export const CardWithLoader = ({id}: {id: string}) => {
  return (
    <Suspense
      key={`${id}`}
      fallback={
        <div className={styles.card}>
          <div className={styles.cardLoader}><Loader /></div>
        </div>
      }
    >
      <Card id={id} />
    </Suspense>
  );
};
