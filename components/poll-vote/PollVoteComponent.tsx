import React from "react";
import { PollVoteForm } from "../forms/poll-vote-form";
import { PollType } from "@/types";

type PollComponentProps = {
  poll: PollType[];
};

const PollVoteComponent = ({ poll }: PollComponentProps) => {
  const options = ["Monday", "Tuesday", "Wednesday"];
  return (
    <div>
      <PollVoteForm title={poll[0].question} options={options} />
    </div>
  );
};

export default PollVoteComponent;
