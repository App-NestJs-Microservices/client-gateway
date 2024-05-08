import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  DATABASEURL: string;
  PRODUCTS_SERVICE_HOST: string;
  PRODUCTS_SERVICE_PORT: number;
  ORDERS_SERVICE_HOST: string;
  ORDERS_SERVICE_PORT: number;
}

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    //DATABASE_URL: joi.string().required(),
    PRODUCTS_SERVICE_HOST: joi.string().required(),
    PRODUCTS_SERVICE_PORT: joi.number().required(),
    ORDERS_SERVICE_HOST: joi.string().required(),
    ORDERS_SERVICE_PORT: joi.number().required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  products_service_host: envVars.PRODUCTS_SERVICE_HOST,
  products_service_port: envVars.PRODUCTS_SERVICE_PORT,
  orders_service_host: envVars.ORDERS_SERVICE_HOST,
  orders_service_port: envVars.ORDERS_SERVICE_PORT,
  //databaseUrl: envVars.DATABASEURL,
};
