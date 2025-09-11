"use client"

import React, { useContext } from "react";
import { PollForm } from "./forms/poll-form";
import { ToggleContext } from "@/app/toggle-povider";

const CreatePollForm = () => {
  const value = useContext(ToggleContext);
  
  return value?.toggle === true ? (
    <div>
      <PollForm />
    </div>
  ) : null;
};

export default CreatePollForm;
