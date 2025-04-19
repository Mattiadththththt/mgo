import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="p-6 shadow-md flex flex-col items-center">
        <h1 className="text-3xl font-bold">MGO srl</h1>
        <p className="text-sm text-gray-500">Italian Food Distribution – Since 1993</p>
      </header>

      <section className="p-6">
        <h2 className="text-xl font-semibold mb-2">Chi siamo / About Us</h2>
        <p>
          MGO srl è un'azienda familiare con oltre 30 anni di esperienza nella distribuzione di
          prodotti alimentari italiani di alta qualità. Con sede a Pavia, ci occupiamo dello stoccaggio
          e della consegna di un ampio assortimento di prodotti freschi e secchi per clienti professionali
          in tutte le regioni del Nord Italia e in Svizzera. Serviamo oltre 220 clienti attivi tra negozi di prossimità,
          bar, minimarket e ristoranti, con una rete di distribuzione capillare e servizi su misura.
        </p>
        <p className="mt-2">
          Tra i nostri clienti si annoverano realtà come "Gastronomia La Piemontese" (Torino),
          "Bar Cavour" (Milano), "Emporio del Gusto" (Verona), "Locanda Alpina" (Aosta) e
          "Bottega Ticinese" (Lugano). Queste collaborazioni testimoniano la qualità dei prodotti
          e la flessibilità del nostro servizio.
        </p>
      </section>

      <section className="p-6 bg-gray-100">
        <h2 className="text-xl font-semibold mb-2">Prodotti / Products</h2>
        <p>
          Offriamo una selezione curata di prodotti alimentari italiani: pasta, conserve, salumi,
          latticini, surgelati e molto altro. Collaboriamo con fornitori affidabili per garantire
          qualità costante e disponibilità immediata.
        </p>
      </section>

      <section className="p-6">
        <h2 className="text-xl font-semibold mb-2">Catalogo prodotti / Product Catalog</h2>
        <p className="mb-4">
          Il nostro listino comprende oltre 500 articoli attentamente selezionati: dai salumi ai formaggi
          stagionati, dai piatti pronti ai surgelati, fino ai dolci tipici della tradizione italiana.
        </p>
        <p className="mb-2 font-medium">Ecco una selezione dei nostri prodotti più richiesti:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Capesante gratinate</li>
          <li>Fiocco di latte</li>
          <li>Grattugiato Mix</li>
          <li>Involtini prosciutto</li>
          <li>Stracciatella di bufala</li>
          <li>Bocconcini di mozzarella</li>
          <li>Burrata artigianale</li>
          <li>Lasagne pronte al forno</li>
          <li>Pizza surgelata artigianale</li>
          <li>Gnocchi di patate freschi</li>
          <li>Olive verdi farcite</li>
          <li>Prosciutto crudo stagionato</li>
          <li>Prosciutto cotto alta qualità</li>
          <li>Grana Padano DOP</li>
          <li>Parmigiano Reggiano</li>
          <li>Pecorino stagionato</li>
        </ul>
        <p className="mt-4">Contattaci per ricevere il listino completo o una proposta su misura.</p>
      </section>

      <section className="p-6 bg-gray-100">
        <h2 className="text-xl font-semibold mb-2">Logistica / Logistics</h2>
        <p>
          Il nostro magazzino a San Martino Siccomario è dotato di celle frigorifere e supportato
          da una flotta di furgoni refrigerati. Garantiamo consegne rapide e puntuali per ristoranti,
          bar, negozi di alimentari e supermercati.
        </p>
      </section>

      <section className="p-6">
        <h2 className="text-xl font-semibold mb-2">Contatti / Contact</h2>
        <p>Email: <a href="mailto:info@mgosrl.it" className="text-blue-600">info@mgosrl.it</a></p>
        <p>Sede operativa: San Martino Siccomario (PV), Italia</p>
      </section>

      <footer className="p-6 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} MGO srl. Tutti i diritti riservati.</p>
        <p>Italiano | English | Deutsch | Français</p>
      </footer>
    </div>
  );
}
