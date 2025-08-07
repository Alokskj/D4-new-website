import EventCard, { EventCardProps } from "../blocks/EventCard";

const EventsData: EventCardProps[] = [
  {
    image: '/images/events/ai-as-your-cto.png',
    title: 'AI as Your CTO Co-Founder: Build Smarter, Not Harder',
    description: 'Pitch your idea to the world and get a chance to win exciting prizes and get a chance to work with the best companies in the world.',
    date: '19th July 2025',
  },
  {
    image: '/images/events/hello-world-conclave.png',
    title: 'Hello World Conclave',
    description: 'Pitch your idea to the world and get a chance to win exciting prizes and get a chance to work with the best companies in the world.',
    date: '29th June 2025',
  },
  {
    image: '/images/events/digital-payments-and-linkedin-opportunies.png',
    title: 'Digital Payments & LinkedIn Opportunities',
    description: 'Pitch your idea to the world and get a chance to win exciting prizes and get a chance to work with the best companies in the world.',
    date: '07th April 2025',
  },
  {
    image: '/images/events/hack-n-win-2.png',
    title: 'Hack-N-Win 2.0',
    description: 'Pitch your idea to the world and get a chance to win exciting prizes and get a chance to work with the best companies in the world.',
    date: '01st-02nd March 2025',
  }
];

const EventsSection = () => {
  return (
    <section className='py-12 md:py-24 px-4 md:px-6 lg:px-8'>
      <h2 className='section-heading mb-12 md:mb-16'>Hottest Events</h2>
      
      <div className='relative max-w-6xl mx-auto'>
        {/* Timeline line - hidden on mobile */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#30363D] h-full"></div>
        
        {/* Events */}
        <div className='space-y-8 md:space-y-12 lg:space-y-16'>
          {EventsData.map((event, index) => (
            <EventCard 
              key={index} 
              {...event} 
              reverse={index % 2 === 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;