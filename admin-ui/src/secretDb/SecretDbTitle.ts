import { SecretDb as TSecretDb } from "../api/secretDb/SecretDb";

export const SECRETDB_TITLE_FIELD = "username";

export const SecretDbTitle = (record: TSecretDb): string => {
  return record.username || record.id;
};
