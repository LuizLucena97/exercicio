import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card className="w-[550px]">
        <CardHeader>
          <CardTitle>Edit profile</CardTitle>
          <CardDescription>Make changes to yor profile here. Click save when you're done.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-3 gap-2">
          <div className="flex items-center justify-end">
            <Label htmlFor="name">Name</Label>
          </div>
          <Input className="col-span-2" id="name" placeholder="Email" />

          <div className="flex items-center justify-end">
            <Label htmlFor="name">Username</Label>
          </div>
          <Input className="col-span-2" id="name" placeholder="Username" />

        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Save changes</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
