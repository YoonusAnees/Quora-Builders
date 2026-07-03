import { motion } from 'framer-motion';
import { Target, Compass, Shield, Award, Sparkles, Handshake, Users2 } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import PageWrapper from '../components/PageWrapper';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "We enforce strict safety compliance across all job sites, valuing the health, lives, and well-being of our workers and the general public above all."
    },
    {
      icon: Award,
      title: "Unyielding Quality",
      description: "We source premium raw materials, execute precise structural engineering, and employ skilled master craftsmen to guarantee durable builds."
    },
    {
      icon: Sparkles,
      title: "Forward Innovation",
      description: "We implement advanced Building Information Modeling (BIM), eco-friendly materials, and smart facility configurations in our workflows."
    },
    {
      icon: Handshake,
      title: "Mutual Integrity",
      description: "We adhere strictly to budget estimates, maintain open transparent site updates, and build long-term relationships with developers."
    }
  ];

  const team = [
    {
      name: "Arthur Pendelton",
      role: "CEO & Founder",
      bio: "With over 25 years of civil engineering and construction management experience, Arthur oversees Quora's long-term corporate growth and vision.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=250"
    },
    {
      name: "Dr. Elena Rostova",
      role: "Chief Structural Engineer",
      bio: "Elena holds a PhD in Structural Design. She leads our technical division, ensuring every steel girder, concrete pour, and seismic joint is engineered to perfection.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=250"
    },
    {
      name: "Marcus Vance",
      role: "Director of Field Operations",
      bio: "Marcus has managed over 120 residential and commercial builds. He supervises safety officers, site managers, and material supply chain channels.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=250"
    }
  ];

  return (
    <PageWrapper>
      {/* Sub-Hero Header */}
      <section className="relative bg-primary text-white py-20 overflow-hidden">
        {/* Subtle decorative construction pattern background */}
        <div className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none select-none"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center md:justify-start items-center space-x-2"
          >
            <span className="w-8 h-1 bg-accent rounded" />
            <span className="text-accent uppercase tracking-widest text-xs font-bold">About Our Company</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            A Legacy of <span className="text-accent">Excellence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 max-w-2xl text-sm md:text-base leading-relaxed font-medium"
          >
            At Quora Builders, we combine structural integrity, modern architectural engineering, and honest relationships to construct landmarks.
          </motion.p>
        </div>
      </section>

      {/* Overview/Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-extrabold text-primary tracking-tight">
                Our History & Commitment
              </h2>
              <div className="h-1 bg-accent w-20 rounded" />

              <p className="text-neutral-muted leading-relaxed text-sm md:text-base">
                Established in 2019, Quora Builders began as a local civil contracting firm. Over a decade of hard work, continuous safety diligence, and reliable completion rates expanded us into a full-service commercial and residential developer operating nationwide.
              </p>
              <p className="text-neutral-muted leading-relaxed text-sm md:text-base">
                We believe a building is more than just concrete and steel beams. It's a hub for businesses, a sanctuary for families, and an investment in local infrastructure. That's why we control every step of the pre-construction planning, site excavation, concrete pouring, and final finishing to deliver perfect outcomes.
              </p>
              <div className="bg-neutral-light border-l-4 border-accent p-5 rounded-r">
                <p className="text-primary italic font-medium text-sm md:text-base">
                  "No matter the scale of construction, our target is zero defects, zero accidents, and absolute transparency. We build things to stay."
                </p>
                <span className="block font-bold text-xs uppercase tracking-wider text-accent mt-2">— Arthur Pendelton, Founder</span>
              </div>
            </motion.div>

            {/* Collage mockup / big image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800"
                  alt="Modern office architectural planning"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-primary p-6 rounded-lg shadow-lg hidden sm:block border-2 border-white">
                <p className="text-sm font-extrabold uppercase">Projects Handled</p>
                <p className="text-4xl font-black mt-1">20+</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission and Vision section */}
      <section className="py-20 bg-neutral-light border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-start"
            >
              <div className="bg-accent p-3.5 rounded-full text-primary shrink-0">
                <Target className="h-6 w-6 stroke-[2]" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary">Our Core Mission</h3>
                <p className="text-neutral-muted text-sm leading-relaxed">
                  To provide safe, energy-efficient, and innovative construction solutions that fulfill technical parameters and satisfy client expectations, while setting benchmarks in design craft and materials durability.
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-start"
            >
              <div className="bg-primary text-accent p-3.5 rounded-full shrink-0">
                <Compass className="h-6 w-6 stroke-[2]" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary">Our Industry Vision</h3>
                <p className="text-neutral-muted text-sm leading-relaxed">
                  To become the nation's most trusted partner in construction development, known for building state-of-the-art sustainable high-rises and eco-friendly housing projects through smart engineering and honest partnerships.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="WHAT DRIVES US"
            title="Our Foundational Values"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx}
                className="bg-neutral-light border border-gray-100 rounded-lg p-6 hover:bg-white hover:border-accent transition-all duration-300 shadow-sm"
              >
                <div className="text-accent mb-4 inline-block">
                  <val.icon className="h-7 w-7 stroke-[2]" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{val.title}</h3>
                <p className="text-neutral-muted text-xs md:text-sm leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-neutral-light border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            subtitle="THE LEADERSHIP TEAM" 
            title="The Minds Behind Quora Builders" 
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                key={idx}
                className="bg-white rounded-lg border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover select-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                </div>
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-lg font-extrabold text-primary">{member.name}</h3>
                    <p className="text-accent font-bold text-xs uppercase tracking-wider">{member.role}</p>
                  </div>
                  <p className="text-neutral-muted text-xs md:text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </PageWrapper>
  );
}
