import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Kamaruddin, S. Ag",
      role: "Head of KUA Kec. Tebing Tinggi",
      content: "The KUA Tebing Tinggi web portal engineered by M. Saman has transformed how we deliver public religious services. It is remarkably responsive, secure, and makes institutional information seamlessly accessible to our community.",
      image: "https://kuatebingtinggi.pages.dev/img/kepalakua.webp"
    },
    {
      name: "David Chen",
      role: "CEO at Karyzen Store",
      content: "Saman developed our Karyzen Store digital platform with outstanding precision. From the intuitive product showcase to the streamlined checkout workflow, our user experience and customer engagement saw an immediate boost.",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Abu Bakar, S. Ag",
      role: "Islamic Religious Counselor",
      content: "ALPA Apps has revolutionized our administrative and routine reporting workflows. The interface is clean, fast, and eliminates tedious manual reporting, saving counselors countless hours every week.",
      image: "https://kuatebingtinggi.pages.dev/img/abubakar.webp"
    }
  ];

  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Client <span className="text-gradient-primary">Testimonials</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Feedback from talented leaders I've had the pleasure of partnering with throughout my career.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((test, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="glass-panel p-8 rounded-3xl border border-foreground/10 flex flex-col relative overflow-hidden group hover:border-primary/30 transition-colors duration-500"
          >
            {/* Subtle glow orb */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-[40px] group-hover:bg-primary/20 transition-colors duration-500 pointer-events-none" />
            
            {/* Quote Icon Background */}
            <div className="absolute top-6 right-8 text-primary/10 select-none">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 11l-2 2v-3H4V4h6v7zm10 0l-2 2v-3h-4V4h6v7z" />
              </svg>
            </div>

            <p className="text-muted-foreground leading-relaxed flex-grow relative z-10 italic mb-8">
              "{test.content}"
            </p>

            <div className="flex items-center gap-4 relative z-10 mt-auto">
              <img src={test.image} alt={test.name} className="w-12 h-12 rounded-full object-cover border border-foreground/10" />
              <div>
                <h4 className="text-foreground font-bold text-sm">{test.name}</h4>
                <p className="text-primary text-xs font-medium">{test.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
