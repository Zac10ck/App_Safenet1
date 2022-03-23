import { SecretDb as TSecretDb } from "../api/secretDb/SecretDb";

export const SECRETDB_TITLE_FIELD = "accessKey";

export const SecretDbTitle = (record: TSecretDb): string => {
  return record.accessKey || record.id;
};
