import { useCallback } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { v4 as getUuidv4 } from "uuid";
import { getNewContactModel } from "./models/ContactModel";
import Addresses from "./components/Addresses";
import { getNewPersonModel } from "./models/PersonModel";
import { getNewAddressModel } from "./models/AddressModel";
import React from "react";

const contact = getNewContactModel({
  person: getNewPersonModel({
    firstName: "John",
    lastName: "Doe"
  }),
  addresses: [
    getNewAddressModel({
      id: getUuidv4(),
      street: "Bubu street",
      streetNumber: "12",
      city: "New Bubu"
    }),
    getNewAddressModel({
      id: getUuidv4(),
      street: "Huhu street",
      streetNumber: "34",
      city: "New Huhu"
    })
  ]
});

export default function UserProfilePage() {
  const formMethods = useForm({
    defaultValues: contact
  });

  const onSubmit = useCallback(() => {
    console.log("on submit called");
  }, []);

  console.log("render App");

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <Typography variant="h5">Person</Typography>
          <Controller
            control={formMethods.control}
            name="person.firstName"
            render={({ field }) => {
              return <TextField label="First Name" {...field} />;
            }}
          />
          <Controller
            control={formMethods.control}
            name="person.lastName"
            render={({ field }) => <TextField label="Last Name" {...field} />}
          />
          <Typography variant="h5">Addresses</Typography>
          <Addresses />
        </Stack>
      </form>
    </FormProvider>
  );
}



// const UserProfilePage = () => {
//   return (
//     <div>UserProfilePage</div>
//   )
// }

// export default UserProfilePage