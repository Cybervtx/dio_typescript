const conta = {
    email : 'admin@admin.com',
    password : '123456',
    name : 'Admin'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta);
    }, 3000);
})