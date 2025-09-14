import { fetchStrapi } from "../lib/strapi";

export default async function HomePage() {
  // fetch the homepage data from Strapi
  const res = await fetchStrapi("/pages?populate=deep");
  const page = res.data?.[0]; // get the first page (homepage)

  if (!page) {
    return <div className="p-8">⚠️ No content found in Strapi.</div>;
  }

  const { title, description, services, team, clients } = page.attributes;

  return (
    <main className="p-8 max-w-7xl mx-auto">
      {/* Page Title & Description */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-gray-300">{description}</p>
      </section>

      {/* Services Section */}
      {services?.data?.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.data.map((service: any) => (
              <div key={service.id} className="p-6 rounded-xl bg-gray-800">
                <h3 className="text-xl font-semibold mb-2">
                  {service.attributes.title || "Untitled Service"}
                </h3>
                <p className="text-gray-400">
                  {service.attributes.description || "No description available."}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Team Section */}
      {team?.data?.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.data.map((member: any) => (
              <div key={member.id} className="p-6 rounded-xl bg-gray-800">
                <h3 className="text-xl font-semibold mb-2">
                  {member.attributes.name}
                </h3>
                <p className="text-gray-400">{member.attributes.role}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Clients Section */}
      {clients?.data?.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Our Clients</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.data.map((client: any) => (
              <div
                key={client.id}
                className="flex items-center justify-center p-4 rounded-xl bg-gray-800"
              >
                <span className="text-lg font-medium">
                  {client.attributes.name}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
