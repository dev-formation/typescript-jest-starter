export let message: string = 'Hello World !';

export const hello = (name?: string) => {
  return `Hello ${name || 'inconnu'} !`;
};
