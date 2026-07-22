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

/** @deprecated Use `defaultCustomersLogosContent` */
export const azCustomersContent = defaultCustomersLogosContent;
/** @deprecated Use `customersLogosAssets` */
export const azCustomersAssets = customersLogosAssets;
/** @deprecated Use `CustomerLogo` */
export type AzCustomerLogo = CustomerLogo;
