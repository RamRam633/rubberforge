import type { DefectChemistry } from "@/types/chemistry";

export const defectChemistry: DefectChemistry[] = [
  {
    "id": "poor-dispersion",
    "defect": "Poor filler dispersion",
    "visualSymptom": "Speckled or grainy surface, visible carbon black agglomerates, uneven matte/gloss patches, and a gritty feel under a fingernail. On a cut section you may see dark or light flecks standing out against the surrounding matrix.",
    "chemistryCause": "Reinforcing fillers (commonly carbon black or precipitated silica) arrive as tightly bound aggregates and agglomerates. Without enough shear energy and adequate filler-polymer interaction, the agglomerates never break down and wet out into the elastomer. Silica systems in particular generally need a coupling agent (commonly a silane) to bond the hydrophilic silica surface to the hydrocarbon polymer, and if that coupling chemistry is incomplete the silica tends to stay clumped and self-associated.",
    "processCause": "Insufficient mixing work in the internal mixer (too little shear, too short a cycle, or charge-sequence issues), or a worn or over-gapped two-roll mill that folds rather than shears the stock. Adding filler too fast or too early relative to the polymer and processing aids tends to lock in agglomerates.",
    "affectedMaterialState": "uncured compound",
    "whereItAppears": "Originates during compounding and is usually first caught on the mill or as streaky, speckled sheet; it then carries through to every downstream part made from that batch.",
    "relatedStationId": "internal-mixer",
    "severity": "high",
    "learningExplanation": "Dispersion is where chemistry and process meet most directly: the filler's natural tendency to associate with itself (chemistry) is only overcome by mechanical shear and time (process). A poorly dispersed compound generally shows lower and more variable reinforcement, so tensile, tear, and fatigue properties commonly drift batch to batch. This is why mixing is reviewed first when properties are inconsistent, and why silica grades typically require coupling-system technical review before quoting."
  },
  {
    "id": "bloom",
    "defect": "Bloom (surface migration)",
    "visualSymptom": "A dull, hazy, or whitish powdery film that appears on the finished surface over hours to days, sometimes wiping off and then returning. Wax bloom tends to look greasy or frosted; curative or antiozonant bloom can look chalky or brownish.",
    "chemistryCause": "An ingredient is present above its solubility limit in the cured elastomer, so the excess slowly diffuses to the surface and crystallizes or films there. Common migrants include unreacted curatives, certain waxes, antiozonants, and some process aids. Some bloom (protective wax or antiozonant migrating to the surface) is intentional and functional; cosmetic-only specifications treat all visible bloom as a defect.",
    "processCause": "Under-cure leaves more unreacted curative free to migrate. Warm storage and large temperature swings generally accelerate diffusion. An overloaded additive package, or poor dispersion that leaves local rich pockets, can also drive migration.",
    "affectedMaterialState": "finished",
    "whereItAppears": "Shows up on finished, cooled, and stored goods, often during the cooling stage or later in the finished lot, and is commonly caught at final inspection or by the customer after shipment.",
    "relatedStationId": "cooling",
    "severity": "medium",
    "learningExplanation": "Bloom is a solubility story (chemistry) accelerated by temperature and cure state (process). It teaches a key distinction: protective antiozonant or wax bloom may be desirable for outdoor service, while curative or cosmetic bloom on a sealing or visible surface is a reject. Whether bloom matters is application-dependent, so blooming compounds generally require technical review against the end use and any cosmetic requirement before a quote is firmed up."
  },
  {
    "id": "scorch",
    "defect": "Scorch (premature cure)",
    "visualSymptom": "Hard, rubbery lumps, nodules, or a tough skin in compound that should still be soft and processable. The stock resists flowing, calenders rough or torn, and may show grainy, partially set regions.",
    "chemistryCause": "The cure system begins crosslinking before the intended vulcanization step because the safe processing window (scorch time) has been exceeded. Insufficient or exhausted scorch-retarder protection, or a cure system too active for the heat history actually seen, lets the network start forming early.",
    "processCause": "Excess heat history during mixing or milling: too much accumulated shear heat, stock held hot too long, or recycled scrap that already carries thermal history. Inadequate cooling between operations is a common contributor.",
    "affectedMaterialState": "uncured compound",
    "whereItAppears": "Appears in the uncured compound during mixing, milling, or calendering, generally caught on the two-roll mill or at the calender when the stock stops flowing cleanly.",
    "relatedStationId": "two-roll-mill",
    "severity": "high",
    "learningExplanation": "Scorch is the classic chemistry-versus-heat-history lesson: every increment of accumulated process heat spends part of the compound's chemical safety margin. Once the network starts forming early, the material is generally unsalvageable and cannot be re-dispersed. Managing scorch safety is why mixing, milling, and storage heat are controlled, and why high-activity systems require technical review of the full thermal route before processing."
  },
  {
    "id": "under-cure",
    "defect": "Under-cure (incomplete vulcanization)",
    "visualSymptom": "Soft, tacky, or weak parts that feel under-set, deform easily, and may show poor surface definition. Sticky or smeary cut surfaces and low spring-back are common.",
    "chemistryCause": "The crosslink network is less developed than the formulation intends, so fewer chains are tied together. This may come from an under-active cure system, ingredient variation, or contamination that interferes with the cure (for example certain plasticizers, oils, or surface residues disrupting the curatives).",
    "processCause": "Insufficient time or energy at the vulcanization step, uneven heat reaching thick sections, or interrupted cure. Thick cross-sections that do not reach full state of cure at the core are a frequent cause.",
    "affectedMaterialState": "curing",
    "whereItAppears": "Develops at the vulcanization step and is typically detected just after, at inspection, through low hardness, high compression set, or poor mechanical strength.",
    "relatedStationId": "vulcanization",
    "severity": "high",
    "learningExplanation": "Under-cure shows that the chemistry (network density) and the process (heat delivered to the part core) must both be satisfied. An under-cured part generally has lower strength, higher set, and more extractables, and it often blooms because unreacted curative remains mobile. State of cure is reviewed because the same compound can be under-cured in a thick section while well cured in a thin one, which is an application-dependent geometry question worth raising at RFQ."
  },
  {
    "id": "over-cure",
    "defect": "Over-cure (reversion or excess crosslinking)",
    "visualSymptom": "Brittle, stiff parts with reduced stretch, sometimes a glossy or scorched-looking surface. In reverting systems the part can instead feel softer and weaker than expected, with a tacky or degraded surface in the hottest zones.",
    "chemistryCause": "The network is taken past its optimum. In some elastomers and cure systems, excess heat history keeps building or restructuring crosslinks until the rubber embrittles; in others (notably some natural-rubber sulfur systems) prolonged heat causes reversion, where existing crosslinks break down faster than they reform and properties fall. Which behavior dominates is chemistry-system dependent.",
    "processCause": "Too much energy at the vulcanization step or excess accumulated heat. Thin sections and surfaces reach temperature first, so they can pass their optimum and begin to over-cure or revert while thicker cores are still approaching full cure.",
    "affectedMaterialState": "curing",
    "whereItAppears": "Arises at the vulcanization step and is caught at inspection through embrittlement, loss of elongation, or surface degradation, often most severe at edges and thin walls.",
    "relatedStationId": "vulcanization",
    "severity": "high",
    "learningExplanation": "Over-cure is the mirror image of under-cure and teaches that there is an optimum, not just a minimum, state of cure. Because thin and thick sections of one part see different heat histories, a single cure can simultaneously over-cure surfaces and under-cure cores. Whether reversion or embrittlement dominates depends on the polymer and cure chemistry, so cure-window robustness commonly requires technical review for parts with mixed wall thickness."
  },
  {
    "id": "trapped-air",
    "defect": "Trapped air (porosity / voids / blisters)",
    "visualSymptom": "Pinholes, internal bubbles, blisters, or domed soft spots; on a cut section, round or irregular voids. The surface may show small craters or a frosted, pitted look over a void.",
    "chemistryCause": "Volatiles and entrained air have nowhere to go: moisture in fillers or polymer, low-boiling process aids, or air folded in during mixing expand under heat at cure and form gas pockets if they are not removed beforehand or held compressed under enough pressure.",
    "processCause": "Insufficient deaeration or venting, air folded into the stock at the mill or calender, or inadequate consolidation pressure during shaping and cure. Calendering over an uneven nip can entrain air streaks.",
    "affectedMaterialState": "curing",
    "whereItAppears": "Entrained during mixing or calendering but usually revealed when heat expands the gas at the vulcanization step; caught at inspection as blisters, pinholes, or sectioned voids.",
    "relatedStationId": "calender",
    "severity": "medium",
    "learningExplanation": "Trapped air links a chemistry input (volatiles and moisture) with a process input (entrainment and pressure). Heat at cure is what makes a harmless dissolved or trapped gas grow into a visible void, which is why drying of hygroscopic fillers and good consolidation matter. Porosity generally lowers strength and ruins sealing and barrier performance, so void-critical applications are application-dependent and warrant technical review of the shaping route."
  },
  {
    "id": "contamination",
    "defect": "Contamination (foreign matter / cross-contamination)",
    "visualSymptom": "Embedded specks, fibers, metal glints, oil smears, color streaks, or hard inclusions in an otherwise uniform sheet. Cross-contamination from another compound can show as off-color veins or unexpected cure behavior.",
    "chemistryCause": "Foreign material disrupts the intended chemistry: a different polymer or color carried over, oil or release agent on a surface, or a reactive contaminant that locally interferes with or accelerates cure. Even small amounts of the wrong curative or pigment can shift local network formation.",
    "processCause": "Inadequate cleardown between batches on a shared internal mixer, mill, or calender; airborne dust or fibers; mislabeled or mis-weighed ingredients; and handling debris. Shared equipment without purge sequences is a frequent root cause.",
    "affectedMaterialState": "uncured compound",
    "whereItAppears": "Can enter as early as the raw-material room or weighing station, and anywhere stock is open; commonly traced back to weighing or material handling and caught at inspection as inclusions.",
    "relatedStationId": "weighing-station",
    "severity": "high",
    "learningExplanation": "Contamination teaches that a correct formulation can still fail if the wrong material enters the stream. It couples a chemistry effect (foreign matter altering local cure or strength and creating crack-initiation sites) with a process discipline (segregation, labeling, and cleardown). Because traceability and cleanliness requirements are application-dependent (a seal for critical service versus a general grommet), contamination controls and any cleanliness specification generally require technical review at RFQ."
  },
  {
    "id": "poor-adhesion",
    "defect": "Poor adhesion (to substrate, insert, or ply)",
    "visualSymptom": "Rubber peels or delaminates from a metal or fabric insert or between plies; clean separation with little rubber left on the substrate, or visible gaps and lifted edges. The bond surface may look glossy or contaminated.",
    "chemistryCause": "The bonding chemistry between elastomer and substrate is incomplete: missing or degraded adhesive or primer, surface oxidation, or a low-surface-energy polymer (some fluoroelastomers and silicones generally bond poorly without specific surface preparation or tie systems). Migrated waxes or antiozonants at the interface can also weaken the bond.",
    "processCause": "Inadequate surface preparation (cleaning, roughening, priming), bond not formed under enough heat and pressure during cure, or cure state mismatched to the adhesive's activation. Oils and mold release at the interface block intimate contact.",
    "affectedMaterialState": "curing",
    "whereItAppears": "The bond is formed during vulcanization, so failures originate there and are caught by peel or pull checks at inspection, or in service as delamination.",
    "relatedStationId": "vulcanization",
    "severity": "high",
    "learningExplanation": "Adhesion is a chemistry-plus-process problem at an interface: the right primer or tie chemistry must be activated under the right heat and pressure while the rubber co-cures into the bond. Surface cleanliness sits on top of both. Because bondability is strongly polymer- and substrate-dependent (and some elastomers are commonly hard to bond), bonded constructions generally require technical review of substrate, preparation, and adhesive system before a quote."
  },
  {
    "id": "swelling",
    "defect": "Swelling (fluid/chemical incompatibility)",
    "visualSymptom": "Parts grow in size, soften, distort, or feel spongy after fluid exposure; the surface may wrinkle or blister and dimensions drift out of tolerance. Reversible swell shrinks back on drying; chemical degradation does not.",
    "chemistryCause": "A solubility mismatch: the service fluid is chemically similar to the elastomer (close in polarity and solubility parameter), so it absorbs into the network and forces the chains apart. Non-polar elastomers generally swell in non-polar fluids while polar elastomers resist them, and vice versa (for example, many general-purpose hydrocarbon rubbers swell badly in oils, where an oil-resistant elastomer such as NBR / nitrile would generally hold up better).",
    "processCause": "Process effects are secondary but real: under-cure (a looser network) and poor dispersion generally increase uptake, and residual extractables can be leached out, all of which can worsen apparent dimensional change.",
    "affectedMaterialState": "finished",
    "whereItAppears": "A service or finished-part behavior, simulated by fluid-immersion checks at inspection; selecting the wrong polymer family is the root cause and is set far upstream at material selection.",
    "relatedStationId": "raw-material-room",
    "severity": "high",
    "learningExplanation": "Swelling is mostly a material-selection lesson: like dissolves like, so the polymer family must be matched to the fluid, temperature, and duration of service. Process (cure state) modulates the magnitude but cannot rescue a fundamentally incompatible choice. Fluid compatibility is highly application-dependent, so it always requires technical review of the actual media before any compound is recommended (never assume guaranteed suitability)."
  },
  {
    "id": "cracking",
    "defect": "Cracking (ozone, flex, or environmental)",
    "visualSymptom": "Fine surface crazing or deeper cracks, often perpendicular to the direction of stress in stretched areas, that grow over time. Ozone cracks typically appear on strained outer surfaces; flex cracks concentrate at repeated bend points.",
    "chemistryCause": "Unsaturated (double-bond-containing) elastomers are attacked by ozone and oxidation at strained surfaces, and the network chains scission. Inadequate or bloomed-away antiozonant or antioxidant protection accelerates it. Saturated-backbone or specialty polymers (such as EPDM or many fluoroelastomers) generally resist ozone far better, which is a selection question.",
    "processCause": "Process can seed cracks: under-cure, poor dispersion, contamination inclusions, or surface flaws from trimming all create stress concentrators where cracks start. Residual molding stresses and sharp trimmed edges are common initiation sites.",
    "affectedMaterialState": "finished",
    "whereItAppears": "A finished-part and in-service behavior under strain plus environment; initiation sites can be introduced at trimming or slitting and the cracking itself is assessed at inspection or seen in the field.",
    "relatedStationId": "trimming-slitting",
    "severity": "high",
    "learningExplanation": "Cracking ties polymer chemistry (backbone saturation and antidegradant protection) to mechanical and process stress raisers (strain, edges, inclusions). The lesson is that protection chemistry buys time but the right backbone for the environment is the durable fix, and clean edges reduce initiation. Because exposure (ozone, UV, dynamic flex, temperature) is application-dependent, crack resistance and any protective package generally require technical review against real service conditions."
  },
  {
    "id": "compression-set",
    "defect": "Compression set (loss of recovery)",
    "visualSymptom": "A part held compressed (a seal, gasket, or O-ring) stays flattened and does not spring back after the load is removed, leaving a permanent dent or thinned section. Sealing force fades over time.",
    "chemistryCause": "Under load and heat the network rearranges: weaker or thermally less stable crosslinks break and reform in the deformed shape, so the part forgets its original geometry. Cure-system type and polymer choice strongly affect set (some elastomers and cure systems generally hold recovery better at elevated temperature than others).",
    "processCause": "Under-cure is the dominant process driver: a less-developed network sets more. Excess plasticizer or extractables and high service temperature and time also push set up. Insufficient state of cure at the part core is a frequent culprit.",
    "affectedMaterialState": "finished",
    "whereItAppears": "A finished-part property revealed under sustained compression and heat, evaluated by recovery checks at inspection and seen in service as a seal that stops sealing.",
    "relatedStationId": "inspection",
    "severity": "high",
    "learningExplanation": "Compression set is one of the clearest links between full state of cure (process) and network stability (chemistry): an under-cured or thermally weak network simply does not recover. It is the property that most directly predicts long-term sealing performance, so for sealing parts the cure state and polymer or cure-system choice generally require technical review against the service temperature and load (recovery is application-dependent)."
  },
  {
    "id": "hardness-drift",
    "defect": "Hardness drift (out-of-band durometer)",
    "visualSymptom": "Parts measure harder or softer than the target band, or vary across a batch or along a roll. Feels noticeably stiffer or softer by hand; durometer readings scatter or trend.",
    "chemistryCause": "Hardness tracks crosslink density and filler loading, so anything that shifts those shifts hardness: filler or curative variation, moisture, incomplete coupling on silica, or migration and extractable loss over time. The compound's chemistry sets the achievable band, qualitatively low to very-high depending on polymer and reinforcement.",
    "processCause": "Mixing variation (dispersion, charge accuracy at the weighing station) and cure-state variation are the main process drivers: under-cure generally reads soft, over-cure can read hard, and uneven heat gives a gradient. Calender thickness variation can also masquerade as hardness scatter in finished stock.",
    "affectedMaterialState": "finished",
    "whereItAppears": "A finished-state property, confirmed by durometer checks at inspection; root causes trace back to weighing accuracy, mixing consistency, and cure uniformity.",
    "relatedStationId": "inspection",
    "severity": "medium",
    "learningExplanation": "Hardness drift is a sensitive, easy-to-measure symptom of upstream variation in both chemistry (crosslink density and filler) and process (weighing accuracy, dispersion, and state of cure). Because it integrates so many inputs, a stable hardness band is often the first sign that compounding and cure are in control. Target hardness is application-dependent and stated as a qualitative band; tight tolerances generally require technical review of process capability before commitment."
  }
];

export const defectChemistryById: Record<string, DefectChemistry> = Object.fromEntries(
  defectChemistry.map((d) => [d.id, d]),
);
