import fs from 'fs/promises';

function extraiLinks(texto) {
  const regex = /(https?:\/\/[^\s]+)/g;
  return texto.match(regex) || [];
}

function ehURL(entrada) {
  try {
    new URL(entrada);
    return true;
  } catch {
    return false;
  }
}

export async function pegaLinks(entrada) {
  if (ehURL(entrada)) {
    return [entrada];
  }

  const texto = await fs.readFile(entrada, 'utf-8');
  return extraiLinks(texto);
}