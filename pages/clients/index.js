import React from "react";
import { useRouter } from "next/router";
import Link from "next/link"

function clientsPage() {
  const clients = [
    { id: "Max", name: "maximlian" },
    { id: "Elvis", name: "elvisor" },
  ];

  const router = useRouter();
  

  return (
    <div>
      <h1>The Clients Page</h1>
      
        <ul>
          {clients.map((client)=>(
          <li key={client.id} >
              <Link href={`/clients/${client.id}`} >{client.name}</Link>
              </li>))
}
        </ul>
      
    </div>
  );
}

export default clientsPage;
