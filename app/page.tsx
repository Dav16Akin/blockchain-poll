import CreatePollForm from "@/components/CreatePollForm";
import PollComponent from "@/components/poll/PollComponent";

export default function Home() {
  const poll = [
    {
      question: "Do you like dogs or cats ?",
      image:
        "https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=2186&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      votes: [0, 5, 7, 1],
      voted: true,
    },
    {
      question: "Do you like dogs or cats ?",
      image:
        "https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=2186&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      votes: [0, 5, 7, 1],
      voted: true,
    },
  ];

  return (
    <div className="flex flex-col text-center space-y-8 p-8">
      <div>
        <h1 className="text-6xl font-bold">Polls Rethinked</h1>
        <p className="opacity-70">Powered By Blockchain</p>
      </div>

      <CreatePollForm />

      <div className="flex w-full justify-center">
        <div className="w-2/6">
          <PollComponent poll={poll} />
        </div>
        <div className="w-4/6 text-left">Options</div>
      </div>
    </div>
  );
}
