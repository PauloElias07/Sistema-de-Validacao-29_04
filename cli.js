#!/usr/bin/env node

import chalk from 'chalk';
import { pegaLinks } from './leitor.js';
import { validaLinks } from './httpValidacao.js';

const entrada = process.argv[2];

async function main() {
  if (!entrada) {
    console.log(chalk.red('❌ Informe uma URL ou caminho de arquivo'));
    process.exit(1);
  }

  try {
    const links = await pegaLinks(entrada);

    if (links.length === 0) {
      console.log(chalk.yellow('⚠️ Nenhum link encontrado.'));
      return;
    }

    const resultados = await validaLinks(links);

    console.log(chalk.blue('\n🔎 Resultado:\n'));

    resultados.forEach(({ url, mensagem }) => {
      console.log(url);
      console.log('→', mensagem);
      console.log('-------------------');
    });

  } catch (erro) {
    console.log(chalk.red('❌ Erro:'), erro.message);
  }
}

main();