export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange-500">MGO srl</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:underline">Chi siamo</a>
          <a href="#products" className="hover:underline">Prodotti</a>
          <a href="#offers" className="hover:underline">Offerte</a>
          <a href="#contact" className="hover:underline">Contatti</a>
        </nav>
      </header>

      <main className="p-6">
        <section className="text-center my-10">
          <h2 className="text-3xl font-bold">Benvenuto in MGO srl</h2>
          <p className="mt-2 text-lg">Distribuzione alimentare italiana di qualità per il Nord Italia e la Svizzera.</p>
        </section>

        <section id="about" className="my-10">
          <h3 className="text-xl font-semibold">Chi siamo</h3>
          <p>MGO srl è un'azienda con oltre 30 anni di esperienza nella distribuzione alimentare.</p>
        </section>

        <section id="products" className="my-10">
          <h3 className="text-xl font-semibold">Prodotti</h3>
          <p>Scopri la nostra selezione di oltre 500 prodotti alimentari italiani.</p>
        </section>

        <section id="offers" className="my-10">
          <h3 className="text-xl font-semibold">Offerte Speciali</h3>
          <p>Promozioni esclusive per clienti professionali e importatori.</p>
        </section>

        <section id="contact" className="my-10">
          <h3 className="text-xl font-semibold">Contattaci</h3>
          <p>Email: info@mgosrl.it</p>
          <p>San Martino Siccomario (PV), Italia</p>
        </section>
      </main>

      <footer className="bg-white text-center p-4 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} MGO srl. Tutti i diritti riservati.
      </footer>
    </div>
  );
}