import type { HumanInteraction } from "@/types/factoryLife";
import type { StationId } from "@/types/simulation";
export const humanInteractions: HumanInteraction[] = [
  {
    "id": "int-01",
    "roleId": "material-handler",
    "stationId": "raw-material-room",
    "action": "moves a staged pallet",
    "description": "The material handler repositions a staged pallet of bagged elastomer and filler toward the dispatch lane, keeping the raw-material room organized by lot so that first-in, first-out rotation is preserved. The action is logistical and conceptual: the handler reads the pallet label, confirms the lot identifier against the day's pick list, and leaves processing to downstream stations."
  },
  {
    "id": "int-02",
    "roleId": "material-handler",
    "stationId": "raw-material-room",
    "action": "checks the lot label",
    "description": "Standing at the storage racks, the material handler cross-references a bag's lot label and certificate-of-analysis number against the receiving log. This is a verification step that supports traceability; it involves no machine interaction and no handling of process equipment, only confirming that the right grade of polymer or carbon black is staged for the batch."
  },
  {
    "id": "int-03",
    "roleId": "batch-technician",
    "stationId": "weighing-station",
    "action": "checks the batch ticket",
    "description": "At the weighing station, the batch technician reviews the batch ticket on a tablet, confirming that the listed ingredient sequence and target masses match the approved formulation reference. The interaction is purely informational: the technician validates the recipe identity and quantities conceptually without disclosing exact proportions, ensuring the correct compound is being assembled."
  },
  {
    "id": "int-04",
    "roleId": "batch-technician",
    "stationId": "weighing-station",
    "action": "records a weighment reading",
    "description": "The batch technician observes the platform scale display and records each weighment reading into the batch record. This documentation task captures that staged ingredients fall within their tolerance windows. The technician interacts with the readout and the log, not with any mixing or heated equipment, keeping the role focused on data integrity and material accountability."
  },
  {
    "id": "int-05",
    "roleId": "mixer-operator",
    "stationId": "internal-mixer",
    "action": "monitors the control panel",
    "description": "The mixer operator watches the internal mixer's control panel from the designated operating position, tracking temperature and power-draw trends as a batch is compounded. Observation is conceptual and remote from moving parts: the operator interprets the curve on the HMI to judge dispersion progress and never reaches toward the mixing chamber, rotors, or hot surfaces during the cycle."
  },
  {
    "id": "int-06",
    "roleId": "mixer-operator",
    "stationId": "internal-mixer",
    "action": "reviews the cycle trend",
    "description": "After a mix cycle completes, the mixer operator reviews the logged cycle trend on the panel, comparing the energy and temperature signature against the expected profile for that compound family. This is an analytical, after-the-fact check performed at the console; it informs whether the batch is released downstream and involves no manual contact with the mixer internals."
  },
  {
    "id": "int-07",
    "roleId": "mill-calender-operator",
    "stationId": "two-roll-mill",
    "action": "observes the sheet formation",
    "description": "From a safe standing position behind the guard, the mill operator observes a compound forming into a continuous sheet on the two-roll mill, watching band uniformity and color consistency as visual indicators of good dispersion. The operator stays clear of the nip and rotating rolls at all times; the interaction is observational and quality-oriented, not a hands-on adjustment of the running machine."
  },
  {
    "id": "int-08",
    "roleId": "mill-calender-operator",
    "stationId": "calender",
    "action": "monitors the control panel",
    "description": "At the calender, the operator monitors the control panel to follow line speed and gauge-thickness readouts as rubber stock is formed into a sheet of controlled thickness. The role here is supervisory and screen-based: the operator interprets the displayed gauge profile from the console and keeps a safe distance from the heated rolls and the running web."
  },
  {
    "id": "int-09",
    "roleId": "mill-calender-operator",
    "stationId": "calender",
    "action": "collects a sample coupon",
    "description": "Once a calendered sheet has exited the rolls and reached a safe, cooled section of the line, the operator collects a small sample coupon for thickness and surface checks. The sampling happens away from the nip and hot rolls, on already-formed material, supporting quality verification without any interaction with the active forming zone."
  },
  {
    "id": "int-10",
    "roleId": "cure-operator",
    "stationId": "vulcanization",
    "action": "monitors the control panel",
    "description": "The cure operator monitors the vulcanization control panel, following temperature and pressure readouts and the cycle timer for the press or autoclave from the operating station. The interaction is conceptual and remote: the operator confirms the cure cycle is tracking its expected profile on the HMI without specifying exact times or temperatures and without approaching the hot curing chamber while it is energized."
  },
  {
    "id": "int-11",
    "roleId": "cure-operator",
    "stationId": "vulcanization",
    "action": "reviews the cure log",
    "description": "The cure operator reviews the cure log for a completed cycle, confirming that the recorded process curve stayed within the validated band before the part is advanced. This is a documentation and release decision made at the console; it references the integrity of the thermal history conceptually and involves no manual handling of hot molds or chamber components."
  },
  {
    "id": "int-12",
    "roleId": "qa-inspector",
    "stationId": "cooling",
    "action": "collects a sample coupon",
    "description": "At the cooling station, the QA inspector collects a sample coupon from product that has reached a safe, ambient temperature after vulcanization. The inspector handles only fully cooled material staged for inspection, taking the coupon to the lab for property checks. The interaction is downstream of any hot process and carries no exposure to active heating or moving equipment."
  },
  {
    "id": "int-13",
    "roleId": "qa-inspector",
    "stationId": "inspection",
    "action": "updates QA status",
    "description": "At the inspection bench, the QA inspector updates the QA status of a lot in the quality system after reviewing dimensional and visual results against acceptance criteria. This is a records-and-judgment task performed on a workstation: the inspector marks material as accepted, held, or rejected, providing the provenance trail that follows the product to finished goods."
  },
  {
    "id": "int-14",
    "roleId": "qa-inspector",
    "stationId": "trimming-slitting",
    "action": "inspects a finished edge",
    "description": "At the trimming and slitting area, the QA inspector examines a finished sheet edge on already-cut, stationary material to confirm clean separation and correct width. The inspection is visual and gauge-based on static product staged at the bench; the inspector keeps clear of any cutting mechanism and interacts only with finished pieces, not the running slitter."
  },
  {
    "id": "int-15",
    "roleId": "maintenance-technician",
    "stationId": "two-roll-mill",
    "action": "reviews the maintenance log",
    "description": "During a planned, de-energized window, the maintenance technician reviews the two-roll mill's maintenance log and inspects guarding and lubrication points against the preventive-maintenance checklist. The conceptual interaction centers on documentation and readiness verification while the equipment is locked out; no operation of the mill occurs during this review."
  },
  {
    "id": "int-16",
    "roleId": "maintenance-technician",
    "stationId": "internal-mixer",
    "action": "checks a sensor reading",
    "description": "The maintenance technician checks a sensor reading on the internal mixer's diagnostic interface to confirm that temperature and pressure transducers report plausible, calibrated values. This is a condition-monitoring task carried out at the panel or via a handheld diagnostic tool, supporting reliability without any intervention into the mixing chamber or drive components while running."
  },
  {
    "id": "int-17",
    "roleId": "production-supervisor",
    "stationId": "finished-roll",
    "action": "updates the run schedule",
    "description": "At the finished-roll staging area, the production supervisor updates the run schedule and reconciles completed roll counts against the day's plan on a tablet. The interaction is planning and oversight: the supervisor confirms throughput, flags lots ready for shipment, and coordinates the next changeover, all from finished, palletized product without touching process machinery."
  },
  {
    "id": "int-18",
    "roleId": "sales-engineering-reviewer",
    "stationId": "finished-roll",
    "action": "reviews the RFQ package",
    "description": "The sales-engineering reviewer examines an RFQ package alongside finished-roll specifications, confirming that the produced compound, gauge, and width align with the customer's requirements and the quoted properties. This is a commercial-technical review conducted at a desk or terminal near finished goods, linking quality records and provenance to the order without any plant-floor machine interaction."
  }
];
export function interactionsForStation(stationId: StationId): HumanInteraction[] {
  return humanInteractions.filter((i) => i.stationId === stationId);
}
