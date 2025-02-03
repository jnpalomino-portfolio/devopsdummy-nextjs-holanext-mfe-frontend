import { QueryBackendButton } from 'app/query-backend-button';

export default function Page() {
  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="text-center max-w-screen-sm mb-10">
          <h1 className="text-stone-200 font-bold text-2xl">
            Devops Dummy TIGO
          </h1>
          <p className="text-stone-400 mt-5">
            Esta es una aplicación dummy del equipo DevOps de TIGO.
          </p>
          <QueryBackendButton>Consultar Backend</QueryBackendButton>
        </div>
      </div>
    </div>
  );
}
