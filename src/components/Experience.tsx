
import { motion } from "motion/react";
import { MapPin, ChartNoAxesCombined, CalendarDays } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-7xl mx-auto w-full">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl mt-3">
            Experience
          </h2>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-colors duration-300 rounded-md p-6 sm:p-8 lg:p-10"
        >

          {/* Header */}
          <div className="flex flex-col gap-4 border-b border-[#EAEAEA]/15 pb-6 md:flex-row md:items-end md:justify-between">

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-[#9a9a9a]">
                Advanced Engineering Hire (AEH) Intern
              </p>

              <h3 className="mt-3 text-2xl md:text-3xl font-semibold">
                Accenture
              </h3>

              <div className="flex items-center gap-2 mt-3 text-[#9a9a9a]">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>Pune, India</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[#9a9a9a]">
              <CalendarDays className="w-4 h-4 text-[#D4AF37]" />
              <span>May 2026 - Jul 2026</span>
            </div>

          </div>

          {/* Content */}
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.5fr_1fr]">

			{/* Description */}
			<motion.div
				initial={{ opacity: 0, x: -20 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6, delay: 0.3 }}
				viewport={{ once: true }}
				className="space-y-6"
			>

				<div className="space-y-5">

				<div className="flex items-start gap-3">
					<span className="mt-1 text-[#D4AF37]">•</span>

					<p className="text-[#EAEAEA] leading-relaxed">
					Built scalable data pipelines and performed large-scale data
					manipulation on the Palantir Foundry platform using 700+
					records from multiple datasets, enabling efficient processing
					and analysis.
					</p>
				</div>

				<div className="flex items-start gap-3">
					<span className="mt-1 text-[#D4AF37]">•</span>

					<p className="text-[#EAEAEA] leading-relaxed">
					Created ontology-based vector embeddings for 400+ domain-specific
					keywords extracted from 10+ research papers, enabling an
					ontology-driven semantic search pipeline and knowledge discovery.
					</p>
				</div>

				</div>
			</motion.div>

			{/* Highlights */}
			<motion.div
				initial={{ opacity: 0, x: 20 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6, delay: 0.4 }}
				viewport={{ once: true }}
				className="border border-[#EAEAEA]/15 rounded-md p-6 self-start"
			>

				<div className="flex items-center gap-3 mb-6">

				<ChartNoAxesCombined className="w-6 h-6 text-[#D4AF37]" />

				<h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#9a9a9a]">
					Highlights
				</h4>

				</div>

				<div className="space-y-6">

				<div>
					<p className="text-sm font-semibold text-[#EAEAEA] mb-1">
					Focus
					</p>

					<p className="text-[#9a9a9a]">
					Data engineering, semantic search, ontology-based embeddings
					</p>
				</div>

				<div>
					<p className="text-sm font-semibold text-[#EAEAEA] mb-1">
					Tools
					</p>

					<p className="text-[#9a9a9a]">
					Palantir Foundry, Python, Vector Embeddings
					</p>
				</div>

				<div>
					<p className="text-sm font-semibold text-[#EAEAEA] mb-1">
					Scale
					</p>

					<p className="text-[#9a9a9a]">
					700+ records · 400+ keywords · 10+ research papers
					</p>
				</div>

				<div>
					<p className="text-sm font-semibold text-[#EAEAEA] mb-1">
					Outcome
					</p>

					<p className="text-[#9a9a9a]">
					Developed scalable data pipelines and an ontology-driven
					semantic search pipeline for knowledge discovery.
					</p>
				</div>

				</div>

			</motion.div>

			</div>

        </motion.div>

      </div>
    </section>
  );
}

export default Experience;