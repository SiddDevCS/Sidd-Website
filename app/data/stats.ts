export interface Stat {
  value: string;
  label: string;
  detail?: string;
}

export const heroStats: Stat[] = [
  { value: "2", label: "Apps on App Store", detail: "TripCraft & StudieBuddie" },
  { value: "17th", label: "HTB NL Season 9", detail: "Netherlands ranking" },
  { value: "2", label: "Security Certs", detail: "Security+ & eJPT" },
  { value: "8+", label: "Published Write-ups", detail: "HTB & CTF solutions" },
];

export const currentlyBuilding = {
  status: "Building",
  items: [
    {
      label: "HvA Computer Science",
      detail: "Incoming student — Amsterdam",
    },
    {
      label: "BreachLock Internship",
      detail: "Security automation & offensive security",
    },
    {
      label: "Hack The Box Season 10",
      detail: "Machines, write-ups, and skill depth",
    },
  ],
};
