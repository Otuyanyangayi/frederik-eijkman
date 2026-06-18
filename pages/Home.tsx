import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 space-y-20 md:space-y-32">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
        <div className="flex-1 space-y-8">
          <h1 className="text-3xl md:text-4xl leading-tight font-bold">
            Helping Investors, Founders and Boards Navigate Growth, Complexity and Execution
          </h1>
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-black font-semibold tracking-tight border-b border-gray-100 pb-4">
              Operator Perspective &nbsp;|&nbsp; Investor Insight &nbsp;|&nbsp; Execution in Emerging Markets
            </p>
            <div className="text-body line-height-relaxed space-y-4 text-muted">
              <p>
                I advise investors, founders, boards and leadership teams operating in financial services and emerging-market ecosystems where growth depends on execution, partnerships and last-mile distribution.
              </p>
              <p>
                Over the past 25 years, I have built, scaled, integrated and transformed businesses across Africa and Asia. My experience spans entrepreneurship, investment situations, strategic partnerships, M&A transitions and complex multi-stakeholder ecosystems.
              </p>
              <p>
                I work at the point where strategy meets operational reality: where commercial models, partnerships, governance, technology and field execution have to come together.
              </p>
            </div>
          </div>
        </div>
        
        {/* Profile Picture */}
  <div className="w-full md:w-48 lg:w-56 flex-shrink-0">
    <img
      src="/fred.png"
      alt="Frederik Eijkman"
      className="aspect-[3/4] w-full object-cover border border-gray-100"
    />
  </div>

      </section>

      {/* Who I Work With */}
      <section className="space-y-8">
        <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-muted border-b border-gray-100 pb-2">Who I Work With</h2>
        <div className="grid grid-cols-1 gap-8">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-black font-sans">Investors & Investment Funds</h3>
            <p className="text-body line-height-relaxed text-muted">
              Supporting venture capital, private equity and development finance institutions in assessing execution risk, understanding distribution economics and helping portfolio companies navigate scaling challenges and organisational transitions.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-black font-sans">Founders & Leadership Teams</h3>
            <p className="text-body line-height-relaxed text-muted">
              Serving as a strategic sounding board on growth, partnerships, scaling, organisational change and the practical realities of execution.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-black font-sans">Boards & Shareholders</h3>
            <p className="text-body line-height-relaxed text-muted">
              Providing independent perspective on governance, strategic choices, stakeholder alignment and organisational transformation.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-black font-sans">Banks, Fintechs & Platform Businesses</h3>
            <p className="text-body line-height-relaxed text-muted">
              Advising organisations building or expanding last-mile financial services, distribution networks and embedded-finance ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="space-y-8">
        <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-muted border-b border-gray-100 pb-2">Areas of Expertise</h2>
        <div className="grid grid-cols-1 gap-8">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-black font-sans">Last-Mile Financial Services & Agent Networks</h3>
            <p className="text-body line-height-relaxed text-muted">
              Designing, diagnosing and improving CICO, agent, merchant and informal-retail distribution models.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-black font-sans">Scaling & Execution Support</h3>
            <p className="text-body line-height-relaxed text-muted">
              Helping leadership teams move from strategy to implementation, particularly where growth depends on partnerships, field operations and operational discipline.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-black font-sans">Strategic Partnerships & Ecosystem Alignment</h3>
            <p className="text-body line-height-relaxed text-muted">
              Structuring and strengthening relationships between fintechs, banks, telcos, investors, development organisations and distribution networks.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-black font-sans">M&A, Integrations & Transition Risk</h3>
            <p className="text-body line-height-relaxed text-muted">
              Supporting buyers, sellers and boards in understanding and managing the operational realities that follow transactions, integrations and organisational change.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-black font-sans">Board & Founder Advisory</h3>
            <p className="text-body line-height-relaxed text-muted">
              Acting as a trusted advisor to founders, executives, investors and boards navigating complexity, pressure and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Selected Experience */}
      <section className="space-y-6">
        <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-muted border-b border-gray-100 pb-2">Selected Experience</h2>
        <ul className="text-body line-height-relaxed space-y-4 list-none">
          <li className="pl-0 flex items-start">
            <span className="mr-4 text-gray-300">—</span>
            <span>Founder and Managing Director of PesaTransact / PesaPoint, a national payments and distribution platform in Kenya.</span>
          </li>
          <li className="pl-0 flex items-start">
            <span className="mr-4 text-gray-300">—</span>
            <span>Built and managed networks reaching more than 20,000 agents and merchants.</span>
          </li>
          <li className="pl-0 flex items-start">
            <span className="mr-4 text-gray-300">—</span>
            <span>Led the development and scaling of financial-inclusion and distribution ecosystems across Africa and Asia.</span>
          </li>
          <li className="pl-0 flex items-start">
            <span className="mr-4 text-gray-300">—</span>
            <span>Played a central role in the PEP/PesaPoint consolidation and the subsequent Interswitch integration.</span>
          </li>
          <li className="pl-0 flex items-start">
            <span className="mr-4 text-gray-300">—</span>
            <span>Advised organisations including bKash, Standard Bank and Paga on agent and distribution strategies.</span>
          </li>
          <li className="pl-0 flex items-start">
            <span className="mr-4 text-gray-300">—</span>
            <span>Co-author of <span className="italic">Bridges to Cash</span> and contributor to Gates-funded financial-inclusion initiatives.</span>
          </li>
          <li className="pl-0 flex items-start">
            <span className="mr-4 text-gray-300">—</span>
            <span>Board, shareholder and advisory experience across fintech, media, education and emerging-market ventures.</span>
          </li>
        </ul>
      </section>

      {/* Typical Engagements */}
      <section className="space-y-6">
        <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-muted border-b border-gray-100 pb-2">Typical Engagements</h2>
        <ul className="text-body line-height-relaxed space-y-4 list-none font-sans">
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

      {/* Closure / Summary Statement */}
      <section className="py-8 px-6 bg-gray-50 border border-gray-100 rounded-sm">
        <p className="text-lg italic font-medium line-height-relaxed text-black max-w-2xl font-serif">
          "I combine operator experience with board-level perspective. I am most useful where the challenge is not simply defining strategy, but determining how strategy can be executed successfully in the context of real organisations, real partnerships and real operating constraints."
        </p>
      </section>

      {/* Availability & Contact */}
      <section className="space-y-8 py-12 border-t border-gray-100">
        <div className="space-y-2">
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-muted">Availability & Contact</h2>
          <p className="text-body line-height-relaxed">
            Independent. Selective. Available for short engagements, board roles, and invited speaking.
          </p>
        </div>
        <div className="space-y-2 text-body">
          <p className="font-medium">Contact</p>
          <p>
            <a href="mailto:f.eijkman@gmail.com" className="accent-link">f.eijkman@gmail.com</a>
          </p>
          <p className="text-muted">+254 724 710361</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
