import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-zinc-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Visit & Contact</h2>
            <p className="mt-3 text-gray-300">
              We’re centrally located and easy to reach. Drop in for a free trial session — we’ll show you
              around, assess your goals, and set you up for success.
            </p>

            <div className="mt-6 space-y-4 text-gray-200">
              <p className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-red-500" />
                Madhyapur Thimi, Bhaktapur
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-red-500" />
                +977 98X-XXXXXXX
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-red-500" />
                hello@vrfitness.com
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <p className="font-semibold text-white">Opening Hours</p>
                <p>Mon–Fri: 6:00–21:00</p>
                <p>Sat: 7:00–19:00</p>
                <p>Sun: Closed</p>
              </div>
              <div>
                <p className="font-semibold text-white">Quick Links</p>
                <a href="#plans" className="block hover:text-white">Memberships</a>
                <a href="#about" className="block hover:text-white">Coaches</a>
                <a
                  href="https://wa.me/9779800000000"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block rounded-md bg-green-600 px-3 py-2 font-semibold text-white hover:bg-green-500"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-white/10">
            <iframe
              title="VR Fitness Location"
              src="https://www.google.com/maps?q=Madhyapur%20Thimi%2C%20Bhaktapur&output=embed"
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-gray-400">
          © {new Date().getFullYear()} VR Fitness. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Contact;
