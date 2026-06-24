export interface AchievementStat {
  label: string;
  value: number;
  suffix?: string;
}

export const achievementStats: AchievementStat[] = [
  { label: "Projects Built", value: 7, suffix: "+" },
  { label: "Research Work", value: 3 },
  { label: "Leadership Roles", value: 2 },
  { label: "Years of Experience", value: 3, suffix: "+" },
];

export const certifications = [
  "AWS Cloud Practitioner (CLF-C02) Skill Track",
  "Python and Flask Framework Complete Course",
  "Databases with Python: MySQL, SQLite & MongoDB",
  "Python Basics For Machine Learning",
  "Bioinformatics Workshop Summer 2023",
  "Big Data Analytics",
];
