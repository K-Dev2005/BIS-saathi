export interface Product {
  cml_code: string;
  product_name: string;
  category: string;
  status: "valid" | "expired" | "suspended";
  expiry: string;
  manufacturer: string;
}

export const products: Product[] = [
  {
    cml_code: "CM/L-1234567",
    product_name: "Premium Electrical Switch",
    category: "Electrical",
    status: "valid",
    expiry: "2027-03-01",
    manufacturer: "ABC Industries",
  },
  {
    cml_code: "CM/L-9876543",
    product_name: "High-Pressure Cooker",
    category: "Kitchen",
    status: "expired",
    expiry: "2023-11-15",
    manufacturer: "XYZ Corp",
  },
  {
    cml_code: "CM/L-5551234",
    product_name: "Safety Helmet (Pro)",
    category: "Safety",
    status: "suspended",
    expiry: "2025-01-01",
    manufacturer: "SafeHead Ltd",
  },
  {
    cml_code: "CM/L-1112223",
    product_name: "LED Bulb 9W",
    category: "Electrical",
    status: "valid",
    expiry: "2026-12-31",
    manufacturer: "BrightLife Solutions",
  },
  {
    cml_code: "CM/L-4445556",
    product_name: "Gas Stove (3 Burner)",
    category: "Kitchen",
    status: "valid",
    expiry: "2028-05-20",
    manufacturer: "FlameMaster India",
  },
  {
    cml_code: "CM/L-7778889",
    product_name: "Cement Premium Grade",
    category: "Construction",
    status: "valid",
    expiry: "2027-01-15",
    manufacturer: "StrongBuild Cements",
  },
  {
    cml_code: "CM/L-2223334",
    product_name: "Infant Milk Substitute",
    category: "Food",
    status: "expired",
    expiry: "2024-02-10",
    manufacturer: "NutriChild Foods",
  },
  {
    cml_code: "CM/L-6667778",
    product_name: "Mild Steel Tubes",
    category: "Hardware",
    status: "suspended",
    expiry: "2024-09-30",
    manufacturer: "IronForge Steel",
  },
  {
    cml_code: "CM/L-3334445",
    product_name: "Drinking Water (Packed)",
    category: "Food",
    status: "valid",
    expiry: "2026-08-22",
    manufacturer: "AquaPure Springs",
  },
  {
    cml_code: "CM/L-8889990",
    product_name: "Refrigerators (Direct Cool)",
    category: "Electronics",
    status: "valid",
    expiry: "2029-11-05",
    manufacturer: "ChillTech Home",
  },
  {
    cml_code: "CM/L-9990001",
    product_name: "Pencils (Graphite)",
    category: "Stationery",
    status: "valid",
    expiry: "2030-01-01",
    manufacturer: "WriteWell Co.",
  },
  {
    cml_code: "CM/L-1212121",
    product_name: "Rubber Shoes",
    category: "Footwear",
    status: "expired",
    expiry: "2023-01-01",
    manufacturer: "StepSafe Footwear",
  },
  {
    cml_code: "CM/L-3434343",
    product_name: "Bicycle Tyres",
    category: "Automotive",
    status: "valid",
    expiry: "2027-10-10",
    manufacturer: "TyreTough Rubber",
  },
  {
    cml_code: "CM/L-5656565",
    product_name: "Ceramic Tiles",
    category: "Construction",
    status: "suspended",
    expiry: "2025-05-05",
    manufacturer: "FloorArt Ceramics",
  },
  {
    cml_code: "CM/L-7878787",
    product_name: "USB Cables",
    category: "Electronics",
    status: "valid",
    expiry: "2026-04-12",
    manufacturer: "Connecto Electronics",
  },
];
