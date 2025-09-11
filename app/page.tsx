import CreatePollForm from "@/components/CreatePollForm";

export default function Home() {
  return (
    <div className="flex flex-col text-center p-8">
      <h1 className="text-3xl">BLOCKCHAIN POLL</h1>
      <p className="opacity-70">powered by blockchain</p>

      <CreatePollForm/>
    </div>
  );
}
