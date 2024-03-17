export function uploadPhoto(){
     let promise = new Promise((res) => {
        res({
            status: 200,
            body: 'photo-profile-1',
          })
     })
     return promise
}

export function createUser(){
    let promise = new Promise((res) => {
        res({
            firstName: 'Guillaume',
            lastName: 'Salva',
          })
     })
     return promise
}