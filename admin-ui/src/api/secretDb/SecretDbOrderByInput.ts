import { SortOrder } from "../../util/SortOrder";

export type SecretDbOrderByInput = {
  accessKey?: SortOrder;
  cardCode?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
