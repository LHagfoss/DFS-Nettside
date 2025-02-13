declare module '@sparticuz/chromium' {
  export const args: string[];
  export const defaultViewport: { width: number; height: number };
  export const executablePath: () => Promise<string>;
  export const headless: boolean;
}

declare module 'puppeteer-core' {
  import { Browser, Page } from 'puppeteer-core';
  export { Browser, Page };
} 