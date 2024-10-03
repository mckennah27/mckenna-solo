import { McKennaPage } from "./mckennaPage";
const fs = require("fs")


test('first test', async () => {
    await mckenna.navigate();
    await mckenna.click(mckenna.newsletter);
    await mckenna.click(mckenna.name);
    await mckenna.click(mckenna.email);
    await mckenna.click(mckenna.country);
    await mckenna.click(mckenna.check);
    await mckenna.click(mckenna.submit);
    await mckenna.driver.navigate().back();
    
})