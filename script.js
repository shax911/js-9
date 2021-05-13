

for (let numb = 1; numb <= 10 ; numb++) {
    alert(`введите данные пользователя: ${numb}
нажмие 'enter или ОК' чтобы продолжить...`)
    const user = {
        name: prompt('Имя...'),
        age: +prompt('Возраст...')
    }
    console.log(`${numb} пользователь:`);
    for (const key in user) {
        console.log(`ключ: ${key} значение ключа: ${user[key]}`);
    }
    
}
alert('нажмите f12')
