module.exports = {
  siteUrl: "https://cartosys.com.ar", // Cambia por tu dominio
  generateRobotsTxt: true,          // Genera el archivo robots.txt
  changefreq: "daily",              // Frecuencia de cambio recomendada
  priority: 0.7,                    // Prioridad de las páginas
  sitemapSize: 5000,                // Tamaño máximo del sitemap
  exclude: ["/admin", "/private"],  // Rutas a excluir del sitemap
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",                 // Permitir todo
      },
      {
        userAgent: "Googlebot",
        allow: "/",                 // Permitir todo a Googlebot
      },
    ],
    additionalSitemaps: [
      "https://cartosys.com.ar/my-custom-sitemap-1.xml",
      "https://cartosys.com.ar/my-custom-sitemap-2.xml",
    ],
  },
};
