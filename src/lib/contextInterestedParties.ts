import type { ContextPanelData } from "@/types/qms";
export const contextInterestedParties: ContextPanelData = {
  "internalIssues": [
    "Modeled compound and process knowledge concentration: the QMS model assumes recipes, cure-window understanding, and mill or mixer setup expertise commonly reside with a few experienced operators and the compounding team, which is a placeholder organizational-knowledge risk to be mapped, not a measured finding.",
    "Equipment condition and capability of core rubber assets (internal mixer, two-roll mill, calender, extruder, compression and injection presses, autoclave) is modeled as a partial-integration input; real maintenance status, wear, and process capability would need actual records and are represented here only as demo placeholders.",
    "In-process quality and inspection capability (rheometer or cure-meter checks, durometer hardness, dimensional and visual inspection) is modeled at a conceptual level; the depth of operator training, gauge calibration discipline, and sampling rules is a to-be-assessed internal issue.",
    "Material handling, identification, and shelf-life control for elastomers, curatives, and masterbatch is modeled as a partial internal control; first-in-first-out discipline, lot traceability, and segregation of nonconforming stock are placeholder concepts pending real evidence.",
    "Resource and competence planning across shifts (skilled mill operators, press setters, lab technicians) is modeled as an internal capacity question and is illustrative only, not drawn from any real staffing record."
  ],
  "externalIssues": [
    "Raw-material supply variability for elastomers, fillers (such as carbon black categories), and curatives, where polymer grade availability, supplier lot-to-lot variation, and single-source dependence are modeled as external risks to be characterized rather than measured here.",
    "Customer and sector requirements (illustrative automotive, sealing, industrial, or regulated end uses) that may demand traceability documents, first-article approval, and specific test reports, modeled here as typical placeholder expectations subject to confirmation per contract.",
    "Regulatory and substance-restriction context (general chemical-substance, workplace-safety, and environmental obligations applicable to rubber processing) modeled at a high level as an external issue to be assessed with qualified advisors, not as a compliance determination.",
    "Logistics and inbound or outbound transport reliability, since elastomer materials and finished parts depend on freight, lead times, and port or carrier conditions; modeled as an external disruption factor in placeholder terms.",
    "Market and technology context (competitor capability, customer sustainability expectations, and digital or traceability trends) that shapes what a rubber factory is generally expected to demonstrate, treated as a conceptual scanning input rather than a quantified market study."
  ],
  "interestedParties": [
    {
      "party": "Customers and OEM buyers of molded and extruded rubber parts",
      "expectation": "Typically expect parts that conform to the agreed drawing revision and specification, consistent hardness and dimensions, on-time delivery, and supporting documents (for example a Certificate of Conformance or dimensional report) on request; all such expectations are modeled placeholders confirmed per contract."
    },
    {
      "party": "Raw-material and compound suppliers",
      "expectation": "Commonly expect clear specifications, accurate forecasts and ordering, traceable lot references flowing both ways, and timely communication on nonconformities; modeled as typical supplier-relationship expectations, not real agreements."
    },
    {
      "party": "Production and laboratory employees (mill and press operators, lab and inspection technicians)",
      "expectation": "Generally expect safe handling of elastomers, curatives, heat, and pinch-point hazards, clear work instructions and cure-concept guidance, calibrated gauges, competence training, and a usable nonconformity and feedback path; described here as concepts in an educational model."
    },
    {
      "party": "Top management and ownership of the modeled factory",
      "expectation": "Typically expect a QMS model that supports consistent quality, reduced scrap and rework, audit-readiness, and informed planning, while understanding this prototype is a modeling and audit-readiness aid, not a certification."
    },
    {
      "party": "Regulators, accredited certification bodies, and external auditors (as a future-integration concept)",
      "expectation": "Would generally expect genuine implementation, objective evidence, internal audits, and assessment by an accredited body before any conformity claim; this tool explicitly does not provide or substitute for that and makes no certification claim."
    },
    {
      "party": "Local community and environmental stakeholders near a rubber-processing site",
      "expectation": "Commonly expect responsible management of emissions, odor, energy use, noise, and waste from mixing and curing operations; represented as a high-level placeholder context input, not a measured environmental assessment."
    }
  ],
  "climateRelevanceQuestion": "As part of this clause 4 context review, and reflecting the ISO 9001:2015 climate-action amendment, the panel asks the reviewer to consider: is climate change a relevant issue to the QMS scope and objectives of this modeled rubber factory, and if so, where (for example material supply, energy and heat systems, storage, logistics, customer requirements, or regulatory documentation) should it be reflected?",
  "potentialImpacts": [
    {
      "area": "material availability",
      "note": "Climate-linked disruption (extreme weather affecting natural-rubber growing regions, feedstock plants, or supplier sites) could, in concept, affect availability and lot-to-lot consistency of elastomers, fillers, and curatives; modeled as a to-be-assessed supply-context factor, not a forecast."
    },
    {
      "area": "energy/heat systems",
      "note": "Curing presses, autoclaves, mixers, and steam or thermal systems are energy and heat intensive, so energy cost, supply reliability, and decarbonization expectations are plausibly relevant context for a rubber factory; treated here as a high-level placeholder consideration, no settings or measured loads implied."
    },
    {
      "area": "logistics disruption",
      "note": "Weather and climate events may, in general terms, disrupt inbound material freight and outbound shipments, affecting lead times and on-time delivery; modeled as a conceptual external-risk input to be evaluated with real logistics data."
    },
    {
      "area": "storage conditions",
      "note": "Elastomers, curatives, and some compounded stock are sensitive to heat, humidity, and ageing, so warmer or more variable ambient conditions could in principle affect shelf life and storage controls; represented as a placeholder context point for review, not a measured limit."
    },
    {
      "area": "customer sustainability requirements",
      "note": "Customers may increasingly request information on energy use, recycled or lower-impact materials, and emissions reporting as part of supplier expectations; modeled as a typical, evolving expectation to confirm per contract, not a present obligation in this prototype."
    },
    {
      "area": "regulatory documentation",
      "note": "Emerging environmental and emissions-reporting obligations relevant to rubber processing could add documentation expectations over time; flagged here at a high level as a context item to assess with qualified advisors, and not a compliance determination."
    }
  ],
  "climateStatus": "relevance-to-be-assessed",
  "disclaimer": "This panel is an educational QMS context-review aid for modeling and audit-readiness planning, using demo and placeholder data, and it is not a climate compliance system, an environmental assessment, or legal or compliance advice."
};
