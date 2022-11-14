const dialog= require('../../page/welcome.page');

describe('welcomeDialog', () => {
    it('closeTips', async () => { 
        await dialog.nextBtn.click();
        await dialog.closeBtn.click();
    })
})
