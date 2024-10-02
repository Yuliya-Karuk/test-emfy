"use client";

import { Lead } from "@/models/types";
// import status from '@/assets/status.svg';
// import Image from "next/image";
import styles from "./LeadsList.module.scss";

type LeadsListProps = {
  leads: Lead[];
};

export const LeadsList = (props: LeadsListProps) => {
  const { leads } = props;

  console.log(leads);

  return leads && leads.length > 0 ? (
    <div>
      <h2>Сделки</h2>
      <div className={styles.leadsList}>
          <div className={styles.leadsItem}>
            <p>ID</p>
            <h3>Название сделки</h3>
            <p>Бюджет</p>
          </div>
        {leads.map((el) => (
          <div key={el.id} className={styles.leadsItem}>
            <p>{el.id}</p>
            <h3>{el.name}</h3>
            <p>{el.price}</p>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div>Сделки не найдены</div>
  );
};
