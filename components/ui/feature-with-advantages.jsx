import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function Feature() {
  return (
    <div className="w-full py-0 lg:py-0 bg-black text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
          <div>
            <Badge className="bg-white/10 text-white border-white/20 hover:bg-white/20">AI Platform</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-white font-aeonik">
              Streamline Your Hiring Process
            </h2>
            <p className="text-xl max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-gray-300">
              Transform your recruitment with AI-powered interview technology that saves time and improves candidate assessment.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-1 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-blue-400" />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-medium text-lg">AI Voice Interviews</p>
                  <p className="text-gray-400 text-lg">
                    Conduct natural conversations with advanced AI voice models that understand context and nuance.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-blue-400" />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-medium text-lg">Real-time Analytics</p>
                  <p className="text-gray-400 text-lg">
                    Get instant insights and detailed analytics on candidate performance and interview quality.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-blue-400" />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-medium text-lg">Bias-Free Assessment</p>
                  <p className="text-gray-400 text-lg">
                    Standardized interviews eliminate unconscious bias and ensure fair candidate evaluation.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-blue-400" />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-medium text-lg">Easy Integration</p>
                  <p className="text-gray-400 text-lg">
                    Seamlessly integrate with your existing HR workflow and applicant tracking systems.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-blue-400" />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-medium text-lg">24/7 Availability</p>
                  <p className="text-gray-400 text-lg">
                    Candidates can complete interviews anytime, anywhere, improving the recruitment experience.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-blue-400" />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-medium text-lg">Scalable Solution</p>
                  <p className="text-gray-400 text-lg">
                    Handle hundreds of interviews simultaneously without compromising on quality or insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature }; 