import AsideFiles from "../components/AsideFiles";
import Breadcrumb from "../components/Breadcrumb";

export default function SobreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row h-full">
      <AsideFiles />
      <main className="flex-grow overflow-y-auto">
        <Breadcrumb />
        {children}
      </main>
    </div>
  );
}
