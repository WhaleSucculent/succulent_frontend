import { useCallback } from "react";
import { useFormContext, Controller } from "react-hook-form";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AddressModel } from "../models/AddressModel";
import React from "react";

type AddressProps = {
  index: number;
  onRemoveAddress: () => void;
};

export default function Address({ index }: AddressProps) {
  const { control, getValues, setValue } = useFormContext();

  const onRemoveAddress = useCallback(() => {
    const currentAddresses: AddressModel[] = getValues("addresses");
    const currentAddress = getValues(`addresses.[${index}]`);

    const newAddresses = currentAddresses.filter(
      ({ id }) => id !== currentAddress.id
    );

    setValue("addresses", newAddresses);
  }, [getValues, setValue, index]);

  return (
    <Stack spacing={2}>
      <Typography variant="h6">Address {index + 1}</Typography>
      <Controller
        control={control}
        name={`addresses[${index}].street`}
        render={({ field }) => <TextField label="Street" {...field} />}
      />
      <Controller
        control={control}
        name={`addresses[${index}].streetNumber`}
        render={({ field }) => <TextField label="Street Number" {...field} />}
      />
      <Controller
        control={control}
        name={`addresses[${index}].city`}
        render={({ field }) => <TextField label="City" {...field} />}
      />
      <Button color="error" onClick={onRemoveAddress}>
        remove address
      </Button>
    </Stack>
  );
}
