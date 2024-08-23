import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MicIcon, FileTextIcon, BrainIcon, BatteryIcon, WifiIcon, CloudIcon, ShareIcon } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MicIcon className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">Olzo</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#specs">
            Specifications
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Olzo: AI-Powered Digital Voice Recorder
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Capture your thoughts, meetings, and ideas with crystal-clear audio, AI transcription, and seamless sharing.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Join Waiting List</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>High-Quality Recording</CardTitle>
                </CardHeader>
                <CardContent>
                  <MicIcon className="h-12 w-12 mb-4" />
                  <p>Crystal-clear audio capture for all your recording needs.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>AI Transcription</CardTitle>
                </CardHeader>
                <CardContent>
                  <FileTextIcon className="h-12 w-12 mb-4" />
                  <p>Accurate transcriptions powered by advanced AI models.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Smart Organization</CardTitle>
                </CardHeader>
                <CardContent>
                  <BrainIcon className="h-12 w-12 mb-4" />
                  <p>Intelligent categorization and search for easy retrieval.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <ol className="grid gap-6 md:grid-cols-3">
              <li className="flex flex-col items-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">1</div>
                <h3 className="text-xl font-bold">Record</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">Capture your audio with a single button press.</p>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">2</div>
                <h3 className="text-xl font-bold">Transcribe & Analyze</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">AI transcribes, summarizes, and paraphrases your recordings.</p>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">3</div>
                <h3 className="text-xl font-bold">Share & Organize</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">Easily share and manage your recordings and insights.</p>
              </li>
            </ol>
          </div>
        </section>
        <section id="specs" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Device Specifications</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Audio Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <MicIcon className="h-8 w-8 mb-2" />
                  <p>High-fidelity recording with noise cancellation</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Battery Life</CardTitle>
                </CardHeader>
                <CardContent>
                  <BatteryIcon className="h-8 w-8 mb-2" />
                  <p>Up to 24 hours of continuous recording</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Connectivity</CardTitle>
                </CardHeader>
                <CardContent>
                  <WifiIcon className="h-8 w-8 mb-2" />
                  <p>Wi-Fi and Bluetooth for seamless syncing</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Storage Capacity</CardTitle>
                </CardHeader>
                <CardContent>
                  <CloudIcon className="h-8 w-8 mb-2" />
                  <p>Up to 168 hours of recordings with cloud backup option</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>AI Capabilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <BrainIcon className="h-8 w-8 mb-2" />
                  <p>Powered by OpenAI ChatGPT and Anthropic Claude for transcription, summarization, and paraphrasing</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Sharing</CardTitle>
                </CardHeader>
                <CardContent>
                  <ShareIcon className="h-8 w-8 mb-2" />
                  <p>Share transcripts and summaries to Notion, email, Obsidian, and more</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Seamless Sharing and Integration</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Olzo doesn't just record and transcribe - it integrates seamlessly with your workflow. Share your transcripts, 
                  summaries, and key insights directly to Notion, your email, Obsidian, and other popular productivity tools. 
                  Transform your ideas into action with just a few taps.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Be the First to Experience Olzo</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join our waiting list to get early access and exclusive offers when Olzo launches.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Join Waiting List</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By joining, you agree to our{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Olzo. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}