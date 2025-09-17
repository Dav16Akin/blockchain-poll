import CreatePollForm from "@/components/CreatePollForm";
import PollVoteComponent from "@/components/poll-vote/PollVoteComponent";
import PollComponent from "@/components/poll/PollComponent";
import { getPolls } from "@/lib/actions/poll-service.action";

export default async function Home() {
  const poll = await getPolls()
  
  return (
    <div className="flex flex-col text-center space-y-8 p-8">
      <div>
        <h1 className="text-6xl font-bold">Polls Rethinked</h1>
        <p className="opacity-50">Powered By Blockchain</p>
      </div>

      <CreatePollForm />

      <div className="flex gap-6 w-full justify-center">
        <div className="w-2/6">
          <PollComponent poll={poll} />
        </div>
        <div className="w-4/6 text-left">
          <PollVoteComponent poll={poll} />
        </div>
      </div>
    </div>
  );
}
