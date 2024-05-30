"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { UploadButton } from "@uploadthing/react";
import { useRouter } from "next/navigation";

export function TopNav() {
    const router = useRouter();
    return (
      <nav className="flex  w-full items-center justify-between border-b p-4">
        <div>gallery</div>
        <div><SignedOut><SignInButton />
            </SignedOut>
            {/* Sign in */}
            <div className="flex flex-row">
            <SignedIn>
            <UploadButton 
            endpoint="imageUploader"
            onClientUploadComplete = {() => {
                router.refresh()
            }}/>
                <UserButton/>
                
            </SignedIn>
            </div>
        </div>
      </nav>
    )
  }