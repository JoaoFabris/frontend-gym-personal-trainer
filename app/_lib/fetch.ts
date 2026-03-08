import { cookies } from "next/headers";

const getBody = <T>(c: Response | Request): Promise<T> => {
  return c.json() as Promise<T>;
};

const getUrl = (contextUrl: string): string => {
  const newUrl = new URL(`${process.env.NEXT_PUBLIC_API_URL}${contextUrl}`);
  const requestUrl = new URL(`${newUrl}`);
  return requestUrl.toString();
};

const getHeaders = async (headers?: HeadersInit): Promise<HeadersInit> => {
  const _cookies = await cookies();
  return {
    ...headers,
    cookie: _cookies.toString(),
  };
};

export const customFetch = async <T>(
  url: string,
  options: RequestInit
): Promise<T> => {
  const requestUrl = getUrl(url);
  const requestHeaders = await getHeaders(options.headers);

  const requestInit: RequestInit = {
    ...options,
    headers: requestHeaders,
    credentials: "include", //fala para fetch o seguinte, em todas as req vc vai enviar todos os coockies para o back tbm. use serve para compartilhar coockies entro back e front.
    // qualquer dominio pdoe definir cookie e isso é perigoso. logo o back e o front deve estar um mesmo subdominio, assim o coockie pode ser compartilhado. 
  };

  const response = await fetch(requestUrl, requestInit);
  const data = await getBody<T>(response);

  return { status: response.status, data, headers: response.headers } as T;
};

// o better auth lida com auth por sessão, e essa sessão é salvas no coookies. aqui a gente cria um FETCH COSTUMIZADO, q ele dentro req, tem credentials, q chama da nossa api
// esse arquivo é ligado com orval.config