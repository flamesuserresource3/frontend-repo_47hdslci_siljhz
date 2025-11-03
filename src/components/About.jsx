import React from 'react';
import { Users, Check, Star } from 'lucide-react';

const facilities = [
  'Fully equipped strength floor (free weights + machines)',
  'Dedicated cardio zone (treadmills, assault bikes, rowers)',
  'Personal training & small-group coaching',
  'Functional turf, sleds, kettlebells, and mobility tools',
  'Clean locker rooms with showers & secure storage',
];

const trainers = [
  {
    name: 'Aarav Shrestha',
    role: 'Head Coach • Strength & Conditioning',
    img: 'https://images.unsplash.com/photo-1604480133737-32f694d2c81b?q=80&w=1200&auto=format&fit=crop',
    bio: '10+ years coaching athletes and beginners. Focus on safe technique and sustainable progress.',
    socials: { ig: 'https://instagram.com/' },
  },
  {
    name: 'Maya Karki',
    role: 'Coach • Mobility & Functional Training',
    img: 'https://images.unsplash.com/photo-1554310603-d39d43033752?q=80&w=1200&auto=format&fit=crop',
    bio: 'Functional strength, joint health, and building athletic movement patterns for all levels.',
    socials: { ig: 'https://instagram.com/' },
  },
  {
    name: 'Rohan Gurung',
    role: 'Coach • HIIT & Fat Loss',
    img: 'https://images.unsplash.com/photo-1546817372-628669db4655?q=80&w=1200&auto=format&fit=crop',
    bio: 'High-energy sessions that torch fat while keeping form sharp and motivation high.',
    socials: { ig: 'https://instagram.com/' },
  },
];

const testimonials = [
  {
    name: 'Sujan R.',
    text: 'Dropped 8kg in 12 weeks. The coaching and vibe here are unmatched.',
    stars: 5,
    img: 'https://images.unsplash.com/photo-1544168190-79c17527004f?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Priyanka T.',
    text: 'I finally feel confident lifting. The trainers genuinely care.',
    stars: 5,
    img: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Bibek L.',
    text: 'Great equipment, clean space, and community that pushes you forward.',
    stars: 5,
    img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop',
  },
];

const About = () => {
  return (
    <section id="about" className="bg-zinc-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl">About VR Fitness</h2>
            <p className="mt-4 text-gray-300">
              We are a results-driven gym in the heart of Madhyapur Thimi, Bhaktapur. Our mission is
              simple: build strong, confident humans through intelligent training, accountability, and
              community. Whether you’re a beginner or athlete, you’ll feel at home here.
            </p>
            <ul className="mt-6 space-y-3 text-gray-200">
              {facilities.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop"
              alt="Gym floor"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent" />
          </div>
        </div>

        {/* Trainers */}
        <div className="mt-8">
          <div className="mb-6 flex items-center gap-2">
            <Users className="h-6 w-6 text-red-500" />
            <h3 className="text-2xl font-bold">Meet the Coaches</h3>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trainers.map((t) => (
              <div
                key={t.name}
                className="overflow-hidden rounded-xl border border-white/10 bg-zinc-900/60"
              >
                <img src={t.img} alt={t.name} className="h-48 w-full object-cover" />
                <div className="p-5">
                  <h4 className="text-lg font-semibold">{t.name}</h4>
                  <p className="text-sm text-red-400">{t.role}</p>
                  <p className="mt-2 text-sm text-gray-300">{t.bio}</p>
                  <a
                    href={t.socials.ig}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-sm text-gray-400 underline hover:text-white"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-14">
          <h3 className="mb-6 text-2xl font-bold">Gallery</h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1571907480495-61c037aa0f3d?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1596357395104-5b6c4f66b2ac?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop',
            ].map((src, i) => (
              <div
                key={i}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10"
              >
                <img
                  src={src}
                  alt="VR Fitness gallery"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-14">
          <h3 className="mb-6 text-2xl font-bold">What Members Say</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-xl border border-white/10 bg-zinc-900/60 p-5">
                <div className="flex items-center gap-3">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{t.name}</p>
                    <div className="flex items-center gap-1 text-yellow-400">
                      {Array.from({ length: t.stars }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-gray-300">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
