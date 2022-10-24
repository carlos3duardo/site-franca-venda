/* eslint-disable import/prefer-default-export */
import faunadb from 'faunadb';

export const fauna = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
  endpoint: 'https://db.us.fauna.com/',
  domain: 'db.us.fauna.com',
});
