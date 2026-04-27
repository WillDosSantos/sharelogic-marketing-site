import { resourceItems } from "@/lib/data/resources";

export type CaseStudyStoryContent = {
  id: string;
  summary: string;
  impact: string;
  comparison: string;
};

export const CASE_STUDY_STORY_COPY: CaseStudyStoryContent[] = [
  {
    id: "r-001",
    summary:
      "ProCori, an IT consultancy dedicated to IT delivery, streamlines client service-management journeys with clear ownership and delivery discipline. Their teams needed a standardized approach to ticket exchange and transactional handoffs to reduce operational friction across enterprise systems.",
    impact:
      "By adopting a governance-first integration model with ShareLogic, ProCori reduced average completion windows and improved service-team velocity. Teams now resolve issues through a single operational view, giving post-deployment stakeholders faster insight and higher confidence.",
    comparison:
      "Before ShareLogic, teams leaned on platform-native integration tooling that handled transport but lacked broader operational context. ShareLogic introduced a business-centric model with reusable orchestration, monitoring, and ownership controls that proved easier for cross-functional teams to operate.",
  },
  {
    id: "r-002",
    summary:
      "This manufacturing program connected ERP, MES, and supplier systems across multiple plants. The organization needed stronger sequencing around order and inventory updates to reduce reconciliation delays between departments.",
    impact:
      "ShareLogic orchestration patterns cut reconciliation time by 37% and reduced manual handoffs during peak operations. The implementation team gained clearer process checkpoints, helping plant and IT leadership make faster decisions during exceptions.",
    comparison:
      "A previous point-to-point approach created inconsistent retry behavior and limited auditability. ShareLogic enabled standardized flow controls with better traceability, making it easier to scale integration governance without slowing releases.",
  },
  {
    id: "r-011",
    summary:
      "A regional healthcare network modernized data exchange between clinical and administrative systems while protecting patient privacy requirements. The challenge was coordinating interoperability updates without introducing operational chaos.",
    impact:
      "The program established repeatable integration guardrails and introduced shared visibility across teams. Incident response improved, and clinical operations gained more predictable handoffs across scheduling, billing, and downstream reporting tools.",
    comparison:
      "Legacy interface engines remained useful for transport, but lacked program-level governance workflows. With ShareLogic, teams introduced policy-aware orchestration that aligned compliance expectations with day-to-day implementation work.",
  },
];

export const CASE_STUDY_IMAGE_BY_ID: Record<string, string> = {
  "r-001": "/case-studies/case-study-1.png",
  "r-002": "/case-studies/case-study-2.png",
  "r-011": "/case-studies/case-study-3.png",
};

export function getCaseStudyStoryCopy(id: string): CaseStudyStoryContent {
  return CASE_STUDY_STORY_COPY.find((entry) => entry.id === id) ?? CASE_STUDY_STORY_COPY[0];
}

export function getCaseStudyByStorySlug(storySlug: string) {
  return resourceItems.find((item) => item.category === "case-studies" && item.slug === storySlug);
}
