import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 19825,
  login: 'ROtW',
};

export const sampleWithPartialData: IUser = {
  id: 28193,
  login: 'Z',
};

export const sampleWithFullData: IUser = {
  id: 586,
  login: 'JarIv',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
