export const fetchData = async (api) => {
  const result = await fetch(api );
  return result.json();
};

