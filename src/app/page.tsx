import { Suspense } from "react";
import styles from "./page.module.css";
import { Loader } from "@/components/Loader/Loader";
import Main from "@/components/Main/Main";
import { CardWithLoader } from "@/components/CardWithLoader/CardWithLoader";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const { id } = searchParams;

  return (
    <Suspense
      key={"loader"}
      fallback={
        <div className={styles.page}>
          <Loader />
        </div>
      }
    >
      <Main>
        {id && <CardWithLoader id={id} />}
      </Main>
    </Suspense>
  );
}
