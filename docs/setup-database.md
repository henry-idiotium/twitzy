# Prerequisites

- Docker: CI/CD tool
- Doppler: Cloud env manager
- Bun: NodeJs alternative

# Steps

1. Open docker
2. Startup/setup local supabase.

```bash
> bun sp:dev
```

3. Apply prisma current migrations to local DB

> [NOTE] Note: Run command bellow while dev or on repo fresh start, **NOT** while dev.

```bash
> bun pm:mig
```
