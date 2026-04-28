import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ServiceHighlight from '../components/ServiceHighlight';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import ProcessSection from '../components/ProcessSection';
import Statistics from '../components/Statistics';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CallToAction from '../components/CallToAction';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>NexEra Consultants – GST, Tax, Accounting & IT Services</title>
        <meta name="description" content="NexEra Consultants offers GST, TDS, Income Tax, Accounting, PF, PAN Card, and IT services for businesses and individuals." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <ServiceHighlight />
        <Services preview />
        <About preview />
        <WhyChooseUs />
        <ProcessSection />
        <Statistics />
        <Testimonials />
        <FAQ />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
