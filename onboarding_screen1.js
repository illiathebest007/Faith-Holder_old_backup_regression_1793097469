describe('Тест онбординга', () => {

    it('должен обработать чекбоксы онбординга и перейти на следующий экран', async () => {
        
        console.log('Ищем и нажимаем на первый чекбокс...');
        // Ищем элемент, который содержит часть текста "Я погоджую зв'язок"
        const firstCheckbox = await $('//XCUIElementTypeOther[contains(@name, "Я погоджую зв\'язок")]');
        await firstCheckbox.waitForDisplayed({ timeout: 30000 });
        await firstCheckbox.click();
        
        console.log('Ищем и нажимаем на второй чекбокс...');
        // Ищем элемент, который содержит часть текста "Я розумію"
        const secondCheckbox = await $('//XCUIElementTypeOther[contains(@name, "Я розумію")]');
        await secondCheckbox.waitForDisplayed({ timeout: 30000 });
        await secondCheckbox.click();

        console.log('Ищем и нажимаем на кнопку "Продовжити"...');
        // Ищем кнопку, которая содержит текст "Продовжити"
        const continueButton = await $('//XCUIElementTypeOther[contains(@name, "Продовжити")]');
        await continueButton.waitForDisplayed({ timeout: 30000 });
        await continueButton.click();

        // Проверяем, что экран онбординга исчез.
        console.log('Ожидаем, пока экран онбординга исчезнет...');
        await continueButton.waitForExist({ timeout: 30000, reverse: true });
        
        console.log('✅ Успешно перешли на следующий экран.');
    });

});