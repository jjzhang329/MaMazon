# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
User.destroy_all
Product.destroy_all
Cart.destroy_all
Review.destroy_all
# user
demo = User.create!(name: 'Demo', email:"plshireme@company.com", password:"password")
michelle = User.create!(name: "Michelle", email:"michelle@gmail.com", password:"michelle")
harsha = User.create!(name:"Harsha", email:"harsha@gmail.com", password:"harsha")
perry = User.create!(name:"Perry", email:"perry@gmail.com", password:"perryxie")
jack = User.create!(name:"Jack", email:"jack@gmail.com", password:"jacktomasik")
daniel = User.create!(name:"Daniel", email:"daniel@gmail.com", password:"daniel")
presley = User.create!(name:"Persely", email:"presley@gmail.com", password:"presley")
jing = User.create!(name:"JingJing", email:"jj@gmail.com", password:"jingjing")

# baby





#product1#homedecor
homedecor2 = Product.create!(name:"Eastern Rock White Ceramic Vase Modern Minimalist Abstraction Vase,for Centerpieces,Kitchen,Office, Living Room,Wedding,Gifts,Modern Geometric Vases Perfect Home Decor Vase(O Shape)",
description:"Applicable scene:living room,office，dining table, bedroom, tabletop, bed head,ect. it adds a stylish and artistic look to your home.
High quality：The vase adopts the biscuit firing process, which is made of excellent porcelain clay by tens of processes such as high-temperature firing, and the surface shows matte frosted texture, not reflective, not shiny, and have more comfortable visual experienceSimple and unique abstract shaped design will make the vase beautiful both with and without flowers. The plain color is suitable for both dried flowers and silk flowers.
Unglazed: ceramic vases made by traditional handicrafts are stronger in texture.The rustic and natural surface of each looks slightly different, each is actually a unique vase, which is the charm of handmade.I'm sure you'll appreciate its beauty.
Great gift：It is an ideal gift for family and friends, especially for those who like unique decorative vases and modern minimalist vases.
Eastern Rock：Design according to the needs of the times, pay attention to the unity of the use function and aesthetic function of the product.",
department:"homedecor",
price:29.5)
file22 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/home+decor/homedecor2.jpg")
homedecor2.photo.attach(io:file22, filename:"homedecor2")



#product2#homedecor
homedecor5 = Product.create!(name:"Amazon Brand- Rivet Mid-Century Ceramic Planter with Stand, 14'H, White",
description:"This two-tone round stoneware planter is an attractive piece on its own. Combined with an iron shelf/stand, it makes a mid-century style statement in addition to holding plants. Planter and shelf can be used together or separately.
100% stoneware with iron stand
Durable piece designed for house plants, but also stands alone as a decorative container.
With stand: 10' diameter x 14' high; without stand: 8' diameter x 8.27' high
Planter does not have drainage holes",
department:"homedecor",
price: 58.49)
file25 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/home+decor/homedecor5.jpg")
homedecor5.photo.attach(io:file25, filename:"homedecor5")


#product3#ktichen
kitchen5 = Product.create!(name:"Fellow Stagg EKG Electric Gooseneck Kettle - Pour-Over Coffee and Tea Pot, Stainless Steel, Quick Heating, Matte Black with Walnut Wood Handle, 0.9 Liter", 
description:"STAGG EKG ELECTRIC POUR OVER KETTLE - Simple aesthetic meets powerful design! A stainless steel gooseneck kettle that pours as good as it looks for the ultimate brewing experience
PRECISION POUR - Stagg EKG's sleek pointed spout is designed for a powerful but precise stream for the optimal pour over flow rate, and the counterbalanced handle provides a sturdy grip encouraging a slower pour
TEMPERATURE MATTERS - Speed up your brewing process with Stagg EKG and its 1200 watt quick-heating element for boiling water. Stagg EKG’s to-the-degree temperature control makes perfecting your manual cup of coffee or steeped tea a breeze
BREW LIKE A PRO - A sleek LCD display screen indicates the desired Set Temp & Real-Time Temp for your drip coffee or tea; use the built-in Brew Stopwatch to time your tea or coffee extraction; engage the hold toggle, and your water will keep hot for up to 60 min
WELL CRAFTED KETTLE - Aesthetically beautiful and quality made 304 stainless steel kettle body and lid with a minimalist base; Has a 0.9 Liter boiling capacity; Kettle comes with a 1-Year warranty backed by our outstanding customer service",
department:"kitchen",
price:189)
file30 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/kitchen/kitchen5.jpg")
kitchen5.photo.attach(io:file30, filename:"kitchen5")

#product4#home

homedecor4 = Product.create!(name:"LA JOLIE MUSE Woody Jasmine Scented Candle, Candles Gifts for Women, Natural Wax, 80 Hours Long Burning",
description:"SIZE AND BURN TIME - 12.3oz/350g. Featuring natural wax and a lead-free cotton wick, our vegan and cruelty-free candle sends you on a pleasant sensory journey for 70-80 hours. Paraben-free and paraffin-free.
FLORAL FULLNESS - Immerse yourself in a harmonious floral chord of jasmine, violet, and gardenia infused with woody and musky notes that add mellowness to this refreshing bouquet. Let the scent of jasmine reinvigorate your day and brighten up your morning routine.
BLISSFUL INDULGENCE - The fragrance diffuses quickly for an almost instant indulgence with a guaranteed clean and even burn.
DELICATE GLASSWARE - Designed in a fluted glass jar with stylish packaging, this candle is perfect for home decor and a brilliant gift for any occasion. Reuse the jar as an exquisite vessel for small items.
SATISFACTION GUARANTEED - Experience thoughtful customer service and full refund & return if there are any problems upon receiving the product.",
department:"homedecor",
price:27.99)
file24 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/home+decor/homedecor4.jpg")
homedecor4.photo.attach(io:file24, filename:"homedecor4")


#product5#baby
baby1 = Product.create!(
    {name:"Huggies Baby Diapers, Little Movers, Multi-Color, Size 3, 156 Count", 
    description:"Huggies Little Movers baby diapers size 3 fit babies 16-28 lb. (7-13 kg)
#1 Fitting Diaper* features 5-Way Fit System with contoured shape to move with baby & virtually eliminate leaks (*Wet Fit, Among Open Diapers)
DryTouch Liner absorbs wetness on contact & Leak Lock System helps prevent leaks for up to 12 hours
SnugFit Waistband & Double Grip Strips keep the diaper in place while baby is crawling, moving or walking
Huggies' Pocketed Waistband helps prevent diaper blowouts (NB-Size 2), plus wetness indicator changes color when baby is ready for a diaper change
Fragrance free, lotion free, paraben free, and free of elemental chlorine & natural rubber latex
Huggies' SizeUp indicator lets you know when baby needs to move to the next size diaper
Packaging may vary from image shown", 
    department: "baby", 
    price: 49.11}
)
file1 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/baby/baby1_.jpg")

#product#beauty
baby1.photo.attach(io: file1, filename:"baby1")
beauty2 = Product.create!(name:"Oribe Gold Lust Collection Holiday Set",
description:"Gold Lust Shampoo rejuvenates with our revolutionary -restorative complex, while Gold Lust Conditioner undoes the damage of time. A drop of Gold Lust Nourishing Hair Oil before heat styling seals in sleekness and shine.",
department:"beauty",
price: 200)
file7 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/beauty/beauty2.jpg")
beauty2.photo.attach(io:file7, filename:"beauty2")

#product6#maternity
maternity5 = Product.create!(name:"Fetal Heartbeat Monitor,Baby Heartbeat Monitor Pregnancy Doppler Fetal Monitor for Pregnancy Easy to Use with Gel",
description:"Easy USE
Easy To Use, High Performance Baby Heartbeat Monitor .
New Moms can operate the Fetal Doppler by themselves to hear fetal heart sound and calculate FHR to realize the purpose of pre-monitoring and fetus caring.
Equipped with a full high definition color LCD display. One button to choose Data Digital display or Curve display interface.
Easy to find the baby position quickly as early as 12 weeks, the best time for use is 16 weeks into pregnancy.
Safe and Accuracy: High sensitivity probe, no radiation, low power, safe to baby.",
department:"maternity",
price:79.98)
file35 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/maternity/maternity5.jpg")
maternity5.photo.attach(io:file35, filename:"maternity5")

#product7#smarthome
smarthome5 = Product.create!(name:"Security Camera 2K, blurams Baby Monitor Dog Camera 360-degree for Home Security w/ Smart Motion Tracking, Phone App, IR Night Vision, Siren, Works with Alexa & Google Assistant & IFTTT, 2-Way Audio",
description:"360°Coverage with 2K Resolution - blurams security camera automatically tracks the motion if detect motion. Features in IR-CUT function to capture crisp videos and photos from the day to night, even in the dim condition. Turn on privacy mode to protect your privacy.
Smart AI Detection & Instant Alerts - Receive instant alerts on your phone if human, motion or abnormal sound detected in your house. Automatically record a 10-15 seconds alert video to the cloud and it will be saved for 24 hours (no subscription or monthly fees required).
Smart Integration - Use your simple voice command to view blurams baby monitor live stream on Alexa or Google Assistant device with a screen or on your iPhone or iPad. Works with IFTTT lets you link just about any set of smart devices so they can work together, make your home more relaxing.
Enhanced blurams App - Live viewing 4 dog cameras simultaneously on App or official web portal. Share your camera with unlimited family members. Two-way audio allows you to receive and transmit audio from anywhere at any time. Works with 2.4GHz Wi-Fi networks only (does not support 5GHz Wi-Fi).
Optional Cloud & Local Storage - 24/7 CVR enables the indoor security camera to keep a nonstop recording in the cloud, avoid the risk of losing video footage from a SD card. According to the time, events type or the camera name’s to search the specific event quickly. Supports up to 128GB SD card(buy separately).
",
department:"smarthome",
price:40.98)
file40 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/smart-home/smarthome5.jpg")
smarthome5.photo.attach(io:file40, filename:"smarthome5")

#product8#smarthome
smarthome4 = Product.create!(name:"Echo Dot (4th Gen, 2020 release) | Smart speaker with Alexa | Charcoal",
description:"Meet the Echo Dot - Our most popular smart speaker with Alexa. The sleek, compact design delivers crisp vocals and balanced bass for full sound.
Voice control your entertainment - Stream songs from Amazon Music, Apple Music, Spotify, SiriusXM, and others. Play music, audiobooks, and podcasts throughout your home with multi-room music.
Ready to help - Ask Alexa to tell a joke, play music, answer questions, play the news, check the weather, set alarms, and more.
Control your smart home - Use your voice to turn on lights, adjust thermostats, and lock doors with compatible devices.
Start Routines with your motion - Turn on compatible lights, play your Flash Briefing, or turn on the coffee maker when you walk into the room.
Connect with others hands-free - Call friends and family who have the Alexa app or an Echo device. Instantly drop in on other rooms or announce to the whole house that dinner's ready.
Designed to protect your privacy – Amazon is not in the business of selling your personal information to others. Built with multiple layers of privacy controls including a mic off button.",
department:"smarthome",
price:49.99)

file39 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/smart-home/smarthome4.jpg")
smarthome4.photo.attach(io:file39, filename:"smarthome4")

baby2 = Product.create!(
    name:"Pampers Choose Your Count, Sensitive Water Based Baby Diaper Wipes, Hypoallergenic and Unscented, (Packaging May Vary) White, 336 Count", 
    description:"Pampers Sensitive wipes are clinically proven for sensitive skin
From Pampers, the #1 pediatrician recommended brand
Thick and gentle for a soothing clean
Pop-top dispenses just one at a time
Gentle and hypoallergenic—0% alcohol, fragrance, parabens and latex* (*Natural rubber)
For healthy skin, use together with Pampers Swaddlers diapers
New Look! Packaging may vary", 
    department: "baby", 
    price: 11.12
)
file2 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/baby/baby2.jpg")
baby2.photo.attach(io: file2, filename:"baby2")

baby3 = Product.create!(
    name:"Diapers Newborn/Size 0 (< 10 lb), 140 Count - Pampers Swaddlers Disposable Baby Diapers, Enormous Pack (Packaging May Vary)", 
    description:"Trusted protection, Pampers is the #1 U.S. Pediatrician Recommended Brand
LockAway Channels absorb wetness and lock it away
Breathefree Liner helps soothe and protect baby's skin
Soft flexi-sides for comfortable fit
Gentle on baby's delicate skin, Pampers Swaddlers Disposable Diapers is hypoallergenic and free of parabens and latex (Natural rubber)
Protect your newborn's delicate belly with our Umbilical Cord Notch (Sizes N–2)
Pampers Wetness Indicator
Packaging and prints on diapers may vary", 
    department: "baby", 
    price: 42.99
)
file3 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/baby/baby3.jpg")
baby3.photo.attach(io: file3, filename:"baby3")

baby4 = Product.create!(name:"Papablic Archie Baby Swing, Bluetooth Portable Swing for Infants with 5 Natural Sway Speeds and 3 Recline Positions, Unique Breathable System, Remote Control", 
description:"👶 Give Your Arms A Rest: Swinging our baby in arms for hours upon hours will make our arms feel like they might fall off. This baby swing emulates the feeling of being rocked in mom's or dad's hands, featuring a natural side-to-side motion at 5 different speeds so you can keep your little one calm and your hands-free.
👶 Adjustable seat recline: Our baby swing for infants offers 3 adjustable incline positions so you can find the angle that your babies like the most. And play any of 12 built-in sounds or other songs via Bluetooth to help your baby relax.
👶 Unique Breathable System: Archie baby swing with plush seat and head support are perfect for snuggles during the winter, while the cooling fabric on the other side and the breathable net at the bottom of the seat will keep your baby sweat-free in the summer.
👶 Carry Archie Swing Anywhere: Only 8 lbs! So lightweight that you can easily move it from room to room which you need or even to your parent’s house. It can also operate on batteries and has a canopy to keep bugs away from your baby.
👶 Easy to Assemble: It just needs less than 5 minutes to quickly install. And it comes with 3 cute toys to attract the baby’s attention, your baby will love being entertained, and you'll love having a moment to yourself.
", 
department:"baby", 
price:149.92)
file4 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/baby/baby4.jpg")
baby4.photo.attach(io: file4, filename:"baby4")

baby5 = Product.create!(name:"Lansinoh Breastmilk Storage Bags, 100 Count", 
description:"SUPER STRONG - Store, protect, and freeze precious breastmilk with these breast milk storing bags
PRESTERILIZED - Our milk storage bags have a double zipper seal to prevent leaks
REINFORCED SEAM - Double sealed side seams for super strong breast milk collecting bags
PUMP DIRECTLY - Breast milk storage bags can be pumped directly into with Lansinoh pumps or used with our pump-into-bag adapter on most major pump brands
EASY STORAGE- Stand in the fridge for compact storage; lay flat to safely freeze",
department:"baby",
price:13.88)
file5 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/baby/baby5.jpg")
baby5.photo.attach(io:file5, filename:"baby5")

# beauty
beauty1 = Product.create!(
    name:"Vanicream Moisturizing Skin Cream with Pump Dispenser - 16 fl oz (1 lb) - Moisturizer Formulated Without Common Irritants for Those with Sensitive Skin",
    description:"Free of dyes, fragrance, masking fragrance, lanolin, parabens and formaldehyde. **Packaging May Vary**
Dermatologist Tested. won't clog pores
Can be used as a night cream, for massage, and as a daily moisturizing cream for face, hands, and body
Awarded seal of acceptance from the national eczema association
Please note there are no fragrances or masking fragrances in Vanicream products. There may be a slightly different aroma to each batch
",
    department: "beauty",
    price: 13.49
)
file6 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/beauty/beauty1.jpg")
beauty1.photo.attach(io: file6, filename:"beauty1")

beauty3 = Product.create!(name:"NuFACE Petite Facial Toning Device | Mini Facial Trainer Device + Hydrating Skin Care | Skin Care Device to Lift Contour Tone Skin + Reduce Look of Wrinkles | FDA-Cleared At-Home System",
description:"Unlock the magic of microcurrent with the NuFACE Mini Hydrate + Contour Gift Set in limited-edition Platinum Shimmer—the ultimate starter device to tone, lift, and contour the face and neck.",
department:"beauty",
price: 209)
file8 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/beauty/beaty3.jpg")
beauty3.photo.attach(io:file8, filename:"beauty3")


beauty4 = Product.create!(name:"Philips Sonicare DiamondClean Smart 9300 Rechargeable Electric Power Toothbrush, Rose Gold, HX9903/61",
description:"Complete oral care with smart sensor technology for an exceptional clean
Removes up to 10x more plaque and improves gum health up to 7x in just 2 weeks (in gum health mode vs. a manual toothbrush)
Removes up to 100% more stains in just 3 days (in white-plus mode vs. a manual toothbrush)
3 different smart brush head types automatically pair with the appropriate brushing mode and smart sensors provide real time feedback
4 modes: Clean, White-plus, Deep Clean-plus and Gum Health & 3 intensity levels
Includes: 1 Connected Sonicare toothbrush handle with 4 modes; 1 Premium Plaque Control brush head; 1 Premium White brush head; 1 Premium Gum Health brush head; 1 Charging glass; 1 travel case; 1 charging base
",
department:"beauty",
price:199.95)
file9 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/beauty/beauty4.jpg")
beauty4.photo.attach(io:file9, filename:"beauty4")

beauty5 = Product.create!(name:"L'Occitane Hand Cream Classics Trio Gift Set Enriched with Shea Butter for Dry Hands",
description:"A trio of L'Occitane's nourishing hand creams for exceptional comfort packaged in a limited edition box.",
department:"beauty",
price:29)
file10 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/beauty/beauty5.jpg")
beauty5.photo.attach(io:file10, filename:"beauty5")

#fashion
fashion1 = Product.create!(name:"BCBGMAXAZRIA Women's Floor Length Evening Gown with High Neck",
description:"100% Polyester
Imported
Pull On closure
Dry Clean Only
EVENING GOWN: This floor length gown is the perfect addition to any closet. Fashioned with 100% polyester, a halter neck, and a fitted waist and flowy tiered skirt. Dry clean only.
COMPOSITION: This high quality gown is true to size and is made from 100% polyester designed for maximum comfort without compromising style.
HOW TO WEAR: This flowy, evening gown is perfect for your next special occasion. The high neck and tiered skirt offer elegant accents.",
department:"fashion",
price:39.95)
file11 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/fashion/fashion1.jpg")
fashion1.photo.attach(io:file11, filename:"fashion1")

fashion2 = Product.create!(name:"Shonyin Mother Daughter & Grandma Granddaughter Dainty Necklace, Mother's Day Birthday Jewelry Gift Infinity Heart Pendant Necklace for Women",
description:"【 MOTHER & DAUGHTER NECKLACE MEANING 】 The infinite and heart design represents the eternal love between mother and daughter. No matter where we go, no matter what we do, you'll always be there for me, and I'll always be there for you.",
department:"fashion",
price:16.99)
file12 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/fashion/fashion2.jpg")
fashion2.photo.attach(io:file12, filename:"fashion2")

fashion3 = Product.create!(name:"Oval Garnet Double Halo Loop Pendant Necklace in 14K White Gold (10x8mm Garnet) - January Birthstone",
description:"Get free jewelry gift with every purchase. All our items are packaged with care in appealing boxes with plush interiors.
Birthstone for the month of January and traditional gemstone gift for 2nd, 15th & 29th wedding anniversaries. Perfect gift for any occasion- Birthday, Christmas, Mother’s Day, Valentine’s Day, Graduation, Thanks Giving, Holiday.
18 Inch 14K White Gold Chain Included with Pendant. Features 2.95 Carat Garnet and 0.472 Carat Diamond.
Free Certificate of Authenticity. Easy Returns - If you are not 100% satisfied with your purchase, you can return it for a full refund or exchange it within 30 days of the delivery date. Returns, including free gifts, must be unworn and in the state that you received them.
Angara offers high-quality Garnet jewelry in a variety of appealing designs. All our Garnet are sourced directly from mines and manufacturers. The exceptional craftsmanship ensures that every Garnet jewelry piece will last for generations.",
department:"fashion",
price:2659)
file13 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/fashion/fashion3.jpg")
fashion3.photo.attach(io:file13, filename:"fashion3")

fashion4 = Product.create!(name:"Stuart Weitzman Women's 5050 Over-the-Knee Boot",
description:"Imported
Boot opening measures approximately 14' around
These bodacious over-the-knee 5050 boots are half rockstar, half supermodel!
Available in a variety of upper materials.
Easy pull-on construction.
Soft leather lining.
Lightly cushioned leather footbed.",
department:"fashion",
price:750)
file14 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/fashion/fashion4.jpg")
fashion4.photo.attach(io:file14, filename:"fashion4")

fashion5 = Product.create!(name:"Coach Crossbody Bag Saddle Leather Cross Body",
description:"Leather
Refined pebble leather
Inside multifunction pockets
Snap closure, fabric lining, Outside zip pocket
Adjustable strap with 22 inches drop for shoulder or crossbody wear
7 3/4' (L) x 6 3/4' (H) x 3' (W)'",
department:"fashion",
price:244.62)
file15 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/fashion/fashion5.jpg")
fashion5.photo.attach(io:file15, filename:"fashion5")

fashion6 = Product.create!(name:"Ross-Simons 0.25 ct. t.w. Diamond Openwork Bolo Bracelet in Sterling Silver",
description:" DIAMONDS + STERLING SILVER — .25 ct. t.w. diamond openwork bolo bracelet in sterling silver. Polished finish. Length adjusts to fit most wrists. 1/2 in. wide. Features a 1.7mm wheat chain with 4mm end beads.
THE FINISHING TOUCH — With its vintage-inspired design, this diamond openwork bolo bracelet adds a feminine accent to any style. Pair it with your casual or formal attire.
ROSS-SIMONS QUALITY — Treat yourself to the luxury of Ross-Simons fine jewelry. Whether your selection is made of 14kt gold, 18kt gold or gorgeous sterling silver, our jewelry always makes a lasting statement.
THE PERFECT GIFT FOR HER — This is the ideal gift for your sister, daughter, mom, wife, niece, aunt, best friend, girlfriend — or yourself! Whether she prefers modern or traditional jewelry, Ross-Simons has a wide selection of bracelets, earrings, necklaces and rings to choose from.
GIFT BOX INCLUDED — Ross-Simons jewelry arrives beautifully packaged in a gift box, ready to delight for any occasion, including birthdays, Christmas, Mother’s Day, anniversaries, 
Valentine’s Day, weddings, graduations and much more! Due to the naturally occurring characteristics of diamonds, 
each is unique and may exhibit imperfections such as inclusions, blemishes and cloudiness, as well as color variations.",
department: "fashion",
price: 169)
file41 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/fashion/fashion6.jpg")
fashion6.photo.attach(io:file41, filename:"fashion6")



# Fitness
fitness1 = Product.create!(name:"Victor Fitness Eco Friendly Yoga mat Made from a Premium TPE Material That Provides Non-Slip Texture Perfect for Indoor and Outdoor Workouts. Great for hot Yoga, Pilates, and Bikram",
description:"Weighs half as much as traditional Yoga Mats (2.5 .lbs), making it perfect for travel or on the go life styles
The breathable material makes this mat perfect for all forms of yoga, especially Bikram, Vinyasa, Ashtanga and various types of Hot Yoga
Double layer structure design provides optimal grip, excellent cushioning and double-sided non-slip texture, best suitable to practice many forms of Yoga.
The subtly textured surface prevents hands and feet from slipping out of position so you can hold poses no matter how vigorous your practice gets.
Made of SGS certified TPE material which is non-slip, odor-less and excellent in cushioning, unlike those cheap & traditional non-green PVC, NBR or EVA yoga mats.",
department:"fitness",
price:29.99)
file16 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/fitness/Fitness1.jpg")
fitness1.photo.attach(io:file16, filename:"fitness1")

fitness2 = Product.create!(name:"Apple Watch Series 5 (GPS, 44mm) - Gold Aluminum Case with Pink Sport Band ",
description:"GPS
Always-On Retina display
30% larger screen
Swimproof
ECG app
Electrical and optical heart sensors
Built-in compass
Elevation
Emergency SOS
Fall detection",
department:"fitness",
price:239)
file17 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/fitness/fitness2.jpg")
fitness2.photo.attach(io:file17, filename:"fitness2")

fitness3 = Product.create!(name:"Exercise Workout Bands, Resistance Bands for Women, 3 Levels Booty Bands for Legs and Butt",
description:"Resistance bands for women, 4 set elastic bands for legs and butt are non slip and high resistant, without reduce its elasticity after repeated use and exercise
Booty bands for variety of exercise, exercise resistance bands assist you in various exercises, such as p10x, crossfit, yoga, insanity, pilates, hot yoga, and beach body workouts
Exercise bands with backpack, portable booty resistance bands are easy to use and carry in anywhere, home, gym, outdoors or travel
Exercise bands for working out, fabric resistance booty bands for women can help you building full perfect body and legs faster
Resistance bands set, it is 4 different resistance levels of light, medium and heavy, no worry about the hip bands too stretchy or too big
",
department:"fitness",
price:16.99)
file18 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/fitness/fitness3.jpg")
fitness3.photo.attach(io:file18, filename:"fitness3")

fitness4 = Product.create!(name:"GalSports Exercise Ball (45cm-75cm), Yoga Ball Chair with Quick Pump, Stability Fitness Ball for Core Strength Training & Physical Therapy",
description:"🎄 BURST RESISTANT & SAFE DEFLATION - Our exercise ball is safety guaranteed with the honey comb structure, so even if you accidentally pierce the yoga ball, you will never fall to the ground immediately. This structure means the air would be released little by little, therefore, this anti-burst and slow deflation design makes the stability ball so much safer.
⛄ Anti Slip Material- The non-slip lines offer this equipment more friction, which means you can not only practice at home or in the gym, but also in places like outdoors or open spaces where the ground conditions are tougher. And rather than invest in a large, expensive gym machine, going for a smaller and more economical option like the fitness ball is much wiser! Use it to enhance your flexibility, facilitate your stretching, and maintain the stability during your practice of Yoga or Pilates!
🎁 Excellent Quality Material & Weight Capacity - Amazingly high weight capacity of 2,000 lbs. Professional GYM grade PVC: harmless to humans and pets alike, safely certified by SGS, BPA-free, latex-free and durable. Whether used as a pregnancy ball, a physio ball, a fun bouncy ball for your kids, or a professional ball for physical therapy, it would never fail you! Enjoy the soft and comfortably elastic texture as you press it down.
🎈 Sitting Posture Correction& Massage: This inflatable balance ball can be effectively served as a multifunctional Office Ball Chair. It constantly reminds you of a good sitting posture as your various body parts actively make subtle adjustments to stay in balance, which makes you automatically sit up nice and straight, increasing overall blood circulation. The soft PVC surface produces a massaging effect to alleviate your fatigue while working in front of the desk.
🎅 EASY TO INFLATE – Conveniently inflatable, comes with a quick inflation foot pump, a plug remover, a measuring tape, 2 air stoppers, and detailed instructions. Available in 4 sizes: 45cm, 55cm, 65cm, and 75cm to cater to your specific needs. Make the purchase decision based on your individual height. Also make sure you can comfortably hold the gym ball of the size chosen with your hands and squeeze it in between your feet conveniently if these moves will be often practiced.",
department:"fitness",
price:17.99)
file19 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/fitness/fitness4.jpg")
fitness4.photo.attach(io:file19, filename:"fitness4")

fitness5 = Product.create!(name:"NordicTrack Commercial Studio Cycle",
description:"30-Day iFIT Family Membership Included; Stream live & on-demand workouts on your equipment, choose Global Workouts & Studio Classes; Add up to 5 users; Elite trainers adjust your equipment ($39 value)
22 inches Interactive HD Touchscreen Display streams live & on-demand iFIT workouts directly to your equipment, provides easy stats tracking; Adjustable display allows for 360-degree screen rotation
Automatic Trainer Control; -10 to 20 percent LIVE Incline Matching technology; 24 digital resistance levels for complete workout control; iFIT Trainers auto-adjust your resistance and incline
SMR Silent Magnetic Resistance delivers a smooth, quiet workout with every use; Adjustable leveling feet stabilize your bike; (2) 3 Lb. dumbbells for cross-training on your bike
350-pound user weight capacity; Protected with a 10-year frame warranty, 2-year parts warranty, and 1-year labor warranty; 59” H x 22” W x 60” L",
department:"fitness",
price:1798)
file20 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/fitness/fitness5.jpg")
fitness5.photo.attach(io:file20, filename:"fitness5")

# Home Decor
homedecor1 = Product.create!(name:"Wood Home Sign for Wall Decor Wooden Home Letters with Wreath Artificial Eucalyptus Modern Decorative Hanging Home Letters Decor Farmhouse Home Sign for Living Room Kitchen Christmas Housewarming Gift",
description:"👍GORGEOUS & CHANGEABLE HOME DECORATION: Welcome your guests with MAYICIVO Decorative Wood Home Sign for Wall Decor with Artificial Eucalyptus wreath, bringing a comfortable, welcoming and warm atmosphere to your home. Perfect home accessories. If you love to decorate for the season you can just change out the wreath with a seasonal one, festival one, a clock, etc. Perfect for all season and all holidays, such as spring, summer, fall, winter, birthday, Christmas, Anniversary, etc.
🥇DURABLE & RELIABLE QUALITY: The home sign with wreath comes with wood letters 'H', 'M', 'E' and artificial eucalyptus greenery wreath for 'O'. The wood home letters for wall decor is made of high-quality, durable MDF wood, sturdy, thick, no breaks and no fading. The vivid-looking wreath is made of high-quality cloth and plastic, silk , non-toxic, looks natural and never wither and fall. The whole set enhance warmth and charming feeling to your home.
🎉EASY MOUNTING & PERFECT SIZE：The wall hanging home sign is easy to hang with two sawtooth hanger on the back of each letter and hanging hole of the the wreath. The letters can be showcased horizontally, vertically, tabletop display or any way you'd like. Size: Letter 'H': 9.8''H x 9.3''W x 0.8''THK; Wreath 'O': 13.8'' Diameter; Letter 'M': 9.8''H x 10.2''W x 0.8''THK; Letter'E': 9.8''H x 8.2''W x 0.8''THK. Totally a gorgeous addition to any room in your house!
🐾WIDE APPLICATION: The wooden home letters with wreath is simple and elegant wall art and a great addition to any decor, suitable for home indoor and outdoor decoration, beautiful decor for the wall of the living room, entryway, fireplace, kitchen, dinning room, corridor, wedding, party or anywhere in your home. Not only add warmth and beauty with this gorgeous home sign decor, but also create comfortable and inviting feeling to your home. A great addition to your modern or farmhouse home!
🎁FABULOUS GIFT IDEA: Passionately designed, cut and engraved, this home wall decor Sign with elegant design and artificial Artificial Eucalyptus wreath, great for home decoration, matching with most home styles, will make a special housewarming gift, anniversary gift, birthday or Christmas gift for yourself, family, friends, couples or new neighbor! Any issue with our wood home letters decor, feel free to tell us directly for prompt replacement or refund.",
department:"homedecor",
price:32.99)
file21 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/home+decor/homedecor1.jpg")
homedecor1.photo.attach(io:file21, filename:"homedecor1")


homedecor3 = Product.create!(name:"Well Woven Fairmont Huntington Retro Marble Border Black Glam 7'10' x 9'10' Area Rug",
description:"Abstract geometric patterns accented with shimmer yarn.
Made of stain-resistant synthetic fiber (100% heat set polyester pile).
Understated monochromatic colors to match modern decor.
Shed free yarn.
Safe for wood floors.",
department:"homedecor",
price:200.88)
file23 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/home+decor/homedecor3.jpg")
homedecor3.photo.attach(io:file23, filename:"homedecor3")





# Kitchen
kitchen1 = Product.create!(name:"Bodum Chambord French Press Coffee Maker, Glass, 34 Ounce, 1 Liter, Copper", 
description:"French press: Chambord French press brews a premium cup of Coffee in just 4 minutes, Simply add course ground Coffee, hot water and press
Stainless steel: 3-part stainless steel plunger has a mesh filter that helps extract your coffee's aromatic oils and subtle flavors instead of being absorbed by a paper filter
Care Instructions: The beaker, filter and plunger are dishwasher safe. Lid and frame should be hand washed with a non-abrasive sponge.
Maximum flavor: pressed Coffee extracts the perfect amount of essentials oils and acids from the Coffee bean for maximum flavor; The preferred method for brewing for Coffee enthusiasts everywhere
Servings: this premium French press Coffee maker makes 8 cups of Coffee, 4oz each
",
department:"kitchen",
price:37.48)
file26 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/kitchen/bodumreplace_.jpg")
kitchen1.photo.attach(io:file26, filename:"kitchen1")

kitchen2 = Product.create!(name:"Staub Cast Iron 5-qt Tall Cocotte - Cherry, Made in France", 
description:"5-quart cocotte for soups, stews, and braises and deep-frying without messy stove splatters. Ideal for cooking tall bone-in cuts, layered dishes, and desserts that rise.
Large capacity and slim profile that doesn’t take up valuable stovetop space and stores efficiently. Textured black matte enamel interior requires no seasoning and ensures exceptional browning, and heat retention and distribution.
Smooth enamel bottom works on all stovetops, including induction.
Heavy weight, tight-fitting lid retains moisture, spikes on the lid create a rain-forest effect evenly returning juices back onto food.
Oven safe up to 500°F. Dishwasher safe, hand wash recommended. Made in France.",
department:"kitchen",
price:199.95)
file27 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/kitchen/kitchen2.jpg")
kitchen2.photo.attach(io:file27, filename:"kitchen2")

kitchen3 = Product.create!(name:"KitchenAid KSM150PSPT Artisan Series 5-Qt. Stand Mixer with Pouring Shield - Pistachio", 
description:"Choose from all the color options to find the one that best matches your style and personality. Important safeguard: Remove Flat Beater, Wire Whip or Dough Hook from Stand Mixer before washing.
The power hub turns your stand mixer into a culinary center with more than 15 optional attachments available.
5-Qt. stainless steel bowl with comfortable handle offers enough capacity to mix dough for 9 dozen cookies or 4 loaves of bread in a single batch. Electrical - 60 Hz.325 Watts
59-Point Planetary Mixing Action means 59 touchpoints per rotation around the bowl for thorough ingredient incorporation.
The tilt-head design allows clear access to the bowl and attached beater or accessory so you can easily add ingredients for a recipe. Hub cover is non-hinged
Powerful enough for nearly any task or recipe, whether you’re stirring wet and dry ingredients together, kneading bread dough or whipping cream.
Includes coated flat beater, coated dough hook, 6-wire whip and 1-piece pouring shield. The flat beater and dough hook are dishwasher-safe.",
department:"kitchen",
price:429.95)
file28 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/kitchen/kitchen3.jpg")
kitchen3.photo.attach(io:file28, filename:"kitchen3")

kitchen4 = Product.create!(name:"Wedgwood with Love Nouveau Indigo Rim 5-Piece Place Setting, White", 
description:"Inspired by Vera Wang's iconic jewelry collection
With love collection characterized by pattern of interlocking rings symbolizing the eternity of love
Updated design interpretation of oversized rings
Chic indigo and platinum color combination
Dishwasher and microwave safe",
department:"kitchen",
price:98.25)
file29 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/kitchen/kitchen4.jpg")
kitchen4.photo.attach(io:file29, filename:"kitchen4")



# maternity
maternity1 = Product.create!(name:"Mother Bee Maternity 3/4 Sleeve Ruched Dress with Empire Waist for Baby Showers or Casual Wear",
description:"95% Polyester 5% Spandex
Tie closure
Wrap maternity dress with 3/4 sleeve and long length made from soft and stretchy material that makes this a perfect seasonal item for Autumn/Fall.
Designed with style and comfort in mind for all stages of pregnancy and postpartum. Show off your beautiful baby bump at your baby shower, thanksgiving dinner, or any formal event! Or add more shine to your everyday wardrove for a casual, yet stylish look.
Care instructions: Wash gentle cycle cold with like colors/do not bleach and dry low/iron low when needed
Some styles and color options imported.",
department:"maternity",
price:39.95)
file31 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/maternity/maternity1.jpg")
maternity1.photo.attach(io:file31, filename:"maternity1")

maternity2 = Product.create!(name:"PharMeDoc Pregnancy Pillow, Grey U-Shape Full Body Pillow and Maternity Support - Support for Back, Hips, Legs, Belly for Pregnant Women",
description:"Our U shaped body pillow helps support your back, hips, knees, neck, and head to help ease discomfort associated with pregnancy, sciatica, fibromyalgia, gastric reflux, and more.
The pregnancy pillow features a detachable extension that can be used as its own full body pillow, or attached the main body pillow for additional back or belly support, making this an excellent pillow for pregnant women and just about anyone else!
This maternity pillow measures 53 inches long, 31 inches wide, and 7 inches high, making this the ideal contoured support pillow for your back, belly, legs, and neck... all in one!
MORE THAN JUST A PILLOW FOR PREGNANT WOMEN - This full body pillow is perfect for ANYONE needing more support, recovering from surgery, or tired of having to use separate pillows to support their head, neck, legs, and back
Try the PharMeDoc U-Shaped maternity pillow today, RISK-FREE. You're covered by our lifetime manufacturer warranty and 100% satisfaction guarantee.",
department:"maternity",
price:42.95)
file32 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/maternity/maternity2.jpg")
maternity2.photo.attach(io:file32, filename:"maternity2")

maternity3 = Product.create!(name:"Maternity Belt Pregnancy Belly Band Waist Abdominal Back Belly Band Support Brace, Beige, One Size",
description:"✅BREATHABLE LIGHTWEIGHT & COMFORTABLE MATERNITY BELT: Our pregnancy support belt is made out of breathable polyester fiber material. With elastic mesh design can increase the breathability of maternity belt. Fully adjustable to accommodate abdominal growth throughout pregnancy, Features new reinforced hooks and loops fabric fasteners, Designed for walking or standing position; Detach the hooks and loops fabric when sitting.
✅CORRECT YOUR POOR POSTURE: During pregnancy period, Pregnancy maternity belt offers you a great back support to keep your back straight and correct your poor posture, protect your back from daily activities. Maternity belly band for pregnancy is designed to help evenly distribute weight around your hip and pelvis, to provide optimum support for your pregnancy belly. Pregnancy belly support belt helps to support your abdominal muscles during pregnancy and postpartum.
✅RELIEVE LOWER BACK PAIN: Our maternity belly wrap supports the excess pregnancy weight to prevent straining your back by lessening spinal pressure effectively. It also will help you support your abdominal area and eliminate back pain when worn and adjusted correctly. Pregnancy support maternity belt gives enough stretch and compression to reduce bladder pressure and distribute baby's weight more evenly.
✅MULTIFUNCTIONAL FOR PREGNANCY & POSTPARTUM: Our maternity band are 3-in-1 set, When you are pregnant, our belly band can be used as pregnancy belly support band to help support your belly and relieve pain in your hip, sacroiliac and pelvic. After delivering, it can also be used as a postpartum recovery belt to tighten your enlarged belly caused by pregnancy.help you recover a good figure after postpartum.
✅ADJUSTABLE PREGNANCY BELT: With the adjustable design of pregnancy band, ease to take on and off by yourself. According to your needs, you can adjust its size in the different trimester period to create the most comfortable situation for you and your baby. Give you bring a comfortable and wonderful pregnancy experience.",
department:"maternity",
price:18.99)
file33 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/maternity/maternity3.jpg")
maternity3.photo.attach(io:file33, filename:"maternity3")

maternity4 = Product.create!(name:"BirthBag - Pre Packed Maternity Labor and Delivery Hospital Birth Bag Gift Set for New Mom and Baby (Large Tote)",
description:"The BirthBag contains lots of essentials and a few special extras that you will need for your maternity hospital bag. Just add your hospital notes, clothes and some drinks and snacks and you are all set.
This Birth Bag is designed for labor and one night in hospital after birth.
Why spend extra time and money on lists when you can find all your mom to be and baby essentials in one place.
Perfect for a baby shower gift or mom to be present",
department:"maternity",
price:69.99)
file34 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/maternity/maternity4.jpg")
maternity4.photo.attach(io:file34, filename:"maternity4")




# smart-home
smarthome1 = Product.create!(name:"Shark AV2001 AI Robot Vacuum with Self-Cleaning Brushroll, Object Detection, Advanced Navigation, Home Mapping, Perfect for Pet Hair, Compatible with Alexa, Gray",
description:"POWERFUL CLEANING PERFORMANCE: Incredible suction picks up all kinds of dirt and debris and in UltraClean Mode, you get 30% better carpet cleaning (vs. RV1100AE single pass coverage, tested with sand on level loop).
ON-DEMAND DEEP CLEANING: Select UltraClean Mode in the SharkClean app to target specific rooms, high-traffic zones, or spots for multi-directional deep cleaning coverage.
PERFECT FOR HOMES WITH PETS: With powerful suction and Shark’s self-cleaning brushroll, the robot picks up pet hair and removes it from the brushroll as it cleans.
PRECISION HOME MAPPING: LIDAR technology quickly and accurately maps your home so you can set up cleaning areas and No-Go Zones in the SharkClean app.
DETECTS & AVOIDS OBJECTS: AI Laser Navigation ensures total home coverage with precise row-by-row cleaning, day or night, while detecting and avoiding objects 4 inches high or taller.
COMPLETE HANDS-FREE CONTROL: Set a cleaning schedule, initiate on-demand cleaning, or activate UltraClean Mode—all with sound of your voice, using Amazon Alexa or Google Assistant.
CONTINUOUS CLEANING CONTACT: Shark’s innovative PowerFins brushroll digs deep into carpets and directly engages floors for incredible cleaning.",
department:"smarthome",
price:408)
file36 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/smart-home/smarthome1.jpg")
smarthome1.photo.attach(io:file36, filename:"smarthome1")

smarthome2 = Product.create!(name:"Google Nest Thermostat - Smart Thermostat for Home - Programmable Wifi Thermostat - Snow",
description:"ENERGY STAR certified smart thermostat for home that helps you save energy and stay comfortable
The Nest Thermostat is designed to work without a C wire in most homes, but for some systems, including heating only, cooling only, zone controlled, and heat pump systems, you’ll need a C wire or other compatible power accessory
Nest Thermostat turns itself down when you leave, so you don’t waste energy heating or cooling an empty home
Programmable thermostat that lets you create an energy efficient schedule in the Google Home app on your Android or iPhone
Remote control lets family members change the thermostat temperature from anywhere on a phone, laptop, or tablet[1]
Savings Finder looks for more ways your thermostat can help you save, and suggests tweaks to your schedule in the app; check with your energy provider to learn more about rebates and more ways to save on a Nest thermostat
Smart thermostat with HVAC monitoring, which looks out for your heating and cooling systems; sends an alert if something doesn’t seem right, along with helpful reminders to make maintenance easier[2]
",
department:"smarthome",
price:119)
file37 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/smart-home/smarthome2.jpg")
smarthome2.photo.attach(io:file37, filename:"smarthome2")

smarthome3 = Product.create!(name:"Introducing Fire TV Stick 4K Max streaming device, Wi-Fi 6, Alexa Voice Remote (includes TV controls)",
description:"Our most powerful streaming stick - 40% more powerful than Fire TV Stick 4K, with faster app starts and more fluid navigation.
Support for next-gen Wi-Fi 6 - Enjoy smoother 4K streaming across multiple Wi-Fi 6 devices.
Cinematic experience - Watch in vibrant 4K Ultra HD with support for Dolby Vision, HDR, HDR10+ and immersive Dolby Atmos audio.
Endless entertainment - Stream more than 1 million movies and TV episodes. Watch favorites from Netflix, Prime Video, Disney+, Peacock, and more, plus listen to millions of songs. Subscription fees may apply.
Live and free TV - Watch live TV, news, and sports with subscriptions to SLING TV, YouTube TV, and others. Stream for free with IMDb TV, Pluto TV, Tubi, and more.
Alexa Voice Remote - Search and launch content with your voice. Get to favorite apps quickly with preset buttons. Control power and volume with one remote.
Do more with your smart home - View the front door camera without stopping your show using Live View Picture-in-Picture. Ask Alexa to check the weather or dim the lights.
Game on - Fluid gameplay and fast-rendering graphics with a 750Mhz GPU. Access popular games with a Luna cloud gaming subscription.",
department:"smarthome",
price:29.99)
file38 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/smart-home/smarthome3.jpg")
smarthome3.photo.attach(io:file38, filename:"smarthome3")

smarthome6 = Product.create!(name:"Introducing Amazon Glow, Interactive Projector + Video Calling, Designed for Togetherness, with Tangram Bits, Kids 3+
",
description:"Introducing Amazon Glow - A new interactive projector and video-calling device designed to build rich family connections by transforming the way children bond with remote loved ones.
Read, play, draw together - The included 1 year of Amazon Kids+ with purchase gives access to thousands of books, dozens of games and visual arts activities, and more. Your subscription will then automatically renew every month starting at just $2.99 per month plus applicable tax. You may cancel at any time by visiting the Amazon Parent Dashboard or contacting Customer Service.
This bundle contains Amazon Glow (not a toy) and Tangram Bits.
2-year worry-free guarantee - If it breaks, return it, and we’ll replace it for free.
Physical meets digital – Enjoy a hands-on learning experience with Tangram Bits, and transform favorite toys into digital stickers with scanning.
Kid-friendly and private - Enjoy a virtual environment for kids ages 3+ with curated, age-appropriate content. Plus, instantly disable cameras and microphones on the device by simply closing the privacy shutter.
Easy to setup and connect - Use the free Amazon Glow app, available on select iOS, Android, and FireOS devices, to setup the child's device or to connect with little ones. See complete compatibility details in the technical specifications.
",
department:"smarthome",
price:249.99)
filesmarthome6 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/smart-home/smarthome6.jpg")
smarthome6.photo.attach(io:filesmarthome6, filename:"smarthome6")

#gift-set

gift1 = Product.create!(name:"Birthday Gifts for Women,Friend Gifts for Women,Spa Wine Tumbler Holiday Gift Box,Birthday Gift Baskets for Mom,Wife,Sister,Friend (Blue)", 
description:"💖 FEMININE AND STYLISH GIFTSET: Beautifully designed with a modern and elegant touch, our giftbox is made to impress every lady at first sight. Filled with lovely and thoughtful gifts inside, this set once opened will bring her the sweetest surprise and make her feel so loved on her special day.
🎉 COMPLETE SPA GIFTSET FOR YOUR SPECIAL LADY: one 12 oz Blue insulated stainless steel tumbler with a “Not A Day Over Fabulous” quote (with straw and straw cleaner), one premium bath bomb, one Rainbow Cloud Bath Bombs,one premium Lavender bar soap, one 3.9oz Soy Wax lavender scented candle one 'Not a Day Over Fabulous' rose gold compact mirror ,one soft cupcake socks and a card for your special message.
🌸 HIGH QUALITY AND PREMIUM PRODUCTS: Made from nourishing and soothing ingredients such as essential flower oil and 100% soy wax, the giftset all together will bring her a luxurious and sublime home spa experience, where she could pamper and indulge herself with a deluxe floral bubble bath while enjoying her favorite drink for the special occasion.
💖 “This is a perfect gift to make someone feel special”- Imagine the surprise of receiving this gift on her birthday, Valentine’s day, Mother’s day, your anniversary. she could pamper and indulge herself with a deluxe floral bubble bath while enjoying her favorite drink for the special occasion in the fresh fragrance atmosphere.
🎁 PERFECT GIFTBOX FOR EVERY OCCASION: Every item in our set has been selected and curated with thought and care to create the most special moment for that lady in your life. Whether you’re looking to surprise your Wife, Girlfriend, Mom, Best Friend, Sister or co-worker, we will help you show them all the love and appreciation they deserve.",
department:"gift",
price:29.99)
filegift1 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/gift/gift1.jpg")
gift1.photo.attach(io: filegift1, filename:"gift1")

gift2 = Product.create!(name:"Spa Gift Baskets, Spa Luxetique Spa Gifts for Women, 15pcs Spa Gift Set Includes Bath Bombs, Essential Oil, Hand Cream, Bath Salt and Luxury Tote Bag, Gifts Set for Women", 
description:"🛀 Nourishing Spa Gift Basket - The luxury 15pc bath set moisturize dry skin deeply and lastingly with the natural and nourishing ingredients.
🛀 Essential Oil - High-quality, 100% natural tea tree essential oil can help moisturize and soothe the skin and repair acne. When used with an aroma diffuser, its special and clean fragrance will make you feel relaxed and calm.
🛀 Luxurious 15pc Home Spa Set - Item includes: Shower Gel, Bubble Bath, 6 Soap Petals, Hand Cream, Body Lotion, 2 Jelly Bath Bombs, Body Butter, Bath Salt, Essential Oil, Shampoo Bar, Pouf Sponge, Shower Cap, Body Brush, Cloth Tote Bag.
🛀 Beautiful Gift Tote Bag - Our beautiful gift bag of bath is made of durable burlap and oxford cloth. The tote bag can be used in many different ways, such as going shopping, dating and running errands.
🛀 Special Bath Sets for Her - Finding a way to win woman’s heart? Our beautiful packaging and high-quality bath and body daily care products are the perfect gift for your Mom, Sister, Girlfriend or Wife. Also, this bath set makes a wonderful present for Birthdays, Holidays, Anniversaries, Christmas, Mother’s Day and Valentine’s Day.",
department:"gift",
price:39.96)
filegift2 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/gift/gift2.jpg")
gift2.photo.attach(io: filegift2, filename:"gift2")

gift3 = Product.create!(name:"Candles 12 Pack Scented Candles Gift Set for Women , Candles for Home Scented Soy Wax Aromatherapy Candle Sets 2.5 Oz Birthday Gift Mother Gift Christmas Gifts for Women Perfect Gifts for Her…", 
description:"Scented Candles Set 12 Natural Fragrances: Lavender, Mediterranean Fig, Bergamot, Strawberry, Spring, Jasmine, Rose, Gardenia Peppermint, Peony Cherry Blossom, English Pear &Freesia, Wood Sage & Sea Salt Use Natural Essential oil The proportion of essential oils is as high as 7%, The scent is long-lasting and scented through the whole process.
Candles for Home Scented: 2.5oz scented candle, Working hours are15 hours. 8 Pack More than 120hours in total. Trimming the wick to increase time and Uniform combustion.
Soy Wax Candles: 100% Soy Wax and Natural fiber wick provide a clean and uniform combustion process. No black smoke. Does not contain any harmful chemicals or additives, a great choice for meditation, yoga, dance, aromatherapy, general relaxation, and stress relief.
Candles for Home Portable And Exquisite Jar： Each scented candle has a jar with exquisite artistic patterns, suitable for decorating your house or storing small things after use. For example, jewelry earrings or decorative storage container flower pots.
Perfect Candles Gift for Women Packaging： The candle gift set comes with a beautiful gift box, suitable for any holiday or special event, such as Mother’s Day, Father’s Day, Valentine’s Day, Children’s Day, Anniversary, Thanksgiving, Birthday Gifts, Christmas, Teachers, Ideal gift for female friends.",
department:"gift",
price: 24.99)
filegift3 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/gift/gift3.jpg")
gift3.photo.attach(io: filegift3, filename:"gift3")

gift4 = Product.create!(name:"Gucci Bloom for Women 3 Piece Set Includes: 3.3 oz Eau de Parfum Spray + 3.3 oz Body Lotion + 0.25 oz Eau de Parfum Fragrance Rollerball", 
description:"Gucci Bloom for Women Set
Gucci Bloom for Women 3 Piece Set Includes:
3.3 oz Eau de Parfum Spray + 3.3 oz Body Lotion + 0.25 oz Eau de Parfum Fragrance Rollerball.
Type: Eau De Parfum,Lotion
",
department:"gift",
price: 147.95)
filegift4 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/gift/gift4.jpg")
gift4.photo.attach(io: filegift4, filename:"gift4")

gift5 = Product.create!(name:"Estee Lauder 2021 Holiday Gift Set $550 Resilience Multi-effect Creme", 
description:"29 Beauty Essentials, inlcude: 2 Advanced Night Repair Face Serums, full-size (1 oz./30ml) and deluxe travel size (.24 oz./7ml); 2 Advanced Night Repair Eye Supercharged Complex Gel Cremes, full-size (.5 oz./15ml) and deluxe travel size (.17 oz./5ml); 2 Resilience Multi-Effect Cremes, full-size (1 oz./30ml) and deluxe travel size (.24 oz./7ml); 2 Pure Color Envy Palettes in CANDY GLOW (9 shades) and CANDY GLAM (9 shades)—18 essential shades in all for eyes and cheeks (total net wt. for each palette .18 oz./6g) .1 oz./3.7g 1 Full-Size Sumptuous Extreme Mascara, (.27 oz./8ml) 2 Full-Size Pure Color Envy Lipsticks, (.12 oz./3.5geach) in 539 Excite and 111 Tiger Eye 1 Full-Size Eye Makeup Remover, (3.4 oz./100ml) Train Case",
department:"gift",
price:124.88)
filegift5 = URI.open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/gift/gift5.jpg")
gift5.photo.attach(io: filegift5, filename:"gift5")


# cart
quantity1 = 1
quantity2 = 2
quantity3 = 3
quantity4 = 4
quantity5 = 5

michelleCart = Cart.create(user_id: michelle.id, product_id: kitchen1.id, quantity: quantity1)
preselyCart = Cart.create(user_id: presley.id, product_id: smarthome1.id, quantity: quantity1)
harshaCart = Cart.create(user_id: harsha.id, product_id:smarthome2.id, quantity: quantity2)
jingCart = Cart.create(user_id: jing.id, product_id:beauty2.id, quantity: quantity2)

#reviews
review1 = Review.create(user_id: michelle.id, product_id: kitchen2.id, rating: quantity1, headline:"looks pretty", body:"hello, this is perfect")
review2 = Review.create(user_id: jing.id, product_id: kitchen2.id, rating: quantity5, headline:"not bad", body:"hello, this is perfect")
review3 = Review.create(user_id: harsha.id, product_id: kitchen2.id, rating: quantity4, headline:"ha?",body:"hello, this is perfect")
review7 = Review.create(user_id: daniel.id, product_id: kitchen2.id, rating: quantity4, headline:"good quality",body:"hello, this is perfect")


review1 = Review.create(user_id: michelle.id, product_id: smarthome1.id, rating: quantity1,  headline:"looks pretty",body:"hello, this is perfect")
review2 = Review.create(user_id: jing.id, product_id: smarthome1.id, rating: quantity2, headline:"not bad",body:"hello, this is perfect")
review3 = Review.create(user_id: harsha.id, product_id: smarthome1.id, rating: quantity3, headline:"not bad",body:"hello, this is perfect")


review5 = Review.create(user_id: perry.id, product_id: beauty2.id, rating: quantity5, headline:"not bad", body:"hello, this is perfect")
review6 = Review.create(user_id: presley.id, product_id: beauty2.id, rating: quantity5, headline:"looks pretty", body:"hello, this is perfect")
review7 = Review.create(user_id: daniel.id, product_id: beauty2.id, rating: quantity5, headline:"not bad", body:"hello, this is perfect")

review1 = Review.create(user_id: michelle.id, product_id: homedecor2.id, rating: quantity1, headline:"not bad",body:"hello, this is perfect")
review2 = Review.create(user_id: jing.id, product_id: homedecor2.id, rating: quantity2,  headline:"looks pretty",body:"hello, this is perfect")
review3 = Review.create(user_id: harsha.id, product_id: homedecor2.id, rating: quantity3, headline:"good quality",body:"hello, this is perfect")


review1 = Review.create(user_id: michelle.id, product_id:kitchen5.id, rating: quantity1, headline:"good quality",body:"hello, this is perfect")
review2 = Review.create(user_id: jing.id, product_id:kitchen5.id, rating: quantity2, headline:"good quality",body:"hello, this is perfect")
review3 = Review.create(user_id: harsha.id, product_id:kitchen5.id, rating: quantity3, headline:"not bad",body:"hello, this is perfect")
review4 = Review.create(user_id: jack.id, product_id: kitchen5.id, rating: quantity4, headline:"not bad",body:"hello, this is perfect")
review5 = Review.create(user_id: perry.id, product_id:kitchen5.id, rating: quantity5, headline:"good quality",body:"hello, this is perfect")
review6 = Review.create(user_id: presley.id, product_id:kitchen5.id, rating: quantity5, headline:"not bad",body:"hello, this is perfect")
review7 = Review.create(user_id: daniel.id, product_id:kitchen5.id, rating: quantity5, headline:"not bad",body:"hello, this is perfect")

review1 = Review.create(user_id: michelle.id, product_id: homedecor4.id, rating: quantity1, headline:"whatever",body:"hello, this is perfect")
review2 = Review.create(user_id: jing.id, product_id: homedecor4.id, rating: quantity2, headline:"whatever",body:"hello, this is perfect")
review3 = Review.create(user_id: harsha.id, product_id: homedecor4.id, rating: quantity3, headline:"whatever",body:"hello, this is perfect")
review4 = Review.create(user_id: jack.id, product_id: homedecor4.id, rating: quantity4, headline:"i need a job",body:"hello, this is perfect")
review5 = Review.create(user_id: perry.id, product_id: homedecor4.id, rating: quantity5, headline:"looks nice",body:"hello, this is perfect")
review6 = Review.create(user_id: presley.id, product_id: homedecor4.id, rating: quantity5, headline:"good quality",body:"hello, this is perfect")
review7 = Review.create(user_id: daniel.id, product_id: homedecor4.id, rating: quantity5,headline:"good quality", body:"hello, this is perfect")

review1 = Review.create(user_id: michelle.id, product_id: baby1.id, rating: quantity1, headline:"good quality",body:"hello, this is perfect")
review2 = Review.create(user_id: jing.id, product_id: baby1.id, rating: quantity2, headline:"good price",body:"hello, this is perfect")
review3 = Review.create(user_id: harsha.id, product_id: baby1.id, rating: quantity3, headline:"looks nice",body:"hello, this is perfect")
review4 = Review.create(user_id: jack.id, product_id: baby1.id, rating: quantity4, headline:"good quality",body:"hello, this is perfect")
review5 = Review.create(user_id: perry.id, product_id: baby1.id, rating: quantity5, headline:"not bad",body:"hello, this is perfect")
review6 = Review.create(user_id: presley.id, product_id: baby1.id, rating: quantity5, headline:"good price",body:"hello, this is perfect")
review7 = Review.create(user_id: daniel.id, product_id: baby1.id, rating: quantity5,headline:"not bad", body:"hello, this is perfect")

review1 = Review.create(user_id: michelle.id, product_id: fashion1.id, rating: quantity1, headline:"not bad", body:"hello, this is perfect")
review2 = Review.create(user_id: jing.id, product_id: fashion1.id, rating: quantity2, headline:"good price", body:"hello, this is perfect")
review3 = Review.create(user_id: harsha.id, product_id: fashion1.id, rating: quantity3, headline:"good quality",body:"hello, this is perfect")
review4 = Review.create(user_id: jack.id, product_id: fashion1.id, rating: quantity4, headline:"looks nice",body:"hello, this is perfect")
review5 = Review.create(user_id: perry.id, product_id: fashion1.id, rating: quantity5, headline:"not bad",body:"hello, this is perfect")
review6 = Review.create(user_id: presley.id, product_id: fashion1.id, rating: quantity5,headline:"good price", body:"hello, this is perfect")
review7 = Review.create(user_id: daniel.id, product_id: fashion1.id, rating: quantity5, headline:"looks nice",body:"hello, this is perfect")

review1 = Review.create(user_id: michelle.id, product_id: fashion2.id, rating: quantity1, headline:"not bad",body:"hello, this is perfect")
review2 = Review.create(user_id: jing.id, product_id: fashion2.id, rating: quantity2, headline:"good price",body:"hello, this is perfect")
review3 = Review.create(user_id: harsha.id, product_id: fashion2.id, rating: quantity3, headline:"looks nice",body:"hello, this is perfect")
review4 = Review.create(user_id: jack.id, product_id: fashion2.id, rating: quantity4, headline:"good quality",body:"hello, this is perfect")
review5 = Review.create(user_id: perry.id, product_id: fashion2.id, rating: quantity5, headline:"size fit", body:"hello, this is perfect")
review6 = Review.create(user_id: presley.id, product_id: fashion2.id, rating: quantity5, headline:"good price",body:"hello, this is perfect")
review7 = Review.create(user_id: daniel.id, product_id: fashion2.id, rating: quantity5, headline:"good quality",body:"hello, this is perfect")

review1 = Review.create(user_id: michelle.id, product_id: fashion5.id, rating: quantity1,headline:"good quality", body:"hello, this is perfect")
review2 = Review.create(user_id: jing.id, product_id: fashion5.id, rating: quantity2, headline:"size fit",body:"hello, this is perfect")
review3 = Review.create(user_id: harsha.id, product_id: fashion5.id, rating: quantity3, headline:"good price",body:"hello, this is perfect")
review4 = Review.create(user_id: jack.id, product_id: fashion5.id, rating: quantity4, headline:"size fit",body:"hello, this is perfect")


review1 = Review.create(user_id: michelle.id, product_id: fashion6.id, rating: quantity1, headline:"good quality",body:"hello, this is perfect")
review5 = Review.create(user_id: perry.id, product_id: fashion6.id, rating: quantity4, headline:"good price",body:"hello, this is perfect")
review6 = Review.create(user_id: presley.id, product_id: fashion6.id, rating: quantity5,headline:"size fit", body:"hello, this is perfect")
review7 = Review.create(user_id: daniel.id, product_id: fashion6.id, rating: quantity5, headline:"size fit",body:"hello, this is perfect")

review4 = Review.create(user_id: jack.id, product_id: homedecor1.id, rating: quantity4, headline:"good quality",body:"hello, this is perfect")
review5 = Review.create(user_id: perry.id, product_id: homedecor1.id, rating: quantity5, headline:"good price",body:"hello, this is perfect")
review6 = Review.create(user_id: presley.id, product_id: homedecor1.id, rating: quantity5, headline:"not bad",body:"hello, this is perfect")
review7 = Review.create(user_id: daniel.id, product_id: homedecor1.id, rating: quantity5, headline:"feel home",body:"hello, this is perfect")

review6 = Review.create(user_id: presley.id, product_id: kitchen1.id, rating: quantity5, headline:"good quality", body:"hello, this is perfect")
review7 = Review.create(user_id: daniel.id, product_id: kitchen1.id, rating: quantity1, headline:"good price",body:"hello, this is perfect")

review1 = Review.create(user_id: michelle.id, product_id: baby4.id, rating: quantity1, headline:"good quality", body:"hello, this is perfect")
review2 = Review.create(user_id: jing.id, product_id: baby4.id, rating: quantity2, headline:"good price",body:"hello, this is perfect")

review6 = Review.create(user_id: presley.id, product_id: baby4.id, rating: quantity5, headline:"good quality",body:"hello, this is perfect")
review7 = Review.create(user_id: daniel.id, product_id: baby4.id, rating: quantity5, headline:"good price",body:"hello, this is perfect")

review1 = Review.create(user_id: michelle.id, product_id: maternity4.id, rating: quantity4, headline:"good quality",body:"hello, this is perfect")
review2 = Review.create(user_id: jing.id, product_id: maternity4.id, rating: quantity5, headline:"material is good",body:"hello, this is perfect")
review5 = Review.create(user_id: perry.id, product_id: maternity4.id, rating: quantity5, headline:"good price",body:"hello, this is perfect")
review6 = Review.create(user_id: presley.id, product_id: maternity4.id, rating: quantity5, headline:"not bad",body:"hello, this is perfect")
review7 = Review.create(user_id: daniel.id, product_id: maternity4.id, rating: quantity5, headline:"color is nice",body:"hello, this is perfect")