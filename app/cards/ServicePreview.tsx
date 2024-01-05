interface TypeProps {
  service: ServiceType | undefined;
}

export default function ServiceType({ service }: TypeProps) {
  if (!service) {
    return null;
  }

  const { id, name, description, price } = service;

  return (
    <div>
      <p>Id: {id}</p>
      <p>Name: {name}</p>
      <p>Description: {description}</p>
      <p>Price: {price}</p>

      <h3>View</h3>
    </div>
  );
}
