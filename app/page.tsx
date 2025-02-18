import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import ProcessTimeline from './components/ProcessTimeline';
import Footer from './components/Footer';

export default function Home() {
  const services = [
    {
      title: "Custom AI Agent's",
      description: "Build specialised AI agents tailored to your specific business needs",
      icon: <i className="fas fa-robot" aria-hidden="true" />,
    },
    {
      title: "Workflow Automation",
      description: "Streamline operations with intelligent automation solutions that enhance efficiency and minimise costs.",
      icon: <i className="fas fa-gears" aria-hidden="true" />,
    },
    {
      title: "AI Workshop & IT Training",
      description: "Empower your team with hands-on training and workshops to build organisational capabilities.",
      icon: <i className="fas fa-graduation-cap" aria-hidden="true" />,
    }
  ];

  const principles = [
    {
      title: "Passion",
      description: "Our passion is to enable Kalgoorlie's people and organisations to embrace the future of technology while staying true to our community-focused values.",
      icon: <i className="fas fa-heart" aria-hidden="true" />
    },
    {
      title: "Empower",
      description: "We believe technology should empower, not replace. Our solutions are designed to enhance productivity, inspire creativity, and strengthen the community, ensuring no one is left behind.",
      icon: <i className="fas fa-bolt" aria-hidden="true" />
    },
    {
      title: "Commit",
      description: "AI doesn't have to be daunting. We are here to help you work smarter, not harder—whether you're a small business owner, an entrepreneur, or someone curious about the future. Together, let's build solutions that empower you to do more with less.",
      icon: <i className="fas fa-handshake" aria-hidden="true" />
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section id="home" className="min-h-[calc(100vh-6rem)] flex items-center justify-center pt-24 md:pt-32" aria-label="Welcome to Kalgoorlie AI">
          {/* Subtle accent orbs with reduced opacity and size */}
          <div className="floating-orb w-[300px] h-[300px] top-[10%] left-[-5%] opacity-[0.05]" aria-hidden="true" />
          <div className="floating-orb w-[200px] h-[200px] bottom-[20%] right-[5%] opacity-[0.03]" style={{ animationDelay: '-10s' }} aria-hidden="true" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <header className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gradient">
                Empower Your Business
                <span className="block">with AI</span>
              </h1>
              <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto">
                Your Kalgoorlie local partner in AI Workshops, AI Agents, and Workflow Automation
              </p>
              
              {/* Lead Magnet Card */}
              <div className="max-w-2xl mx-auto mb-12 transform hover:scale-105 transition-transform duration-300">
                <div className={`bg-primary/10 border border-primary/20 rounded-2xl p-6 backdrop-blur-sm`}>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <i className="fas fa-clipboard-check text-3xl text-primary"></i>
                    <h2 className="text-2xl font-semibold">Is your business ready?</h2>
                  </div>
                  <a 
                    href="/questionnaire"
                    className="btn-primary text-lg px-8 py-4 rounded-full flex items-center justify-center gap-2 w-full"
                  >
                    Find out now
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </header>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 scroll-mt-24" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 id="services-heading" className="text-center text-4xl font-bold mb-3 text-gradient">
              Our Services
            </h2>
            <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
              Comprehensive AI solutions tailored to optimise your business operations and drive innovation
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="about" className="py-20 scroll-mt-24" aria-labelledby="process-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 id="process-heading" className="text-center text-4xl font-bold mb-3 text-gradient">
              How We Work
            </h2>
            <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
              Our proven process ensures successful AI implementation and measurable outcomes
            </p>
            <ProcessTimeline />
          </div>
        </section>

        {/* Our Principles Section */}
        <section className="py-20" aria-labelledby="principles-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 id="principles-heading" className="text-4xl font-bold mb-3 text-gradient">
              Our Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
              {principles.map((principle, index) => (
                <ServiceCard
                  key={index}
                  title={principle.title}
                  description={principle.description}
                  icon={principle.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5" aria-labelledby="cta-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="cta-heading" className="text-3xl font-bold mb-6">
              Unsure where to start?
            </h2>
            <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-full px-6 py-3">
              <i className="fas fa-phone-alt text-primary"></i>
              <a 
                href="tel:0409913694" 
                className="text-lg hover:text-primary transition-colors"
              >
                Give Marno a call: 0409 913 694
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
