import { CreateDescription } from "@/app/actions";
import Counter from "@/app/components/Counter";
import CreationButtonBar from "@/app/components/CreationButtonBar";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tighter transition-colors">
          Pleace description your home as good as you can!
        </h2>
      </div>

      <form action={CreateDescription}>
        <input type="hidden" name="homeId" value={params.id} />

        <div className="w-3/5 mx-auto flex flex-col mt-10 gap-y-5 mb-36">
          <div className="flex flex-col gap-y-2">
            <Label>Title</Label>
            <Input
              type="text"
              name="title"
              required
              placeholder="Short and Simple...."
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <Label>Description</Label>
            <Textarea
              name="description"
              required
              placeholder="Please describe your home...."
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <Label>Price</Label>
            <Input
              type="number"
              name="price"
              required
              placeholder="Price per Night in USD"
              min={10}
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <Label>Image</Label>
            <Input type="file" name="image" required />
          </div>

          {/* ------ Card Sections ------ */}
          <Card>
            <CardHeader className="flex flex-col gap-y-5">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h3 className="underline font-medium">Guests</h3>
                  <p className="text-muted-foreground text-sm">
                    How many guests do you want?
                  </p>
                </div>
                <Counter name="guest" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h3 className="underline font-medium">Rooms</h3>
                  <p className="text-muted-foreground text-sm">
                    How many Rooms do you have?
                  </p>
                </div>
                <Counter name="room" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h3 className="underline font-medium">Bathrooms</h3>
                  <p className="text-muted-foreground text-sm">
                    How many Bathrooms do you have?
                  </p>
                </div>
                <Counter name="bathroom" />
              </div>
            </CardHeader>
          </Card>
        </div>

        <CreationButtonBar />
      </form>
    </>
  );
};

export default page;
