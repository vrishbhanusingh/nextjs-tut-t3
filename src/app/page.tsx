

import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";
export const dynamic = "force-dynamic";
// import { desc } from 'drizzle-orm';

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


export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (images, { desc }) => [desc(images.id)],
  });

  

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">
        hello, kya haal hai?
        Please sign in above
        </div>
        
        </SignedOut> 
      
      <div className="flex flex-row">
      <SignedIn>
      <div className=" flex flex-wrap gap-4">
        <div className="flex flex-col">
        {images.map((image) => (
          <div key={image.id} className = "flex flex-col w-48 h-40 mb-4"> <img src={image?.url} alt = "image" />
          <div>{image.name} </div>
          </div>
        ))}
      </div>
      </div>
      </SignedIn>
      </div>
    </main>
  );
}
