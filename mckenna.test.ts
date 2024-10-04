import { McKennaPage } from "./mckennaPage";
const fs = require("fs")
const mp = new McKennaPage();


test('first test', async () => {
    await mp.navigate();
    await mp.click(mp.newsletter);
    await mp.click(mp.name);
    await mp.myName('McKenna Hawks');
    await mp.click(mp.email);
    await mp.myEmail('mchaw27@gmail.com');
    await mp.click(mp.checkBox);
    await fs.writeFile(`${__dirname}/stephenSignUp.png`,
        await mp.driver.takeScreenshot(), 'base64', (e) => {
            if (e) console.error(e)
            else console.log('page saved');
        });
    await mp.driver.sleep(3000)
    //await mp.driver.quit();
    
});

test('second test', async () => {
    await mp.navigate();
    await mp.click(mp.works);
    await mp.click(mp.filmTv);
    await mp.click(mp.other);
    await mp.click(mp.writtenWorks);
    //await mp.driver.quit();
});

test('third test', async () => {
    await mp.navigate();
    await mp.click(mp.upcoming);
    await mp.click(mp.movies);
    await mp.click(mp.novellas);
    //await mp.driver.quit();
    
});

test('fourth test', async () => {
   await mp.navigate();
   await mp.click(mp.theAuthor);
   await mp.click(mp.pressBiography);
   await mp.click(mp.photo);
   await mp.click(mp.filmTvAppearances);
   await mp.click(mp.awards);
   await mp.click(mp.about);
   //await mp.driver.quit();

});

test('fifth test', async () =>{
    await mp.navigate();
    await mp.click(mp.miscellaneous);
    await mp.click(mp.links);
    await mp.click(mp.credits);
    await mp.driver.quit();

    await fs.writeFile(`${__dirname}/stephen404Error`,
        await mp.driver.takeScreenshot(), 'base64', (e) => {
            if (e) console.error(e)
            else console.log('page saved');

})