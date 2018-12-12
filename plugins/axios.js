export default function ({ $axios }) {
    $axios.onRequest( (config) => {
        if(config.url.indexOf('api.github.com') +1 ) {
            config.headers.Authorization = `token 25e2cf8cd1821c510ea524e6d51216c10452b60a`
        }
    })
}