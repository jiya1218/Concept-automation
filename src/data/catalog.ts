// Scraped & Verified 1:1 Catalog from conceptautotech.com (v1)

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  partNumber: string;
  brand: string;
  category: string;
  type: "PLC" | "HMI" | "VFD" | "Servo" | "Sensor" | "Power Supply" | "Software";
  description: string;
  specifications: ProductSpec[];
  image: string;
  slug: string;
  stock: boolean;
}

export const company = {
  name: "Concept Automation Technologies",
  proprietor: "Mr. Gaurang Mahendrabhai Chavda",
  gst: "24ASYPC3254A1Z0",
  address: "D-303, Titanium Business Park, Makarba Road, Makarba, Ahmedabad - 380051, Gujarat, India",
  phone: "+91 80454 75169",
  phoneRaw: "+918045475169",
  whatsapp: "+918045475169",
  email: "sales@conceptautotech.com",
};

export const brands = [
  "Siemens",
  "Mitsubishi",
  "Allen Bradley",
  "Omron",
  "Delta",
  "Schneider",
  "Fuji",
  "Proface",
  "Danfoss",
  "Pepperl+Fuchs"
] as const;

export const categories = [
  {
    "name": "SENSORS",
    "slug": "sensors",
    "brand": "Pepperl+Fuchs",
    "type": "Sensor"
  },
  {
    "name": "Danfoss VFD",
    "slug": "danfoss-vfd",
    "brand": "Danfoss",
    "type": "VFD"
  },
  {
    "name": "Proface HMI",
    "slug": "proface-hmi",
    "brand": "Proface",
    "type": "HMI"
  },
  {
    "name": "Allen Bradley PLC",
    "slug": "allen-bradley-plc",
    "brand": "Allen Bradley",
    "type": "PLC"
  },
  {
    "name": "Allen Bradley HMI",
    "slug": "allen-bradley-hmi",
    "brand": "Allen Bradley",
    "type": "HMI"
  },
  {
    "name": "Siemens PLC",
    "slug": "siemens-plc",
    "brand": "Siemens",
    "type": "PLC"
  },
  {
    "name": "Siemens HMI",
    "slug": "siemens-hmi",
    "brand": "Siemens",
    "type": "HMI"
  },
  {
    "name": "Siemens VFD",
    "slug": "siemens-vfd",
    "brand": "Siemens",
    "type": "VFD"
  },
  {
    "name": "Mitsubishi PLC",
    "slug": "mitsubishi-plc",
    "brand": "Mitsubishi",
    "type": "PLC"
  },
  {
    "name": "Mitsubishi HMI",
    "slug": "mitsubishi-hmi",
    "brand": "Mitsubishi",
    "type": "HMI"
  },
  {
    "name": "Mitsubishi VFD",
    "slug": "mitsubishi-vfd",
    "brand": "Mitsubishi",
    "type": "VFD"
  },
  {
    "name": "Omron PLC",
    "slug": "omron-plc",
    "brand": "Omron",
    "type": "PLC"
  },
  {
    "name": "Omron HMI",
    "slug": "omron-hmi",
    "brand": "Omron",
    "type": "HMI"
  },
  {
    "name": "Delta PLC",
    "slug": "delta-plc",
    "brand": "Delta",
    "type": "PLC"
  },
  {
    "name": "Delta HMI",
    "slug": "delta-hmi",
    "brand": "Delta",
    "type": "HMI"
  },
  {
    "name": "Delta VFD",
    "slug": "delta-vfd",
    "brand": "Delta",
    "type": "VFD"
  },
  {
    "name": "Schneider PLC",
    "slug": "schneider-plc",
    "brand": "Schneider",
    "type": "PLC"
  },
  {
    "name": "Schneider HMI",
    "slug": "schneider-hmi",
    "brand": "Schneider",
    "type": "HMI"
  },
  {
    "name": "Schneider VFD",
    "slug": "schneider-vfd",
    "brand": "Schneider",
    "type": "VFD"
  },
  {
    "name": "Fuji VFD",
    "slug": "fuji-vfd",
    "brand": "Fuji",
    "type": "VFD"
  },
  {
    "name": "Interface Modules & Power Supplies",
    "slug": "power-supplies",
    "brand": "Siemens",
    "type": "Power Supply"
  }
];

export const allProducts: Product[] = [
  {
    "id": "v1-1",
    "name": "SENSORS",
    "partNumber": "SENSORS",
    "brand": "Siemens",
    "category": "Siemens Sensor",
    "type": "Sensor",
    "description": "Original 100% genuine SENSORS supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09512948/b/4/PAPPERL-FUCHS-UC2000-30GM-IUR2-V15.jpg",
    "slug": "sensors",
    "stock": true
  },
  {
    "id": "v1-2",
    "name": "PAPPERL+FUCHS UC2000-30GM-IUR2-V15",
    "partNumber": "PAPPERLFUCHS",
    "brand": "Pepperl+Fuchs",
    "category": "Pepperl+Fuchs PLC",
    "type": "PLC",
    "description": "Original 100% genuine PAPPERL+FUCHS UC2000-30GM-IUR2-V15 supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Pepperl+Fuchs"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09512948/b/4/PAPPERL-FUCHS-UC2000-30GM-IUR2-V15.jpg",
    "slug": "papperl-fuchs-uc2000-30gm-iur2-v15",
    "stock": true
  },
  {
    "id": "v1-3",
    "name": "Ultrasonic sensor UB500-18GM75-U-V15",
    "partNumber": "Ultrasonic",
    "brand": "Pepperl+Fuchs",
    "category": "Pepperl+Fuchs Sensor",
    "type": "Sensor",
    "description": "Original 100% genuine Ultrasonic sensor UB500-18GM75-U-V15 supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Pepperl+Fuchs"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09539732/b/4/Ultrasonic-sensor-UB500-18GM75-U-V15.png",
    "slug": "ultrasonic-sensor-ub500-18gm75-u-v15",
    "stock": true
  },
  {
    "id": "v1-4",
    "name": "Danfoss VFD",
    "partNumber": "Danfoss",
    "brand": "Danfoss",
    "category": "Danfoss VFD",
    "type": "VFD",
    "description": "Original 100% genuine Danfoss VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Danfoss"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09165045/b/4/132F0018-Danfoss-VLT051-Micro-Series-VFD.jpg",
    "slug": "danfoss-vfd",
    "stock": true
  },
  {
    "id": "v1-5",
    "name": "132F0018 Danfoss VLT051 Micro Series VFD",
    "partNumber": "132F0018",
    "brand": "Danfoss",
    "category": "Danfoss VFD",
    "type": "VFD",
    "description": "Original 100% genuine 132F0018 Danfoss VLT051 Micro Series VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Danfoss"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09165045/b/4/132F0018-Danfoss-VLT051-Micro-Series-VFD.jpg",
    "slug": "132f0018-danfoss-vlt051-micro-series-vfd",
    "stock": true
  },
  {
    "id": "v1-6",
    "name": "132F0058 VLT Micro Drive FC-51",
    "partNumber": "132F0058",
    "brand": "Danfoss",
    "category": "Danfoss VFD",
    "type": "VFD",
    "description": "Original 100% genuine 132F0058 VLT Micro Drive FC-51 supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Danfoss"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09631358/b/4/132F0058-VLT-Micro-Drive-FC-51.jpg",
    "slug": "132f0058-vlt-micro-drive-fc-51",
    "stock": true
  },
  {
    "id": "v1-7",
    "name": "Proface HMI",
    "partNumber": "Proface",
    "brand": "Proface",
    "category": "Proface HMI",
    "type": "HMI",
    "description": "Original 100% genuine Proface HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Proface"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09714690/b/4/PFXET6600WAD-Proface-HMI-12-inch-ET6000-Series.jpeg",
    "slug": "proface-hmi",
    "stock": true
  },
  {
    "id": "v1-8",
    "name": "PFXET6600WAD Proface HMI 12 inch ET6000 Series",
    "partNumber": "PFXET6600WAD",
    "brand": "Proface",
    "category": "Proface HMI",
    "type": "HMI",
    "description": "Original 100% genuine PFXET6600WAD Proface HMI 12 inch ET6000 Series supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Proface"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09714690/b/4/PFXET6600WAD-Proface-HMI-12-inch-ET6000-Series.jpeg",
    "slug": "pfxet6600wad-proface-hmi-12-inch-et6000-series",
    "stock": true
  },
  {
    "id": "v1-9",
    "name": "Proface PFXGP4301TAD Touch Panel HMI",
    "partNumber": "Proface",
    "brand": "Proface",
    "category": "Proface HMI",
    "type": "HMI",
    "description": "Original 100% genuine Proface PFXGP4301TAD Touch Panel HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Proface"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09164983/b/4/Proface-PFXGP4301TAD-Touch-Panel-HMI.jpg",
    "slug": "proface-pfxgp4301tad-touch-panel-hmi",
    "stock": true
  },
  {
    "id": "v1-10",
    "name": "PFXGP4116T2D Proface HMI",
    "partNumber": "PFXGP4116T2D",
    "brand": "Proface",
    "category": "Proface HMI",
    "type": "HMI",
    "description": "Original 100% genuine PFXGP4116T2D Proface HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Proface"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09540537/b/4/PFXGP4116T2D-Proface-HMI.jpeg",
    "slug": "pfxgp4116t2d-proface-hmi",
    "stock": true
  },
  {
    "id": "v1-11",
    "name": "PFXFGP4402WADW Proface HMI",
    "partNumber": "PFXFGP4402WADW",
    "brand": "Proface",
    "category": "Proface HMI",
    "type": "HMI",
    "description": "Original 100% genuine PFXFGP4402WADW Proface HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Proface"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09631360/b/6/PFXFGP4402WADW-Proface-HMI.jpg",
    "slug": "pfxfgp4402wadw-proface-hmi",
    "stock": true
  },
  {
    "id": "v1-12",
    "name": "Proface SP5000 Series Touch Panel HMI",
    "partNumber": "Proface",
    "brand": "Proface",
    "category": "Proface HMI",
    "type": "HMI",
    "description": "Original 100% genuine Proface SP5000 Series Touch Panel HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Proface"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09164984/b/4/Proface-SP5000-Series-Touch-Panel-HMI.jpg",
    "slug": "proface-sp5000-series-touch-panel-hmi",
    "stock": true
  },
  {
    "id": "v1-13",
    "name": "PFXGP4114T2D Proface HMI",
    "partNumber": "PFXGP4114T2D",
    "brand": "Proface",
    "category": "Proface HMI",
    "type": "HMI",
    "description": "Original 100% genuine PFXGP4114T2D Proface HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Proface"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10038942/b/4/PFXGP4114T2D-Proface-HMI.jpg",
    "slug": "pfxgp4114t2d-proface-hmi",
    "stock": true
  },
  {
    "id": "v1-14",
    "name": "PFXET6400WAD Proface HMI",
    "partNumber": "PFXET6400WAD",
    "brand": "Proface",
    "category": "Proface HMI",
    "type": "HMI",
    "description": "Original 100% genuine PFXET6400WAD Proface HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Proface"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10038960/b/4/PFXET6400WAD-Proface-HMI.jpg",
    "slug": "pfxet6400wad-proface-hmi",
    "stock": true
  },
  {
    "id": "v1-15",
    "name": "PFXET6500WAD Proface HMI",
    "partNumber": "PFXET6500WAD",
    "brand": "Proface",
    "category": "Proface HMI",
    "type": "HMI",
    "description": "Original 100% genuine PFXET6500WAD Proface HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Proface"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10039026/b/4/PFXET6500WAD-Proface-HMI.jpg",
    "slug": "pfxet6500wad-proface-hmi",
    "stock": true
  },
  {
    "id": "v1-16",
    "name": "PFXET6600WAD Proface HMI",
    "partNumber": "PFXET6600WAD",
    "brand": "Proface",
    "category": "Proface HMI",
    "type": "HMI",
    "description": "Original 100% genuine PFXET6600WAD Proface HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Proface"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10039081/b/4/PFXET6600WAD-Proface-HMI.jpg",
    "slug": "pfxet6600wad-proface-hmi",
    "stock": true
  },
  {
    "id": "v1-17",
    "name": "PFXET6700WAD Proface HMI",
    "partNumber": "PFXET6700WAD",
    "brand": "Proface",
    "category": "Proface HMI",
    "type": "HMI",
    "description": "Original 100% genuine PFXET6700WAD Proface HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Proface"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10039100/b/4/PFXET6700WAD-Proface-HMI.jpg",
    "slug": "pfxet6700wad-proface-hmi",
    "stock": true
  },
  {
    "id": "v1-18",
    "name": "Allen Bradley PLC",
    "partNumber": "Allen",
    "brand": "Allen Bradley",
    "category": "Allen Bradley PLC",
    "type": "PLC",
    "description": "Original 100% genuine Allen Bradley PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Allen Bradley"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10023595/b/4/1734TB3-Allen-Bradley-PLC.jpg",
    "slug": "allen-bradley-plc",
    "stock": true
  },
  {
    "id": "v1-19",
    "name": "1734TB3 Allen Bradley PLC",
    "partNumber": "1734TB3",
    "brand": "Allen Bradley",
    "category": "Allen Bradley PLC",
    "type": "PLC",
    "description": "Original 100% genuine 1734TB3 Allen Bradley PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Allen Bradley"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10023595/b/4/1734TB3-Allen-Bradley-PLC.jpg",
    "slug": "1734tb3-allen-bradley-plc",
    "stock": true
  },
  {
    "id": "v1-20",
    "name": "1752-L24BBBE Smart Guard 600",
    "partNumber": "1752-L24BBBE",
    "brand": "Siemens",
    "category": "Siemens PLC",
    "type": "PLC",
    "description": "Original 100% genuine 1752-L24BBBE Smart Guard 600 supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09377293/b/4/1752-L24BBBE-Smart-Guard-600.jpg",
    "slug": "1752-l24bbbe-smart-guard-600",
    "stock": true
  },
  {
    "id": "v1-21",
    "name": "2080-LC70-24QWB Micro 870 PLC",
    "partNumber": "2080-LC70-24QWB",
    "brand": "Siemens",
    "category": "Siemens PLC",
    "type": "PLC",
    "description": "Original 100% genuine 2080-LC70-24QWB Micro 870 PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09377292/b/4/2080-LC70-24QWB-Micro-870-PLC.jpg",
    "slug": "2080-lc70-24qwb-micro-870-plc",
    "stock": true
  },
  {
    "id": "v1-22",
    "name": "CompactLogix 5380",
    "partNumber": "CompactLogix",
    "brand": "Allen Bradley",
    "category": "Allen Bradley PLC",
    "type": "PLC",
    "description": "Original 100% genuine CompactLogix 5380 supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Allen Bradley"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09377302/b/4/CompactLogix-5380.jpg",
    "slug": "compactlogix-5380",
    "stock": true
  },
  {
    "id": "v1-23",
    "name": "2080LC3048QBB Allen-Bradley PLC",
    "partNumber": "2080LC3048QBB",
    "brand": "Allen Bradley",
    "category": "Allen Bradley PLC",
    "type": "PLC",
    "description": "Original 100% genuine 2080LC3048QBB Allen-Bradley PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Allen Bradley"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10022733/b/4/2080LC3048QBB-Allen-Bradley-PLC.jpg",
    "slug": "2080lc3048qbb-allen-bradley-plc",
    "stock": true
  },
  {
    "id": "v1-24",
    "name": "1766L32BWAA Allen Bradley PLC",
    "partNumber": "1766L32BWAA",
    "brand": "Allen Bradley",
    "category": "Allen Bradley PLC",
    "type": "PLC",
    "description": "Original 100% genuine 1766L32BWAA Allen Bradley PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Allen Bradley"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10022770/b/4/1766L32BWAA-Allen-Bradley-PLC.jpg",
    "slug": "1766l32bwaa-allen-bradley-plc",
    "stock": true
  },
  {
    "id": "v1-25",
    "name": "2080LC2020QBB Delta PLC",
    "partNumber": "2080LC2020QBB",
    "brand": "Delta",
    "category": "Delta PLC",
    "type": "PLC",
    "description": "Original 100% genuine 2080LC2020QBB Delta PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10023176/b/4/2080LC2020QBB-Delta-PLC.jpg",
    "slug": "2080lc2020qbb-delta-plc",
    "stock": true
  },
  {
    "id": "v1-26",
    "name": "25BD2P3N104 Allen Bradley PLC",
    "partNumber": "25BD2P3N104",
    "brand": "Allen Bradley",
    "category": "Allen Bradley PLC",
    "type": "PLC",
    "description": "Original 100% genuine 25BD2P3N104 Allen Bradley PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Allen Bradley"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10023216/b/4/25BD2P3N104-Allen-Bradley-PLC.jpg",
    "slug": "25bd2p3n104-allen-bradley-plc",
    "stock": true
  },
  {
    "id": "v1-27",
    "name": "2080TC2 Allen Bradley PLC",
    "partNumber": "2080TC2",
    "brand": "Allen Bradley",
    "category": "Allen Bradley PLC",
    "type": "PLC",
    "description": "Original 100% genuine 2080TC2 Allen Bradley PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Allen Bradley"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10023260/b/4/2080TC2-Allen-Bradley-PLC.jpg",
    "slug": "2080tc2-allen-bradley-plc",
    "stock": true
  },
  {
    "id": "v1-28",
    "name": "2080LC7024QBB Allen Bradley PLC",
    "partNumber": "2080LC7024QBB",
    "brand": "Allen Bradley",
    "category": "Allen Bradley PLC",
    "type": "PLC",
    "description": "Original 100% genuine 2080LC7024QBB Allen Bradley PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Allen Bradley"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10023353/b/4/2080LC7024QBB-Allen-Bradley-PLC.jpg",
    "slug": "2080lc7024qbb-allen-bradley-plc",
    "stock": true
  },
  {
    "id": "v1-29",
    "name": "2080LC5048QWB  Allen Bradley PLC",
    "partNumber": "2080LC5048QWB",
    "brand": "Allen Bradley",
    "category": "Allen Bradley PLC",
    "type": "PLC",
    "description": "Original 100% genuine 2080LC5048QWB  Allen Bradley PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Allen Bradley"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10023437/b/4/2080LC5048QWB-Allen-Bradley-PLC.jpg",
    "slug": "2080lc5048qwb-allen-bradley-plc",
    "stock": true
  },
  {
    "id": "v1-30",
    "name": "1756PAR2 Allen Bradley PLC",
    "partNumber": "1756PAR2",
    "brand": "Allen Bradley",
    "category": "Allen Bradley PLC",
    "type": "PLC",
    "description": "Original 100% genuine 1756PAR2 Allen Bradley PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Allen Bradley"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10023663/b/4/1756PAR2-Allen-Bradley-PLC.jpg",
    "slug": "1756par2-allen-bradley-plc",
    "stock": true
  },
  {
    "id": "v1-31",
    "name": "Allen Bradley HMI",
    "partNumber": "Allen",
    "brand": "Allen Bradley",
    "category": "Allen Bradley HMI",
    "type": "HMI",
    "description": "Original 100% genuine Allen Bradley HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Allen Bradley"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10026318/b/5/2711RT10T-Allen-Bradley-HMI.jpeg",
    "slug": "allen-bradley-hmi",
    "stock": true
  },
  {
    "id": "v1-32",
    "name": "2711RT10T Allen Bradley HMI",
    "partNumber": "2711RT10T",
    "brand": "Allen Bradley",
    "category": "Allen Bradley HMI",
    "type": "HMI",
    "description": "Original 100% genuine 2711RT10T Allen Bradley HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Allen Bradley"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10026318/b/5/2711RT10T-Allen-Bradley-HMI.jpeg",
    "slug": "2711rt10t-allen-bradley-hmi",
    "stock": true
  },
  {
    "id": "v1-33",
    "name": "2711R PanelView 800",
    "partNumber": "2711R",
    "brand": "Allen Bradley",
    "category": "Allen Bradley HMI",
    "type": "HMI",
    "description": "Original 100% genuine 2711R PanelView 800 supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Allen Bradley"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09377303/b/4/2711R-PanelView-800.jpg",
    "slug": "2711r-panelview-800",
    "stock": true
  },
  {
    "id": "v1-34",
    "name": "2715PT12WD HMI PanelView 5000",
    "partNumber": "2715PT12WD",
    "brand": "Allen Bradley",
    "category": "Allen Bradley HMI",
    "type": "HMI",
    "description": "Original 100% genuine 2715PT12WD HMI PanelView 5000 supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Allen Bradley"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09377304/b/4/2715PT12WD-HMI-PanelView-5000.jpg",
    "slug": "2715pt12wd-hmi-panelview-5000",
    "stock": true
  },
  {
    "id": "v1-35",
    "name": "2711PT6M20A Allen Bradley HMI",
    "partNumber": "2711PT6M20A",
    "brand": "Allen Bradley",
    "category": "Allen Bradley HMI",
    "type": "HMI",
    "description": "Original 100% genuine 2711PT6M20A Allen Bradley HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Allen Bradley"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10026795/b/4/2711PT6M20A-Allen-Bradley-HMI.jpg",
    "slug": "2711pt6m20a-allen-bradley-hmi",
    "stock": true
  },
  {
    "id": "v1-36",
    "name": "2711P-T6M20D  Allen Bradley HMI",
    "partNumber": "2711P-T6M20D",
    "brand": "Allen Bradley",
    "category": "Allen Bradley HMI",
    "type": "HMI",
    "description": "Original 100% genuine 2711P-T6M20D  Allen Bradley HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Allen Bradley"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10031223/b/4/2711P-T6M20D-Allen-Bradley-HMI.jpg",
    "slug": "2711p-t6m20d-allen-bradley-hmi",
    "stock": true
  },
  {
    "id": "v1-37",
    "name": "Siemens PLC",
    "partNumber": "Siemens",
    "brand": "Siemens",
    "category": "Siemens PLC",
    "type": "PLC",
    "description": "Original 100% genuine Siemens PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09164974/b/4/Siemens-Simatic-S7-1500-PLC.jpg",
    "slug": "siemens-plc",
    "stock": true
  },
  {
    "id": "v1-38",
    "name": "6ES7412-1XJ07-0AB0 SIMATIC S7-400",
    "partNumber": "6ES7412-1XJ07-0AB0",
    "brand": "Siemens",
    "category": "Siemens PLC",
    "type": "PLC",
    "description": "Original 100% genuine 6ES7412-1XJ07-0AB0 SIMATIC S7-400 supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09540631/b/4/6ES7412-1XJ07-0AB0-SIMATIC-S7-400.jpg",
    "slug": "6es7412-1xj07-0ab0-simatic-s7-400",
    "stock": true
  },
  {
    "id": "v1-39",
    "name": "6ES7315-2EH14-0AB0 SIMATIC S7-300 CPU 315-2 PN/DP",
    "partNumber": "6ES7315-2EH14-0AB0",
    "brand": "Siemens",
    "category": "Siemens PLC",
    "type": "PLC",
    "description": "Original 100% genuine 6ES7315-2EH14-0AB0 SIMATIC S7-300 CPU 315-2 PN/DP supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09164985/b/4/6ES7315-2EH14-0AB0-SIMATIC-S7-300-CPU-315-2-PN-DP.jpg",
    "slug": "6es7315-2eh14-0ab0-simatic-s7-300-cpu-315-2-pn-dp",
    "stock": true
  },
  {
    "id": "v1-40",
    "name": "Siemens Simatic S7-1500 PLC",
    "partNumber": "Siemens",
    "brand": "Siemens",
    "category": "Siemens PLC",
    "type": "PLC",
    "description": "Original 100% genuine Siemens Simatic S7-1500 PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09164974/b/4/Siemens-Simatic-S7-1500-PLC.jpg",
    "slug": "siemens-simatic-s7-1500-plc",
    "stock": true
  },
  {
    "id": "v1-41",
    "name": "6ES7312-1AE14-0AB0 Siemens PLC",
    "partNumber": "6ES7312-1AE14-0AB0",
    "brand": "Siemens",
    "category": "Siemens PLC",
    "type": "PLC",
    "description": "Original 100% genuine 6ES7312-1AE14-0AB0 Siemens PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09540567/b/4/6ES7312-1AE14-0AB0-Siemens-PLC.jpg",
    "slug": "6es7312-1ae14-0ab0-siemens-plc",
    "stock": true
  },
  {
    "id": "v1-42",
    "name": "6ES7422-1FH00-0AA0 SIMATIC S7-400",
    "partNumber": "6ES7422-1FH00-0AA0",
    "brand": "Siemens",
    "category": "Siemens PLC",
    "type": "PLC",
    "description": "Original 100% genuine 6ES7422-1FH00-0AA0 SIMATIC S7-400 supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09540660/b/4/6ES7422-1FH00-0AA0-SIMATIC-S7-400.jpg",
    "slug": "6es7422-1fh00-0aa0-simatic-s7-400",
    "stock": true
  },
  {
    "id": "v1-43",
    "name": "6ES7 972-0BA52-0XA0 Profibus DP Interface Module",
    "partNumber": "6ES7",
    "brand": "Siemens",
    "category": "Siemens Power Supply",
    "type": "Power Supply",
    "description": "Original 100% genuine 6ES7 972-0BA52-0XA0 Profibus DP Interface Module supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09165044/b/4/6ES7-972-0BA52-0XA0-Profibus-DP-Interface-Module.jpg",
    "slug": "6es7-972-0ba52-0xa0-profibus-dp-interface-module",
    "stock": true
  },
  {
    "id": "v1-44",
    "name": "6ES74311KF000AB0 Siemens SIMATIC S7-400",
    "partNumber": "6ES74311KF000AB0",
    "brand": "Siemens",
    "category": "Siemens PLC",
    "type": "PLC",
    "description": "Original 100% genuine 6ES74311KF000AB0 Siemens SIMATIC S7-400 supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09631347/b/4/6ES74311KF000AB0-Siemens-SIMATIC-S7-400.jpg",
    "slug": "6es74311kf000ab0-siemens-simatic-s7-400",
    "stock": true
  },
  {
    "id": "v1-45",
    "name": "Siemens 6ES72141AF400XB0",
    "partNumber": "Siemens",
    "brand": "Siemens",
    "category": "Siemens PLC",
    "type": "PLC",
    "description": "Original 100% genuine Siemens 6ES72141AF400XB0 supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09538634/b/4/Siemens-6ES72141AF400XB0.jpeg",
    "slug": "siemens-6es72141af400xb0",
    "stock": true
  },
  {
    "id": "v1-46",
    "name": "6ES7318-2AJ00-0AB0 Siemens S7-300",
    "partNumber": "6ES7318-2AJ00-0AB0",
    "brand": "Siemens",
    "category": "Siemens PLC",
    "type": "PLC",
    "description": "Original 100% genuine 6ES7318-2AJ00-0AB0 Siemens S7-300 supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09539564/b/5/6ES7318-2AJ00-0AB0-Siemens-S7-300.jpg",
    "slug": "6es7318-2aj00-0ab0-siemens-s7-300",
    "stock": true
  },
  {
    "id": "v1-47",
    "name": "Siemens ET200SP TM Posinput Module",
    "partNumber": "Siemens",
    "brand": "Siemens",
    "category": "Siemens Power Supply",
    "type": "Power Supply",
    "description": "Original 100% genuine Siemens ET200SP TM Posinput Module supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09164996/b/4/Siemens-ET200SP-TM-Posinput-Module.jpg",
    "slug": "siemens-et200sp-tm-posinput-module",
    "stock": true
  },
  {
    "id": "v1-48",
    "name": "6ES7517-3HP00-0AB0 Siemens PLC",
    "partNumber": "6ES7517-3HP00-0AB0",
    "brand": "Siemens",
    "category": "Siemens PLC",
    "type": "PLC",
    "description": "Original 100% genuine 6ES7517-3HP00-0AB0 Siemens PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09540455/b/4/6ES7517-3HP00-0AB0-Siemens-PLC.jpg",
    "slug": "6es7517-3hp00-0ab0-siemens-plc",
    "stock": true
  },
  {
    "id": "v1-49",
    "name": "6ES7155-6AU00-0HM0 Siemens PLC",
    "partNumber": "6ES7155-6AU00-0HM0",
    "brand": "Siemens",
    "category": "Siemens PLC",
    "type": "PLC",
    "description": "Original 100% genuine 6ES7155-6AU00-0HM0 Siemens PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09540466/b/4/6ES7155-6AU00-0HM0-Siemens-PLC.jpg",
    "slug": "6es7155-6au00-0hm0-siemens-plc",
    "stock": true
  },
  {
    "id": "v1-50",
    "name": "Siemens HMI",
    "partNumber": "Siemens",
    "brand": "Siemens",
    "category": "Siemens HMI",
    "type": "HMI",
    "description": "Original 100% genuine Siemens HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09164987/b/5/6AV2143-6JB00-0AA0-Siemens-SIMATIC-TP900-Basic.jpg",
    "slug": "siemens-hmi",
    "stock": true
  },
  {
    "id": "v1-51",
    "name": "6AV2143-6JB00-0AA0 Siemens SIMATIC TP900 Basic",
    "partNumber": "6AV2143-6JB00-0AA0",
    "brand": "Siemens",
    "category": "Siemens PLC",
    "type": "PLC",
    "description": "Original 100% genuine 6AV2143-6JB00-0AA0 Siemens SIMATIC TP900 Basic supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09164987/b/5/6AV2143-6JB00-0AA0-Siemens-SIMATIC-TP900-Basic.jpg",
    "slug": "6av2143-6jb00-0aa0-siemens-simatic-tp900-basic",
    "stock": true
  },
  {
    "id": "v1-52",
    "name": "6AV2124-0MC01-0AX0 TP1200 comfort panel Siemens HMI",
    "partNumber": "6AV2124-0MC01-0AX0",
    "brand": "Siemens",
    "category": "Siemens HMI",
    "type": "HMI",
    "description": "Original 100% genuine 6AV2124-0MC01-0AX0 TP1200 comfort panel Siemens HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09540555/b/4/6AV2124-0MC01-0AX0-TP1200-comfort-panel-Siemens-HMI.jpg",
    "slug": "6av2124-0mc01-0ax0-tp1200-comfort-panel-siemens-hmi",
    "stock": true
  },
  {
    "id": "v1-53",
    "name": "6AV6647-0AF11-3AX0 Siemens Simatic Ktp1000 Hmi",
    "partNumber": "6AV6647-0AF11-3AX0",
    "brand": "Siemens",
    "category": "Siemens HMI",
    "type": "HMI",
    "description": "Original 100% genuine 6AV6647-0AF11-3AX0 Siemens Simatic Ktp1000 Hmi supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09164997/b/4/6AV6647-0AF11-3AX0-Siemens-Simatic-Ktp1000-Hmi.jpg",
    "slug": "6av6647-0af11-3ax0-siemens-simatic-ktp1000-hmi",
    "stock": true
  },
  {
    "id": "v1-54",
    "name": "6AV3617-1JC20-0AX1 Siemens Operating Panel",
    "partNumber": "6AV3617-1JC20-0AX1",
    "brand": "Siemens",
    "category": "Siemens HMI",
    "type": "HMI",
    "description": "Original 100% genuine 6AV3617-1JC20-0AX1 Siemens Operating Panel supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09539626/b/4/6AV3617-1JC20-0AX1-Siemens-Operating-Panel.jpeg",
    "slug": "6av3617-1jc20-0ax1-siemens-operating-panel",
    "stock": true
  },
  {
    "id": "v1-55",
    "name": "6AV2124-0QC02-0AX2 Siemens HMI",
    "partNumber": "6AV2124-0QC02-0AX2",
    "brand": "Siemens",
    "category": "Siemens HMI",
    "type": "HMI",
    "description": "Original 100% genuine 6AV2124-0QC02-0AX2 Siemens HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09540449/b/4/6AV2124-0QC02-0AX2-Siemens-HMI.jpg",
    "slug": "6av2124-0qc02-0ax2-siemens-hmi",
    "stock": true
  },
  {
    "id": "v1-56",
    "name": "Simatic TP900 Comfort HMI 6AV2124-0JC01-0AX0 HMI",
    "partNumber": "Simatic",
    "brand": "Siemens",
    "category": "Siemens HMI",
    "type": "HMI",
    "description": "Original 100% genuine Simatic TP900 Comfort HMI 6AV2124-0JC01-0AX0 HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09164998/b/4/Simatic-TP900-Comfort-HMI-6AV2124-0JC01-0AX0-HMI.jpg",
    "slug": "simatic-tp900-comfort-hmi-6av2124-0jc01-0ax0-hmi",
    "stock": true
  },
  {
    "id": "v1-57",
    "name": "6AV7466-5MA01-0AA0 Siemens Simatic IFP1500 Flat Panel",
    "partNumber": "6AV7466-5MA01-0AA0",
    "brand": "Siemens",
    "category": "Siemens HMI",
    "type": "HMI",
    "description": "Original 100% genuine 6AV7466-5MA01-0AA0 Siemens Simatic IFP1500 Flat Panel supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09165002/b/4/6AV7466-5MA01-0AA0-Siemens-Simatic-IFP1500-Flat-Panel.jpg",
    "slug": "6av7466-5ma01-0aa0-siemens-simatic-ifp1500-flat-panel",
    "stock": true
  },
  {
    "id": "v1-58",
    "name": "6AV2123-2GB03-0AX0 Siemens Simatic Ktp700 Hmi",
    "partNumber": "6AV2123-2GB03-0AX0",
    "brand": "Siemens",
    "category": "Siemens HMI",
    "type": "HMI",
    "description": "Original 100% genuine 6AV2123-2GB03-0AX0 Siemens Simatic Ktp700 Hmi supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09164999/b/4/6AV2123-2GB03-0AX0-Siemens-Simatic-Ktp700-Hmi.jpg",
    "slug": "6av2123-2gb03-0ax0-siemens-simatic-ktp700-hmi",
    "stock": true
  },
  {
    "id": "v1-59",
    "name": "6AV2124-0MC01-0AX0 Siemens Simatic TP1200 HMI",
    "partNumber": "6AV2124-0MC01-0AX0",
    "brand": "Siemens",
    "category": "Siemens HMI",
    "type": "HMI",
    "description": "Original 100% genuine 6AV2124-0MC01-0AX0 Siemens Simatic TP1200 HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09165000/b/4/6AV2124-0MC01-0AX0-Siemens-Simatic-TP1200-HMI.jpg",
    "slug": "6av2124-0mc01-0ax0-siemens-simatic-tp1200-hmi",
    "stock": true
  },
  {
    "id": "v1-60",
    "name": "Siemens VFD",
    "partNumber": "Siemens",
    "brand": "Siemens",
    "category": "Siemens VFD",
    "type": "VFD",
    "description": "Original 100% genuine Siemens VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09164989/b/4/6SL3210-5BB12-5BV1-Siemens-Sinamics-V20-VFD.jpg",
    "slug": "siemens-vfd",
    "stock": true
  },
  {
    "id": "v1-61",
    "name": "6SL3210-5BB12-5BV1 Siemens Sinamics V20 VFD",
    "partNumber": "6SL3210-5BB12-5BV1",
    "brand": "Siemens",
    "category": "Siemens VFD",
    "type": "VFD",
    "description": "Original 100% genuine 6SL3210-5BB12-5BV1 Siemens Sinamics V20 VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09164989/b/4/6SL3210-5BB12-5BV1-Siemens-Sinamics-V20-VFD.jpg",
    "slug": "6sl3210-5bb12-5bv1-siemens-sinamics-v20-vfd",
    "stock": true
  },
  {
    "id": "v1-62",
    "name": "6SL3420-1TE21-0AA1 Siemens VFD S120",
    "partNumber": "6SL3420-1TE21-0AA1",
    "brand": "Siemens",
    "category": "Siemens VFD",
    "type": "VFD",
    "description": "Original 100% genuine 6SL3420-1TE21-0AA1 Siemens VFD S120 supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09164991/b/4/6SL3420-1TE21-0AA1-Siemens-VFD-S120.jpg",
    "slug": "6sl3420-1te21-0aa1-siemens-vfd-s120",
    "stock": true
  },
  {
    "id": "v1-63",
    "name": "Siemens S120 Drive 6SL3120-1TE21-8AD0 S120 VFD",
    "partNumber": "Siemens",
    "brand": "Siemens",
    "category": "Siemens VFD",
    "type": "VFD",
    "description": "Original 100% genuine Siemens S120 Drive 6SL3120-1TE21-8AD0 S120 VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09164988/b/4/Siemens-S120-Drive-6SL3120-1TE21-8AD0-S120-VFD.jpg",
    "slug": "siemens-s120-drive-6sl3120-1te21-8ad0-s120-vfd",
    "stock": true
  },
  {
    "id": "v1-64",
    "name": "6AU1425-2AA00-0AA0 Siemens SIMOTION D425-2 DP",
    "partNumber": "6AU1425-2AA00-0AA0",
    "brand": "Siemens",
    "category": "Siemens PLC",
    "type": "PLC",
    "description": "Original 100% genuine 6AU1425-2AA00-0AA0 Siemens SIMOTION D425-2 DP supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09631342/b/4/6AU1425-2AA00-0AA0-Siemens-SIMOTION-D425-2-DP.jpg",
    "slug": "6au1425-2aa00-0aa0-siemens-simotion-d425-2-dp",
    "stock": true
  },
  {
    "id": "v1-65",
    "name": "6SL3210-1KE22-6UF1 Siemens Sinamics S120 Drive",
    "partNumber": "6SL3210-1KE22-6UF1",
    "brand": "Siemens",
    "category": "Siemens VFD",
    "type": "VFD",
    "description": "Original 100% genuine 6SL3210-1KE22-6UF1 Siemens Sinamics S120 Drive supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09164994/b/4/6SL3210-1KE22-6UF1-Siemens-Sinamics-S120-Drive.jpg",
    "slug": "6sl3210-1ke22-6uf1-siemens-sinamics-s120-drive",
    "stock": true
  },
  {
    "id": "v1-66",
    "name": "6SL3210-1PE18-0UL1 SINAMICS Power Module PM240-2",
    "partNumber": "6SL3210-1PE18-0UL1",
    "brand": "Siemens",
    "category": "Siemens Power Supply",
    "type": "Power Supply",
    "description": "Original 100% genuine 6SL3210-1PE18-0UL1 SINAMICS Power Module PM240-2 supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09165011/b/4/6SL3210-1PE18-0UL1-SINAMICS-Power-Module-PM240-2.jpg",
    "slug": "6sl3210-1pe18-0ul1-sinamics-power-module-pm240-2",
    "stock": true
  },
  {
    "id": "v1-67",
    "name": "6SL3244-0BB12-1FA0 Siemens VFD SINAMICS G120 CU240E-2 PN",
    "partNumber": "6SL3244-0BB12-1FA0",
    "brand": "Siemens",
    "category": "Siemens VFD",
    "type": "VFD",
    "description": "Original 100% genuine 6SL3244-0BB12-1FA0 Siemens VFD SINAMICS G120 CU240E-2 PN supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09164990/b/4/6SL3244-0BB12-1FA0-Siemens-VFD-SINAMICS-G120-CU240E-2-PN.jpg",
    "slug": "6sl3244-0bb12-1fa0-siemens-vfd-sinamics-g120-cu240e-2-pn",
    "stock": true
  },
  {
    "id": "v1-68",
    "name": "Siemens 6SL3040-0PA01-0AA0 CUA32 VFD",
    "partNumber": "Siemens",
    "brand": "Siemens",
    "category": "Siemens VFD",
    "type": "VFD",
    "description": "Original 100% genuine Siemens 6SL3040-0PA01-0AA0 CUA32 VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09164992/b/4/Siemens-6SL3040-0PA01-0AA0-CUA32-VFD.jpg",
    "slug": "siemens-6sl3040-0pa01-0aa0-cua32-vfd",
    "stock": true
  },
  {
    "id": "v1-69",
    "name": "Siemens IOP- 2 Intelligent Operator Panel",
    "partNumber": "Siemens",
    "brand": "Siemens",
    "category": "Siemens HMI",
    "type": "HMI",
    "description": "Original 100% genuine Siemens IOP- 2 Intelligent Operator Panel supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09164993/b/4/Siemens-IOP-2-Intelligent-Operator-Panel.jpg",
    "slug": "siemens-iop-2-intelligent-operator-panel",
    "stock": true
  },
  {
    "id": "v1-70",
    "name": "Mitsubishi PLC",
    "partNumber": "Mitsubishi",
    "brand": "Mitsubishi",
    "category": "Mitsubishi PLC",
    "type": "PLC",
    "description": "Original 100% genuine Mitsubishi PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09376969/b/4/FX5U-64MR-ES.jpg",
    "slug": "mitsubishi-plc",
    "stock": true
  },
  {
    "id": "v1-71",
    "name": "FX5U-64MR ES",
    "partNumber": "FX5U-64MR",
    "brand": "Siemens",
    "category": "Siemens PLC",
    "type": "PLC",
    "description": "Original 100% genuine FX5U-64MR ES supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09376969/b/4/FX5U-64MR-ES.jpg",
    "slug": "fx5u-64mr-es",
    "stock": true
  },
  {
    "id": "v1-72",
    "name": "FX3U-16MR DS Mitsubishi PLC",
    "partNumber": "FX3U-16MR",
    "brand": "Mitsubishi",
    "category": "Mitsubishi PLC",
    "type": "PLC",
    "description": "Original 100% genuine FX3U-16MR DS Mitsubishi PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09376955/b/4/FX3U-16MR-DS-Mitsubishi-PLC.jpg",
    "slug": "fx3u-16mr-ds-mitsubishi-plc",
    "stock": true
  },
  {
    "id": "v1-73",
    "name": "FX5U-32MR DS Mitsubishi PLC",
    "partNumber": "FX5U-32MR",
    "brand": "Mitsubishi",
    "category": "Mitsubishi PLC",
    "type": "PLC",
    "description": "Original 100% genuine FX5U-32MR DS Mitsubishi PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09376968/b/4/FX5U-32MR-DS-Mitsubishi-PLC.jpg",
    "slug": "fx5u-32mr-ds-mitsubishi-plc",
    "stock": true
  },
  {
    "id": "v1-74",
    "name": "FX5U-80MT ESS Mitsubishi PLC",
    "partNumber": "FX5U-80MT",
    "brand": "Mitsubishi",
    "category": "Mitsubishi PLC",
    "type": "PLC",
    "description": "Original 100% genuine FX5U-80MT ESS Mitsubishi PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09376981/b/4/FX5U-80MT-ESS-Mitsubishi-PLC.jpg",
    "slug": "fx5u-80mt-ess-mitsubishi-plc",
    "stock": true
  },
  {
    "id": "v1-75",
    "name": "FX3S-30MR DS Mitsubishi PLC",
    "partNumber": "FX3S-30MR",
    "brand": "Mitsubishi",
    "category": "Mitsubishi PLC",
    "type": "PLC",
    "description": "Original 100% genuine FX3S-30MR DS Mitsubishi PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09376949/b/4/FX3S-30MR-DS-Mitsubishi-PLC.jpg",
    "slug": "fx3s-30mr-ds-mitsubishi-plc",
    "stock": true
  },
  {
    "id": "v1-76",
    "name": "GC- 4DA -12",
    "partNumber": "GC- 4DA -12",
    "brand": "Siemens",
    "category": "Siemens PLC",
    "type": "PLC",
    "description": "Original 100% genuine GC- 4DA -12 supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10007990/b/4/GC-4DA-12.jpg",
    "slug": "gc-4da-12",
    "stock": true
  },
  {
    "id": "v1-77",
    "name": "FX3S-10MR/DS Mitsubishi",
    "partNumber": "FX3S-10MRDS",
    "brand": "Mitsubishi",
    "category": "Mitsubishi PLC",
    "type": "PLC",
    "description": "Original 100% genuine FX3S-10MR/DS Mitsubishi supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10010749/b/4/FX3S-10MR-DS-Mitsubishi.jpg",
    "slug": "fx3s-10mr-ds-mitsubishi",
    "stock": true
  },
  {
    "id": "v1-78",
    "name": "FX3S-10MR/ES Mitsubishi PLC",
    "partNumber": "FX3S-10MRES",
    "brand": "Mitsubishi",
    "category": "Mitsubishi PLC",
    "type": "PLC",
    "description": "Original 100% genuine FX3S-10MR/ES Mitsubishi PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10010757/b/4/FX3S-10MR-ES-Mitsubishi-PLC.jpg",
    "slug": "fx3s-10mr-es-mitsubishi-plc",
    "stock": true
  },
  {
    "id": "v1-79",
    "name": "FX3S-10MT/DS Mitsubishi plc",
    "partNumber": "FX3S-10MTDS",
    "brand": "Mitsubishi",
    "category": "Mitsubishi PLC",
    "type": "PLC",
    "description": "Original 100% genuine FX3S-10MT/DS Mitsubishi plc supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10010778/b/4/FX3S-10MT-DS-Mitsubishi-plc.jpg",
    "slug": "fx3s-10mt-ds-mitsubishi-plc",
    "stock": true
  },
  {
    "id": "v1-80",
    "name": "FX3S-10MT/DSS Mitsubishi plc",
    "partNumber": "FX3S-10MTDSS",
    "brand": "Mitsubishi",
    "category": "Mitsubishi PLC",
    "type": "PLC",
    "description": "Original 100% genuine FX3S-10MT/DSS Mitsubishi plc supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10010871/b/4/FX3S-10MT-DSS-Mitsubishi-plc.jpg",
    "slug": "fx3s-10mt-dss-mitsubishi-plc",
    "stock": true
  },
  {
    "id": "v1-81",
    "name": "FX3S-10MT/ES Mitsubishi plc",
    "partNumber": "FX3S-10MTES",
    "brand": "Mitsubishi",
    "category": "Mitsubishi PLC",
    "type": "PLC",
    "description": "Original 100% genuine FX3S-10MT/ES Mitsubishi plc supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10010913/b/4/FX3S-10MT-ES-Mitsubishi-plc.jpg",
    "slug": "fx3s-10mt-es-mitsubishi-plc",
    "stock": true
  },
  {
    "id": "v1-82",
    "name": "FX3S-10MT/ESS Mitsubishi plc",
    "partNumber": "FX3S-10MTESS",
    "brand": "Mitsubishi",
    "category": "Mitsubishi PLC",
    "type": "PLC",
    "description": "Original 100% genuine FX3S-10MT/ESS Mitsubishi plc supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10010948/b/4/FX3S-10MT-ESS-Mitsubishi-plc.jpg",
    "slug": "fx3s-10mt-ess-mitsubishi-plc",
    "stock": true
  },
  {
    "id": "v1-83",
    "name": "Mitsubishi HMI",
    "partNumber": "Mitsubishi",
    "brand": "Mitsubishi",
    "category": "Mitsubishi HMI",
    "type": "HMI",
    "description": "Original 100% genuine Mitsubishi HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10017365/b/5/Mitsubishi-HMI-GT2712-STBA.jpg",
    "slug": "mitsubishi-hmi",
    "stock": true
  },
  {
    "id": "v1-84",
    "name": "Mitsubishi HMI GT2712-STBA",
    "partNumber": "Mitsubishi",
    "brand": "Mitsubishi",
    "category": "Mitsubishi HMI",
    "type": "HMI",
    "description": "Original 100% genuine Mitsubishi HMI GT2712-STBA supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10017365/b/5/Mitsubishi-HMI-GT2712-STBA.jpg",
    "slug": "mitsubishi-hmi-gt2712-stba",
    "stock": true
  },
  {
    "id": "v1-85",
    "name": "Mitsubishi HMI GT2708-VTBA",
    "partNumber": "Mitsubishi",
    "brand": "Mitsubishi",
    "category": "Mitsubishi HMI",
    "type": "HMI",
    "description": "Original 100% genuine Mitsubishi HMI GT2708-VTBA supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10016582/b/4/Mitsubishi-HMI-GT2708-VTBA.jpg",
    "slug": "mitsubishi-hmi-gt2708-vtba",
    "stock": true
  },
  {
    "id": "v1-86",
    "name": "Mitsubishi HMI GT2507-WTBD",
    "partNumber": "Mitsubishi",
    "brand": "Mitsubishi",
    "category": "Mitsubishi HMI",
    "type": "HMI",
    "description": "Original 100% genuine Mitsubishi HMI GT2507-WTBD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10016359/b/4/Mitsubishi-HMI-GT2507-WTBD.jpg",
    "slug": "mitsubishi-hmi-gt2507-wtbd",
    "stock": true
  },
  {
    "id": "v1-87",
    "name": "Mitsubishii HMI GT2107-WTBD",
    "partNumber": "Mitsubishii",
    "brand": "Mitsubishi",
    "category": "Mitsubishi HMI",
    "type": "HMI",
    "description": "Original 100% genuine Mitsubishii HMI GT2107-WTBD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10016313/b/4/Mitsubishii-HMI-GT2107-WTBD.jpg",
    "slug": "mitsubishii-hmi-gt2107-wtbd",
    "stock": true
  },
  {
    "id": "v1-88",
    "name": "Mitsubishi HMI GT2510-WXTBD",
    "partNumber": "Mitsubishi",
    "brand": "Mitsubishi",
    "category": "Mitsubishi HMI",
    "type": "HMI",
    "description": "Original 100% genuine Mitsubishi HMI GT2510-WXTBD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10016377/b/5/Mitsubishi-HMI-GT2510-WXTBD.jpg",
    "slug": "mitsubishi-hmi-gt2510-wxtbd",
    "stock": true
  },
  {
    "id": "v1-89",
    "name": "Mitsubishi HMI GT2705-VTBD",
    "partNumber": "Mitsubishi",
    "brand": "Mitsubishi",
    "category": "Mitsubishi HMI",
    "type": "HMI",
    "description": "Original 100% genuine Mitsubishi HMI GT2705-VTBD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10016493/b/4/Mitsubishi-HMI-GT2705-VTBD.jpg",
    "slug": "mitsubishi-hmi-gt2705-vtbd",
    "stock": true
  },
  {
    "id": "v1-90",
    "name": "Mitsubishi HMI GT2512-WXTBD",
    "partNumber": "Mitsubishi",
    "brand": "Mitsubishi",
    "category": "Mitsubishi HMI",
    "type": "HMI",
    "description": "Original 100% genuine Mitsubishi HMI GT2512-WXTBD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10016451/b/4/Mitsubishi-HMI-GT2512-WXTBD.jpg",
    "slug": "mitsubishi-hmi-gt2512-wxtbd",
    "stock": true
  },
  {
    "id": "v1-91",
    "name": "Mitsubishi HMI GT2712-STBD",
    "partNumber": "Mitsubishi",
    "brand": "Mitsubishi",
    "category": "Mitsubishi HMI",
    "type": "HMI",
    "description": "Original 100% genuine Mitsubishi HMI GT2712-STBD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10017520/b/16/Mitsubishi-HMI-GT2712-STBD.jpg",
    "slug": "mitsubishi-hmi-gt2712-stbd",
    "stock": true
  },
  {
    "id": "v1-92",
    "name": "Mitsubishi HMI GT2708-STBD",
    "partNumber": "Mitsubishi",
    "brand": "Mitsubishi",
    "category": "Mitsubishi HMI",
    "type": "HMI",
    "description": "Original 100% genuine Mitsubishi HMI GT2708-STBD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10016561/b/4/Mitsubishi-HMI-GT2708-STBD.jpg",
    "slug": "mitsubishi-hmi-gt2708-stbd",
    "stock": true
  },
  {
    "id": "v1-93",
    "name": "Mitsubishi HMI GT2510-VTBD",
    "partNumber": "Mitsubishi",
    "brand": "Mitsubishi",
    "category": "Mitsubishi HMI",
    "type": "HMI",
    "description": "Original 100% genuine Mitsubishi HMI GT2510-VTBD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10016211/b/4/Mitsubishi-HMI-GT2510-VTBD.jpg",
    "slug": "mitsubishi-hmi-gt2510-vtbd",
    "stock": true
  },
  {
    "id": "v1-94",
    "name": "GS2110 WTBD N Mitsubishi HMI 10 inch",
    "partNumber": "GS2110",
    "brand": "Mitsubishi",
    "category": "Mitsubishi HMI",
    "type": "HMI",
    "description": "Original 100% genuine GS2110 WTBD N Mitsubishi HMI 10 inch supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09377030/b/4/GS2110-WTBD-N-Mitsubishi-HMI-10-inch.jpg",
    "slug": "gs2110-wtbd-n-mitsubishi-hmi-10-inch",
    "stock": true
  },
  {
    "id": "v1-95",
    "name": "GT2107 WTBD Mitsubishi HMI 7inch",
    "partNumber": "GT2107",
    "brand": "Mitsubishi",
    "category": "Mitsubishi HMI",
    "type": "HMI",
    "description": "Original 100% genuine GT2107 WTBD Mitsubishi HMI 7inch supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09377021/b/4/GT2107-WTBD-Mitsubishi-HMI-7inch.jpg",
    "slug": "gt2107-wtbd-mitsubishi-hmi-7inch",
    "stock": true
  },
  {
    "id": "v1-96",
    "name": "Mitsubishi VFD",
    "partNumber": "Mitsubishi",
    "brand": "Mitsubishi",
    "category": "Mitsubishi VFD",
    "type": "VFD",
    "description": "Original 100% genuine Mitsubishi VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10018504/b/5/FR-CS84-160-60-Mitsubishi-VFD.jpg",
    "slug": "mitsubishi-vfd",
    "stock": true
  },
  {
    "id": "v1-97",
    "name": "FR-CS84-160-60 Mitsubishi VFD",
    "partNumber": "FR-CS84-160-60",
    "brand": "Mitsubishi",
    "category": "Mitsubishi VFD",
    "type": "VFD",
    "description": "Original 100% genuine FR-CS84-160-60 Mitsubishi VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10018504/b/5/FR-CS84-160-60-Mitsubishi-VFD.jpg",
    "slug": "fr-cs84-160-60-mitsubishi-vfd",
    "stock": true
  },
  {
    "id": "v1-98",
    "name": "FR-CS84-295-60 Mitsubishi VFD",
    "partNumber": "FR-CS84-295-60",
    "brand": "Mitsubishi",
    "category": "Mitsubishi VFD",
    "type": "VFD",
    "description": "Original 100% genuine FR-CS84-295-60 Mitsubishi VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10018542/b/5/FR-CS84-295-60-Mitsubishi-VFD.jpg",
    "slug": "fr-cs84-295-60-mitsubishi-vfd",
    "stock": true
  },
  {
    "id": "v1-99",
    "name": "FR-CS82S-042-60 Mitsubishi VFD",
    "partNumber": "FR-CS82S-042-60",
    "brand": "Mitsubishi",
    "category": "Mitsubishi VFD",
    "type": "VFD",
    "description": "Original 100% genuine FR-CS82S-042-60 Mitsubishi VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09377051/b/4/FR-CS82S-042-60-Mitsubishi-VFD.jpg",
    "slug": "fr-cs82s-042-60-mitsubishi-vfd",
    "stock": true
  },
  {
    "id": "v1-100",
    "name": "FR CS84 295 60  MITSUBISHI VFD",
    "partNumber": "FR CS84 295 60  MITSUBISHI VFD",
    "brand": "Mitsubishi",
    "category": "Mitsubishi VFD",
    "type": "VFD",
    "description": "Original 100% genuine FR CS84 295 60  MITSUBISHI VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09377052/b/4/FR-CS84-295-60-MITSUBISHI-VFD.jpg",
    "slug": "fr-cs84-295-60-mitsubishi-vfd",
    "stock": true
  },
  {
    "id": "v1-101",
    "name": "FR-CS-82S-025-60 Mitsubishi VFD",
    "partNumber": "FR-CS-82S-025-60",
    "brand": "Mitsubishi",
    "category": "Mitsubishi VFD",
    "type": "VFD",
    "description": "Original 100% genuine FR-CS-82S-025-60 Mitsubishi VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10018098/b/4/FR-CS-82S-025-60-Mitsubishi-VFD.jpg",
    "slug": "fr-cs-82s-025-60-mitsubishi-vfd",
    "stock": true
  },
  {
    "id": "v1-102",
    "name": "FR-CS-82S-042-60 Mitsubishi VFD",
    "partNumber": "FR-CS-82S-042-60",
    "brand": "Mitsubishi",
    "category": "Mitsubishi VFD",
    "type": "VFD",
    "description": "Original 100% genuine FR-CS-82S-042-60 Mitsubishi VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10018239/b/4/FR-CS-82S-042-60-Mitsubishi-VFD.jpg",
    "slug": "fr-cs-82s-042-60-mitsubishi-vfd",
    "stock": true
  },
  {
    "id": "v1-103",
    "name": "FR-CS-82S-070-60 Mitsubishi VFD",
    "partNumber": "FR-CS-82S-070-60",
    "brand": "Mitsubishi",
    "category": "Mitsubishi VFD",
    "type": "VFD",
    "description": "Original 100% genuine FR-CS-82S-070-60 Mitsubishi VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10018262/b/4/FR-CS-82S-070-60-Mitsubishi-VFD.jpg",
    "slug": "fr-cs-82s-070-60-mitsubishi-vfd",
    "stock": true
  },
  {
    "id": "v1-104",
    "name": "FR-CS-82S-100-60  Mitsubishi VFD",
    "partNumber": "FR-CS-82S-100-60",
    "brand": "Mitsubishi",
    "category": "Mitsubishi VFD",
    "type": "VFD",
    "description": "Original 100% genuine FR-CS-82S-100-60  Mitsubishi VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10018280/b/4/FR-CS-82S-100-60-Mitsubishi-VFD.jpg",
    "slug": "fr-cs-82s-100-60-mitsubishi-vfd",
    "stock": true
  },
  {
    "id": "v1-105",
    "name": "FR-CS84-022-60 Mitsubishi VFD",
    "partNumber": "FR-CS84-022-60",
    "brand": "Mitsubishi",
    "category": "Mitsubishi VFD",
    "type": "VFD",
    "description": "Original 100% genuine FR-CS84-022-60 Mitsubishi VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10018452/b/4/FR-CS84-022-60-Mitsubishi-VFD.jpg",
    "slug": "fr-cs84-022-60-mitsubishi-vfd",
    "stock": true
  },
  {
    "id": "v1-106",
    "name": "FR-CS84-036-60 Mitsubishi VFD",
    "partNumber": "FR-CS84-036-60",
    "brand": "Mitsubishi",
    "category": "Mitsubishi VFD",
    "type": "VFD",
    "description": "Original 100% genuine FR-CS84-036-60 Mitsubishi VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10018458/b/4/FR-CS84-036-60-Mitsubishi-VFD.jpg",
    "slug": "fr-cs84-036-60-mitsubishi-vfd",
    "stock": true
  },
  {
    "id": "v1-107",
    "name": "FR-CS84-050-60 Mitsubishi VFD",
    "partNumber": "FR-CS84-050-60",
    "brand": "Mitsubishi",
    "category": "Mitsubishi VFD",
    "type": "VFD",
    "description": "Original 100% genuine FR-CS84-050-60 Mitsubishi VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10018470/b/4/FR-CS84-050-60-Mitsubishi-VFD.jpg",
    "slug": "fr-cs84-050-60-mitsubishi-vfd",
    "stock": true
  },
  {
    "id": "v1-108",
    "name": "FR-CS84-080-60 Mitsubishi VFD",
    "partNumber": "FR-CS84-080-60",
    "brand": "Mitsubishi",
    "category": "Mitsubishi VFD",
    "type": "VFD",
    "description": "Original 100% genuine FR-CS84-080-60 Mitsubishi VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10018494/b/4/FR-CS84-080-60-Mitsubishi-VFD.jpg",
    "slug": "fr-cs84-080-60-mitsubishi-vfd",
    "stock": true
  },
  {
    "id": "v1-109",
    "name": "Omron PLC",
    "partNumber": "Omron",
    "brand": "Omron",
    "category": "Omron PLC",
    "type": "PLC",
    "description": "Original 100% genuine Omron PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Omron"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09631345/b/4/CJ1W-ID211-Omron-PLC.jpg",
    "slug": "omron-plc",
    "stock": true
  },
  {
    "id": "v1-110",
    "name": "CJ1W-ID211 Omron PLC",
    "partNumber": "CJ1W-ID211",
    "brand": "Omron",
    "category": "Omron PLC",
    "type": "PLC",
    "description": "Original 100% genuine CJ1W-ID211 Omron PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Omron"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09631345/b/4/CJ1W-ID211-Omron-PLC.jpg",
    "slug": "cj1w-id211-omron-plc",
    "stock": true
  },
  {
    "id": "v1-111",
    "name": "CP2E-E30DR-A CP2E PLC Series",
    "partNumber": "CP2E-E30DR-A",
    "brand": "Siemens",
    "category": "Siemens PLC",
    "type": "PLC",
    "description": "Original 100% genuine CP2E-E30DR-A CP2E PLC Series supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09377099/b/4/CP2E-E30DR-A-CP2E-PLC-Series.png",
    "slug": "cp2e-e30dr-a-cp2e-plc-series",
    "stock": true
  },
  {
    "id": "v1-112",
    "name": "CJ1W-DA08C Omron PLC",
    "partNumber": "CJ1W-DA08C",
    "brand": "Omron",
    "category": "Omron PLC",
    "type": "PLC",
    "description": "Original 100% genuine CJ1W-DA08C Omron PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Omron"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09631354/b/4/CJ1W-DA08C-Omron-PLC.jpg",
    "slug": "cj1w-da08c-omron-plc",
    "stock": true
  },
  {
    "id": "v1-113",
    "name": "CP1L-EM30DT-D CP1L Micro PLC",
    "partNumber": "CP1L-EM30DT-D",
    "brand": "Omron",
    "category": "Omron PLC",
    "type": "PLC",
    "description": "Original 100% genuine CP1L-EM30DT-D CP1L Micro PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Omron"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09377130/b/4/CP1L-EM30DT-D-CP1L-Micro-PLC.jpg",
    "slug": "cp1l-em30dt-d-cp1l-micro-plc",
    "stock": true
  },
  {
    "id": "v1-114",
    "name": "CP1H-X40DT-D Omron PLC",
    "partNumber": "CP1H-X40DT-D",
    "brand": "Omron",
    "category": "Omron PLC",
    "type": "PLC",
    "description": "Original 100% genuine CP1H-X40DT-D Omron PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Omron"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09377102/b/4/CP1H-X40DT-D-Omron-PLC.png",
    "slug": "cp1h-x40dt-d-omron-plc",
    "stock": true
  },
  {
    "id": "v1-115",
    "name": "Omron HMI",
    "partNumber": "Omron",
    "brand": "Omron",
    "category": "Omron HMI",
    "type": "HMI",
    "description": "Original 100% genuine Omron HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Omron"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09377154/b/4/NB10W-TW01B-NB-Series-HMI.jpg",
    "slug": "omron-hmi",
    "stock": true
  },
  {
    "id": "v1-116",
    "name": "NB10W-TW01B NB Series HMI",
    "partNumber": "NB10W-TW01B",
    "brand": "Siemens",
    "category": "Siemens HMI",
    "type": "HMI",
    "description": "Original 100% genuine NB10W-TW01B NB Series HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09377154/b/4/NB10W-TW01B-NB-Series-HMI.jpg",
    "slug": "nb10w-tw01b-nb-series-hmi",
    "stock": true
  },
  {
    "id": "v1-117",
    "name": "NB7W-TW00B Omron HMI",
    "partNumber": "NB7W-TW00B",
    "brand": "Omron",
    "category": "Omron HMI",
    "type": "HMI",
    "description": "Original 100% genuine NB7W-TW00B Omron HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Omron"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09165003/b/4/NB7W-TW00B-Omron-HMI.jpg",
    "slug": "nb7w-tw00b-omron-hmi",
    "stock": true
  },
  {
    "id": "v1-118",
    "name": "Delta PLC",
    "partNumber": "Delta",
    "brand": "Delta",
    "category": "Delta PLC",
    "type": "PLC",
    "description": "Original 100% genuine Delta PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10021178/b/5/DVP14SS211R-T-Delta-PLC.jpg",
    "slug": "delta-plc",
    "stock": true
  },
  {
    "id": "v1-119",
    "name": "DVP14SS211R/T Delta PLC",
    "partNumber": "DVP14SS211RT",
    "brand": "Delta",
    "category": "Delta PLC",
    "type": "PLC",
    "description": "Original 100% genuine DVP14SS211R/T Delta PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10021178/b/5/DVP14SS211R-T-Delta-PLC.jpg",
    "slug": "dvp14ss211r-t-delta-plc",
    "stock": true
  },
  {
    "id": "v1-120",
    "name": "DVP08SN11R/T Delta PLC",
    "partNumber": "DVP08SN11RT",
    "brand": "Delta",
    "category": "Delta PLC",
    "type": "PLC",
    "description": "Original 100% genuine DVP08SN11R/T Delta PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10021701/b/5/DVP08SN11R-T-Delta-PLC.jpg",
    "slug": "dvp08sn11r-t-delta-plc",
    "stock": true
  },
  {
    "id": "v1-121",
    "name": "DVP Series Standard CPU",
    "partNumber": "DVP Series Standard CPU",
    "brand": "Delta",
    "category": "Delta PLC",
    "type": "PLC",
    "description": "Original 100% genuine DVP Series Standard CPU supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09377317/b/4/DVP-Series-Standard-CPU.jpg",
    "slug": "dvp-series-standard-cpu",
    "stock": true
  },
  {
    "id": "v1-122",
    "name": "DVP Series Motion CPU DVP15MC11T",
    "partNumber": "DVP Series Motion CPU DVP15MC11T",
    "brand": "Delta",
    "category": "Delta PLC",
    "type": "PLC",
    "description": "Original 100% genuine DVP Series Motion CPU DVP15MC11T supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09377312/b/4/DVP-Series-Motion-CPU-DVP15MC11T.jpg",
    "slug": "dvp-series-motion-cpu-dvp15mc11t",
    "stock": true
  },
  {
    "id": "v1-123",
    "name": "DVP12SA211R/T Delta PLC",
    "partNumber": "DVP12SA211RT",
    "brand": "Delta",
    "category": "Delta PLC",
    "type": "PLC",
    "description": "Original 100% genuine DVP12SA211R/T Delta PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10021198/b/4/DVP12SA211R-T-Delta-PLC.jpg",
    "slug": "dvp12sa211r-t-delta-plc",
    "stock": true
  },
  {
    "id": "v1-124",
    "name": "DVP10SX11R/T Delta PLC",
    "partNumber": "DVP10SX11RT",
    "brand": "Delta",
    "category": "Delta PLC",
    "type": "PLC",
    "description": "Original 100% genuine DVP10SX11R/T Delta PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10021589/b/4/DVP10SX11R-T-Delta-PLC.jpg",
    "slug": "dvp10sx11r-t-delta-plc",
    "stock": true
  },
  {
    "id": "v1-125",
    "name": "DVP20SX211R/S/T Delta PLC",
    "partNumber": "DVP20SX211RST",
    "brand": "Delta",
    "category": "Delta PLC",
    "type": "PLC",
    "description": "Original 100% genuine DVP20SX211R/S/T Delta PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10021614/b/4/DVP20SX211R-S-T-Delta-PLC.jpg",
    "slug": "dvp20sx211r-s-t-delta-plc",
    "stock": true
  },
  {
    "id": "v1-126",
    "name": "DVP28SV11R2/T2/S2  Delta PLC",
    "partNumber": "DVP28SV11R2T2S2",
    "brand": "Delta",
    "category": "Delta PLC",
    "type": "PLC",
    "description": "Original 100% genuine DVP28SV11R2/T2/S2  Delta PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10021632/b/4/DVP28SV11R2-T2-S2-Delta-PLC.jpg",
    "slug": "dvp28sv11r2-t2-s2-delta-plc",
    "stock": true
  },
  {
    "id": "v1-127",
    "name": "DVP16SP11R/T Delta PLC",
    "partNumber": "DVP16SP11RT",
    "brand": "Delta",
    "category": "Delta PLC",
    "type": "PLC",
    "description": "Original 100% genuine DVP16SP11R/T Delta PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10021711/b/4/DVP16SP11R-T-Delta-PLC.jpg",
    "slug": "dvp16sp11r-t-delta-plc",
    "stock": true
  },
  {
    "id": "v1-128",
    "name": "DVP16SP11TS Delta PLC",
    "partNumber": "DVP16SP11TS",
    "brand": "Delta",
    "category": "Delta PLC",
    "type": "PLC",
    "description": "Original 100% genuine DVP16SP11TS Delta PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10021719/b/4/DVP16SP11TS-Delta-PLC.jpg",
    "slug": "dvp16sp11ts-delta-plc",
    "stock": true
  },
  {
    "id": "v1-129",
    "name": "DVP16SM11N Delta PLC",
    "partNumber": "DVP16SM11N",
    "brand": "Delta",
    "category": "Delta PLC",
    "type": "PLC",
    "description": "Original 100% genuine DVP16SM11N Delta PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10022201/b/4/DVP16SM11N-Delta-PLC.jpg",
    "slug": "dvp16sm11n-delta-plc",
    "stock": true
  },
  {
    "id": "v1-130",
    "name": "DVP08SP11R/T Delta PLC",
    "partNumber": "DVP08SP11RT",
    "brand": "Delta",
    "category": "Delta PLC",
    "type": "PLC",
    "description": "Original 100% genuine DVP08SP11R/T Delta PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10022275/b/4/DVP08SP11R-T-Delta-PLC.jpg",
    "slug": "dvp08sp11r-t-delta-plc",
    "stock": true
  },
  {
    "id": "v1-131",
    "name": "Delta HMI",
    "partNumber": "Delta",
    "brand": "Delta",
    "category": "Delta HMI",
    "type": "HMI",
    "description": "Original 100% genuine Delta HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10033213/b/4/DOP-103BQ-Delta-HMI.jpg",
    "slug": "delta-hmi",
    "stock": true
  },
  {
    "id": "v1-132",
    "name": "DOP-103BQ Delta HMI",
    "partNumber": "DOP-103BQ",
    "brand": "Delta",
    "category": "Delta HMI",
    "type": "HMI",
    "description": "Original 100% genuine DOP-103BQ Delta HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10033213/b/4/DOP-103BQ-Delta-HMI.jpg",
    "slug": "dop-103bq-delta-hmi",
    "stock": true
  },
  {
    "id": "v1-133",
    "name": "Delta HMI DOP-103SQ",
    "partNumber": "Delta",
    "brand": "Delta",
    "category": "Delta HMI",
    "type": "HMI",
    "description": "Original 100% genuine Delta HMI DOP-103SQ supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09377364/b/4/Delta-HMI-DOP-103SQ.jpg",
    "slug": "delta-hmi-dop-103sq",
    "stock": true
  },
  {
    "id": "v1-134",
    "name": "DOP-107WV HMI DOP 100 Series",
    "partNumber": "DOP-107WV",
    "brand": "Delta",
    "category": "Delta HMI",
    "type": "HMI",
    "description": "Original 100% genuine DOP-107WV HMI DOP 100 Series supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09377324/b/4/DOP-107WV-HMI-DOP-100-Series.jpg",
    "slug": "dop-107wv-hmi-dop-100-series",
    "stock": true
  },
  {
    "id": "v1-135",
    "name": "DOP-W157B HMI DOP W Series",
    "partNumber": "DOP-W157B",
    "brand": "Delta",
    "category": "Delta HMI",
    "type": "HMI",
    "description": "Original 100% genuine DOP-W157B HMI DOP W Series supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09377363/b/4/DOP-W157B-HMI-DOP-W-Series.jpg",
    "slug": "dop-w157b-hmi-dop-w-series",
    "stock": true
  },
  {
    "id": "v1-136",
    "name": "DOP-103WQ Delta HMI",
    "partNumber": "DOP-103WQ",
    "brand": "Delta",
    "category": "Delta HMI",
    "type": "HMI",
    "description": "Original 100% genuine DOP-103WQ Delta HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10033296/b/4/DOP-103WQ-Delta-HMI.jpg",
    "slug": "dop-103wq-delta-hmi",
    "stock": true
  },
  {
    "id": "v1-137",
    "name": "DOP-107BV Delta HMI",
    "partNumber": "DOP-107BV",
    "brand": "Delta",
    "category": "Delta HMI",
    "type": "HMI",
    "description": "Original 100% genuine DOP-107BV Delta HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10033389/b/4/DOP-107BV-Delta-HMI.jpg",
    "slug": "dop-107bv-delta-hmi",
    "stock": true
  },
  {
    "id": "v1-138",
    "name": "DOP-107CV Delta HMI",
    "partNumber": "DOP-107CV",
    "brand": "Delta",
    "category": "Delta HMI",
    "type": "HMI",
    "description": "Original 100% genuine DOP-107CV Delta HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10033462/b/4/DOP-107CV-Delta-HMI.jpg",
    "slug": "dop-107cv-delta-hmi",
    "stock": true
  },
  {
    "id": "v1-139",
    "name": "DOP-107EG Delta HMI",
    "partNumber": "DOP-107EG",
    "brand": "Delta",
    "category": "Delta HMI",
    "type": "HMI",
    "description": "Original 100% genuine DOP-107EG Delta HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10033465/b/4/DOP-107EG-Delta-HMI.jpg",
    "slug": "dop-107eg-delta-hmi",
    "stock": true
  },
  {
    "id": "v1-140",
    "name": "DOP-107EV Delta HMI",
    "partNumber": "DOP-107EV",
    "brand": "Delta",
    "category": "Delta HMI",
    "type": "HMI",
    "description": "Original 100% genuine DOP-107EV Delta HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10033504/b/4/DOP-107EV-Delta-HMI.jpg",
    "slug": "dop-107ev-delta-hmi",
    "stock": true
  },
  {
    "id": "v1-141",
    "name": "DOP-107WV Delta HMI",
    "partNumber": "DOP-107WV",
    "brand": "Delta",
    "category": "Delta HMI",
    "type": "HMI",
    "description": "Original 100% genuine DOP-107WV Delta HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10033529/b/4/DOP-107WV-Delta-HMI.jpg",
    "slug": "dop-107wv-delta-hmi",
    "stock": true
  },
  {
    "id": "v1-142",
    "name": "DOP-110CS Delta HMI",
    "partNumber": "DOP-110CS",
    "brand": "Delta",
    "category": "Delta HMI",
    "type": "HMI",
    "description": "Original 100% genuine DOP-110CS Delta HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10033534/b/4/DOP-110CS-Delta-HMI.jpg",
    "slug": "dop-110cs-delta-hmi",
    "stock": true
  },
  {
    "id": "v1-143",
    "name": "DOP-110IS Delta HMI",
    "partNumber": "DOP-110IS",
    "brand": "Delta",
    "category": "Delta HMI",
    "type": "HMI",
    "description": "Original 100% genuine DOP-110IS Delta HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10033559/b/4/DOP-110IS-Delta-HMI.jpg",
    "slug": "dop-110is-delta-hmi",
    "stock": true
  },
  {
    "id": "v1-144",
    "name": "Delta VFD",
    "partNumber": "Delta",
    "brand": "Delta",
    "category": "Delta VFD",
    "type": "VFD",
    "description": "Original 100% genuine Delta VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10020644/b/5/VFD007EL43W-1-Delta-VFD.jpg",
    "slug": "delta-vfd",
    "stock": true
  },
  {
    "id": "v1-145",
    "name": "VFD007EL43W-1 Delta VFD",
    "partNumber": "VFD007EL43W-1",
    "brand": "Delta",
    "category": "Delta VFD",
    "type": "VFD",
    "description": "Original 100% genuine VFD007EL43W-1 Delta VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10020644/b/5/VFD007EL43W-1-Delta-VFD.jpg",
    "slug": "vfd007el43w-1-delta-vfd",
    "stock": true
  },
  {
    "id": "v1-146",
    "name": "VFD040EL43W-1 Delta VFD",
    "partNumber": "VFD040EL43W-1",
    "brand": "Delta",
    "category": "Delta VFD",
    "type": "VFD",
    "description": "Original 100% genuine VFD040EL43W-1 Delta VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10020712/b/5/VFD040EL43W-1-Delta-VFD.jpg",
    "slug": "vfd040el43w-1-delta-vfd",
    "stock": true
  },
  {
    "id": "v1-147",
    "name": "VFD004EL43A Delta VFD",
    "partNumber": "VFD004EL43A",
    "brand": "Delta",
    "category": "Delta VFD",
    "type": "VFD",
    "description": "Original 100% genuine VFD004EL43A Delta VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10019996/b/6/VFD004EL43A-Delta-VFD.jpg",
    "slug": "vfd004el43a-delta-vfd",
    "stock": true
  },
  {
    "id": "v1-148",
    "name": "VFD004EL21A Delta VFD",
    "partNumber": "VFD004EL21A",
    "brand": "Delta",
    "category": "Delta VFD",
    "type": "VFD",
    "description": "Original 100% genuine VFD004EL21A Delta VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10019741/b/10/VFD004EL21A-Delta-VFD.jpg",
    "slug": "vfd004el21a-delta-vfd",
    "stock": true
  },
  {
    "id": "v1-149",
    "name": "VFD002EL21A Delta VFD",
    "partNumber": "VFD002EL21A",
    "brand": "Delta",
    "category": "Delta VFD",
    "type": "VFD",
    "description": "Original 100% genuine VFD002EL21A Delta VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10019700/b/4/VFD002EL21A-Delta-VFD.jpg",
    "slug": "vfd002el21a-delta-vfd",
    "stock": true
  },
  {
    "id": "v1-150",
    "name": "VFD007EL21A Delta VFD",
    "partNumber": "VFD007EL21A",
    "brand": "Delta",
    "category": "Delta VFD",
    "type": "VFD",
    "description": "Original 100% genuine VFD007EL21A Delta VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10019847/b/4/VFD007EL21A-Delta-VFD.jpg",
    "slug": "vfd007el21a-delta-vfd",
    "stock": true
  },
  {
    "id": "v1-151",
    "name": "VFD015EL21A Delta VFD",
    "partNumber": "VFD015EL21A",
    "brand": "Delta",
    "category": "Delta VFD",
    "type": "VFD",
    "description": "Original 100% genuine VFD015EL21A Delta VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10019883/b/4/VFD015EL21A-Delta-VFD.jpg",
    "slug": "vfd015el21a-delta-vfd",
    "stock": true
  },
  {
    "id": "v1-152",
    "name": "VFD022EL21A Delta VFD",
    "partNumber": "VFD022EL21A",
    "brand": "Delta",
    "category": "Delta VFD",
    "type": "VFD",
    "description": "Original 100% genuine VFD022EL21A Delta VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10019916/b/4/VFD022EL21A-Delta-VFD.jpg",
    "slug": "vfd022el21a-delta-vfd",
    "stock": true
  },
  {
    "id": "v1-153",
    "name": "VFD007EL43A Delta VFD",
    "partNumber": "VFD007EL43A",
    "brand": "Delta",
    "category": "Delta VFD",
    "type": "VFD",
    "description": "Original 100% genuine VFD007EL43A Delta VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10020022/b/4/VFD007EL43A-Delta-VFD.jpg",
    "slug": "vfd007el43a-delta-vfd",
    "stock": true
  },
  {
    "id": "v1-154",
    "name": "VFD015EL43A Delta VFD",
    "partNumber": "VFD015EL43A",
    "brand": "Delta",
    "category": "Delta VFD",
    "type": "VFD",
    "description": "Original 100% genuine VFD015EL43A Delta VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10020028/b/4/VFD015EL43A-Delta-VFD.jpg",
    "slug": "vfd015el43a-delta-vfd",
    "stock": true
  },
  {
    "id": "v1-155",
    "name": "VFD022EL43A Delta VFD",
    "partNumber": "VFD022EL43A",
    "brand": "Delta",
    "category": "Delta VFD",
    "type": "VFD",
    "description": "Original 100% genuine VFD022EL43A Delta VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10020035/b/4/VFD022EL43A-Delta-VFD.jpg",
    "slug": "vfd022el43a-delta-vfd",
    "stock": true
  },
  {
    "id": "v1-156",
    "name": "VFD037EL43A Delta VFD",
    "partNumber": "VFD037EL43A",
    "brand": "Delta",
    "category": "Delta VFD",
    "type": "VFD",
    "description": "Original 100% genuine VFD037EL43A Delta VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Delta"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10020037/b/4/VFD037EL43A-Delta-VFD.jpg",
    "slug": "vfd037el43a-delta-vfd",
    "stock": true
  },
  {
    "id": "v1-157",
    "name": "Schneider PLC",
    "partNumber": "Schneider",
    "brand": "Schneider",
    "category": "Schneider PLC",
    "type": "PLC",
    "description": "Original 100% genuine Schneider PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Schneider"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10035819/b/5/TM200C24T-Schneider-PLC.jpg",
    "slug": "schneider-plc",
    "stock": true
  },
  {
    "id": "v1-158",
    "name": "TM200C24T Schneider PLC",
    "partNumber": "TM200C24T",
    "brand": "Schneider",
    "category": "Schneider PLC",
    "type": "PLC",
    "description": "Original 100% genuine TM200C24T Schneider PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Schneider"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10035819/b/5/TM200C24T-Schneider-PLC.jpg",
    "slug": "tm200c24t-schneider-plc",
    "stock": true
  },
  {
    "id": "v1-159",
    "name": "TM100C16RN Schneider PLC",
    "partNumber": "TM100C16RN",
    "brand": "Schneider",
    "category": "Schneider PLC",
    "type": "PLC",
    "description": "Original 100% genuine TM100C16RN Schneider PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Schneider"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10034747/b/4/TM100C16RN-Schneider-PLC.jpg",
    "slug": "tm100c16rn-schneider-plc",
    "stock": true
  },
  {
    "id": "v1-160",
    "name": "TM100C24RN Schneider PLC",
    "partNumber": "TM100C24RN",
    "brand": "Schneider",
    "category": "Schneider PLC",
    "type": "PLC",
    "description": "Original 100% genuine TM100C24RN Schneider PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Schneider"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10034847/b/4/TM100C24RN-Schneider-PLC.jpg",
    "slug": "tm100c24rn-schneider-plc",
    "stock": true
  },
  {
    "id": "v1-161",
    "name": "TM100C40RN Schneider PLC",
    "partNumber": "TM100C40RN",
    "brand": "Schneider",
    "category": "Schneider PLC",
    "type": "PLC",
    "description": "Original 100% genuine TM100C40RN Schneider PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Schneider"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10034910/b/4/TM100C40RN-Schneider-PLC.jpg",
    "slug": "tm100c40rn-schneider-plc",
    "stock": true
  },
  {
    "id": "v1-162",
    "name": "TM200C16R Schneider PLC",
    "partNumber": "TM200C16R",
    "brand": "Schneider",
    "category": "Schneider PLC",
    "type": "PLC",
    "description": "Original 100% genuine TM200C16R Schneider PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Schneider"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10034967/b/4/TM200C16R-Schneider-PLC.jpg",
    "slug": "tm200c16r-schneider-plc",
    "stock": true
  },
  {
    "id": "v1-163",
    "name": "TM200C16T Schneider PLC",
    "partNumber": "TM200C16T",
    "brand": "Schneider",
    "category": "Schneider PLC",
    "type": "PLC",
    "description": "Original 100% genuine TM200C16T Schneider PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Schneider"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10035021/b/4/TM200C16T-Schneider-PLC.jpg",
    "slug": "tm200c16t-schneider-plc",
    "stock": true
  },
  {
    "id": "v1-164",
    "name": "TM200C16U Schneider PLC",
    "partNumber": "TM200C16U",
    "brand": "Schneider",
    "category": "Schneider PLC",
    "type": "PLC",
    "description": "Original 100% genuine TM200C16U Schneider PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Schneider"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10035195/b/4/TM200C16U-Schneider-PLC.jpg",
    "slug": "tm200c16u-schneider-plc",
    "stock": true
  },
  {
    "id": "v1-165",
    "name": "TM200C24R Schneider PLC",
    "partNumber": "TM200C24R",
    "brand": "Schneider",
    "category": "Schneider PLC",
    "type": "PLC",
    "description": "Original 100% genuine TM200C24R Schneider PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Schneider"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10035213/b/4/TM200C24R-Schneider-PLC.jpg",
    "slug": "tm200c24r-schneider-plc",
    "stock": true
  },
  {
    "id": "v1-166",
    "name": "TM200C24U Schneider PLC",
    "partNumber": "TM200C24U",
    "brand": "Schneider",
    "category": "Schneider PLC",
    "type": "PLC",
    "description": "Original 100% genuine TM200C24U Schneider PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Schneider"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10035932/b/4/TM200C24U-Schneider-PLC.jpg",
    "slug": "tm200c24u-schneider-plc",
    "stock": true
  },
  {
    "id": "v1-167",
    "name": "TM200C32R Schneider PLC",
    "partNumber": "TM200C32R",
    "brand": "Schneider",
    "category": "Schneider PLC",
    "type": "PLC",
    "description": "Original 100% genuine TM200C32R Schneider PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Schneider"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10035979/b/4/TM200C32R-Schneider-PLC.jpg",
    "slug": "tm200c32r-schneider-plc",
    "stock": true
  },
  {
    "id": "v1-168",
    "name": "TM200C40R Schneider PLC",
    "partNumber": "TM200C40R",
    "brand": "Schneider",
    "category": "Schneider PLC",
    "type": "PLC",
    "description": "Original 100% genuine TM200C40R Schneider PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Schneider"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10035988/b/4/TM200C40R-Schneider-PLC.jpg",
    "slug": "tm200c40r-schneider-plc",
    "stock": true
  },
  {
    "id": "v1-169",
    "name": "TM200C40T Schneider PLC",
    "partNumber": "TM200C40T",
    "brand": "Schneider",
    "category": "Schneider PLC",
    "type": "PLC",
    "description": "Original 100% genuine TM200C40T Schneider PLC supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Schneider"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10036071/b/4/TM200C40T-Schneider-PLC.jpg",
    "slug": "tm200c40t-schneider-plc",
    "stock": true
  },
  {
    "id": "v1-170",
    "name": "Schneider HMI",
    "partNumber": "Schneider",
    "brand": "Schneider",
    "category": "Schneider HMI",
    "type": "HMI",
    "description": "Original 100% genuine Schneider HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Schneider"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10038071/b/4/HMIST6200-Schneider.jpg",
    "slug": "schneider-hmi",
    "stock": true
  },
  {
    "id": "v1-171",
    "name": "HMIST6200 Schneider",
    "partNumber": "HMIST6200",
    "brand": "Schneider",
    "category": "Schneider HMI",
    "type": "HMI",
    "description": "Original 100% genuine HMIST6200 Schneider supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Schneider"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10038071/b/4/HMIST6200-Schneider.jpg",
    "slug": "hmist6200-schneider",
    "stock": true
  },
  {
    "id": "v1-172",
    "name": "HMIST6400 Schneider HMI",
    "partNumber": "HMIST6400",
    "brand": "Schneider",
    "category": "Schneider HMI",
    "type": "HMI",
    "description": "Original 100% genuine HMIST6400 Schneider HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Schneider"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10038568/b/4/HMIST6400-Schneider-HMI.jpg",
    "slug": "hmist6400-schneider-hmi",
    "stock": true
  },
  {
    "id": "v1-173",
    "name": "HMIST6500 Schneider HMI",
    "partNumber": "HMIST6500",
    "brand": "Schneider",
    "category": "Schneider HMI",
    "type": "HMI",
    "description": "Original 100% genuine HMIST6500 Schneider HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Schneider"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10038721/b/4/HMIST6500-Schneider-HMI.jpg",
    "slug": "hmist6500-schneider-hmi",
    "stock": true
  },
  {
    "id": "v1-174",
    "name": "HMIST6600 Schneider HMI",
    "partNumber": "HMIST6600",
    "brand": "Schneider",
    "category": "Schneider HMI",
    "type": "HMI",
    "description": "Original 100% genuine HMIST6600 Schneider HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Schneider"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10038736/b/4/HMIST6600-Schneider-HMI.jpg",
    "slug": "hmist6600-schneider-hmi",
    "stock": true
  },
  {
    "id": "v1-175",
    "name": "HMIST6700 Schneider HMI",
    "partNumber": "HMIST6700",
    "brand": "Schneider",
    "category": "Schneider HMI",
    "type": "HMI",
    "description": "Original 100% genuine HMIST6700 Schneider HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Schneider"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10038757/b/4/HMIST6700-Schneider-HMI.png",
    "slug": "hmist6700-schneider-hmi",
    "stock": true
  },
  {
    "id": "v1-176",
    "name": "HMIET6400 Schneider HMI",
    "partNumber": "HMIET6400",
    "brand": "Schneider",
    "category": "Schneider HMI",
    "type": "HMI",
    "description": "Original 100% genuine HMIET6400 Schneider HMI supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Schneider"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10038821/b/4/HMIET6400-Schneider-HMI.jpg",
    "slug": "hmiet6400-schneider-hmi",
    "stock": true
  },
  {
    "id": "v1-177",
    "name": "Schneider VFD",
    "partNumber": "Schneider",
    "brand": "Schneider",
    "category": "Schneider VFD",
    "type": "VFD",
    "description": "Original 100% genuine Schneider VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Schneider"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10027309/b/4/ATV320U04N4C-Schneider-VFD.jpg",
    "slug": "schneider-vfd",
    "stock": true
  },
  {
    "id": "v1-178",
    "name": "ATV320U04N4C Schneider VFD",
    "partNumber": "ATV320U04N4C",
    "brand": "Schneider",
    "category": "Schneider VFD",
    "type": "VFD",
    "description": "Original 100% genuine ATV320U04N4C Schneider VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Schneider"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10027309/b/4/ATV320U04N4C-Schneider-VFD.jpg",
    "slug": "atv320u04n4c-schneider-vfd",
    "stock": true
  },
  {
    "id": "v1-179",
    "name": "ATV320U06N4C Schneider VFD",
    "partNumber": "ATV320U06N4C",
    "brand": "Schneider",
    "category": "Schneider VFD",
    "type": "VFD",
    "description": "Original 100% genuine ATV320U06N4C Schneider VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Schneider"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10027450/b/4/ATV320U06N4C-Schneider-VFD.jpg",
    "slug": "atv320u06n4c-schneider-vfd",
    "stock": true
  },
  {
    "id": "v1-180",
    "name": "ATV320U07N4C Schneider VFD",
    "partNumber": "ATV320U07N4C",
    "brand": "Schneider",
    "category": "Schneider VFD",
    "type": "VFD",
    "description": "Original 100% genuine ATV320U07N4C Schneider VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Schneider"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10028042/b/4/ATV320U07N4C-Schneider-VFD.jpg",
    "slug": "atv320u07n4c-schneider-vfd",
    "stock": true
  },
  {
    "id": "v1-181",
    "name": "ATV320U11N4C Schneider VFD",
    "partNumber": "ATV320U11N4C",
    "brand": "Schneider",
    "category": "Schneider VFD",
    "type": "VFD",
    "description": "Original 100% genuine ATV320U11N4C Schneider VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Schneider"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10028083/b/4/ATV320U11N4C-Schneider-VFD.jpg",
    "slug": "atv320u11n4c-schneider-vfd",
    "stock": true
  },
  {
    "id": "v1-182",
    "name": "ATV320U15N4C Schneider VFD",
    "partNumber": "ATV320U15N4C",
    "brand": "Schneider",
    "category": "Schneider VFD",
    "type": "VFD",
    "description": "Original 100% genuine ATV320U15N4C Schneider VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Schneider"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10028183/b/4/ATV320U15N4C-Schneider-VFD.jpg",
    "slug": "atv320u15n4c-schneider-vfd",
    "stock": true
  },
  {
    "id": "v1-183",
    "name": "ATV320U22N4C Schneider VFD",
    "partNumber": "ATV320U22N4C",
    "brand": "Schneider",
    "category": "Schneider VFD",
    "type": "VFD",
    "description": "Original 100% genuine ATV320U22N4C Schneider VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Schneider"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10028197/b/4/ATV320U22N4C-Schneider-VFD.jpg",
    "slug": "atv320u22n4c-schneider-vfd",
    "stock": true
  },
  {
    "id": "v1-184",
    "name": "ATV320U30N4C Schneider VFD",
    "partNumber": "ATV320U30N4C",
    "brand": "Schneider",
    "category": "Schneider VFD",
    "type": "VFD",
    "description": "Original 100% genuine ATV320U30N4C Schneider VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Schneider"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10028216/b/4/ATV320U30N4C-Schneider-VFD.jpg",
    "slug": "atv320u30n4c-schneider-vfd",
    "stock": true
  },
  {
    "id": "v1-185",
    "name": "ATV320U40N4C Schneider VFD",
    "partNumber": "ATV320U40N4C",
    "brand": "Schneider",
    "category": "Schneider VFD",
    "type": "VFD",
    "description": "Original 100% genuine ATV320U40N4C Schneider VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Schneider"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10028239/b/4/ATV320U40N4C-Schneider-VFD.jpg",
    "slug": "atv320u40n4c-schneider-vfd",
    "stock": true
  },
  {
    "id": "v1-186",
    "name": "ATV320U55N4C Schneider VFD",
    "partNumber": "ATV320U55N4C",
    "brand": "Schneider",
    "category": "Schneider VFD",
    "type": "VFD",
    "description": "Original 100% genuine ATV320U55N4C Schneider VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Schneider"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10028329/b/4/ATV320U55N4C-Schneider-VFD.jpg",
    "slug": "atv320u55n4c-schneider-vfd",
    "stock": true
  },
  {
    "id": "v1-187",
    "name": "ATV320U75N4C Schneider VFD",
    "partNumber": "ATV320U75N4C",
    "brand": "Schneider",
    "category": "Schneider VFD",
    "type": "VFD",
    "description": "Original 100% genuine ATV320U75N4C Schneider VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Schneider"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10028407/b/4/ATV320U75N4C-Schneider-VFD.jpg",
    "slug": "atv320u75n4c-schneider-vfd",
    "stock": true
  },
  {
    "id": "v1-188",
    "name": "ATV320D11N4C Schneider VFD",
    "partNumber": "ATV320D11N4C",
    "brand": "Schneider",
    "category": "Schneider VFD",
    "type": "VFD",
    "description": "Original 100% genuine ATV320D11N4C Schneider VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Schneider"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10028421/b/4/ATV320D11N4C-Schneider-VFD.jpg",
    "slug": "atv320d11n4c-schneider-vfd",
    "stock": true
  },
  {
    "id": "v1-189",
    "name": "ATV320D15N4C Schneider VFD",
    "partNumber": "ATV320D15N4C",
    "brand": "Schneider",
    "category": "Schneider VFD",
    "type": "VFD",
    "description": "Original 100% genuine ATV320D15N4C Schneider VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Schneider"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10028479/b/4/ATV320D15N4C-Schneider-VFD.jpg",
    "slug": "atv320d15n4c-schneider-vfd",
    "stock": true
  },
  {
    "id": "v1-190",
    "name": "Fuji VFD",
    "partNumber": "Fuji",
    "brand": "Fuji",
    "category": "Fuji VFD",
    "type": "VFD",
    "description": "Original 100% genuine Fuji VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Fuji"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09165010/b/5/FRN0002C2E-4E-Fuji-Frenic-mini.png",
    "slug": "fuji-vfd",
    "stock": true
  },
  {
    "id": "v1-191",
    "name": "FRN0002C2E-4E Fuji Frenic mini",
    "partNumber": "FRN0002C2E-4E",
    "brand": "Fuji",
    "category": "Fuji VFD",
    "type": "VFD",
    "description": "Original 100% genuine FRN0002C2E-4E Fuji Frenic mini supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Fuji"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/09165010/b/5/FRN0002C2E-4E-Fuji-Frenic-mini.png",
    "slug": "frn0002c2e-4e-fuji-frenic-mini",
    "stock": true
  },
  {
    "id": "v1-192",
    "name": "FRN0002C2S-4U Fuji VFD",
    "partNumber": "FRN0002C2S-4U",
    "brand": "Fuji",
    "category": "Fuji VFD",
    "type": "VFD",
    "description": "Original 100% genuine FRN0002C2S-4U Fuji VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Fuji"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10039458/b/4/FRN0002C2S-4U-Fuji-VFD.jpg",
    "slug": "frn0002c2s-4u-fuji-vfd",
    "stock": true
  },
  {
    "id": "v1-193",
    "name": "FRN0004C2S-4U Fuji VFD",
    "partNumber": "FRN0004C2S-4U",
    "brand": "Fuji",
    "category": "Fuji VFD",
    "type": "VFD",
    "description": "Original 100% genuine FRN0004C2S-4U Fuji VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Fuji"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10039602/b/4/FRN0004C2S-4U-Fuji-VFD.jpg",
    "slug": "frn0004c2s-4u-fuji-vfd",
    "stock": true
  },
  {
    "id": "v1-194",
    "name": "FRN0005C2S-4U Fuji VFD",
    "partNumber": "FRN0005C2S-4U",
    "brand": "Fuji",
    "category": "Fuji VFD",
    "type": "VFD",
    "description": "Original 100% genuine FRN0005C2S-4U Fuji VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Fuji"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10039656/b/4/FRN0005C2S-4U-Fuji-VFD.jpg",
    "slug": "frn0005c2s-4u-fuji-vfd",
    "stock": true
  },
  {
    "id": "v1-195",
    "name": "FRN0011C2S-4U Fuji VFD",
    "partNumber": "FRN0011C2S-4U",
    "brand": "Fuji",
    "category": "Fuji VFD",
    "type": "VFD",
    "description": "Original 100% genuine FRN0011C2S-4U Fuji VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Fuji"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10039752/b/4/FRN0011C2S-4U-Fuji-VFD.jpg",
    "slug": "frn0011c2s-4u-fuji-vfd",
    "stock": true
  },
  {
    "id": "v1-196",
    "name": "FRN0018C2S-4U Fuji VFD",
    "partNumber": "FRN0018C2S-4U",
    "brand": "Fuji",
    "category": "Fuji VFD",
    "type": "VFD",
    "description": "Original 100% genuine FRN0018C2S-4U Fuji VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Fuji"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10039781/b/4/FRN0018C2S-4U-Fuji-VFD.jpg",
    "slug": "frn0018c2s-4u-fuji-vfd",
    "stock": true
  },
  {
    "id": "v1-197",
    "name": "FRN0004C2S-2U Fuji VFD",
    "partNumber": "FRN0004C2S-2U",
    "brand": "Fuji",
    "category": "Fuji VFD",
    "type": "VFD",
    "description": "Original 100% genuine FRN0004C2S-2U Fuji VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Fuji"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10040845/b/4/FRN0004C2S-2U-Fuji-VFD.jpg",
    "slug": "frn0004c2s-2u-fuji-vfd",
    "stock": true
  },
  {
    "id": "v1-198",
    "name": "FRN0006C2S-2U  Fuji VFD",
    "partNumber": "FRN0006C2S-2U",
    "brand": "Fuji",
    "category": "Fuji VFD",
    "type": "VFD",
    "description": "Original 100% genuine FRN0006C2S-2U  Fuji VFD supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Fuji"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://cpimg.tistatic.com/10040898/b/4/FRN0006C2S-2U-Fuji-VFD.jpg",
    "slug": "frn0006c2s-2u-fuji-vfd",
    "stock": true
  },
  {
    "id": "v1-199",
    "name": "Site Map",
    "partNumber": "Site",
    "brand": "Siemens",
    "category": "Siemens PLC",
    "type": "PLC",
    "description": "Original 100% genuine Site Map supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.",
    "specifications": [
      {
        "label": "Condition",
        "value": "100% Brand New Original OEM"
      },
      {
        "label": "Manufacturer",
        "value": "Siemens"
      },
      {
        "label": "Dispatch Location",
        "value": "Makarba, Ahmedabad, Gujarat"
      },
      {
        "label": "Warranty",
        "value": "12 Months Official Warranty"
      },
      {
        "label": "Availability",
        "value": "In Stock - Ready for Express Dispatch"
      }
    ],
    "image": "https://tiimg.tistatic.com/catalogs/template140089/go.png",
    "slug": "site-map",
    "stock": true
  }
];
