import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '33f51761-f1be-44a4-b754-198da23daacf',
};

export const sampleWithPartialData: IAuthority = {
  name: '5731e9a4-b245-451c-8180-a52a4a827080',
};

export const sampleWithFullData: IAuthority = {
  name: '7b406447-10d0-406c-bb0e-85382442e0c0',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
