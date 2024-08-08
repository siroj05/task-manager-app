
export const apis = async (
  url : string,
  method : string,
  path : string,
  req? : any
) => {
  const res = await fetch(`${url}/${path}`,{
      method: method,
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(req??'')
  })

  return await res.json()
}