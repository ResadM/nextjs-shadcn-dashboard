interface HeaderProp {
  title: string;
  description: string;
}

export const PageHeader: React.FC<HeaderProp> = ({ title, description }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};
