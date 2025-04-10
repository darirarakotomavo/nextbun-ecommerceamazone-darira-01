export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "NxtAmzn";
export const APP_SLOGAN =
  process.env.NEXT_PUBLIC_APP_SLOGAN || "Spend less, enjoy more.";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "An Amazon clone built with Next.js and MongoDB";

export const PAGE_SIZE = Number(process.env.PAGE_SIZE || 9);
   
  export const FREE_SHIPPING_MIN_PRICE = Number(
    process.env.FREE_SHIPPING_MIN_PRICE || 35
  ); 

   export const SENDER_NAME = process.env.SENDER_NAME || "support";
  export const SENDER_EMAIL =
    process.env.SENDER_EMAIL || "onboarding@resend.dev";

  export const USER_ROLES = ["Admin", "User"];
  export const COLORS = ["Gold", "Green", "Red"];
  export const THEMES = ["Light", "Dark", "System"];
 
