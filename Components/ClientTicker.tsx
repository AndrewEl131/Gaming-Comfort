import Client from "./Client";

export const ClientTicker = () => {
  const clients = [<Client img="/clients/men-1.webp" />, <Client img="/clients/men-2.jpg"  />, <Client img="/clients/men-3.jpg"  />];

  return (
    <div className="flex overflow-hidden w-full">
      <div className="flex gap-15 animate-infinite-scroll">
        {/* Render the list twice to create the seamless loop */}
        {[...clients, ...clients].map((item, index) => (
          <div key={index} className="flex-shrink-0">
            {item}
          </div>
        ))}
        {[...clients, ...clients].map((item, index) => (
          <div key={index} className="flex-shrink-0">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};