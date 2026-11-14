"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Course } from "@/types";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EnrollModal } from "@/components/modals/EnrollModal";
import { CourseModal } from "@/components/modals/CourseModal";
import { SearchModal } from "@/components/modals/SearchModal";
import { LoginModal } from "@/components/modals/LoginModal";
import { ContactModal } from "@/components/modals/ContactModal";
import { SAMPLE_COURSES } from "@/lib/courses-data";

interface ModalContextType {
  openEnrollModal: (course?: Course) => void;
  openCourseModal: (course: Course) => void;
  openSearchModal: () => void;
  openLoginModal: () => void;
  openContactModal: () => void;
}

const ModalContext = createContext<ModalContextType>({
  openEnrollModal: () => {},
  openCourseModal: () => {},
  openSearchModal: () => {},
  openLoginModal: () => {},
  openContactModal: () => {},
});

export const useModals = () => useContext(ModalContext);

export function AppProviders({ children }: { children: ReactNode }) {
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [courseModalOpen, setCourseModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const [selectedCourse, setSelectedCourse] = useState<Course | null>(SAMPLE_COURSES[0]);

  const openEnrollModal = (course?: Course) => {
    if (course) {
      setSelectedCourse(course);
    } else if (!selectedCourse) {
      setSelectedCourse(SAMPLE_COURSES[0]);
    }
    setEnrollModalOpen(true);
  };

  const openCourseModal = (course: Course) => {
    setSelectedCourse(course);
    setCourseModalOpen(true);
  };

  const openSearchModal = () => {
    setSearchModalOpen(true);
  };

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const openContactModal = () => {
    setContactModalOpen(true);
  };

  return (
    <ModalContext.Provider
      value={{
        openEnrollModal,
        openCourseModal,
        openSearchModal,
        openLoginModal,
        openContactModal,
      }}
    >
      <div className="flex flex-col min-h-screen">
        <Navbar
          onOpenSearch={openSearchModal}
          onOpenEnroll={() => openEnrollModal()}
          onOpenLogin={openLoginModal}
          onOpenContact={openContactModal}
        />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>

      {/* Global Modals */}
      <EnrollModal
        course={selectedCourse}
        isOpen={enrollModalOpen}
        onClose={() => setEnrollModalOpen(false)}
      />

      <CourseModal
        course={selectedCourse}
        isOpen={courseModalOpen}
        onClose={() => setCourseModalOpen(false)}
        onEnroll={(c) => {
          setCourseModalOpen(false);
          openEnrollModal(c);
        }}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectCourse={(c) => openCourseModal(c)}
      />

      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onSwitchToRegister={() => openEnrollModal()}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </ModalContext.Provider>
  );
}
