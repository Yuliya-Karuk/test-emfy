import { LeadsList } from "@/components/LeadsList/LeadsList";
import { ApiResponse } from "@/models/types";
import React from "react";

const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const leadsPerPage = 12;
const leadsPerSecond = 3;

const getLeads = async () => {
  const leads = [];
  let fetchedCount = 0;
  let currentPage = 1;

  while (fetchedCount < leadsPerPage) {
    const response = await fetch(
      `https://karukyuliya.amocrm.ru/api/v4/leads?limit=${leadsPerSecond}&page=${currentPage}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const data: ApiResponse = await response.json();

    if (data._embedded && data._embedded.leads) {
      leads.push(...data._embedded.leads);
      fetchedCount += data._embedded.leads.length;

      if (data._embedded.leads.length < leadsPerSecond) {
        break;
      }
    }

    currentPage += 1;
    await delay(200);
  }

  return leads;
};

type MainProps = {
  children: React.ReactNode;
}

export default async function Main({ children }: MainProps) {
  const data = await getLeads();

  return (
    <>
      <LeadsList leads={data} />
      {children}
    </>
  );
}
