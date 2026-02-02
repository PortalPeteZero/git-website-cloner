import waterLeakImg from "@/assets/services/water-leak-detection.jpg";
import pipeInspectionImg from "@/assets/services/pipe-inspection.jpg";
import poolLeakImg from "@/assets/services/pool-leak-detection.jpg";
import drainDetectionImg from "@/assets/services/drain-detection.jpg";
import undergroundImg from "@/assets/services/underground-detection.jpg";
import leakRepairImg from "@/assets/services/leak-repair.jpg";

// Blog-specific images
import poolBucketTestImg from "@/assets/blog/pool-bucket-test.jpg";
import thermalUndergroundImg from "@/assets/blog/thermal-underground-leak.jpg";
import waterMeterImg from "@/assets/blog/water-meter-leak.jpg";
import risingDampImg from "@/assets/blog/rising-damp-wall.jpg";
import poolDiverImg from "@/assets/blog/pool-diver-inspection.jpg";
import lanzaroteWaterHeroImg from "@/assets/blog/lanzarote-water-hero.jpg";
import lanzaroteTraditionalHouseImg from "@/assets/blog/lanzarote-traditional-house.jpg";
import lanzaroteAljibeImg from "@/assets/blog/lanzarote-aljibe-cistern.jpg";
import lanzaroteTankerImg from "@/assets/blog/lanzarote-water-tanker.jpg";
import lanzaroteSystemHouseImg from "@/assets/blog/lanzarote-water-system-house.png";
import lanzaroteSystemDiagramImg from "@/assets/blog/lanzarote-water-system-diagram.png";
import lanzaroteMeterLeakImg from "@/assets/blog/lanzarote-water-meter-leak.png";

// Emergency leak detection images
import emergencyLeakWetFloorImg from "@/assets/blog/emergency-leak-wet-floor.jpg";
import emergencyLeakAcousticImg from "@/assets/blog/emergency-leak-acoustic-detection.jpg";
import emergencyLeakExcavationImg from "@/assets/blog/emergency-leak-excavation.jpg";
import emergencyLeakPipeRepairImg from "@/assets/blog/emergency-leak-pipe-repair.jpg";
import emergencyLeakHoleImg from "@/assets/blog/emergency-leak-hole.jpg";
import emergencyLeakCctvImg from "@/assets/blog/emergency-leak-cctv.jpg";

// Helper to create image placeholders for markdown content
export const BLOG_IMAGES = {
  lanzaroteTraditionalHouse: lanzaroteTraditionalHouseImg,
  lanzaroteAljibe: lanzaroteAljibeImg,
  lanzaroteTanker: lanzaroteTankerImg,
  lanzaroteSystemHouse: lanzaroteSystemHouseImg,
  lanzaroteSystemDiagram: lanzaroteSystemDiagramImg,
  lanzaroteMeterLeak: lanzaroteMeterLeakImg,
  emergencyLeakWetFloor: emergencyLeakWetFloorImg,
  emergencyLeakAcoustic: emergencyLeakAcousticImg,
  emergencyLeakExcavation: emergencyLeakExcavationImg,
  emergencyLeakPipeRepair: emergencyLeakPipeRepairImg,
  emergencyLeakHole: emergencyLeakHoleImg,
  emergencyLeakCctv: emergencyLeakCctvImg,
};

export interface BlogArticle {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  content: string;
  readTime: number;
}

// English blog articles
export const blogArticlesEn: BlogArticle[] = [
  {
    id: 1,
    slug: "master-your-lanzarote-water-system",
    title: "Master Your Lanzarote Water System: The Essential Guide for Residents",
    excerpt: "From aljibes to pumps, understand how Lanzarote's unique water infrastructure works—and how to spot hidden leaks before they cost you. Plus: can you drink the water?",
    date: "2026-01-22",
    author: "Canary Detect",
    category: "Essential Guides",
    image: lanzaroteWaterHeroImg,
    metaTitle: "Lanzarote Water System Guide | Aljibe & Pumps",
    metaDescription: "Essential guide to Lanzarote's water system. Learn how aljibes and pumps work, leak detection challenges, and if tap water is safe.",
    keywords: "Lanzarote water system, aljibe Lanzarote, water pump Lanzarote, can you drink tap water Lanzarote, water meter spinning, leak detection Lanzarote, grupo de presion",
    readTime: 12,
    content: `
## Introduction

For residents of Lanzarote, managing water is a fundamental aspect of daily life, deeply woven into the island's history and infrastructure. Unlike the straightforward mains-fed systems common in many parts of the world, Lanzarote's homes often rely on a unique combination of an underground water tank, known as an **aljibe**, and a pump system. This setup is a direct response to the island's arid climate and historical water scarcity.

However, this traditional system presents modern challenges, particularly when it comes to detecting water leaks. At Canary Detect, we find that many puzzling leak scenarios are rooted in a misunderstanding of how these systems operate. This article explains the history behind Lanzarote's water network, how it functions, and why it makes leak detection a unique challenge.

![Traditional Lanzarote Architecture](/assets/blog/lanzarote-traditional-house.jpg)

*The iconic white, flat-roofed architecture of Lanzarote, set against the volcanic landscape. Modern domestic aljibes are typically filled by tanker rather than rainwater.*

## A History Forged by Scarcity

![Canarian Cistern](/assets/blog/lanzarote-aljibe-cistern.jpg)

*A traditional Canarian cistern (aljibe) in Lanzarote, showing the underground tank access point surrounded by volcanic soil.*

Lanzarote is the driest of the Canary Islands, receiving minimal rainfall and possessing no natural rivers or significant surface water. The term **aljibe** itself comes from the Arabic *al-gúbb*, meaning cistern or well, a technology introduced to the Iberian Peninsula centuries ago to store precious water in arid regions.

Historically, the islanders were masters of water conservation, developing methods to capture every possible drop. This included large-scale public reservoirs (*maretas*) and channels to collect rainwater runoff. While the classic, flat-roofed design of Canarian houses was perfect for channeling rainwater into a household aljibe, the primary method for filling these domestic tanks for many years has been through water tanker delivery, known locally as a *pipa*.

Even with the advent of modern desalination plants in the 1960s, which now supply the entire island, the legacy of water scarcity persists. The mains water supply can be inconsistent, with low pressure and, in some rural areas, scheduled cuts that can leave homes without water for days at a time. As a result, the aljibe and pump system remains an essential component of most households, providing a crucial buffer and ensuring consistent water pressure.

![Water Tanker](/assets/blog/lanzarote-water-tanker.jpg)

*Water tankers (pipas) are still a common sight in the Canary Islands, delivering water to fill domestic aljibes, especially during supply interruptions.*

## How the Aljibe and Pump System Works

A typical domestic water system in Lanzarote consists of three main parts:

1. **The Aljibe:** An underground storage tank, typically made of concrete, that holds the home's primary water reserve. It is filled from the mains supply via a pipe controlled by a float valve.
2. **The Float Valve (Ballcock):** This valve automatically opens to top up the aljibe from the mains when the water level drops and closes when it is full. It functions just like the mechanism inside a toilet cistern.
3. **The Pressure Pump (Grupo de Presión):** Because the mains pressure is often too low for household needs, a pump is used to draw water from the aljibe and deliver it to the taps, showers, and appliances at a consistent, usable pressure.

Many homes also feature a **mains bypass**. This is a branch off the mains supply (after the ballcock feed to the aljibe) that connects directly to the house pipework after the pump, controlled by a valve. In practice, this bypass is often left open, with the pump running as normal. The mains provides a base level of pressure, and the pump "tops up" the pressure to ensure adequate flow throughout the house. If the pump fails, the house still receives water directly from the mains (albeit at lower pressure). This dual-feed arrangement is practical but adds complexity when diagnosing leaks.

![House Context Diagram](/assets/blog/lanzarote-water-system-house.png)

*A typical Lanzarote domestic water system in context: mains water enters via the meter, feeds the underground aljibe through a float valve, and the pressure pump (above ground) draws water up to supply the house. The bypass valve allows mains water to supplement the pump supply.*

![Schematic Diagram](/assets/blog/lanzarote-water-system-diagram.png)

*Schematic view: mains water feeds the aljibe via a float valve, while a bypass branch (often left open) provides direct mains pressure. The pump draws from the aljibe to boost pressure, and both supplies combine before reaching the house.*

## The Unique Challenge of Leak Detection

This system creates specific challenges when trying to identify a water leak, often leading to confusing signals from the water meter.

### Mystery 1: The Intermittent Water Meter

A common assumption is that a leak will cause the water meter to spin continuously. With an aljibe system, this is rarely the case. If you have a leak inside your house (e.g., a dripping tap or a faulty toilet), the water is being lost from the **pump-fed side** of the system. The water is coming from the aljibe, not directly from the mains.

Your water meter will only spin for brief periods when the float valve in the aljibe opens to replenish the water that has been lost. This means a significant leak can go unnoticed, as the meter appears to be static most of the time, only to spin intermittently as the tank tops itself up.

### Mystery 2: The Constantly Spinning Meter (That Isn't a Leak)

Conversely, a constantly spinning meter doesn't always mean you have a leak in your property's pipework. The most common culprit in this scenario is a **faulty float valve** in the aljibe itself.

If the valve fails to close properly when the tank is full, water from the mains will continuously trickle in and overflow from the aljibe. However, you are unlikely to see water pooling on the surface. Most aljibes are not fully watertight all the way up. The upper section, typically above the 80-90% full level or above where the ballcock sits, is often not sealed. When water rises past this point, it simply seeps into the surrounding ground and disappears under your patio tiles, completely unnoticed. To an observer, the meter spins non-stop, creating the perfect illusion of a major leak. In reality, it is a simple mechanical failure in the tank's filling mechanism.

![Water Meter Leak Detection](/assets/blog/lanzarote-water-meter-leak.png)

*A spinning leak indicator on a water meter can be caused by a true leak or a faulty float valve in the aljibe.*

### The Telltale Pump

One of the clearest signs of a leak in an aljibe system is the behaviour of the pump itself. If no one is using water, the pump should stay silent. A leak on the pump-fed side will slowly drain the pressure in the system, causing the pump to kick in periodically to restore it.

### The Non-Return Valve Factor

A critical but often overlooked component in these systems is the **non-return valve** (also called a check valve). These are typically installed at the water meter and on the mains bypass pipework. Their job is to prevent water from flowing backward into the mains supply.

When a non-return valve fails, the higher pressure from the pump can push water back toward the mains. This causes the pump to run frequently as it tries to maintain pressure against a system that is effectively "leaking" water back the way it came. The symptoms mimic a genuine leak: the pump cycles on and off, and the water meter spins.

You might assume that water flowing backward would cause the meter to spin in reverse, reducing your bill. In practice, the opposite is usually true. Water meters are designed to measure forward flow, and when water oscillates back and forth due to pressure fluctuations, the meter tends to register more forward movement than backward. The result is a higher water bill, not a lower one.

### The Bypass Complication

If your property has a mains bypass, it adds another layer of complexity. A leak could exist on the mains-fed side or the pump-fed side, and isolating the source requires systematically shutting off different parts of the system to observe the meter's behaviour. This can be a challenging process for the average homeowner.

## Conclusion: Know Your System

Understanding whether your water comes directly from the mains or via an aljibe and pump is the first and most critical step in diagnosing a potential leak in Lanzarote. The behaviour of your water meter can be misleading if you don't know what it's connected to.

If you suspect a leak but can't make sense of what your water meter is telling you, the unique characteristics of your water system are likely the reason. Before you face a high water bill or potential property damage, it's essential to get an expert diagnosis.

## Can You Drink the Water?

This is one of the most frequently asked questions by visitors and new residents, and the answer is not a simple "yes" or "no." It requires understanding the difference between the water entering your property and the water coming out of your tap.

### The Official Stance: Yes, It's Potable

Legally and technically, the water supplied by Canal Gestión Lanzarote is safe to drink. It is desalinated seawater that undergoes reverse osmosis, remineralisation (adding calcium and magnesium), and chlorination. It must meet strict sanitary criteria set by **EU Directive 2020/2184** on the quality of water intended for human consumption.

Regular testing is conducted to ensure it meets these standards at the point of supply. Experts from the University of Las Palmas de Gran Canaria and local health inspectors have confirmed that the mains water is safe, often containing less plastic residue than bottled water.

### The Reality: It Depends on Your Tank

While the water is safe when it passes through the meter, the safety of what comes out of your tap depends entirely on where it has been stored.

In our years at Canary Detect, we have inspected the inside of countless aljibes. The reality is stark:

- **The Good:** Some tanks are pristine, well-maintained, and perfectly safe.
- **The Bad:** Others are sites of "pure horror" that would make you run to the toilet just looking at them. We have seen tanks with sediment buildup, root intrusion, crumbling concrete, and even drowned pests.

If your tap water comes from an aljibe that hasn't been cleaned or inspected in years, it may no longer be safe to drink, regardless of its quality at the meter.

### Our Recommendation

If you want to drink tap water (which is cheaper, eco-friendly, and convenient), follow these rules:

1. **Bypass the Tank for Drinking:** The safest option is to have a dedicated "drinking water tap" in your kitchen that is plumbed **directly to the mains**, bypassing the aljibe and pump entirely. This ensures you are drinking the regulated, safe water directly from the supply network.
2. **Maintain Your Aljibe:** If you must use tank water, treat your aljibe like the critical infrastructure it is. It requires regular inspection, cleaning, and waterproofing to prevent contamination.
3. **Check the Condition:** Don't assume your tank is clean. Have it inspected. If it's in poor condition, use it only for washing and flushing until it can be professionally remediated.

## Still Unsure? Don't Guess.

95% of leaks in Lanzarote are hidden. No visible signs, no obvious clues. Before you pay for a full survey, get a definitive answer with our **Free Leak Confirmation Test**.

**Contact Canary Detect** for professional leak detection across Lanzarote. We serve Arrecife, Puerto del Carmen, Playa Blanca, Costa Teguise, Yaiza, and all areas of the island.

[Get a free leak confirmation test →](/services/free-leak-confirmation)
    `
  },
  {
    id: 2,
    slug: "how-to-check-for-pool-leaks-lanzarote",
    title: "How to Check for Pool Leaks: A Complete Guide for Lanzarote Pool Owners",
    excerpt: "Is your swimming pool losing water? Learn the bucket test, dye test, and when to call professional leak detection services in Lanzarote.",
    date: "2026-01-15",
    author: "Pete Ashcroft",
    category: "Pool Care",
    image: poolBucketTestImg,
    metaTitle: "How to Check for Pool Leaks | Pool Leak Test Lanzarote",
    metaDescription: "Learn how to check for pool leaks with the bucket test and dye test. Swimming pool leak detection tips from Lanzarote experts.",
    keywords: "how to check for pool leaks, pool leak test, swimming pool losing water, bucket test pool leak, dye test pool leak, pool leak detection Lanzarote",
    readTime: 8,
    content: `
## Is Your Swimming Pool Losing Water?

If you've noticed your pool water level dropping faster than usual, you're not alone. Many pool owners in Lanzarote face this problem, especially during the hot summer months. But how do you know if it's evaporation or an actual leak?

In this comprehensive guide, we'll show you **how to check for pool leaks** using simple DIY methods, and explain when it's time to call professional leak detection services.

## Understanding Pool Water Loss

Before panicking about a potential leak, it's important to understand that some water loss is normal:

- **Evaporation**: In Lanzarote's warm climate, pools can lose 3-7mm of water per day through evaporation
- **Splash-out**: Active swimming and play can cause significant water loss
- **Backwash**: Filter cleaning removes water from your pool
- **Wind**: Lanzarote's trade winds accelerate evaporation

If you're losing more than 5cm of water per week, you likely have a leak that needs attention.

## The Bucket Test: Your First Step

The bucket test is the most reliable DIY method to determine if your pool is leaking or just evaporating water. Watch this excellent video from Swim University that demonstrates exactly how to perform the test:

<div class="video-thumbnail"><a href="https://www.youtube.com/watch?v=Zqiz4qBJU_g&t=37s" target="_blank" rel="noopener noreferrer" class="video-link group"><img src="https://img.youtube.com/vi/Zqiz4qBJU_g/maxresdefault.jpg" alt="Pool Bucket Test Video - How to Find a Pool Leak" class="video-thumb-img" /><span class="play-button">▶</span><span class="video-caption">🎬 Watch: Pool Bucket Test - How to Find a Pool Leak (YouTube)</span></a></div>

### Step-by-Step Bucket Test

1. **Bring your pool water to normal level** before starting the test
2. **Fill a 5-gallon bucket** with pool water to about one inch from the top
3. **Place the bucket on the first or second step** so the water temperature matches
4. **Mark the water level** inside the bucket with tape or marker
5. **Mark the pool water level** on the outside of the bucket
6. **Wait 24 hours** without using the pool or running any equipment
7. **Compare the levels** - if the pool level dropped more than the bucket level, you have a leak

### Interpreting Your Results

- **Equal drop**: Normal evaporation - no leak detected
- **Pool dropped more**: You have a leak - time for professional leak detection
- **Pool dropped significantly more**: Serious leak requiring immediate attention

## The Dye Test: Locating Visible Leaks

If you suspect a leak near fittings, lights, or visible cracks, the dye test can help confirm:

1. Turn off all pool equipment
2. Let the water become completely still
3. Use food colouring or leak detection dye
4. Squirt dye near suspected areas
5. Watch if the dye is pulled into any cracks or gaps

**Pro tip**: This test works best on calm days with no wind.

## Common Swimming Pool Leak Locations

Based on our experience detecting pool leaks across Lanzarote, here are the most common leak locations:

### Structural Leaks
- Cracks in pool shell
- Expansion joint failures
- Tile and grout deterioration

### Plumbing Leaks
- Underground pipe connections
- Skimmer connections
- Return line fittings
- Main drain gaskets

### Equipment Leaks
- Pump seals
- Filter housing
- Heater connections
- Chlorinator fittings

## Signs You Need Professional Leak Detection

While DIY tests are helpful, some situations require professional equipment:

- **Consistent water loss** despite passing the bucket test
- **Unexplained high water bills**
- **Wet spots** around pool equipment or in your garden
- **Cracks or settling** in pool deck
- **Air bubbles** in the return lines
- **Algae growth** in specific areas (can indicate fresh water intrusion)

## Professional Pool Leak Detection in Lanzarote

At Canary Detect, we use advanced technology to find swimming pool leaks without damaging your pool:

- **Pressure testing** of all plumbing lines
- **Electronic leak detection** for pinpoint accuracy
- **Dye testing** with professional-grade equipment
- **Underwater camera inspection** of pipes and drains

Our **No Find, No Fee guarantee** means you only pay when we locate your leak.

## Preventing Future Pool Leaks

Once your leak is repaired, prevent future problems with these tips:

1. **Regular inspections** of visible fittings and equipment
2. **Proper water chemistry** to prevent deterioration
3. **Prompt repair** of small cracks or chips
4. **Winter maintenance** to prevent freeze damage (rare but possible in Lanzarote's highlands)

## Get Professional Help Today

If you've tried the bucket test and suspect a leak, don't wait. Water leaks waste money and can cause structural damage to your pool and surrounding areas.

**Contact Canary Detect** for professional swimming pool leak detection in Lanzarote. We serve Playa Blanca, Puerto del Carmen, Costa Teguise, Arrecife, and all areas of the island.

[Contact us for a free quote →](/contact)
    `
  },
  {
    id: 3,
    slug: "signs-of-underground-water-leak",
    title: "7 Signs of an Underground Water Leak: What Lanzarote Homeowners Must Know",
    excerpt: "Underground water leaks can go undetected for months. Learn the warning signs and how to detect hidden pipe leaks before they cause major damage.",
    date: "2026-01-08",
    author: "Dave Poxon",
    category: "Tips & Advice",
    image: undergroundImg,
    metaTitle: "Signs of Underground Water Leak | Lanzarote Detection",
    metaDescription: "7 warning signs of underground water leaks. High bills, wet spots, low pressure? Learn to detect hidden pipe leaks in Lanzarote.",
    keywords: "signs of underground water leak, hidden water leak detection, underground pipe leak, water leak under concrete, water meter running when taps off, high water bill leak",
    readTime: 7,
    content: `
## Hidden Water Leaks: The Silent Property Destroyer

Underground water leaks are among the most damaging problems a homeowner can face. Unlike visible leaks, they can go undetected for months or even years, slowly causing structural damage and wasting thousands of euros in water.

In Lanzarote, where water is precious and expensive, detecting underground leaks early is crucial. Here are the **7 warning signs** every homeowner should know.

## 1. Unexplained High Water Bills

The most common first sign of an underground leak is a sudden increase in your water bill without a corresponding increase in usage.

**What to look for:**
- Bill 20% or more higher than usual
- Steady increase over several months
- No change in household water habits

**Pro tip**: Compare your current bill to the same period last year, as seasonal variations can affect usage.

## 2. Water Meter Running When All Taps Are Off

This is one of the most definitive tests for a hidden water leak:

### How to Check Your Water Meter

1. Turn off all water-using appliances
2. Make sure no taps are running
3. Locate your water meter
4. Note the reading or watch the dial
5. Wait 30 minutes without using any water
6. Check the meter again

If the meter has moved, you have a leak somewhere in your system.

## 3. Wet or Soggy Patches in Your Garden

Underground water leaks often surface as unexplained wet areas:

- **Unusually green patches** in otherwise dry lawn
- **Muddy or soft spots** that never dry out
- **Water pooling** on the surface with no obvious source
- **Erosion channels** appearing in landscaping

In Lanzarote's dry climate, persistent wet spots are particularly suspicious.

## 4. Low Water Pressure Throughout the House

A leak in your main supply line can cause noticeable pressure drops:

- **Gradual decrease** in pressure over weeks or months
- **Affects all taps** equally (unlike a fixture-specific problem)
- **Worse during** peak usage times

## 5. Cracks in Walls, Floors, or Foundation

Water undermines foundations and causes structural movement:

- **New cracks** appearing in walls or ceilings
- **Doors and windows** that suddenly stick
- **Uneven floors** or tilting structures
- **Cracks in driveways** or patios near the suspected leak

## 6. Sound of Running Water

Sometimes you can hear underground leaks if you know what to listen for:

- **Hissing or whooshing** sounds near walls or floors
- **Running water sound** when no water is in use
- **Louder at night** when ambient noise is lower

Professional leak detectors use sensitive acoustic equipment to amplify these sounds and pinpoint leak locations.

## 7. Warm Spots on Floors

If you have hot water pipes running under concrete slabs, a leak can create:

- **Warm patches** on tile or concrete floors
- **Localised heating** in specific areas
- **Higher than normal** floor temperature

This is particularly noticeable in air-conditioned properties.

## Why Underground Leaks Are So Dangerous

Ignoring these warning signs can lead to:

- **Massive water bills**: A significant leak can waste thousands of litres per month
- **Foundation damage**: Water erosion undermines structural integrity
- **Mould and mildew**: Persistent dampness creates health hazards
- **Landscape destruction**: Erosion and root damage
- **Legal liability**: If the leak affects neighbouring properties

## Professional Underground Leak Detection

Finding the exact location of an underground leak requires specialist equipment:

### Technology We Use

- **Acoustic listening devices**: Amplify the sound of escaping water
- **Thermal imaging cameras**: Detect temperature differences caused by leaks
- **Tracer gas detection**: Inject harmless gas and detect where it surfaces
- **Ground-penetrating radar**: Map underground pipes and voids

### The Canary Detect Advantage

Our **No Find, No Fee guarantee** means we're confident in our ability to locate your leak. We've invested over €80,000 in the latest detection technology, allowing us to find leaks with centimetre precision.

## What Happens When We Find Your Leak?

Once located, we can:

1. **Mark the exact location** for your chosen contractor
2. **Provide a detailed report** for insurance purposes
3. **Recommend repair options** based on the leak type
4. **Offer repair services** for certain leak types

## Don't Wait: Act on the Warning Signs

Underground water leaks only get worse with time. If you've noticed any of these warning signs, contact us for a professional leak detection survey.

**Canary Detect** serves all of Lanzarote including Arrecife, Puerto del Carmen, Playa Blanca, Costa Teguise, Yaiza, and Tías.

[Get a free quote today →](/contact)
    `
  },
  {
    id: 4,
    slug: "water-meter-running-when-taps-off",
    title: "Water Meter Running When Taps Are Off? Here's What It Means",
    excerpt: "If your water meter keeps spinning with all taps closed, you likely have a hidden leak. Learn how to check and what to do next.",
    date: "2026-01-02",
    author: "Pete Ashcroft",
    category: "Tips & Advice",
    image: waterMeterImg,
    metaTitle: "Water Meter Running When Taps Off | Hidden Leak",
    metaDescription: "Water meter running when taps are off? You have a hidden leak. Learn how to check and get help in Lanzarote.",
    keywords: "water meter running when taps off, hidden water leak, water leak detection, meter spinning no water use, find water leak, leak detection Lanzarote",
    readTime: 6,
    content: `
## The Spinning Meter Mystery

You've turned off every tap, made sure the washing machine isn't running, and checked that no toilets are flushing – but your water meter dial keeps moving. This frustrating situation is a clear indicator that water is escaping somewhere in your system.

Let's explore what this means and how to find the source.

## Confirming You Have a Leak

Before calling for help, perform this simple test:

### The 30-Minute Meter Test

1. **Locate your water meter** (usually in a box near the street or property boundary)
2. **Note the exact reading** including all decimal places
3. **Ensure no water is being used** anywhere on the property
4. **Wait 30 minutes** without using any water
5. **Check the reading again**

If the numbers have changed, you have a leak. The amount of change indicates the severity:

- **Small movement**: Minor leak, but still needs attention
- **Significant movement**: Major leak requiring urgent action
- **Fast spinning**: Serious leak – consider shutting off main supply

## Where Is the Water Going?

Hidden leaks can occur in several locations:

### Inside Your Property
- **Under floors**: Especially concrete slabs
- **Behind walls**: In concealed pipes
- **In ceilings**: If pipes run through upper floors
- **Toilet cisterns**: Silent overflow leaks

### Outside Your Property
- **Underground supply pipes**: Between meter and house
- **Garden irrigation**: Buried pipes and fittings
- **Swimming pool**: Plumbing and shell leaks
- **Water features**: Fountains and ponds

## Quick Checks You Can Do

Before calling professionals, try these simple investigations:

### Check All Toilets
1. Remove the cistern lid
2. Add food colouring to the tank
3. Wait 15 minutes without flushing
4. If colour appears in the bowl, the flapper valve is leaking

### Listen for Leaks
- Put your ear to walls near pipes
- Listen at night when it's quiet
- Check near water heaters and tanks

### Visual Inspection
- Look for damp patches on walls or floors
- Check under sinks and around appliances
- Inspect visible pipes for drips

## Why Hidden Leaks Are Costly

In Lanzarote, water is expensive. A leak that wastes just 1 litre per minute adds up to:

- **1,440 litres per day**
- **43,800 litres per month**
- **525,600 litres per year**

That's not just wasted water – it's wasted money and potential property damage.

## When to Call Professionals

If your meter test confirms a leak but you can't find the source, it's time for professional leak detection.

### What We Bring to the Search

At Canary Detect, we use:

- **Acoustic detection**: Listens for the sound of escaping water
- **Thermal imaging**: Sees temperature changes from leaks
- **Tracer gas**: Finds the exact exit point of leaks
- **Pressure testing**: Isolates sections of your plumbing

Our equipment can pinpoint leaks hidden under concrete, behind walls, or deep underground.

## The Canary Detect Approach

When you call us about a spinning water meter:

1. **We listen** to understand your situation
2. **We inspect** your meter and visible plumbing
3. **We test** using our professional equipment
4. **We locate** the exact leak position
5. **We report** with clear documentation

Our **No Find, No Fee guarantee** means you don't pay unless we find the leak.

## Stop the Spinning Today

A spinning water meter is your property telling you something is wrong. Don't ignore it – the problem will only get worse and more expensive.

**Contact Canary Detect** for professional leak detection across Lanzarote. We serve Arrecife, Puerto del Carmen, Playa Blanca, Costa Teguise, and all areas of the island.

[Book a leak detection survey →](/contact)
    `
  },
  {
    id: 5,
    slug: "damp-walls-causes-solutions",
    title: "Damp Walls in Lanzarote: Causes, Detection & Solutions",
    excerpt: "Damp walls aren't just unsightly – they indicate water intrusion that needs addressing. Learn the common causes and how to fix them.",
    date: "2024-12-18",
    author: "Dave Poxon",
    category: "Tips & Advice",
    image: risingDampImg,
    metaTitle: "Damp Walls Causes & Solutions | Lanzarote Leak Detection",
    metaDescription: "Damp walls in your Lanzarote home? Discover causes from leaking pipes to condensation and how leak detection solves it.",
    keywords: "damp walls, water damage walls, wall leak detection, rising damp, penetrating damp, condensation problems, leak detection Lanzarote",
    readTime: 7,
    content: `
## Why Are My Walls Damp?

Damp walls are a common problem in properties across Lanzarote, but the causes aren't always obvious. What looks like simple condensation could actually be a hidden water leak causing ongoing damage.

Understanding the type of dampness is the first step to solving the problem.

## Types of Wall Dampness

### 1. Rising Damp

Water from the ground rises up through walls by capillary action.

**Characteristics:**
- Affects ground floor walls only
- Tide marks up to 1 metre high
- Salt deposits on wall surface
- Peeling paint and wallpaper

**Common in Lanzarote**: Less common due to dry climate, but can occur in older properties without damp-proof course.

### 2. Penetrating Damp

Water enters through the wall from outside.

**Characteristics:**
- Can appear at any height
- Worse during or after rain
- Often localised to specific areas
- May follow cracks or damaged pointing

**Common in Lanzarote**: Very common, especially in properties exposed to weather or with aging exteriors.

### 3. Condensation

Warm, moist air meeting cold surfaces creates moisture.

**Characteristics:**
- Worse in winter months
- Often in corners and behind furniture
- Accompanied by mould growth
- Affects multiple rooms

**Common in Lanzarote**: Less common due to warm climate and good ventilation, but can occur in poorly ventilated properties.

### 4. Pipe Leaks

Hidden water pipes leaking behind walls.

**Characteristics:**
- Persistent dampness regardless of weather
- May be warm if hot water pipe
- Often localised to specific spots
- Can be accompanied by low water pressure

**Common in Lanzarote**: Very common, especially in older properties with aging pipework.

## How to Identify the Cause

### Visual Clues

| Sign | Likely Cause |
|------|--------------|
| Tide mark at consistent height | Rising damp |
| Damp after rainfall | Penetrating damp |
| Black mould growth | Condensation |
| Warm damp patch | Hot water pipe leak |
| Continuous dampness | Pipe leak |

### DIY Tests

**The Foil Test:**
1. Tape aluminium foil to the damp wall
2. Seal all edges with tape
3. Wait 24-48 hours
4. Check both sides of foil

- Moisture on wall side = internal source (pipe leak or rising damp)
- Moisture on room side = condensation

## The Dangers of Ignoring Damp Walls

Untreated dampness leads to:

- **Structural damage**: Weakened walls and plaster
- **Mould growth**: Health risks especially for respiratory conditions
- **Electrical hazards**: Water and electricity don't mix
- **Property devaluation**: Damp is a major concern for buyers
- **Increasing repair costs**: Problems worsen over time

## Professional Leak Detection for Damp Walls

When pipe leaks are suspected, professional detection is essential:

### Technology We Use

**Thermal Imaging**: Leaking pipes create temperature differences visible on thermal cameras. This non-invasive method shows us exactly where water is flowing behind your walls.

**Moisture Mapping**: Electronic moisture meters create a detailed map of dampness, helping identify the source and extent of water damage.

**Acoustic Detection**: Sensitive microphones can hear the sound of water escaping from pipes, even through walls and floors.

**Tracer Gas**: For difficult-to-find leaks, we inject harmless tracer gas into pipes and detect where it escapes.

## Solutions for Different Dampness Types

### For Pipe Leaks
1. Professional leak detection to locate source
2. Repair or replace damaged section
3. Allow walls to dry (may take weeks)
4. Replaster and redecorate

### For Penetrating Damp
1. Identify entry point
2. Repair external wall, pointing, or seals
3. Consider external waterproofing
4. Allow drying before redecorating

### For Rising Damp
1. Install chemical damp-proof course
2. Replaster with specialist render
3. Ensure ground levels are correct
4. Improve drainage around property

### For Condensation
1. Improve ventilation
2. Consider dehumidification
3. Increase insulation if possible
4. Address lifestyle factors

## Why Choose Canary Detect?

We specialise in finding the hidden causes of damp walls:

- **Non-invasive methods**: No unnecessary wall damage
- **Accurate detection**: Pinpoint leak locations
- **Detailed reports**: For insurance and contractors
- **No Find, No Fee**: Guaranteed results

## Get Your Damp Walls Investigated

Don't guess at the cause of your damp walls – get professional diagnosis. What looks like condensation could be a hidden leak costing you money every day.

**Contact Canary Detect** for leak detection services across Lanzarote.

[Request a survey →](/contact)
    `
  },
  {
    id: 6,
    slug: "thermal-imaging-leak-detection-explained",
    title: "How Thermal Imaging Finds Hidden Water Leaks: Technology Explained",
    excerpt: "Discover how thermal imaging cameras detect water leaks behind walls and under floors without any damage to your property.",
    date: "2024-12-10",
    author: "Pete Ashcroft",
    category: "Technology",
    image: thermalUndergroundImg,
    metaTitle: "Thermal Imaging Leak Detection | How It Works",
    metaDescription: "How thermal imaging cameras find hidden water leaks behind walls and under floors. Non-invasive technology explained.",
    keywords: "thermal imaging leak detection, infrared leak detection, non-invasive leak detection, find leak without damage, thermal camera water leak, leak detection technology",
    readTime: 6,
    content: `
## The Science of Seeing the Invisible

Thermal imaging is one of the most powerful tools in modern leak detection. This technology allows us to "see" temperature differences that are invisible to the naked eye, revealing hidden water leaks without cutting into walls or floors.

## How Thermal Imaging Works

### The Basic Principle

Everything emits infrared radiation based on its temperature. Thermal imaging cameras detect this radiation and convert it into a visible image where different temperatures appear as different colours.

**In leak detection:**
- Water evaporating creates cooler areas
- Hot water pipes appear as warm lines
- Moisture in walls shows as temperature variations
- Leak locations become visible patterns

### What the Camera Sees

A typical thermal image shows:
- **Blue/purple**: Cooler areas (often wet)
- **Green/yellow**: Normal temperatures
- **Orange/red**: Warmer areas (hot pipes or sun-heated surfaces)

## Advantages of Thermal Imaging

### 1. Non-Invasive Detection

Traditional leak finding might involve:
- Cutting holes in walls
- Breaking up floors
- Excavating gardens

Thermal imaging requires **none of this**. We simply point the camera at surfaces and see what's happening inside.

### 2. Speed and Efficiency

A thermal survey can cover large areas quickly:
- Entire rooms in minutes
- Full properties in hours
- Immediate results on-screen

### 3. Documentation

Thermal images provide:
- Visual proof of leak locations
- Before and after comparison
- Evidence for insurance claims
- Records for contractors

### 4. Finding Multiple Issues

During a thermal survey, we often discover:
- Additional smaller leaks
- Insulation deficiencies
- Electrical hot spots
- Air infiltration points

## Limitations of Thermal Imaging

### It's Not X-Ray Vision

Thermal cameras see temperature differences on surfaces, not through them. We need:
- Temperature differences to exist
- Adequate time for heat transfer
- Suitable environmental conditions

### Best Conditions

Thermal imaging works best:
- When heating/cooling systems are running
- With temperature difference between inside and outside
- When surfaces have had time to stabilize
- Without direct sunlight interference

## Real-World Applications in Lanzarote

### Hot Water Pipe Leaks

Hot water pipes running through walls or under floors are easily detected:
- Hot water pipes show clearly as warm lines on the thermal image
- Leaks appear as wet cool spots where water is escaping
- Entire areas can be scanned quickly without disruption

### Swimming Pool Leaks

For pool leak detection:
- Thermal cameras can identify underground pipe routes
- Leaks show as cool spots where water surfaces
- Pool shells can be scanned for temperature anomalies

### Flat Roof Leaks

Many Lanzarote properties have flat roofs:
- Trapped moisture shows as temperature differences
- Entry points can be identified before rain
- Large areas surveyed efficiently

## Our Thermal Imaging Equipment

At Canary Detect, we use professional-grade thermal imaging cameras with:

- **High resolution**: Detailed images showing precise locations
- **Temperature accuracy**: ±2% readings for reliable analysis
- **Wide temperature range**: Suitable for all conditions
- **Digital recording**: Full documentation capability

## Thermal Imaging in Our Detection Process

Thermal imaging is often the first step in our comprehensive approach:

1. **Thermal survey**: Identify areas of concern
2. **Moisture mapping**: Confirm wet areas electronically
3. **Acoustic detection**: Listen for active leaks
4. **Tracer gas**: Pinpoint exact leak locations

This multi-technology approach ensures we find leaks accurately and efficiently.

## Case Study: Villa in Playa Blanca

**The problem**: Homeowner noticed increasing water bills but no visible leaks.

**Thermal imaging revealed**: A clear thermal signature showing the path of a hot water pipe with a distinct cool spot where water was escaping.

**The result**: Leak located precisely, repair completed with minimal floor damage, water bill returned to normal.

## Book a Thermal Imaging Survey

If you suspect hidden leaks in your Lanzarote property, thermal imaging can reveal the truth without any damage.

**Contact Canary Detect** – our **No Find, No Fee guarantee** ensures you only pay when we find your leak.

[Schedule your survey →](/contact)
    `
  },
  {
    id: 7,
    slug: "swimming-pool-leak-repair-cost-lanzarote",
    title: "Swimming Pool Leak Repair Costs in Lanzarote: What to Expect",
    excerpt: "Understanding the costs of pool leak detection and repair in Lanzarote. From minor fixes to major repairs, here's your complete pricing guide.",
    date: "2024-12-01",
    author: "Dave Poxon",
    category: "Pool Care",
    image: poolDiverImg,
    metaTitle: "Pool Leak Repair Cost Lanzarote | Pricing Guide",
    metaDescription: "What does pool leak detection and repair cost in Lanzarote? Complete guide to swimming pool leak repair prices. No Find, No Fee.",
    keywords: "pool leak repair cost, swimming pool leak detection price, pool leak fix cost Lanzarote, pool repair prices, leak detection cost, pool plumbing repair",
    readTime: 7,
    content: `
## Understanding Pool Leak Costs

When your swimming pool is losing water, one of your first questions is likely "How much will this cost to fix?" The answer depends on several factors, from the type of leak to its location and accessibility.

This guide breaks down the typical costs you can expect in Lanzarote.

## Professional Leak Detection Costs

Before any repair can happen, the leak must be found. Professional leak detection typically costs:

### Standard Pool Survey
- **What's included**: Comprehensive inspection of pool shell, fittings, and visible plumbing
- **Technology used**: Dye testing, pressure testing, electronic detection
- **Duration**: 2-4 hours
- **Result**: Detailed report identifying leak location(s)

### Extended Survey (Complex Leaks)
- **What's included**: Full plumbing pressure test, underground pipe investigation
- **Technology used**: Tracer gas, acoustic detection, thermal imaging
- **Duration**: Half to full day
- **Result**: Precise location of concealed leaks

**Remember**: Our **No Find, No Fee guarantee** means you only pay when we successfully locate your leak.

## Common Pool Leak Repairs and Costs

### Minor Repairs

**Fitting Replacement**
- Light niches, return fittings, skimmer faces
- Usually straightforward replacement
- May require draining pool partially

**Grout and Tile Repairs**
- Regrouting tile lines
- Replacing cracked tiles
- Surface patches

**Equipment Repairs**
- Pump seal replacement
- Filter housing fixes
- Valve replacements

### Moderate Repairs

**Skimmer Repairs**
- Cracked skimmer bodies
- Skimmer-to-pool connections
- May require deck cutting

**Shell Crack Repairs**
- Surface cracks in fibreglass or concrete
- Structural crack injection
- Waterproof coating application

**Underwater Repairs**
- Diver-applied repairs
- Epoxy applications
- Fitting seals

### Major Repairs

**Underground Pipe Repairs**
- Excavation required
- Pipe replacement
- Deck restoration

**Pool Replastering**
- If leaks are through deteriorated surface
- Full pool drain required
- Multi-day process

**Structural Repairs**
- Foundation issues
- Major shell damage
- May require engineering consultation

## Factors Affecting Repair Costs

### Leak Location
- **Accessible**: Fittings, visible pipes = lower cost
- **Concealed**: Behind walls, under deck = higher cost
- **Underground**: Buried pipes = highest cost

### Leak Type
- **Simple**: Gasket or seal failure = straightforward repair
- **Complex**: Multiple leaks, shell damage = extensive work

### Pool Type
- **Fibreglass**: Generally easier repairs
- **Concrete/gunite**: More labour-intensive
- **Tiled**: Additional tile work required

### Accessibility
- **Easy access**: Standard equipment sufficient
- **Difficult access**: Special equipment, longer time

## Cost-Saving Tips

### Act Early
Small leaks become big leaks. A fitting that's dripping today could be gushing next month. Early detection and repair saves money.

### Get Proper Detection First
Don't let contractors start digging without professional leak detection. Finding the exact location first prevents unnecessary excavation and repair costs.

### Consider Pool Age
For older pools with multiple issues, weigh repair costs against renovation options.

### Maintain Regularly
Preventive maintenance catches problems before they become expensive repairs.

## The True Cost of Ignoring Pool Leaks

A leaking pool costs money every day:

**Water loss**: Constant refilling increases water bills
**Chemical waste**: Water carries expensive chemicals away
**Energy costs**: Heating replacement water
**Structural damage**: Water undermines deck and surroundings
**Equipment wear**: Pumps work harder to maintain levels

Even a moderate leak can cost €50-100+ per month in water alone.

## Our Approach to Pool Leak Detection

At Canary Detect, we:

1. **Survey thoroughly**: Identify all leaks, not just the obvious one
2. **Report clearly**: Provide detailed findings with photos
3. **Advise honestly**: Recommend appropriate repair approaches
4. **Guarantee results**: No Find, No Fee on detection services

## Why Choose Professional Detection?

**DIY approach risks:**
- Missing concealed leaks
- Misdiagnosing the problem
- Unnecessary repairs
- Continued water loss

**Professional detection provides:**
- Accurate leak location
- Comprehensive assessment
- Documentation for contractors
- Cost-effective repairs

## Get Your Pool Inspected

Stop losing water and money. Contact Canary Detect for professional swimming pool leak detection across Lanzarote.

We serve pool owners in Playa Blanca, Puerto del Carmen, Costa Teguise, Yaiza, and throughout the island.

[Request a pool leak survey →](/contact)
    `
  },
  {
    id: 8,
    slug: "emergency-leak-detection-repair-lanzarote",
    title: "Emergency Leak Detection & Repair: Complete in One Afternoon",
    excerpt: "See how The Leaky Finders detected, located, repaired, and reinstated a hidden water leak in just one afternoon using advanced technology and surgical precision.",
    date: "2026-01-27",
    author: "Pete Ashcroft",
    category: "Case Studies",
    image: emergencyLeakAcousticImg,
    metaTitle: "Emergency Leak Detection & Repair Lanzarote | One Afternoon",
    metaDescription: "Real case study: hidden water leak detected, located, repaired and reinstated in one afternoon. Precision technology, minimal disruption. Canary Detect Lanzarote.",
    keywords: "emergency leak detection Lanzarote, water leak repair, hidden leak found, pipe leak repair, leak detection case study, Canary Detect",
    readTime: 6,
    content: `
## Precision • Speed • Results

**The call:** A spinning water meter, no visible signs of a leak, and holiday guests arriving imminently. The customer needed answers — fast.

This case study shows how The Leaky Finders detected, located, repaired, and fully reinstated a hidden underground leak in just **one afternoon** — with minimal disruption to the property.

---

## Step 1: Pinpoint Accuracy

### Advanced Technology Locates the Source

Using state-of-the-art **acoustic and trace gas equipment**, we pinpoint the exact location of the leak. This precision eliminates guesswork and unnecessary damage to your property.

![Acoustic leak detection equipment in use](/assets/blog/emergency-leak-acoustic-detection.jpg)

*Our specialist uses advanced acoustic detection equipment to listen for the telltale sounds of water escaping from pressurised pipes.*

**We find it first time, every time.**

---

## Step 2: Internal Camera Evidence

### Precision Location & Depth

Our advanced **CCTV camera head** can be precisely located from the surface with centimetre accuracy, including exact depth measurement. This ensures we know exactly where to dig before breaking ground.

![CCTV internal camera showing pipe crack](/assets/blog/emergency-leak-cctv.jpg)

*Internal camera inspection at 4.39m depth reveals the crack in the pipe — documented evidence for insurance claims.*

**Location accuracy: centimetre precision**

---

## Step 3: Minimal Excavation

### Single Tile Lift Demonstrates Surgical Precision

Our targeted approach means lifting just **one tile** to access the leak. This minimal disruption method protects your property and speeds up the entire process.

![Minimal excavation through single tile](/assets/blog/emergency-leak-hole.jpg)

*Only what's necessary: a single tile lift provides access to the damaged pipe section below.*

**Minimal disruption — only what's necessary**

---

## Step 4: Expose the Leak

### Careful Excavation Reveals the Problem

Once the exact location is confirmed, we carefully excavate to expose the damaged pipe. The controlled approach ensures we can assess and repair the issue efficiently.

![Excavation revealing active water leak](/assets/blog/emergency-leak-excavation.jpg)

*Water actively flowing from the exposed pipe — visual confirmation of the leak we detected from the surface.*

**Controlled access to the damaged section**

---

## Step 5: Leak Confirmed

### Status: Active Leak Identified

The leak is exposed and actively flowing, confirming our detection was accurate. This documentation is **critical for insurance claims**.

<video controls class="w-full rounded-lg shadow-lg my-6">
  <source src="/videos/emergency-leak-video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

*Video evidence of the active leak — essential documentation for your insurance submission.*

**Visual evidence supports insurance claim submission**

---

## Step 6: Professional Repair

### Qualified Plumber Completes the Repair

A qualified plumber repairs the damaged pipe section to industry standards. Professional repair ensures the fix is **permanent** and meets all regulatory requirements.

![Repaired pipe with new fittings](/assets/blog/emergency-leak-pipe-repair.jpg)

*New pipe sections and fittings installed to industry standards — a permanent solution.*

**Qualified repair meets insurance and regulatory standards**

---

## Step 7: Complete Reinstatement

### Property Restored to Original Condition

The area is fully reinstated with tiles replaced and grouting completed. **You wouldn't know we were there.**

![Reinstated floor after leak repair](/assets/blog/emergency-leak-wet-floor.jpg)

*Tiles replaced, grouting completed — the property restored to its original condition.*

**Like we were never there.**

---

## All Completed in One Afternoon

<div class="completion-checklist">

- ✅ Leak detected and pinpointed
- ✅ Internal camera inspection
- ✅ Minimal excavation (single tile lift)
- ✅ Professional repair by qualified plumber
- ✅ Complete reinstatement
- ✅ Full documented report submitted

</div>

---

## Why This Matters

Most leak detection companies can find a leak. Few can offer the **complete service** we provide:

- **Detection**: Advanced acoustic and trace gas equipment
- **Documentation**: CCTV camera evidence for insurance
- **Minimal disruption**: Surgical precision excavation
- **Professional repair**: Qualified plumber on-site
- **Full reinstatement**: Property restored to original condition
- **Insurance reports**: Comprehensive documentation submitted

---

## Got a Leak? Don't Wait.

Hidden leaks cause **structural damage**, **mould**, and **sky-high water bills**. The longer you wait, the worse it gets.

[Get a free leak confirmation test →](/services/free-leak-confirmation)

**Contact Canary Detect** for emergency leak detection across Lanzarote. We serve Arrecife, Puerto del Carmen, Playa Blanca, Costa Teguise, Yaiza, and all areas of the island.

[Contact us now →](/contact)
    `
  },
  {
    id: 9,
    slug: "how-to-tell-if-pool-has-leak-lanzarote",
    title: "How to Tell If Your Pool Has a Leak: 7 Warning Signs for Lanzarote Pool Owners",
    excerpt: "Is your swimming pool losing water faster than normal? Learn the 7 telltale signs of a pool leak and what to do about it in Lanzarote's unique climate.",
    date: "2026-02-01",
    author: "Pete Ashcroft",
    category: "Pool Care",
    image: poolLeakImg,
    metaTitle: "How to Tell If Pool Has a Leak | 7 Warning Signs",
    metaDescription: "Discover the 7 warning signs your swimming pool has a leak. Expert pool leak detection advice from Lanzarote specialists.",
    keywords: "how to tell if pool has leak, pool leak signs, swimming pool losing water Lanzarote, pool leak symptoms, pool water loss, pool leak detection Lanzarote",
    readTime: 7,
    content: `
## Is Your Lanzarote Pool Losing Water?

Swimming pool ownership in Lanzarote comes with unique challenges. Between the intense sun, trade winds, and volcanic soil, pool maintenance requires constant attention. But how do you know if your pool is simply evaporating water—or if you have a genuine leak?

After 10+ years detecting pool leaks across Lanzarote, we've identified the **7 most reliable warning signs** that indicate your pool has a leak.

## 1. Water Level Drops More Than 5cm Per Week

Some water loss is normal in Lanzarote's climate:
- **Evaporation**: 3-7mm per day during summer
- **Splash-out**: Active use causes minor loss
- **Backwash**: Filter cleaning uses water

But if you're losing **more than 5cm per week**, you almost certainly have a leak.

### The Bucket Test

Place a bucket on your pool step, fill it to match the pool water level, and mark both levels. Wait 24 hours. If the pool drops more than the bucket, you have a leak—not evaporation.

## 2. Constant Refilling from Aljibe or Mains

In Lanzarote, most pools are topped up from an **aljibe** (underground water tank) or directly from the mains. Warning signs include:

- Aljibe emptying faster than usual
- Water delivery trucks needed more frequently
- Mains water meter spinning even when pool pump is off
- Higher than normal water bills

If you're refilling more than once a week in peak summer, investigate further.

## 3. Cracks in Pool Shell or Tiles

Visual signs of damage often indicate leak points:

- **Hairline cracks** in plaster or fiberglass
- **Loose or missing tiles** around waterline
- **Hollow sounds** when tapping tiles (indicating debonding)
- **Staining patterns** that follow crack lines
- **Efflorescence** (white mineral deposits) around cracks

Lanzarote's volcanic soil can shift, causing structural movement that leads to cracks.

## 4. Wet Spots Around Pool Area

Look for unexplained moisture:

- **Soggy grass** or muddy areas near pool
- **Wet patches** on pool deck that don't dry
- **Green algae growth** on surrounding walls
- **Erosion** or sinkholes near pool equipment
- **Water pooling** around pump room

These indicate water is escaping below ground and surfacing nearby.

## 5. Chemical Imbalance Problems

Leaking pools struggle to maintain chemistry:

- **Chlorine disappears** faster than normal
- **pH fluctuates** constantly despite treatment
- **Algae blooms** despite adequate sanitizer
- **Calcium hardness drops** unexpectedly
- Need to add **more chemicals** than usual

Fresh water entering through leaks dilutes your chemicals continuously.

## 6. Air Bubbles in Return Jets

When air enters your plumbing system:

- **Bubbles stream** from return jets
- **Pump struggles** to prime or loses prime
- **Gurgling sounds** in pipes
- **Fluctuating pressure** gauge readings

Air bubbles often indicate a crack in the suction side of your plumbing—a common leak location.

## 7. Pool Equipment Running Constantly

Your pump works harder to compensate for water loss:

- **Pump runs more hours** than scheduled
- **Auto-fill valve** activates frequently
- **Pressure fluctuations** in filter system
- **Unusual noises** from pump or plumbing

This increased workload also raises electricity bills.

---

## What to Do If You Spot These Signs

### Step 1: Perform the Bucket Test

This simple test confirms whether you have a leak or just evaporation. [Learn how to do the bucket test properly →](/blog/how-to-check-for-pool-leaks-lanzarote)

### Step 2: Check Equipment First

Before calling professionals, inspect:
- **Pool light niches** (common leak point)
- **Skimmer connections** (check for cracks)
- **Return fittings** (ensure tight seal)
- **Main drain** (visible damage)

### Step 3: Get Professional Detection

If DIY checks don't find the leak, you need **specialist equipment**:

- **Pressure testing** of plumbing lines
- **Dye testing** around fittings and cracks
- **Acoustic detection** for underground pipes
- **Thermal imaging** for hidden pipe runs

---

## Why Lanzarote Pools Are Prone to Leaks

### Volcanic Soil Movement

Lanzarote's volcanic substrate expands and contracts with temperature and moisture changes, stressing pool structures.

### Hard Water Deposits

Desalinated mains water in Lanzarote contains minerals that deposit on pipes and fittings, causing degradation over time.

### Intense UV Exposure

Constant sun degrades rubber seals, plastic fittings, and flexible pipe sections faster than in cooler climates.

### Trade Wind Evaporation

Strong winds accelerate evaporation, making it harder to distinguish between natural loss and leaks.

---

## Don't Ignore Pool Leaks

A small leak wastes **thousands of litres** per month, damages your property, and costs money in:
- Water bills
- Chemical costs
- Electricity for refilling pumps
- Eventual structural repairs

**The longer you wait, the worse it gets.**

---

## Free Leak Confirmation

Before paying for a full survey, confirm you actually have a leak with our **Free Leak Confirmation Test**.

[Get your free leak confirmation →](/services/free-leak-confirmation)

**Contact Canary Detect** for professional swimming pool leak detection across Lanzarote. We serve Playa Blanca, Puerto del Carmen, Costa Teguise, Yaiza, and all areas of the island.

[Contact us now →](/contact)
    `
  },
  {
    id: 10,
    slug: "signs-water-leak-villa-lanzarote",
    title: "Signs of a Water Leak in Your Villa: What Every Lanzarote Homeowner Should Know",
    excerpt: "Damp walls, high water bills, or a spinning meter? Learn the warning signs of hidden water leaks in Lanzarote villas and apartments.",
    date: "2026-02-01",
    author: "Canary Detect",
    category: "Leak Detection",
    image: waterLeakImg,
    metaTitle: "Signs of Water Leak in Villa | Lanzarote Leak Detection",
    metaDescription: "Discover the warning signs of hidden water leaks in your Lanzarote villa. Damp walls, high bills, spinning meter - what they mean.",
    keywords: "signs of water leak, water leak villa Lanzarote, damp walls Lanzarote, hidden water leak, water damage signs, leak detection villa",
    readTime: 8,
    content: `
## Hidden Leaks in Lanzarote Villas

Water leaks in Lanzarote properties are often **invisible for months** before causing obvious damage. By the time you see damp patches or mould, significant damage may have already occurred behind walls and under floors.

At Canary Detect, we find that **95% of leaks are hidden**—no visible drips, no obvious signs. This guide helps you spot the early warning signs before expensive damage occurs.

## The 10 Warning Signs of a Hidden Water Leak

### 1. Water Meter Spinning When Taps Are Off

The clearest sign of a leak is a spinning meter with all water outlets closed:

1. Turn off **all taps, showers, and appliances**
2. Check your water meter
3. Look at the small red dial or digital display
4. If it's moving, water is flowing somewhere

**Important for Lanzarote**: If you have an **aljibe** (water tank) system, meter behaviour is more complex. [Learn about aljibe systems and leak detection →](/blog/master-your-lanzarote-water-system)

### 2. Unexpectedly High Water Bills

Compare your bills over time:
- Sudden spikes without usage changes
- Gradual increase over several months
- Bills much higher than neighbours with similar properties

In Lanzarote, a small hidden leak can waste **€200-500 per year** in water costs alone.

### 3. Damp or Discoloured Patches on Walls

Look for:
- **Damp patches** that appear without rain
- **Tide marks** or waterlines on walls
- **Paint bubbling** or peeling
- **Wallpaper lifting** from walls
- **Discolouration** (yellow, brown stains)

These signs indicate water travelling behind the wall surface.

### 4. Musty or Mouldy Smells

Hidden moisture creates distinctive odours:
- **Musty, earthy smell** (like a damp cellar)
- **Mouldy odour** in specific rooms
- Smells that **get stronger** after closing the house

If the smell appears after returning from a trip, moisture has been accumulating.

### 5. Visible Mould Growth

Mould indicates sustained moisture:
- **Black spots** in corners or behind furniture
- **Green or grey patches** on walls
- **Mould on textiles** (curtains, upholstery)
- **Mould reappearing** after cleaning

Mould only grows where humidity exceeds 60-70% for extended periods.

### 6. Warm or Cold Spots on Floors

Temperature anomalies reveal hidden pipes:
- **Warm patches** indicate hot water pipe leaks
- **Cold patches** may indicate cold water escaping
- **Tiles that feel different** temperatures

Walk barefoot on tile floors—you'll notice temperature differences more easily.

### 7. Sound of Running Water

Listen carefully when the house is quiet:
- **Hissing** sounds in walls
- **Dripping** noises behind fixtures
- **Running water** sounds with taps off

These sounds may be intermittent if connected to the aljibe system.

### 8. Decreased Water Pressure

A leak reduces system pressure:
- **Weak shower flow** compared to before
- **Slow-filling toilets**
- **Taps taking longer** to run hot
- **Pump running more frequently** (if you have one)

If pressure dropped suddenly, the leak may be significant.

### 9. Cracks in Walls or Foundations

Water damage causes structural movement:
- **Diagonal cracks** from corners of doors/windows
- **Cracks following grout lines** in tiles
- **Foundation cracks** near plumbing routes
- **Doors/windows sticking** that didn't before

Lanzarote's volcanic soil amplifies this—wet soil swells and shifts.

### 10. Pooling Water Outside

External signs of underground leaks:
- **Wet patches** on driveway or garden
- **Green, lush grass** in dry areas
- **Erosion or sinkholes** near building
- **Rising damp** on external walls

These indicate water escaping below ground and surfacing.

---

## Where Leaks Hide in Lanzarote Villas

### Bathrooms

Most common leak locations:
- **Behind shower trays** (failed waterproofing)
- **Toilet connections** (worn seals)
- **Basin pipework** (hidden in cabinets)
- **Underfloor heating connections** (if installed)

### Kitchens

Common culprits:
- **Dishwasher connections** (hidden leaks for months)
- **Under-sink pipework** (slow drips)
- **Fridge water lines** (ice makers)
- **Waste pipes** (cause smell rather than wet patches)

### Flat Roofs

Lanzarote's flat roof architecture is vulnerable:
- **Waterproofing failure** around edges
- **Cracks in roof screed** from thermal movement
- **Blocked drainage** causing ponding
- **Terrace tile joints** allowing water penetration

### Underground Pipes

Garden and supply pipes:
- **Mains supply between meter and house**
- **Irrigation system connections**
- **Pool plumbing** (common in Lanzarote)
- **Hot water circulating pipes**

---

## What to Do If You Suspect a Leak

### Step 1: Monitor Your Meter

Record meter readings morning and evening for a week. Even small changes indicate a leak.

### Step 2: Visual Inspection

Check accessible areas:
- Under all sinks
- Around toilet bases
- Behind washing machines
- In utility cupboards

### Step 3: Listen Carefully

At night when the house is quiet, listen at walls, especially near bathrooms and kitchens.

### Step 4: Get Professional Help

If you find evidence of a leak but can't locate it, you need **specialist equipment**:
- **Acoustic detection** to hear leaks through walls
- **Thermal imaging** to see temperature anomalies
- **Tracer gas** to find pinhole leaks
- **Moisture mapping** to trace water paths

---

## Why DIY Leak Detection Often Fails

Many homeowners spend weeks:
- Opening up walls in wrong locations
- Paying plumbers to "investigate"
- Making the damage worse

**95% of leaks** cannot be found without specialist equipment. Professional detection **costs less** than exploratory damage.

---

## Free Leak Confirmation

Not sure if you have a leak? Our **Free Leak Confirmation Test** gives you a definitive answer before committing to a full survey.

[Get your free leak confirmation →](/services/free-leak-confirmation)

**Contact Canary Detect** for professional leak detection across Lanzarote. We serve Arrecife, Puerto del Carmen, Playa Blanca, Costa Teguise, Yaiza, and all areas of the island.

[Contact us now →](/contact)
    `
  },
  {
    id: 11,
    slug: "high-water-bills-lanzarote-causes",
    title: "What Causes High Water Bills in Lanzarote? 8 Reasons Your Bill Is Too High",
    excerpt: "Shocked by your water bill? Discover the 8 common causes of high water bills in Lanzarote—from hidden leaks to faulty float valves.",
    date: "2026-02-01",
    author: "Canary Detect",
    category: "Water Saving",
    image: waterMeterImg,
    metaTitle: "High Water Bills Lanzarote | 8 Common Causes",
    metaDescription: "Why is your water bill so high? Discover 8 causes of expensive water bills in Lanzarote—hidden leaks, faulty valves, and more.",
    keywords: "high water bills Lanzarote, expensive water bill causes, water bill too high, water meter spinning, leak causing high bill, reduce water bill Lanzarote",
    readTime: 9,
    content: `
## Why Is My Water Bill So High?

Opening an unexpectedly high water bill is stressful. In Lanzarote, where water is precious and expensive, a spike in your bill demands immediate investigation.

After 10+ years helping Lanzarote homeowners, we've identified the **8 most common causes** of high water bills—and what you can do about each one.

## 1. Hidden Water Leaks (Most Common)

The #1 cause of high water bills is a **leak you can't see**:

- **Underground pipe leaks** (between meter and house)
- **Leaks behind walls** (bathroom and kitchen pipes)
- **Under-floor leaks** (especially in properties with underfloor heating)
- **Swimming pool leaks** (extremely common in Lanzarote)

### How Much Can a Leak Cost?

| Leak Size | Litres Lost/Day | Monthly Cost (approx) |
|-----------|-----------------|----------------------|
| Dripping tap | 20L | €5 |
| Running toilet | 400L | €100 |
| 1mm pipe crack | 1,000L | €250 |
| Burst pipe | 5,000L+ | €1,000+ |

**A single hidden leak can double or triple your bill.**

### The Meter Test

1. Turn off all water outlets
2. Check your meter's leak indicator (small dial)
3. If it's moving, you have a leak

[Learn more about water meter behaviour →](/blog/water-meter-running-when-taps-off)

## 2. Faulty Aljibe Float Valve

In Lanzarote, most homes use an **aljibe** (underground water tank) with a float valve. When this valve fails:

- Water continuously flows into the tank
- Excess overflows into the ground (invisibly)
- Your meter runs constantly
- Your bill skyrockets

### Signs of a Faulty Float Valve

- Water meter spinning even when house is empty
- Aljibe always full but meter still running
- Wet ground near aljibe location
- Pump not needed as often (tank stays full)

This is often **misdiagnosed as a pipe leak**. [Understand your aljibe system →](/blog/master-your-lanzarote-water-system)

## 3. Leaking or Running Toilets

Toilets are silent water wasters:

- **Flapper valve failure** (most common)
- **Continuous trickle** into bowl
- **Phantom flushes** (toilet refilling on its own)
- **Fill valve stuck open**

### The Toilet Dye Test

1. Add food colouring to the cistern
2. Wait 10 minutes without flushing
3. If colour appears in the bowl, the flapper is leaking

A running toilet wastes **10,000-50,000 litres per month**.

## 4. Swimming Pool Leaks

Lanzarote has thousands of private pools, and **pool leaks are extremely common**:

- Shell cracks from ground movement
- Plumbing joint failures
- Light niche seal failures
- Skimmer connection leaks

### Pool Leak Signs

- Refilling more than once a week
- Chemical consumption increasing
- Wet spots around pool area
- Pump losing prime or showing air bubbles

[Learn how to check for pool leaks →](/blog/how-to-check-for-pool-leaks-lanzarote)

## 5. Irrigation System Leaks

Garden irrigation systems often leak unnoticed:

- **Broken sprinkler heads** (buried by plants)
- **Cracked drip lines** (degraded by sun)
- **Failed connections** at control valves
- **Main line leaks** underground

### Warning Signs

- Brown patches alternating with very green areas
- Soggy spots in lawn when not irrigating
- Pressure drop in irrigation zones
- Controller showing shorter run times than scheduled

## 6. Appliance Leaks

Household appliances can leak slowly:

- **Washing machines** (inlet hose connections)
- **Dishwashers** (drain connections)
- **Water heaters** (pressure relief valves)
- **Refrigerator ice makers** (water line)

These often leak into hidden spaces—under floors or behind units.

## 7. Dripping Taps and Showers

Easy to ignore but costly over time:

- A tap dripping once per second = **20 litres per day**
- Mixer showers often drip from cartridge failure
- Outside taps frequently forgotten

### Quick Fix

Replace tap washers or cartridges—usually a €5-20 repair that can save €50+ per year.

## 8. Meter Reading Errors or Billing Issues

Sometimes the problem isn't your water usage:

- **Estimated bills** that overcharge
- **Meter reading mistakes**
- **Faulty water meter** (rare but possible)
- **Rate changes** you weren't notified about

### What to Do

1. Compare your meter reading with the bill
2. Request a meter accuracy test if suspicious
3. Check for rate changes on Canal Gestión website

---

## How to Investigate High Bills

### Step 1: Check Your Meter

Record the reading, use no water for 2 hours, check again. Any change = leak.

### Step 2: Inspect Visible Areas

- Check all taps, toilets, and visible pipes
- Look under sinks and behind appliances
- Inspect outdoor taps and irrigation

### Step 3: Check Your Pool (If Applicable)

Perform the bucket test to rule out pool leaks.

### Step 4: Consider Your Aljibe

If you have an aljibe system, the float valve is a prime suspect.

### Step 5: Get Professional Detection

If you can't find the cause, you need specialist equipment:
- **Acoustic detection** for pipe leaks
- **Thermal imaging** for hidden water paths
- **Pressure testing** for plumbing systems

---

## Prevention Tips

### Regular Maintenance

- **Annually**: Check aljibe float valve
- **Monthly**: Walk around property looking for wet spots
- **Weekly**: Check water meter reading

### Monitor Your Bills

Keep a record of monthly usage—you'll spot anomalies quickly.

### Fix Small Issues Promptly

Dripping taps and running toilets only get worse.

---

## Free Leak Confirmation

If you suspect a hidden leak is causing high bills, get certainty with our **Free Leak Confirmation Test**.

[Get your free leak confirmation →](/services/free-leak-confirmation)

**Contact Canary Detect** for professional leak detection across Lanzarote. We serve Arrecife, Puerto del Carmen, Playa Blanca, Costa Teguise, Yaiza, and all areas of the island.

[Contact us now →](/contact)
    `
  }
];

// Spanish blog articles
export const blogArticlesEs: BlogArticle[] = [
  {
    id: 1,
    slug: "domina-tu-sistema-de-agua-lanzarote",
    title: "Domina Tu Sistema de Agua en Lanzarote: La Guía Esencial para Residentes",
    excerpt: "Desde aljibes hasta bombas, comprende cómo funciona la infraestructura de agua única de Lanzarote—y cómo detectar fugas ocultas antes de que te cuesten dinero. Además: ¿se puede beber el agua?",
    date: "2026-01-22",
    author: "Canary Detect",
    category: "Guías Esenciales",
    image: lanzaroteWaterHeroImg,
    metaTitle: "Guía Sistema de Agua Lanzarote | Aljibe y Bombas",
    metaDescription: "Guía esencial del sistema de agua de Lanzarote. Cómo funcionan aljibes y bombas, detección de fugas, y si puedes beber el agua.",
    keywords: "sistema de agua Lanzarote, aljibe Lanzarote, bomba de agua Lanzarote, se puede beber agua grifo Lanzarote, contador de agua girando, detección fugas Lanzarote, grupo de presión",
    readTime: 12,
    content: `
## Introducción

Para los residentes de Lanzarote, gestionar el agua es un aspecto fundamental de la vida diaria, profundamente arraigado en la historia e infraestructura de la isla. A diferencia de los sistemas alimentados directamente por la red que son comunes en muchas partes del mundo, los hogares de Lanzarote a menudo dependen de una combinación única de un tanque de agua subterráneo, conocido como **aljibe**, y un sistema de bombeo. Esta configuración es una respuesta directa al clima árido de la isla y a la escasez histórica de agua.

Sin embargo, este sistema tradicional presenta desafíos modernos, particularmente cuando se trata de detectar fugas de agua. En Canary Detect, encontramos que muchos escenarios desconcertantes de fugas tienen su origen en una incomprensión de cómo funcionan estos sistemas. Este artículo explica la historia detrás de la red de agua de Lanzarote, cómo funciona, y por qué hace que la detección de fugas sea un desafío único.

![Arquitectura Tradicional de Lanzarote](/assets/blog/lanzarote-traditional-house.jpg)

*La icónica arquitectura blanca de techos planos de Lanzarote, con el paisaje volcánico de fondo. Los aljibes domésticos modernos generalmente se llenan con camión cisterna en lugar de agua de lluvia.*

## Una Historia Forjada por la Escasez

![Aljibe Canario](/assets/blog/lanzarote-aljibe-cistern.jpg)

*Un aljibe canario tradicional en Lanzarote, mostrando el punto de acceso al tanque subterráneo rodeado de suelo volcánico.*

Lanzarote es la más seca de las Islas Canarias, recibiendo precipitaciones mínimas y sin ríos naturales ni aguas superficiales significativas. El término **aljibe** proviene del árabe *al-gúbb*, que significa cisterna o pozo, una tecnología introducida en la Península Ibérica hace siglos para almacenar el preciado agua en regiones áridas.

Históricamente, los isleños eran maestros en la conservación del agua, desarrollando métodos para capturar cada gota posible. Esto incluía grandes embalses públicos (*maretas*) y canales para recoger la escorrentía de agua de lluvia. Mientras que el diseño clásico de las casas canarias con techos planos era perfecto para canalizar el agua de lluvia hacia un aljibe doméstico, el método principal para llenar estos tanques domésticos durante muchos años ha sido la entrega con camión cisterna, conocido localmente como *pipa*.

Incluso con la llegada de las modernas plantas desalinizadoras en la década de 1960, que ahora abastecen a toda la isla, el legado de la escasez de agua persiste. El suministro de agua de la red puede ser inconsistente, con baja presión y, en algunas zonas rurales, cortes programados que pueden dejar a los hogares sin agua durante días. Como resultado, el sistema de aljibe y bomba sigue siendo un componente esencial de la mayoría de los hogares, proporcionando un amortiguador crucial y asegurando una presión de agua constante.

![Camión Cisterna](/assets/blog/lanzarote-water-tanker.jpg)

*Los camiones cisterna (pipas) siguen siendo una vista común en las Islas Canarias, entregando agua para llenar los aljibes domésticos, especialmente durante las interrupciones del suministro.*

## Cómo Funciona el Sistema de Aljibe y Bomba

Un sistema típico de agua doméstica en Lanzarote consta de tres partes principales:

1. **El Aljibe:** Un tanque de almacenamiento subterráneo, típicamente hecho de hormigón, que contiene la reserva principal de agua del hogar. Se llena desde el suministro de la red a través de una tubería controlada por una válvula de flotador.
2. **La Válvula de Flotador (Boya):** Esta válvula se abre automáticamente para rellenar el aljibe desde la red cuando el nivel del agua baja y se cierra cuando está lleno. Funciona igual que el mecanismo dentro de una cisterna del váter.
3. **El Grupo de Presión:** Debido a que la presión de la red a menudo es demasiado baja para las necesidades del hogar, se utiliza una bomba para extraer agua del aljibe y entregarla a los grifos, duchas y electrodomésticos a una presión constante y utilizable.

Muchos hogares también cuentan con un **bypass de la red**. Esta es una derivación del suministro de la red (después de la alimentación de la boya al aljibe) que conecta directamente a la tubería de la casa después de la bomba, controlada por una válvula. En la práctica, este bypass a menudo se deja abierto, con la bomba funcionando normalmente. La red proporciona un nivel base de presión, y la bomba "completa" la presión para asegurar un flujo adecuado en toda la casa. Si la bomba falla, la casa sigue recibiendo agua directamente de la red (aunque a menor presión). Esta disposición de doble alimentación es práctica pero añade complejidad al diagnosticar fugas.

![Diagrama del Sistema de la Casa](/assets/blog/lanzarote-water-system-house.png)

*Un sistema típico de agua doméstica de Lanzarote en contexto: el agua de la red entra a través del contador, alimenta el aljibe subterráneo a través de una válvula de flotador, y el grupo de presión (sobre el suelo) extrae el agua para abastecer la casa. La válvula de bypass permite que el agua de la red complemente el suministro de la bomba.*

![Diagrama Esquemático](/assets/blog/lanzarote-water-system-diagram.png)

*Vista esquemática: el agua de la red alimenta el aljibe a través de una válvula de flotador, mientras que una rama de bypass (a menudo dejada abierta) proporciona presión directa de la red. La bomba extrae del aljibe para aumentar la presión, y ambos suministros se combinan antes de llegar a la casa.*

## El Desafío Único de la Detección de Fugas

Este sistema crea desafíos específicos al intentar identificar una fuga de agua, a menudo llevando a señales confusas del contador de agua.

### Misterio 1: El Contador de Agua Intermitente

Una suposición común es que una fuga hará que el contador de agua gire continuamente. Con un sistema de aljibe, esto rara vez es el caso. Si tienes una fuga dentro de tu casa (por ejemplo, un grifo goteando o un váter defectuoso), el agua se está perdiendo del **lado alimentado por la bomba** del sistema. El agua viene del aljibe, no directamente de la red.

Tu contador de agua solo girará durante breves períodos cuando la válvula de flotador en el aljibe se abra para reponer el agua que se ha perdido. Esto significa que una fuga significativa puede pasar desapercibida, ya que el contador parece estar estático la mayor parte del tiempo, solo para girar intermitentemente mientras el tanque se rellena solo.

### Misterio 2: El Contador que Gira Constantemente (Que No Es una Fuga)

Por el contrario, un contador que gira constantemente no siempre significa que tienes una fuga en las tuberías de tu propiedad. El culpable más común en este escenario es una **válvula de flotador defectuosa** en el propio aljibe.

Si la válvula no se cierra correctamente cuando el tanque está lleno, el agua de la red goteará continuamente y se desbordará del aljibe. Sin embargo, es poco probable que veas agua acumulándose en la superficie. La mayoría de los aljibes no son completamente herméticos hasta arriba. La sección superior, típicamente por encima del nivel del 80-90% lleno o por encima de donde se asienta la boya, a menudo no está sellada. Cuando el agua sube más allá de este punto, simplemente se filtra en el suelo circundante y desaparece bajo las baldosas de tu patio, completamente desapercibida. Para un observador, el contador gira sin parar, creando la ilusión perfecta de una fuga importante. En realidad, es una simple falla mecánica en el mecanismo de llenado del tanque.

![Detección de Fugas del Contador de Agua](/assets/blog/lanzarote-water-meter-leak.png)

*Un indicador de fugas girando en un contador de agua puede ser causado por una fuga real o una válvula de flotador defectuosa en el aljibe.*

### La Bomba Delatora

Una de las señales más claras de una fuga en un sistema de aljibe es el comportamiento de la bomba misma. Si nadie está usando agua, la bomba debería permanecer en silencio. Una fuga en el lado alimentado por la bomba drenará lentamente la presión en el sistema, haciendo que la bomba se active periódicamente para restaurarla.

### El Factor de la Válvula de Retención

Un componente crítico pero a menudo pasado por alto en estos sistemas es la **válvula de retención** (también llamada válvula antirretorno). Estas se instalan típicamente en el contador de agua y en la tubería de bypass de la red. Su trabajo es evitar que el agua fluya hacia atrás hacia el suministro de la red.

Cuando una válvula de retención falla, la mayor presión de la bomba puede empujar el agua de vuelta hacia la red. Esto hace que la bomba funcione frecuentemente mientras intenta mantener la presión contra un sistema que efectivamente está "perdiendo" agua por donde vino. Los síntomas imitan una fuga genuina: la bomba se enciende y apaga, y el contador de agua gira.

Podrías asumir que el agua fluyendo hacia atrás haría que el contador girara en reversa, reduciendo tu factura. En la práctica, generalmente ocurre lo contrario. Los contadores de agua están diseñados para medir el flujo hacia adelante, y cuando el agua oscila hacia adelante y hacia atrás debido a fluctuaciones de presión, el contador tiende a registrar más movimiento hacia adelante que hacia atrás. El resultado es una factura de agua más alta, no más baja.

### La Complicación del Bypass

Si tu propiedad tiene un bypass de la red, añade otra capa de complejidad. Podría existir una fuga en el lado alimentado por la red o en el lado alimentado por la bomba, y aislar la fuente requiere cerrar sistemáticamente diferentes partes del sistema para observar el comportamiento del contador. Este puede ser un proceso desafiante para el propietario promedio.

## Conclusión: Conoce Tu Sistema

Entender si tu agua viene directamente de la red o a través de un aljibe y bomba es el primer y más crítico paso para diagnosticar una posible fuga en Lanzarote. El comportamiento de tu contador de agua puede ser engañoso si no sabes a qué está conectado.

Si sospechas una fuga pero no puedes entender lo que tu contador de agua te está diciendo, las características únicas de tu sistema de agua son probablemente la razón. Antes de enfrentarte a una factura de agua alta o posibles daños a la propiedad, es esencial obtener un diagnóstico experto.

## ¿Se Puede Beber el Agua?

Esta es una de las preguntas más frecuentes de visitantes y nuevos residentes, y la respuesta no es un simple "sí" o "no". Requiere entender la diferencia entre el agua que entra en tu propiedad y el agua que sale de tu grifo.

### La Posición Oficial: Sí, Es Potable

Legal y técnicamente, el agua suministrada por Canal Gestión Lanzarote es segura para beber. Es agua de mar desalinizada que pasa por ósmosis inversa, remineralización (añadiendo calcio y magnesio) y cloración. Debe cumplir con estrictos criterios sanitarios establecidos por la **Directiva UE 2020/2184** sobre la calidad del agua destinada al consumo humano.

Se realizan pruebas regulares para asegurar que cumple con estos estándares en el punto de suministro. Expertos de la Universidad de Las Palmas de Gran Canaria e inspectores de salud locales han confirmado que el agua de la red es segura, a menudo conteniendo menos residuos plásticos que el agua embotellada.

### La Realidad: Depende de Tu Tanque

Mientras que el agua es segura cuando pasa por el contador, la seguridad de lo que sale de tu grifo depende enteramente de dónde ha sido almacenada.

En nuestros años en Canary Detect, hemos inspeccionado el interior de innumerables aljibes. La realidad es cruda:

- **Lo Bueno:** Algunos tanques están impecables, bien mantenidos y perfectamente seguros.
- **Lo Malo:** Otros son sitios de "puro horror" que te harían correr al baño solo con mirarlos. Hemos visto tanques con acumulación de sedimentos, intrusión de raíces, hormigón desmoronándose, e incluso plagas ahogadas.

Si el agua de tu grifo viene de un aljibe que no ha sido limpiado o inspeccionado en años, puede que ya no sea segura para beber, independientemente de su calidad en el contador.

### Nuestra Recomendación

Si quieres beber agua del grifo (que es más barata, ecológica y conveniente), sigue estas reglas:

1. **Evita el Tanque para Beber:** La opción más segura es tener un grifo dedicado para "agua potable" en tu cocina que esté conectado **directamente a la red**, evitando completamente el aljibe y la bomba. Esto asegura que estás bebiendo el agua regulada y segura directamente de la red de suministro.
2. **Mantén Tu Aljibe:** Si debes usar agua del tanque, trata tu aljibe como la infraestructura crítica que es. Requiere inspección regular, limpieza e impermeabilización para prevenir la contaminación.
3. **Comprueba el Estado:** No asumas que tu tanque está limpio. Haz que lo inspeccionen. Si está en malas condiciones, úsalo solo para lavar y tirar de la cadena hasta que pueda ser remediado profesionalmente.

## ¿Todavía No Estás Seguro? No Adivines.

El 95% de las fugas en Lanzarote están ocultas. Sin señales visibles, sin pistas obvias. Antes de pagar por una inspección completa, obtén una respuesta definitiva con nuestro **Test de Confirmación de Fugas Gratis**.

**Contacta con Canary Detect** para detección profesional de fugas en toda Lanzarote. Servimos Arrecife, Puerto del Carmen, Playa Blanca, Costa Teguise, Yaiza y todas las áreas de la isla.

[Obtén un test de confirmación de fugas gratis →](/es/servicios/confirmacion-fugas-gratis)
    `
  },
  {
    id: 2,
    slug: "como-detectar-fugas-en-piscinas-lanzarote",
    title: "Cómo Detectar Fugas en Piscinas: Guía Completa para Propietarios en Lanzarote",
    excerpt: "¿Tu piscina está perdiendo agua? Aprende la prueba del cubo, la prueba del tinte y cuándo llamar a servicios profesionales de detección de fugas en Lanzarote.",
    date: "2026-01-15",
    author: "Pete Ashcroft",
    category: "Cuidado de Piscinas",
    image: poolBucketTestImg,
    metaTitle: "Cómo Detectar Fugas en Piscinas | Test Lanzarote",
    metaDescription: "Aprende a detectar fugas en tu piscina con la prueba del cubo y del tinte. Consejos profesionales Lanzarote.",
    keywords: "como detectar fugas piscina, test fugas piscina, piscina perdiendo agua, prueba cubo fuga piscina, prueba tinte fuga piscina, detección fugas piscina Lanzarote",
    readTime: 8,
    content: `
## ¿Tu Piscina Está Perdiendo Agua?

Si has notado que el nivel del agua de tu piscina baja más rápido de lo normal, no estás solo. Muchos propietarios de piscinas en Lanzarote enfrentan este problema, especialmente durante los meses calurosos de verano. Pero, ¿cómo saber si es evaporación o una fuga real?

En esta guía completa, te mostraremos **cómo detectar fugas en piscinas** usando métodos caseros sencillos, y te explicaremos cuándo es momento de llamar a servicios profesionales de detección de fugas.

## Entendiendo la Pérdida de Agua en Piscinas

Antes de alarmarte por una posible fuga, es importante entender que cierta pérdida de agua es normal:

- **Evaporación**: En el clima cálido de Lanzarote, las piscinas pueden perder 3-7mm de agua al día por evaporación
- **Salpicaduras**: La natación activa y los juegos pueden causar pérdida significativa de agua
- **Lavado del filtro**: La limpieza del filtro elimina agua de tu piscina
- **Viento**: Los vientos alisios de Lanzarote aceleran la evaporación

Si pierdes más de 5cm de agua por semana, probablemente tengas una fuga que necesita atención.

## La Prueba del Cubo: Tu Primer Paso

La prueba del cubo es el método casero más fiable para determinar si tu piscina tiene una fuga o simplemente está evaporando agua. Mira este excelente vídeo de Swim University que demuestra exactamente cómo realizar la prueba:

<div class="video-thumbnail"><a href="https://www.youtube.com/watch?v=Zqiz4qBJU_g&t=37s" target="_blank" rel="noopener noreferrer" class="video-link group"><img src="https://img.youtube.com/vi/Zqiz4qBJU_g/maxresdefault.jpg" alt="Vídeo Prueba del Cubo - Cómo Encontrar una Fuga en la Piscina" class="video-thumb-img" /><span class="play-button">▶</span><span class="video-caption">🎬 Ver: Prueba del Cubo - Cómo Encontrar una Fuga (YouTube)</span></a></div>

### Prueba del Cubo Paso a Paso

1. **Lleva el agua de tu piscina al nivel normal** antes de comenzar la prueba
2. **Llena un cubo de 20 litros** con agua de la piscina hasta aproximadamente 2,5cm del borde
3. **Coloca el cubo en el primer o segundo escalón** para que la temperatura del agua coincida
4. **Marca el nivel del agua** dentro del cubo con cinta o rotulador
5. **Marca el nivel del agua de la piscina** en el exterior del cubo
6. **Espera 24 horas** sin usar la piscina ni encender ningún equipo
7. **Compara los niveles** - si el nivel de la piscina bajó más que el del cubo, tienes una fuga

### Interpretando Tus Resultados

- **Bajada igual**: Evaporación normal - no se detecta fuga
- **La piscina bajó más**: Tienes una fuga - hora de detección profesional
- **La piscina bajó significativamente más**: Fuga seria que requiere atención inmediata

## La Prueba del Tinte: Localizando Fugas Visibles

Si sospechas una fuga cerca de accesorios, luces o grietas visibles, la prueba del tinte puede ayudar a confirmar:

1. Apaga todo el equipo de la piscina
2. Deja que el agua quede completamente quieta
3. Usa colorante alimentario o tinte de detección de fugas
4. Aplica el tinte cerca de las áreas sospechosas
5. Observa si el tinte es atraído hacia grietas o huecos

**Consejo profesional**: Esta prueba funciona mejor en días calmados sin viento.

## Ubicaciones Comunes de Fugas en Piscinas

Basándonos en nuestra experiencia detectando fugas de piscinas en toda Lanzarote, estas son las ubicaciones más comunes:

### Fugas Estructurales
- Grietas en el vaso de la piscina
- Fallos en juntas de expansión
- Deterioro de azulejos y lechada

### Fugas de Fontanería
- Conexiones de tuberías subterráneas
- Conexiones del skimmer
- Accesorios de línea de retorno
- Juntas del desagüe principal

### Fugas de Equipos
- Sellos de la bomba
- Carcasa del filtro
- Conexiones del calentador
- Accesorios del clorador

## Señales de que Necesitas Detección Profesional de Fugas

Aunque las pruebas caseras son útiles, algunas situaciones requieren equipo profesional:

- **Pérdida constante de agua** a pesar de pasar la prueba del cubo
- **Facturas de agua inexplicablemente altas**
- **Manchas húmedas** alrededor del equipo de la piscina o en tu jardín
- **Grietas o hundimientos** en la terraza de la piscina
- **Burbujas de aire** en las líneas de retorno
- **Crecimiento de algas** en áreas específicas (puede indicar intrusión de agua)

## Detección Profesional de Fugas de Piscinas en Lanzarote

En Canary Detect, usamos tecnología avanzada para encontrar fugas de piscinas sin dañar tu piscina:

- **Pruebas de presión** de todas las líneas de fontanería
- **Detección electrónica de fugas** para precisión exacta
- **Pruebas de tinte** con equipo de grado profesional
- **Inspección con cámara subacuática** de tuberías y desagües

Nuestra **garantía Sin Encontrar, Sin Pagar** significa que solo pagas cuando localizamos tu fuga.

## Previniendo Futuras Fugas de Piscina

Una vez reparada tu fuga, previene futuros problemas con estos consejos:

1. **Inspecciones regulares** de accesorios visibles y equipos
2. **Química del agua adecuada** para prevenir el deterioro
3. **Reparación pronta** de pequeñas grietas o astillas
4. **Mantenimiento invernal** para prevenir daños por congelación (raro pero posible en las zonas altas de Lanzarote)

## Obtén Ayuda Profesional Hoy

Si has probado la prueba del cubo y sospechas una fuga, no esperes. Las fugas de agua desperdician dinero y pueden causar daños estructurales a tu piscina y áreas circundantes.

**Contacta con Canary Detect** para detección profesional de fugas de piscinas en Lanzarote. Servimos Playa Blanca, Puerto del Carmen, Costa Teguise, Arrecife y todas las áreas de la isla.

[Contáctanos para un presupuesto gratis →](/es/contacto)
    `
  },
  {
    id: 2,
    slug: "senales-fuga-agua-subterranea",
    title: "7 Señales de una Fuga de Agua Subterránea: Lo que los Propietarios de Lanzarote Deben Saber",
    excerpt: "Las fugas de agua subterráneas pueden pasar desapercibidas durante meses. Aprende las señales de advertencia y cómo detectar fugas ocultas antes de que causen daños mayores.",
    date: "2026-01-08",
    author: "Dave Poxon",
    category: "Consejos",
    image: undergroundImg,
    metaTitle: "Señales Fuga Agua Subterránea | Detección Lanzarote",
    metaDescription: "7 señales de fugas de agua subterráneas. ¿Facturas altas, manchas húmedas, baja presión? Detecta fugas ocultas en Lanzarote.",
    keywords: "señales fuga agua subterránea, detección fugas ocultas, fuga tubería subterránea, fuga agua bajo hormigón, contador agua girando, factura agua alta fuga",
    readTime: 7,
    content: `
## Fugas de Agua Ocultas: El Destructor Silencioso de Propiedades

Las fugas de agua subterráneas están entre los problemas más dañinos que un propietario puede enfrentar. A diferencia de las fugas visibles, pueden pasar desapercibidas durante meses o incluso años, causando lentamente daños estructurales y desperdiciando miles de euros en agua.

En Lanzarote, donde el agua es preciosa y cara, detectar fugas subterráneas temprano es crucial. Aquí están las **7 señales de advertencia** que todo propietario debe conocer.

## 1. Facturas de Agua Inexplicablemente Altas

La primera señal más común de una fuga subterránea es un aumento repentino en tu factura de agua sin un aumento correspondiente en el uso.

**Qué buscar:**
- Factura 20% o más alta de lo habitual
- Aumento constante durante varios meses
- Sin cambio en los hábitos de consumo de agua del hogar

**Consejo profesional**: Compara tu factura actual con el mismo período del año pasado, ya que las variaciones estacionales pueden afectar el consumo.

## 2. Contador de Agua Girando Cuando Todos los Grifos Están Cerrados

Esta es una de las pruebas más definitivas para una fuga de agua oculta:

### Cómo Revisar tu Contador de Agua

1. Cierra todos los electrodomésticos que usan agua
2. Asegúrate de que no hay grifos abiertos
3. Localiza tu contador de agua
4. Anota la lectura o mira el dial
5. Espera 30 minutos sin usar agua
6. Revisa el contador de nuevo

Si el contador se ha movido, tienes una fuga en algún lugar de tu sistema.

## 3. Zonas Húmedas o Encharcadas en tu Jardín

Las fugas de agua subterráneas a menudo emergen como áreas húmedas inexplicables:

- **Zonas inusualmente verdes** en césped que por lo demás está seco
- **Puntos fangosos o blandos** que nunca se secan
- **Agua acumulándose** en la superficie sin fuente obvia
- **Canales de erosión** apareciendo en el paisajismo

En el clima seco de Lanzarote, las manchas húmedas persistentes son particularmente sospechosas.

## 4. Baja Presión de Agua en Toda la Casa

Una fuga en tu línea de suministro principal puede causar caídas de presión notables:

- **Disminución gradual** de la presión durante semanas o meses
- **Afecta a todos los grifos** por igual (a diferencia de un problema específico de un accesorio)
- **Peor durante** horas pico de uso

## 5. Grietas en Paredes, Suelos o Cimientos

El agua socava los cimientos y causa movimiento estructural:

- **Nuevas grietas** apareciendo en paredes o techos
- **Puertas y ventanas** que de repente se atascan
- **Suelos desnivelados** o estructuras inclinadas
- **Grietas en entradas** o patios cerca de la sospechada fuga

## 6. Sonido de Agua Corriendo

A veces puedes escuchar fugas subterráneas si sabes qué buscar:

- **Silbidos o zumbidos** cerca de paredes o suelos
- **Sonido de agua corriendo** cuando no se usa agua
- **Más fuerte por la noche** cuando el ruido ambiental es menor

Los detectores profesionales de fugas usan equipos acústicos sensibles para amplificar estos sonidos y localizar con precisión las ubicaciones de las fugas.

## 7. Zonas Calientes en los Suelos

Si tienes tuberías de agua caliente bajo losas de hormigón, una fuga puede crear:

- **Zonas calientes** en suelos de baldosas o hormigón
- **Calentamiento localizado** en áreas específicas
- **Temperatura del suelo más alta** de lo normal

Esto es particularmente notable en propiedades con aire acondicionado.

## Por Qué las Fugas Subterráneas Son Tan Peligrosas

Ignorar estas señales de advertencia puede llevar a:

- **Facturas de agua enormes**: Una fuga significativa puede desperdiciar miles de litros al mes
- **Daños en cimientos**: La erosión del agua socava la integridad estructural
- **Moho y hongos**: La humedad persistente crea riesgos para la salud
- **Destrucción del paisaje**: Erosión y daño a las raíces
- **Responsabilidad legal**: Si la fuga afecta propiedades vecinas

## Detección Profesional de Fugas Subterráneas

Encontrar la ubicación exacta de una fuga subterránea requiere equipo especializado:

### Tecnología que Usamos

- **Dispositivos de escucha acústica**: Amplifican el sonido del agua escapando
- **Cámaras de imagen térmica**: Detectan diferencias de temperatura causadas por fugas
- **Detección de gas trazador**: Inyectamos gas inofensivo y detectamos dónde emerge
- **Radar de penetración terrestre**: Mapea tuberías subterráneas y huecos

### La Ventaja de Canary Detect

Nuestra **garantía Sin Encontrar, Sin Pagar** significa que confiamos en nuestra capacidad para localizar tu fuga. Hemos invertido más de 80.000€ en la última tecnología de detección, permitiéndonos encontrar fugas con precisión centimétrica.

## ¿Qué Pasa Cuando Encontramos tu Fuga?

Una vez localizada, podemos:

1. **Marcar la ubicación exacta** para el contratista que elijas
2. **Proporcionar un informe detallado** para propósitos de seguros
3. **Recomendar opciones de reparación** basadas en el tipo de fuga
4. **Ofrecer servicios de reparación** para ciertos tipos de fugas

## No Esperes: Actúa Ante las Señales de Advertencia

Las fugas de agua subterráneas solo empeoran con el tiempo. Si has notado alguna de estas señales de advertencia, contáctanos para una inspección profesional de detección de fugas.

**Canary Detect** sirve a toda Lanzarote incluyendo Arrecife, Puerto del Carmen, Playa Blanca, Costa Teguise, Yaiza y Tías.

[Obtén un presupuesto gratis hoy →](/es/contacto)
    `
  },
  {
    id: 3,
    slug: "contador-agua-girando-grifos-cerrados",
    title: "¿El Contador de Agua Gira con los Grifos Cerrados? Esto Es lo que Significa",
    excerpt: "Si tu contador de agua sigue girando con todos los grifos cerrados, probablemente tienes una fuga oculta. Aprende cómo comprobarlo y qué hacer.",
    date: "2026-01-02",
    author: "Pete Ashcroft",
    category: "Consejos",
    image: waterMeterImg,
    metaTitle: "Contador Agua Girando Grifos Cerrados | Lanzarote",
    metaDescription: "¿Contador de agua gira con grifos cerrados? Tienes una fuga oculta. Aprende a comprobarlo en Lanzarote.",
    keywords: "contador agua girando grifos cerrados, fuga agua oculta, detección fugas agua, contador girando sin uso, encontrar fuga agua, detección fugas Lanzarote",
    readTime: 6,
    content: `
## El Misterio del Contador que Gira

Has cerrado todos los grifos, te has asegurado de que la lavadora no está funcionando, y has comprobado que ningún inodoro está descargando – pero el dial de tu contador de agua sigue moviéndose. Esta situación frustrante es un indicador claro de que el agua está escapando de algún lugar de tu sistema.

Vamos a explorar qué significa esto y cómo encontrar la fuente.

## Confirmando que Tienes una Fuga

Antes de llamar para pedir ayuda, realiza esta simple prueba:

### La Prueba del Contador de 30 Minutos

1. **Localiza tu contador de agua** (normalmente en una caja cerca de la calle o el límite de la propiedad)
2. **Anota la lectura exacta** incluyendo todos los decimales
3. **Asegúrate de que no se usa agua** en ningún lugar de la propiedad
4. **Espera 30 minutos** sin usar agua
5. **Revisa la lectura de nuevo**

Si los números han cambiado, tienes una fuga. La cantidad de cambio indica la gravedad:

- **Movimiento pequeño**: Fuga menor, pero aún necesita atención
- **Movimiento significativo**: Fuga mayor que requiere acción urgente
- **Giro rápido**: Fuga seria – considera cerrar el suministro principal

## ¿A Dónde Va el Agua?

Las fugas ocultas pueden ocurrir en varias ubicaciones:

### Dentro de tu Propiedad
- **Bajo los suelos**: Especialmente losas de hormigón
- **Detrás de las paredes**: En tuberías ocultas
- **En los techos**: Si las tuberías pasan por pisos superiores
- **Cisternas de inodoros**: Fugas de rebosamiento silenciosas

### Fuera de tu Propiedad
- **Tuberías de suministro subterráneas**: Entre el contador y la casa
- **Riego del jardín**: Tuberías enterradas y accesorios
- **Piscina**: Fugas de fontanería y del vaso
- **Fuentes ornamentales**: Fuentes y estanques

## Comprobaciones Rápidas que Puedes Hacer

Antes de llamar a profesionales, prueba estas investigaciones sencillas:

### Revisa Todos los Inodoros
1. Quita la tapa de la cisterna
2. Añade colorante alimentario al tanque
3. Espera 15 minutos sin tirar de la cadena
4. Si aparece color en la taza, la válvula de descarga está fugando

### Escucha las Fugas
- Pon tu oído en las paredes cerca de las tuberías
- Escucha por la noche cuando está tranquilo
- Revisa cerca de calentadores de agua y tanques

### Inspección Visual
- Busca manchas húmedas en paredes o suelos
- Revisa bajo los fregaderos y alrededor de electrodomésticos
- Inspecciona tuberías visibles en busca de goteos

## Por Qué las Fugas Ocultas Son Costosas

En Lanzarote, el agua es cara. Una fuga que desperdicia solo 1 litro por minuto suma:

- **1.440 litros al día**
- **43.800 litros al mes**
- **525.600 litros al año**

Eso no es solo agua desperdiciada – es dinero desperdiciado y potencial daño a la propiedad.

## Cuándo Llamar a Profesionales

Si tu prueba del contador confirma una fuga pero no puedes encontrar la fuente, es hora de detección profesional de fugas.

### Lo Que Aportamos a la Búsqueda

En Canary Detect, usamos:

- **Detección acústica**: Escucha el sonido del agua escapando
- **Imagen térmica**: Ve los cambios de temperatura de las fugas
- **Gas trazador**: Encuentra el punto exacto de salida de las fugas
- **Pruebas de presión**: Aísla secciones de tu fontanería

Nuestro equipo puede localizar fugas ocultas bajo hormigón, detrás de paredes, o en lo profundo del subsuelo.

## El Enfoque de Canary Detect

Cuando nos llamas por un contador de agua girando:

1. **Escuchamos** para entender tu situación
2. **Inspeccionamos** tu contador y fontanería visible
3. **Probamos** usando nuestro equipo profesional
4. **Localizamos** la posición exacta de la fuga
5. **Informamos** con documentación clara

Nuestra **garantía Sin Encontrar, Sin Pagar** significa que no pagas a menos que encontremos la fuga.

## Detén el Giro Hoy

Un contador de agua girando es tu propiedad diciéndote que algo está mal. No lo ignores – el problema solo empeorará y será más caro.

**Contacta con Canary Detect** para detección profesional de fugas en toda Lanzarote. Servimos Arrecife, Puerto del Carmen, Playa Blanca, Costa Teguise y todas las áreas de la isla.

[Reserva una inspección de detección de fugas →](/es/contacto)
    `
  },
  {
    id: 4,
    slug: "paredes-humedas-causas-soluciones",
    title: "Paredes Húmedas en Lanzarote: Causas, Detección y Soluciones",
    excerpt: "Las paredes húmedas no son solo antiestéticas – indican intrusión de agua que necesita ser tratada. Aprende las causas comunes y cómo solucionarlas.",
    date: "2024-12-18",
    author: "Dave Poxon",
    category: "Consejos",
    image: risingDampImg,
    metaTitle: "Paredes Húmedas Causas y Soluciones | Lanzarote",
    metaDescription: "¿Paredes húmedas en Lanzarote? Descubre causas desde tuberías con fugas hasta condensación y cómo resolverlo.",
    keywords: "paredes húmedas, daño agua paredes, detección fugas pared, humedad por capilaridad, humedad por filtración, problemas condensación, detección fugas Lanzarote",
    readTime: 7,
    content: `
## ¿Por Qué Están Mis Paredes Húmedas?

Las paredes húmedas son un problema común en propiedades de toda Lanzarote, pero las causas no siempre son obvias. Lo que parece simple condensación podría ser en realidad una fuga de agua oculta causando daño continuo.

Entender el tipo de humedad es el primer paso para resolver el problema.

## Tipos de Humedad en Paredes

### 1. Humedad por Capilaridad

El agua del suelo sube a través de las paredes por acción capilar.

**Características:**
- Afecta solo a paredes de planta baja
- Marcas de marea hasta 1 metro de altura
- Depósitos de sal en la superficie de la pared
- Pintura y papel tapiz despegándose

**Común en Lanzarote**: Menos común debido al clima seco, pero puede ocurrir en propiedades antiguas sin barrera antihumedad.

### 2. Humedad por Filtración

El agua entra a través de la pared desde el exterior.

**Características:**
- Puede aparecer a cualquier altura
- Peor durante o después de la lluvia
- A menudo localizada en áreas específicas
- Puede seguir grietas o juntas dañadas

**Común en Lanzarote**: Muy común, especialmente en propiedades expuestas al clima o con exteriores envejecidos.

### 3. Condensación

El aire cálido y húmedo encontrándose con superficies frías crea humedad.

**Características:**
- Peor en meses de invierno
- A menudo en esquinas y detrás de muebles
- Acompañada de crecimiento de moho
- Afecta múltiples habitaciones

**Común en Lanzarote**: Menos común debido al clima cálido y buena ventilación, pero puede ocurrir en propiedades mal ventiladas.

### 4. Fugas de Tuberías

Tuberías de agua ocultas fugando detrás de las paredes.

**Características:**
- Humedad persistente independientemente del clima
- Puede estar caliente si es tubería de agua caliente
- A menudo localizada en puntos específicos
- Puede estar acompañada de baja presión de agua

**Común en Lanzarote**: Muy común, especialmente en propiedades antiguas con tuberías envejecidas.

## Cómo Identificar la Causa

### Pistas Visuales

| Señal | Causa Probable |
|-------|----------------|
| Marca de marea a altura constante | Humedad por capilaridad |
| Húmedo después de la lluvia | Humedad por filtración |
| Crecimiento de moho negro | Condensación |
| Mancha húmeda caliente | Fuga de tubería de agua caliente |
| Humedad continua | Fuga de tubería |

### Pruebas Caseras

**La Prueba del Papel de Aluminio:**
1. Pega papel de aluminio a la pared húmeda
2. Sella todos los bordes con cinta
3. Espera 24-48 horas
4. Revisa ambos lados del papel

- Humedad en el lado de la pared = fuente interna (fuga de tubería o capilaridad)
- Humedad en el lado de la habitación = condensación

## Los Peligros de Ignorar Paredes Húmedas

La humedad no tratada lleva a:

- **Daño estructural**: Paredes y yeso debilitados
- **Crecimiento de moho**: Riesgos para la salud especialmente para condiciones respiratorias
- **Peligros eléctricos**: El agua y la electricidad no se mezclan
- **Devaluación de la propiedad**: La humedad es una preocupación importante para compradores
- **Costos de reparación crecientes**: Los problemas empeoran con el tiempo

## Detección Profesional de Fugas para Paredes Húmedas

Cuando se sospechan fugas de tuberías, la detección profesional es esencial:

### Tecnología que Usamos

**Imagen Térmica**: Las tuberías con fugas crean diferencias de temperatura visibles en cámaras térmicas. Este método no invasivo nos muestra exactamente dónde fluye el agua detrás de tus paredes.

**Mapeo de Humedad**: Los medidores electrónicos de humedad crean un mapa detallado de la humedad, ayudando a identificar la fuente y extensión del daño por agua.

**Detección Acústica**: Micrófonos sensibles pueden escuchar el sonido del agua escapando de las tuberías, incluso a través de paredes y suelos.

**Gas Trazador**: Para fugas difíciles de encontrar, inyectamos gas trazador inofensivo en las tuberías y detectamos dónde escapa.

## Soluciones para Diferentes Tipos de Humedad

### Para Fugas de Tuberías
1. Detección profesional de fugas para localizar la fuente
2. Reparar o reemplazar la sección dañada
3. Permitir que las paredes se sequen (puede tomar semanas)
4. Reenyesar y redecorar

### Para Humedad por Filtración
1. Identificar punto de entrada
2. Reparar pared exterior, juntas o sellados
3. Considerar impermeabilización externa
4. Permitir secado antes de redecorar

### Para Humedad por Capilaridad
1. Instalar barrera química antihumedad
2. Reenyesar con mortero especializado
3. Asegurar que los niveles del suelo son correctos
4. Mejorar el drenaje alrededor de la propiedad

### Para Condensación
1. Mejorar la ventilación
2. Considerar deshumidificación
3. Aumentar el aislamiento si es posible
4. Abordar factores de estilo de vida

## ¿Por Qué Elegir Canary Detect?

Nos especializamos en encontrar las causas ocultas de las paredes húmedas:

- **Métodos no invasivos**: Sin daño innecesario a las paredes
- **Detección precisa**: Localización exacta de fugas
- **Informes detallados**: Para seguros y contratistas
- **Sin Encontrar, Sin Pagar**: Resultados garantizados

## Haz que Investiguen tus Paredes Húmedas

No adivines la causa de tus paredes húmedas – obtén un diagnóstico profesional. Lo que parece condensación podría ser una fuga oculta que te cuesta dinero cada día.

**Contacta con Canary Detect** para servicios de detección de fugas en toda Lanzarote.

[Solicita una inspección →](/es/contacto)
    `
  },
  {
    id: 5,
    slug: "imagen-termica-deteccion-fugas-explicada",
    title: "Cómo la Imagen Térmica Encuentra Fugas de Agua Ocultas: Tecnología Explicada",
    excerpt: "Descubre cómo las cámaras de imagen térmica detectan fugas de agua detrás de paredes y bajo suelos sin ningún daño a tu propiedad.",
    date: "2024-12-10",
    author: "Pete Ashcroft",
    category: "Tecnología",
    image: thermalUndergroundImg,
    metaTitle: "Imagen Térmica Detección Fugas | Lanzarote",
    metaDescription: "Cómo las cámaras térmicas encuentran fugas ocultas detrás de paredes y bajo suelos. Tecnología no invasiva por expertos de Lanzarote.",
    keywords: "imagen térmica detección fugas, detección fugas infrarroja, detección fugas no invasiva, encontrar fuga sin daño, cámara térmica fuga agua, tecnología detección fugas",
    readTime: 6,
    content: `
## La Ciencia de Ver lo Invisible

La imagen térmica es una de las herramientas más potentes en la detección moderna de fugas. Esta tecnología nos permite "ver" diferencias de temperatura que son invisibles a simple vista, revelando fugas de agua ocultas sin cortar paredes o suelos.

## Cómo Funciona la Imagen Térmica

### El Principio Básico

Todo emite radiación infrarroja basada en su temperatura. Las cámaras de imagen térmica detectan esta radiación y la convierten en una imagen visible donde diferentes temperaturas aparecen como diferentes colores.

**En detección de fugas:**
- El agua evaporándose crea áreas más frías
- Las tuberías de agua caliente aparecen como líneas cálidas
- La humedad en las paredes se muestra como variaciones de temperatura
- Las ubicaciones de fugas se convierten en patrones visibles

### Lo Que Ve la Cámara

Una imagen térmica típica muestra:
- **Azul/púrpura**: Áreas más frías (a menudo húmedas)
- **Verde/amarillo**: Temperaturas normales
- **Naranja/rojo**: Áreas más cálidas (tuberías calientes o superficies calentadas por el sol)

## Ventajas de la Imagen Térmica

### 1. Detección No Invasiva

La búsqueda tradicional de fugas podría implicar:
- Hacer agujeros en paredes
- Romper suelos
- Excavar jardines

La imagen térmica no requiere **nada de esto**. Simplemente apuntamos la cámara a las superficies y vemos lo que está pasando dentro.

### 2. Velocidad y Eficiencia

Una inspección térmica puede cubrir grandes áreas rápidamente:
- Habitaciones enteras en minutos
- Propiedades completas en horas
- Resultados inmediatos en pantalla

### 3. Documentación

Las imágenes térmicas proporcionan:
- Prueba visual de ubicaciones de fugas
- Comparación antes y después
- Evidencia para reclamaciones de seguros
- Registros para contratistas

### 4. Encontrar Múltiples Problemas

Durante una inspección térmica, a menudo descubrimos:
- Fugas adicionales más pequeñas
- Deficiencias de aislamiento
- Puntos calientes eléctricos
- Puntos de infiltración de aire

## Limitaciones de la Imagen Térmica

### No Es Visión de Rayos X

Las cámaras térmicas ven diferencias de temperatura en superficies, no a través de ellas. Necesitamos:
- Que existan diferencias de temperatura
- Tiempo adecuado para transferencia de calor
- Condiciones ambientales apropiadas

### Mejores Condiciones

La imagen térmica funciona mejor:
- Cuando los sistemas de calefacción/refrigeración están funcionando
- Con diferencia de temperatura entre interior y exterior
- Cuando las superficies han tenido tiempo de estabilizarse
- Sin interferencia de luz solar directa

## Aplicaciones del Mundo Real en Lanzarote

### Fugas de Tuberías de Agua Caliente

Las tuberías de agua caliente que pasan por paredes o bajo suelos se detectan fácilmente:
- Las tuberías de agua caliente se muestran claramente como líneas cálidas en la imagen térmica
- Las fugas aparecen como manchas frías húmedas donde el agua está escapando
- Áreas enteras pueden escanearse rápidamente sin molestias

### Fugas de Piscinas

Para detección de fugas de piscinas:
- Las cámaras térmicas pueden identificar rutas de tuberías subterráneas
- Las fugas se muestran como puntos fríos donde el agua emerge
- Los vasos de piscinas pueden escanearse en busca de anomalías de temperatura

### Fugas de Techos Planos

Muchas propiedades de Lanzarote tienen techos planos:
- La humedad atrapada se muestra como diferencias de temperatura
- Los puntos de entrada pueden identificarse antes de la lluvia
- Grandes áreas inspeccionadas eficientemente

## Nuestro Equipo de Imagen Térmica

En Canary Detect, usamos cámaras de imagen térmica de grado profesional con:

- **Alta resolución**: Imágenes detalladas que muestran ubicaciones precisas
- **Precisión de temperatura**: Lecturas ±2% para análisis fiable
- **Amplio rango de temperatura**: Adecuado para todas las condiciones
- **Grabación digital**: Capacidad completa de documentación

## La Imagen Térmica en Nuestro Proceso de Detección

La imagen térmica es a menudo el primer paso en nuestro enfoque integral:

1. **Inspección térmica**: Identificar áreas de preocupación
2. **Mapeo de humedad**: Confirmar áreas húmedas electrónicamente
3. **Detección acústica**: Escuchar fugas activas
4. **Gas trazador**: Localizar ubicaciones exactas de fugas

Este enfoque multi-tecnológico asegura que encontremos fugas con precisión y eficiencia.

## Caso de Estudio: Villa en Playa Blanca

**El problema**: El propietario notó facturas de agua crecientes pero sin fugas visibles.

**La imagen térmica reveló**: Una firma térmica clara mostrando el camino de una tubería de agua caliente con un punto frío distintivo donde el agua estaba escapando.

**El resultado**: Fuga localizada con precisión, reparación completada con daño mínimo al suelo, factura de agua volvió a la normalidad.

## Reserva una Inspección de Imagen Térmica

Si sospechas fugas ocultas en tu propiedad de Lanzarote, la imagen térmica puede revelar la verdad sin ningún daño.

**Contacta con Canary Detect** – nuestra **garantía Sin Encontrar, Sin Pagar** asegura que solo pagas cuando encontramos tu fuga.

[Programa tu inspección →](/es/contacto)
    `
  },
  {
    id: 6,
    slug: "coste-reparacion-fugas-piscina-lanzarote",
    title: "Costes de Reparación de Fugas de Piscina en Lanzarote: Qué Esperar",
    excerpt: "Entiende los costes de detección y reparación de fugas de piscina en Lanzarote. Desde arreglos menores hasta reparaciones mayores, aquí está tu guía completa de precios.",
    date: "2024-12-01",
    author: "Dave Poxon",
    category: "Cuidado de Piscinas",
    image: poolDiverImg,
    metaTitle: "Coste Reparación Fuga Piscina Lanzarote",
    metaDescription: "¿Cuánto cuesta reparar fugas de piscina en Lanzarote? Guía completa de precios. Garantía Sin Encontrar, Sin Pagar.",
    keywords: "coste reparación fuga piscina, precio detección fugas piscina, coste arreglar fuga piscina Lanzarote, precios reparación piscina, coste detección fugas, reparación fontanería piscina",
    readTime: 7,
    content: `
## Entendiendo los Costes de Fugas de Piscina

Cuando tu piscina está perdiendo agua, una de tus primeras preguntas probablemente sea "¿Cuánto costará arreglar esto?" La respuesta depende de varios factores, desde el tipo de fuga hasta su ubicación y accesibilidad.

Esta guía desglosa los costes típicos que puedes esperar en Lanzarote.

## Costes de Detección Profesional de Fugas

Antes de que cualquier reparación pueda ocurrir, la fuga debe ser encontrada. La detección profesional de fugas típicamente cuesta:

### Inspección Estándar de Piscina
- **Qué incluye**: Inspección exhaustiva del vaso de la piscina, accesorios y fontanería visible
- **Tecnología usada**: Prueba de tinte, prueba de presión, detección electrónica
- **Duración**: 2-4 horas
- **Resultado**: Informe detallado identificando ubicación(es) de la fuga

### Inspección Extendida (Fugas Complejas)
- **Qué incluye**: Prueba de presión completa de fontanería, investigación de tuberías subterráneas
- **Tecnología usada**: Gas trazador, detección acústica, imagen térmica
- **Duración**: Medio día a día completo
- **Resultado**: Ubicación precisa de fugas ocultas

**Recuerda**: Nuestra **garantía Sin Encontrar, Sin Pagar** significa que solo pagas cuando localizamos exitosamente tu fuga.

## Reparaciones Comunes de Fugas de Piscina y Costes

### Reparaciones Menores

**Reemplazo de Accesorios**
- Nichos de luces, accesorios de retorno, caras de skimmers
- Normalmente reemplazo sencillo
- Puede requerir vaciar parcialmente la piscina

**Reparaciones de Lechada y Azulejos**
- Relechado de líneas de azulejos
- Reemplazo de azulejos agrietados
- Parches de superficie

**Reparaciones de Equipos**
- Reemplazo de sello de bomba
- Arreglos de carcasa de filtro
- Reemplazos de válvulas

### Reparaciones Moderadas

**Reparaciones de Skimmer**
- Cuerpos de skimmer agrietados
- Conexiones skimmer-piscina
- Puede requerir cortar la terraza

**Reparaciones de Grietas en el Vaso**
- Grietas superficiales en fibra de vidrio o hormigón
- Inyección de grietas estructurales
- Aplicación de revestimiento impermeabilizante

**Reparaciones Subacuáticas**
- Reparaciones aplicadas por buzo
- Aplicaciones de epoxi
- Sellados de accesorios

### Reparaciones Mayores

**Reparaciones de Tuberías Subterráneas**
- Excavación requerida
- Reemplazo de tuberías
- Restauración de la terraza

**Reenlucido de Piscina**
- Si las fugas son a través de superficie deteriorada
- Vaciado completo requerido
- Proceso de varios días

**Reparaciones Estructurales**
- Problemas de cimientos
- Daño mayor del vaso
- Puede requerir consulta de ingeniería

## Factores que Afectan los Costes de Reparación

### Ubicación de la Fuga
- **Accesible**: Accesorios, tuberías visibles = coste menor
- **Oculta**: Detrás de paredes, bajo terraza = coste mayor
- **Subterránea**: Tuberías enterradas = coste más alto

### Tipo de Fuga
- **Simple**: Fallo de junta o sello = reparación sencilla
- **Compleja**: Múltiples fugas, daño en vaso = trabajo extensivo

### Tipo de Piscina
- **Fibra de vidrio**: Generalmente reparaciones más fáciles
- **Hormigón/gunite**: Más trabajo intensivo
- **Con azulejos**: Trabajo adicional de azulejos requerido

### Accesibilidad
- **Fácil acceso**: Equipo estándar suficiente
- **Difícil acceso**: Equipo especial, más tiempo

## Consejos para Ahorrar Costes

### Actúa Temprano
Las fugas pequeñas se convierten en fugas grandes. Un accesorio que gotea hoy podría estar soltando chorros el próximo mes. La detección y reparación temprana ahorra dinero.

### Obtén Detección Adecuada Primero
No dejes que los contratistas empiecen a cavar sin detección profesional de fugas. Encontrar la ubicación exacta primero previene excavación innecesaria y costes de reparación.

### Considera la Edad de la Piscina
Para piscinas antiguas con múltiples problemas, sopesa los costes de reparación contra opciones de renovación.

### Mantenimiento Regular
El mantenimiento preventivo detecta problemas antes de que se conviertan en reparaciones caras.

## El Verdadero Coste de Ignorar Fugas de Piscina

Una piscina con fugas cuesta dinero cada día:

**Pérdida de agua**: Rellenado constante aumenta las facturas de agua
**Desperdicio de químicos**: El agua arrastra químicos caros
**Costes de energía**: Calentar agua de reposición
**Daño estructural**: El agua socava la terraza y alrededores
**Desgaste de equipos**: Las bombas trabajan más duro para mantener niveles

Incluso una fuga moderada puede costar 50-100€+ al mes solo en agua.

## Nuestro Enfoque a la Detección de Fugas de Piscina

En Canary Detect:

1. **Inspeccionamos a fondo**: Identificamos todas las fugas, no solo la obvia
2. **Informamos claramente**: Proporcionamos hallazgos detallados con fotos
3. **Aconsejamos honestamente**: Recomendamos enfoques de reparación apropiados
4. **Garantizamos resultados**: Sin Encontrar, Sin Pagar en servicios de detección

## ¿Por Qué Elegir Detección Profesional?

**Riesgos del enfoque DIY:**
- Perder fugas ocultas
- Diagnosticar mal el problema
- Reparaciones innecesarias
- Pérdida continua de agua

**La detección profesional proporciona:**
- Ubicación precisa de fugas
- Evaluación completa
- Documentación para contratistas
- Reparaciones rentables

## Haz que Inspeccionen tu Piscina

Deja de perder agua y dinero. Contacta con Canary Detect para detección profesional de fugas de piscinas en toda Lanzarote.

Servimos a propietarios de piscinas en Playa Blanca, Puerto del Carmen, Costa Teguise, Yaiza y en toda la isla.

[Solicita una inspección de fugas de piscina →](/es/contacto)
    `
  },
  {
    id: 8,
    slug: "deteccion-reparacion-fugas-emergencia-lanzarote",
    title: "Detección y Reparación de Fugas de Emergencia: Completado en Una Tarde",
    excerpt: "Descubre cómo Los Cazafugas detectaron, localizaron, repararon y restauraron una fuga de agua oculta en solo una tarde usando tecnología avanzada y precisión quirúrgica.",
    date: "2026-01-27",
    author: "Pete Ashcroft",
    category: "Casos de Éxito",
    image: emergencyLeakAcousticImg,
    metaTitle: "Detección y Reparación de Fugas Emergencia Lanzarote",
    metaDescription: "Caso real: fuga de agua oculta detectada, localizada, reparada y restaurada en una tarde. Tecnología de precisión, mínima interrupción. Canary Detect Lanzarote.",
    keywords: "detección fugas emergencia Lanzarote, reparación fugas agua, fuga oculta encontrada, reparación tubería, caso de éxito, Canary Detect",
    readTime: 6,
    content: `
## Precisión • Rapidez • Resultados

**La llamada:** Un contador de agua girando sin parar, ninguna señal visible de fuga, y huéspedes de vacaciones a punto de llegar. El cliente necesitaba respuestas — rápido.

Este caso de éxito muestra cómo Los Cazafugas detectaron, localizaron, repararon y restauraron completamente una fuga subterránea oculta en solo **una tarde** — con mínima interrupción para la propiedad.

---

## Paso 1: Precisión Milimétrica

### Tecnología Avanzada Localiza la Fuente

Usando equipos de **detección acústica y gas trazador** de última generación, localizamos la ubicación exacta de la fuga. Esta precisión elimina las conjeturas y el daño innecesario a tu propiedad.

![Equipo de detección acústica de fugas en uso](/assets/blog/emergency-leak-acoustic-detection.jpg)

*Nuestro especialista utiliza equipos de detección acústica avanzados para escuchar los sonidos reveladores del agua escapando de tuberías presurizadas.*

**Lo encontramos a la primera, siempre.**

---

## Paso 2: Evidencia con Cámara Interna

### Localización y Profundidad Precisas

Nuestra avanzada **cámara CCTV** puede localizarse con precisión desde la superficie con exactitud centimétrica, incluyendo medición exacta de profundidad. Esto asegura que sabemos exactamente dónde excavar antes de romper el suelo.

![Cámara interna CCTV mostrando grieta en tubería](/assets/blog/emergency-leak-cctv.jpg)

*Inspección con cámara interna a 4,39m de profundidad revela la grieta en la tubería — evidencia documentada para reclamaciones de seguro.*

**Precisión de localización: exactitud centimétrica**

---

## Paso 3: Excavación Mínima

### Levantar Una Sola Baldosa Demuestra Precisión Quirúrgica

Nuestro enfoque específico significa levantar solo **una baldosa** para acceder a la fuga. Este método de interrupción mínima protege tu propiedad y acelera todo el proceso.

![Excavación mínima a través de una sola baldosa](/assets/blog/emergency-leak-hole.jpg)

*Solo lo necesario: levantar una sola baldosa proporciona acceso a la sección de tubería dañada.*

**Interrupción mínima — solo lo necesario**

---

## Paso 4: Exponer la Fuga

### Excavación Cuidadosa Revela el Problema

Una vez confirmada la ubicación exacta, excavamos cuidadosamente para exponer la tubería dañada. El enfoque controlado asegura que podamos evaluar y reparar el problema eficientemente.

![Excavación revelando fuga de agua activa](/assets/blog/emergency-leak-excavation.jpg)

*Agua fluyendo activamente de la tubería expuesta — confirmación visual de la fuga que detectamos desde la superficie.*

**Acceso controlado a la sección dañada**

---

## Paso 5: Fuga Confirmada

### Estado: Fuga Activa Identificada

La fuga está expuesta y fluyendo activamente, confirmando que nuestra detección fue precisa. Esta documentación es **crítica para reclamaciones de seguro**.

<video controls class="w-full rounded-lg shadow-lg my-6">
  <source src="/videos/emergency-leak-video.mp4" type="video/mp4">
  Tu navegador no soporta el elemento de video.
</video>

*Evidencia en video de la fuga activa — documentación esencial para tu reclamación de seguro.*

**La evidencia visual apoya la presentación de reclamaciones de seguro**

---

## Paso 6: Reparación Profesional

### Fontanero Cualificado Completa la Reparación

Un fontanero cualificado repara la sección de tubería dañada según los estándares de la industria. La reparación profesional asegura que la solución sea **permanente** y cumpla todos los requisitos regulatorios.

![Tubería reparada con nuevos accesorios](/assets/blog/emergency-leak-pipe-repair.jpg)

*Nuevas secciones de tubería y accesorios instalados según estándares de la industria — una solución permanente.*

**La reparación cualificada cumple los estándares de seguro y regulatorios**

---

## Paso 7: Restauración Completa

### Propiedad Restaurada a su Condición Original

El área está completamente restaurada con baldosas reemplazadas y lechada completada. **No sabrías que estuvimos allí.**

![Suelo restaurado después de reparación de fuga](/assets/blog/emergency-leak-wet-floor.jpg)

*Baldosas reemplazadas, lechada completada — la propiedad restaurada a su condición original.*

**Como si nunca hubiéramos estado.**

---

## Todo Completado en Una Tarde

<div class="completion-checklist">

- ✅ Fuga detectada y localizada
- ✅ Inspección con cámara interna
- ✅ Excavación mínima (una sola baldosa)
- ✅ Reparación profesional por fontanero cualificado
- ✅ Restauración completa
- ✅ Informe documentado completo enviado

</div>

---

## Por Qué Esto Importa

La mayoría de las empresas de detección de fugas pueden encontrar una fuga. Pocas pueden ofrecer el **servicio completo** que proporcionamos:

- **Detección**: Equipos avanzados acústicos y de gas trazador
- **Documentación**: Evidencia con cámara CCTV para seguros
- **Interrupción mínima**: Excavación de precisión quirúrgica
- **Reparación profesional**: Fontanero cualificado en el sitio
- **Restauración completa**: Propiedad restaurada a condición original
- **Informes de seguro**: Documentación completa enviada

---

## ¿Tienes una Fuga? No Esperes.

Las fugas ocultas causan **daños estructurales**, **moho** y **facturas de agua altísimas**. Cuanto más esperes, peor será.

[Obtén una prueba de confirmación de fugas gratis →](/es/servicios/confirmacion-fugas-gratis)

**Contacta con Canary Detect** para detección de fugas de emergencia en toda Lanzarote. Servimos Arrecife, Puerto del Carmen, Playa Blanca, Costa Teguise, Yaiza y todas las áreas de la isla.

[Contáctanos ahora →](/es/contacto)
    `
  },
  {
    id: 9,
    slug: "como-saber-si-piscina-tiene-fuga-lanzarote",
    title: "Cómo Saber Si Tu Piscina Tiene una Fuga: 7 Señales de Alerta para Propietarios en Lanzarote",
    excerpt: "¿Tu piscina pierde agua más rápido de lo normal? Aprende las 7 señales reveladoras de una fuga en piscina y qué hacer al respecto en el clima único de Lanzarote.",
    date: "2026-02-01",
    author: "Pete Ashcroft",
    category: "Cuidado de Piscinas",
    image: poolLeakImg,
    metaTitle: "Cómo Saber Si Tu Piscina Tiene Fuga | 7 Señales",
    metaDescription: "Descubre las 7 señales de advertencia de que tu piscina tiene una fuga. Consejos expertos de detección de fugas de piscinas de especialistas en Lanzarote.",
    keywords: "como saber si piscina tiene fuga, señales fuga piscina, piscina pierde agua Lanzarote, síntomas fuga piscina, pérdida agua piscina, detección fugas piscina Lanzarote",
    readTime: 7,
    content: `
## ¿Tu Piscina en Lanzarote Pierde Agua?

Ser propietario de una piscina en Lanzarote conlleva desafíos únicos. Entre el sol intenso, los vientos alisios y el suelo volcánico, el mantenimiento de la piscina requiere atención constante. Pero, ¿cómo sabes si tu piscina simplemente evapora agua—o si tienes una fuga genuina?

Después de más de 10 años detectando fugas de piscinas en toda Lanzarote, hemos identificado las **7 señales de advertencia más fiables** que indican que tu piscina tiene una fuga.

## 1. El Nivel del Agua Baja Más de 5cm por Semana

Cierta pérdida de agua es normal en el clima de Lanzarote:
- **Evaporación**: 3-7mm por día durante el verano
- **Salpicaduras**: El uso activo causa pérdidas menores
- **Contralavado**: La limpieza del filtro usa agua

Pero si pierdes **más de 5cm por semana**, casi seguro que tienes una fuga.

### La Prueba del Cubo

Coloca un cubo en el escalón de tu piscina, llénalo hasta igualar el nivel del agua de la piscina y marca ambos niveles. Espera 24 horas. Si la piscina baja más que el cubo, tienes una fuga—no es evaporación.

## 2. Rellenado Constante desde el Aljibe o Red

En Lanzarote, la mayoría de las piscinas se rellenan desde un **aljibe** o directamente de la red. Las señales de advertencia incluyen:

- El aljibe se vacía más rápido de lo habitual
- Los camiones cisterna se necesitan con más frecuencia
- El contador de agua gira incluso cuando la bomba de la piscina está apagada
- Facturas de agua más altas de lo normal

Si rellenas más de una vez a la semana en pleno verano, investiga más.

## 3. Grietas en el Vaso o Azulejos de la Piscina

Las señales visuales de daño a menudo indican puntos de fuga:

- **Grietas capilares** en el enlucido o fibra de vidrio
- **Azulejos sueltos o faltantes** alrededor de la línea de agua
- **Sonidos huecos** al golpear azulejos (indicando despegue)
- **Patrones de manchas** que siguen las líneas de grietas
- **Eflorescencia** (depósitos minerales blancos) alrededor de grietas

El suelo volcánico de Lanzarote puede moverse, causando movimiento estructural que produce grietas.

## 4. Manchas Húmedas Alrededor del Área de la Piscina

Busca humedad inexplicable:

- **Césped empapado** o áreas fangosas cerca de la piscina
- **Manchas húmedas** en la terraza que no se secan
- **Crecimiento de algas verdes** en paredes circundantes
- **Erosión** o hundimientos cerca del equipo de la piscina
- **Agua estancada** alrededor de la sala de bombas

Esto indica que el agua está escapando bajo tierra y emergiendo cerca.

## 5. Problemas de Desequilibrio Químico

Las piscinas con fugas tienen dificultades para mantener la química:

- El **cloro desaparece** más rápido de lo normal
- El **pH fluctúa** constantemente a pesar del tratamiento
- **Floraciones de algas** a pesar de tener suficiente desinfectante
- La **dureza del calcio baja** inesperadamente
- Necesidad de añadir **más productos químicos** de lo habitual

El agua fresca que entra por las fugas diluye continuamente tus productos químicos.

## 6. Burbujas de Aire en los Retornos

Cuando el aire entra en tu sistema de fontanería:

- **Burbujas salen** de los retornos
- La **bomba tiene dificultades** para cebarse o pierde el cebado
- **Sonidos de gorgoteo** en las tuberías
- Lecturas del **manómetro fluctuantes**

Las burbujas de aire a menudo indican una grieta en el lado de succión de tu fontanería—una ubicación común de fugas.

## 7. El Equipo de la Piscina Funciona Constantemente

Tu bomba trabaja más para compensar la pérdida de agua:

- La **bomba funciona más horas** de lo programado
- La **válvula de llenado automático** se activa frecuentemente
- **Fluctuaciones de presión** en el sistema del filtro
- **Ruidos inusuales** de la bomba o fontanería

Esta carga de trabajo aumentada también eleva las facturas de electricidad.

---

## Qué Hacer Si Detectas Estas Señales

### Paso 1: Realiza la Prueba del Cubo

Esta simple prueba confirma si tienes una fuga o solo evaporación. [Aprende a hacer la prueba del cubo correctamente →](/es/blog/como-detectar-fugas-en-piscinas-lanzarote)

### Paso 2: Revisa Primero el Equipo

Antes de llamar a profesionales, inspecciona:
- **Nichos de focos** (punto común de fugas)
- **Conexiones del skimmer** (busca grietas)
- **Accesorios de retorno** (asegura sello hermético)
- **Desagüe principal** (daños visibles)

### Paso 3: Obtén Detección Profesional

Si las comprobaciones DIY no encuentran la fuga, necesitas **equipo especializado**:

- **Pruebas de presión** de líneas de fontanería
- **Pruebas de tinte** alrededor de accesorios y grietas
- **Detección acústica** para tuberías subterráneas
- **Imagen térmica** para trazados de tuberías ocultas

---

## Por Qué las Piscinas en Lanzarote Son Propensas a Fugas

### Movimiento del Suelo Volcánico

El sustrato volcánico de Lanzarote se expande y contrae con los cambios de temperatura y humedad, tensionando las estructuras de las piscinas.

### Depósitos de Agua Dura

El agua de red desalinizada en Lanzarote contiene minerales que se depositan en tuberías y accesorios, causando degradación con el tiempo.

### Exposición Intensa a UV

El sol constante degrada los sellos de goma, accesorios de plástico y secciones de tubería flexible más rápido que en climas más fríos.

### Evaporación por Vientos Alisios

Los vientos fuertes aceleran la evaporación, dificultando distinguir entre pérdida natural y fugas.

---

## No Ignores las Fugas de Piscina

Una pequeña fuga desperdicia **miles de litros** al mes, daña tu propiedad y cuesta dinero en:
- Facturas de agua
- Costes de productos químicos
- Electricidad para bombas de llenado
- Reparaciones estructurales eventuales

**Cuanto más esperes, peor será.**

---

## Confirmación de Fugas Gratis

Antes de pagar por un estudio completo, confirma que realmente tienes una fuga con nuestra **Prueba de Confirmación de Fugas Gratis**.

[Obtén tu confirmación de fugas gratis →](/es/servicios/confirmacion-fugas-gratis)

**Contacta con Canary Detect** para detección profesional de fugas de piscinas en toda Lanzarote. Servimos Playa Blanca, Puerto del Carmen, Costa Teguise, Yaiza y todas las áreas de la isla.

[Contáctanos ahora →](/es/contacto)
    `
  },
  {
    id: 10,
    slug: "senales-fuga-agua-villa-lanzarote",
    title: "Señales de Fuga de Agua en Tu Villa: Lo Que Todo Propietario en Lanzarote Debe Saber",
    excerpt: "¿Paredes húmedas, facturas de agua altas o un contador girando? Aprende las señales de advertencia de fugas de agua ocultas en villas y apartamentos de Lanzarote.",
    date: "2026-02-01",
    author: "Canary Detect",
    category: "Detección de Fugas",
    image: waterLeakImg,
    metaTitle: "Señales de Fuga de Agua en Villa | Detección Fugas Lanzarote",
    metaDescription: "Descubre las señales de advertencia de fugas de agua ocultas en tu villa de Lanzarote. Paredes húmedas, facturas altas, contador girando - qué significan.",
    keywords: "señales fuga agua, fuga agua villa Lanzarote, paredes húmedas Lanzarote, fuga agua oculta, señales daño por agua, detección fugas villa",
    readTime: 8,
    content: `
## Fugas Ocultas en Villas de Lanzarote

Las fugas de agua en propiedades de Lanzarote son a menudo **invisibles durante meses** antes de causar daños obvios. Para cuando ves manchas de humedad o moho, ya puede haber ocurrido un daño significativo detrás de las paredes y bajo los suelos.

En Canary Detect, encontramos que el **95% de las fugas están ocultas**—sin goteos visibles, sin señales obvias. Esta guía te ayuda a detectar las señales de advertencia tempranas antes de que ocurran daños costosos.

## Las 10 Señales de Advertencia de una Fuga de Agua Oculta

### 1. Contador de Agua Girando con los Grifos Cerrados

La señal más clara de una fuga es un contador girando con todas las salidas de agua cerradas:

1. Cierra **todos los grifos, duchas y electrodomésticos**
2. Revisa tu contador de agua
3. Mira el pequeño dial rojo o la pantalla digital
4. Si se mueve, el agua está fluyendo a alguna parte

**Importante para Lanzarote**: Si tienes un sistema de **aljibe** (tanque de agua), el comportamiento del contador es más complejo. [Aprende sobre sistemas de aljibe y detección de fugas →](/es/blog/domina-tu-sistema-de-agua-lanzarote)

### 2. Facturas de Agua Inesperadamente Altas

Compara tus facturas a lo largo del tiempo:
- Picos repentinos sin cambios en el uso
- Aumento gradual durante varios meses
- Facturas mucho más altas que vecinos con propiedades similares

En Lanzarote, una pequeña fuga oculta puede desperdiciar **€200-500 al año** solo en costes de agua.

### 3. Manchas Húmedas o Decoloradas en Paredes

Busca:
- **Manchas de humedad** que aparecen sin lluvia
- **Marcas de marea** o líneas de agua en paredes
- **Pintura burbujeante** o descascarillada
- **Papel pintado despegándose** de las paredes
- **Decoloración** (manchas amarillas, marrones)

Estas señales indican que el agua está viajando detrás de la superficie de la pared.

### 4. Olores Mohosos o a Moho

La humedad oculta crea olores distintivos:
- **Olor mohoso, terroso** (como un sótano húmedo)
- **Olor a moho** en habitaciones específicas
- Olores que **se intensifican** después de cerrar la casa

Si el olor aparece después de volver de un viaje, la humedad ha estado acumulándose.

### 5. Crecimiento Visible de Moho

El moho indica humedad sostenida:
- **Manchas negras** en esquinas o detrás de muebles
- **Parches verdes o grises** en paredes
- **Moho en textiles** (cortinas, tapicería)
- **Moho que reaparece** después de limpiarlo

El moho solo crece donde la humedad supera el 60-70% durante períodos prolongados.

### 6. Puntos Calientes o Fríos en Suelos

Las anomalías de temperatura revelan tuberías ocultas:
- **Parches calientes** indican fugas de tuberías de agua caliente
- **Parches fríos** pueden indicar escape de agua fría
- **Baldosas que se sienten a diferentes temperaturas**

Camina descalzo por los suelos de baldosa—notarás las diferencias de temperatura más fácilmente.

### 7. Sonido de Agua Corriendo

Escucha atentamente cuando la casa está en silencio:
- Sonidos de **silbido** en paredes
- Ruidos de **goteo** detrás de accesorios
- Sonidos de **agua corriendo** con los grifos cerrados

Estos sonidos pueden ser intermitentes si están conectados al sistema del aljibe.

### 8. Disminución de la Presión del Agua

Una fuga reduce la presión del sistema:
- **Flujo de ducha débil** comparado con antes
- **Inodoros que tardan en llenarse**
- **Grifos que tardan más** en calentarse
- **Bomba funcionando más frecuentemente** (si tienes una)

Si la presión bajó repentinamente, la fuga puede ser significativa.

### 9. Grietas en Paredes o Cimientos

El daño por agua causa movimiento estructural:
- **Grietas diagonales** desde esquinas de puertas/ventanas
- **Grietas siguiendo líneas de lechada** en azulejos
- **Grietas en cimientos** cerca de rutas de fontanería
- **Puertas/ventanas que se atascan** cuando antes no lo hacían

El suelo volcánico de Lanzarote amplifica esto—el suelo mojado se hincha y se mueve.

### 10. Agua Acumulada en el Exterior

Señales externas de fugas subterráneas:
- **Manchas húmedas** en el camino de entrada o jardín
- **Césped verde y exuberante** en áreas secas
- **Erosión o hundimientos** cerca del edificio
- **Humedad ascendente** en paredes exteriores

Esto indica que el agua está escapando bajo tierra y emergiendo en la superficie.

---

## Dónde Se Esconden las Fugas en Villas de Lanzarote

### Baños

Ubicaciones de fugas más comunes:
- **Detrás de platos de ducha** (impermeabilización fallida)
- **Conexiones del inodoro** (juntas desgastadas)
- **Fontanería del lavabo** (oculta en armarios)
- **Conexiones de suelo radiante** (si está instalado)

### Cocinas

Culpables comunes:
- **Conexiones del lavavajillas** (fugas ocultas durante meses)
- **Fontanería bajo el fregadero** (goteos lentos)
- **Líneas de agua del frigorífico** (fabricadores de hielo)
- **Tuberías de desagüe** (causan olor más que manchas húmedas)

### Techos Planos

La arquitectura de techos planos de Lanzarote es vulnerable:
- **Fallo de impermeabilización** alrededor de bordes
- **Grietas en la solera del techo** por movimiento térmico
- **Drenaje bloqueado** causando encharcamiento
- **Juntas de baldosas de terraza** permitiendo penetración de agua

### Tuberías Subterráneas

Tuberías de jardín y suministro:
- **Suministro de red entre contador y casa**
- **Conexiones del sistema de riego**
- **Fontanería de piscina** (común en Lanzarote)
- **Tuberías de recirculación de agua caliente**

---

## Qué Hacer Si Sospechas una Fuga

### Paso 1: Monitoriza Tu Contador

Registra las lecturas del contador por la mañana y por la noche durante una semana. Incluso pequeños cambios indican una fuga.

### Paso 2: Inspección Visual

Revisa áreas accesibles:
- Bajo todos los fregaderos
- Alrededor de bases de inodoros
- Detrás de lavadoras
- En armarios de servicios

### Paso 3: Escucha Atentamente

Por la noche cuando la casa está en silencio, escucha en las paredes, especialmente cerca de baños y cocinas.

### Paso 4: Obtén Ayuda Profesional

Si encuentras evidencia de una fuga pero no puedes localizarla, necesitas **equipo especializado**:
- **Detección acústica** para escuchar fugas a través de paredes
- **Imagen térmica** para ver anomalías de temperatura
- **Gas trazador** para encontrar fugas de agujeros pequeños
- **Mapeo de humedad** para trazar caminos del agua

---

## Por Qué la Detección DIY A Menudo Falla

Muchos propietarios pasan semanas:
- Abriendo paredes en ubicaciones incorrectas
- Pagando a fontaneros para "investigar"
- Empeorando el daño

El **95% de las fugas** no pueden encontrarse sin equipo especializado. La detección profesional **cuesta menos** que el daño exploratorio.

---

## Confirmación de Fugas Gratis

¿No estás seguro de si tienes una fuga? Nuestra **Prueba de Confirmación de Fugas Gratis** te da una respuesta definitiva antes de comprometerte con un estudio completo.

[Obtén tu confirmación de fugas gratis →](/es/servicios/confirmacion-fugas-gratis)

**Contacta con Canary Detect** para detección profesional de fugas en toda Lanzarote. Servimos Arrecife, Puerto del Carmen, Playa Blanca, Costa Teguise, Yaiza y todas las áreas de la isla.

[Contáctanos ahora →](/es/contacto)
    `
  },
  {
    id: 11,
    slug: "facturas-agua-altas-lanzarote-causas",
    title: "¿Qué Causa las Facturas de Agua Altas en Lanzarote? 8 Razones Por Las Que Tu Factura Es Tan Alta",
    excerpt: "¿Sorprendido por tu factura de agua? Descubre las 8 causas comunes de facturas de agua altas en Lanzarote—desde fugas ocultas hasta válvulas de flotador defectuosas.",
    date: "2026-02-01",
    author: "Canary Detect",
    category: "Ahorro de Agua",
    image: waterMeterImg,
    metaTitle: "Facturas de Agua Altas Lanzarote | 8 Causas Comunes",
    metaDescription: "¿Por qué es tan alta tu factura de agua? Descubre 8 causas de facturas de agua caras en Lanzarote—fugas ocultas, válvulas defectuosas y más.",
    keywords: "facturas agua altas Lanzarote, causas factura agua cara, factura agua demasiado alta, contador agua girando, fuga causando factura alta, reducir factura agua Lanzarote",
    readTime: 9,
    content: `
## ¿Por Qué Es Tan Alta Mi Factura de Agua?

Abrir una factura de agua inesperadamente alta es estresante. En Lanzarote, donde el agua es preciosa y cara, un pico en tu factura exige investigación inmediata.

Después de más de 10 años ayudando a propietarios en Lanzarote, hemos identificado las **8 causas más comunes** de facturas de agua altas—y qué puedes hacer con cada una.

## 1. Fugas de Agua Ocultas (Lo Más Común)

La causa #1 de facturas de agua altas es una **fuga que no puedes ver**:

- **Fugas de tuberías subterráneas** (entre contador y casa)
- **Fugas detrás de paredes** (tuberías de baño y cocina)
- **Fugas bajo suelo** (especialmente en propiedades con suelo radiante)
- **Fugas de piscina** (extremadamente comunes en Lanzarote)

### ¿Cuánto Puede Costar una Fuga?

| Tamaño de Fuga | Litros Perdidos/Día | Coste Mensual (aprox) |
|----------------|---------------------|----------------------|
| Grifo goteando | 20L | €5 |
| Inodoro corriendo | 400L | €100 |
| Grieta de 1mm en tubería | 1.000L | €250 |
| Tubería rota | 5.000L+ | €1.000+ |

**Una sola fuga oculta puede duplicar o triplicar tu factura.**

### La Prueba del Contador

1. Cierra todas las salidas de agua
2. Revisa el indicador de fugas de tu contador (dial pequeño)
3. Si se mueve, tienes una fuga

[Aprende más sobre el comportamiento del contador de agua →](/es/blog/contador-agua-girando-grifos-cerrados)

## 2. Válvula de Flotador del Aljibe Defectuosa

En Lanzarote, la mayoría de los hogares usan un **aljibe** (tanque de agua subterráneo) con una válvula de flotador. Cuando esta válvula falla:

- El agua fluye continuamente al tanque
- El exceso se desborda al suelo (de forma invisible)
- Tu contador funciona constantemente
- Tu factura se dispara

### Señales de una Válvula de Flotador Defectuosa

- Contador de agua girando incluso cuando la casa está vacía
- Aljibe siempre lleno pero el contador sigue funcionando
- Suelo húmedo cerca de la ubicación del aljibe
- La bomba no se necesita tan a menudo (el tanque se mantiene lleno)

Esto a menudo se **diagnostica erróneamente como una fuga en tuberías**. [Entiende tu sistema de aljibe →](/es/blog/domina-tu-sistema-de-agua-lanzarote)

## 3. Inodoros con Fugas o Corriendo

Los inodoros son desperdiciadores de agua silenciosos:

- **Fallo de la válvula de descarga** (lo más común)
- **Goteo continuo** hacia la taza
- **Descargas fantasma** (el inodoro se rellena solo)
- **Válvula de llenado atascada abierta**

### La Prueba del Tinte del Inodoro

1. Añade colorante alimentario a la cisterna
2. Espera 10 minutos sin tirar de la cadena
3. Si aparece color en la taza, la válvula de descarga está fugando

Un inodoro corriendo desperdicia **10.000-50.000 litros al mes**.

## 4. Fugas de Piscina

Lanzarote tiene miles de piscinas privadas, y las **fugas de piscina son extremadamente comunes**:

- Grietas en el vaso por movimiento del suelo
- Fallos en juntas de fontanería
- Fallos en sellos de nichos de focos
- Fugas en conexiones del skimmer

### Señales de Fuga de Piscina

- Rellenar más de una vez a la semana
- Aumento del consumo de productos químicos
- Manchas húmedas alrededor del área de la piscina
- Bomba perdiendo cebado o mostrando burbujas de aire

[Aprende cómo comprobar fugas de piscina →](/es/blog/como-detectar-fugas-en-piscinas-lanzarote)

## 5. Fugas en Sistema de Riego

Los sistemas de riego de jardín a menudo fugan sin ser notados:

- **Cabezales de aspersores rotos** (enterrados por plantas)
- **Líneas de goteo agrietadas** (degradadas por el sol)
- **Conexiones fallidas** en válvulas de control
- **Fugas en línea principal** subterránea

### Señales de Advertencia

- Parches marrones alternando con áreas muy verdes
- Puntos empapados en el césped cuando no estás regando
- Caída de presión en zonas de riego
- Controlador mostrando tiempos de funcionamiento más cortos de lo programado

## 6. Fugas de Electrodomésticos

Los electrodomésticos del hogar pueden fugar lentamente:

- **Lavadoras** (conexiones de manguera de entrada)
- **Lavavajillas** (conexiones de desagüe)
- **Calentadores de agua** (válvulas de alivio de presión)
- **Fabricadores de hielo del frigorífico** (línea de agua)

Estos a menudo fugan hacia espacios ocultos—bajo suelos o detrás de muebles.

## 7. Grifos y Duchas Goteando

Fácil de ignorar pero costoso con el tiempo:

- Un grifo goteando una vez por segundo = **20 litros al día**
- Las duchas mezcladoras a menudo gotean por fallo del cartucho
- Los grifos exteriores frecuentemente se olvidan

### Solución Rápida

Reemplaza las arandelas o cartuchos del grifo—normalmente una reparación de €5-20 que puede ahorrar €50+ al año.

## 8. Errores de Lectura del Contador o Problemas de Facturación

A veces el problema no es tu consumo de agua:

- **Facturas estimadas** que cobran de más
- **Errores en la lectura del contador**
- **Contador de agua defectuoso** (raro pero posible)
- **Cambios de tarifa** de los que no te notificaron

### Qué Hacer

1. Compara tu lectura del contador con la factura
2. Solicita una prueba de precisión del contador si sospechas
3. Comprueba cambios de tarifa en la web de Canal Gestión

---

## Cómo Investigar Facturas Altas

### Paso 1: Revisa Tu Contador

Registra la lectura, no uses agua durante 2 horas, comprueba de nuevo. Cualquier cambio = fuga.

### Paso 2: Inspecciona Áreas Visibles

- Revisa todos los grifos, inodoros y tuberías visibles
- Mira bajo fregaderos y detrás de electrodomésticos
- Inspecciona grifos exteriores y riego

### Paso 3: Revisa Tu Piscina (Si Aplica)

Realiza la prueba del cubo para descartar fugas de piscina.

### Paso 4: Considera Tu Aljibe

Si tienes un sistema de aljibe, la válvula de flotador es un sospechoso principal.

### Paso 5: Obtén Detección Profesional

Si no puedes encontrar la causa, necesitas equipo especializado:
- **Detección acústica** para fugas de tuberías
- **Imagen térmica** para caminos de agua ocultos
- **Pruebas de presión** para sistemas de fontanería

---

## Consejos de Prevención

### Mantenimiento Regular

- **Anualmente**: Revisa la válvula de flotador del aljibe
- **Mensualmente**: Camina alrededor de la propiedad buscando manchas húmedas
- **Semanalmente**: Comprueba la lectura del contador de agua

### Monitoriza Tus Facturas

Mantén un registro del uso mensual—detectarás anomalías rápidamente.

### Arregla Pequeños Problemas Rápidamente

Los grifos goteando e inodoros corriendo solo empeoran.

---

## Confirmación de Fugas Gratis

Si sospechas que una fuga oculta está causando facturas altas, obtén certeza con nuestra **Prueba de Confirmación de Fugas Gratis**.

[Obtén tu confirmación de fugas gratis →](/es/servicios/confirmacion-fugas-gratis)

**Contacta con Canary Detect** para detección profesional de fugas en toda Lanzarote. Servimos Arrecife, Puerto del Carmen, Playa Blanca, Costa Teguise, Yaiza y todas las áreas de la isla.

[Contáctanos ahora →](/es/contacto)
    `
  }
];

// Slug mapping for English to Spanish
export const blogSlugMap: Record<string, string> = {
  "how-to-check-for-pool-leaks-lanzarote": "como-detectar-fugas-en-piscinas-lanzarote",
  "signs-of-underground-water-leak": "senales-fuga-agua-subterranea",
  "water-meter-running-when-taps-off": "contador-agua-girando-grifos-cerrados",
  "damp-walls-causes-solutions": "paredes-humedas-causas-soluciones",
  "thermal-imaging-leak-detection-explained": "imagen-termica-deteccion-fugas-explicada",
  "swimming-pool-leak-repair-cost-lanzarote": "coste-reparacion-fugas-piscina-lanzarote",
  "emergency-leak-detection-repair-lanzarote": "deteccion-reparacion-fugas-emergencia-lanzarote",
  "how-to-tell-if-pool-has-leak-lanzarote": "como-saber-si-piscina-tiene-fuga-lanzarote",
  "signs-water-leak-villa-lanzarote": "senales-fuga-agua-villa-lanzarote",
  "high-water-bills-lanzarote-causes": "facturas-agua-altas-lanzarote-causas"
};

// Reverse slug mapping for Spanish to English
export const reverseBlogSlugMap: Record<string, string> = Object.fromEntries(
  Object.entries(blogSlugMap).map(([en, es]) => [es, en])
);

// Helper function to get articles based on language
export const getBlogArticles = (isSpanish: boolean): BlogArticle[] => {
  return isSpanish ? blogArticlesEs : blogArticlesEn;
};


export function getArticleBySlug(slug: string, isSpanish: boolean = false): BlogArticle | undefined {
  const articles = getBlogArticles(isSpanish);
  return articles.find(article => article.slug === slug);
}

export function getRelatedArticles(currentSlug: string, isSpanish: boolean = false, limit: number = 3): BlogArticle[] {
  const articles = getBlogArticles(isSpanish);
  return articles
    .filter(article => article.slug !== currentSlug)
    .slice(0, limit);
}

// Helper to get equivalent slug in other language
export function getEquivalentBlogSlug(slug: string, toSpanish: boolean): string {
  if (toSpanish) {
    return blogSlugMap[slug] || slug;
  }
  return reverseBlogSlugMap[slug] || slug;
}
