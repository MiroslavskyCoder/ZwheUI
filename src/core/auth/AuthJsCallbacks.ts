
interface User {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

interface Account {
  provider: string;
  providerAccountId: string;
  [key: string]: any;
}

export interface Callbacks {
  signIn?: (params: { user: User; account: Account | null; profile?: any; }) => Promise<boolean | string>;
  redirect?: (params: { url: string; baseUrl: string; }) => Promise<string>;
  session?: (params: { session: any; token: any; user: User; }) => Promise<any>;
  jwt?: (params: { token: any; user?: User; account?: Account; profile?: any; }) => Promise<any>;
}
