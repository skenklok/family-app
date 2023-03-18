// pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

interface User {
  id: string;
  email: string;
  password: string;
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Email and Password',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials: { email: string; password: string; } | undefined) => {
        const { email, password } = credentials || {};
        const user: User = { id: '1', email: "test@example.com", password: "password" };
      
        if (email === user.email && password === user.password) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      },    
      
    }),
  ],
});
