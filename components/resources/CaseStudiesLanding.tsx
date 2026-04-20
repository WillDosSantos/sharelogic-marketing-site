import Image from "next/image";
import Link from "next/link";
import { HomeSectionFollow } from "@/components/home/HomeSectionFollow";
import { Container } from "@/components/layout/Container";
import type { ResourceItem } from "@/lib/types/content";

type Props = {
  items: ResourceItem[];
};

type StoryContent = {
  id: string;
  summary: string;
  impact: string;
  comparison: string;
};

const STORY_COPY: StoryContent[] = [
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

const HERO_IMAGES = ["/case-studies/case-study-1.png", "/case-studies/case-study-2.png", "/case-studies/case-study-3.png"] as const;

const STORY_IMAGE_BY_ID: Record<string, string> = {
  "r-001": "/case-studies/case-study-1.png",
  "r-002": "/case-studies/case-study-2.png",
  "r-011": "/case-studies/case-study-3.png",
};

function getStoryCopy(id: string): StoryContent {
  return STORY_COPY.find((entry) => entry.id === id) ?? STORY_COPY[0];
}

export function CaseStudiesLanding({ items }: Props) {
  return (
    <>
      <section className="bg-white">
        <Container className="py-14 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold text-blue-600">Hear from our customers</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Real Stories</h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Companies adopt governance not just as a necessity, but inspired by peers who successfully manage change.
              These experiences show that a governance-first approach improves ownership clarity and reduces risk.
            </p>
          </div>

          <div className="mt-12 grid gap-3 md:grid-cols-3">
            <div className="grid gap-3">
              <div className="flex min-h-28 flex-col justify-center rounded-2xl bg-amber-300 px-8 py-6">
                <p className="text-5xl font-semibold tracking-tight text-slate-950">100+</p>
                <p className="mt-1 text-xl font-medium text-slate-900">Customer Satisfaction</p>
              </div>
              <div className="relative aspect-[16/12] overflow-hidden rounded-2xl bg-slate-100">
                <Image src={HERO_IMAGES[0]} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" unoptimized />
              </div>
            </div>

            <div className="relative aspect-[16/20] overflow-hidden rounded-2xl bg-slate-100">
              <Image src={HERO_IMAGES[1]} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" unoptimized />
            </div>

            <div className="grid gap-3">
              <div className="relative aspect-[16/12] overflow-hidden rounded-2xl bg-slate-100">
                <Image src={HERO_IMAGES[2]} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" unoptimized />
              </div>
              <div className="flex min-h-28 flex-col justify-center rounded-2xl bg-blue-600 px-8 py-6">
                <p className="text-5xl font-semibold tracking-tight text-white">100+</p>
                <p className="mt-1 text-xl font-medium text-white">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="pb-16 sm:pb-20">
          <div className="space-y-14 sm:space-y-16">
            {items.map((item, index) => {
              const story = getStoryCopy(item.id);
              const imageSrc = STORY_IMAGE_BY_ID[item.id] ?? HERO_IMAGES[index % HERO_IMAGES.length];
              const imageLeft = index % 2 === 1;

              return (
                <article key={item.id} id={`case-${item.slug}`} className="border-t border-slate-200 pt-10 sm:pt-12">
                  <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
                    <div className={imageLeft ? "lg:col-span-6 lg:order-2" : "lg:col-span-6"}>
                      <h2 className="max-w-xl text-4xl font-semibold tracking-tight text-slate-950">{item.title}</h2>
                    </div>
                    <div className={imageLeft ? "lg:col-span-6 lg:order-1" : "lg:col-span-6"}>
                      <p className="text-2xl leading-relaxed text-slate-600">{story.summary}</p>
                    </div>
                  </div>

                  <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
                    <div className={imageLeft ? "lg:col-span-6 lg:order-2" : "lg:col-span-6"}>
                      <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-slate-100">
                        <Image src={imageSrc} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" unoptimized />
                      </div>
                    </div>
                    <div className={imageLeft ? "lg:col-span-6 lg:order-1" : "lg:col-span-6"}>
                      <div className="space-y-7">
                        <p className="text-2xl leading-relaxed text-slate-600">{story.impact}</p>
                        <p className="text-2xl leading-relaxed text-slate-600">{story.comparison}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 flex justify-end">
                    <Link
                      href={`/resources/case-studies#case-${item.slug}`}
                      className="inline-flex items-center rounded-full border-2 border-blue-500 px-7 py-3 text-2xl font-semibold text-blue-600 transition hover:bg-blue-50"
                    >
                      Learn more about this story
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <HomeSectionFollow />
    </>
  );
}
