
import React from 'react';

const Work: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 space-y-20 md:space-y-32">
      {/* Intro */}
      <section className="space-y-6">
        <h1 className="text-3xl md:text-4xl leading-tight font-bold max-w-2xl">
          Proof & Validation
        </h1>
        <p className="text-body line-height-relaxed max-w-2xl text-muted">
          I work quietly and selectively. The examples below reflect representative engagements rather than an exhaustive client list.
        </p>
      </section>

      {/* Selected Engagements */}
      <section className="space-y-12">
        <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-muted">Selected engagements</h2>
        
        <div className="space-y-12">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Standard Bank (South Africa)</h3>
            <p className="text-body line-height-relaxed text-muted max-w-2xl">
              Advisory on scaling and stabilising an existing bank agency network, with focus on governance, execution risk, and operational resilience.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold">bKash (Bangladesh)</h3>
            <p className="text-body line-height-relaxed text-muted max-w-2xl">
              Designed the foundational agent network framework during early-stage scale-up.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold">Paga (Nigeria)</h3>
            <p className="text-body line-height-relaxed text-muted max-w-2xl">
              Developed the super-agent / aggregator model to support scalable distribution and liquidity management.
            </p>
          </div>
        </div>
      </section>

      {/* Thought Leadership */}
      <section className="space-y-6">
        <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-muted">Thought leadership</h2>
        <p className="text-body line-height-relaxed max-w-2xl">
          Co-author of <span className="italic">Bridges to Cash</span>, an academic paper on liquidity management in mobile money agent networks and financial inclusion.
        </p>
      </section>

      {/* Engagement Formats */}
      <section className="space-y-6">
        <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-muted">Engagement formats</h2>
        <ul className="text-body line-height-relaxed space-y-4 list-none">
          <li className="pl-0 flex items-start">
            <span className="mr-4 text-gray-300">—</span>
            <span>Operational diagnostic & reset sprints (2–4 weeks)</span>
          </li>
          <li className="pl-0 flex items-start">
            <span className="mr-4 text-gray-300">—</span>
            <span>Interim operational stewardship (part-time, defined mandate)</span>
          </li>
          <li className="pl-0 flex items-start">
            <span className="mr-4 text-gray-300">—</span>
            <span>Board and investor advisory on execution risk, liquidity, and governance</span>
          </li>
          <li className="pl-0 flex items-start">
            <span className="mr-4 text-gray-300">—</span>
            <span>Transition, handover, and reputationally safe exit support</span>
          </li>
        </ul>
      </section>

      {/* When I’m not a fit */}
      <section className="space-y-6 pt-12 border-t border-gray-100">
        <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-muted">When I’m not a fit</h2>
        <ul className="text-body line-height-relaxed space-y-4 list-none text-muted">
          <li className="pl-0 flex items-start">
            <span className="mr-4 text-gray-200">—</span>
            <span>If you are looking for growth hacking, pitch decks, or fundraising support</span>
          </li>
          <li className="pl-0 flex items-start">
            <span className="mr-4 text-gray-200">—</span>
            <span>If execution authority cannot be delegated</span>
          </li>
          <li className="pl-0 flex items-start">
            <span className="mr-4 text-gray-200">—</span>
            <span>If difficult operational or governance issues are off-limits</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Work;
