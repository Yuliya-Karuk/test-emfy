'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export const useHandleCard = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const closeCard = () => {
    const params = new URLSearchParams(searchParams?.toString());
    params.delete('id');

    router.push(`/`);
  };

  const openCard = (
    e: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>,
    leadId: number
  ) => {
    e.stopPropagation();

    const params = new URLSearchParams(searchParams?.toString());

    params.set('id', String(leadId));

    router.push(`/?${params.toString()}`);
  };

  return { closeCard, openCard };
};
