const conta = {
    email : 'admin@admin.com',
    password : '123456',
    name : 'Admin',
    balance : 2000.00
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta);
    }, 3000);
})