// eslint-disable-next-line no-unused-vars
declare const ENV: {
  MODE: 'DEVELOPMENT' | 'PRODUCTION',
  HOST_URL: string,
  WS_URL: string,
  DB_NAME: string,
  DB_VERSION: string,
};

declare module '*.css' {
  const content: any;
  export default content;
}

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

declare module '*.less' {
  const content: any;
  export default content;
}

declare module '*.gif' {
  const content: any;
  export default content;
}
