import { create } from "zustand";

export const store_cv = create((set) => ({
  formData: {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    job_title: "",
    employer: "",
    start_date: "",
    end_date: "",
    Description_job: "",
    educations: [],
    Experience: [],
    skill: [],
    summary: "",
  },
  setFormData: (data) =>
    set((state) => ({ formData: { ...state.formData, ...data } })),
  addEducation: () =>
    set((state) => ({
      formData: {
        ...state.formData,
        educations: [
          ...state.formData.educations,
          {
            school_name: "",
            degree: "",
            start_date_degree: "",
            end_date_degree: "",
            Description_degree: "",
          },
        ],
      },
    })),

  add_Experience: () =>
    set((state) => ({
      formData: {
        ...state.formData,
        Experience: [
          ...state.formData.Experience,
          {
            job_title: "",
            employer: "",
            start_date: "",
            end_date: "",
            Description_job: "",
          },
        ],
      },
    })),

  add_skill: () =>
    set((state) => ({
      formData: {
        ...state.formData,
        skill: [
          ...state.formData.skill,
          {
            skill: "",
          },
        ],
      },
    })),

  delete_skill: (index) =>
    set((state) => ({
      formData: {
        ...state.formData,
        skill: state.formData.skill.filter((_, i) => i !== index),
      },
    })),
  update_skill: (newName, index) =>
    set((state) => ({
      formData: {
        ...state.formDate,
        skill: state.formData.skill.map((skill, i) =>
          i === index ? { ...skill, skill: newName } : skill
        ),
      },
    })),
}));
