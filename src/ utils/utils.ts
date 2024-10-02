export function formatTimestampToDate(timestamp: number) {
  const date = new Date(timestamp * 1000);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}

export enum TaskStatus {
  Overdue = "red",
  DueToday = "green",
  DueLater = "yellow",
}

export const getStatusColor = (taskDate: number): string => {
  const today = new Date();
  const taskDateObj = new Date(taskDate * 1000);
  const diffDays = Math.floor((taskDateObj.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  if (diffDays < 0) {
    return TaskStatus.Overdue;
  } else if (diffDays === 0) {
    return TaskStatus.DueToday;
  } else {
    return TaskStatus.DueLater;
  }
};
