import { ArrowUpRight, CheckIcon } from "lucide-react";
import Link from "next/link";
import { instrumentSerif } from "@/lib/fonts";

const AURORA_GRADIENT = "linear-gradient(135deg, #2b3bff 0%, #7c5cff 40%, #a855f7 65%, #4ade80 100%)";

const cardClass =
  "h-full transform-gpu rounded-3xl border border-white bg-white/75 shadow-[0_1px_0_rgba(255,255,255,1)_inset,0_24px_48px_-28px_rgba(30,41,99,0.25)] ring-1 ring-neutral-900/[0.04] backdrop-blur transition duration-500 hover:-translate-y-2";

export const Component = () => {
  return (
    <section id="pricing" className="relative overflow-hidden bg-[#f5f6fa] py-28 text-neutral-950 lg:pb-32">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-200/50 via-violet-200/50 to-emerald-200/40 blur-[120px]" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white bg-white/80 px-3 py-1.5 text-[13px] text-neutral-600 shadow-[0_2px_10px_-2px_rgba(30,41,99,0.12)] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            Pricing
          </span>
          <h2 className="font-aeonik mt-5 mb-4 text-5xl tracking-[-0.035em] md:text-6xl">
            Pricing &amp;{" "}
            <span className={`${instrumentSerif.className} text-[1.12em] font-normal`}>Plans</span>
          </h2>
          <p className="text-lg tracking-tight text-neutral-500">
            Choose the perfect plan for your AI-powered interview needs. Start transforming your recruitment process today.
          </p>
        </div>
        <div className="-m-4 flex flex-wrap *:mx-auto">
          <div className="w-full p-4 md:w-1/2 lg:w-1/3">
            <div className={cardClass}>
              <div className="border-b border-neutral-900/[0.06] p-10">
                <h4 className="font-aeonik mb-5 text-5xl tracking-tighter">Starter</h4>
                <p className="mb-2 text-xl font-semibold tracking-tight">From $29/mo</p>
                <p className="tracking-tight text-neutral-500">
                  Perfect for small teams getting started with AI interviews.
                </p>
              </div>
              <div className="p-10 pb-9">
                <ul className="-m-1.5 mb-10">
                  <FeatureItem>50 Interviews/month</FeatureItem>
                  <FeatureItem>AI Voice Agent</FeatureItem>
                  <FeatureItem>Basic Analytics</FeatureItem>
                  <FeatureItem>Email Support</FeatureItem>
                  <FeatureItem>Standard Templates</FeatureItem>
                </ul>
                <PricingButton noCardRequired={true} href="/auth">
                  Try 14 Days Free Trial
                </PricingButton>
              </div>
            </div>
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-1/3">
            <div
              className="h-full transform-gpu overflow-hidden rounded-3xl p-px shadow-[0_30px_60px_-24px_rgba(76,58,255,0.45)] transition duration-500 hover:-translate-y-2"
              style={{ backgroundImage: AURORA_GRADIENT }}
            >
              <div className="h-full overflow-hidden rounded-[23px] bg-white">
                <div className="relative overflow-hidden p-10" style={{ backgroundImage: AURORA_GRADIENT }}>
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/25 blur-2xl" />
                  <span className="relative mb-5 inline-block rounded-full border border-white/40 bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    Most popular
                  </span>
                  <h4 className="font-aeonik relative mb-5 text-5xl tracking-tighter text-white">Professional</h4>
                  <p className="relative mb-2 text-xl font-semibold tracking-tighter text-white">From $99/mo</p>
                  <p className="relative tracking-tight text-white/85">
                    Ideal for growing companies that need advanced AI interview features.
                  </p>
                </div>
                <div className="p-10 pb-9">
                  <ul className="-m-1.5 mb-10">
                    <FeatureItem>500 Interviews/month</FeatureItem>
                    <FeatureItem>Advanced AI Models</FeatureItem>
                    <FeatureItem>Detailed Analytics</FeatureItem>
                    <FeatureItem>Custom Branding</FeatureItem>
                    <FeatureItem>Priority Support</FeatureItem>
                    <FeatureItem>API Access</FeatureItem>
                  </ul>
                  <PricingButton noCardRequired={true} href="/auth" primary>
                    Start Professional Plan
                  </PricingButton>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-1/3">
            <div className={`flex flex-col justify-between ${cardClass}`}>
              <div className="p-10">
                <h4 className="font-aeonik mb-5 text-5xl tracking-tighter">Enterprise</h4>
                <p className="mb-2 text-xl font-semibold tracking-tighter">Custom Pricing</p>
                <p className="tracking-tight text-neutral-500">
                  Tailored solutions for large organizations with specific requirements.
                </p>
              </div>
              <div className="p-10 pb-9">
                <ul className="-m-1.5 mb-10">
                  <FeatureItem>Unlimited Interviews</FeatureItem>
                  <FeatureItem>Custom AI Training</FeatureItem>
                  <FeatureItem>White-label Solution</FeatureItem>
                  <FeatureItem>Dedicated Support</FeatureItem>
                  <FeatureItem>On-premise Deployment</FeatureItem>
                  <FeatureItem>SLA Guarantees</FeatureItem>
                </ul>
                <PricingButton href="/contact">Contact Sales</PricingButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ children }) => {
  return (
    <li className="flex items-center py-1.5">
      <span className="mr-3 grid h-5 w-5 place-items-center rounded-full bg-indigo-50">
        <CheckIcon className="size-3 text-indigo-600" strokeWidth={3} />
      </span>
      <span className="font-medium tracking-tight text-neutral-800">{children}</span>
    </li>
  );
};

const PricingButton = ({ children, href, noCardRequired, primary }) => {
  return (
    <>
      <Link
        href={href ?? "#"}
        className={`group inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-center font-semibold tracking-tight transition duration-200 ${
          primary
            ? "bg-gradient-to-b from-neutral-700 to-neutral-950 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_12px_24px_-10px_rgba(0,0,0,0.6)] hover:brightness-110"
            : "border border-neutral-200 bg-white text-neutral-900 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:border-neutral-300 hover:shadow-md"
        }`}
      >
        {children}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
      {noCardRequired && (
        <span className="mt-2 block text-center text-sm tracking-tight text-neutral-400">No credit card required</span>
      )}
    </>
  );
};
