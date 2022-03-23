import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SecretDbCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="access_key" source="accessKey" />
        <TextInput label="card_code" source="cardCode" />
        <TextInput label="user_id" source="userId" />
      </SimpleForm>
    </Create>
  );
};
