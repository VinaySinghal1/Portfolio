import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'Data Analyst Intern',
      company: 'Connecting India Exim Solution',
      location: 'Remote',
      period: '2024',
      description: 'Worked on data analysis and visualization projects, helping the company make data-driven decisions. Performed exploratory data analysis, created dashboards, and generated actionable insights from complex datasets.',
      achievements: [
        'Analyzed large datasets to identify trends and patterns',
        'Created visualizations to communicate findings effectively',
        'Collaborated with cross-functional teams on data projects',
      ],
      color: 'accent',
    },
    {
      title: 'Data Analyst Intern',
      company: 'IIT Guwahati - Summer Analytics 2025',
      location: 'IIT Guwahati',
      period: 'Summer 2025',
      description: 'Selected for the prestigious Summer Analytics program at IIT Guwahati. Gained hands-on experience in advanced analytics, machine learning, and data science methodologies under expert mentorship.',
      achievements: [
        'Completed intensive training in data analytics and ML',
        'Worked on real-world industry projects',
        'Learned advanced statistical analysis techniques',
      ],
      color: 'secondary',
    },
  ];

  const education = {
    degree: 'B.E. Artificial Intelligence & Data Science',
    institution: 'University',
    period: '2023 – 2027',
    description: 'Pursuing a comprehensive degree program focused on AI, machine learning, deep learning, and data science fundamentals.',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="section-padding bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container-custom px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium mb-4 block">My Journey</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey in data science, including internships and academic pursuits 
            that have shaped my expertise.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-display font-semibold text-white mb-8 flex items-center gap-3">
              <Briefcase className="text-accent" size={28} />
              Work Experience
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-secondary to-accent/30" />

              {/* Experience Items */}
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.company}
                    variants={itemVariants}
                    className="relative pl-12 md:pl-20"
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute left-2 md:left-6 top-0 w-4 h-4 rounded-full border-4 border-primary bg-${exp.color} glow-${exp.color}`} />

                    {/* Card */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass-card p-6 rounded-2xl card-hover"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-1">
                            {exp.title}
                          </h4>
                          <div className="flex items-center gap-2 text-accent font-medium">
                            {exp.company}
                            <ExternalLink size={14} />
                          </div>
                        </div>
                        <span className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full">
                          {exp.period}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                        <MapPin size={14} />
                        {exp.location}
                      </div>

                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                            <span className="text-accent mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-display font-semibold text-white mb-8 flex items-center gap-3">
              <Calendar className="text-secondary" size={28} />
              Education
            </h3>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 rounded-2xl card-hover sticky top-24"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🎓</span>
              </div>

              <h4 className="text-lg font-semibold text-white mb-2">
                {education.degree}
              </h4>

              <div className="flex items-center gap-2 text-secondary font-medium mb-4">
                {education.institution}
              </div>

              <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                <Calendar size={14} />
                {education.period}
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                {education.description}
              </p>

              {/* Skills in progress */}
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h5 className="text-sm font-medium text-white mb-3">Key Focus Areas</h5>
                <div className="flex flex-wrap gap-2">
                  {['Machine Learning', 'Deep Learning', 'Data Mining', 'Big Data', 'AI Ethics'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs bg-primary-light text-gray-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
