import type { DocumentationItem } from "@/types/quality";

export const documentationItems: DocumentationItem[] = [
  {
    "id": "coc",
    "name": "Certificate of Conformance (CoC)",
    "whatItIs": "A signed one-page statement in which the maker declares that the supplied parts were produced and inspected against the agreed purchase order, drawing revision, and stated requirements, and that they conform. It commonly lists part number, drawing/revision, lot or batch identifier, quantity, and the responsible signatory, but typically does not include underlying measured data. It is a declaration of conformity, not independent proof.",
    "whoProvides": "either",
    "whenRequested": "Commonly requested on the RFQ or purchase order as a standing requirement for each shipment or lot, and often expected as a baseline document for custom rubber parts.",
    "availabilityNote": "Commonly available but subject to factory or supplier capability and requires confirmation of the exact fields and signatory before sourcing; the scope of what is being certified requires verification before sourcing."
  },
  {
    "id": "coa",
    "name": "Certificate of Analysis (CoA)",
    "whatItIs": "A document, more typical for an incoming raw material such as a polymer, carbon black, or compounded stock, that reports measured values for selected characteristics of a specific lot against a target range or specification. For finished rubber parts it is less common than a Certificate of Conformance and is sometimes used loosely to mean the same thing, so the intended content should be clarified. It does not by itself prove finished-part performance.",
    "whoProvides": "either",
    "whenRequested": "Often requested for material-level lots or where a compound's properties must be traceable; may be passed through from a material supplier to the buyer with the factory acting as intermediary.",
    "availabilityNote": "May be requested; for finished parts it is subject to factory or supplier capability and requires confirmation, since CoA content typically originates from the material supplier and the reported characteristics require verification before sourcing."
  },
  {
    "id": "mtr",
    "name": "Material Test Report / Material Certificate (MTR)",
    "whatItIs": "A record tracing the elastomer compound or component materials used, commonly naming the generic polymer family (for example a nitrile, EPDM, silicone, or fluoroelastomer category), the material or compound designation, and the supplier's lot reference. It links the delivered parts back to a documented material source. It is a traceability record rather than a performance guarantee, and specific grade names should be treated as illustrative until confirmed.",
    "whoProvides": "either",
    "whenRequested": "Commonly requested where material traceability matters, such as regulated, safety, or high-spec applications; often tied to a named compound on the drawing or RFQ.",
    "availabilityNote": "Subject to factory or supplier capability and requires confirmation; the upstream material data typically originates with the material supplier, and any named grade or supplier is an illustrative example that requires verification before sourcing."
  },
  {
    "id": "dimensional-report",
    "name": "Dimensional Inspection Report",
    "whatItIs": "A report listing measured dimensions of sampled parts against the nominal values and tolerances on the drawing, commonly covering key controlled features and any characteristics flagged as critical. For rubber it often notes the measurement method and conditions because elastomers are compliant and temperature-sensitive, which can affect readings. It reflects the sampled parts and inspection plan used, not necessarily every piece.",
    "whoProvides": "either",
    "whenRequested": "Commonly requested at first-article or sample stage and sometimes per lot; often specified on the RFQ when tolerances are tight or features are designated critical.",
    "availabilityNote": "Commonly available but subject to factory or supplier capability and requires confirmation of sample size, which features are measured, and method; measurement results require verification and the inspection scope requires review before sourcing."
  },
  {
    "id": "hardness-report",
    "name": "Hardness Test Report",
    "whatItIs": "A record of measured hardness for the rubber, typically reported on a durometer scale such as Shore A (or an alternative scale for very soft or very hard materials) against a target value and tolerance. It commonly notes the sampling and that readings can vary with part geometry, thickness, and measurement location. It characterizes the tested specimens or sampled parts, not a guaranteed value for every piece.",
    "whoProvides": "either",
    "whenRequested": "Commonly requested where hardness is a controlled property, often at first-article or per-lot, and frequently named directly on the drawing or RFQ.",
    "availabilityNote": "Commonly available but subject to factory or supplier capability and requires confirmation; the applicable test method and scale should follow the official standard and an accredited or qualified lab for actual testing, and reported values require verification before sourcing."
  },
  {
    "id": "tensile-report",
    "name": "Tensile / Elongation Test Report",
    "whatItIs": "A report of tensile properties such as tensile strength, elongation at break, and sometimes modulus at a stated elongation, measured on specimens prepared from the compound or from the part. It commonly identifies the specimen type and test conditions. Because results depend heavily on specimen preparation and method, the values characterize the tested specimens rather than guaranteeing in-service part behavior.",
    "whoProvides": "either",
    "whenRequested": "Often requested for qualification, material validation, or where mechanical performance is specified; may be requested at first-article or periodically rather than every lot.",
    "availabilityNote": "May be requested and is subject to factory or supplier capability and requires confirmation, often depending on in-house versus external lab access; testing should use the official standard and an accredited or qualified lab, and results require verification before sourcing."
  },
  {
    "id": "compression-set-report",
    "name": "Compression Set Test Report",
    "whatItIs": "A report describing how much permanent deformation remains in a rubber specimen after it has been held compressed for a defined period and then released, typically expressed as a percentage, which indicates the material's tendency to recover. It commonly states the specimen type and exposure conditions. The result reflects the tested specimens under the chosen conditions and is an indicator of sealing-type behavior, not a guarantee of field life.",
    "whoProvides": "either",
    "whenRequested": "Often requested for sealing or gasket applications and for material qualification rather than routine per-lot checks, and usually only when called out on the RFQ or drawing.",
    "availabilityNote": "May be requested and is subject to factory or supplier capability and requires confirmation; this test often involves longer durations and may be outsourced, so testing should use the official standard and an accredited or qualified lab, and results require verification before sourcing."
  },
  {
    "id": "traceability-summary",
    "name": "Lot Traceability Summary",
    "whatItIs": "A summary that ties a shipped lot back through its records, commonly linking the part and drawing revision, the production lot or batch identifier, the associated material reference, and the inspection records that apply to that lot. It is intended to let a buyer follow a part back to its material and inspection history. It collates references rather than re-testing, so the strength of traceability depends on the underlying records.",
    "whoProvides": "factory",
    "whenRequested": "Commonly requested where lot-level traceability is required by the buyer or end application, often alongside conformance documents and frequently for regulated or safety-related parts.",
    "availabilityNote": "Subject to factory or supplier capability and requires confirmation; the depth and format of traceability vary by maker and require verification and review of the linked records before sourcing."
  },
  {
    "id": "sds-tds",
    "name": "Safety Data Sheet / Technical Data Sheet (SDS / TDS)",
    "whatItIs": "Two distinct supporting documents that often travel together. A Safety Data Sheet covers handling, hazard, and safety information for a material and is usually authored by the material supplier. A Technical Data Sheet summarizes typical, nominal property values for a material or compound. Both describe materials generally; TDS figures are typically nominal reference values and not lot-specific acceptance results.",
    "whoProvides": "supplier",
    "whenRequested": "Commonly requested for shipping, environmental, health-and-safety review, or material evaluation; often expected when a new material or compound is being considered.",
    "availabilityNote": "Commonly available from the material supplier and may be passed through, subject to supplier capability and requiring confirmation; TDS values are nominal and require verification before sourcing, and any safety information should be checked against the supplier's current official document."
  },
  {
    "id": "packing-list",
    "name": "Packing List",
    "whatItIs": "A shipment document itemizing what is physically in a delivery, commonly listing part numbers, lot identifiers, quantities per carton or pallet, carton or package counts, and weights, and referencing the purchase order. It supports receiving, reconciliation, and inventory check-in. It describes the contents and packaging of a shipment and is not a quality or conformance record.",
    "whoProvides": "either",
    "whenRequested": "Commonly included with virtually every shipment and often specified on the RFQ or purchase order for required fields and format.",
    "availabilityNote": "Commonly available but subject to factory or supplier capability and requires confirmation of required fields, lot breakdown, and labeling conventions, which require verification before sourcing."
  },
  {
    "id": "drawing-ack",
    "name": "Drawing / Specification Acknowledgement",
    "whatItIs": "A record in which the maker confirms which drawing number and revision, and which specification or requirement set, they have reviewed and are quoting or building to, and notes any clarifications, exceptions, or deviations. It is used to align both parties on scope before commitment. It captures agreement on the documents in effect rather than certifying any finished part.",
    "whoProvides": "either",
    "whenRequested": "Commonly requested during RFQ, quoting, and first-article phases, and often revisited when a drawing revision changes; central to a clean quote-preparation exchange.",
    "availabilityNote": "Commonly produced as part of quoting but subject to factory or supplier capability and requiring confirmation; any noted exceptions or deviations require review and verification before sourcing."
  },
  {
    "id": "regulatory-declaration",
    "name": "Regulatory / Compliance Declaration",
    "whatItIs": "A maker's statement regarding applicable regulatory categories that a buyer may ask about, such as restricted-substance, food-contact, or material-restriction topics, commonly framed against generic regulatory categories rather than any specific certification. It typically relies on upstream material supplier information. It is a declaration of stated position, not an independent certification or proof of compliance, and should not be read as a guaranteed compliance claim.",
    "whoProvides": "either",
    "whenRequested": "Often requested when an application has regulatory exposure, such as food-contact, potable, medical-adjacent, or restricted-substance contexts; usually called out explicitly on the RFQ.",
    "availabilityNote": "May be requested and is subject to factory or supplier capability and requires confirmation; underlying data typically originates upstream, no specific certification is implied, and any regulatory category, scope, or supporting material data requires verification before sourcing against the official regulation and a qualified assessor."
  }
];
