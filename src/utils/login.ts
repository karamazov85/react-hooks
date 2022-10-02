// mocking API response
export async function logIn (username: string, password: string): Promise<void> { // Note: the generic type of the Promise is always the same as the type of the reslove value. Here, we resolve to void as this is just a mocking function.
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