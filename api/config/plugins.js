module.exports = ({ env }) => ({
 'strapi-regenerator': {
      enabled: true
    },
  'strapi-blurhash-plugin': {
        enabled: true,
        config: {
            regenerateOnUpdate: true
        }
    },
"strapi-google-auth": {
    enabled: true,
  },
  meilisearch: {
    config: {
      host: "http://localhost:7700",
      apiKey: "QQG06lBk2eA1GZlO6QQnTXIFQb19PrY1eKJ9FJRD2r",
    },
  },
  "users-permissions": {
    config: {
      register: {
         allowedFields: [
          "firstName",
          "lastName",
          "phone",
          "verified",
          "last_otp_request",
          "resend_attempts",
          "otp_session",
        ],
      },
    },
  },
  scheduler: {
    enabled: true,
    config: {
      model: 'scheduler',
    },
  },
});
