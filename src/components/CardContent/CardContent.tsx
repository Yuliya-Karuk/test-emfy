"use client";

import { Lead } from "@/models/types";

import StatusIcon from '@/assets/status.svg';
import classnames from 'classnames';
import styles from './CardContent.module.scss'
import { formatTimestampToDate, getStatusColor, TaskStatus } from "@/ utils/utils";

type CardContentProps = {
  data: Lead;
};

export const CardContent = (props: CardContentProps) => {
  const { data } = props;
  const date = formatTimestampToDate(data.closest_task_at);
  const statusColor = getStatusColor(data.closest_task_at);
  console.log(data);

  return  (
    <div className={styles.cardContent}>
      <h2>{data.name}</h2>
      <p>ID - {data.id}</p>
      <p>Бюджет - {data.price}</p>
      <p>Дата - {date}</p>
      <StatusIcon
        className={classnames(styles.statusIcon, {
          [styles.red]: statusColor === TaskStatus.Overdue,
          [styles.green]: statusColor === TaskStatus.DueToday,
          [styles.yellow]: statusColor === TaskStatus.DueLater,
      })}
      />
    </div>
  );
};
