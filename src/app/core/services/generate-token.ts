export const generateToken = (): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  for (let i = 0; i < 10; i += 1) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters.charAt(randomIndex);
  }
  return token;
};
