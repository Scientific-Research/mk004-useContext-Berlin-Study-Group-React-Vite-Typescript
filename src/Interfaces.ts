import { ReactNode } from 'react';

export interface IBook {
  id: number;
  idCode: string;
  title: string;
  description: string;
  language: string;
}

export interface IAppContext {
  appTitle: string;
  datePartners: string[];
  books: IBook[];
}

export interface IAppProvider {
  children: ReactNode;
}
