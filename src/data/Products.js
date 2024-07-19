import Picture1 from "./DataImge/Picture1.png";
import Picture2 from "./DataImge/Picture2.png";
import Picture3 from "./DataImge/Picture3.png";
import Picture4 from "./DataImge/Picture4.png";
import Picture5 from "./DataImge/Picture5.png";
import Picture6 from "./DataImge/Picture6.png";
import Picture7 from "./DataImge/Picture7.png";
import Picture8 from "./DataImge/Picture8.png";
import Picture10 from "./DataImge/Picture10.png";
import Picture11 from "./DataImge/Picture11.png";
import Picture12 from "./DataImge/Picture12.png";
import Picture13 from "../data/DataImge/AMD.png";
import Picture14 from "./DataImge/Picture14.png";
import Picture15 from "./DataImge/Picture15.png";
import Picture16 from "./DataImge/Picture16.png";
import Picture17 from "./DataImge/Picture17.png";
import Picture18 from "./DataImge/Picture18.png";
import Picture19 from "./DataImge/Picture19.png";
import Picture20 from "./DataImge/Picture20.png";
import Picture21 from "./DataImge/Picture21.png";
import Picture22 from "./DataImge/Picture22.png";
import Picture23 from "./DataImge/Picture23.png";
import Picture24 from "./DataImge/Picture 24.png";
import Picture25 from "./DataImge/Picture25.png";
import Picture26 from "./DataImge/Picture 26.png";
import Picture27 from "./DataImge/Picture27.png";
import Picture28 from "./DataImge/Picture28.png";
import Picture29 from "./DataImge/Picture29.png";
import Picture30 from "./DataImge/Picture30.png";
import Picture31 from "./DataImge/Picture31.png";
import Picture32 from "./DataImge/Picture32.png";
import Picture33 from "./DataImge/Picture33.png";
import Picture34 from "./DataImge/Picture34.png";
import Picture35 from "./DataImge/Picture 35.png";
import Picture36 from "./DataImge/Picture36.png";
import Picture37 from "./DataImge/Picture37.png";
import Picture38 from "./DataImge/Picture38.png";
import Picture39 from "./DataImge/Picture39.png";
import hpLaptop from "./DataImge/hpLaptop.png";
import DellLaptop from "./DataImge/DellLapto.png";
import BestPc2024 from "../Imges/PC.png";
const Products = [
  {
    id: "2024",
    productName: "HP Pro 240 G9 Core i3 12thGen Desktop PC",
    imgURL: BestPc2024,
    FirstPrice: 2800.1,
    category: "Desktop",
    ratings: 4,
    description:
      "Dell Optiplex 9020MT Intel Core i7 16GB RAM 1TB Hdd, Win 7 Pro 18.5in Monitor Media Desktop Computer",
  },
  {
    id: "1",
    sale: 10,
    productName: "Dell Optiplex 9020MT Intel Core i7 16GB RAM 1TB Hdd",
    imgURL: Picture1,
    FirstPrice: 800.1,
    ratings: 5,
    description:
      "Dell Optiplex 9020MT Intel Core i7 16GB RAM 1TB Hdd, Win 7 Pro 18.5in Monitor Media Desktop Computer",
    category: "Desktop",
  },
  {
    id: "2",
    sale: 50,
    imgURL: Picture2,
    productName:
      "DELL OptiPlex 7000 Tower Desktop - 12th Intel Core i7-12700 12-Cores",
    FirstPrice: 650.2,
    ratings: 5,
    description:
      "DELL OptiPlex 7000 Tower Desktop - 12th Intel Core i7-12700 12-Cores, 8GB DDR5 RAM, 512GB PCIe NVMe SSD, 8x DVD+/-RW, Dell",
    category: "Desktop",
  },
  {
    id: "3",
    sale: 40,
    imgURL: Picture3,
    productName: "HP EliteDesk 800 G3 Small Form Factor",
    FirstPrice: 300.5,
    ratings: 5,
    description:
      "HP EliteDesk 800 G3 Small Form Factor PC - Intel Core i5-6500,3.4 GHz, 500 GB, 4 GB, Eng-Ar Keyboard, Windows 10 Pro, Black",
    category: "sale",
  },
  {
    id: "4",
    sale: 60,
    imgURL: Picture4,
    productName: "ADATA Summoner RGB Gaming Keyboard, Seven Preset Modes",
    FirstPrice: 200.5,
    ratings: 5,
    description:
      "ADATA Summoner RGB Gaming Keyboard, Seven Preset Modes, Cherry MX Switches, Silver, Magnetic Ergonomic Wrist Rest, Media Control Key, Anti-Ghosting Keys, USB Passthrough, Macro Keys3.9 out of 5 stars 32",
    category: "Keyboard",
  },
  // Featured Products
  {
    id: "5",
    sale: 20,
    productName: "IPASON - Gaming Desktop AMD 3000G",
    imgURL: Picture5,
    FirstPrice: 1500.1,
    ratings: 4.5,
    description:
      "AMD Ryzen™ 9 7950X 16-Core, 32-Thread Unlocked Desktop Processor",
    category: "Desktop",
  },
  {
    id: "6",
    sale: 50,
    imgURL: Picture6,
    productName: "Acer DC220Q E3DW 21.5' IPS fHD Monitor",
    FirstPrice: 950.2,
    ratings: 4.5,
    category: "Screen",
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
  },
  {
    id: "7",
    sale: 40,
    imgURL: Picture7,
    productName: "MSL PRO H6 10M-E DDR4 mATX  Motherboard",
    FirstPrice: 300.5,
    ratings: 4.5,
    description:
      "SI B450M-A PRO MAX II ProSeries Motherboard (mATX, Supports AMD 5000/4000/3000/2000/1000 Series AM4 Processors, M.2, SATA",
    category: "Motherboard",
  },
  {
    id: "8",
    sale: 60,
    imgURL: Picture8,
    productName: "GeFonce RTX 4060 Uitra Graphic Card",
    FirstPrice: 200.5,
    ratings: 4.5,
    description:
      "ZOTAC Gaming GeForce RTX™ 3080 Ti Trinity OC 12GB GDDR6X 384-bit 19 Gbps PCIE 4.0 Gaming Graphics Card, IceStorm 2.0 Advanced Cooling",
    category: "GeFonce",
  },
  {
    id: "9",
    sale: 20,
    productName: "Redragon  K624 Pro RCB Gaming keyboard",
    imgURL: Picture4,
    FirstPrice: 200.5,
    ratings: 4.5,
    description:
      "ADATA Summoner RGB Gaming Keyboard, Seven Preset Modes, Cherry MX Switches, Silver, Magnetic Ergonomic Wrist Rest, Media Control Key, Anti-Ghosting Keys, USB Passthrough, Macro Keys3.9 out of 5 stars 32",
    category: "Keyboard",
  },
  {
    id: "10",
    sale: 50,
    imgURL: Picture10,
    productName: "ANYOUI Wireless Bluetooth Mouse, LED Slim Dual Mode",
    FirstPrice: 250,
    ratings: 4.5,
    description:
      "ANYOUI Wireless Bluetooth Mouse, LED Slim Dual Mode (Bluetooth 5.1 + USB) 2.4GHz Rechargeable Silent Bluetooth Wireless Mouse,",
    category: "Mouse",
  },
  {
    id: "11",
    sale: 40,
    imgURL: Picture11,
    productName: "Cooler Master Elite v3 600 watts ATX Power Supply",
    FirstPrice: 300.5,
    ratings: 4.5,
    description:
      "Cooler Master Elite v3 600 watts ATX Power Supply, Quiet 120mm Fan, PCI-E support, 3 Year Warranty, Black",
    category: "Power-Supply",
  },
  {
    id: "12",
    sale: 60,
    imgURL: Picture12,
    productName: "Thermaltake UX200 ARCB Lighting Air CPU cooler",
    FirstPrice: 200.5,
    ratings: 4.5,
    description:
      "xt h510i - :ca-h510i-w1 - compact atx mid tower pc gaming case - front i/o usb type-c port - vertical gpu mount - tempered glass side panel - integrated rgb lighting - white/black4.6 out of 5 stars 708",
    category: "Featured",
  },

  // Arrivals Products
  {
    id: "13",
    imgURL: Picture13,
    productName: "ryzen 5 3600 6-core - Gaming Desktop AMD 3000G",
    FirstPrice: 200.5,
    ratings: 0,
    description:
      "ryzen 5 3600 6-core, 12-Thread Unlocked Desktop Processor with Wraith Spire Cooler 4.7 out of 5 stars 149",
    category: "hard",
  },
  {
    id: "14",
    imgURL: Picture14,
    productName:
      "ASUS Prime B660-PLUS D4 LGA 1700(Intel 12th Gen) ATX Motherboard",
    FirstPrice: 200.5,
    ratings: 0,
    description:
      "ASUS Prime B660-PLUS D4 LGA 1700(Intel 12th Gen) ATX Motherboard(PCIe 4.0, DDR4,3xM.2 Slots, 2.5Gb LAN, Rear USB 3.2 Gen 2x2 Type-C, Front USB 3.2 Gen 1 Type-C, Thunderbolt 4 Header Support) 4.6 out of 5 stars 390",
    category: "Motherboard",
  },
  {
    id: "15",
    imgURL: Picture15,
    productName: "MSI PRO 14G10M-E DDR4 mATX mOTHERboard",
    FirstPrice: 200.5,
    ratings: 0,
    description:
      "Asrock B660 PRO RS, Intel B660, 1700, ATX, 4 DDR4, HDMI, DP, PCIe4, RGB, 3x M.2 Asrock B660 PRO RS, Intel B660, 1700, ATX, 4 DDR4, HDMI, DP, PCIe4, RGB, 3x M.2",
    category: "MSI PRO ",
  },
  {
    id: "16",
    imgURL: Picture12,
    productName: "Thermaltake UX200 ARCB Lighting Air CPU cooler",
    FirstPrice: 200.5,
    ratings: 0,
    description:
      "ASUS Prime B760M-K D4 Intel® B760 (LGA 1700)(13th and 12th Gen) mATX Motherboard, PCIe 4.0, Two PCIe 4.0 M.2 Slots, DDR4, Realtek 2.5Gb Ethernet, HDMI®, SATA 6 Gbps, Front USB 3.2 Gen 1, Aura Sync5.0 out of 5 stars 3",
    category: "Cooler",
  },

  // Shop
  {
    id: "17",
    imgURL: Picture16,
    productName: "Dell OptiPlex 3000 Tower Desktop -12th Intel Core i5",
    FirstPrice: 200.5,
    ratings: 4,
    description:
      "Dell OptiPlex 3000 Tower Desktop -12th Intel Core i5-12500 6-Cores, 8GB DDR4 RAM, 512GB PCIe NVMe SSD, Wired Keyboard-KB216 +",
    category: "Desktop",
  },
  {
    id: "18",
    imgURL: Picture17,
    productName: "Dell Optiplex 7020 Mini Tower Personal Computer",
    FirstPrice: 300.5,
    ratings: 4,
    description:
      "Dell Optiplex 7020 Mini Tower Personal Computer with Intel Core i5 - Black And Gray",
    category: "Desktop",
  },
  {
    id: "19",
    imgURL: Picture18,
    productName: "Dell Precision Tower T3620 WorkStation - Intel Xeon E3-1240",
    FirstPrice: 250.5,
    ratings: 4,
    description:
      "Dell Precision Tower T3620 WorkStation - Intel Xeon E3-1240, 1TB+1TB, 16GB, 2GB VGA-NVidia K620, Windows 7 Pro",
    category: "Desktop",
  },
  {
    id: "20",
    imgURL: Picture19,
    productName:
      "SAMSUNG IPS Full HD LED Display 75Hz, AMD FreeSync Borderlesss",
    FirstPrice: 350.2,
    ratings: 4,
    category: "Screen",
    description:
      "SAMSUNG IPS Full HD LED Display 75Hz, AMD FreeSync Borderlesss, VESA -LF24T350FHMXUE - 24in, VGA, D-Sub, HDMI, Black",
  },
  {
    id: "21",
    imgURL: Picture20,
    productName:
      "Samsung 27 inch odyssey g5 gaming monitor with 1000r curved screen",
    FirstPrice: 450.2,
    ratings: 4,
    category: "Screen",
    description:
      "Samsung 27 inch odyssey g5 gaming monitor with 1000r curved screen, 144hz, 1ms, freesync premium, qhd (lc27g55tqwmxzn), blackSamsung 27 inch odyssey g5 gaming monitor with 1000r curved screen, 144hz, 1ms, freesync premium, qhd (lc27g55tqwmxzn), black4.5 out of 5 stars 121",
  },
  {
    id: "22",
    imgURL: Picture21,
    productName:
      "SAMSUNG IPS Full HD LED Display 75Hz, AMD FreeSync Borderlesss",
    FirstPrice: 270.2,
    ratings: 4,
    category: "Screen",
    description:
      "SAMSUNG IPS Full HD LED Display 75Hz, AMD FreeSync Borderlesss, VESA -LF24T350FHMXUE - 24in, VGA, D-Sub, HDMI, Black",
  },
  {
    id: "23",
    imgURL: Picture22,
    productName: "samsung  Monitor with VA Panel, 3840 x 2160 Resolution",
    FirstPrice: 470.2,
    ratings: 4,
    category: "Screen",
    description:
      "samsung  Monitor with VA Panel, 3840 x 2160 Resolution, 32-Inch Size",
  },
  {
    id: "24",
    imgURL: Picture23,
    productName:
      "HP M24f Full HD 23.8 IPS LCD Monitor with HDMI,VGA,AMD FreeSync",
    FirstPrice: 340.2,
    ratings: 4,
    category: "Screen",
    description:
      "HP M24f Full HD 23.8 IPS LCD Monitor with HDMI,VGA,AMD FreeSync -Silver BlackHP M24f Full HD 23.8 IPS LCD Monitor with HDMI,VGA,AMD FreeSync -Silver Black",
  },
  {
    id: "25",
    imgURL: Picture24,
    productName: "Lenovo Gaming monitor R25i-30 Size 24.5 Resolution",
    FirstPrice: 370.2,
    ratings: 4,
    category: "Screen",
    description:
      "Lenovo Gaming monitor R25i-30 Size 24.5 Resolution, 1920x1080 Refresh Rate, 165Hz Response Time 0.5ms (MPRT), MD FreeSync Premium, 1 x DP cable, 1 x Power cable, WLED4.3 out of 5 stars 51",
  },
  {
    id: "26",
    imgURL: Picture25,
    productName: "Lenovo Monitor Legion R27fc-30 Gaming Curved Monitor",
    FirstPrice: 440.2,
    ratings: 4,
    category: "Screen",
    description:
      "Lenovo Monitor Legion R27fc-30 Gaming Curved Monitor, 27 FHD VA Display, Up to 280Hz Refresh Rate, 0.5ms (MPRT) Response Time, 1500R Curvature, FreeSync, Adaptive Sync & G-Sync Compatible, Black 4.3 out of 5 stars 51",
  },
  {
    id: "27",
    imgURL: Picture26,
    productName: "Gaming Chair - Furgle Gamer Chair - Office Chai",
    FirstPrice: 140.2,
    ratings: 4,
    description:
      "Gaming Chair - Furgle Gamer Chair - Office Chair - Gamer Ergonomic Adjustable Swivel Chair Gaming Chair - Swing Mode - with Headrest and Lumbar Support - Black White2.0 out of 5 stars 7",
    category: "Chair",
  },
  {
    id: "28",
    imgURL: Picture27,
    productName: " whale Massage Gaming Chair Office Desk Chair Ergonomic",
    FirstPrice: 130.2,
    ratings: 4,
    description:
      " whale Massage Gaming Chair Office Desk Chair Ergonomic High Back Racing Computer Chair with Headrest and Lumbar Support Backrest, Seat Height Adjustable Swivel Chair3.6 out of 5 stars 36",
    category: "Chair",
  },
  {
    id: "29",
    imgURL: Picture28,
    productName: "Gaming Chair Racing Office Computer Game Chair Ergonomic",
    FirstPrice: 170.2,
    ratings: 4,
    description:
      "Gaming Chair Racing Office Computer Game Chair Ergonomic Backrest and Seat Height Adjustment Recliner Swivel Rocker with Headrest Lumbar Pillow and Footrest E-Sports Chair 4.0 out of 5 stars 2",
    category: "Chair",
  },
  {
    id: "30",
    imgURL: Picture29,
    productName:
      "ASUS TUF Gaming B660M-E D4 Intel B660 LGA 1700 mATX Motherboard",
    FirstPrice: 140.2,
    ratings: 4,
    category: "Motherboard",
    description:
      "ASUS TUF Gaming B660M-E D4 Intel B660 LGA 1700 mATX Motherboard with PCIe 4.0 Slot, Two PCIe 4.0 M.2 Slots, 10 Power Stages, Realtek 2.5Gb Ethernet, DP, HDMI, Front USB 3.2 Gen 2 Type-C, Aura Sync 5.0 out of 5 stars 2",
  },
  {
    id: "31",
    imgURL: Picture30,
    productName: "GeFonce RTX 4060 Uitra Graphic Card",
    FirstPrice: 210.5,
    ratings: 4,
    category: "GeFonce",
    description:
      "ZOTAC Gaming GeForce RTX™ 3080 Ti Trinity OC 12GB GDDR6X 384-bit 19 Gbps PCIE 4.0 Gaming Graphics Card, IceStorm 2.0 Advanced",
  },
  {
    id: "32",
    imgURL: Picture31,
    productName:
      "Bengoo Color Changing Ergonomic USB Wired Gaming Mouse for PC ",
    FirstPrice: 50.2,
    ratings: 4,
    description:
      "Bengoo Color Changing Ergonomic USB Wired Gaming Mouse for PC & Laptop (Black, 2400DPI, 6 Buttons) 4.6 out of 5 stars 11,500",
    category: "Mouse",
  },
  {
    id: "33",
    imgURL: Picture32,
    productName: "Zero Zr-1800 7D Led Optical Usb Wired Gaming Mouse 3200 Dpi",
    FirstPrice: 60.2,
    ratings: 4,
    description:
      "Zero Zr-1800 7D Led Optical Usb Wired Gaming Mouse 3200 Dpi For Laptop And Pc - Black",
    category: "Mouse",
  },
  {
    id: "34",
    imgURL: Picture33,
    productName:
      "Dell OptiPlex 3000 Tower Desktop -12th Intel Core i5-12500 6-Cores,",
    FirstPrice: 600.2,
    ratings: 4,
    description:
      "Dell OptiPlex 3000 Tower Desktop -12th Intel Core i5-12500 6-Cores, 8GB DDR4 RAM, 512GB PCIe NVMe SSD, Wired Keyboard-KB216 + Optical Mouse-MS116, 8x DVD+/-RW 9.5mm Slimline Optical Disk Drive, UBUNTU 5.0 out of 5 stars 1",
    category: "Hard",
  },
  {
    id: "35",
    imgURL: Picture34,
    productName: "Desktop Workstation Z220 Intel Core i5-3770 RAM 8GB HDD 500G",
    FirstPrice: 1700.2,
    ratings: 4,
    description:
      "Desktop Workstation Z220 Intel Core i5-3770 RAM 8GB HDD 500GB Intel HD GraphicsDesktop Workstation Z220 Intel Core i5-3770 RAM 8GB HDD 500GB Intel HD Graphics",
    category: "Desktop",
  },
  {
    id: "36",
    imgURL: Picture35,
    productName:
      "EliteDesk 705 G1 Small Form Factor Desktop - A10 Pro - 7800B,",
    FirstPrice: 1200.2,
    ratings: 4,
    description:
      "EliteDesk 705 G1 Small Form Factor Desktop - A10 Pro - 7800B, 3.5 GHz - 8 GB - 500 GB, 8.0 GB RAM, Intel, Windows 10",
    category: "Desktop",
  },
  {
    id: "37",
    imgURL: Picture36,
    productName: "Dell OptiPlex 7020MT Desktop Intel Core i7-4790 4GB,",
    FirstPrice: 800.2,
    ratings: 4,
    description:
      "Dell OptiPlex 7020MT Desktop Intel Core i7-4790 4GB, 500GB ComputerDell OptiPlex 7020MT Desktop Intel Core i7-4790 4GB, 500GB Computer",
    category: "Hard",
  },
  {
    id: "38",
    imgURL: Picture37,
    productName:
      "Dell Optiplex 4GB RAM 500GB Desktop - Core i7 Processor Without Screen",
    FirstPrice: 600.2,
    ratings: 4,
    description:
      "Dell Optiplex 4GB RAM 500GB Desktop - Core i7 Processor Without Screen - 9020",
    category: "Hard",
  },
  {
    id: "39",
    imgURL: Picture38,
    productName: "Iertical Gaming PC Core i5 16GB RAM 1TB HDD + 256GB SSDg",
    FirstPrice: 850.2,
    ratings: 4,
    description:
      "Vertical Gaming PC Core i5 16GB RAM 1TB HDD + 256GB SSD NVIDIA RTX 2060 6GB Graphics Black",
    category: "Hard",
  },
  {
    id: "40",
    imgURL: Picture39,
    productName:
      "Desktop Dell 7050 MT PC Core i7 7th Gen 4GB 1TB DOS With Dell",
    FirstPrice: 950.2,
    ratings: 4,
    description:
      "Desktop Dell 7050 MT PC Core i7 7th Gen 4GB 1TB DOS With Dell E1916H LED MonitorSee options",
    category: "Hard",
  },
  {
    id: "41",
    imgURL: DellLaptop,
    productName: " dell LapTop-3000 super Gaming",
    HardWare: {
      Pro: "core i5-1135g7",
      screen: "1920 * 1080 Hd ",
      hard: "SSD 256",
      ram: "12 Gb",
    },
    FirstPrice: 2000.2,
    ratings: 4,
    category: "card-shop",
    cachBack: 20,
    description:
      "Dell Vostro 3520 Laptop - 12th Intel Core i7-1255U 10-Cores, 16GB RAM, 512GB SSD, NVIDIA GeForce MX550 with 2GB GDDR6 Graphics, 15.6 FHD (1920 x 1080) 120Hz 250 nits Anti-Glare, Ubuntu -Carbon Black 4.8 out of 5 stars 5",
  },
  {
    id: "42",
    imgURL: hpLaptop,
    productName: " hp LapTop fa 1093dx-15 super Gaming",
    HardWare: {
      Pro: "core i7-1035h7",
      screen: "1920 * 1080 Hd ",
      hard: "SSD 512",
      ram: "8 Gb",
    },
    FirstPrice: 2000.2,
    ratings: 4,
    category: "card-shop",
    cachBack: 20,
    description:
      " Hp Victus 15-fa1093dx Gaming Laptop - 13th Intel i5-13420H 8-Cores, 6GB GDDR6 NVIDIA GeForce RTX 3050 Graphics, 8GB RAM,",
  },
];

export default Products;
