import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden p-4 justify-center">
      <div className="w-[98%] p-2 fixed top-8 bg-accent text-foreground rounded-xl grid grid-cols-3">
        <div>
          <Button >
            Generate
          </Button>
        </div>
        <div>
          <h2>Bubu and Dudu Time</h2>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}
