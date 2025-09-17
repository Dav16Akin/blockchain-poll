"use client";

import React, { useContext, useEffect } from "react";
import { PollVoteForm } from "../forms/poll-vote-form";
import { PollType } from "@/types";
import { SelectedContext } from "@/app/selected-poll-provider";

type PollComponentProps = {
  poll: PollType[];
};


const PollVoteComponent = ({ poll }: PollComponentProps) => {
  const sctx = useContext(SelectedContext)

  const selected = sctx?.selected ?? null

  const chartSettings: ApexCharts.ApexOptions = {
    series: [
      {
        data: selected !== null ? poll[selected].votes : [],
      },
    ],
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true,
      },
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ["Monday", "Tuesday", "Wednesday"],
    },
  };

  useEffect(() => {
    (async () => {
      const ApexChartsModule = (await import("apexcharts")).default;
      const chart = new ApexChartsModule(
        document.querySelector("#poll-results"),
        chartSettings
      );
      chart.render();
    })();
  }, [selected]);

  const options = ["Monday", "Tuesday", "Wednesday"];

  return (
    <div>
      {selected !== null && poll[selected].voted === false && (<PollVoteForm title={selected !== null ? poll[selected].question : ""} options={options} />)}

      {selected !== null && poll[selected].voted && <div id="poll-results" className="poll-results"></div>}
    </div>
  );
};

export default PollVoteComponent;
