export default {
    async fetch(request) {
        const upstreams = [
            'https://rsshub.app',
            'https://hub.slarker.me',
            'https://rsshub.rssforever.com'
        ];
        const url = new URL(request.url);
        const upstream = upstreams[Math.floor(Math.random() * upstreams.length)];
        const newUrl = url.toString().replace(url.origin, upstream);
        return fetch(newUrl, request);
    }
};
