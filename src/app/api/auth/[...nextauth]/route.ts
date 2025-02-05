import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // This is where you would typically validate against your database
        // For demo purposes, we'll use a hardcoded admin user
        const validUsername = 'admin';
        const validPassword = await bcrypt.hash('admin123', 10); // In production, store hashed password in DB

        if (credentials?.username === validUsername && 
            await bcrypt.compare(credentials.password, validPassword)) {
          return {
            id: '1',
            name: 'Admin User',
            email: 'admin@example.com',
            role: 'admin'
          };
        }
        return null;
      }
    })
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/admin/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        (session.user as any).role = token.role;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST }; 