interface TypeProps {
  service: ServiceType | undefined;
}

export default function ServiceType({ service }: TypeProps) {
  if (!service) {
    return null;
  }

  const { id, name, description, price } = service;

  return (
    <div className="border-2 border-black dark:border-white p-2 flex flex-col items-center">
      <p>{name}</p>
      <p>{description}</p>
      <p>NOK {price}kr</p>

      <div className="h-1 w-[50%] bg-black dark:bg-white my-2" />

      <p>View More</p>
    </div>
  );
}
