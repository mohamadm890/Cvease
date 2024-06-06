import React, { useRef } from "react";
import Button from "@mui/material/Button";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { store_cv } from "./store";
import "./cv_theme.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Cvtheme = () => {
  const contentRef = useRef(null);

  const formData = store_cv((state) => state.formData);
  const captureContent = () => {
    const element = contentRef.current;
    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    });
  };

  const firstName = formData ? formData.first_name : "";
  const last_name = formData ? formData.last_name : "";
  const email = formData ? formData.email : "";
  const phone = formData ? formData.phone : "";
  const city = formData ? formData.city : "";
  const address = formData ? formData.address : "";
  const summary = formData ? formData.summary : "";
  const school_name = formData ? formData.school_name : "";
  const degree = formData ? formData.degree : "";
  const start_date_degree = formData ? formData.start_date_degree : "";
  const end_date_degree = formData ? formData.end_date_degree : "";
  const Description_degree = formData ? formData.Description_degree : "";
  const Experience = formData ? formData.Experience : [];
  const educations = formData ? formData.educations : [];
  const skill = formData ? formData.skill : [];

  const job_title = formData ? formData.job_title : "";
  const employer = formData ? formData.employer : "";
  const start_date = formData ? formData.start_date : "";
  const end_date = formData ? formData.end_date : "";
  const Description_job = formData ? formData.Description_job : "";

  return (
    <div className="view_cv">
      <div className="view_cv_wrap">
        <div className="Cv_content" ref={contentRef}>
          <article className="cv-article">
            <header className="flow">
              <h2 className="text">
                {firstName} {last_name}
              </h2>
              <address className="contact flex">
                <a href="mailto:john@example.com">{email}</a>
                <span> · </span>
                <span>
                  {address}, {city}
                </span>
                <span> · </span>
                <a href="https://www.example.com">{phone}</a>
              </address>
              <hr></hr>
            </header>
            <p className="hero-summary" aria-label="High-level summary">
              {summary}
            </p>

            <section>
              <h2 className="text_2">Experience</h2>
              {Experience.map((experience, index) => (
                <div className="flow">
                  <article className={index}>
                    <div className="experience-item flex">
                      <h2 className="text_2">
                        {experience.employer}{" "}
                        <span aria-hidden="true"> · </span>{" "}
                        {experience.job_title}
                      </h2>
                      <span>
                        {experience.start_date} - {experience.end_date}
                      </span>
                    </div>
                    <ul>
                      <li className="li_p">{experience.Description_job}</li>
                    </ul>
                  </article>
                </div>
              ))}
            </section>
            <hr></hr>

            <section>
              <h2 className="text_2">Education</h2>
              {educations.map((education, index) => (
                <div className="flow" key={index}>
                  <div className="experience-item flex">
                    <h2 className="text_2">
                      University Name {education.school_name}
                      <span aria-hidden="true">&nbsp;·&nbsp;</span> Degree in{" "}
                      {education.degree}
                    </h2>
                    <span>
                      Start Date: {education.start_date_degree} - End Date:{" "}
                      {education.end_date_degree}
                    </span>
                    <p className="hero-summary">
                      {education.Description_degree}
                    </p>
                  </div>
                </div>
              ))}
            </section>
            <hr></hr>
            <section>
              <h2 className="text_2">Skills</h2>
              <div className="skill_wrap">
                {skill.map((skill, index) => (
                  <div className="skill_wrap_">
                    <span>{skill.skill}</span>
                  </div>
                ))}
              </div>
            </section>
          </article>
        </div>
        <Box sx={{ marginTop: 4 }}>
          <Button
            variant="contained"
            onClick={captureContent}
            startIcon={<ArrowDownwardIcon />}
          >
            PDF
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Cvtheme;
