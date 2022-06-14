const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '7bd58be38f5b488985a52b78282e3e65',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;