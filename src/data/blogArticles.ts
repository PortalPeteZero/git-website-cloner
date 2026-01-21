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

export const blogArticles: BlogArticle[] = [
  {
    id: 1,
    slug: "how-to-check-for-pool-leaks-lanzarote",
    title: "How to Check for Pool Leaks: A Complete Guide for Lanzarote Pool Owners",
    excerpt: "Is your swimming pool losing water? Learn the bucket test, dye test, and when to call professional leak detection services in Lanzarote.",
    date: "2025-01-15",
    author: "Pete Ashcroft",
    category: "Pool Care",
    image: poolBucketTestImg,
    metaTitle: "How to Check for Pool Leaks | Swimming Pool Leak Test Lanzarote",
    metaDescription: "Learn how to check for pool leaks with the bucket test and dye test. Professional swimming pool leak detection tips from Lanzarote experts. Find leaks fast.",
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
    id: 2,
    slug: "signs-of-underground-water-leak",
    title: "7 Signs of an Underground Water Leak: What Lanzarote Homeowners Must Know",
    excerpt: "Underground water leaks can go undetected for months. Learn the warning signs and how to detect hidden pipe leaks before they cause major damage.",
    date: "2025-01-08",
    author: "Dave Poxon",
    category: "Tips & Advice",
    image: undergroundImg,
    metaTitle: "Signs of Underground Water Leak | Hidden Pipe Leak Detection Lanzarote",
    metaDescription: "Discover the 7 warning signs of underground water leaks. High water bills, wet spots, low pressure? Learn how to detect hidden pipe leaks in Lanzarote.",
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
    id: 3,
    slug: "water-meter-running-when-taps-off",
    title: "Water Meter Running When Taps Are Off? Here's What It Means",
    excerpt: "If your water meter keeps spinning with all taps closed, you likely have a hidden leak. Learn how to check and what to do next.",
    date: "2025-01-02",
    author: "Pete Ashcroft",
    category: "Tips & Advice",
    image: waterMeterImg,
    metaTitle: "Water Meter Running When Taps Off | Hidden Leak Detection Lanzarote",
    metaDescription: "Water meter running when all taps are off? You have a hidden leak. Learn how to check your meter, find the leak source, and get professional help in Lanzarote.",
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
    id: 4,
    slug: "damp-walls-causes-solutions",
    title: "Damp Walls in Lanzarote: Causes, Detection & Solutions",
    excerpt: "Damp walls aren't just unsightly – they indicate water intrusion that needs addressing. Learn the common causes and how to fix them.",
    date: "2024-12-18",
    author: "Dave Poxon",
    category: "Tips & Advice",
    image: risingDampImg,
    metaTitle: "Damp Walls Causes & Solutions | Water Leak Detection Lanzarote",
    metaDescription: "Damp walls in your Lanzarote home? Discover the causes from leaking pipes to condensation, and learn how professional leak detection can solve the problem.",
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
    id: 5,
    slug: "thermal-imaging-leak-detection-explained",
    title: "How Thermal Imaging Finds Hidden Water Leaks: Technology Explained",
    excerpt: "Discover how thermal imaging cameras detect water leaks behind walls and under floors without any damage to your property.",
    date: "2024-12-10",
    author: "Pete Ashcroft",
    category: "Technology",
    image: thermalUndergroundImg,
    metaTitle: "Thermal Imaging Leak Detection | How It Works | Lanzarote",
    metaDescription: "Learn how thermal imaging cameras find hidden water leaks behind walls and under floors. Non-invasive leak detection technology explained by Lanzarote experts.",
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
    id: 6,
    slug: "swimming-pool-leak-repair-cost-lanzarote",
    title: "Swimming Pool Leak Repair Costs in Lanzarote: What to Expect",
    excerpt: "Understanding the costs of pool leak detection and repair in Lanzarote. From minor fixes to major repairs, here's your complete pricing guide.",
    date: "2024-12-01",
    author: "Dave Poxon",
    category: "Pool Care",
    image: poolDiverImg,
    metaTitle: "Swimming Pool Leak Repair Cost Lanzarote | Pool Leak Detection Prices",
    metaDescription: "What does pool leak detection and repair cost in Lanzarote? Complete guide to swimming pool leak repair prices, from detection to fix. No Find, No Fee guarantee.",
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
  }
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find(article => article.slug === slug);
}

export function getRelatedArticles(currentSlug: string, limit: number = 3): BlogArticle[] {
  return blogArticles
    .filter(article => article.slug !== currentSlug)
    .slice(0, limit);
}
