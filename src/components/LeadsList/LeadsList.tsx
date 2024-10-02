"use client";

import { Lead } from "@/models/types";
// import status from '@/assets/status.svg';
// import Image from "next/image";
import styles from "./LeadsList.module.scss";
import { useHandleCard } from "@/hooks/useHandleCard";

type LeadsListProps = {
  leads: Lead[];
};

export const LeadsList = (props: LeadsListProps) => {
  const { leads } = props;
  const { openCard, closeCard } = useHandleCard();

  return leads && leads.length > 0 ? (
    <div className={styles.leads} onClick={closeCard}>
      <h2 className={styles.title}>Сделки</h2>
      <ul className={styles.leadsList}>
        <div className={styles.leadsItem}>
          <p>ID</p>
          <h3>Название сделки</h3>
          <p>Бюджет</p>
        </div>
        {leads.map((el) => (
          <li key={el.id} className={styles.leadsItem} onClick={(e) => openCard(e, el.id)}>
            <p>{el.id}</p>
            <h3>{el.name}</h3>
            <p>{el.price}</p>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div>Сделки не найдены</div>
  );
};
