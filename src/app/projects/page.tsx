import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Briefcase, Heart, ExternalLink } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";

const projectsPage = () => {
  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Award className="h-4 w-4" />
        Experience
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>Professional Experience & Achievements</Heading>
        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-lg w-full text-primary max-sm:text-base">
            My professional journey encompasses diverse experiences in accounting, research, and community service. 
            Here you&apos;ll find my certifications, research projects, work experience, and volunteer contributions.
          </p>
        </FramerWrapper>
      </div>

      {/* Certifications Section */}
      <FramerWrapper y={100} delay={0.2} className="w-full gap-4 flex flex-col">
        <div className="flex items-center gap-2 pb-3 border-b border-border">
          <Award className="w-5 h-5 text-amber-600" />
          <h2 className="text-2xl font-bold text-primary font-poppins">Courses, Licenses & Certifications</h2>
        </div>
        <div className="space-y-3">
          {portfolioConfig.certifications.map((cert, idx) => (
            <FramerWrapper key={idx} y={50} delay={0.25 + idx * 0.05} className="w-full">
              <div className="border-l-4 border-l-amber-500 pl-4 py-2 rounded-r-lg bg-secondary/30">
                <h3 className="font-semibold text-primary font-poppins">{cert.title}</h3>
                <p className="text-sm text-muted-foreground font-poppins">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground font-poppins">{cert.date}</p>
              </div>
            </FramerWrapper>
          ))}
        </div>
      </FramerWrapper>

      {/* Research Projects Section */}
      <FramerWrapper y={100} delay={0.3} className="w-full gap-4 flex flex-col">
        <div className="flex items-center gap-2 pb-3 border-b border-border">
          <BookOpen className="w-5 h-5 text-blue-600" />
          <h2 className="text-2xl font-bold text-primary font-poppins">Research Projects</h2>
        </div>
        <div className="space-y-3">
          {portfolioConfig.researchProjects.map((project, idx) => (
            <FramerWrapper key={idx} y={50} delay={0.35 + idx * 0.05} className="w-full">
              <div className="border-l-4 border-l-blue-500 pl-4 py-3 rounded-r-lg bg-secondary/30">
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <div className="flex-1">
                    <h3 className="font-semibold text-primary font-poppins">{project.title}</h3>
                    <p className="text-sm text-primary font-poppins mt-1 leading-relaxed">{project.description}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-poppins whitespace-nowrap">
                    {project.type}
                  </span>
                </div>
              </div>
            </FramerWrapper>
          ))}
        </div>
      </FramerWrapper>

      {/* Work Experience Section */}
      <FramerWrapper y={100} delay={0.4} className="w-full gap-4 flex flex-col">
        <div className="flex items-center gap-2 pb-3 border-b border-border">
          <Briefcase className="w-5 h-5 text-green-600" />
          <h2 className="text-2xl font-bold text-primary font-poppins">Work Experience</h2>
        </div>
        <div className="space-y-4">
          {portfolioConfig.workExperience.map((job, idx) => (
            <FramerWrapper key={idx} y={50} delay={0.45 + idx * 0.05} className="w-full">
              <div className="border-l-4 border-l-green-500 pl-4 py-3 rounded-r-lg bg-secondary/30">
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-lg text-primary font-poppins">{job.company}</h3>
                  <p className="font-semibold text-primary font-poppins">{job.position}</p>
                  <p className="text-sm text-muted-foreground font-poppins">{job.location} • {job.period}</p>
                </div>
                <ul className="mt-3 space-y-1">
                  {job.responsibilities.map((resp, respIdx) => (
                    <li key={respIdx} className="text-sm text-primary font-poppins list-disc list-inside">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </FramerWrapper>
          ))}
        </div>
      </FramerWrapper>

      {/* Volunteer Experience Section */}
      <FramerWrapper y={100} delay={0.5} className="w-full gap-4 flex flex-col">
        <div className="flex items-center gap-2 pb-3 border-b border-border">
          <Heart className="w-5 h-5 text-rose-600" />
          <h2 className="text-2xl font-bold text-primary font-poppins">Volunteer Experience</h2>
        </div>
        <div className="space-y-4">
          {portfolioConfig.volunteerExperience.map((volunteer, idx) => (
            <FramerWrapper key={idx} y={50} delay={0.55 + idx * 0.05} className="w-full">
              <div className="border-l-4 border-l-rose-500 pl-4 py-3 rounded-r-lg bg-secondary/30">
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-lg text-primary font-poppins">{volunteer.organization}</h3>
                  <p className="font-semibold text-primary font-poppins">{volunteer.unit}</p>
                  <p className="text-sm text-muted-foreground font-poppins">{volunteer.location} • {volunteer.period}</p>
                </div>
                <ul className="mt-3 space-y-1 mb-3">
                  {volunteer.activities.map((activity, actIdx) => (
                    <li key={actIdx} className="text-sm text-primary font-poppins list-disc list-inside">
                      {activity}
                    </li>
                  ))}
                </ul>
                {volunteer.links && (
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
                    <a
                      href={volunteer.links.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-poppins border border-blue-200 px-2 py-1 rounded-full hover:bg-blue-50 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Video
                    </a>
                    <a
                      href={volunteer.links.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-pink-600 hover:text-pink-800 font-poppins border border-pink-200 px-2 py-1 rounded-full hover:bg-pink-50 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Instagram
                    </a>
                    {volunteer.links.articles.length > 0 && (
                      <a
                        href={volunteer.links.articles[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-purple-600 hover:text-purple-800 font-poppins border border-purple-200 px-2 py-1 rounded-full hover:bg-purple-50 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Articles
                      </a>
                    )}
                  </div>
                )}
              </div>
            </FramerWrapper>
          ))}
        </div>
      </FramerWrapper>
    </div>
  );
};

export default projectsPage;
