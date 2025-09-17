"use client"

import { SelectedContext } from "@/app/selected-poll-provider";
import { PollType } from "@/types";
import Image from "next/image";
import React, { useContext } from "react";

const PollCard = ({question, image, votes, voted, id} : PollType) => {

  const sctx = useContext(SelectedContext)

  const setSelected = sctx?.setSelected ?? (() => {});

  const hadleClick = () => {
    if (typeof id === "number") {
      setSelected(id);
    }
  }

  const numberOfVotes = votes.reduce((acc, curr) => (acc += curr));
  return (
    <div onClick={hadleClick} className="space-y-3.5 w-full flex flex-col border rounded-sm overflow-hidden hover:bg-gray-200">
      <div className="bg-gray-200 w-full">
        <Image src={image ?? null} alt="image" width={500} height={500} className="object-cover h-[120px]" priority/>
      </div>

      <div className="space-y-1.5 p-4">
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
