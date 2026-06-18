import React from 'react';

const Work: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 space-y-20 md:space-y-32">

      {/* Intro Section */}
      <section className="space-y-6">
        <h1 className="text-3xl md:text-4xl leading-tight font-bold">
          Selected Experience & Perspectives
        </h1>

        <div className="text-body line-height-relaxed space-y-4 text-muted">
          <p>
            I work at the intersection of investment, governance and operational execution.
            Over the past 25 years, I have built, scaled, integrated and advised
            financial-services and distribution businesses across Africa and Asia.
          </p>

          <p>
            My experience is particularly relevant where growth depends on partnerships,
            last-mile execution and the alignment of multiple stakeholders.
          </p>
        </div>
      </section>

      {/* Selected Engagements */}
      <section className="space-y-8">
        <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-muted border-b border-gray-100 pb-2">
          Selected Engagements
        </h2>

        <div className="grid grid-cols-1 gap-8">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-black">
              Standard Bank (South Africa)
            </h3>
            <p className="text-body line-height-relaxed text-muted">
              Advised on scaling and strengthening an existing bank agency network,
              with particular focus on execution capability, governance and operational resilience.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-bold text-black">
              bKash (Bangladesh)
            </h3>
            <p className="text-body line-height-relaxed text-muted">
              Designed the foundational agent network framework during the company’s
              early-stage scale-up.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-bold text-black">
              Paga (Nigeria)
            </h3>
            <p className="text-body line-height-relaxed text-muted">
              Developed the super-agent and aggregator model to support scalable
              distribution, liquidity management and partner alignment.
            </p>
          </div>
        </div>
      </section>

      {/* Thought Leadership */}
      <section className="space-y-6">
        <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-muted border-b border-gray-100 pb-2">
          Thought Leadership
        </h2>

        <ul className="text-body line-height-relaxed space-y-4 list-none">
          <li className="pl-0 flex items-start">
            <span className="mr-4 text-gray-300">—</span>
            <span>
              Co-author of <span className="italic">Bridges to Cash</span>, an academic paper on liquidity management in mobile money agent networks and financial inclusion.
            </span>
          </li>

          <li className="pl-0 flex items-start">
            <span className="mr-4 text-gray-300">—</span>
            <span>
              Contributor to financial-inclusion and agent-network development initiatives across Africa and Asia, including work supported by the Gates Foundation.
            </span>
          </li>
        </ul>
      </section>

      {/* Who I Work With */}
      <section className="space-y-8">
        <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-muted border-b border-gray-100 pb-2">
          Who I Work With
        </h2>

        <div className="grid grid-cols-1 gap-8">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-black">
              Investment Funds & Investors
            </h3>
            <p className="text-body line-height-relaxed text-muted">
              Supporting venture capital, private equity and development finance
              institutions in assessing execution risk, understanding operating realities
              and helping portfolio companies create value and scale effectively.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-bold text-black">
              Founders & Leadership Teams
            </h3>
            <p className="text-body line-height-relaxed text-muted">
              Serving as a strategic sounding board on growth, partnerships,
              organisational transitions and execution complexity.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-bold text-black">
              Boards & Shareholders
            </h3>
            <p className="text-body line-height-relaxed text-muted">
              Providing independent perspective on governance, stakeholder alignment
              and strategic decision-making.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-bold text-black">
              Banks, Fintechs & Platform Businesses
            </h3>
            <p className="text-body line-height-relaxed text-muted">
              Advising organisations building and scaling last-mile financial-services
              and distribution ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* Typical Engagements */}
      <section className="space-y-6">
        <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-muted border-b border-gray-100 pb-2">
          Typical Engagements
        </h2>

        <ul className="text-body line-height-relaxed space-y-4 list-none">
          <li className="pl-0 flex items-start">
            <span className="mr-4 text-gray-300">—</span>
            <span>Investment and commercial due diligence</span>
          </li>

          <li className="pl-0 flex items-start">
            <span className="mr-4 text-gray-300">—</span>
            <span>Portfolio value creation and scaling support</span>
          </li>

          <li className="pl-0 flex items-start">
            <span className="mr-4 text-gray-300">—</span>
            <span>Founder and executive sparring</span>
          </li>

          <li className="pl-0 flex items-start">
            <span className="mr-4 text-gray-300">—</span>
            <span>Distribution and go-to-market diagnostics</span>
          </li>

          <li className="pl-0 flex items-start">
            <span className="mr-4 text-gray-300">—</span>
            <span>Partnership and ecosystem strategy</span>
          </li>

          <li className="pl-0 flex items-start">
            <span className="mr-4 text-gray-300">—</span>
            <span>Post-acquisition integration and transition support</span>
          </li>

          <li className="pl-0 flex items-start">
            <span className="mr-4 text-gray-300">—</span>
            <span>Board advisory and independent directorships</span>
          </li>
        </ul>
      </section>

      {/* Signature */}
      <section className="py-8 px-6 bg-gray-50 border border-gray-100 rounded-sm space-y-2">
        <h3 className="text-xl font-bold text-black">
          Frederik Eijkman
        </h3>

        <p className="text-sm uppercase tracking-wider font-semibold text-muted">
          Senior Operator, Strategic Advisor & Board Member
        </p>

        <p className="text-body line-height-relaxed text-muted pt-4 border-t border-gray-200 mt-2">
          Helping investors, founders and boards navigate growth, complexity
          and execution in financial services and emerging-market ecosystems.
        </p>
      </section>

    </div>
  );
};

export default Work;