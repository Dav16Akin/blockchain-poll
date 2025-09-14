import { PollType } from "@/types";
import Image from "next/image";
import React from "react";

const PollCard = ({question, image, votes, voted} : PollType) => {
  const numberOfVotes = votes.reduce((acc, curr) => (acc += curr));
  return (
    <div className="space-y-3.5 w-full flex flex-col">
      <div className="bg-gray-200 w-full">
        <Image src={image ?? null} alt="image" width={500} height={500} className="object-cover h-[150px]"/>
      </div>

      <div className="space-y-1.5">
        <p className="truncate font-semibold text-left">{question}</p>
        <div className="flex justify-between">
          <small>Votes : {numberOfVotes}</small>
          <small
            className={`${
              voted == true ? "bg-green-600 text-white" : ""
            } rounded-full px-2`}
          >
            {voted == true ? "voted" : "vote"}
          </small>
        </div>
      </div>
    </div>
  );
};

export default PollCard;
