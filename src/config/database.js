require("dotenv").config();
const config = {
  default: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    dialect: process.env.DB_DIALECT || 'postgres',
    database: process.env.POSTGRES_DB,
    host: process.env.DB_HOST || "db",
  },
  development: {
    extend: 'default',
    database: process.env.POSTGRES_DB || 'iic2513template_dev',
  },
  test: {
    extend: 'default',
    database: 'iic2513template_test',
  },
  production: {
    extend: 'default',
    use_env_variable: 'DATABASE_URL',
  },
};

Object.keys(config).forEach((configKey) => {
  const configValue = config[configKey];
  if (configValue.extend) {
    config[configKey] = { ...config[configValue.extend], ...configValue };
  }
});

module.exports = config;
