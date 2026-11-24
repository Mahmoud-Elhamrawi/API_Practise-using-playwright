import {test ,expect} from '@playwright/test';
import BasicAuth from '../endpointes/basic-auth';

let basic = new BasicAuth();
 test.use({
     baseURL:'https://the-internet.herokuapp.com'
 })
test('basic auth', async ({request}) => {
 await  basic.login(request,'admin','admin');
})