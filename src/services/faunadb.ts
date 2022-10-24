/* eslint-disable import/prefer-default-export */
import faunadb from 'faunadb';

export const fauna = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
});
