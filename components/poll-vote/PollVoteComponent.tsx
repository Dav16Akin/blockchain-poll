"use client";

import React, { useContext, useEffect } from "react";
import { PollVoteForm } from "../forms/poll-vote-form";
import { PollType } from "@/types";
import { SelectedContext } from "@/app/selected-poll-provider";

type PollComponentProps = {
  poll: PollType[];
};

const PollVoteComponent = ({ poll }: PollComponentProps) => {
  const sctx = useContext(SelectedContext);

  const selected = sctx?.selected ?? null;

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
      categories: selected !== null ? poll[selected].options : [],
    },
  };

  useEffect(() => {
    let chart: any;

    if (selected !== null && poll[selected].voted) {
      (async () => {
        const ApexCharts = (await import("apexcharts")).default;

        const el = document.querySelector("#poll-results");
        if (el) {
          chart = new ApexCharts(el, chartSettings);
          chart.render();
        }
      })();
    }

    // cleanup so chart is destroyed if poll changes
    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [selected, poll]);

  return (
    <div>
      {selected !== null && poll[selected].voted === false && (
        <PollVoteForm
          title={selected !== null ? poll[selected].question : ""}
          options={poll[selected].options}
          id={poll[selected].id}
        />
      )}

      {selected !== null && poll[selected].voted && (
        <div id="poll-results" className="poll-results"></div>
      )}
    </div>
  );
};

export default PollVoteComponent;
