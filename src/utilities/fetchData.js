export const fetchData = async () => {
  const result = await fetch(
    `http://localhost:8000/v2/top-headlines?category=general`
  );

  return result.json();
};
