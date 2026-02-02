/// <reference types="vite/client" />

// vite-imagetools type declarations for responsive image imports
declare module '*?format=webp' {
  const src: string;
  export default src;
}

declare module '*?webp' {
  const src: string;
  export default src;
}

declare module '*&format=webp' {
  const src: string;
  export default src;
}

// Responsive image variants with width, format, and quality
declare module '*?w=800&format=webp&quality=75' {
  const src: string;
  export default src;
}

declare module '*?w=1200&format=webp&quality=80' {
  const src: string;
  export default src;
}

declare module '*?w=1920&format=webp&quality=85' {
  const src: string;
  export default src;
}

// Generic catch-all for imagetools query params
declare module '*?w=*' {
  const src: string;
  export default src;
}
