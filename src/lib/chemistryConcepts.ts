import type { ChemistryConcept } from "@/types/chemistry";

export const chemistryConcepts: ChemistryConcept[] = [
  {
    "id": "what-is-rubber",
    "title": "What Rubber Actually Is",
    "summary": "Rubber is an elastomer: a material built from very long, flexible polymer chains that can be reversibly stretched and then snap back. In its raw state those chains slide past each other and the material flows or takes a permanent set. The defining trait is that the chains can be chemically tied together (crosslinked) into a network that returns to shape after deformation.",
    "points": [
      "Built from long-chain polymers with backbones flexible enough to coil, uncoil, and recover.",
      "Raw (uncrosslinked) rubber behaves more like a very viscous putty than a finished part.",
      "Crosslinking converts a tangle of separate chains into one connected network that has memory of its shape.",
      "Elasticity comes from entropy: stretched chains want to return to their relaxed, coiled state.",
      "Final behavior is set as much by how it is compounded and cured as by the base polymer itself."
    ],
    "analogy": "Think of a bowl of cooked spaghetti: the loose strands slide and slump, but tie them together at random crossing points and you get a springy mat that bounces back when pressed.",
    "takeaway": "Rubber is long chains plus the right crosslinks: that combination, not the polymer alone, makes it springy."
  },
  {
    "id": "base-polymer-families",
    "title": "Base Polymer Families",
    "summary": "Every rubber part starts from a base polymer (the elastomer), and the polymer family sets the ceiling on what the finished compound can do. Families differ mainly in backbone chemistry, which drives heat tolerance, chemical and oil resistance, and low-temperature flexibility. No single family is best at everything, so selection is always a tradeoff guided by the service environment.",
    "points": [
      "Natural rubber (NR) and many general-purpose synthetics (such as SBR) favor resilience and abrasion over oil and heat resistance.",
      "Saturated-backbone families such as EPDM generally excel at weather, ozone, and water but are typically poor in oil and fuel.",
      "Polar families such as NBR (nitrile) generally resist oils and fuels well, with tradeoffs in low-temperature and weather performance.",
      "Specialty families such as silicone (VMQ) and fluoroelastomer (FKM) target temperature extremes and aggressive chemicals, usually at higher cost.",
      "Backbone saturation, polarity, and side groups are the levers that explain most family-to-family differences."
    ],
    "analogy": "Choosing a base polymer is like choosing a vehicle class before options: a pickup, a sports car, and an off-roader can all be trimmed out, but their chassis already decided what they are good at.",
    "takeaway": "Pick the polymer family for the environment first: compounding refines it but cannot rewrite its backbone."
  },
  {
    "id": "compound-ingredients",
    "title": "What Goes Into a Compound",
    "summary": "A finished rubber is a compound, not a single material: the base polymer is blended with several classes of ingredients that each tune a property. Beyond the elastomer itself, a typical recipe brings in fillers, oils or plasticizers, a curing (crosslinking) system, and protective additives. The art of compounding is balancing these so that improving one property does not unacceptably degrade another.",
    "points": [
      "Base polymer (the elastomer) sets the fundamental character and performance ceiling.",
      "Fillers reinforce, add bulk, and adjust stiffness, hardness, and cost.",
      "Oils and plasticizers improve processing and soften the compound.",
      "A curing or vulcanization system forms the crosslinks that turn the blend into elastic rubber.",
      "Protective additives (antioxidants, antiozonants, and similar) defend the network against aging.",
      "Exact ingredients and proportions are formulation-specific and require technical review for each application."
    ],
    "analogy": "It is like baking: flour (the polymer) sets the base, but eggs, fat, leavening, and preservatives each change texture, richness, rise, and shelf life of the final loaf.",
    "takeaway": "Rubber is a recipe, and every ingredient class is a deliberate dial, not filler in the casual sense."
  },
  {
    "id": "role-of-fillers",
    "title": "The Role of Fillers",
    "summary": "Fillers are finely divided solids dispersed into the polymer, and they are far more than cheap bulk. Reinforcing fillers (carbon black and precipitated silicas are common examples) bond with the polymer network and can strongly raise strength, abrasion resistance, and tear resistance. Non-reinforcing or extending fillers mainly add volume, adjust hardness, and manage cost.",
    "points": [
      "Reinforcing fillers generally increase tensile strength, tear resistance, and abrasion resistance.",
      "Filler type and loading are primary levers for hardness and stiffness, in qualitative low-to-high bands.",
      "Higher reinforcing-filler loading often raises stiffness and heat buildup while reducing flexibility.",
      "Extending fillers mainly add bulk and reduce cost with less effect on strength.",
      "Good dispersion matters: poorly dispersed filler can create weak spots regardless of how much is added."
    ],
    "analogy": "Fillers are like aggregate in concrete: the right gravel makes the mix far stronger and cheaper, but too much of the wrong kind, or poorly mixed, leaves weak pockets.",
    "takeaway": "Fillers turn a soft gum into an engineering material, but only when the right type is well dispersed."
  },
  {
    "id": "role-of-oils-plasticizers",
    "title": "The Role of Oils and Plasticizers",
    "summary": "Oils and plasticizers are liquids or low-molecular-weight additives that lubricate the polymer chains so they slide more easily. They make uncured compound easier to mix, shape, and process, and they soften the cured part and improve low-temperature flexibility. Because they are not crosslinked into the network, their type and compatibility with the base polymer matter a great deal.",
    "points": [
      "Improve processability: easier mixing, calendering, and molding of the uncured compound.",
      "Lower hardness and stiffness and generally improve low-temperature flexibility.",
      "Must be chemically compatible with the base polymer or they can bleed, migrate, or extract in service.",
      "Excessive softening can reduce strength and increase the tendency toward permanent set.",
      "Plasticizer choice is application-dependent and requires technical review, especially for low-temperature, food-contact, or aggressive-fluid service."
    ],
    "analogy": "They act like oil on a bicycle chain: a little makes everything move smoothly, but the wrong oil washes out or gums up, and too much just makes a mess.",
    "takeaway": "Plasticizers buy softness and easy processing, as long as they stay compatible and stay put."
  },
  {
    "id": "role-of-protective-additives",
    "title": "The Role of Protective Additives",
    "summary": "Rubber networks are attacked over time by oxygen, ozone, heat, light, and flex fatigue, which break or rearrange the chains and crosslinks. Protective additives such as antioxidants and antiozonants are added in small amounts to slow these aging mechanisms. They do not stop aging entirely; they extend the useful service life and help the part hold its properties longer.",
    "points": [
      "Antioxidants slow heat- and oxygen-driven degradation of the polymer network.",
      "Antiozonants help resist surface cracking from ozone, which is especially aggressive on strained surfaces.",
      "Waxes and similar additives can provide a physical barrier against static ozone exposure.",
      "Protection is a matter of degree: these additives extend life rather than make rubber permanent.",
      "Additive choice depends on the environment (outdoor, dynamic flexing, high heat) and requires technical review."
    ],
    "analogy": "They work like sunscreen and antioxidants for skin: they meaningfully slow the damage from sun and air, but no amount makes you age-proof.",
    "takeaway": "Protective additives do not stop aging, they buy time, and the right ones depend on the enemy you face."
  },
  {
    "id": "vulcanization-crosslinking",
    "title": "Vulcanization and Crosslinking",
    "summary": "Vulcanization (curing) is the chemical step that ties the separate polymer chains together into a single elastic network. Before cure the compound is moldable and will flow and take a permanent set; after cure it is a true elastic solid with shape memory. The cure system (sulfur-based, peroxide-based, or other chemistries appropriate to the polymer) determines the type of crosslink formed.",
    "points": [
      "Crosslinking transforms a flowable blend into a connected, elastic, dimensionally stable network.",
      "Cure chemistry must match the polymer: some families cure well with sulfur systems, others require peroxide or specialty systems.",
      "The crosslink type influences heat resistance, set resistance, and aging behavior of the finished part.",
      "Cure is irreversible for thermoset rubber: the network cannot simply be re-melted and reshaped.",
      "Process conditions are formulation- and equipment-specific and require qualified technical setup and review."
    ],
    "analogy": "It is like baking a cake versus stirring the batter: the same ingredients go from a pourable mix to a set structure once heat triggers the change, and you cannot un-bake it.",
    "takeaway": "Vulcanization is the moment a sticky blend becomes real rubber: it ties the chains together for good."
  },
  {
    "id": "crosslink-density",
    "title": "Crosslink Density: Too Little, Too Much, Wrong Cure",
    "summary": "Crosslink density is how tightly the network is tied together, and it is one of the strongest qualitative levers over rubber behavior. There is a useful middle band: too few crosslinks leaves the part weak and prone to permanent set, while too many makes it hard and brittle. A mis-cured or non-optimal cure can land properties outside the intended window even with a correct recipe.",
    "points": [
      "Low crosslink density generally means softer, weaker rubber with higher permanent set and creep.",
      "Higher crosslink density generally raises stiffness and hardness and improves set resistance, up to a point.",
      "Very high crosslink density tends to make the part hard, brittle, and prone to cracking, with reduced tear resistance.",
      "An undercure or overcure (wrong cure) can push elasticity, strength, and aging behavior away from target.",
      "There is typically an optimum band rather than a more-is-better relationship, and it must be set by technical review."
    ],
    "analogy": "Picture a net: too few knots and it sags and stretches out of shape; too many and it becomes a stiff board; the right knot count gives a net that springs back.",
    "takeaway": "Crosslink density has a sweet spot: too loose sets and sags, too tight cracks, and wrong cure misses both."
  },
  {
    "id": "rubber-compatibility",
    "title": "Matching Rubber to the Application",
    "summary": "Material selection is about matching the polymer family to the dominant stresses of the service environment: fluids, temperature, weather, and mechanical demand. Each family has a characteristic strength and a characteristic weakness, so the right choice depends on which exposure dominates. Any selection guidance is a starting point and always requires technical review against the specific duty, fluids, and temperature range.",
    "points": [
      "EPDM is commonly used for water, steam, weather, and ozone exposure but is generally poor in petroleum oils and fuels.",
      "NBR (nitrile) is commonly chosen for oil and fuel resistance, with weaker weather and ozone performance.",
      "Silicone (VMQ) is often selected for wide temperature range and heat stability, typically with lower strength and abrasion resistance.",
      "Natural rubber (NR) is valued for resilience and abrasion resistance but is generally weak against oil, heat, and ozone.",
      "FKM / fluoroelastomer is commonly used for aggressive chemicals and high heat, usually at higher cost.",
      "These are general tendencies, not guarantees: final selection requires technical review of the actual fluids, temperatures, and loads."
    ],
    "analogy": "It is like choosing footwear for terrain: hiking boots, rain boots, and running shoes each shine in one setting and fail in another, and you would still check the actual trail before deciding.",
    "takeaway": "Match the rubber to its worst exposure, not its average day, and confirm the fit with technical review."
  }
];
