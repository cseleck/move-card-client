# OfficeRide

Frontend para una plataforma de movilidad urbana moderna. Construido con Next.js App Router, TypeScript, Tailwind y shadcn/ui.

## Instalación

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript estricto
- Tailwind CSS 3
- shadcn/ui (componentes incluidos en `components/ui`)
- lucide-react

## Comandos sugeridos (proyecto desde cero)

```bash
npx create-next-app@latest officeride --typescript --tailwind --eslint --app
cd officeride
npx shadcn@latest init
npx shadcn@latest add button card input label badge avatar progress separator tabs dialog sheet dropdown-menu textarea sonner
npm install lucide-react
```

> Este repo ya incluye todos esos componentes generados en `components/ui`.

## Rutas

- `/` Landing
- `/login`, `/register`
- `/app` Dashboard
- `/app/rides` Historial
- `/app/card` OfficeRide Cliente
- `/app/wallet` Wallet
- `/app/profile` Perfil
- `/app/support` Soporte
