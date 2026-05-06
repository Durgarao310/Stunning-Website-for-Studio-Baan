import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/app/pages/ProjectDetailPage";
import { getProjectById, projects } from "@/app/data/projects";
import { getProjectHref } from "@/constants/routes";
import { buildMetadata } from "@/lib/metadata";

type ProjectRoutePageProps = {
  params: Promise<{ projectId: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ projectId: project.id }));
}

export async function generateMetadata({ params }: ProjectRoutePageProps) {
  const { projectId } = await params;
  const project = getProjectById(projectId);

  if (!project) {
    return buildMetadata({
      title: "Project Not Found",
      path: "/work",
    });
  }

  return buildMetadata({
    title: project.title,
    description: project.subtitle,
    path: getProjectHref(project.id),
  });
}

export default async function ProjectRoutePage({
  params,
}: ProjectRoutePageProps) {
  const { projectId } = await params;
  const project = getProjectById(projectId);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.id === project.id);
  const previousProjectId =
    projects[(currentIndex - 1 + projects.length) % projects.length]?.id;
  const nextProjectId = projects[(currentIndex + 1) % projects.length]?.id;

  return (
    <ProjectDetailPage
      project={project}
      previousProjectId={previousProjectId}
      nextProjectId={nextProjectId}
    />
  );
}
