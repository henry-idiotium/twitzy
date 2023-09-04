# Libraries

**Design**:
[Figma](https://www.figma.com/file/ACL6YK2Hmdjq4jGk7hH07g/Twitzy?type=design&node-id=0%3A1&mode=design&t=Z61EcatZ4EHNu68U-1)

**Client side**:

- Zod
- Redux toolkit
- Styled-Component
- ShadCN/ui
- Storybook
- react query

**Server side**:

- Prisma
- Supabase
- Socket.io

# Project Structure

`/src/` Nextjs source

`/tools/` Scripts, such as CI/CD scripts or npm scripts

`/prisma/` Prisma schema

`/public/` Assets

# VSCode Helpers

- `\/\*NOTE:remove\*\/ console\.log\((.|\n)*?\);?` match all loggers with `/*NODE:remove*/` as suffix.
