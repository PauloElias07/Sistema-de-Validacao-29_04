import fetch from 'node-fetch';
import chalk from 'chalk';

function traduzStatus(status) {
  if (status === 200) return chalk.green('Site no ar e operante!');
  if (status === 400 || status === 404) return chalk.red('Página não encontrada.');
  if (status === 500) return chalk.yellow('Erro interno no servidor.');

  return chalk.gray(`Status: ${status}`);
}

async function checaLink(url) {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    return {
      url,
      status: res.status,
      mensagem: traduzStatus(res.status)
    };
  } catch {
    return {
      url,
      status: 'erro',
      mensagem: chalk.red('Domínio inexistente ou erro de rede.')
    };
  }
}

export async function validaLinks(lista) {
  const resultados = await Promise.all(lista.map(checaLink));
  return resultados;
}