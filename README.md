This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```
my-blog-app
├─ .env
├─ .eslintrc.json
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     └─ heads
│  │        └─ master
│  ├─ objects
│  │  ├─ 18
│  │  │  └─ 2cd5e1b7b0f624758c8b796521d0e5584cecbe
│  │  ├─ 1a
│  │  │  └─ f3b8f01934a8fdd694eb5747b8115f01419199
│  │  ├─ 29
│  │  │  └─ 128ae438dc369842fe0f0c89ba501b00537192
│  │  ├─ 33
│  │  │  └─ ad091d26d8a9dc95ebdf616e217d985ec215b8
│  │  ├─ 3f
│  │  │  └─ 439a0b1ad5d3b7201a4c355e0015a3dd51417b
│  │  ├─ 51
│  │  │  └─ 74b28c565c285e3e312ec5178be64fbeca8398
│  │  ├─ 71
│  │  │  └─ 8d6fea4835ec2d246af9800eddb7ffb276240c
│  │  ├─ 76
│  │  │  └─ 7719fc4fba59345ae29e29159c9aff270f5819
│  │  ├─ 7b
│  │  │  └─ 242a4d55f2733577475f89ef5f75bc1a4d435d
│  │  ├─ 86
│  │  │  └─ b8af5adda223e6230c5a636743e8a8f5469f90
│  │  ├─ 8f
│  │  │  └─ 322f0d8f49570a594b865ef8916c428a01afc1
│  │  ├─ ae
│  │  │  └─ 8456212360d816651261077bcd1f6fa6c259cb
│  │  ├─ bf
│  │  │  └─ fb357a7122523ec94045523758c4b825b448ef
│  │  ├─ d2
│  │  │  └─ f84222734f27b623d1c80dda3561b04d1284af
│  │  ├─ e3
│  │  │  └─ 8c626e1600f144a279aad97eda631f00785eaf
│  │  ├─ e5
│  │  │  └─ 9724b283f9cb9a63ce04a2405128164607a14a
│  │  ├─ f2
│  │  │  └─ ad7499e7b9a5b9907a78dd75b2c52b5911415f
│  │  ├─ f3
│  │  │  └─ 4da8779d2e4ebc4bc229c18768a619a76b3957
│  │  ├─ f4
│  │  │  └─ da3c4c1cf1b537a9203fe05b3516e39567fd97
│  │  ├─ fd
│  │  │  └─ 81e885836d815b8019694a910a93d86a43cb66
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ master
│     └─ tags
├─ .gitignore
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ pages
│  └─ api
│     ├─ posts.js
│     └─ seed.js
├─ postcss.config.js
├─ prisma
│  └─ schema.prisma
├─ public
│  ├─ next.svg
│  └─ vercel.svg
├─ README.md
├─ src
│  └─ app
│     ├─ components
│     │  ├─ Comments.jsx
│     │  └─ PostList.jsx
│     ├─ favicon.ico
│     ├─ globals.css
│     ├─ layout.tsx
│     ├─ page.tsx
│     └─ posts
│        └─ [slug]
│           └─ post.jsx
├─ tailwind.config.ts
└─ tsconfig.json

```