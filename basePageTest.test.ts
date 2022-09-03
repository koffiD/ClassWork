import {Google} from './googleWBP'
const fs = require('fs')
const google = new Google()

test('do a search', async () => {
    await google.navigate()
    await google.search('kitkat chocolate')
    let text = await google.getResults()
    expect(text).toContain('kitkat chocolate')
    await fs.writeFile(`${__dirname}/test.txt`, text, (e) => {
        if (e) console.error(e)
        else console.log('Save Successful')
    })
    await fs.writeFile(`${__dirname}/googleScreenshot.png`, 
    await google.driver.takeScreenshot(), "base64", 
    (e) => {
        if (e) console.error(e)
        else console.log("Save Sucessful")
    })
})
afterAll(async () => {
    await google.driver.quit()
})