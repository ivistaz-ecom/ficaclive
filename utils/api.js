export const fetchDataBySlugAndEndpoint = async (slug, endpoint) => {
  try {
    const res = await fetch(`http://beta.ficacworld.org/wp-json/wp/v2/${endpoint}?slug=${slug}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch ${endpoint} data. Status: ${res.status}`);
    }
    const data = await res.json();
    return data[0]; // Assuming the API returns an array, take the first item
  } catch (error) {
    console.error(`Error fetching ${endpoint} data:`, error.message);
    return null;
  }
};