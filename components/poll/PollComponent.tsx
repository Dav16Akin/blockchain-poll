import { PollType } from "@/types";
import React from "react";
import PollCard from "../PollCard";

type PollComponentProps = {
  poll: PollType[];
};

const PollComponent = ({ poll }: PollComponentProps) => {
  return (
    <div className="flex flex-col gap-4">
      {poll.map((info, idx) => {
        return (
          <PollCard
            key={idx}
            id={idx}
            question={info.question}
            image={info.image}
            votes={info.votes}
            voted={info.voted}
          />
        );
      })}
    </div>
  );
};

export default PollComponent;
