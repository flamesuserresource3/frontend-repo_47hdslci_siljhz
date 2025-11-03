import React from 'react';
import { Check, Calendar } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: 'Rs. 2,499/mo',
    highlight: false,
    features: ['Gym floor access', 'Locker access', 'Open gym 6am–9pm'],
  },
  {
    name: 'Pro',
    price: 'Rs. 3,999/mo',
    highlight: true,
    features: ['Everything in Basic', '2 classes/week', 'Body composition check'],
  },
  {
    name: 'Premium',
    price: 'Rs. 6,999/mo',
    highlight: false,
    features: ['Unlimited classes', '1 PT session/month', 'Priority support'],
  },
];

const schedule = [
  { day: 'Mon', classes: 'HIIT 7am • Strength 6pm' },
  { day: 'Tue', classes: 'Yoga 7am • Conditioning 6pm' },
  { day: 'Wed', classes: 'HIIT 7am • Mobility 6pm' },
  { day: 'Thu', classes: 'Yoga 7am • Strength 6pm' },
  { day: 'Fri', classes: 'Conditioning 7am • HIIT 6pm' },
  { day: 'Sat', classes: 'Bootcamp 8am' },
];

const Plans = () => {
  return (
    <section id="plans" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Membership Plans</h2>
          <p className="mt-3 text-gray-300">Choose a plan that fits your goals. Upgrade anytime.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border ${
                p.highlight ? 'border-red-500 bg-red-600/10' : 'border-white/10 bg-zinc-900/60'
              } p-6`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-bold">{p.name}</h3>
                {p.highlight && (
                  <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-semibold">
                    Most Popular
                  </span>
                )}
              </div>
              <p className="mt-4 text-3xl font-extrabold text-red-500">{p.price}</p>
              <ul className="mt-6 space-y-3 text-gray-200">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-5 py-3 font-semibold transition ${
                  p.highlight
                    ? 'bg-red-600 text-white hover:bg-red-500'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* Schedule */}
        <div className="mt-16">
          <div className="mb-4 flex items-center gap-2">
            <Calendar className="h-6 w-6 text-red-500" />
            <h3 className="text-2xl font-bold">Weekly Class Schedule</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {schedule.map((s) => (
              <div key={s.day} className="rounded-xl border border-white/10 bg-zinc-900/60 p-4">
                <p className="text-sm uppercase tracking-wide text-gray-400">{s.day}</p>
                <p className="mt-1 font-medium text-white">{s.classes}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
