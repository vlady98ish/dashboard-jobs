export const getAllBoards = async () => {
  const res = await fetch("http://localhost:3000/boards");
  if (!res.ok) {
    throw Error("Could not find the boards");
  }
  return res.json();
};
