export type Category = {
  slug: string;
  name: string;
  brand: string;
  type: string;
  image: string;
  blurb: string;
};

export const categories: Category[] = [
  {
    slug: "sensors",
    name: "Sensors",
    brand: "Pepperl+Fuchs",
    type: "Sensors",
    image: "https://cpimg.tistatic.com/09512948/b/4/PAPPERL-FUCHS-UC2000-30GM-IUR2-V15.jpg",
    blurb: "Proximity, ultrasonic, photoelectric sensors and shaft encoders for precise machine feedback.",
  },
  {
    slug: "danfoss-vfd",
    name: "Danfoss VFD",
    brand: "Danfoss",
    type: "VFD",
    image: "https://cpimg.tistatic.com/09631358/b/4/132F0058-VLT-Micro-Drive-FC-51.jpg",
    blurb: "VLT Micro Drive FC 51 series and compact AC drives for pumps, fans and conveyors.",
  },
  {
    slug: "proface-hmi",
    name: "Proface HMI",
    brand: "Proface",
    type: "HMI",
    image: "https://cpimg.tistatic.com/09714690/b/4/PFXET6600WAD-Proface-HMI-12-inch-ET6000-Series.jpeg",
    blurb: "GP4000, ET6000 series touch panels and industrial PCs for rugged operator interfaces.",
  },
  {
    slug: "allen-bradley-plc",
    name: "Allen Bradley PLC",
    brand: "Allen Bradley",
    type: "PLC",
    image: "https://cpimg.tistatic.com/10024328/b/4/2080LC3048QBB-Allen-Bradley-PLC.jpeg",
    blurb: "Micro800, CompactLogix and SmartGuard controllers for scalable machine control.",
  },
  {
    slug: "allen-bradley-hmi",
    name: "Allen Bradley HMI",
    brand: "Allen Bradley",
    type: "HMI",
    image: "https://cpimg.tistatic.com/09377303/b/4/2711R-PanelView-800.jpg",
    blurb: "PanelView 800 and PanelView Plus operator terminals with graphic visualisation.",
  },
  {
    slug: "siemens-plc",
    name: "Siemens PLC",
    brand: "Siemens",
    type: "PLC",
    image: "https://cpimg.tistatic.com/09164979/b/4/Siemens-Logo-6ED1052-1FB08-0BA1-PLC.jpg",
    blurb: "LOGO!, S7-1200, S7-300 and S7-1500 CPUs with full I/O and communication modules.",
  },
  {
    slug: "siemens-hmi",
    name: "Siemens HMI",
    brand: "Siemens",
    type: "HMI",
    image: "https://cpimg.tistatic.com/09165000/b/4/6AV2124-0MC01-0AX0-Siemens-Simatic-TP1200-HMI.jpg",
    blurb: "SIMATIC Basic, Comfort and Unified panels from KTP400 up to TP1500.",
  },
  {
    slug: "siemens-vfd",
    name: "Siemens VFD",
    brand: "Siemens",
    type: "VFD",
    image: "https://cpimg.tistatic.com/09164988/b/4/Siemens-S120-Drive-6SL3120-1TE21-8AD0-S120-VFD.jpg",
    blurb: "SINAMICS G120, V20 and S120 drives plus servo motion control packages.",
  },
  {
    slug: "mitsubishi-plc",
    name: "Mitsubishi PLC",
    brand: "Mitsubishi",
    type: "PLC",
    image: "https://cpimg.tistatic.com/10019516/b/4/FX3S-30MT-ES-2AD-Mitsubishi-PLC.jpg",
    blurb: "MELSEC FX3, FX5U iQ-F and Q series controllers with expansion modules.",
  },
  {
    slug: "mitsubishi-hmi",
    name: "Mitsubishi HMI",
    brand: "Mitsubishi",
    type: "HMI",
    image: "https://cpimg.tistatic.com/10017520/b/16/Mitsubishi-HMI-GT2712-STBD.jpg",
    blurb: "GOT2000 and GOT Simple GS series touch screens from 7 to 15 inch.",
  },
  {
    slug: "mitsubishi-vfd",
    name: "Mitsubishi VFD",
    brand: "Mitsubishi",
    type: "VFD",
    image: "https://cpimg.tistatic.com/09377052/b/4/FR-CS84-295-60-MITSUBISHI-VFD.jpg",
    blurb: "FREQROL FR-CS84, FR-D700 and FR-A800 inverters for general and heavy duty.",
  },
  {
    slug: "omron-plc",
    name: "Omron PLC",
    brand: "Omron",
    type: "PLC",
    image: "https://cpimg.tistatic.com/09631354/b/4/CJ1W-DA08C-Omron-PLC.jpg",
    blurb: "CJ1/CJ2, CP1 series CPUs with analog, digital and network I/O cards.",
  },
  {
    slug: "omron-hmi",
    name: "Omron HMI",
    brand: "Omron",
    type: "HMI",
    image: "https://cpimg.tistatic.com/09165003/b/4/NB7W-TW00B-Omron-HMI.jpg",
    blurb: "NB and NA series programmable terminals for compact panel builds.",
  },
  {
    slug: "delta-plc",
    name: "Delta PLC",
    brand: "Delta",
    type: "PLC",
    image: "https://cpimg.tistatic.com/10021614/b/4/DVP20SX211R-S-T-Delta-PLC.jpg",
    blurb: "DVP series slim, SX and SS2 controllers offering cost-effective automation.",
  },
  {
    slug: "delta-hmi",
    name: "Delta HMI",
    brand: "Delta",
    type: "HMI",
    image: "https://cpimg.tistatic.com/10033504/b/4/DOP-107EV-Delta-HMI.jpg",
    blurb: "DOP-100 series touch panels with high-resolution displays and fast comms.",
  },
  {
    slug: "delta-vfd",
    name: "Delta VFD",
    brand: "Delta",
    type: "VFD",
    image: "https://cpimg.tistatic.com/10019916/b/4/VFD022EL21A-Delta-VFD.jpg",
    blurb: "VFD-EL, MS300 and C2000 AC motor drives for a broad power range.",
  },
  {
    slug: "schneider-plc",
    name: "Schneider PLC",
    brand: "Schneider",
    type: "PLC",
    image: "https://cpimg.tistatic.com/10034847/b/4/TM100C24RN-Schneider-PLC.jpg",
    blurb: "Modicon M100, M221 and M241 logic controllers for machine builders.",
  },
  {
    slug: "schneider-hmi",
    name: "Schneider HMI",
    brand: "Schneider",
    type: "HMI",
    image: "https://cpimg.tistatic.com/10038721/b/4/HMIST6500-Schneider-HMI.jpg",
    blurb: "Harmony ST6 and GTU operator panels with Vijeo Designer support.",
  },
  {
    slug: "schneider-vfd",
    name: "Schneider VFD",
    brand: "Schneider",
    type: "VFD",
    image: "https://cpimg.tistatic.com/10030453/b/4/ATV12HU22M3-Schneider-VFD.jpg",
    blurb: "Altivar ATV12, ATV320 and ATV630 variable speed drives.",
  },
  {
    slug: "fuji-vfd",
    name: "Fuji VFD",
    brand: "Fuji",
    type: "VFD",
    image: "https://cpimg.tistatic.com/10039781/b/4/FRN0018C2S-4U-Fuji-VFD.jpg",
    blurb: "FRENIC Mini and FRENIC Ace inverters for compact, reliable speed control.",
  },
];

export type Product = {
  name: string;
  image: string;
  category: string;
};

export const popularProducts: Product[] = [
  {
    name: "GS2110-WTBD-N Mitsubishi HMI 10 inch",
    image: "https://cpimg.tistatic.com/09377030/b/4/GS2110-WTBD-N-Mitsubishi-HMI-10-inch.jpg",
    category: "Mitsubishi HMI",
  },
  {
    name: "Siemens Simatic S7-1500 PLC",
    image: "https://cpimg.tistatic.com/09164974/b/4/Siemens-Simatic-S7-1500-PLC.jpg",
    category: "Siemens PLC",
  },
  {
    name: "CJ1W-ID211 Omron PLC",
    image: "https://cpimg.tistatic.com/09631345/b/4/CJ1W-ID211-Omron-PLC.jpg",
    category: "Omron PLC",
  },
  {
    name: "6AV2143-6JB00-0AA0 Siemens SIMATIC TP900",
    image: "https://cpimg.tistatic.com/09164987/b/5/6AV2143-6JB00-0AA0-Siemens-SIMATIC-TP900-Basic.jpg",
    category: "Siemens HMI",
  },
  {
    name: "FX5U-64MR ES Mitsubishi PLC",
    image: "https://cpimg.tistatic.com/09376969/b/4/FX5U-64MR-ES.jpg",
    category: "Mitsubishi PLC",
  },
  {
    name: "PFXET6600WAD Proface HMI 12 inch",
    image: "https://cpimg.tistatic.com/09714690/b/4/PFXET6600WAD-Proface-HMI-12-inch-ET6000-Series.jpeg",
    category: "Proface HMI",
  },
  {
    name: "1752-L24BBBE SmartGuard 600",
    image: "https://cpimg.tistatic.com/09377293/b/4/1752-L24BBBE-Smart-Guard-600.jpg",
    category: "Allen Bradley PLC",
  },
  {
    name: "FRN0002C2E-4E Fuji Frenic Mini",
    image: "https://cpimg.tistatic.com/09165010/b/5/FRN0002C2E-4E-Fuji-Frenic-mini.png",
    category: "Fuji VFD",
  },
];

export const hotProducts: Product[] = [
  {
    name: "6AV2124-0MC01-0AX0 TP1200 Comfort Panel",
    image: "https://cpimg.tistatic.com/09540555/b/4/6AV2124-0MC01-0AX0-TP1200-comfort-panel-Siemens-HMI.jpg",
    category: "Siemens HMI",
  },
  {
    name: "6ES7315-2EH14-0AB0 SIMATIC S7-300 CPU 315-2 PN/DP",
    image: "https://cpimg.tistatic.com/09164985/b/4/6ES7315-2EH14-0AB0-SIMATIC-S7-300-CPU-315-2-PN-DP.jpg",
    category: "Siemens PLC",
  },
  {
    name: "Proface PFXGP4301TAD Touch Panel HMI",
    image: "https://cpimg.tistatic.com/09164983/b/4/Proface-PFXGP4301TAD-Touch-Panel-HMI.jpg",
    category: "Proface HMI",
  },
  {
    name: "CompactLogix 5380 Allen Bradley",
    image: "https://cpimg.tistatic.com/09377302/b/4/CompactLogix-5380.jpg",
    category: "Allen Bradley PLC",
  },
];

export const brands = [
  "Siemens",
  "Mitsubishi",
  "Allen Bradley",
  "Proface",
  "Omron",
  "Delta",
  "Schneider",
  "Danfoss",
  "Fuji",
  "Pepperl+Fuchs",
];

export const company = {
  name: "Concept Automation Technologies",
  gst: "24ASYPC3254A1Z0",
  phone: "+91 80454 75169",
  phoneHref: "tel:+918045475169",
  owner: "Mr. Gaurang Mahendrabhai Chavda",
  role: "Proprietor",
  address:
    "D-303, Titanium Business Park, Makarba Road, Makarba, Ahmedabad - 380051, Gujarat, India",
};
