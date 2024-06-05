// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { NextAuthOptions } from "next-auth";
// import { Login } from "@/app/lib/firebase/FetchUser";

// export const authOptions: NextAuthOptions = {
//   session: {
//     strategy: "jwt",
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         nim: {
//           label: "nim",
//           type: "text",
//           placeholder: "202410102020",
//         },
//         password: { label: "Password", type: "password", placeholder: "*****" },
//       },
//       async authorize(credentials: any) {
//         const { nim, password } = credentials;
//         const { status, data } = await Login({ nim : Number(nim), password });
//         console.log('data :',data,status,nim, password)
//         if (status) {
//           return data;
//         }
//         return null;
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user, account, profile }: any) {
//       if (user != undefined && "id" in user) {
//         token.id = user.id;
//       }
//       if (user != undefined && "name" in user) {
//         token.name = user.name;
//       }
//       if (user != undefined && "email" in user) {
//         token.email = user.email;
//       }
//       if (user != undefined && "role" in user) {
//         token.role = user.role;
//       }
//       if (user != undefined && "nim" in user) {
//         token.nim = user.nim;
//       }
//       if (account != undefined && "provider" in account) {
//         token.provider = account.provider;
//       }
//       if (account && account.provider == "google") {
//       }

//       return token;
//     },
//     async session({ session, user, token }: any) {
//       if (token != undefined && "id" in token) {
//         session.user.id = token.id;
//       }
//       if (token != undefined && "name" in token) {
//         session.user.name = token.name;
//       }
//       if (token != undefined && "email" in token) {
//         session.user.email = token.email;
//       }
//       if (token != undefined && "role" in token) {
//         session.user.role = token.role;
//       }
//       if (token != undefined && "nim" in token) {
//         session.user.nim = token.nim;
//       }
//       if (token != undefined && "provider" in token) {
//         session.user.provider = token.provider;
//       }
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/auth/login",
//   },
// };
// const handler = NextAuth(authOptions)
// export { handler as GET, handler as POST}
