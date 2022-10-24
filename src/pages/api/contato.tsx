/* eslint-disable import/no-duplicates */
import { query as q } from 'faunadb';
import type { NextApiRequest, NextApiResponse } from 'next';
import Mailjet from 'node-mailjet';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { fauna } from '../../services/faunadb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // await fauna.query(
    //   q.Create(q.Collection('mensagens'), {
    //     data: {
    //       pagina: req.body.pagina,
    //       nome: req.body.nome.toUpperCase(),
    //       empresa: req.body.empresa.toUpperCase(),
    //       email: req.body.email.toLowerCase(),
    //       municipio: req.body.municipio.toUpperCase(),
    //       uf: req.body.uf.toUpperCase(),
    //       celular: req.body.celular,
    //       createdAt: format(new Date(), 'yyyy-MM-dd HH:mm:ss', {
    //         locale: ptBR,
    //       }),
    //     },
    //   }),
    // );

    const mailjet = new Mailjet({
      apiKey: process.env.MJ_APIKEY_PUBLIC,
      apiSecret: process.env.MJ_APIKEY_PRIVATE,
    });

    const request = mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: process.env.MAIL_SENDER,
            Name: 'Site Franca Venda',
          },
          To: [
            {
              Email: process.env.MAIL_TO || 'contato@fvgestao.com.br',
              Name: 'Contato FV Gestão',
            },
          ],
          TemplateID: Number(process.env.MJ_TEMPLATE_ID_CONTATO) || 0,
          TemplateLanguage: true,
          Subject: 'Franca Venda - Mensagem do site',
          Variables: {
            nome: req.body.nome.toUpperCase(),
            empesa: req.body.empresa.toUpperCase(),
            email: req.body.email.toLowerCase(),
            municipio: req.body.municipio.toUpperCase(),
            uf: req.body.uf.toUpperCase(),
            celular: req.body.celular,
          },
        },
      ],
    });

    await request
      .then(() => {
        return req.body;
      })
      .catch(err => {
        return err;
      });

    return res.status(200).json({
      message: 'Mensagem enviada com sucesso!',
      data: req.body,
    });
  } catch (err) {
    console.log(res);
    return res.status(500).json({
      message: 'Erro que não sei ainda.',
    });
  }
};
