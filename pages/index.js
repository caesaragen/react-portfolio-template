import { useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Socials from "../components/Socials";
import PhoneMockup from "../components/PhoneMockup";
import ProjectRow from "../components/ProjectRow";
import Timeline from "../components/Timeline";
import SkillGroup from "../components/SkillGroup";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger, revealOnScroll } from "../animations";

import data from "../data/portfolio.json";

export default function Home() {
  const router = useRouter();
  const workRef = useRef();
  const experienceRef = useRef();
  const aboutRef = useRef();
  const kicker = useRef();
  const headline = useRef();
  const subtext = useRef();
  const cta = useRef();
  const phone = useRef();

  const workIntroRef = useRef();
  const featuredListRef = useRef();
  const otherHeadingRef = useRef();
  const otherListRef = useRef();
  const experienceHeadingRef = useRef();
  const skillsHeadingRef = useRef();
  const skillsListRef = useRef();
  const aboutHeadingRef = useRef();
  const aboutListRef = useRef();

  const scrollTo = (ref) => () =>
    window.scrollTo({ top: ref.current.offsetTop - 40, left: 0, behavior: "smooth" });

  useIsomorphicLayoutEffect(() => {
    stagger(
      [kicker.current, headline.current, subtext.current, cta.current],
      { y: 24 },
      { y: 0 }
    );
    stagger([phone.current], { y: 16, scale: 0.96 }, { y: 0, scale: 1 });

    revealOnScroll(workRef.current, [workIntroRef.current], { y: 16 });
    revealOnScroll(featuredListRef.current, featuredListRef.current?.children, { y: 20 });
    revealOnScroll(otherListRef.current, [otherHeadingRef.current, otherListRef.current], { y: 16 });
    revealOnScroll(experienceRef.current, [experienceHeadingRef.current], { y: 16 });
    revealOnScroll(skillsHeadingRef.current, [skillsHeadingRef.current], { y: 16 });
    revealOnScroll(skillsListRef.current, skillsListRef.current?.children, { y: 16 });
    revealOnScroll(aboutRef.current, [aboutHeadingRef.current], { y: 16 });
    revealOnScroll(aboutListRef.current, aboutListRef.current?.children, { y: 14 });
  }, []);

  const aboutParagraphs = data.about.split("\n\n");

  return (
    <>
      <Head>
        <title>{data.name} — {data.role}</title>
        <meta name="description" content={data.heroSubtext} />
      </Head>

      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-5 right-5 z-30">
          <Button type="primary" onClick={() => router.push("/edit")}>
            Edit Data
          </Button>
        </div>
      )}

      <div className="max-w-5xl mx-auto px-5 laptop:px-0 pb-24">
        <Header
          handleWorkScroll={scrollTo(workRef)}
          handleExperienceScroll={scrollTo(experienceRef)}
          handleAboutScroll={scrollTo(aboutRef)}
        />

        {/* Hero */}
        <section className="grid grid-cols-1 tablet:grid-cols-[1.15fr_0.85fr] gap-12 items-center pt-14 laptop:pt-20">
          <div>
            <p ref={kicker} className="text-signal font-medium">
              {data.heroKicker}
            </p>
            <h1
              ref={headline}
              className="mt-4 text-4xl mob:text-5xl laptop:text-6xl font-bold tracking-tight leading-[1.08]"
            >
              {data.heroHeadline}
            </h1>
            <p ref={subtext} className="mt-6 text-lg text-mist leading-relaxed max-w-xl">
              {data.heroSubtext}
            </p>
            <div ref={cta} className="mt-8 flex flex-wrap items-center gap-3">
              <Button type="primary" onClick={scrollTo(workRef)}>
                See the work
              </Button>
              <Button type="ghost" href={data.resumeUrl} target="_blank">
                Download résumé
              </Button>
            </div>
            <p className="mt-8 text-sm text-mist/70 max-w-md">{data.proofLine}</p>
            <div className="mt-6 tablet:hidden">
              <Socials />
            </div>
          </div>
          <div ref={phone} className="hidden mob:block transition-transform duration-500 ease-out hover:scale-[1.03]">
            <PhoneMockup />
          </div>
        </section>

        {/* Work */}
        <section ref={workRef} className="pt-28 laptop:pt-36 scroll-mt-24">
          <div ref={workIntroRef}>
            <h2 className="text-2xl laptop:text-3xl font-semibold tracking-tight">Mobile work</h2>
            <p className="mt-2 text-mist max-w-xl">
              The apps I’ve spent the most care on — where the interesting problems are offline
              state, biometrics, and keeping a banking-grade experience feeling fast.
            </p>
          </div>
          <div ref={featuredListRef} className="mt-6">
            {data.featuredProjects.map((project) => (
              <ProjectRow key={project.id} project={project} />
            ))}
          </div>

          <h3 ref={otherHeadingRef} className="mt-16 text-lg font-medium text-ink">
            Also built
          </h3>
          <div ref={otherListRef} className="mt-4 divide-y divide-white/10">
            {data.otherProjects.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-wrap items-baseline justify-between gap-2 py-4"
              >
                <span>
                  <span className="font-medium group-hover:text-signal transition-colors">
                    {project.title}
                  </span>
                  <span className="text-mist text-sm"> — {project.description}</span>
                </span>
                <span className="text-sm text-mist/70 shrink-0">{project.year}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section ref={experienceRef} className="pt-28 laptop:pt-36 scroll-mt-24">
          <h2 ref={experienceHeadingRef} className="text-2xl laptop:text-3xl font-semibold tracking-tight">
            Experience
          </h2>
          <div className="mt-10">
            <Timeline items={data.experience} />
          </div>
        </section>

        {/* Skills */}
        <section className="pt-28 laptop:pt-36">
          <h2 ref={skillsHeadingRef} className="text-2xl laptop:text-3xl font-semibold tracking-tight">
            Skills
          </h2>
          <div ref={skillsListRef} className="mt-6">
            {data.skills.map((group) => (
              <SkillGroup key={group.category} category={group.category} items={group.items} />
            ))}
          </div>
        </section>

        {/* About */}
        <section ref={aboutRef} className="pt-28 laptop:pt-36 scroll-mt-24">
          <h2 ref={aboutHeadingRef} className="text-2xl laptop:text-3xl font-semibold tracking-tight">
            About
          </h2>
          <div ref={aboutListRef} className="mt-6 max-w-2xl space-y-5">
            {aboutParagraphs.map((para, i) => (
              <p key={i} className="text-lg text-mist leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
