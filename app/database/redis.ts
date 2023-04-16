import { Redis } from "@upstash/redis";
const REDIS_HOST = process.env.REDIS_HOST;
const REDIS_TOKEN = process.env.REDIS_TOKEN;

const instance = new Redis({
  url: REDIS_HOST,
  token: REDIS_TOKEN,
});

export default instance;
