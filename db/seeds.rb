# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
demo = User.create!(name: 'Demo', email:"plshireme@company.com", password:"password")

Product.destroy_all
# baby

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
file1 = open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/baby1_.jpg")
baby1.photo.attach(io: file1, filename:"baby1")

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
file2 = open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/baby2.jpg")
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
file3 = open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/baby3.jpg")
baby3.photo.attach(io: file3, filename:"baby3")

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
beauty1.photo.attach(io: open("https://mamazon-seeds.s3.us-west-1.amazonaws.com/beauty1.jpg"), filename:"beauty1")
