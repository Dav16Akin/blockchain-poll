import CreatePollForm from "@/components/CreatePollForm";
import PollVoteComponent from "@/components/poll-vote/PollVoteComponent";
import PollComponent from "@/components/poll/PollComponent";

export default function Home() {
  const poll = [
    {
      question: "Do you like dogs or cats ?",
      image:
        "https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=2186&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      votes: [5, 7, 1],
      voted: true,
    },
    {
      question: "Best month for summer holidays ?",
      image:
        "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VtbWVyJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D",
      votes: [1, 6, 4],
      voted: false,
    },
  ];

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
