'use client';

import { useContext } from 'react';
import { IdContext } from './IdProvider';

export const useId = () => {
  const context = useContext(IdContext);

  if (context === undefined) {
    throw new Error('useId hook must be used within a IdProvider');
  }

  return context;
};
