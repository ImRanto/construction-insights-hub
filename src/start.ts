import { createServer } from 'vite';
import { createMiddleware } from '@tanstack/react-start';
import { renderErrorPage } from './lib/error-page';

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

export const startInstance = () => ({
  requestMiddleware: [errorMiddleware],
});

export default async function start() {
  const server = await createServer({
    server: {
      middlewareMode: true,
    },
    plugins: [],
  });

  return {
    listen: async (port: number) => {
      await server.listen(port);
      console.log(`Server running on port ${port}`);
    },
  };
}