import { Header } from "@/app/components/Header";


export default function RestaurantLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main>
  <Header />
  <div className="flex mx-auto w-2/3 justify-between items-start mt-4">
    {children}
  </div>
</main>

	);
}
