import Link from "next/link";
const mockUrls = [
  "https://utfs.io/f/31e5eadf-54c5-4565-b703-597a2129635b-o8t9sk.png",
  "https://utfs.io/f/5e4fa48a-256c-4a6c-b45d-457513f31d7b-o8t8cy.png",
  "https://utfs.io/f/4a25d740-5a24-47ed-9435-3203b6e9eff4-lb3zla.png",
  "https://utfs.io/f/74390281-6652-4c1c-8fbf-e014b96e9176-o8tahg.png"
]

const mockImages = mockUrls.map((url, index) => ({
id: index + 1,
url,

}));


export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      hello, kya haal hai?

      <div className=" flex flex-wrap gap-4">
        {[...mockImages,...mockImages,...mockImages].map((image) => (
          <div key={image.id} className = "w-48 h-40 mb-4">
            <img src={image.url} alt = "image" />
          </div>

        ))
}</div>
    </main>
  );
}
