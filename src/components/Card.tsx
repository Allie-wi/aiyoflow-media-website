interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  hover?: boolean;
  children?: React.ReactNode;
}

export default function Card({ title, description, icon, hover = false, children }: CardProps) {
  return (
    <div className={`card ${hover ? 'card-hover' : ''}`}>
      {icon && <div className="mb-4 text-3xl">{icon}</div>}
      <h3 className="text-xl font-semibold mb-3 text-charcoal-900">{title}</h3>
      <p className="text-charcoal-800 mb-4">{description}</p>
      {children}
    </div>
  );
}
