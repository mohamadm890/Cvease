import React from "react";
import { store_cv } from "./store";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import "./cv_theme.css";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
  },
  subheader: {
    fontSize: 18,
    marginBottom: 10,
  },
  content: {
    fontSize: 12,
  },
});

const Cv = () => {
  const formData = store_cv((state) => state.formData);

  const firstName = formData ? formData.first_name : "";
  const lastName = formData ? formData.last_name : "";
  const email = formData ? formData.email : "";
  const phone = formData ? formData.phone : "";
  const city = formData ? formData.city : "";
  const address = formData ? formData.address : "";
  const summary = formData ? formData.summary : "";
  const Experience = formData ? formData.Experience : [];
  const educations = formData ? formData.educations : [];
  const skill = formData ? formData.skill : [];

  const MyDocument = (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>
            {firstName} {lastName}
          </Text>
          <Text style={styles.content}>
            Email: {email} | Phone: {phone}
          </Text>
          <Text style={styles.content}>
            Address: {address}, {city}
          </Text>
          <Text style={styles.subheader}>Summary</Text>
          <Text style={styles.content}>{summary}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subheader}>Experience</Text>
          {Experience.map((experience, index) => (
            <View key={index}>
              <Text style={styles.header}>
                {experience.job_title} at {experience.employer}
              </Text>
              <Text style={styles.content}>
                {experience.start_date} - {experience.end_date}
              </Text>
              <Text style={styles.content}>{experience.Description_job}</Text>
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.subheader}>Education</Text>
          {educations.map((education, index) => (
            <View key={index}>
              <Text style={styles.header}>Degree: {education.degree}</Text>
              <Text style={styles.content}>
                {education.school_name}, {education.start_date_degree} -{" "}
                {education.end_date_degree}
              </Text>
              <Text style={styles.content}>{education.Description_degree}</Text>
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.subheader}>Skills</Text>
          {skill.map((skill, index) => (
            <Text key={index} style={styles.content}>
              {skill.skill}
            </Text>
          ))}
        </View>
      </Page>
    </Document>
  );

  return (
    <div className="view_cv">
      <div className="view_cv_wrap">
        <Document>
          <PDFDownloadLink document={MyDocument} fileName="cv.pdf">
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download PDF"
            }
          </PDFDownloadLink>
        </Document>
      </div>
    </div>
  );
};

export default Cv;
