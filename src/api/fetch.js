const HOST = 'https://jsonplaceholder.typicode.com';

export async function getUser(id) {
    return await fetch(`${HOST}/users/${id}`)
}

export async function getUserAlbums(id) {
    return await fetch(`${HOST}/albums/?userId=${id}`)
}