export const getBaseUrl = (): string => {
  return process.env.URL || "https://local-service.vercel.app";
};
