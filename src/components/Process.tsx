interface StepProps {
  number: string;
  title: string;
  description: string;
}

interface ProcessProps {
  steps: StepProps[];
}

export default function Process({ steps }: ProcessProps) {
  return (
    <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">
      {steps.map((step, idx) => (
        <div key={idx} className="relative">
          {/* Connector line for desktop */}
          {idx < steps.length - 1 && (
            <div className="hidden lg:block absolute -right-4 top-8 w-8 h-0.5 bg-gradient-to-r from-sky-400 to-sage-400"></div>
          )}

          <div className="flex gap-4">
            {/* Number badge */}
            <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-sky-100 to-sage-100 rounded-lg">
              <span className="text-2xl font-bold gradient-text">{step.number}</span>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-charcoal-900 mb-2">{step.title}</h3>
              <p className="text-charcoal-800 text-sm leading-relaxed">{step.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
