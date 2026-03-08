# ⚡ Reviactyl CDN | Eggstension Image Delivery
⚡ CDN for image delivery used in Reviactyl Eggs, Extensions &amp; other commercial work.

## Structure
Normal Content: `/_content/`

Compressed & Converted Content: `/_content/`

## Local Development

1. Clone the repository: `git clone https://github.com/reviactyl/cdn.git`
2. Install Node Dependencies `pnpm install`

**Uploading Images**:

Upload your images into `./_content/@<author>/` directory. (must be .png)

Convert it to .webp format via `pnpm run compress`

Create pull request to `main` branch of `@reviactyl/cdn`
