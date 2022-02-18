module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '600ceb4086f6677cdb38ae5817ae98d4'),
  },
});
