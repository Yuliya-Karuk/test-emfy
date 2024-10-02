import { LeadsList } from "@/components/LeadsList/LeadsList";
import { ApiResponse } from "@/models/types";

const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

const getLeads = async () => {
  const response = await fetch('https://karukyuliya.amocrm.ru/api/v4/leads', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });
  const data: ApiResponse = await response.json();
  return data;
};

export default async function Home() {
  const data = await getLeads();

  return (
    <LeadsList leads={data._embedded.leads} />
  );
}
