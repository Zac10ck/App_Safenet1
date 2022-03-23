import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SecretDbEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="access_key" source="accessKey" />
        <TextInput label="card_code" source="cardCode" />
        <TextInput label="user_id" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
