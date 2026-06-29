import type { GlossaryTerm } from "@/types/chemistry";

export const glossaryTerms: GlossaryTerm[] = [
  {
    "id": "abrasion-resistance",
    "term": "Abrasion Resistance",
    "definition": "How well a rubber holds up to wearing away from rubbing, scraping, or sliding contact, described qualitatively from low to very-high. It reflects surface durability under repeated friction.",
    "whyItMatters": "For wear parts such as rollers, wheels, liners, and seals on moving surfaces, abrasion resistance often governs service life. Achieving high abrasion resistance involves reinforcement and compound choices and is matched to the duty during technical review.",
    "whereInFactory": "Built in through filler and polymer selection at mixing, and assessed qualitatively in the test lab using abrasion evaluations on cured samples."
  },
  {
    "id": "accelerator",
    "term": "Accelerator",
    "definition": "An additive that speeds up and controls the cure reaction so vulcanization happens efficiently and predictably. Accelerators work together with the curative and other cure ingredients.",
    "whyItMatters": "Accelerators shorten cure cycles and improve consistency and crosslink quality, which affects both productivity and final properties. The accelerator system is a proprietary part of compound design and is selected through technical review rather than published as quantities.",
    "whereInFactory": "Incorporated during mixing (typically in a late stage) and does its work at the curing station when heat is applied."
  },
  {
    "id": "activator",
    "term": "Activator",
    "definition": "An ingredient that helps the accelerator and curative work effectively, in effect switching on the cure system so it reaches full efficiency. Common generic activators include metal oxides and certain fatty acids.",
    "whyItMatters": "Without proper activation, a cure system may be slow or incomplete, leaving the part under-cured and weak. Activators are a standard part of a balanced cure package, chosen during compound development and technical review.",
    "whereInFactory": "Added in the mixing room as part of the cure package; its effect is realized at the curing or vulcanization station."
  },
  {
    "id": "aging",
    "term": "Aging",
    "definition": "The gradual change in a rubber's properties over time due to heat, oxygen, ozone, light, and fluids. Aging may show up as hardening, softening, cracking, or loss of strength. Resistance to aging is described qualitatively from low to very-high.",
    "whyItMatters": "Aging behavior determines how long a part stays fit for service, which is central to reliability and warranty expectations. Estimating service life involves the protective package and the environment and typically requires technical review.",
    "whereInFactory": "Built in during compounding through antidegradant choices and assessed in the test lab using accelerated-aging evaluations on cured samples."
  },
  {
    "id": "antioxidant",
    "term": "Antioxidant",
    "definition": "A protective additive that slows the damage rubber suffers from reaction with oxygen, especially when warm. It is part of the broader group called antidegradants.",
    "whyItMatters": "Oxidation makes rubber harden, crack, and lose properties over time. Antioxidants extend useful service life, which is why protection packages are a standard and carefully considered part of durable compounds.",
    "whereInFactory": "Blended in during mixing. Their payoff appears much later, in the field, as longer part life and better aging resistance."
  },
  {
    "id": "antiozonant",
    "term": "Antiozonant",
    "definition": "A protective additive aimed specifically at ozone attack, which can crack stretched rubber even at very low ozone levels in ordinary air. It works alongside antioxidants as part of the antidegradant package.",
    "whyItMatters": "Parts under tension and exposed to outdoor air (seals, weatherstrip, suspension components) can develop surface cracks from ozone without protection. Including the right antiozonant is commonly essential for outdoor and dynamic applications and is set during technical review.",
    "whereInFactory": "Added in the mixing room. Some types migrate to the surface over time, which links it to the bloom concept seen on finished parts."
  },
  {
    "id": "bloom",
    "term": "Bloom",
    "definition": "A hazy film or powdery layer that can appear on the surface of a rubber part when an ingredient migrates out of the compound to the surface. It can be cosmetic or, in the case of some antiozonants, a sign of active protection.",
    "whyItMatters": "Bloom can affect appearance, bonding, and printing, but some surface migration is intentional and protective. Distinguishing harmless bloom from a formulation issue is a routine judgment that may require technical review.",
    "whereInFactory": "Observed on finished or stored parts, typically noticed at final inspection, packaging, or after a period in inventory."
  },
  {
    "id": "compound",
    "term": "Compound",
    "definition": "The complete rubber recipe: the base elastomer plus all the ingredients blended into it (fillers, plasticizers, protective agents, and curatives among them). The unvulcanized, mixed material is what people mean by a compound.",
    "whyItMatters": "The compound, not the raw polymer alone, is what actually delivers the required performance. Designing a compound to balance properties, processability, and cost is the central craft of a custom rubber manufacturer and commonly requires technical review against the application.",
    "whereInFactory": "Created in the mixing room (internal mixer or mill) and then staged as sheets, strips, or pellets for downstream forming and curing."
  },
  {
    "id": "compression-set",
    "term": "Compression Set",
    "definition": "The tendency of a rubber part to stay partly squashed after being held under compression and then released, instead of fully recovering. It is reported qualitatively here as a resistance, from low to very-high, where high resistance means the part recovers well.",
    "whyItMatters": "Seals and gaskets must keep pushing back over time to stay leak-tight, so good compression-set resistance is often critical for sealing applications. Whether a compound is suitable for long-term sealing generally requires technical review against the service conditions.",
    "whereInFactory": "Designed in through elastomer and cure choice, and evaluated in the quality and test lab on cured samples or finished parts."
  },
  {
    "id": "crosslink",
    "term": "Crosslink",
    "definition": "A chemical bond that ties one polymer chain to another. During vulcanization, many crosslinks form, knitting the separate chains into a connected three-dimensional network.",
    "whyItMatters": "Crosslinks are the reason cured rubber holds its shape, resists permanent deformation, and springs back. The type and number of crosslinks shape nearly every mechanical property, making them central to how a compound is engineered.",
    "whereInFactory": "Formed during vulcanization at the curing station. The concept is referenced throughout compound design and quality discussions."
  },
  {
    "id": "crosslink-density",
    "term": "Crosslink Density",
    "definition": "A qualitative measure of how many crosslinks exist within the rubber network, described in bands from low to high. More crosslinks generally mean a tighter, stiffer network; fewer mean a softer, more extensible one.",
    "whyItMatters": "Crosslink density trades off against itself: higher density typically raises hardness and set resistance but can reduce elongation and toughness, while lower density does the reverse. Tuning it to the application is a core formulating decision that requires technical review.",
    "whereInFactory": "Established by the cure system and the conditions at the curing station, and inferred during quality testing through properties like hardness and compression set."
  },
  {
    "id": "curative",
    "term": "Curative",
    "definition": "The ingredient (or system of ingredients) that creates the chemical bonds turning soft, moldable rubber into a finished elastic solid. Sulfur-based systems and peroxide-based systems are two common generic approaches. Often called a crosslinking agent.",
    "whyItMatters": "The curative is what makes vulcanization possible and largely determines heat resistance, set resistance, and durability. The choice of cure system is fundamental, application-dependent, and always set through technical review, never disclosed as a recipe.",
    "whereInFactory": "Added late in mixing to avoid premature reaction, then activated at the curing or vulcanization station (press, autoclave, or continuous line)."
  },
  {
    "id": "dispersion",
    "term": "Dispersion",
    "definition": "How thoroughly the filler and other ingredients are broken down and mixed into the polymer so that no large clumps remain. Good dispersion means the additives are evenly worked into the rubber at a fine scale.",
    "whyItMatters": "Poor dispersion leaves agglomerates that act as weak points and can lower strength, fatigue life, and surface quality. Achieving good dispersion is a core mixing objective and is commonly checked because it directly affects whether a part meets requirements.",
    "whereInFactory": "Developed in the mixing room and verified by quality control, often by examining a cut or microscopic sample of the mixed compound."
  },
  {
    "id": "distribution",
    "term": "Distribution",
    "definition": "How evenly the ingredients are spread throughout the whole batch of rubber. Distribution is about uniform placement across the volume, which is distinct from dispersion (how finely each ingredient is broken down).",
    "whyItMatters": "Even distribution helps ensure that every part made from a batch behaves consistently. Uneven distribution can cause part-to-part variation, so it is a routine concern of mixing and quality teams.",
    "whereInFactory": "Controlled in the mixing room through mix time and procedure, and confirmed during batch quality checks before the compound is released downstream."
  },
  {
    "id": "elastomer",
    "term": "Elastomer",
    "definition": "A class of polymer that can be stretched substantially and then return toward its original shape when released. The everyday word for this family is rubber. Examples described by generic names include NR (natural rubber), EPDM (ethylene propylene diene), NBR (nitrile), CR (chloroprene, neoprene-type), FKM (fluoroelastomer), and silicone.",
    "whyItMatters": "Elastomer choice is the single largest driver of how a part behaves: heat tolerance, oil and chemical resistance, weathering, and cost all flow from which family is selected. Picking the right one for the service environment generally requires technical review of the application before anything else is decided.",
    "whereInFactory": "Defined at the quoting and material-selection stage, before any mixing happens. The chosen elastomer arrives as bales or crumb in raw-material receiving and storage."
  },
  {
    "id": "elongation",
    "term": "Elongation",
    "definition": "How far a rubber can stretch before it breaks, usually expressed as how much longer it gets relative to its original length, described qualitatively from low to very-high. Often called elongation at break.",
    "whyItMatters": "High elongation indicates a material that can deform and recover without tearing, useful for parts that flex, stretch over a fitting, or absorb movement. The right level is application-dependent and is balanced against stiffness and strength during review.",
    "whereInFactory": "Set by compound design and confirmed qualitatively in the test lab during the same tensile evaluation that examines strength."
  },
  {
    "id": "filler",
    "term": "Filler",
    "definition": "A finely divided solid material blended into rubber. Common generic types include carbon black and various mineral fillers such as silica and clays. Some fillers mainly add bulk; others actively improve strength.",
    "whyItMatters": "Fillers strongly influence strength, stiffness, abrasion resistance, color, and cost. Selecting and loading a filler is one of the main levers a formulator uses, and the right balance is application-dependent and typically set through technical review.",
    "whereInFactory": "Added and blended in the mixing room. Filler handling also appears at raw-material storage and weigh-up, where dust control and accurate batching matter."
  },
  {
    "id": "hardness",
    "term": "Hardness",
    "definition": "A measure of how firm or soft a rubber surface is, commonly assessed with a durometer and described here qualitatively from low (soft) to high (firm). It is one of the most frequently referenced rubber properties.",
    "whyItMatters": "Hardness affects feel, sealing behavior, fit, and wear, and is an easy, fast check used widely for incoming and outgoing verification. Selecting a target hardness is application-dependent and is agreed during technical review rather than assumed.",
    "whereInFactory": "Influenced by filler and cure, and checked quickly with a durometer at quality control and final inspection on cured parts."
  },
  {
    "id": "modulus",
    "term": "Modulus",
    "definition": "In rubber terms, a qualitative indication of how much force is needed to stretch the material to a given extension: roughly, its stiffness at a defined stretch. It is described here in bands from low to high rather than as a certified number.",
    "whyItMatters": "Modulus describes how firm or yielding a part feels under load, affecting sealing force, fit, and dynamic behavior. Targeting the right modulus is application-dependent and is set through technical review of how the part is used.",
    "whereInFactory": "Determined by the compound and cure, and characterized qualitatively in the test lab from cured specimens during property evaluation."
  },
  {
    "id": "monomer",
    "term": "Monomer",
    "definition": "The small starting molecule, or single link, that is joined together many times to build a polymer chain. For example, the generic family name often tells you which monomers were combined (ethylene and propylene units in EPDM, for instance).",
    "whyItMatters": "The monomers chosen during polymer production determine the elastomer family and therefore its core resistance and temperature character. While a custom rubber manufacturer typically buys finished polymer rather than making it, knowing the monomer basis helps explain a material's strengths and limits during RFQ discussions.",
    "whereInFactory": "Upstream of the factory, at the polymer producer. Relevant in the factory only as background knowledge during material selection and customer technical review."
  },
  {
    "id": "phr",
    "term": "phr",
    "definition": "Parts per hundred rubber: a conceptual ratio convention used in the rubber industry. It is a way of expressing how much of each ingredient is present relative to the base polymer, which is treated as the reference quantity of one hundred. It is a counting convention for comparing recipes, not a measurement of any specific product.",
    "whyItMatters": "Using a common ratio convention lets formulators discuss and compare compounds consistently regardless of batch size. The convention itself is industry shorthand; the actual contents of any given compound are proprietary and generally require technical review and a signed engagement before they are shared.",
    "whereInFactory": "A formulation and documentation concept used by the compounding and quality teams. It appears on internal recipe sheets, never on the shop floor as a machine setting."
  },
  {
    "id": "plasticizer",
    "term": "Plasticizer",
    "definition": "An ingredient, often an oil or similar processing aid, added to soften the compound and make it easier to mix and shape. Plasticizers also help tune flexibility, especially in cold conditions.",
    "whyItMatters": "Plasticizers improve processability and low-temperature flexibility, but the type and amount must suit the service environment because some can be extracted by oils or heat over time. The appropriate choice is application-dependent and typically set through technical review.",
    "whereInFactory": "Added in the mixing room. Their benefit to flow is also felt at forming stations such as extrusion and molding, where softer compounds process more easily."
  },
  {
    "id": "polymer-chain",
    "term": "Polymer Chain",
    "definition": "The long, repeating molecular backbone that makes up an elastomer. Think of it as a very long string built from many identical links. The length, flexibility, and chemistry of these chains set the base personality of the rubber.",
    "whyItMatters": "Chain length and structure influence how easily a compound mixes and flows, and how strong and elastic the final part is. Understanding the base polymer helps explain why two rubbers can feel and perform very differently even before anything is added to them.",
    "whereInFactory": "A property of the incoming raw polymer. Its effects show up first in the mixing room, where chain behavior governs how the material processes."
  },
  {
    "id": "reinforcement",
    "term": "Reinforcement",
    "definition": "The strengthening effect that certain fillers (and sometimes fabric or cord) give to rubber. A reinforcing filler bonds with the polymer chains and raises properties like tensile strength, tear resistance, and abrasion resistance.",
    "whyItMatters": "Reinforcement is how a soft polymer becomes a durable engineered part. The degree of reinforcement needed ranges from low to very-high depending on whether the part is a soft seal or a tough wear component, and is generally matched to the application during review.",
    "whereInFactory": "Established in the mixing room through filler choice and, for reinforced products such as belts or hoses, at the fabric or cord building station."
  },
  {
    "id": "scorch",
    "term": "Scorch",
    "definition": "Premature, unwanted onset of curing that happens too early, before the compound has been shaped and intentionally cured. Scorched material starts to set up while it is still being processed.",
    "whyItMatters": "Scorch can ruin a batch, foul equipment, and create scrap, so compounds are designed with enough delay (scorch safety) to survive processing. Managing scorch safety is a routine balance between fast cure and safe handling and is reviewed for each compound and process.",
    "whereInFactory": "A risk during mixing, storage, and the forming steps (extrusion, calendering, molding) that occur before the intended cure at the curing station."
  },
  {
    "id": "swelling",
    "term": "Swelling",
    "definition": "The expansion that happens when a rubber part absorbs a fluid it is exposed to, such as an oil, fuel, or solvent. The part may grow in size and soften. Resistance to swelling is described qualitatively from low to very-high.",
    "whyItMatters": "In contact with fluids, excessive swelling can change dimensions, reduce strength, and cause failure, so fluid compatibility is a key selection factor. Confirming that an elastomer is appropriate for a given fluid commonly requires technical review and never a guarantee of suitability without it.",
    "whereInFactory": "A material-selection consideration handled during quoting and review, and assessed in the test lab through fluid-immersion evaluations on cured samples."
  },
  {
    "id": "tear-resistance",
    "term": "Tear Resistance",
    "definition": "The ability of a rubber to resist the growth of a cut or nick once one has started, described qualitatively from low to very-high. A material can be strong in straight pull yet still tear easily, so this is tracked separately.",
    "whyItMatters": "Many real failures begin at a small flaw and propagate, so tear resistance often predicts durability better than tensile strength alone, especially for parts handled roughly or with sharp edges. Matching it to the application generally requires technical review.",
    "whereInFactory": "Driven by polymer and reinforcement choices and evaluated qualitatively in the test lab on cured specimens designed to start a tear."
  },
  {
    "id": "tensile-strength",
    "term": "Tensile Strength",
    "definition": "How much pulling stress a rubber can withstand before it breaks, described qualitatively from low to very-high. It is a basic indicator of the material's raw strength in tension.",
    "whyItMatters": "Tensile strength gives a general sense of robustness and is a common screening property, though real parts often fail by tear, fatigue, or set rather than straight pulling. Interpreting it for a specific design generally requires technical review and never a standalone guarantee of suitability.",
    "whereInFactory": "Engineered through polymer, reinforcement, and cure, and measured qualitatively in the test lab on cured dumbbell-style specimens."
  },
  {
    "id": "vulcanization",
    "term": "Vulcanization",
    "definition": "The heat-and-chemistry step that transforms soft, sticky, moldable rubber into a strong, elastic, dimensionally stable finished material by forming crosslinks between polymer chains. Also called curing.",
    "whyItMatters": "Vulcanization is what gives rubber its useful, springy, durable character; without it the material would be weak and tacky. It is the defining transformation in rubber manufacturing, and getting it right is essential to meeting part requirements.",
    "whereInFactory": "Performed at the curing station: compression, transfer, or injection presses, autoclaves, or continuous vulcanizing lines, depending on the product."
  }
];
