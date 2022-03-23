import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SecretDbWhereInput = {
  accessKey?: StringNullableFilter;
  cardCode?: StringNullableFilter;
  id?: StringFilter;
  userId?: StringNullableFilter;
  username?: StringNullableFilter;
};
