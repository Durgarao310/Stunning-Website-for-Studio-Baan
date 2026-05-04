"use client";

import { useState, useEffect } from "react";
import { CustomCursor } from "./components/CustomCursor";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Preloader } from "./components/Preloader";
import { ScrollToTop } from "./components/ScrollToTop";
import { HomePage } from "./pages/HomePage";
import { WorkPage } from "./pages/WorkPage";
import { StudioPage } from "./pages/StudioPage";
import { ProcessPage } from "./pages/ProcessPage";
import { JournalPage } from "./pages/JournalPage";
import { ContactPage } from "./pages/ContactPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { projects, getProjectById } from "./data/projects";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentProjectId, setCurrentProjectId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, currentProjectId]);

  const handleNavigate = (page: string, projectId?: string) => {
    if (page === "project" && projectId) {
      setCurrentProjectId(projectId);
      setCurrentPage("project");
    } else {
      setCurrentProjectId(null);
      setCurrentPage(page);
    }
  };

  const handleNextProject = () => {
    if (!currentProjectId) return;
    const currentIndex = projects.findIndex((p) => p.id === currentProjectId);
    const nextIndex = (currentIndex + 1) % projects.length;
    setCurrentProjectId(projects[nextIndex].id);
  };

  const handlePrevProject = () => {
    if (!currentProjectId) return;
    const currentIndex = projects.findIndex((p) => p.id === currentProjectId);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setCurrentProjectId(projects[prevIndex].id);
  };

  const renderPage = () => {
    if (currentPage === "project" && currentProjectId) {
      const project = getProjectById(currentProjectId);
      if (project) {
        return (
          <ProjectDetailPage
            project={project}
            onNavigate={handleNavigate}
            onNextProject={handleNextProject}
            onPrevProject={handlePrevProject}
          />
        );
      }
    }

    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "work":
        return <WorkPage onNavigate={handleNavigate} />;
      case "services":
        return <ServicesPage />;
      case "studio":
        return <StudioPage />;
      case "process":
        return <ProcessPage />;
      case "journal":
        return <JournalPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <>
      <Preloader isLoading={isLoading} />
      <div className="min-h-screen bg-background text-foreground">
        <CustomCursor />
        <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
        <main>{renderPage()}</main>
        <Footer onNavigate={handleNavigate} />
        <ScrollToTop />
      </div>
    </>
  );
}
