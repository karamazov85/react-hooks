// mocking API response
export async function logIn (username, password) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (username === 'Stan' && password === 'Getz') {
            resolve();
            } else {
            reject();
        }
        },1000)
    })
}