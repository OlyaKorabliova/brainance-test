const HOST = 'https://jsonplaceholder.typicode.com';

export async function getUser(id) {
    return await fetch(`${HOST}/users/${id}`)
}

export async function getUserAlbums(id) {
    return await fetch(`${HOST}/albums/?userId=${id}`)
}

export async function getAlbum(id) {
    return await fetch(`${HOST}/albums/${id}`)
}

export async function getAlbumPhotos(id) {
    return await fetch(`${HOST}/photos/?albumId=${id}`)
}

export async function getPhoto(id) {
    return await fetch(`${HOST}/photos/${id}`)
}

export const getAbsolutelyAllPhotos = async () => {
    return await fetch(`${HOST}/photos`)
};