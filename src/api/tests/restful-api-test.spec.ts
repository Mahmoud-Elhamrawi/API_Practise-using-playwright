import {test , expect} from '@playwright/test';
import {getAllObjects}  from '../endpointes/restful-api-endpoint';
import {createNewObject}  from '../endpointes/restful-api-endpoint';
import {getSingleObject} from '../endpointes/restful-api-endpoint';
import{updateFullObject} from '../endpointes/restful-api-endpoint';
import {partialUpdateObject} from '../endpointes/restful-api-endpoint';
import {deleteObject} from '../endpointes/restful-api-endpoint';
import objectData  from '../test-data/restful-api-data.json';

//Get all objects
test('get all objects', async ({request}) => {
let res =await getAllObjects(request);
expect(res).toBeTruthy();
expect(res[0].name).toBe(objectData.toBeCreated.name);
})

//crete new obaject
test('crete new obaject', async ({request}) => {
  let res = await createNewObject(request,objectData.toBeCreated);
  expect(res).toBeTruthy();
  expect(res.name).toBe(objectData.toBeCreated.name);
  expect(res.data.year).toBe(objectData.toBeCreated.data.year);
})

//Get single object
test('get single object', async ({request}) => {
    let res = await getSingleObject(request,objectData.existObject.id);
    expect(res).toBeTruthy();
    expect(res.id).toBe(objectData.existObject.id);
})

//update full object
test('update full object', async ({request}) => {
   let Res = await updateFullObject(request,objectData.existObject.id,objectData.toBeUpdatedFull);
   expect(Res).toBeTruthy();
   expect(Res.name).toBe(objectData.toBeUpdatedFull.name);
})

//partial update object
test('partial update object', async ({request}) => {
    let res = await partialUpdateObject(request,objectData.existObject.id,objectData.toBeUpdatedParail);
    expect(res).toBeTruthy();
    expect(res.name).toBe(objectData.toBeUpdatedParail.name);

})

//Delete object
test('delete object', async ({request}) => {
    let res = await deleteObject(request,objectData.existObject.id);
    expect(res).toBeTruthy();
    expect(res.message).toBe(`Object with id = ${objectData.existObject.id} has been deleted.`);
})