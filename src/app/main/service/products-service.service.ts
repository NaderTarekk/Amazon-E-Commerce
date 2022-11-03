import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartComponent } from '../components/cart/cart.component';
import { Electronics } from './electro';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  constructor() { }

  sendNumber(data: any) {
    // this.number.next(data)
  }

  electronicsBox(): Electronics[] {
    return [
      { image: './assets/headsets.jpg', name: 'Headsets' },
      { image: './assets/keyboard.jpg', name: 'keyboard' },
      { image: './assets/mice.jpg', name: 'Computer mice' },
      { image: './assets/laptop.jpg', name: 'laptop' },
    ]
  }

  fashionBox(): Electronics[] {
    return [
      { image: './assets/fashion1.jpg', name: 'EXLURA Women' },
      { image: './assets/fashion2.jpg', name: 'PRETTYGARDEN Women' },
      { image: './assets/fashion3.jpg', name: 'Formal Suit' },
      { image: './assets/fashion4-1.jpg', name: 'Young Black Suit' },
    ]
  }

  fashion() {
    return [
      { id: 76, category: "Women", price: 60.99, stars: 5, voted: 3112, description: "PRETTYGARDEN Women's Tops Casual Long Sleeve Crewneck Floral Print Smocked Ruffle Hem Slim", image: './assets/fashion11.jpg' },
      { id: 77, category: "Women", price: 100, stars: 4, voted: 8930, description: "AUTOMET Womens Casual Plaid Shacket Wool Blend Button Down Long Sleeve Shirt Fall Jacket Shackets", image: './assets/fashion2.jpg' },
      { id: 78, category: "Men", price: 60.99, stars: 5, voted: 3112, description: "MIHOLL Women’s Long Sleeve Tops Lace Casual Loose Blouses T Shirts", image: './assets/fashion33.jpg' },
      { id: 79, category: "Women", price: 100, stars: 4, voted: 1821, description: "MSIEESO Women's Crew Neck T Shirt Business Casual Eyelet Ruffle Long Sleeve Tops Blouse for Women", image: './assets/fashion4.jpg' },
      { id: 80, category: "Women", price: 60.99, stars: 4, voted: 8930, description: "VIISHOW Womens Button Up Shirt Casual Long Sleeve Loose Fit Collared Linen Work Blouse Tops with Pocket", image: './assets/fashion5.jpg' },
      { id: 81, category: "Women", price: 100, stars: 4, voted: 1821, description: "SeSe Code Womens Roll 3/4 Sleeve Mesh Blouses V Neck Tunic Tops Layered Shirts", image: './assets/fashion6.jpg' },
      { id: 82, category: "Women", price: 55.31, stars: 5, voted: 3112, description: "COOFANDY Men's Casual Suit Blazer Jackets Lightweight Sports Coats One Button", image: './assets/fashion7.jpg' },
      { id: 83, category: "Men", price: 60.99, stars: 5, voted: 1821, description: "Carhartt Men's Loose Fit Midweight Logo Sleeve Graphic Sweatshirt", image: './assets/fashion8.jpg' },
      { id: 84, category: "Men", price: 55.31, stars: 4, voted: 8930, description: "COOFANDY Men's Casual Henley Pullover Sweatshirt Thermal Fleece Slim Fit Sweater", image: './assets/fashion9.jpg' },
      { id: 85, category: "Men", price: 100, stars: 5, voted: 3112, description: "Lexiart Mens Fashion Henley Shirts Long Sleeve Button Cotton T-Shirt with Pocket", image: './assets/fashion10.jpg' },
    ]
  }

  decorBox(): Electronics[] {
    return [
      { image: './assets/decor1.jpg', name: 'Utopia Bedding' },
      { image: './assets/decor2.jpg', name: 'Door Draft Stopper' },
      { image: './assets/decor3.jpg', name: 'SONORO Bathroom' },
      { image: './assets/decor4.jpg', name: 'CEWOR 14 Pack' },
    ]
  }

  toyBox(): Electronics[] {
    return [
      { image: './assets/toy1.jpg', name: 'Colored Pencils' },
      { image: './assets/toy2.jpg', name: 'Drop and Go Dump Truck' },
      { image: './assets/toy3.jpg', name: '​Barbie Toys' },
      { image: './assets/toy4.jpg', name: 'PS5' },
    ]
  }

  popular(): any {
    return [
      // Phones
      { id: 1, image: './assets/popular/popular3.jpg', voted: 99331, name: "Iphone 13 Pro Max", category: "Phones", price: 100, description: "Iphone 12 Pro Max Pro camera system (48MP Main, 12MP Ultra Wide, and 12MP Telephoto) Dual 12MP camera system (Main and Ultra Wide) Dual 12MP camera system (Main and Ultra Wide)", stars: 5 },
      { id: 2, image: './assets/popular/popular1.jpg', voted: 4451, name: "Iphone 14 Pro Max", category: "Phones", price: 122.99, description: "Iphone 13 Pro Max 12MP Telephoto) Dual 12MP camera system (Main and Ultra Wide) Dual 12MP camera system (Main and Ultra Wide)", stars: 4.5 },
      { id: 3, image: './assets/popular/popular9.jpg', voted: 99331, name: "Iphone 12 Pro Max", category: "Phones", price: 95.83, description: "Iphone 14 Pro Max 12MP Telephoto) Dual 12MP camera system (Main and Ultra Wide) Dual 12MP camera system (Main and Ultra Wide)", stars: 5 },
      { id: 4, image: './assets/popular/popular32.jpg', voted: 99331, name: "S22 Ultra", category: "Phones", price: 154.75, description: "Samsung Galaxy S22 Ultra 5G (Burgundy, 12GB, 512GB Storage) with No Cost EMI/Additional", stars: 5 },
      { id: 5, image: './assets/popular/popular31.jpg', voted: 4451, name: "Note S20", category: "Phones", price: 120.99, description: "The Samsung Galaxy Note 20 launched in August 2020 alongside the Note 20 Ultra, and is the more affordable of the pair. In the US the 5G model with 128GB", stars: 4 },

      // laptops
      { id: 6, image: './assets/popular/popular5.jpg', voted: 99331, category: "Laptops", price: 120.99, description: "2022 New HP 15 Laptop, 15.6 HD LED Display, Intel Dual-Core Processor, Intel UHD Graphics, 16GB DDR4 RAM, 1TB SSD, Ethernet Port, USB Type-C, Long Battery Life, Windows 11", stars: 5 },
      { id: 7, image: './assets/popular/popular4.jpg', voted: 99331, category: "Laptops", price: 50.91, description: "2022 Acer 15inch HD IPS Chromebook, Intel Dual-Core Celeron Processor Up to 2.55GHz, 4GB RAM, 32GB Storage, Super-Fast WiFi Up to 1300 Mbps, Chrome OS-(Renewed) (Dale Silver)", stars: 4.5 },
      { id: 8, image: './assets/popular/popular7.jpg', voted: 4451, category: "Laptops", price: 20, description: "Dell Latitude 3180 Education 11.6 HD Laptop PC - Intel Celeron N3350 2.4GHz, 4GB, 64GB SSD, Bluetooth, Windows 10 Professional (Renewed)", stars: 4 },
      { id: 9, image: './assets/popular/popular8.jpg', voted: 99331, category: "Laptops", price: 15.75, description: "2022 ASUS 14 HD Laptop, Intel Celeron N4020 Processor, 4GB RAM, 64GB eMMC , Webcam, Intel HD Graphics 500, Bluetooth, Windows 11 S, Rose Gold, 32GB SnowBell USB Card", stars: 4.5 },

      // accessories
      { id: 10, image: './assets/popular/popular2.jpg', voted: 99331, category: "Accessories", price: 10.32, description: "Samsung charger 12K A", stars: 4.5 },
      { id: 11, image: './assets/popular/popular6.jpg', voted: 99331, category: "Accessories", price: 55.83, description: "Elite Strap for Quest 2 - iofeiwak B5 Pro Halo Strap Accessories for Quest 2 - Adjustable Head Strap [Enhanced Stable & Comfort in VR Gaming]", stars: 5 },
      { id: 12, image: './assets/popular/popular14.jpg', voted: 99331, category: "Accessories", price: 15.75, description: "Samsung charger 12K A", stars: 4.5 },
      { id: 13, image: './assets/popular/popular17.jpg', voted: 4451, category: "Accessories", price: 283.29, description: "Logitech G502 X PLUS LIGHTSPEED Wireless RGB Gaming Mouse - Optical mouse with LIGHTFORCE hybrid switches, LIGHTSYNC RGB, HERO 25K gaming sensor", stars: 4.5 },
      { id: 14, image: './assets/popular/popular18.jpg', voted: 99331, category: "Accessories", price: 20, description: "Logitech G733 LIGHTSPEED Wireless Gaming Headset with suspension headband, LIGHTSYNC RGB, Blue VO!CE mic technology and PRO-G audio drivers - Lilac", stars: 4 },
      { id: 15, image: './assets/popular/popular26.jpg', voted: 99331, category: "Accessories", price: 120.99, description: "UGREEN USB C Hub Adapter for MacBook Pro MacBook Air M1 2020 2019 2018 with 4K HDMI Thunderbolt 3 100W Power Delivery SD TF Card Reader and 2 USB 3.0 Ports, Silver", stars: 4 },
      { id: 16, image: './assets/popular/popular30.jpg', voted: 4451, category: "Accessories", price: 55.83, description: "USB C Hub, USB C Adapter, EUASOO 10 in 1 Type c Hub with 1000M RJ45 Ethernet, 4K HDMI, VGA, USB 3.0 Ports, PD 3.0 Charging Port", stars: 4 },
      { id: 17, image: './assets/popular/popular27.jpg', voted: 99331, category: "Accessories", price: 283.29, description: "Logitech G733 LIGHTSPEED Wireless Gaming Headset with suspension headband, LIGHTSYNC RGB, Blue VO!CE mic technology and PRO-G audio drivers - Lilac", stars: 5 },

      // electronics
      { id: 18, image: './assets/popular/1.jpg', voted: 4451, category: "Electronics", price: 283.29, description: "NZXT H510 - CA-H510B-W1 - Compact ATX Mid-Tower PC Gaming Case - Front I/O USB Type-C Port - Tempered Glass Side Panel - CablNZXT H510 ", stars: 4.5 },
      { id: 19, image: './assets/popular/2.jpg', voted: 99331, category: "Electronics", price: 55.83, description: "Corsair iCUE H150i Elite Capellix Liquid CPU Cooler, RGB Pump + Fans, 360mmCorsair iCUE H150i Elite Capellix Liquid CPU Cooler, RGB Pump + Fans, 360mm", stars: 4 },
      { id: 20, image: './assets/popular/3.jpg', voted: 99331, category: "Electronics", price: 20, description: "Seagate BarraCuda 2TB Internal Hard Drive HDD – 3.5 Inch SATA 6Gb/s 7200 RPM 256MB Cache 3.5-Inch – Frustration Free Packaging", stars: 5 },
      { id: 21, image: './assets/popular/4.jpg', voted: 4451, category: "Electronics", price: 120.99, description: "Corsair Vengeance LPX 16GB (2 X 8GB) DDR4 3600 MHz (PC4-28800) C18 1.35V Desktop Memory - Black", stars: 4 },
      { id: 22, image: './assets/popular/5.jpg', voted: 99331, category: "Electronics", price: 283.29, description: "MSI MAG X570S Tomahawk WiFi Motherboard (AMD AM4, DDR4, PCIe 4.0, SATA 6Gb/s, M.2, USB 3.2 Gen 2, AC Wi-Fi 6, HDMI, ATX)", stars: 5 },
      { id: 23, image: './assets/popular/6.jpg', voted: 4451, category: "Electronics", price: 55.83, description: "MSI MAG X570S Tomahawk WiFi Motherboard (AMD AM4, DDR4, PCIe 4.0, SATA 6Gb/s, M.2, USB 3.2 Gen 2, AC Wi-Fi 6, HDMI, ATX)", stars: 4.5 },
      { id: 24, image: './assets/popular/7.jpg', voted: 99331, category: "Electronics", price: 15.75, description: "Corsair Vengeance LPX 16GB (2 X 8GB) DDR4 3600 MHz (PC4-28800) C18 1.35V Desktop Memory - Black", stars: 4 },
      { id: 25, image: './assets/popular/8.jpg', voted: 99331, category: "Electronics", price: 120.99, description: "Corsair iCUE H150i Elite Capellix Liquid CPU Cooler, RGB Pump + Fans, 360mmCorsair iCUE H150i Elite Capellix Liquid CPU Cooler, RGB Pump + Fans, 360mm", stars: 4.5 },
      { id: 26, image: './assets/popular/9.jpg', voted: 4451, category: "Electronics", price: 20, description: "Corsair Vengeance LPX 16GB (2 X 8GB) DDR4 3600 MHz (PC4-28800) C18 1.35V Desktop Memory - Black", stars: 5 },
      { id: 27, image: './assets/popular/10.jpg', voted: 99331, category: "Electronics", price: 55.83, description: "Corsair iCUE H150i Elite Capellix Liquid CPU Cooler, RGB Pump + Fans, 360mmCorsair iCUE H150i Elite Capellix Liquid CPU Cooler, RGB Pump + Fans, 360mm", stars: 4 },
      { id: 28, image: './assets/popular/11.jpg', voted: 99331, category: "Electronics", price: 283.29, description: "Corsair Vengeance LPX 16GB (2 X 8GB) DDR4 3600 MHz (PC4-28800) C18 1.35V Desktop Memory - Black", stars: 5 },
      { id: 29, image: './assets/popular/12.jpg', voted: 4451, category: "Electronics", price: 120.99, description: "Corsair iCUE H150i Elite Capellix Liquid CPU Cooler, RGB Pump + Fans, 360mmCorsair iCUE H150i Elite Capellix Liquid CPU Cooler, RGB Pump + Fans, 360mm", stars: 4.5 },
      { id: 30, image: './assets/popular/popular19.jpg', voted: 4451, category: "Electronics", price: 20, description: "Seagate BarraCuda 2TB Internal Hard Drive HDD  3.5 Inch SATA 6Gb/s 7200 RPM 256MB Cache 3.5-Inch – Frustration Free Packaging", stars: 4.5 },
      { id: 31, image: './assets/popular/popular16.jpg', voted: 99331, category: "Electronics", price: 120.99, description: "Samsung 970 EVO Plus SSD 2TB NVMe M.2 Internal Solid State Hard Drive w/ V-NAND Technology, Storage and Memory Expansion for Gaming, Graphics w/ Heat Control", stars: 4 },
      { id: 32, image: './assets/popular/popular20.jpg', voted: 4451, category: "Electronics", price: 283.29, description: "Elite Strap for Quest 2 - iofeiwak B5 Pro Halo Strap Accessories for Quest 2 - Adjustable Head Strap [Enhanced Stable & Comfort in VR Gaming]", stars: 4 },
      { id: 33, image: './assets/popular/popular21.jpg', voted: 99331, category: "Electronics", price: 55.83, description: "charger 16K A (white - black)", stars: 5 },
      { id: 34, image: './assets/popular/popular23.jpg', voted: 4451, category: "Electronics", price: 15.75, description: "AMD Ryzen™ 9 5700X 8-Core, 16-Thread Unlocked Desktop Processor", stars: 4 },
      { id: 35, image: './assets/popular/popular25.jpg', voted: 99331, category: "Electronics", price: 55.83, description: "Logitech G733 LIGHTSPEED Wireless Gaming Headset with suspension headband, LIGHTSYNC RGB, Blue VO!CE mic technology and PRO-G audio drivers - Lilac", stars: 4.5 },
      { id: 36, image: './assets/popular/popular29.jpg', voted: 99331, category: "Electronics", price: 283.29, description: "AMD Ryzen™ 7 5500X 6-Core, 12-Thread Unlocked Desktop Processor", stars: 4 },
      { id: 37, image: './assets/popular/popular10.jpg', voted: 4451, category: "Electronics", price: 20, description: "Samsung 970 EVO Plus SSD 2TB NVMe M.2 Internal Solid State Hard Drive w/ V-NAND Technology, Storage and Memory Expansion for Gaming, Graphics w/ Heat Control", stars: 4.5 },
      { id: 38, image: './assets/popular/popular11.jpg', voted: 99331, category: "Electronics", price: 55.83, description: "charger 16K A (white - black)", stars: 4 },
      { id: 39, image: './assets/popular/popular12.jpg', voted: 4451, category: "Electronics", price: 120.99, description: "white calculator x992", stars: 5 },
    ]
  }

  care() {
    return [
      { image: './assets/care/care1.jpg', },
      { image: './assets/care/care3.jpg', },
      { image: './assets/care/care2.jpg', },
      { image: './assets/care/care4.jpg', },
      { image: './assets/care/care5.jpg', },
      { image: './assets/care/care6.jpg', },
      { image: './assets/care/care7.jpg', },
      { image: './assets/care/care8.jpg', },
      { image: './assets/care/care9.jpg', },
      { image: './assets/care/care10.jpg', },
      { image: './assets/care/care11.jpg', },
      { image: './assets/care/care12.jpg', },
      { image: './assets/care/care13.jpg', },
      { image: './assets/care/care14.jpg', },
      { image: './assets/care/care11.jpg', },
      { image: './assets/care/care1.jpg', },
      { image: './assets/care/care2.jpg', },
      { image: './assets/care/care4.jpg', }
    ]
  }

  toys() {
    return [
      { id: 81, price: 9, description: "Jurassic World Dominion Dinosaur Toy, Brachiosaurus Action Figure 32 Inches Long with Posable Joints, Gift for kids", stars: 5, voted: 44312, image: './assets/toys/t1.jpg' },
      { id: 82, price: 5.99, description: "Pomkinz Glow in The Dark Take Apart Dinosaur Toys Kids 3-5: Stem Toys Learning Educational Toys 3 Year Old Boys Building", stars: 4, voted: 1933, image: './assets/toys/t3.jpg' },
      { id: 83, price: 3.35, description: "Disney Junior Minnie Mouse Roadster RC Car with Polka Dots, 27 MHz, Pink with White Polka Dots", stars: 5, voted: 44312, image: './assets/toys/t4.jpg' },
      { id: 84, price: 9, description: "Hollyhi 41 Pcs Kids Makeup Toy Kit for Girls, Washable Makeup Set Toy with Real Cosmetic Case for Little Girl", stars: 4, voted: 1933, image: './assets/toys/t5.jpg' },
      { id: 90, price: 5.99, description: "Jurassic World Dominion Dinosaur Toy, Brachiosaurus Action Figure 32 Inches Long with Posable Joints, Gift for kids", stars: 5, voted: 44312, image: './assets/toys/t6.jpg' },
      { id: 91, price: 9, description: "Pomkinz Glow in The Dark Take Apart Dinosaur Toys Kids 3-5: Stem Toys Learning Educational Toys 3 Year Old Boys Building", stars: 5, voted: 1933, image: './assets/toys/t7.jpg' },
      { id: 92, price: 3.35, description: "Disney Junior Minnie Mouse Roadster RC Car with Polka Dots, 27 MHz, Pink with White Polka Dots", stars: 4, voted: 1933, image: './assets/toys/t8.jpg' },
      { id: 93, price: 5.99, description: "Pomkinz Glow in The Dark Take Apart Dinosaur Toys Kids 3-5: Stem Toys Learning Educational Toys 3 Year Old Boys Building", stars: 5, voted: 44312, image: './assets/toys/t9.jpg' },
      { id: 94, price: 9, description: "Jurassic World Dominion Dinosaur Toy, Brachiosaurus Action Figure 32 Inches Long with Posable Joints, Gift for kids", stars: 5, voted: 44312, image: './assets/toys/t10.jpg' },
      { id: 95, price: 3.35, description: "Disney Junior Minnie Mouse Roadster RC Car with Polka Dots, 27 MHz, Pink with White Polka Dots", stars: 4, voted: 1933, image: './assets/toys/t11.jpg' },
      { id: 96, price: 9, description: "Pomkinz Glow in The Dark Take Apart Dinosaur Toys Kids 3-5: Stem Toys Learning Educational Toys 3 Year Old Boys Building", stars: 4, voted: 44312, image: './assets/toys/t1.jpg' },
      { id: 97, price: 5.99, description: "Hollyhi 41 Pcs Kids Makeup Toy Kit for Girls, Washable Makeup Set Toy with Real Cosmetic Case for Little Girl", stars: 5, voted: 1933, image: './assets/toys/t2.jpg' },
      { id: 98, price: 3.35, description: "Pomkinz Glow in The Dark Take Apart Dinosaur Toys Kids 3-5: Stem Toys Learning Educational Toys 3 Year Old Boys Building", stars: 5, voted: 44312, image: './assets/toys/t3.jpg' },
      { id: 99, price: 9, description: "Disney Junior Minnie Mouse Roadster RC Car with Polka Dots, 27 MHz, Pink with White Polka Dots", stars: 5, voted: 3784, image: './assets/toys/t4.jpg' },
      { id: 100, price: 5.99, description: "Jurassic World Dominion Dinosaur Toy, Brachiosaurus Action Figure 32 Inches Long with Posable Joints, Gift for kids", stars: 4, voted: 3784, image: './assets/toys/t5.jpg' },
      { id: 101, price: 9, description: "Hollyhi 41 Pcs Kids Makeup Toy Kit for Girls, Washable Makeup Set Toy with Real Cosmetic Case for Little Girl", stars: 5, voted: 3784, image: './assets/toys/t6.jpg' },
      { id: 102, price: 3.35, description: "Disney Junior Minnie Mouse Roadster RC Car with Polka Dots, 27 MHz, Pink with White Polka Dots", stars: 4, voted: 44312, image: './assets/toys/t7.jpg' },
      { id: 103, price: 9, description: "Pomkinz Glow in The Dark Take Apart Dinosaur Toys Kids 3-5: Stem Toys Learning Educational Toys 3 Year Old Boys Building", stars: 5, voted: 1933, image: './assets/toys/t8.jpg' },
      { id: 104, price: 3.35, description: "Jurassic World Dominion Dinosaur Toy, Brachiosaurus Action Figure 32 Inches Long with Posable Joints, Gift for kids", stars: 4, voted: 3784, image: './assets/toys/t9.jpg' },
      { id: 105, price: 5.99, description: "Pomkinz Glow in The Dark Take Apart Dinosaur Toys Kids 3-5: Stem Toys Learning Educational Toys 3 Year Old Boys Building", stars: 5, voted: 44312, image: './assets/toys/t10.jpg' },
      { id: 106, price: 9, description: "Jurassic World Dominion Dinosaur Toy, Brachiosaurus Action Figure 32 Inches Long with Posable Joints, Gift for kids", stars: 4, voted: 1933, image: './assets/toys/t11.jpg' },
    ]
  }

  decors() {
    return [
      { id: 52, stars: 5, voted: 10923, description: "Bonsai Tree Light for Room Decor, Aesthetic Lamps for Living Room, Cute Night Light for House Decor", price: 54.89, image: './assets/decor/d3.jpg' },
      { id: 53, stars: 4, voted: 85399, description: "Abbittar Ceramic Vase Set of 3, Small Flower Vases for Rustic Home Decor, Modern Farmhouse Decor, Living Room Decor", price: 10, image: './assets/decor/d1.jpg' },
      { id: 54, stars: 4, voted: 10923, description: "Leicofay Ceramic Hollow Donut Vase Set of 2, Off White Vases for Decor Nordic Minimalism Style Decor for Wedding Dinner", price: 54.89, image: './assets/decor/d4.jpg' },
      { id: 55, stars: 5, voted: 6667, description: "HOMEGIFT Ceramic Coasters for Drinks Absorbent- HomeGift Farmhouse Stone Coaster Set of 6 with Metal Holder ", price: 10, image: './assets/decor/d5.jpg' },
      { id: 56, stars: 4, voted: 85399, description: "Bonsai Tree Light for Room Decor, Aesthetic Lamps for Living Room, Cute Night Light for House Decor", price: 76.43, image: './assets/decor/d6.jpg' },
      { id: 57, stars: 4, voted: 10923, description: "Abbittar Ceramic Vase Set of 3, Small Flower Vases for Rustic Home Decor, Modern Farmhouse Decor, Living Room Decor", price: 54.89, image: './assets/decor/d7.jpg' },
      { id: 58, stars: 5, voted: 6667, description: "Leicofay Ceramic Hollow Donut Vase Set of 2, Off White Vases for Decor Nordic Minimalism Style Decor for Wedding Dinner", price: 76.43, image: './assets/decor/d8.jpg' },
      { id: 59, stars: 3, voted: 85399, description: "Abbittar Ceramic Vase Set of 3, Small Flower Vases for Rustic Home Decor, Modern Farmhouse Decor, Living Room Decor", price: 10, image: './assets/decor/d9.jpg' },
      { id: 60, stars: 3, voted: 6667, description: "Abbittar Ceramic Vase Set of 3, Small Flower Vases for Rustic Home Decor, Modern Farmhouse Decor, Living Room Decor", price: 54.89, image: './assets/decor/d10.jpg' },
      { id: 61, stars: 5, voted: 10923, description: "Bonsai Tree Light for Room Decor, Aesthetic Lamps for Living Room, Cute Night Light for House Decor", price: 76.43, image: './assets/decor/d11.jpg' },
      { id: 62, stars: 3, voted: 6667, description: "HOMEGIFT Ceramic Coasters for Drinks Absorbent- HomeGift Farmhouse Stone Coaster Set of 6 with Metal Holder ", price: 10, image: './assets/decor/d1.jpg' },
      { id: 63, stars: 4, voted: 85399, description: "Abbittar Ceramic Vase Set of 3, Small Flower Vases for Rustic Home Decor, Modern Farmhouse Decor, Living Room Decor", price: 54.89, image: './assets/decor/d3.jpg' },
      { id: 64, stars: 5, voted: 10923, description: "Leicofay Ceramic Hollow Donut Vase Set of 2, Off White Vases for Decor Nordic Minimalism Style Decor for Wedding Dinner", price: 76.43, image: './assets/decor/d2.jpg' },
      { id: 65, stars: 3, voted: 6667, description: "Abbittar Ceramic Vase Set of 3, Small Flower Vases for Rustic Home Decor, Modern Farmhouse Decor, Living Room Decor", price: 10, image: './assets/decor/d4.jpg' },
      { id: 66, stars: 3, voted: 6667, description: "Bonsai Tree Light for Room Decor, Aesthetic Lamps for Living Room, Cute Night Light for House Decor", price: 54.89, image: './assets/decor/d5.jpg' },
      { id: 67, stars: 5, voted: 10923, description: "HOMEGIFT Ceramic Coasters for Drinks Absorbent- HomeGift Farmhouse Stone Coaster Set of 6 with Metal Holder ", price: 76.43, image: './assets/decor/d6.jpg' },
      { id: 68, stars: 3, voted: 85399, description: "Abbittar Ceramic Vase Set of 3, Small Flower Vases for Rustic Home Decor, Modern Farmhouse Decor, Living Room Decor", price: 10, image: './assets/decor/d7.jpg' },
      { id: 69, stars: 4, voted: 6667, description: "Leicofay Ceramic Hollow Donut Vase Set of 2, Off White Vases for Decor Nordic Minimalism Style Decor for Wedding Dinner", price: 54.89, image: './assets/decor/d8.jpg' },
      { id: 70, stars: 5, voted: 10923, description: "Abbittar Ceramic Vase Set of 3, Small Flower Vases for Rustic Home Decor, Modern Farmhouse Decor, Living Room Decor", price: 76.43, image: './assets/decor/d9.jpg' },
      { id: 71, stars: 3, voted: 6667, description: "HOMEGIFT Ceramic Coasters for Drinks Absorbent- HomeGift Farmhouse Stone Coaster Set of 6 with Metal Holder ", price: 54.89, image: './assets/decor/d10.jpg' },
      { id: 72, stars: 4, voted: 85399, description: "Bonsai Tree Light for Room Decor, Aesthetic Lamps for Living Room, Cute Night Light for House Decor", price: 76.43, image: './assets/decor/d11.jpg' },
      { id: 73, stars: 5, voted: 10923, description: "Abbittar Ceramic Vase Set of 3, Small Flower Vases for Rustic Home Decor, Modern Farmhouse Decor, Living Room Decor", price: 10, image: './assets/decor/d12.jpg' },
      { id: 74, stars: 3, voted: 6667, description: "Leicofay Ceramic Hollow Donut Vase Set of 2, Off White Vases for Decor Nordic Minimalism Style Decor for Wedding Dinner", price: 54.89, image: './assets/decor/d13.jpg' },
      { id: 75, stars: 5, voted: 10923, description: "Bonsai Tree Light for Room Decor, Aesthetic Lamps for Living Room, Cute Night Light for House Decor", price: 76.43, image: './assets/decor/d14.jpg' },
    ]
  }

  mainProducts() {
    return [
      { id: 40, vote: "11,033", image: './assets/main products/1.jpg', name: "Computer Cases", description: "Corsair 4000D Airflow Tempered Glass Mid-Tower ATX PC Case - Black", stars: 5, usedBy: "8,296", price: 104.99, shipping: 222.60 },
      { id: 41, vote: "5,983", image: './assets/main products/2.jpg', name: "Internal Solid State Drives", description: "Samsung 970 EVO Plus SSD 1TB NVMe M.2 Internal Solid State Hard Drive w/ V-NAND Technology, Storage and Memory Expansion for Gaming, Graphics w/ Heat Control, Max Speed, MZ-V7S1T0B/AM", stars: 3, usedBy: "20,576", price: 45, shipping: 19.02 },
      { id: 42, vote: "3,000", image: './assets/main products/3.jpg', name: "Hard Drives", description: "Corsair Vengeance LPX 16GB (2x8GB) DDR4 DRAM 3200MHz C16 Desktop Memory Kit - Black (CMK16GX4M2B3200C16)", stars: 4, usedBy: "100,600", price: 10.99, shipping: 7.00 },
      { id: 43, vote: "4,399", image: './assets/main products/4.jpg', name: "Computer Motherboards", description: "ASUS AM4 TUF Gaming X570-Plus (Wi-Fi) AM4 Zen 3 Ryzen 5000 & 3rd Gen Ryzen ATX Motherboard with PCIe 4.0, Dual M.2, 12+2 with Dr. MOS Power Stage", stars: 4, usedBy: "1,455", price: 70.99, shipping: 44.99 },
      { id: 44, vote: "5,983", image: './assets/main products/5.jpg', name: "Computer Memory", description: "MSI MAG B550 TOMAHAWK Gaming Motherboard (AMD AM4, DDR4, PCIe 4.0, SATA 6Gb/s, M.2, USB 3.2 Gen 2, HDMI/DP, ATX, AMD Ryzen 5000 Series processors)", stars: 4.5, usedBy: "195,555", price: 203.99, shipping: 15.38 },
      { id: 45, vote: "976", image: './assets/main products/6.jpg', name: "Corsair Vengeance RGB", description: "Corsair Vengeance RGB Pro 32GB (2x16GB) DDR4 3600 (PC4-28800) C18 AMD Optimized Memory – Black", stars: 5, usedBy: "11,296", price: 15.99, shipping: 75.67 },
      { id: 46, vote: "5,983", image: './assets/main products/7.jpg', name: "Seagate BarraCuda 2TB", description: "Corsair Vengeance LPX 32GB (2 X 16GB) DDR4 3600 (PC4-28800) C18 1.35V Desktop Memory - Black", stars: 5, usedBy: "150,549", price: 104.99, shipping: 3.54 },
      { id: 47, vote: "1,093", image: './assets/main products/8.jpg', name: "MSI B550-A PRO", description: "Corsair 4000D Airflow Tempered Glass Mid-Tower ATX PC Case - Black", stars: 4.5, usedBy: "100,111", price: 117, shipping: 5.66 },
      { id: 48, vote: "1,829", image: './assets/main products/9.jpg', name: "CoolerMaster", description: "CoolerMaster MasterLiquid ML240L RGB V2, Close-Loop AIO CPU Liquid Cooler, 3rd Gen Dual Chamber Pump, 240 Rad, SickleFlow 120mm PWM, RGB Lighting for AMD Ryzen AM5/AM4/Intel LGA1700*/1200/115X", stars: 5, usedBy: "18,200", price: 119.01, shipping: 22 },
      { id: 49, vote: "5,684", image: './assets/main products/10.jpg', name: "Corsair Vengeance LPX", description: "CORSAIR RM Series (2021), RM750, 750 Watt, 80 Plus Gold Certified, Fully Modular Power Supply", stars: 5, usedBy: "84,127", price: 104.99, shipping: 60 },
      { id: 50, vote: "5,983", image: './assets/main products/11.jpg', name: "Charging Station", description: "Playstation DualSense Charging Station", stars: 3, usedBy: "62,277", price: 29.00, shipping: 22.27 },
      { id: 51, vote: "9,483", image: './assets/main products/12.jpg', name: "Western Digital 1TB", description: "Western Digital 1TB WD Blue SN570 NVMe Internal Solid State Drive SSD - Gen3 x4 PCIe 8Gb/s, M.2 2280, Up to 3,500 MB/s", stars: 2, usedBy: "1,336", price: 79.99, shipping: 20.33 },
    ]
  }

  getProductById(id: any): any {
    return this.mainProducts().find(item => item.id == id)
  }

  getElectronicsProductById(id: any) {
    return this.popular().find((item: any) => item.id == id)
  }

  getFashionProductById(id: any) {
    return this.fashion().find((item: any) => item.id == id)
  }

  getDecorProductById(id: any) {
    return this.decors().find((item: any) => item.id == id)
  }

  getToyProductById(id: any) {
    return this.toys().find((item: any) => item.id == id)
  }

  getCategoryOfElectronics(category: any) {
    return this.popular().filter((item: any) => item.category == category)
  }
  getCategoryOfFashion(category: any) {
    return this.fashion().filter((item: any) => item.category == category)
  }
}
