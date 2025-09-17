"use server";

export const getPolls = async () => {
  const poll = [
    {
      id: 0,
      question: "Do you like dogs or cats ?",
      image:
        "https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=2186&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      options: ["Cats", "Dogs", "None"],
      votes: [5, 7, 1],
      voted: true,
    },
    {
      id: 1,
      question: "Best month for summer holidays ?",
      image:
        "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VtbWVyJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D",
      options: ["June", "July", "August"],
      votes: [1, 6, 4],
      voted: false,
    },
  ];

  return new Promise<typeof poll>((resolve) => {
    setTimeout(() => {
      resolve(poll);
    }, 5000);
  });
};

export const vote = async (id: number, voteNumber: number) => {
  console.log(id, voteNumber);
};

export const createPoll = async (
  question: string,
  thumbnail: string,
  options: string[]
) => {
  console.log(question, thumbnail, options);
};
