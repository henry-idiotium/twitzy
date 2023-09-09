# Prerequisites

- Docker: CI/CD tool
- Doppler: Cloud env manager

# Steps

1. Open docker
2. Startup/setup local supabase.

```bash
pnpm sp:dev
```

3. Apply prisma current migrations to local DB

> [NOTE] Note: Run command bellow on repo fresh start, **NOT** while dev.

```bash
pnpm exec supabase db reset && pnpm prisma:migration
```
