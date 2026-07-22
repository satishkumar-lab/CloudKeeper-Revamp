/** Shared customer logos section — reusable across solution/product pages. */

export const customersLogosAssets = {
  bg: "/assets/customers/bg.png",
} as const;

export type CustomerLogo = {
  name: string;
  src: string;
  width: number;
  height: number;
};

export type CustomersLogosContent = {
  heading: string;
  rows: readonly (readonly CustomerLogo[])[];
};

const logo = (
  name: string,
  file: string,
  width: number,
  height: number,
): CustomerLogo => ({
  name,
  src: `/assets/customers/${file}`,
  width,
  height,
});

/** Default 12-logo grid used on CloudKeeper AZ (and other pages that share this set). */
export const defaultCustomersLogosContent = {
  heading: "Our CloudKeeper AZ Customers",
  rows: [
    [
      logo("Sciforma", "sciforma.svg", 140, 28),
      logo("Attain Enterprises", "attain.svg", 166, 16),
      logo("Movista", "movista.svg", 152, 38),
      logo("Pepperfry", "pepperfry.svg", 145, 30),
      logo("CSE Insurance Group", "cse.svg", 86, 43),
      logo("InterGlobe", "interglobe.svg", 86, 42),
    ],
    [
      logo("YourStory", "yourstory.svg", 145, 28),
      logo("Airmeet", "airmeet.svg", 120, 28),
      logo("Prodigal", "prodigal.svg", 145, 37),
      logo("Xoxoday", "xoxoday.svg", 145, 36),
      logo("Bajaj Capital", "bajaj.svg", 145, 20),
      logo("DigitalReef", "digitalreef.svg", 104, 48),
    ],
  ],
} as const satisfies CustomersLogosContent;

const ppaLogo = (
  name: string,
  file: string,
  width: number,
  height: number,
): CustomerLogo => ({
  name,
  src: `/assets/customers/ppa-plus/${file}`,
  width,
  height,
});

/** Figma 8200:167111 — Our CloudKeeper PPA+ Customers */
export const ppaPlusCustomersLogosContent = {
  heading: "Our CloudKeeper PPA+ Customers",
  rows: [
    [
      ppaLogo("TATA 1mg", "tata-1mg-t.png", 103, 23),
      ppaLogo("Testbook", "testbook-t.png", 134, 38),
      ppaLogo("Zepto", "zepto-t.png", 106, 34),
      ppaLogo("Frequency", "frequency-t.png", 149, 34),
      ppaLogo("Infinx", "infinx-t.png", 98, 23),
      ppaLogo("Knowlarity", "knowlarity-t.png", 158, 41),
    ],
    [
      ppaLogo("Freight Tiger", "freight-tiger-t.png", 144, 41),
      ppaLogo("Country Delight", "country-delight-t.png", 67, 67),
      ppaLogo("HackerEarth", "hackerearth-t.png", 158, 31),
      ppaLogo("MyHealthcare", "myhealthcare-t.png", 86, 58),
      ppaLogo("Protium", "protium-t.png", 95, 22),
      ppaLogo("Licious", "licious-t.png", 110, 43),
    ],
  ],
} as const satisfies CustomersLogosContent;

/** @deprecated Use `defaultCustomersLogosContent` */
export const azCustomersContent = defaultCustomersLogosContent;
/** @deprecated Use `customersLogosAssets` */
export const azCustomersAssets = customersLogosAssets;
/** @deprecated Use `CustomerLogo` */
export type AzCustomerLogo = CustomerLogo;
