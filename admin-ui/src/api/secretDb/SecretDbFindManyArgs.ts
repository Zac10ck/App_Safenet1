import { SecretDbWhereInput } from "./SecretDbWhereInput";
import { SecretDbOrderByInput } from "./SecretDbOrderByInput";

export type SecretDbFindManyArgs = {
  where?: SecretDbWhereInput;
  orderBy?: Array<SecretDbOrderByInput>;
  skip?: number;
  take?: number;
};
