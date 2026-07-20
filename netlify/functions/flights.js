exports.handler = async (event) => {
  const params = new URLSearchParams(event.queryStringParameters);
  params.set('api_key', process.env.SERPAPI_KEY);
  const url = `https://serpapi.com/search.json?${params}`;
  const res  = await fetch(url);
  const data = await res.json();
  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(data),
  };
};
