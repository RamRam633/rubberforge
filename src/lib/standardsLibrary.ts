import type { StandardRef } from "@/types/quality";

export const standardsLibrary: StandardRef[] = [
  {
    "id": "astm-d2240",
    "code": "ASTM D2240",
    "organization": "ASTM",
    "titleShort": "Durometer hardness (Shore A/D)",
    "propertyMeasured": "Indentation hardness using a Shore durometer, commonly reported on the Shore A scale for typical rubber and Shore D for harder materials",
    "plainLanguagePurpose": "A common way to put a number on how soft or firm a cured rubber part feels, by pressing a standardized indenter into the surface and reading the resistance. It is one of the most frequently cited acceptance properties on a rubber drawing.",
    "relevantTests": [
      "hardness",
      "thickness"
    ],
    "relevantProducts": [
      "rubber-sheet",
      "molded-parts",
      "cut-gaskets",
      "rubber-seals"
    ],
    "relevantMaterials": [
      "natural-rubber",
      "sbr",
      "epdm",
      "nbr"
    ],
    "rfqTriggers": [
      "A drawing or spec calls out a Shore A (or Shore D) hardness with a plus or minus tolerance band",
      "A customer asks us to confirm hardness on a certificate of conformance"
    ],
    "reportExpectation": "A report typically lists the scale used, the median reading and often the individual readings, sample thickness and conditioning, and the durometer point used, all of which require verification against the agreed specification.",
    "caution": "Illustrative reference only. Use the official standard document and an accredited or qualified lab for actual testing."
  },
  {
    "id": "astm-d412",
    "code": "ASTM D412",
    "organization": "ASTM",
    "titleShort": "Tensile properties of vulcanized rubber",
    "propertyMeasured": "Tensile strength, elongation at break and stress at specified strains (modulus) of cured rubber pulled to failure in tension",
    "plainLanguagePurpose": "The standard pull test for rubber: a dumbbell or ring specimen is stretched until it breaks so the material's strength and stretchiness can be measured. It is the usual source of the tensile, elongation and modulus numbers seen on a material datasheet.",
    "relevantTests": [
      "tensile-strength",
      "elongation",
      "modulus"
    ],
    "relevantProducts": [
      "rubber-sheet",
      "molded-parts",
      "rubber-seals",
      "fabric-reinforced-sheet"
    ],
    "relevantMaterials": [
      "natural-rubber",
      "sbr",
      "epdm",
      "nbr"
    ],
    "rfqTriggers": [
      "A customer specifies minimum tensile strength and elongation at break for the compound",
      "A material qualification or first-article submission asks for tensile data"
    ],
    "reportExpectation": "A report commonly states specimen type (dumbbell or ring), tensile strength at break, elongation at break, modulus at one or more strains, and conditioning, all subject to verification against the agreed values.",
    "caution": "Illustrative reference only. Use the official standard document and an accredited or qualified lab for actual testing."
  },
  {
    "id": "astm-d395",
    "code": "ASTM D395",
    "organization": "ASTM",
    "titleShort": "Compression set of rubber",
    "propertyMeasured": "Permanent deformation (set) remaining after a rubber specimen is held compressed for a period and then released, often expressed as a percentage",
    "plainLanguagePurpose": "A way to judge how well a rubber recovers its shape after being squeezed and held, which matters a great deal for parts that must keep sealing over time. Lower set generally indicates better long-term sealing behaviour.",
    "relevantTests": [
      "compression-set",
      "heat-aging",
      "thickness"
    ],
    "relevantProducts": [
      "rubber-seals",
      "cut-gaskets",
      "molded-parts",
      "sponge-foam-sheet"
    ],
    "relevantMaterials": [
      "nbr",
      "epdm",
      "neoprene",
      "fkm"
    ],
    "rfqTriggers": [
      "A sealing application specifies a maximum compression set, often after heat exposure",
      "A customer wants assurance a gasket will keep sealing after long-term compression"
    ],
    "reportExpectation": "A report typically notes the method (commonly constant deflection), test temperature and duration, and the calculated set percentage, all requiring verification against the agreed limit.",
    "caution": "Illustrative reference only. Use the official standard document and an accredited or qualified lab for actual testing."
  },
  {
    "id": "astm-d624",
    "code": "ASTM D624",
    "organization": "ASTM",
    "titleShort": "Tear strength of rubber",
    "propertyMeasured": "Resistance of cured rubber to the growth of a cut or nick under tension, reported as tear strength using specified specimen shapes",
    "plainLanguagePurpose": "Measures how hard it is to tear a rubber part once a small cut or flaw is present, which is important for parts that flex, stretch over edges, or take rough handling. It complements tensile data by describing crack and tear resistance.",
    "relevantTests": [
      "tear-resistance",
      "tensile-strength"
    ],
    "relevantProducts": [
      "rubber-sheet",
      "molded-parts",
      "bellows-boots",
      "pinch-valve-sleeves"
    ],
    "relevantMaterials": [
      "natural-rubber",
      "sbr",
      "neoprene",
      "polyurethane"
    ],
    "rfqTriggers": [
      "A part that flexes or stretches over edges specifies a minimum tear strength",
      "A customer reports field tearing and asks for tear data on the compound"
    ],
    "reportExpectation": "A report commonly states the specimen geometry used, peak tear force normalized by thickness, and conditioning, all subject to verification against the agreed specification.",
    "caution": "Illustrative reference only. Use the official standard document and an accredited or qualified lab for actual testing."
  },
  {
    "id": "astm-d471",
    "code": "ASTM D471",
    "organization": "ASTM",
    "titleShort": "Effect of liquids on rubber (fluid immersion)",
    "propertyMeasured": "Changes in mass, volume and properties of rubber after immersion in a test liquid, used to gauge fluid compatibility and swell",
    "plainLanguagePurpose": "Soaks a rubber sample in a specified fluid and measures how much it swells and how its properties shift, which is how oil, fuel and chemical compatibility is checked. It is a primary tool for confirming a material suits the media it will contact.",
    "relevantTests": [
      "fluid-immersion",
      "hardness",
      "dimensional"
    ],
    "relevantProducts": [
      "rubber-seals",
      "cut-gaskets",
      "tank-pipe-lining",
      "rubber-sleeves"
    ],
    "relevantMaterials": [
      "nbr",
      "fkm",
      "epdm",
      "neoprene"
    ],
    "rfqTriggers": [
      "A part will contact a specific oil, fuel or chemical and the customer wants swell and property-change data",
      "A material substitution needs compatibility confirmation against the service fluid"
    ],
    "reportExpectation": "A report typically lists the test liquid, temperature and duration, and the measured changes in mass, volume, hardness and tensile properties, all requiring verification against the agreed acceptance window.",
    "caution": "Illustrative reference only. Use the official standard document and an accredited or qualified lab for actual testing."
  },
  {
    "id": "astm-d573",
    "code": "ASTM D573",
    "organization": "ASTM",
    "titleShort": "Rubber aging in a hot-air oven",
    "propertyMeasured": "Change in properties such as hardness, tensile strength and elongation after a rubber sample is aged in heated air for a set period",
    "plainLanguagePurpose": "Ages a rubber sample in a hot-air oven to estimate how its properties may drift with heat and time, giving an accelerated read on durability. It is a common way to compare heat-aging resistance between compounds.",
    "relevantTests": [
      "heat-aging",
      "hardness",
      "tensile-strength"
    ],
    "relevantProducts": [
      "rubber-seals",
      "high-temp-sheet",
      "molded-parts",
      "rubber-rolls"
    ],
    "relevantMaterials": [
      "epdm",
      "nbr",
      "neoprene",
      "fkm"
    ],
    "rfqTriggers": [
      "A spec requires retained properties after hot-air aging for a stated time and temperature",
      "A customer wants confidence the part will hold up under sustained heat"
    ],
    "reportExpectation": "A report commonly states the aging temperature and time, the before-and-after property values, and the percentage change, all subject to verification against the agreed retention limits.",
    "caution": "Illustrative reference only. Use the official standard document and an accredited or qualified lab for actual testing."
  },
  {
    "id": "astm-d1149",
    "code": "ASTM D1149",
    "organization": "ASTM",
    "titleShort": "Rubber resistance to ozone cracking",
    "propertyMeasured": "Tendency of rubber to crack when exposed to ozone at controlled concentration while held under strain, used to rate weather and ozone resistance",
    "plainLanguagePurpose": "Exposes strained rubber to a controlled ozone atmosphere and looks for surface cracking, which predicts how a part may weather outdoors. It is especially relevant for unsaturated rubbers that can crack in sunlight and air over time.",
    "relevantTests": [
      "ozone-weathering",
      "visual"
    ],
    "relevantProducts": [
      "rubber-strips",
      "rubber-seals",
      "cut-gaskets",
      "fabric-reinforced-sheet"
    ],
    "relevantMaterials": [
      "natural-rubber",
      "sbr",
      "nbr",
      "neoprene"
    ],
    "rfqTriggers": [
      "A part is used outdoors and the customer wants ozone-crack resistance demonstrated",
      "A weather-exposed seal specifies a no-crack result after ozone exposure"
    ],
    "reportExpectation": "A report typically notes ozone concentration, temperature, strain and exposure time, and a description or rating of any cracking observed, all requiring verification against the agreed criteria.",
    "caution": "Illustrative reference only. Use the official standard document and an accredited or qualified lab for actual testing."
  },
  {
    "id": "astm-d297",
    "code": "ASTM D297",
    "organization": "ASTM",
    "titleShort": "Rubber chemical analysis methods",
    "propertyMeasured": "Compositional characteristics of a rubber compound determined by chemical-analysis procedures, including measurements such as density and constituent content",
    "plainLanguagePurpose": "A set of chemical-analysis procedures used to characterize what a rubber compound is made of, sometimes referenced when composition or density needs to be checked. It is more of an analytical toolbox than a single pass-or-fail test.",
    "relevantTests": [
      "specific-gravity",
      "traceability-review"
    ],
    "relevantProducts": [
      "rubber-sheet",
      "molded-parts",
      "rubber-seals"
    ],
    "relevantMaterials": [
      "natural-rubber",
      "sbr",
      "nbr",
      "neoprene"
    ],
    "rfqTriggers": [
      "A customer asks for compositional or density confirmation of a compound",
      "A dispute or incoming-inspection concern calls for analytical characterization"
    ],
    "reportExpectation": "A report commonly identifies which analytical procedures were run and the resulting values such as density or constituent content, all subject to verification by a qualified analytical lab.",
    "caution": "Illustrative reference only. Use the official standard document and an accredited or qualified lab for actual testing."
  },
  {
    "id": "astm-d5963",
    "code": "ASTM D5963",
    "organization": "ASTM",
    "titleShort": "Rubber abrasion resistance (rotating drum)",
    "propertyMeasured": "Volume loss of rubber abraded against an abrasive surface on a rotating-drum apparatus, used to rank wear resistance",
    "plainLanguagePurpose": "Rubs a rubber sample against an abrasive surface and measures how much material is lost, giving a number to compare wear resistance between compounds. It is often cited for lining and wear-part applications.",
    "relevantTests": [
      "abrasion",
      "specific-gravity"
    ],
    "relevantProducts": [
      "abrasion-liners",
      "rubber-rolls",
      "tank-pipe-lining",
      "pinch-valve-sleeves"
    ],
    "relevantMaterials": [
      "natural-rubber",
      "abrasion-resistant",
      "polyurethane",
      "sbr"
    ],
    "rfqTriggers": [
      "A wear or lining part specifies a maximum abrasion volume loss",
      "A customer comparing wear grades asks for abrasion data"
    ],
    "reportExpectation": "A report typically states the abrasion conditions and the volume loss or a relative abrasion-resistance index, all requiring verification against the agreed specification.",
    "caution": "Illustrative reference only. Use the official standard document and an accredited or qualified lab for actual testing."
  },
  {
    "id": "astm-d2000",
    "code": "ASTM D2000",
    "organization": "ASTM",
    "titleShort": "Rubber material classification (line-call-out)",
    "propertyMeasured": "A classification framework that organizes rubber materials by type and class and links them to property requirements through a coded line-call-out",
    "plainLanguagePurpose": "A widely used system, common in automotive and industrial specs, that encodes a rubber's required properties into a single coded callout so buyer and supplier share one shorthand. It points to many of the individual property tests rather than measuring anything itself.",
    "relevantTests": [
      "hardness",
      "tensile-strength",
      "compression-set"
    ],
    "relevantProducts": [
      "molded-parts",
      "rubber-seals",
      "cut-gaskets",
      "rubber-bushings"
    ],
    "relevantMaterials": [
      "nbr",
      "epdm",
      "neoprene",
      "fkm"
    ],
    "rfqTriggers": [
      "A drawing specifies a coded line-call-out instead of naming a polymer directly",
      "A customer asks which compound meets a given classification callout"
    ],
    "reportExpectation": "A report or material submission commonly maps the callout to the individual property results that support it, all subject to verification against the cited classification.",
    "caution": "Illustrative reference only. Use the official standard document and an accredited or qualified lab for actual testing."
  },
  {
    "id": "astm-d1056",
    "code": "ASTM D1056",
    "organization": "ASTM",
    "titleShort": "Flexible cellular rubber (sponge and foam)",
    "propertyMeasured": "Classification and property requirements for flexible cellular rubber products such as sponge and foam, including firmness and compression characteristics",
    "plainLanguagePurpose": "Organizes sponge and foam rubber into grades by firmness and characteristics, providing a shared language for specifying cushioning and low-load sealing materials. It is the usual reference when a cellular, not solid, rubber is required.",
    "relevantTests": [
      "compression-set",
      "thickness",
      "visual"
    ],
    "relevantProducts": [
      "sponge-foam-sheet",
      "rubber-strips",
      "cut-gaskets"
    ],
    "relevantMaterials": [
      "epdm",
      "neoprene",
      "nbr",
      "silicone"
    ],
    "rfqTriggers": [
      "A gasketing or cushioning application specifies a cellular-rubber grade or firmness class",
      "A customer needs an open-cell or closed-cell sponge to a defined compression characteristic"
    ],
    "reportExpectation": "A report typically identifies the grade or class claimed and the supporting firmness, compression and dimensional results, all requiring verification against the cited grade.",
    "caution": "Illustrative reference only. Use the official standard document and an accredited or qualified lab for actual testing."
  },
  {
    "id": "astm-f36",
    "code": "ASTM F36",
    "organization": "ASTM",
    "titleShort": "Compressibility and recovery of gasket materials",
    "propertyMeasured": "Compressibility and recovery of a gasket material under a defined load, expressed as percentages",
    "plainLanguagePurpose": "Measures how much a gasket material squashes under load and how much it springs back, which helps predict sealing behaviour at a flange. It is a common acceptance test for gasket and seal stock.",
    "relevantTests": [
      "compression-set",
      "thickness",
      "dimensional"
    ],
    "relevantProducts": [
      "cut-gaskets",
      "rubber-sheet",
      "fabric-reinforced-sheet",
      "rubber-seals"
    ],
    "relevantMaterials": [
      "nbr",
      "epdm",
      "neoprene",
      "sbr"
    ],
    "rfqTriggers": [
      "A gasket spec lists compressibility and recovery percentage ranges",
      "A customer wants flange-sealing behaviour characterized for a sheet stock"
    ],
    "reportExpectation": "A report commonly states the applied load, the measured compressibility and recovery percentages, and specimen thickness, all subject to verification against the agreed ranges.",
    "caution": "Illustrative reference only. Use the official standard document and an accredited or qualified lab for actual testing."
  },
  {
    "id": "astm-f37",
    "code": "ASTM F37",
    "organization": "ASTM",
    "titleShort": "Sealability of gasket materials",
    "propertyMeasured": "Leakage rate of a fluid through or past a gasket material under defined load and pressure, used to assess sealing performance",
    "plainLanguagePurpose": "Checks how well a gasket material actually holds back a test fluid under clamping load, giving a direct read on sealability rather than an indirect property. It is often requested where leakage is the central concern.",
    "relevantTests": [
      "fluid-immersion",
      "compression-set",
      "visual"
    ],
    "relevantProducts": [
      "cut-gaskets",
      "rubber-sheet",
      "fabric-reinforced-sheet",
      "rubber-seals"
    ],
    "relevantMaterials": [
      "nbr",
      "epdm",
      "neoprene",
      "fkm"
    ],
    "rfqTriggers": [
      "A flange or joint application specifies a maximum allowable leakage rate",
      "A customer comparing gasket stocks asks for sealability data"
    ],
    "reportExpectation": "A report typically notes the test fluid, applied load and pressure, and the measured leakage rate, all requiring verification against the agreed sealability limit.",
    "caution": "Illustrative reference only. Use the official standard document and an accredited or qualified lab for actual testing."
  },
  {
    "id": "iso-7619",
    "code": "ISO 7619",
    "organization": "ISO",
    "titleShort": "Indentation hardness (durometer and IRHD pocket)",
    "propertyMeasured": "Indentation hardness of rubber measured with durometer-type instruments, an internationally used counterpart to Shore hardness methods",
    "plainLanguagePurpose": "The international approach to durometer hardness, frequently named when a customer works to ISO rather than ASTM references. It serves the same purpose of putting a number on how soft or firm the cured rubber is.",
    "relevantTests": [
      "hardness",
      "thickness"
    ],
    "relevantProducts": [
      "rubber-sheet",
      "molded-parts",
      "cut-gaskets",
      "rubber-seals"
    ],
    "relevantMaterials": [
      "natural-rubber",
      "sbr",
      "epdm",
      "nbr"
    ],
    "rfqTriggers": [
      "A customer specifies hardness to ISO references rather than ASTM",
      "An export order calls out durometer hardness in ISO terms"
    ],
    "reportExpectation": "A report commonly lists the instrument and scale, the reading and conditioning, and specimen thickness, all subject to verification against the agreed specification.",
    "caution": "Illustrative reference only. Use the official standard document and an accredited or qualified lab for actual testing."
  },
  {
    "id": "iso-37",
    "code": "ISO 37",
    "organization": "ISO",
    "titleShort": "Tensile stress-strain properties of rubber",
    "propertyMeasured": "Tensile strength, elongation at break and stress at given strains of cured rubber, the international counterpart to the common ASTM tensile method",
    "plainLanguagePurpose": "The international pull test for rubber, often cited on ISO-based specs as the source of tensile, elongation and modulus values. It mirrors the familiar dumbbell tensile test under ISO references.",
    "relevantTests": [
      "tensile-strength",
      "elongation",
      "modulus"
    ],
    "relevantProducts": [
      "rubber-sheet",
      "molded-parts",
      "rubber-seals",
      "fabric-reinforced-sheet"
    ],
    "relevantMaterials": [
      "natural-rubber",
      "sbr",
      "epdm",
      "nbr"
    ],
    "rfqTriggers": [
      "A customer specifies tensile and elongation to ISO references",
      "An export material qualification asks for tensile data under ISO methods"
    ],
    "reportExpectation": "A report typically states specimen type, tensile strength and elongation at break, modulus at stated strains, and conditioning, all requiring verification against the agreed values.",
    "caution": "Illustrative reference only. Use the official standard document and an accredited or qualified lab for actual testing."
  },
  {
    "id": "iso-815",
    "code": "ISO 815",
    "organization": "ISO",
    "titleShort": "Compression set of rubber (ISO)",
    "propertyMeasured": "Permanent set remaining after a rubber specimen is held under constant compression and released, the international counterpart to common compression-set methods",
    "plainLanguagePurpose": "The international way to measure how much a squeezed rubber fails to spring back, used to judge long-term sealing under ISO references. It is commonly paired with heat exposure to reflect service conditions.",
    "relevantTests": [
      "compression-set",
      "heat-aging",
      "thickness"
    ],
    "relevantProducts": [
      "rubber-seals",
      "cut-gaskets",
      "molded-parts",
      "sponge-foam-sheet"
    ],
    "relevantMaterials": [
      "nbr",
      "epdm",
      "neoprene",
      "fkm"
    ],
    "rfqTriggers": [
      "A sealing spec specifies compression set to ISO references",
      "A customer wants long-term sealing characterized under ISO methods"
    ],
    "reportExpectation": "A report commonly notes test temperature and duration, deflection conditions, and the calculated set percentage, all subject to verification against the agreed limit.",
    "caution": "Illustrative reference only. Use the official standard document and an accredited or qualified lab for actual testing."
  },
  {
    "id": "iso-34",
    "code": "ISO 34",
    "organization": "ISO",
    "titleShort": "Tear strength of rubber (ISO)",
    "propertyMeasured": "Resistance of rubber to tearing using specified specimen shapes, the international counterpart to common tear-strength methods",
    "plainLanguagePurpose": "The international tear test, used to characterize how a rubber resists tearing once nicked, often named on ISO-based specs. It complements tensile data for parts that flex or take rough handling.",
    "relevantTests": [
      "tear-resistance",
      "tensile-strength"
    ],
    "relevantProducts": [
      "rubber-sheet",
      "molded-parts",
      "bellows-boots",
      "pinch-valve-sleeves"
    ],
    "relevantMaterials": [
      "natural-rubber",
      "sbr",
      "neoprene",
      "polyurethane"
    ],
    "rfqTriggers": [
      "A customer specifies tear strength to ISO references",
      "A part with flex or handling demands needs tear data under ISO methods"
    ],
    "reportExpectation": "A report typically states specimen geometry, peak tear force normalized by thickness, and conditioning, all requiring verification against the agreed specification.",
    "caution": "Illustrative reference only. Use the official standard document and an accredited or qualified lab for actual testing."
  },
  {
    "id": "iso-1817",
    "code": "ISO 1817",
    "organization": "ISO",
    "titleShort": "Effect of liquids on rubber (ISO)",
    "propertyMeasured": "Changes in volume, mass and properties of rubber after immersion in a test liquid, the international counterpart to common fluid-immersion methods",
    "plainLanguagePurpose": "The international fluid-immersion test, used to gauge how a rubber swells and changes in a given oil, fuel or chemical under ISO references. It is a primary tool for confirming media compatibility on ISO-based specs.",
    "relevantTests": [
      "fluid-immersion",
      "hardness",
      "dimensional"
    ],
    "relevantProducts": [
      "rubber-seals",
      "cut-gaskets",
      "tank-pipe-lining",
      "rubber-sleeves"
    ],
    "relevantMaterials": [
      "nbr",
      "fkm",
      "epdm",
      "neoprene"
    ],
    "rfqTriggers": [
      "A customer specifies fluid resistance to ISO references for a service media",
      "An ISO-based material substitution needs swell and property-change data"
    ],
    "reportExpectation": "A report commonly lists the test liquid, temperature and duration, and the measured changes in volume, mass and properties, all subject to verification against the agreed window.",
    "caution": "Illustrative reference only. Use the official standard document and an accredited or qualified lab for actual testing."
  },
  {
    "id": "iso-188",
    "code": "ISO 188",
    "organization": "ISO",
    "titleShort": "Accelerated rubber aging and heat resistance",
    "propertyMeasured": "Change in properties after accelerated aging of rubber in heated air or an oven, the international counterpart to common heat-aging methods",
    "plainLanguagePurpose": "The international accelerated-aging test, used to estimate how a rubber's properties drift with heat and time under ISO references. It is commonly cited to compare heat resistance between compounds on ISO-based specs.",
    "relevantTests": [
      "heat-aging",
      "hardness",
      "tensile-strength"
    ],
    "relevantProducts": [
      "rubber-seals",
      "high-temp-sheet",
      "molded-parts",
      "rubber-rolls"
    ],
    "relevantMaterials": [
      "epdm",
      "nbr",
      "neoprene",
      "fkm"
    ],
    "rfqTriggers": [
      "A spec requires retained properties after accelerated aging to ISO references",
      "A customer wants heat durability characterized under ISO methods"
    ],
    "reportExpectation": "A report typically states the aging temperature and time, before-and-after property values, and percentage change, all requiring verification against the agreed retention limits.",
    "caution": "Illustrative reference only. Use the official standard document and an accredited or qualified lab for actual testing."
  },
  {
    "id": "iso-1431",
    "code": "ISO 1431",
    "organization": "ISO",
    "titleShort": "Ozone-cracking resistance of rubber (ISO)",
    "propertyMeasured": "Resistance of strained rubber to cracking in an ozone-containing atmosphere, the international counterpart to common ozone-resistance methods",
    "plainLanguagePurpose": "The international ozone-cracking test, exposing strained rubber to ozone and checking for surface cracks to predict weathering, under ISO references. It is most relevant for unsaturated rubbers used outdoors.",
    "relevantTests": [
      "ozone-weathering",
      "visual"
    ],
    "relevantProducts": [
      "rubber-strips",
      "rubber-seals",
      "cut-gaskets",
      "fabric-reinforced-sheet"
    ],
    "relevantMaterials": [
      "natural-rubber",
      "sbr",
      "nbr",
      "neoprene"
    ],
    "rfqTriggers": [
      "A weather-exposed part specifies ozone resistance to ISO references",
      "A customer wants no-crack performance demonstrated under ISO ozone methods"
    ],
    "reportExpectation": "A report commonly notes ozone concentration, temperature, strain and exposure time, and a rating or description of any cracking, all subject to verification against the agreed criteria.",
    "caution": "Illustrative reference only. Use the official standard document and an accredited or qualified lab for actual testing."
  },
  {
    "id": "iso-4649",
    "code": "ISO 4649",
    "organization": "ISO",
    "titleShort": "Abrasion resistance (rotating-drum, ISO)",
    "propertyMeasured": "Volume loss of rubber abraded on a rotating-drum apparatus, the international counterpart to common abrasion methods",
    "plainLanguagePurpose": "The international abrasion test, measuring rubber lost when rubbed against an abrasive surface to rank wear resistance under ISO references. It is frequently named for lining, roll and wear-part specs.",
    "relevantTests": [
      "abrasion",
      "specific-gravity"
    ],
    "relevantProducts": [
      "abrasion-liners",
      "rubber-rolls",
      "tank-pipe-lining",
      "pinch-valve-sleeves"
    ],
    "relevantMaterials": [
      "natural-rubber",
      "abrasion-resistant",
      "polyurethane",
      "sbr"
    ],
    "rfqTriggers": [
      "A wear or lining part specifies abrasion loss to ISO references",
      "A customer comparing wear grades asks for abrasion data under ISO methods"
    ],
    "reportExpectation": "A report typically states the abrasion conditions and the volume loss or relative abrasion index, all requiring verification against the agreed specification.",
    "caution": "Illustrative reference only. Use the official standard document and an accredited or qualified lab for actual testing."
  },
  {
    "id": "iso-2781",
    "code": "ISO 2781",
    "organization": "ISO",
    "titleShort": "Density of rubber",
    "propertyMeasured": "Density (specific gravity) of cured rubber, commonly determined by a weight-in-air versus weight-in-liquid approach",
    "plainLanguagePurpose": "Measures the density of a rubber compound, a simple check that can flag a wrong or contaminated material and helps convert between weight and volume for costing. It is a quick incoming or in-process verification.",
    "relevantTests": [
      "specific-gravity",
      "traceability-review"
    ],
    "relevantProducts": [
      "rubber-sheet",
      "molded-parts",
      "cut-gaskets",
      "rubber-seals"
    ],
    "relevantMaterials": [
      "nbr",
      "epdm",
      "neoprene",
      "fkm"
    ],
    "rfqTriggers": [
      "A spec lists a target density or specific gravity with a tolerance",
      "A customer wants a quick material-identity confirmation on a certificate"
    ],
    "reportExpectation": "A report commonly states the measured density or specific gravity and the conditioning used, all subject to verification against the agreed target.",
    "caution": "Illustrative reference only. Use the official standard document and an accredited or qualified lab for actual testing."
  }
];

export const standardsLibraryById: Record<string, StandardRef> = Object.fromEntries(
  standardsLibrary.map((s) => [s.id, s]),
);
