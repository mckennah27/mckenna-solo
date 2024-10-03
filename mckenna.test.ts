import { McKennaPage } from "./mckennaPage";
const fs = require("fs")
const mp = new McKennaPage();


test('first test', async () => {
    await mp.navigate();
    await mp.click(mp.newsletter);
    await mp.click(mp.name);
    await mp.click(mp.email);
    await mp.click(mp.country);
    await mp.click(mp.checkBox);
    await mp.click(mp.submit);
    
    
})