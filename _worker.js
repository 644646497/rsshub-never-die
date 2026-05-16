export default {
  async fetch(request) {
    // 定义上游 RSSHub 实例列表，一个挂了会自动换另一个
    const upstreams = [
      'https://rsshub.app',
      'https://hub.slarker.me',
      'https://rsshub.rssforever.com'
    ];
    
    const url = new URL(request.url);
    // 随机选择一个上游实例，实现简单的负载均衡
    const upstream = upstreams[Math.floor(Math.random() * upstreams.length)];
    
    // 构建新的请求 URL，将你的 Pages 域名替换为上游实例
    const newUrl = url.toString().replace(url.origin, upstream);
    
    // 发送请求并返回结果
    return fetch(newUrl, request);
  }
};
