import { useCallback } from "react";
import { useFormContext } from "react-hook-form";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { v4 as getUuidv4 } from "uuid";
import { AddressModel, getNewAddressModel } from "../models/AddressModel";
import Address from "./Address";
import React from "react";

export default function Addresses() {
  const { watch, getValues, setValue } = useFormContext();

  const addresses: AddressModel[] = watch("addresses");

  const onAddAddress = useCallback(() => {
    const currentAddresses = getValues("addresses");

    const newAddress = getNewAddressModel({
      id: getUuidv4()
    });

    setValue("addresses", [...currentAddresses, newAddress]);
  }, [getValues, setValue]);

  return (
    <Stack spacing={2}>
      {addresses.map((address, index) => (
        <Address key={address.id} index={index} />
      ))}
      <Button onClick={onAddAddress}>Add address</Button>
    </Stack>
  );
}
