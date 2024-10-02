import { Lead } from "@/models/types";
import { CardContent } from "../CardContent/CardContent";

const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

async function getCardData(id: string) {
  const response = await fetch(
    `https://karukyuliya.amocrm.ru/api/v4/leads/${id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const data: Lead = await response.json();

  return data;
}

export const Card = async ({ id }: { id: string }) => {
  const data = await getCardData(id);


  return <CardContent data={data}/>
};
