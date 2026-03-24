import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Award, Star, Medal, Target, Zap } from 'lucide-react';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const achievements = [
    {
      title: 'DevSummit25 Hackathon',
      description: 'Secured Top 15 position in the prestigious DevSummit25 Hackathon, competing against talented developers and data scientists from across the country.',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
      highlight: 'Top 15',
      date: '2025',
    },
    {
      title: 'Code for Bharat Hackathon',
      description: 'Active participant in the Code for Bharat Hackathon, contributing to innovative solutions for national development challenges using data science and AI.',
      icon: Award,
      color: 'from-blue-500 to-cyan-500',
      highlight: 'Participant',
      date: '2024',
    },
  ];

  const certifications = [
    {
      title: 'IIT Guwahati Summer Analytics',
      issuer: 'IIT Guwahati',
      year: '2025',
      icon: Star,
    },
    {
      title: 'Data Analysis with Python',
      issuer: 'Various Platforms',
      year: '2024',
      icon: Target,
    },
    {
      title: 'Machine Learning Fundamentals',
      issuer: 'Online Courses',
      year: '2024',
      icon: Zap,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="achievements" className="section-padding bg-primary-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container-custom px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium mb-4 block">Recognition</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Achievements & <span className="gradient-text">Hackathons</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Highlights from hackathons, competitions, and recognitions that showcase 
            my passion for data science and continuous learning.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card p-8 rounded-2xl card-hover relative overflow-hidden group"
            >
              {/* Glow effect */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${achievement.color} opacity-20 rounded-full blur-3xl group-hover:opacity-30 transition-opacity`} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center`}>
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-bold gradient-text">{achievement.highlight}</span>
                    <p className="text-gray-400 text-sm">{achievement.date}</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {achievement.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-display font-semibold text-white mb-8 text-center">
            Certifications & Learning
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass p-5 rounded-xl flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <cert.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-white text-sm">{cert.title}</h4>
                  <p className="text-gray-400 text-xs">{cert.issuer} • {cert.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 glass-card p-8 rounded-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Medal className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">2+</div>
              <div className="text-gray-400 text-sm">Hackathons</div>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">3+</div>
              <div className="text-gray-400 text-sm">Certifications</div>
            </div>
            <div className="text-center">
              <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">Top 15</div>
              <div className="text-gray-400 text-sm">DevSummit25</div>
            </div>
            <div className="text-center">
              <Trophy className="w-8 h-8 text-purple-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">IIT-G</div>
              <div className="text-gray-400 text-sm">Summer Analytics</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
