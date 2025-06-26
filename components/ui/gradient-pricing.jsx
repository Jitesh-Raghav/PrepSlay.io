import { CheckIcon } from "lucide-react";
import Link from "next/link";

export const Component = () => {
  return (
    <section className="overflow-hidden py-24 bg-black text-white lg:pb-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <h2 className="mb-4 text-6xl tracking-tighter font-aeonik">
            Pricing & Plans
          </h2>
          <p className="text-xl tracking-tight text-gray-300">
            Choose the perfect plan for your AI-powered interview needs. Start transforming your recruitment process today.
          </p>
        </div>
        <div className="-m-6 flex flex-wrap *:mx-auto">
          <div className="w-full p-6 md:w-1/2 lg:w-1/3">
            <div className="h-full transform-gpu rounded-2xl border border-gray-700 bg-gray-900 transition duration-500 hover:-translate-y-2">
              <div className="border-b border-gray-700 p-12">
                <div className="pr-9">
                  <h4 className="mb-6 text-6xl tracking-tighter text-white">Starter</h4>
                  <p className="mb-2 text-xl font-semibold tracking-tight text-white">
                    From $29/mo
                  </p>
                  <p className="tracking-tight text-gray-300">
                    Perfect for small teams getting started with AI interviews.
                  </p>
                </div>
              </div>
              <div className="p-12 pb-11">
                <ul className="-m-1.5 mb-11">
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
          <div className="w-full p-6 md:w-1/2 lg:w-1/3">
            <div
              className="transform-gpu overflow-hidden rounded-2xl p-px transition duration-500 hover:-translate-y-2"
              style={{
                backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              }}
            >
              <div className="h-full rounded-2xl bg-gray-900">
                <div
                  className="p-12"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  }}
                >
                  <div className="pr-9">
                    <h4 className="mb-6 text-6xl tracking-tighter text-white font-aeonik">
                      Professional
                    </h4>
                    <p className="mb-2 text-xl font-semibold tracking-tighter text-white">
                      From $99/mo
                    </p>
                    <p className="tracking-tight text-white">
                      Ideal for growing companies that need advanced AI interview features.
                    </p>
                  </div>
                </div>
                <div className="p-12 pb-11">
                  <ul className="-m-1.5 mb-11">
                    <FeatureItem>500 Interviews/month</FeatureItem>
                    <FeatureItem>Advanced AI Models</FeatureItem>
                    <FeatureItem>Detailed Analytics</FeatureItem>
                    <FeatureItem>Custom Branding</FeatureItem>
                    <FeatureItem>Priority Support</FeatureItem>
                    <FeatureItem>API Access</FeatureItem>
                  </ul>
                  <PricingButton noCardRequired={true} href="/auth">
                    Start Professional Plan
                  </PricingButton>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-1/3">
            <div className="flex h-full transform-gpu flex-col justify-between rounded-2xl border border-gray-700 bg-gray-900 transition duration-500 hover:-translate-y-2">
              <div className="p-12">
                <div className="pr-9">
                  <h4 className="mb-6 text-6xl tracking-tighter text-white">Enterprise</h4>
                  <p className="mb-2 text-xl font-semibold tracking-tighter text-white">
                    Custom Pricing
                  </p>
                  <p className="tracking-tight text-gray-300">
                    Tailored solutions for large organizations with specific requirements.
                  </p>
                </div>
              </div>
              <div className="p-12 pb-11">
                <ul className="-m-1.5 mb-11">
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
      <CheckIcon className="mr-3 size-3 text-blue-400" />
      <span className="font-medium tracking-tight text-white">{children}</span>
    </li>
  );
};

const PricingButton = ({ children, href, noCardRequired }) => {
  return (
    <>
      <Link href={href ?? "#"}>
        <button className="inline-block w-full rounded-lg border border-gray-600 bg-transparent px-5 py-4 text-center font-semibold tracking-tight transition duration-200 hover:scale-105 hover:bg-white hover:text-black text-white">
          {children}
        </button>
      </Link>
      {noCardRequired && (
        <span className="text-sm tracking-tight text-gray-400 block mt-2 text-center">
          No credit card required
        </span>
      )}
    </>
  );
}; 