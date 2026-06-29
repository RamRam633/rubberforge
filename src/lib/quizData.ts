import type { QuizQuestion, StationId } from "@/types/simulation";

// Checkpoint questions surfaced after major stages.
export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1-weighing",
    afterStageId: "weighing-station",
    question:
      "At the weighing station, each ingredient category (polymer, filler, process oil, protective additives, cure package) is measured into a batch. What is the main purpose of weighing the batch this way?",
    options: [
      { id: "a", text: "To fix the proportions of each category so every batch has consistent, repeatable properties", correct: true },
      { id: "b", text: "To begin the crosslinking reaction before the materials reach the mixer", correct: false },
      { id: "c", text: "To give the black sheet its final color and surface finish", correct: false },
      { id: "d", text: "To wind the compound into a roll at the correct tension", correct: false },
    ],
    explanation:
      "Weighing controls the recipe proportions so each batch is consistent and reproducible, the foundation of stable downstream properties.",
  },
  {
    id: "q2-mixer",
    afterStageId: "internal-mixer",
    question: "In the internal mixer, the weighed ingredients are worked together under heat and shear. What does the internal mixer mainly accomplish?",
    options: [
      { id: "a", text: "It disperses the filler and other additives uniformly into the polymer to form a homogeneous compound", correct: true },
      { id: "b", text: "It permanently crosslinks the rubber into its final cured form", correct: false },
      { id: "c", text: "It rolls the compound into a thin continuous sheet of final thickness", correct: false },
      { id: "d", text: "It cuts the material to its finished width and length", correct: false },
    ],
    explanation:
      "The internal mixer's main job is dispersive and distributive mixing: spreading filler and additives evenly through the polymer to create a uniform compound.",
  },
  {
    id: "q3-calender",
    afterStageId: "calender",
    question: "The mixed compound is fed through the calender. What does the calendering step primarily control?",
    options: [
      { id: "a", text: "The sheet's thickness and uniform cross-section as it is formed into a continuous sheet", correct: true },
      { id: "b", text: "The degree of crosslinking that sets the rubber's final strength", correct: false },
      { id: "c", text: "The dispersion of carbon-black filler into the raw polymer", correct: false },
      { id: "d", text: "The cooling rate of the finished sheet before winding", correct: false },
    ],
    explanation:
      "Calendering shapes the compound into a continuous sheet, controlling its thickness, gauge uniformity, and surface, but it does not cure the rubber.",
  },
  {
    id: "q4-vulcanization",
    afterStageId: "vulcanization",
    question: "During vulcanization, the shaped sheet passes through a controlled heat stage driven by the cure package. What fundamentally changes in the rubber?",
    options: [
      { id: "a", text: "Crosslinks form between polymer chains, converting the soft compound into an elastic, durable solid", correct: true },
      { id: "b", text: "The carbon-black filler is dispersed into the polymer for the first time", correct: false },
      { id: "c", text: "The sheet is reduced to its final thickness by mechanical pressure alone", correct: false },
      { id: "d", text: "Pigment is added to give the sheet its black color", correct: false },
    ],
    explanation:
      "Vulcanization is the crosslinking reaction: the cure package bonds the polymer chains together, transforming a moldable compound into a set, elastic rubber.",
  },
  {
    id: "q6-cooling",
    afterStageId: "cooling",
    question: "After vulcanization the hot sheet enters the cooling stage before trimming and winding. Why is controlled cooling important at this point?",
    options: [
      { id: "a", text: "It brings the cured sheet to a stable temperature so it holds its dimensions and can be handled without distortion", correct: true },
      { id: "b", text: "It triggers the crosslinking that gives the rubber its final strength", correct: false },
      { id: "c", text: "It disperses the protective additives into the polymer", correct: false },
      { id: "d", text: "It sets the proportions of the ingredient categories in the batch", correct: false },
    ],
    explanation:
      "Cooling stabilizes the freshly cured, still-hot sheet so it sets its dimensions and can be trimmed, slit, and wound without stretching or distortion.",
  },
  {
    id: "q5-inspection",
    afterStageId: "inspection",
    question: "Before the sheet is wound into a finished roll, it goes through inspection. Why is the inspection stage needed?",
    options: [
      { id: "a", text: "To detect defects such as thickness variation, surface flaws, or inclusions before the product ships", correct: true },
      { id: "b", text: "To start the crosslinking reaction that cures the rubber", correct: false },
      { id: "c", text: "To weigh out the ingredient categories for the next batch", correct: false },
      { id: "d", text: "To disperse additives more evenly into the compound", correct: false },
    ],
    explanation:
      "Inspection is a quality gate that catches defects like gauge variation, surface flaws, or inclusions so only conforming sheet reaches the customer.",
  },
];

export const quizByStage: Partial<Record<StationId, QuizQuestion>> = quizQuestions.reduce(
  (acc, q) => {
    acc[q.afterStageId] = q;
    return acc;
  },
  {} as Partial<Record<StationId, QuizQuestion>>,
);
