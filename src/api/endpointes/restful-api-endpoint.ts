import { APIRequestContext } from "@playwright/test";
import { log } from "node:console";

const Objects_Endpoint = "/objects";

//get all objects
async function getAllObjects(req: APIRequestContext) {
  let ListObjects_Response = await req.get(Objects_Endpoint);
  let ListObjects_ResponseJson = await ListObjects_Response.json();
  console.log(await ListObjects_ResponseJson);
  return ListObjects_ResponseJson;
}

//create new object
async function createNewObject(req: APIRequestContext, objectData: any) {
  let newObject = await req.post(Objects_Endpoint, {
    headers: {
      "Content-Type": "application/json",
    },
    data: objectData,
  });

  let obojectBody = await newObject.json();
  console.log(obojectBody);
  return obojectBody;
}

//get single object //{{Base_URL}}/objects/{{ID-item}}
async function getSingleObject(req: APIRequestContext, id: string) {
  let res = await req.get(`${Objects_Endpoint}/${id}`);
  let resBody = await res.json();
  console.log(resBody);
  return resBody;
}
//update full object
async function updateFullObject( req: APIRequestContext, id: string,objectData: any,) {
  let res = await req.put(`${Objects_Endpoint}/${id}`, {
    data: objectData, headers: { "Content-Type": "application/json",},});
  let resBody = await res.json();
  console.log(resBody);
  return resBody;
}


//partial update object
async function partialUpdateObject(req: APIRequestContext, id: string, objectData: any) {
let res = await req.patch(`${Objects_Endpoint}/${id}`, {
    data: objectData,
    headers: { "Content-Type": "application/json", },
})
let resBody = await res.json();
console.log(await resBody);
return resBody;
}

//delete object
async function deleteObject(req: APIRequestContext, id: string) {
    let res =  await req.delete(`${Objects_Endpoint}/${id}`);
    let resBody = await  res.json();
    console.log(resBody);
    return resBody;
}



export { getAllObjects, createNewObject, getSingleObject, updateFullObject ,partialUpdateObject,deleteObject};
