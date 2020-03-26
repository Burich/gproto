const localImage = (filename) => {
    return `${process.env.PUBLIC_URL}/assets/images/${filename}`;
}

export {
    localImage
}