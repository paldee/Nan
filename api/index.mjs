import { appHandler } from '../server/server.mjs';

export default async function handler(req, res) {
  return appHandler(req, res);
}
