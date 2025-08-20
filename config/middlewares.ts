// config/middlewares.ts
export default [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'https://luchronicles.com',
        'http://127.0.0.1:5500'
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      credentials: true
    }
  },
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'default-src': ["'self'"],
          'script-src': [
            "'self'",
            "'unsafe-inline'",
            'https://cdn.ckeditor.com'
          ],
          'script-src-elem': [
            "'self'",
            "'unsafe-inline'",
            'https://cdn.ckeditor.com'
          ],
          'style-src': [
            "'self'",
            "'unsafe-inline'",
            'https://cdn.ckeditor.com'
          ],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'https://cdn.ckeditor.com',
            'https://res.cloudinary.com' // for Cloudinary images
          ],
        },
      },
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];